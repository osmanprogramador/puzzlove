import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://127.0.0.1:5173';
let state;
async function post(body,token='',status=200){const response=await fetch(base+'/api/rooms',{method:'POST',headers:{'Content-Type':'application/json','x-player-token':token},body:JSON.stringify({match:state?.match||0,turn:state?.turn||0,wordRound:state?.wordsView?.index,...body})});const result=await response.json();assert.equal(response.status,status,JSON.stringify(result));if(result.room)state=result.room;return result;}
async function get(code,token,status=200){const response=await fetch(base+'/api/rooms?code='+code,{headers:{'x-player-token':token}});const result=await response.json();assert.equal(response.status,status,JSON.stringify(result));if(response.ok)state=result;return result;}
const a=await post({action:'create',kind:'words',wordJudging:'circle',wordLevel:'misto',wordCount:5,name:'Teste A'}),code=a.room.code,b=await post({action:'join',code,name:'Teste B'});
assert.equal(state.kind,'words');assert.equal(state.words,undefined);assert.equal(state.wordsView.word,null);assert.equal(state.wordsView.count,5);assert.equal(state.phase,'ready');assert.equal(state.players.length,2);
await get(code,'invalid',401);await post({action:'join',code,name:'terceiro'},'',409);
async function ready(){await post({action:'ready',code,ready:true},a.token);assert.equal(state.started,null);await post({action:'ready',code,ready:true},b.token);assert.equal(state.wordsView.word,null);const deadline=Date.now()+15000;do{await new Promise(r=>setTimeout(r,250));await get(code,a.token);}while(!state.wordsView.word?.term&&Date.now()<deadline);assert.ok(state.wordsView.word?.term);assert.equal(state.wordsView.word.meaning,undefined);}
const used=[];
for(let index=0;index<5;index++){
 await ready();const term=state.wordsView.word.term;used.push(term);assert.equal(state.wordsView.word.source,undefined);assert.equal(state.words,undefined);assert.equal(state.wordsView.answers[1].text,undefined);
 await post({action:'words-answer',code,text:'',passed:false},a.token,409);await post({action:'words-answer',code,text:'x'.repeat(501)},a.token,409);await post({action:'words-confirm',code},b.token,409);
 await post({action:'pause',code},a.token);const started=state.started;await post({action:'words-answer',code,text:'bloqueado'},a.token,409);await post({action:'resume',code},b.token);assert.ok(state.pause);await post({action:'resume',code},a.token);assert.equal(state.pause,null);assert.ok(state.started>=started);
 const secret='Uma explicação inventada e secreta '+index;await post({action:'words-answer',code,text:secret},a.token);let guest=await get(code,b.token);assert.equal(guest.wordsView.answers[0].submitted,true);assert.ok(!JSON.stringify(guest).includes(secret));assert.equal(guest.wordsView.word.meaning,undefined);
 await post({action:'words-answer',code,text:'alterar depois'},a.token,409);await post({action:'words-next',code},a.token,409);
 await post({action:'words-answer',code,text:'Meu significado',passed:index===4},b.token);assert.equal(state.wordsView.stage,'judging');assert.equal(state.wordsView.answers[0].text,secret);assert.ok(state.wordsView.word.meaning);assert.ok(state.wordsView.word.example);assert.ok(state.wordsView.word.source);
 await post({action:'words-grade',code,target:0,grade:2},a.token,409);await post({action:'words-grade',code,grade:3},b.token,409);
 if(index===4)await post({action:'words-grade',code,grade:1},a.token,409);else await post({action:'words-grade',code,grade:2},a.token);
 await post({action:'words-grade',code,grade:1},b.token);
 await Promise.all([post({action:'words-confirm',code,ready:true},a.token),post({action:'words-confirm',code,ready:true},b.token)]);
 await get(code,a.token);assert.equal(state.wordsView.history.length,index+1);assert.equal(state.wordsView.scores[0],index+1);assert.equal(state.wordsView.scores[1],index===4?8:(index+1)*2);await post({action:'words-confirm',code,ready:true},b.token,409);
 const restore=await get(code,b.token);assert.equal(restore.seat,1);assert.equal(restore.wordsView.history.length,index+1);
 if(index<4){const stale={turn:state.turn,wordRound:index};await post({action:'words-next',code},b.token);assert.equal(state.started,null);await post({action:'words-next',code,...stale},a.token,409);await post({action:'words-answer',code,text:'antes de pronto'},a.token,409);}
}
assert.equal(new Set(used).size,5);assert.equal(state.matchFinished,true);assert.equal(state.wordsView.stage,'finished');assert.equal(state.wordsView.scores[0]/2,2.5);assert.equal(state.wordsView.scores[1]/2,4);
await post({action:'rematch',code,ready:true},a.token);assert.equal(state.match,0);await post({action:'rematch',code,ready:true},b.token);assert.equal(state.match,1);assert.equal(state.wordsView.history.length,0);assert.equal(state.wordsView.scores[0],0);assert.equal(state.wordsView.word,null);assert.equal(state.players.length,2);assert.equal(state.code,code);await post({action:'words-answer',code,text:'antigo',match:0},a.token,409);await ready();assert.ok(!used.includes(state.wordsView.word.term));
console.log('Duelo HTTP: partida completa entre dois tokens, segredos antes do segundo envio, consulta após revelação, confirmações concorrentes, 1/0,5/0 pontos, reconexão, pausa e revanche com a mesma sala.');
