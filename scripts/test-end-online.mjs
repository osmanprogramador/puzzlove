import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://127.0.0.1:5173';
for(const game of ['words','film','puzzle','journey','local-words']){
 const local=game==='local-words',kind=local?'words':game;
 let room;const tokens=[];
 async function post(input,seat=0,status=200){const res=await fetch(base+'/api/rooms',{method:'POST',headers:{'Content-Type':'application/json','x-player-token':tokens[seat]||''},body:JSON.stringify({code:room?.code,match:room?.match||0,turn:room?.turn||0,round:room?.round,wordRound:room?.wordsView?.index,...input})});const data=await res.json();assert.equal(res.status,status,JSON.stringify(data));if(data.room)room=data.room;return data;}
 const host=await post({action:'create',kind,name:'Teste encerramento',wordPlayers:2,wordMode:local?'local':'online',wordNames:['Luane','Pessoa B']});tokens.push(host.token);
 for(let i=1;i<(local?1:kind==='words'?3:2);i++){const guest=await post({action:'join',name:'Teste '+i},i);tokens.push(guest.token);}
 await post({action:'end-match'},0,409);if(!local&&(kind==='words'||kind==='film'))await post({action:'end-match',confirmed:true},1,409);
 await post({action:'end-match',confirmed:true});assert.equal(room.matchFinished,true);assert.equal(room.phase,'match-ended');assert.equal(room.endedEarly.by,0);assert.equal(room.endedEarly.elapsed,0);
 const at=room.endedEarly.at;await post({action:'end-match',confirmed:true});assert.equal(room.endedEarly.at,at);
 for(let i=0;i<tokens.length;i++){const response=await fetch(base+'/api/rooms?code='+room.code,{headers:{'x-player-token':tokens[i]}});const restored=await response.json();assert.equal(restored.endedEarly.at,at);assert.equal(restored.matchFinished,true);assert.equal(restored.seat,i);}
 await post({action:'ready',ready:true},0,409);for(let i=0;i<tokens.length;i++)await post({action:'rematch',ready:true},i);assert.equal(room.endedEarly,undefined);assert.equal(room.match,1);assert.equal(room.matchFinished,false);
 if(kind==='film'){await post({action:'end-match',confirmed:true},0,409);await post({action:'end-match',confirmed:true},1);assert.equal(room.endedEarly.by,1);}
 console.log(game+': encerramento sincronizado, controle de acesso, confirmação, repetição sem alterar o resultado, reconexão, ações bloqueadas após o fim e revanche.');
}
