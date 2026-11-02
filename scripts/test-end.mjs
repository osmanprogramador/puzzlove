import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {createRequire} from 'node:module';
import {webcrypto} from 'node:crypto';
const nativeRequire=createRequire(import.meta.url),cache=new Map();
function load(file){file=path.resolve(file);if(cache.has(file))return cache.get(file);const exports={};cache.set(file,exports);vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,{exports,require:n=>{if(!n.startsWith('.'))return nativeRequire(n);const base=path.resolve(path.dirname(file),n);const resolved=[base,base+'.ts',base+'.tsx'].find(p=>fs.existsSync(p)&&fs.statSync(p).isFile());if(!resolved)throw Error('Missing module '+n);return load(resolved);},crypto:webcrypto,Date,Error,AbortController,URLSearchParams,setTimeout,clearTimeout,setInterval,clearInterval});return exports;}

const {initialRoom,applyAction,publicRoom,matchFinished,normalizeRoom}=load('lib/game.ts');
const Summary=load('app/MatchSummary.tsx').default,Controls=load('app/SessionControls.tsx').default,Cinema=load('app/Cinema.tsx').default;
let now=Date.now()-1000000;
function make(kind,mode='coop'){
 const r=normalizeRoom(initialRoom('ENDTEST1','a',{kind,mode,count:24,wordPlayers:2,name:'Organizador'},now));
 const n=kind==='words'?3:2;for(let i=1;i<n;i++)r.players.push({name:i===1?'Luane':'Pessoa B',hash:'h'+i,ready:false,seen:now,finished:null});return r;
}
const act=(r,seat,input)=>applyAction(r,seat,{match:r.match,turn:r.turn,round:r.round,wordRound:r.words?.index,...input},now++);
function start(r){if(r.kind==='puzzle')act(r,0,{action:'choose',photo:r.photo,count:24});for(let i=0;i<r.players.length;i++)act(r,i,{action:'ready',ready:true});now+=3001;}
for(const kind of ['puzzle','film','journey','words'])for(const paused of [false,true]){
 const r=make(kind);if(kind==='film')r.film={screen:'game',players:{p1:{name:'Organizador',score:3},p2:{name:'Luane',score:2}},currentRoundIndex:1,roundScored:false};start(r);
 if(kind==='puzzle'){act(r,0,{action:'claim',piece:0});act(r,0,{action:'drop',piece:0,x:0,y:0});}
 if(kind==='words')act(r,1,{action:'words-answer',text:'Segredo ainda não revelado'});
 const completed=r.journey?.completed.length,results=r.results.length;
 if(paused)act(r,0,{action:'pause'});const frozen=paused?r.pause.at-r.started:undefined;now+=60000;
 assert.throws(()=>act(r,0,{action:'end-match'}));if(kind==='words'||kind==='film')assert.throws(()=>act(r,1,{action:'end-match',confirmed:true}));
 act(r,0,{action:'end-match',confirmed:true});assert.ok(matchFinished(r));assert.equal(r.phase,'match-ended');assert.equal(r.pause,null);assert.equal(r.results.length,results);if(paused)assert.equal(r.endedEarly.elapsed,frozen);if(kind==='journey')assert.equal(r.journey.completed.length,completed);
 const at=r.endedEarly.at;act(r,0,{action:'end-match',confirmed:true});assert.equal(r.endedEarly.at,at);
 for(const action of ['ready','choose','drop','resume','film','words-answer','journey-confirm'])assert.throws(()=>act(r,0,{action,text:'não altera',piece:0,x:0,y:0,snapshot:{}}));
 if(kind==='words'){assert.equal(r.words.stage,'writing');const guest=publicRoom(r,2);assert.ok(!JSON.stringify(guest).includes('Segredo ainda não revelado'));assert.equal(guest.wordsView.word.meaning,undefined);}
 const html=renderToStaticMarkup(React.createElement(Summary,{room:publicRoom(r,0),onLeave:()=>{}}));assert.match(html,/Partida encerrada/);assert.ok(!html.includes('Segredo ainda não revelado'));if(kind==='film'){assert.match(html,/3/);assert.equal(r.film.players.p1.score,3);}if(kind==='journey')assert.match(html,/não tem placar/);
 for(let seat=0;seat<r.players.length;seat++)act(r,seat,{action:'rematch',ready:true});assert.equal(r.endedEarly,undefined);assert.equal(r.match,1);assert.equal(matchFinished(r),false);
}
const r=make('words');start(r);for(let seat=1;seat<3;seat++)act(r,seat,{action:'words-answer',text:'Definição'});act(r,0,{action:'words-reveal'});act(r,0,{action:'words-grade',target:0,grade:2});act(r,0,{action:'words-grade',target:1,grade:1});act(r,0,{action:'words-confirm'});act(r,0,{action:'words-next'});start(r);act(r,1,{action:'words-answer',text:'Palavra incompleta'});act(r,0,{action:'end-match',confirmed:true});assert.deepEqual([...r.words.scores],[2,1]);assert.equal(r.words.history.length,1);
const final=renderToStaticMarkup(React.createElement(Summary,{room:publicRoom(r,0),onLeave:()=>{}}));assert.match(final,/Luane/);assert.match(final,/0,5/);assert.ok(!final.includes('Palavra incompleta'));assert.match(final,/1 de 10 palavras/);
for(const kind of ['puzzle','film','journey','words']){
 const fresh=make(kind);const controls=renderToStaticMarkup(React.createElement(Controls,{room:publicRoom(fresh,0),act:async()=>{},connected:true}));assert.match(controls,/Encerrar partida/);assert.match(controls,/Encerrar e ver resultado/);
 act(fresh,0,{action:'end-match',confirmed:true});assert.ok(publicRoom(fresh,0).matchFinished); // Ending before starting has a valid zero-result summary.
 renderToStaticMarkup(React.createElement(Summary,{room:publicRoom(fresh,0),onLeave:()=>{}}));
}
const movie=make('film');movie.film={screen:'game',currentRoundIndex:0,totalRounds:5};const toolbar=renderToStaticMarkup(React.createElement(Cinema,{room:publicRoom(movie,0),act:async()=>{},connected:true,onLeave:()=>{},onPause:()=>{},onEnd:()=>{}}));assert.match(toolbar,/aria-label="Encerrar partida"/);
console.log('Encerramento: quatro jogos, antes de iniciar/em jogo/em pausa, autorização do juiz/controlador, confirmação, relógio congelado, placares confirmados, sem revelar respostas secretas, sem concluir álbum incompleto, bloqueio após encerrar e revanche; controles e resultado React sem erro.');
