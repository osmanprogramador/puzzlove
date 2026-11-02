import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
import {webcrypto} from 'node:crypto';
const cache=new Map();
function load(file){file=path.resolve(file);if(cache.has(file))return cache.get(file);const exports={};cache.set(file,exports);vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,{exports,require:n=>load(path.resolve(path.dirname(file),n+'.ts')),crypto:webcrypto,Date,Error});return exports;}
const {initialRoom,applyAction,publicRoom,normalizeRoom}=load('lib/game.ts'),{newWordGame}=load('lib/words.ts'),{wordCatalog}=load('lib/word-catalog.ts');
let now=Date.now()-1000000;
const room=normalizeRoom(initialRoom('WORDTEST','hash-a',{kind:'words',wordJudging:'circle',mode:'race',name:'A',wordLevel:'misto',wordCount:5},now));
room.players.push({name:'B',hash:'hash-b',ready:false,seen:now,finished:null});assert.equal(room.kind,'words');assert.equal(room.mode,'coop');assert.equal(room.phase,'ready');
assert.equal(wordCatalog.length,100);assert.equal(new Set(wordCatalog.map(w=>w.id)).size,100);
assert.equal(wordCatalog.filter(w=>w.level==='cotidiano').length,30);assert.equal(wordCatalog.filter(w=>w.level==='desafio').length,70);
assert.equal(new Set(wordCatalog.map(w=>w.term.normalize('NFC').toLocaleLowerCase('pt-BR'))).size,100);
for(const level of ['cotidiano','desafio']){const w=newWordGame({wordLevel:level,wordCount:15});assert.equal(w.count,15);assert.ok(w.deck.every(id=>wordCatalog.find(w=>w.id===id).level===level));assert.equal(newWordGame({wordLevel:level,wordCount:12},w.deck).count,12);}
const mixed=newWordGame({wordLevel:'misto',wordCount:10}),again=newWordGame({wordLevel:'misto',wordCount:10},mixed.deck);assert.ok(again.deck.every(id=>!mixed.deck.includes(id)));assert.equal(new Set(again.deck).size,10);
for(const w of wordCatalog){assert.ok(w.meaning.length>15);assert.ok(w.example.length>15);assert.ok(w.source.startsWith('https://dicionario.priberam.org/'));}
const act=(seat,input)=>applyAction(room,seat,{match:room.match,turn:room.turn,wordRound:room.words.index,...input},now++);
const ready=()=>{act(0,{action:'ready',ready:true});assert.equal(room.started,null);act(1,{action:'ready',ready:true});assert.throws(()=>act(1,{action:'words-answer',text:'antes da contagem'}));now+=3001;};
let state=publicRoom(room,0);assert.equal(state.words,undefined);assert.equal(state.wordsView.word,null);assert.ok(!JSON.stringify(state).includes('deck'));
assert.throws(()=>act(0,{action:'words-answer',text:'antes'}));ready();
for(let index=0;index<5;index++) {
 const w=room.words,term=wordCatalog.find(e=>e.id===w.deck[index]),secret='Segredo criativo de A '+index;
 state=publicRoom(room,1);assert.equal(state.wordsView.word.term,term.term);assert.equal(state.wordsView.word.meaning,undefined);assert.equal(state.wordsView.word.source,undefined);assert.equal(JSON.stringify(state).includes(term.meaning),false);assert.equal(state.words,undefined);
 assert.throws(()=>act(0,{action:'words-grade',grade:2}));assert.throws(()=>act(0,{action:'words-answer',text:''}));assert.throws(()=>act(0,{action:'words-answer',text:'x'.repeat(501)}));assert.throws(()=>act(0,{action:'words-answer',text:'stale',wordRound:index+1}));
 act(0,{action:'pause'});assert.throws(()=>act(0,{action:'words-answer',text:secret}));act(1,{action:'resume'});assert.ok(room.pause);act(0,{action:'resume'});assert.equal(room.pause,null);
 act(0,{action:'words-answer',text:secret});state=publicRoom(room,1);assert.equal(state.wordsView.answers[0].submitted,true);assert.equal(state.wordsView.answers[0].text,undefined);assert.equal(state.wordsView.answers[0].passed,undefined);assert.ok(!JSON.stringify(state).includes(secret));assert.equal(publicRoom(room,0).wordsView.answers[0].text,secret);
 assert.throws(()=>act(0,{action:'words-answer',text:'mudei'}));assert.throws(()=>act(0,{action:'words-next'}));
 act(1,{action:'words-answer',text:'Resposta de B',passed:index===4});state=publicRoom(room,1);assert.equal(state.wordsView.answers[0].text,secret);assert.equal(state.wordsView.word.meaning,term.meaning);assert.equal(w.stage,'judging');assert.equal(state.wordsView.answers[1].text,index===4?'':'Resposta de B');
 assert.throws(()=>act(1,{action:'words-answer',text:'depois de ver'}));assert.throws(()=>act(0,{action:'words-grade',target:0,grade:2}));
 for(const grade of [-1,3,1.5,'2',NaN])assert.throws(()=>act(1,{action:'words-grade',grade}));
 assert.throws(()=>act(1,{action:'words-confirm'}));
 if(index===4){assert.throws(()=>act(0,{action:'words-grade',grade:1}));assert.equal(w.grades[1],0);}else act(0,{action:'words-grade',grade:2});
 act(1,{action:'words-grade',grade:1});act(1,{action:'words-confirm'});assert.throws(()=>act(1,{action:'words-grade',grade:2}));act(1,{action:'words-confirm',ready:false});act(1,{action:'words-grade',grade:0});act(1,{action:'words-grade',grade:1});act(1,{action:'words-confirm'});
 const before=[...w.scores];assert.deepEqual(before,[index,index*2]);act(0,{action:'words-confirm'});assert.equal(w.history.length,index+1);assert.equal(w.scores[0],index+1);assert.equal(w.scores[1],index===4?8:(index+1)*2);assert.throws(()=>act(0,{action:'words-confirm'}));assert.equal(w.history.length,index+1);
 if(index<4){const oldTurn=room.turn;act(1,{action:'words-next'});assert.equal(room.started,null);assert.ok(room.players.every(p=>!p.ready));assert.throws(()=>act(0,{action:'words-next',turn:oldTurn,wordRound:index}));assert.equal(room.words.index,index+1);ready();}
}
assert.equal(room.words.stage,'finished');assert.equal(room.phase,'match-ended');assert.ok(room.players.every(p=>p.finished));assert.equal(publicRoom(room,1).matchFinished,true);assert.equal(room.words.scores[0]/2,2.5);assert.equal(room.words.scores[1]/2,4);assert.equal(publicRoom(room,1).wordsView.history.length,5);assert.throws(()=>act(0,{action:'words-next'}));
const old=room.words.deck,hashes=room.players.map(p=>p.hash);act(0,{action:'rematch',ready:true});assert.equal(room.match,0);act(1,{action:'rematch',ready:true});assert.equal(room.match,1);assert.equal(room.code,'WORDTEST');assert.equal(room.words.index,0);assert.equal(room.words.history.length,0);assert.deepEqual([...room.words.scores],[0,0]);assert.ok(room.words.deck.every(id=>!old.includes(id)));assert.deepEqual(room.players.map(p=>p.hash),hashes);assert.equal(publicRoom(room,1).wordsView.word,null);assert.ok(!JSON.stringify(publicRoom(room,1)).includes('hash-a'));assert.throws(()=>act(0,{action:'words-answer',match:0,text:'antigo'}));ready();
if(fs.existsSync('lib/resume.ts')){const {savedRoom}=load('lib/resume.ts');assert.equal(savedRoom('{"code":"WORDTEST","kind":"words"}').kind,'words');}
console.log('Duelo: 100 verbetes (30 médios e 70 difíceis), níveis e sorteios sem repetição, respostas/definições/futuras palavras ocultas, duas confirmações, pausa, 1/0,5/0 pontos sem acúmulo, passe, proteção de avaliação própria, pontuação única, resumo, retomada e revanche.');

