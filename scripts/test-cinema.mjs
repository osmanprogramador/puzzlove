import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import {webcrypto} from 'node:crypto';
const exports={};vm.runInNewContext(ts.transpileModule(fs.readFileSync('lib/cinema.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,{exports,crypto:webcrypto,structuredClone});
const {startCinema,cinemaTransition}=exports,catalog=JSON.parse(fs.readFileSync('public/filme/catalog.json','utf8')),oldCatalog=vm.runInNewContext(fs.readFileSync('public/filme/database.js','utf8')+'; MOVIE_DATABASE');
assert.equal(JSON.stringify(catalog),JSON.stringify(oldCatalog));assert.equal(catalog.length,115);assert.equal(catalog.filter(m=>m.category==='natal').length,25);
const session=startCinema(catalog,'natal',30,['A','B'],'final',()=>.5);assert.equal(session.deck.length,25);assert.equal(new Set(session.deck).size,25);assert.ok(session.deck.every(id=>catalog.find(m=>m.id===id).category==='natal'));assert.equal(session.requestedRounds,30);
assert.throws(()=>startCinema(catalog,'unknown',10,['A','B'],'final'));
let s=startCinema(catalog,'todos',5,['A','B'],'final');const before=JSON.stringify(s);assert.throws(()=>cinemaTransition(s,'frame',2));assert.equal(JSON.stringify(s),before);assert.throws(()=>cinemaTransition(s,'reveal'));
for(let i=1;i<6;i++)s=cinemaTransition(s,'frame',i);s=cinemaTransition(s,'frame',2);assert.equal(s.maxUnlockedStageIndex,5);assert.equal(s.viewingStageIndex,2);s=cinemaTransition(s,'reveal');assert.equal(s.answerRevealed,true);assert.equal(s.players.p1.score,0);assert.throws(()=>cinemaTransition(s,'frame',0));assert.throws(()=>cinemaTransition(s,'next'));
s=cinemaTransition(s,'choice',{seat:0,choice:'3'});assert.throws(()=>cinemaTransition(s,'next'));assert.throws(()=>cinemaTransition(s,'choice',{seat:1,choice:'7'}));s=cinemaTransition(s,'choice',{seat:1,choice:'0'});s=cinemaTransition(s,'next');assert.equal(s.players.p1.score,4);assert.equal(s.players.p2.score,0);assert.equal(s.currentRoundIndex,1);assert.equal(s.maxUnlockedStageIndex,0);assert.equal(s.answerRevealed,false);assert.throws(()=>cinemaTransition(s,'next'));
for(let round=1;round<5;round++){for(let i=1;i<6;i++)s=cinemaTransition(s,'frame',i);s=cinemaTransition(s,'reveal');s=cinemaTransition(s,'choice',{seat:0,choice:'6'});s=cinemaTransition(s,'choice',{seat:1,choice:'1'});s=cinemaTransition(s,'next');}
assert.equal(s.screen,'victory');assert.equal(s.players.p1.score,8);assert.equal(s.players.p2.score,24);assert.throws(()=>cinemaTransition(s,'next'));
let immediate=startCinema(catalog,'todos',5,['A','B'],'immediate');immediate=cinemaTransition(immediate,'frame',1);immediate=cinemaTransition(immediate,'frame',0);immediate=cinemaTransition(immediate,'reveal','both');assert.equal(immediate.players.p1.score,5);assert.equal(immediate.players.p2.score,5);assert.throws(()=>cinemaTransition(immediate,'reveal','both'));immediate=cinemaTransition(immediate,'next');assert.equal(immediate.currentRoundIndex,1);
// The new interface can continue snapshots saved by the older online engine.
const legacy={...session,currentRoundIndex:24,maxUnlockedStageIndex:5,viewingStageIndex:5,answerRevealed:true,modalOpen:true,choices:['2','4']};const resumed=cinemaTransition(legacy,'next');assert.equal(resumed.screen,'victory');assert.equal(resumed.players.p1.score,5);assert.equal(resumed.players.p2.score,3);
const ui=fs.readFileSync('app/Game.tsx','utf8');assert.ok(ui.includes('<Cinema room={room}'));assert.ok(!ui.includes('<iframe'));assert.ok(!ui.includes('movie-snapshot'));
console.log('Cinema integrado: 115 títulos preservados, 25 de Natal, sem repetições, bloqueio de pistas, pontuação final/imediata, revisão sem recuperar pontos, resultado e retomada de sessões antigas sem iframe.');
