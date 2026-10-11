import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://127.0.0.1:5173';
let checks=0;const rounds=new Map();
async function post(body,token='',expected=200){const res=await fetch(base+'/api/rooms',{method:'POST',headers:{'content-type':'application/json','x-player-token':token},body:JSON.stringify({round:rounds.get(body.code),...body})});const data=await res.json();assert.equal(res.status,expected,JSON.stringify(data));if(data.room)rounds.set(data.room.code,data.room.round);return data;}
async function get(code,token,expected=200){const res=await fetch(base+'/api/rooms?code='+code,{headers:{'x-player-token':token}});const data=await res.json();assert.equal(res.status,expected);return data;}
async function create(mode='coop',kind='puzzle',count=100,totalRounds=2){const a=await post({action:'create',mode,kind,count,rounds:totalRounds,name:'Teste A'});const b=await post({action:'join',code:a.room.code,name:'Teste B'});return {a,b,code:a.room.code};}
async function start({a,b,code}){const room=await get(code,a.token);if(room.kind==='puzzle'&&room.phase==='choosing')await post({action:'choose',code,photo:room.photo,count:room.pieces.length},room.round%2?b.token:a.token);await post({action:'ready',code,ready:true},a.token);const result=await post({action:'ready',code,ready:true},b.token);await new Promise(resolve=>setTimeout(resolve,Math.max(0,result.room.started-Date.now()+50)));}
const coop=await create();const {a,b,code}=coop;
assert.equal(a.room.pieces.length,100);assert.equal(a.room.players[0].hash,undefined);checks++;
await get(code,'invalid',401);await post({action:'join',code,name:'Terceiro'},'',409);checks+=2;
await post({action:'claim',code,piece:0},a.token,409);checks++;
await start(coop);
const locks=await Promise.all([post({action:'claim',code,piece:0},a.token).then(()=>true).catch(()=>false),post({action:'claim',code,piece:0},b.token).then(()=>true).catch(()=>false)]);assert.equal(locks.filter(Boolean).length,1);checks++;
const owner=locks[0]?a:b,other=locks[0]?b:a;
await post({action:'drop',code,piece:0,x:3,y:3},owner.token);let state=await get(code,other.token);assert.equal(state.pieces[0].placed,false);assert.equal(state.pieces[0].x,3);checks++;
await post({action:'claim',code,piece:0},other.token);await post({action:'drop',code,piece:0,tray:true},other.token);state=await get(code,owner.token);assert.equal(state.pieces[0].x,-1);checks++;
await Promise.all([post({action:'claim',code,piece:0},a.token),post({action:'claim',code,piece:1},b.token)]);
await Promise.all([post({action:'drop',code,piece:0,x:0,y:0},a.token),post({action:'drop',code,piece:1,x:1,y:0},b.token)]);state=await get(code,b.token);assert.equal(state.players[0].progress,2);assert.equal(state.players[1].progress,2);checks++;
for(let i=2;i<100;i++){const token=i%2?a.token:b.token;await post({action:'claim',code,piece:i},token);await post({action:'drop',code,piece:i,x:i%10,y:Math.floor(i/10)},token);}
state=await get(code,a.token);assert.ok(state.players.every(p=>p.finished&&p.progress===100));checks++;
assert.equal(state.phase,'round-ended');assert.equal(state.results.length,1);checks++;
await post({action:'next',code},a.token);state=await get(code,b.token);assert.equal(state.round,1);assert.equal(state.phase,'choosing');
await post({action:'choose',code,photo:'marco-zero',count:100},a.token,409);
await post({action:'choose',code,photo:'marco-zero',count:100,round:0},b.token,409);
await post({action:'choose',code,photo:'marco-zero',count:100},b.token);state=await get(code,a.token);assert.equal(state.photo,'marco-zero');assert.equal(state.players[0].progress,0);assert.equal(state.started,null);checks+=3;
await start(coop);
for(let i=0;i<100;i++){await post({action:'claim',code,piece:i},a.token);await post({action:'drop',code,piece:i,x:i%10,y:Math.floor(i/10)},a.token);}
state=await get(code,b.token);assert.equal(state.phase,'match-ended');assert.equal(state.results.length,2);await post({action:'next',code},b.token,409);checks+=2;
const race=await create('race');assert.equal(race.a.room.seed,race.b.room.seed);await start(race);await post({action:'claim',code:race.code,piece:0},race.a.token);await post({action:'drop',code:race.code,piece:0,x:0,y:0},race.a.token);const rival=await get(race.code,race.b.token);assert.equal(rival.pieces[0].placed,false);assert.equal(rival.players[0].progress,1);assert.equal(rival.players[1].progress,0);checks++;
for(let round=0;round<2;round++){
 if(round){await post({action:'next',code:race.code},race.b.token);await start(race);}
 const winner=round?race.b:race.a;
 for(let i=round?0:1;i<100;i++){await post({action:'claim',code:race.code,piece:i},winner.token);await post({action:'drop',code:race.code,piece:i,x:i%10,y:Math.floor(i/10)},winner.token);}
 const state=await get(race.code,race.a.token);assert.equal(state.results[round].winner,round);assert.equal(state.phase,round?'match-ended':'round-ended');
 await post({action:'claim',code:race.code,piece:2},(round?race.a:race.b).token,409);
}checks+=3;
const three=await create('coop','puzzle',100,3);assert.equal(three.a.room.totalRounds,3);checks++;
const large=await create('coop','puzzle',1000);assert.equal(large.a.room.pieces.length,1000);checks++;
const film=await create('coop','film');await start(film);const snapshot={deck:['sci_01'],screen:'game',currentRoundIndex:0,viewingStageIndex:4,players:{p1:{name:'A',score:6},p2:{name:'B',score:0}}};await post({action:'film',code:film.code,snapshot},film.a.token);const viewer=await get(film.code,film.b.token);assert.deepEqual(viewer.film,snapshot);await post({action:'film',code:film.code,snapshot},film.b.token,409);checks+=2;
console.log(`${checks} verificações online passaram: salas, autenticação, limite de 2 pessoas, início conjunto, bloqueio concorrente, erro/reposição/devolução de peças, sincronização, conclusão cooperativa, corrida independente, 1.000 peças e cinema.`);
