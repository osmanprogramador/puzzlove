import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import {webcrypto} from 'node:crypto';
function load(file,require=()=>{}) {
 const exports={};
 vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,{exports,require,crypto:webcrypto,Date,Error});
 return exports;
}
const catalog=load('lib/catalog.ts');
const {initialRoom,applyAction,normalizeRoom}=load('lib/game.ts',()=>catalog);
let now=10000;
for(const mode of ['coop','race']) {
 const room=initialRoom('TESTROOM','host',{mode,count:100,rounds:3},now);
 room.players.push({name:'Convidada',hash:'guest',ready:false,seen:now,finished:null});
 for(let round=0;round<3;round++) {
  const chooser=round%2;
  assert.throws(()=>applyAction(room,1-chooser,{action:'choose',round,photo:catalog.scenes[round].id,count:100},now));
  applyAction(room,chooser,{action:'choose',round,photo:catalog.scenes[round].id,count:100},now);
  assert.equal(room.boards[0].filter(p=>p.placed).length,0);
  applyAction(room,0,{action:'ready',round,ready:true},now);
  applyAction(room,1,{action:'ready',round,ready:true},now);now+=3001;
  for(let piece=0;piece<100;piece++) {
   applyAction(room,chooser,{action:'claim',round,piece},now++);
   applyAction(room,chooser,{action:'drop',round,piece,x:piece%10,y:Math.floor(piece/10)},now++);
  }
  assert.equal(room.results.length,round+1);
  assert.equal(room.results[round].winner,mode==='coop'?null:chooser);
  assert.equal(room.phase,round===2?'match-ended':'round-ended');
  if(round<2) {
   applyAction(room,0,{action:'next',round},now);
   assert.throws(()=>applyAction(room,0,{action:'next',round},now));
   assert.equal(room.started,null);assert.ok(room.players.every(p=>!p.ready&&!p.finished));
  }
 }
 assert.throws(()=>applyAction(room,0,{action:'next',round:2},now));
}
const legacy=initialRoom('TESTROOM','host',{count:100},now);
delete legacy.round;delete legacy.totalRounds;delete legacy.results;delete legacy.phase;
legacy.boards[0][0].placed=true;legacy.started=now-100;
normalizeRoom(legacy);assert.equal(legacy.totalRounds,1);assert.equal(legacy.phase,'playing');assert.equal(legacy.boards[0][0].placed,true);
console.log('Rodadas 1 → 2 → 3 verificadas nos dois modos: alternância, autorização, reinício, resultados, encerramento e convites antigos.');
