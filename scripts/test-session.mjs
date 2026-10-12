import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
import {webcrypto} from 'node:crypto';
const cache=new Map();
function load(file){file=path.resolve(file);if(cache.has(file))return cache.get(file);const exports={};cache.set(file,exports);vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,{exports,require:n=>load(path.resolve(path.dirname(file),n+'.ts')),crypto:webcrypto,Date,Error});return exports;}
const {initialRoom,applyAction,publicRoom,puzzleChooser,normalizeRoom}=load('lib/game.ts');
let now=100000;
function room(kind='puzzle',mode='coop'){const r=initialRoom('TESTROOM','hash-a',{kind,mode,count:24,name:'A'},now);r.players.push({name:'B',hash:'hash-b',ready:false,seen:now,finished:null});return normalizeRoom(r);}
const act=(r,seat,input)=>applyAction(r,seat,{match:r.match,turn:r.turn,round:r.round,...input},now++);
function ready(r){act(r,0,{action:'ready',ready:true});assert.equal(r.started,null);act(r,1,{action:'ready',ready:true});assert.equal(r.started,now-1+3000);now+=3001;}
for(const mode of ['race','coop']){
 const r=room('puzzle',mode);act(r,0,{action:'choose',photo:r.photo,count:24});
 assert.throws(()=>act(r,0,{action:'claim',piece:0}));ready(r);
 act(r,0,{action:'claim',piece:0});act(r,0,{action:'drop',piece:0,x:0,y:0});act(r,1,{action:'claim',piece:1});
 const started=r.started;act(r,0,{action:'pause'});const at=r.pause.at,elapsed=at-started;
 assert.equal(r.boards[mode==='coop'?0:1][1].owner,undefined);
 for(const action of ['claim','drop','move','rotate'])assert.throws(()=>act(r,1,{action,piece:1,x:1,y:0}));
 now+=60000;act(r,0,{action:'resume'});assert.ok(r.pause);act(r,0,{action:'resume',ready:false});assert.equal(r.pause.ready[0],false);act(r,1,{action:'resume'});assert.ok(r.pause);
 act(r,0,{action:'resume'});assert.equal(r.pause,null);assert.equal(now-1-r.started,elapsed);
 assert.equal(r.boards[0][0].placed,true);assert.throws(()=>act(r,0,{action:'rematch',ready:true}));
 // Finish both rounds and make sure pauses are excluded from the recorded duration.
 for(let round=0;round<2;round++){
  const seat=puzzleChooser(r);for(let piece=0;piece<24;piece++){if(r.boards[mode==='coop'?0:seat][piece].placed)continue;act(r,seat,{action:'claim',piece});act(r,seat,{action:'drop',piece,x:piece%6,y:Math.floor(piece/6)});}
  if(round===0){assert.ok(r.results[0].ended-r.results[0].started<1000);act(r,1,{action:'next'});act(r,1,{action:'choose',photo:r.photo,count:24});ready(r);}
 }
 assert.equal(publicRoom(r,0).matchFinished,true);const hashes=r.players.map(p=>p.hash),staleTurn=r.turn;
 act(r,0,{action:'rematch',ready:true});assert.equal(r.phase,'match-ended');act(r,0,{action:'rematch',ready:false});act(r,1,{action:'rematch',ready:true});assert.equal(r.match,0);act(r,0,{action:'rematch',ready:true});
 assert.equal(r.code,'TESTROOM');assert.equal(r.match,1);assert.equal(r.phase,'choosing');assert.equal(puzzleChooser(r),1);assert.equal(r.results.length,0);assert.equal(r.started,null);assert.deepEqual(r.players.map(p=>p.hash),hashes);
 assert.throws(()=>act(r,0,{action:'choose',photo:r.photo,count:24}));assert.throws(()=>act(r,1,{action:'choose',match:0,turn:staleTurn,photo:r.photo,count:24}));
 act(r,1,{action:'choose',photo:r.photo,count:24});assert.ok(r.boards.flat().every(p=>!p.placed));ready(r);
}
const f=room('film'),first={sessionId:'session-1',deck:['one','two'],currentRoundIndex:0,screen:'game',viewingStageIndex:0,maxUnlockedStageIndex:0};
act(f,0,{action:'film',snapshot:first});assert.equal(f.started,null);const key=publicRoom(f,0).filmGuesses.key;
assert.throws(()=>act(f,0,{action:'guess',key,stage:0,text:'prematuro'}));ready(f);act(f,0,{action:'guess',key,stage:0,text:'privado'});
act(f,1,{action:'pause'});assert.throws(()=>act(f,0,{action:'film',snapshot:{...first,viewingStageIndex:1}}));act(f,0,{action:'resume'});act(f,1,{action:'resume'});
const oldTurn=f.turn;act(f,0,{action:'film',snapshot:{...first,currentRoundIndex:1}});assert.equal(f.started,null);assert.ok(f.players.every(p=>!p.ready));assert.throws(()=>act(f,0,{action:'ready',ready:true,turn:oldTurn}));ready(f);
act(f,0,{action:'film',snapshot:{...f.film,screen:'victory'}});act(f,0,{action:'rematch',ready:true});act(f,1,{action:'rematch',ready:true});assert.equal(f.film,null);assert.equal(Object.keys(f.guesses).length,0);assert.equal(publicRoom(f,1).controller,1);
assert.throws(()=>act(f,0,{action:'film',snapshot:first}));act(f,1,{action:'film',snapshot:{...first,sessionId:'session-2'}});ready(f);act(f,1,{action:'film',snapshot:{...f.film,screen:'victory'}});act(f,0,{action:'rematch',ready:true});act(f,1,{action:'rematch',ready:true});assert.equal(publicRoom(f,0).controller,0);
const j=room('journey');ready(j);act(j,1,{action:'pause'});assert.equal(publicRoom(j,0).journeyView.paused,true);assert.throws(()=>act(j,0,{action:'journey-reveal',encounter:0,step:0}));act(j,0,{action:'resume'});act(j,1,{action:'resume'});assert.equal(j.journey.paused,false);
j.journey.finished=true;j.journey.completed=[{encounter:0,ended:now,players:['A','B']}];act(j,1,{action:'journey-next',encounter:0,step:0});assert.equal(j.started,null);assert.equal(j.journey.encounter,1);ready(j);
j.journey.encounter=6;j.journey.finished=true;act(j,0,{action:'rematch',ready:true});act(j,1,{action:'rematch',ready:true});assert.equal(j.journey.encounter,0);assert.equal(j.journey.completed.length,0);assert.equal(j.match,1);
assert.ok(!JSON.stringify(publicRoom(j,1)).includes('hash-a'));
console.log('Sessões: prontidão por rodada, contagem sincronizada, bloqueio durante pausa, relógio e resultados sem pausas, retomada com duas confirmações, revanche bilateral, mesmas credenciais, escolhas alternadas, ações antigas rejeitadas e privacidade preservada.');
