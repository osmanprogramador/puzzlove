import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://127.0.0.1:5173';
const states=new Map();
async function post(body,token='',status=200){const state=states.get(body.code);const response=await fetch(base+'/api/rooms',{method:'POST',headers:{'Content-Type':'application/json','x-player-token':token},body:JSON.stringify({round:state?.round,match:state?.match||0,turn:state?.turn||0,...body})});const data=await response.json();assert.equal(response.status,status,JSON.stringify(data));if(data.room)states.set(data.room.code,data.room);return data;}
async function get(code,token){const res=await fetch(base+'/api/rooms?code='+code,{headers:{'x-player-token':token}});assert.equal(res.status,200);const r=await res.json();states.set(code,r);return r;}
async function create(kind,mode='coop'){const a=await post({action:'create',kind,mode,count:24,name:'QA A'}),b=await post({action:'join',code:a.room.code,name:'QA B'});return {a:a.token,b:b.token,code:a.room.code};}
async function ready({a,b,code}){await post({action:'ready',code,ready:true},a);const r=await post({action:'ready',code,ready:true},b);await new Promise(done=>setTimeout(done,Math.max(0,r.room.started-Date.now()+30)));}
for(const mode of ['coop','race']){
 const r=await create('puzzle',mode),{a,b,code}=r;
 for(let round=0;round<2;round++){
  if(round)await post({action:'next',code},a);
  let state=await get(code,a);const seat=round%2,token=seat?b:a;
  await post({action:'choose',code,photo:state.photo,count:24},token);await ready(r);
  await post({action:'claim',code,piece:0},token);const pause=await post({action:'pause',code},b);assert.equal(pause.room.pieces[0].owner,undefined);
  await post({action:'drop',code,piece:0,x:0,y:0},token,409);await Promise.all([post({action:'resume',code,ready:true},a),post({action:'resume',code,ready:true},b)]);
  assert.equal((await get(code,a)).pause,null);
  for(let piece=0;piece<24;piece++){await post({action:'claim',code,piece},token);await post({action:'drop',code,piece,x:piece%6,y:Math.floor(piece/6)},token);}
 }
 const old=await get(code,a);assert.equal(old.matchFinished,true);await post({action:'rematch',code,ready:true},a);assert.equal((await get(code,b)).match,0);await post({action:'rematch',code,ready:true},b);const again=await get(code,a);assert.equal(again.match,1);assert.equal(again.chooser,1);assert.equal(again.players.length,2);assert.equal(again.results.length,0);
 await post({action:'choose',code,photo:again.photo,count:24,match:0,turn:old.turn},b,409);await post({action:'choose',code,photo:again.photo,count:24},a,409);await post({action:'choose',code,photo:again.photo,count:24},b);await ready(r);
}
const r=await create('film'),{a,b,code}=r;
const snapshot={sessionId:'online-1',deck:['one','two'],currentRoundIndex:0,screen:'game',viewingStageIndex:0,maxUnlockedStageIndex:0,selectedCategory:'natal',requestedRounds:5,scoringMode:'final'};
await post({action:'film',code,snapshot},a);await post({action:'guess',code,key:(await get(code,a)).filmGuesses.key,stage:0,text:'antes'},b,409);await ready(r);
await post({action:'pause',code},a);await post({action:'film',code,snapshot:{...snapshot,viewingStageIndex:1}},a,409);await post({action:'resume',code},b);assert.ok((await get(code,a)).pause);await post({action:'resume',code},a);assert.equal((await get(code,b)).pause,null);
const old=await get(code,a);await post({action:'film',code,snapshot:{...snapshot,currentRoundIndex:1}},a);const next=await get(code,b);assert.equal(next.started,null);assert.ok(next.players.every(p=>!p.ready));await post({action:'ready',code,turn:old.turn,ready:true},b,409);await ready(r);
await post({action:'film',code,snapshot:{...snapshot,currentRoundIndex:1,screen:'victory'}},a);await Promise.all([post({action:'rematch',code,ready:true},a),post({action:'rematch',code,ready:true},b)]);const again=await get(code,b);assert.equal(again.match,1);assert.equal(again.controller,1);assert.equal(again.filmSettings.selectedCategory,'natal');assert.equal(again.film,null);assert.equal(again.players[1].name,'QA B');await post({action:'film',code,snapshot:{...snapshot,sessionId:'online-2'}},a,409);await post({action:'film',code,snapshot:{...snapshot,sessionId:'online-2'}},b);await ready(r);
console.log('HTTP com dois tokens: corrida/cooperativo, pausas concorrentes, duas rodadas, revanche, mesma sala, reconexão e troca de controle do cinema verificados.');