// New rooms: the host records every score; groups must fill the chosen capacity.
for(const size of [3,4]){
 const group=normalizeRoom(initialRoom('GROUP'+size,'host',{kind:'words',wordPlayers:size,wordCount:5,name:'Anfitrião'},now));
 for(let i=1;i<size;i++)group.players.push({name:'Pessoa '+i,hash:'hash-'+i,ready:false,seen:now,finished:null});
 const go=(seat,input)=>applyAction(group,seat,{match:group.match,turn:group.turn,wordRound:group.words.index,...input},now++);
 assert.equal(group.words.judging,'host');assert.equal(group.words.capacity,size);assert.equal(group.words.scores.length,size);
 for(let i=0;i<size;i++){go(i,{action:'ready',ready:true});if(i<size-1)assert.equal(group.started,null);}now+=3001;
 go(size-1,{action:'pause'});for(let i=0;i<size;i++){go(i,{action:'resume'});if(i<size-1)assert.ok(group.pause);}assert.equal(group.pause,null);
 for(let i=0;i<size;i++){go(i,{action:'words-answer',text:'Segredo da pessoa '+i});if(i<size-1){assert.equal(group.words.stage,'writing');const view=publicRoom(group,size-1).wordsView;assert.equal(view.word.meaning,undefined);assert.equal(view.answers[0].text,undefined);}}
 assert.equal(group.words.stage,'judging');assert.equal(publicRoom(group,2).wordsView.names.length,size);assert.ok(publicRoom(group,2).wordsView.word.meaning);
 assert.throws(()=>go(1,{action:'words-grade',target:0,grade:2}));assert.throws(()=>go(1,{action:'words-confirm'}));assert.throws(()=>go(0,{action:'words-confirm'}));assert.throws(()=>go(0,{action:'words-grade',target:size,grade:2}));
 for(let i=0;i<size;i++)go(0,{action:'words-grade',target:i,grade:i%3});
 go(0,{action:'words-grade',target:0,grade:2});go(0,{action:'words-grade',target:0,grade:1});go(0,{action:'words-confirm'});
 assert.equal(group.words.scores[0],1);assert.equal(group.words.history.length,1);assert.throws(()=>go(0,{action:'words-confirm'}));assert.throws(()=>go(1,{action:'words-next'}));
 go(0,{action:'words-next'});assert.equal(group.started,null);assert.equal(group.words.answers.length,size);assert.ok(group.players.every(p=>!p.ready));
}
const names=Array.from({length:25},(_,i)=>'Pessoa '+(i+1));
assert.throws(()=>newWordGame({wordMode:'local',wordNames:['Uma pessoa']}));
const table=normalizeRoom(initialRoom('LOCAL001','coordinator',{kind:'words',wordMode:'local',wordNames:names,wordCount:5,name:'Mesa'},now));
const localAct=input=>applyAction(table,0,{match:table.match,turn:table.turn,wordRound:table.words.index,...input},now++);
assert.equal(table.words.capacity,1);assert.equal(table.words.scores.length,25);assert.equal(publicRoom(table,0).wordsView.names.length,25);
for(let i=0;i<5;i++){
 localAct({action:'ready',ready:true});now+=3001;assert.equal(publicRoom(table,0).wordsView.word.meaning,undefined);
 assert.throws(()=>localAct({action:'words-answer',text:'No papel'}));assert.throws(()=>localAct({action:'words-confirm'}));
 localAct({action:'words-local-reveal'});assert.ok(publicRoom(table,0).wordsView.word.meaning);assert.equal(table.words.answers.filter(Boolean).length,0);
 for(let seat=0;seat<25;seat++)localAct({action:'words-grade',target:seat,grade:seat%3});
 localAct({action:'words-confirm'});assert.equal(table.words.history.length,i+1);assert.throws(()=>localAct({action:'words-confirm'}));
 if(i<4)localAct({action:'words-next'});
}
assert.equal(table.phase,'match-ended');assert.equal(table.words.scores[1],5);localAct({action:'rematch',ready:true});assert.equal(table.match,1);assert.equal(table.words.names.length,25);assert.equal(table.words.capacity,1);assert.ok(table.words.scores.every(score=>score===0));
console.log('Grupos: 3/4 online, prontidão e pausa de todos, segredos até último envio, apenas anfitrião avalia/confirma/avança; presencial com 25 pessoas, respostas no papel, revelação manual, placar único e revanche preservando participantes.');
