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
const {initialRoom,applyAction,publicRoom,normalizeRoom}=load('lib/game.ts'),Duel=load('app/WordDuel.tsx').default,Game=load('app/Game.tsx').default,Ready=load('app/RoundReady.tsx').default;
const menu=renderToStaticMarkup(React.createElement(Game));for(const label of ['Quebra-cabeça','Qual é o Filme?','Caminho a Dois','Duelo das Palavras'])assert.ok(menu.includes(label));assert.ok(!menu.includes('<iframe'));
let now=Date.now()-100000;const room=normalizeRoom(initialRoom('UIWORD01','a',{kind:'words',wordJudging:'circle',wordCount:5,name:'Pessoa A'},now));room.players.push({name:'Pessoa B',hash:'b',ready:false,seen:now,finished:null});
const act=(seat,input)=>applyAction(room,seat,{match:room.match,turn:room.turn,wordRound:room.words.index,...input},now++);
const render=(seat=0)=>renderToStaticMarkup(React.createElement(Duel,{room:publicRoom(room,seat),act:async()=>{},connected:true,onPause:()=>{}}));
const ready=()=>{act(0,{action:'ready',ready:true});act(1,{action:'ready',ready:true});now+=3001;};
const waiting=renderToStaticMarkup(React.createElement(Ready,{room:publicRoom(room,0),act:async()=>{},connected:true,now}));assert.match(waiting,/Palavra 1 de 5/);assert.ok(!waiting.includes(room.words.deck[0]));ready();
let html=render();assert.match(html,/Seu significado secreto/);assert.match(html,/Enviar em segredo/);assert.match(html,/Pausar/);assert.ok(!html.includes('VAMOS DESCOBRIR'));
act(0,{action:'words-answer',text:'<img src=x onerror=alert(1)> sentido secreto'});assert.match(render(),/&lt;img/);assert.ok(!render().includes('<img src=x'));assert.ok(!render(1).includes('sentido secreto'));
for(let index=0;index<5;index++){
 if(index)act(0,{action:'words-answer',text:'Resposta A'});
 act(1,{action:'words-answer',text:'Resposta B',passed:index===4});html=render();assert.match(html,/VAMOS DESCOBRIR/);assert.match(html,/Abrir o verbete/);assert.match(html,/Avalie a resposta de Pessoa B/);assert.ok(html.includes(index===4?'Sua companhia passou':'Valeu pela criatividade'));assert.ok(!html.includes('<iframe'));
 if(index!==4)act(0,{action:'words-grade',grade:2});act(1,{action:'words-grade',grade:1});act(0,{action:'words-confirm'});assert.match(render(),/Cancelar minha confirmação/);act(1,{action:'words-confirm'});
 if(index<4){assert.match(render(),/Pontos registrados!/);assert.match(render(),/Próxima palavra/);act(0,{action:'words-next'});ready();}
}
html=render();assert.match(html,/Pessoa B venceu o duelo!/);assert.match(html,/Resumo do nosso duelo/);assert.match(html,/2,5/);assert.ok(!html.includes('Próxima palavra'));assert.match(html,/1 ponto pelo acerto/);
const jsDir=path.resolve('.sites-runtime/feature-preview/assets');if(fs.existsSync(jsDir)){const code=fs.readdirSync(jsDir).filter(n=>n.endsWith('.js')).map(n=>fs.readFileSync(path.join(jsDir,n),'utf8')).join('');assert.ok(!code.includes('O investigador sagaz encontrou uma pista no bilhete.'));assert.ok(!code.includes('Traço particular do comportamento'));}
console.log('Interface renderizada: quarto jogo no menu, espera sem revelar palavra, escrita/revelação/avaliação/resultado, pontos com vírgula, resumo, respostas escapadas e catálogo privado fora do JavaScript público. Validação visual no navegador permanece separada.');


for(const size of [2,4]){
 const group=normalizeRoom(initialRoom('UIJUDGE1','h',{kind:'words',wordPlayers:size,name:'Organizador'},now));
 for(let i=1;i<=size;i++)group.players.push({name:'Jogador '+i,hash:'h'+i,ready:false,seen:now,finished:null});
 const go=(seat,input)=>applyAction(group,seat,{match:0,turn:group.turn,wordRound:0,...input},now++);
 for(let i=0;i<=size;i++)go(i,{action:'ready',ready:true});now+=3001;
 const draw=seat=>renderToStaticMarkup(React.createElement(Duel,{room:publicRoom(group,seat),act:async()=>{},connected:true,onPause:()=>{}}));
 let judge=draw(0);assert.match(judge,/Você organiza esta rodada/);assert.ok(!judge.includes('<textarea'));assert.match(judge,/Não responde nem participa do placar/);assert.match(draw(1),/Seu significado secreto/);
 for(let i=1;i<=size;i++)go(i,{action:'words-answer',text:'Resposta '+i});judge=draw(0);assert.match(judge,/Todos responderam/);assert.ok(!judge.includes('VAMOS DESCOBRIR'));
 go(0,{action:'words-reveal'});judge=draw(0);assert.match(judge,/Registre os pontos da rodada/);assert.equal((judge.match(/word-person-grade/g)||[]).length,size);assert.ok(!draw(1).includes('word-person-grade'));
}
const table=normalizeRoom(initialRoom('UITABLE1','h',{kind:'words',wordMode:'local',wordNames:['Organizador',...Array.from({length:25},(_,i)=>'Participante '+(i+1))],name:'Organizador'},now));
applyAction(table,0,{action:'ready',ready:true},now);now+=3001;
let paper=renderToStaticMarkup(React.createElement(Duel,{room:publicRoom(table,0),act:async()=>{},connected:true,onPause:()=>{}}));assert.ok(!paper.includes('<textarea'));assert.match(paper,/Todos escreveram · revelar significado/);assert.match(paper,/Participante 25/);assert.ok(!paper.includes('VAMOS DESCOBRIR'));
applyAction(table,0,{action:'words-local-reveal',wordRound:0},now++);paper=renderToStaticMarkup(React.createElement(Duel,{room:publicRoom(table,0),act:async()=>{},connected:true,onPause:()=>{}}));assert.equal((paper.match(/word-person-grade/g)||[]).length,25);
console.log('Interface: juiz sem campo de resposta e fora do placar; participantes respondem; revelação manual pelo juiz; 25 jogadores presenciais.');
