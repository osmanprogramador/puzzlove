import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://127.0.0.1:5173';
async function exercise(size,local=false){
 let state,tokens=[];
 async function post(input,seat=0,status=200){const r=await fetch(base+'/api/rooms',{method:'POST',headers:{'Content-Type':'application/json','x-player-token':tokens[seat]||''},body:JSON.stringify({code:state?.code,match:state?.match||0,turn:state?.turn||0,wordRound:state?.wordsView?.index,...input})});const data=await r.json();assert.equal(r.status,status,JSON.stringify(data));if(data.room)state=data.room;return data;}
 async function get(seat){const r=await fetch(base+'/api/rooms?code='+state.code,{headers:{'x-player-token':tokens[seat]}});assert.equal(r.status,200);return r.json();}
 const a=await post({action:'create',kind:'words',wordPlayers:size,wordMode:local?'local':'online',wordNames:local?Array.from({length:size},(_,i)=>'No papel '+(i+1)):undefined,name:'Anfitrião de teste',wordCount:5});tokens.push(a.token);
 if(!local)for(let i=1;i<=size;i++){const guest=await post({action:'join',name:'Teste '+i},i);tokens.push(guest.token);}
 await post({action:'join',name:'Excedente'},size+1,409);assert.equal(state.wordsView.capacity,local?1:size+1);assert.equal(state.wordsView.scores.length,size);
 const rounds=size===4&&!local?5:1;
 for(let round=0;round<rounds;round++){
  for(let i=0;i<tokens.length;i++)await post({action:'ready',ready:true},i);
  const deadline=Date.now()+15000;do{await new Promise(r=>setTimeout(r,250));state=await get(0);}while(!state.wordsView.word&&Date.now()<deadline);assert.ok(state.wordsView.word);assert.equal(state.wordsView.word.meaning,undefined);
  await post({action:'pause'},0);for(let i=0;i<tokens.length;i++)await post({action:'resume'},i);assert.equal(state.pause,null);
  if(local){await post({action:'words-answer',text:'Não se digita aqui'},0,409);await post({action:'words-local-reveal'});}
  else {await post({action:'words-answer',text:'Juiz não responde'},0,409);for(let i=1;i<=size;i++){await post({action:'words-answer',text:'Segredo '+i},i);if(i<size){const next=await get(i+1);assert.equal(next.wordsView.answers[i-1].text,undefined);assert.equal(next.wordsView.word.meaning,undefined);}}assert.equal(state.wordsView.stage,'writing');assert.equal(state.wordsView.word.meaning,undefined);await post({action:'words-reveal'},1,409);await post({action:'words-reveal'});}
  assert.equal(state.wordsView.stage,'judging');assert.ok(state.wordsView.word.meaning);await post({action:'words-confirm'},0,409);
  if(!local){await post({action:'words-grade',target:0,grade:2},1,409);await post({action:'words-confirm'},1,409);}
  for(let i=0;i<size;i++)await post({action:'words-grade',target:i,grade:i%3});
  await post({action:'words-confirm'});assert.equal(state.wordsView.history.length,round+1);assert.equal(state.wordsView.scores[1],round+1);await post({action:'words-confirm'},0,409);
  if(round<rounds-1){if(!local)await post({action:'words-next'},1,409);await post({action:'words-next'});assert.equal(state.wordsView.word,null);}
 }
 if(rounds===5){assert.equal(state.matchFinished,true);for(let i=0;i<tokens.length;i++)await post({action:'rematch',ready:true},i);assert.equal(state.match,1);assert.equal(state.wordsView.scores.length,4);assert.ok(state.wordsView.scores.every(s=>s===0));assert.equal(state.wordsView.capacity,5);}
 state=await get(0);assert.equal(state.wordsView.isJudge,true);assert.ok(!state.wordsView.names.includes('Anfitrião de teste'));console.log(local?'Presencial HTTP: 25 participantes, entrada de outros aparelhos bloqueada, respostas no papel, revelação e pontuação por pessoa.':`Online HTTP: ${size} pessoas, limite da sala, prontidão e pausa, segredos, placar exclusivo do anfitrião${rounds===5?', partida completa e revanche de quatro pessoas':''}.`);
}
await exercise(2);await exercise(3);await exercise(4);await exercise(25,true);
