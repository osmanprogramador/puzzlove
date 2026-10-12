import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { webcrypto } from 'node:crypto';
function load(file,require=()=>{}) {const exports={};vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,{exports,require,crypto:webcrypto,Date,Error});return exports;}
const catalog=load('lib/catalog.ts'),{initialRoom,applyAction,publicRoom}=load('lib/game.ts',()=>catalog);
let now=10000;
function start(mode='coop',count=24,rotation=false,kind='puzzle') {const room=initialRoom('ROOMTEST','a',{mode,count,rotation,kind},now);room.players.push({name:'B',hash:'b',ready:false,seen:now,finished:null});if(kind==='puzzle')applyAction(room,0,{action:'choose',round:0,photo:room.photo,count,rotation},now);for(let seat=0;seat<2;seat++)applyAction(room,seat,{action:'ready',round:0,ready:true},now);now+=3001;return room;}
function act(room,seat,input){applyAction(room,seat,{round:room.round,...input},now++);}
function drop(room,id,x,y,seat=0){act(room,seat,{action:'claim',piece:id});act(room,seat,{action:'drop',piece:id,x,y});}
const room=start();assert.equal(room.boards[0].length,24);
drop(room,0,2,2);drop(room,1,3.08,2.05);assert.equal(room.boards[0][0].group,room.boards[0][1].group);assert.equal(room.boards[0][1].x-room.boards[0][0].x,1);
act(room,0,{action:'claim',piece:1});assert.throws(()=>act(room,1,{action:'claim',piece:0}));act(room,0,{action:'move',piece:1,x:4,y:3});assert.equal(publicRoom(room,1).pieces[1].cursor.x,4);
act(room,0,{action:'drop',piece:1,x:4,y:3});assert.equal(room.boards[0][0].x,3);assert.equal(room.boards[0][0].y,3);
act(room,1,{action:'claim',piece:0});act(room,1,{action:'drop',piece:0,tray:true});assert.ok(room.boards[0].slice(0,2).every(p=>p.x===-1&&p.group===undefined));
act(room,0,{action:'claim',piece:2});act(room,0,{action:'organize',piece:2,tray:2});assert.equal(room.boards[0][2].tray,2);assert.equal(room.boards[0][2].owner,undefined);
drop(room,0,2,2);drop(room,1,3,2);act(room,1,{action:'claim',piece:0});act(room,1,{action:'drop',piece:0,x:0,y:0});assert.ok(room.boards[0].slice(0,2).every(p=>p.placed&&p.by===1));
drop(room,2,2,0);assert.equal(room.boards[0][2].placed,true);
const rotating=start('race',48,true);assert.equal(rotating.boards[0].length,48);assert.equal(JSON.stringify(rotating.boards[0].map(p=>p.rotation)),JSON.stringify(rotating.boards[1].map(p=>p.rotation)));rotating.boards[0][0].rotation=1;drop(rotating,0,0,0);assert.equal(rotating.boards[0][0].placed,false);act(rotating,0,{action:'claim',piece:0});for(let i=0;i<3;i++)act(rotating,0,{action:'rotate',piece:0});act(rotating,0,{action:'drop',piece:0,x:0,y:0});assert.equal(rotating.boards[0][0].placed,true);assert.equal(rotating.boards[1][0].placed,false);
const film=start('coop',24,false,'film');const snapshot={sessionId:'session-a',deck:['film-1'],currentRoundIndex:0,screen:'game',viewingStageIndex:0,maxUnlockedStageIndex:0};act(film,0,{action:'film',snapshot});for(let seat=0;seat<2;seat++)act(film,seat,{action:'ready',ready:true});now+=3001;const key=publicRoom(film,0).filmGuesses.key;
act(film,0,{action:'guess',key,stage:0,text:'Meu segredo'});const guest=publicRoom(film,1);assert.equal(guest.guesses,undefined);assert.equal(guest.filmGuesses.players[0][0].text,undefined);assert.equal(guest.filmGuesses.players[0][0].submitted,true);assert.equal(publicRoom(film,0).filmGuesses.own[0].text,'Meu segredo');
snapshot.maxUnlockedStageIndex=1;snapshot.viewingStageIndex=1;act(film,0,{action:'film',snapshot});assert.throws(()=>act(film,0,{action:'guess',key,stage:0,text:'Reescrever o passado'}));assert.throws(()=>act(film,1,{action:'guess',key:'outra-rodada',stage:1,text:'Inválido'}));
act(film,1,{action:'guess',key,stage:1,text:'Resposta B'});snapshot.maxUnlockedStageIndex=5;snapshot.viewingStageIndex=5;act(film,0,{action:'film',snapshot});assert.equal(publicRoom(film,0).filmGuesses.players[1][1].text,'Resposta B');act(film,0,{action:'guess',key,stage:5,text:'Última imagem'});
snapshot.answerRevealed=true;act(film,0,{action:'film',snapshot});assert.throws(()=>act(film,0,{action:'guess',key,stage:5,text:'Já vi o título'}));snapshot.currentRoundIndex=1;snapshot.deck.push('film-2');snapshot.answerRevealed=false;snapshot.maxUnlockedStageIndex=0;snapshot.viewingStageIndex=0;act(film,0,{action:'film',snapshot});assert.equal(publicRoom(film,0).filmGuesses.own.length,0);
console.log('Novas funções verificadas: conjuntos, travas concorrentes, devolução, bandejas, rotação, dificuldades rápidas, privacidade dos palpites, última imagem e isolamento entre rodadas.');
