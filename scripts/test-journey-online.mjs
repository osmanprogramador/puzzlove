import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://127.0.0.1:5173';
async function post(body,token='',status=200){const res=await fetch(base+'/api/rooms',{method:'POST',headers:{'Content-Type':'application/json','X-Player-Token':token},body:JSON.stringify(body)});const data=await res.json();assert.equal(res.status,status,JSON.stringify(data));return data;}
async function get(code,token,status=200){const res=await fetch(base+'/api/rooms?code='+code,{headers:{'X-Player-Token':token}});const data=await res.json();assert.equal(res.status,status);return data;}
const a=await post({action:'create',kind:'journey',name:'Teste A',count:24}),code=a.room.code,b=await post({action:'join',code,name:'Teste B'});let state=b.room;
const act=async(seat,action,data={},status=200)=>{const r=await post({action,code,encounter:state.journeyView.encounter,step:state.journeyView.step,...data},seat?b.token:a.token,status);if(r.room)state=r.room;return r;};
await get(code,'invalid',401);await post({action:'join',code,name:'Terceiro'},'',409);
await act(0,'ready',{ready:true});await act(1,'ready',{ready:true});await new Promise(r=>setTimeout(r,Math.max(0,state.started-Date.now()+25)));
await act(0,'journey-pause',{paused:true});await act(1,'journey-reveal',{},409);assert.equal((await get(code,a.token)).journeyView.paused,true);await act(1,'journey-pause',{paused:false});
await act(0,'journey-discover',{choice:0});await Promise.all([act(0,'journey-ready'),act(1,'journey-ready')]);assert.equal((await get(code,a.token)).journeyView.step,1);state=await get(code,a.token);
await act(0,'journey-ready');await act(1,'journey-ready');assert.equal(state.journeyView.step,2);
await act(0,'journey-choice',{choice:0});await act(1,'journey-choice',{choice:1});await act(0,'journey-ready');await act(1,'journey-ready');assert.equal(state.journeyView.step,3);
await act(0,'journey-note',{field:'reflection',text:'Privado: teste de isolamento',shared:false});assert.ok(!JSON.stringify(await get(code,b.token)).includes('teste de isolamento'));assert.equal((await get(code,a.token)).journeyView.notes[0].reflection.text,'Privado: teste de isolamento');
await act(1,'journey-note',{field:'reflection',text:'',skipped:true});for(let seat=0;seat<2;seat++)await act(seat,'journey-note',{field:'message',text:'Gratidão de teste',shared:true});await act(0,'journey-ready');await act(1,'journey-ready');
for(let seat=0;seat<2;seat++)await act(seat,'journey-note',{field:'commitment',text:'',skipped:true});await act(0,'journey-ready');await act(1,'journey-ready');assert.equal(state.journeyView.finished,true);assert.equal(state.journeyView.completed.length,1);assert.ok(!JSON.stringify(await get(code,b.token)).includes('teste de isolamento'));
await act(1,'journey-next');await act(0,'journey-pause',{paused:true});const resumed=await get(code,a.token);assert.equal(resumed.journeyView.encounter,1);assert.equal(resumed.journeyView.paused,true);assert.equal(resumed.players.length,2);assert.equal(resumed.journey,undefined);
console.log('Jornada HTTP: duas pessoas, confirmações concorrentes, cinco momentos, privacidade no presente e no álbum, pergunta opcional, pausa e retomada autenticada.');
