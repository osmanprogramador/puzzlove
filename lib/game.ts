import { levels, scenes } from './catalog';
export type Piece = {x:number;y:number;placed:boolean;owner?:number;until?:number};
export type Player = {name:string;hash:string;ready:boolean;seen:number;finished:number|null};
export type RoundResult = {round:number;photo:string;count:number;started:number;ended:number;winner:number|null};
export type Room = {code:string;revision:number;kind:'puzzle'|'film';mode:'coop'|'race';photo:string;cols:number;rows:number;seed:number;created:number;started:number|null;players:Player[];boards:Piece[][];film:any;round:number;totalRounds:number;phase:'choosing'|'ready'|'playing'|'round-ended'|'match-ended';results:RoundResult[]};
// Older invitations retain their current puzzle and progress as a one-round match.
export function normalizeRoom(room:Room) {
  if(room.round===undefined){room.round=0;room.totalRounds=1;room.results=[];room.phase=room.started?'playing':'ready';}
  return room;
}
export function initialRoom(code:string,hash:string,input:any,now=Date.now()):Room {
  const level=levels.find(l=>l.n===Number(input.count))||levels[0];
  return {code,revision:0,kind:input.kind==='film'?'film':'puzzle',mode:input.mode==='race'?'race':'coop',photo:scenes.find(s=>s.id===input.photo)?.id||scenes[0].id,cols:level.cols,rows:level.rows,seed:crypto.getRandomValues(new Uint32Array(1))[0],created:now,started:null,players:[{name:cleanName(input.name),hash,ready:false,seen:now,finished:null}],boards:[Array.from({length:level.n},()=>({x:-1,y:-1,placed:false})),Array.from({length:level.n},()=>({x:-1,y:-1,placed:false}))],film:null,round:0,totalRounds:input.rounds===3?3:2,phase:input.kind==='film'?'ready':'choosing',results:[]};
}
export const cleanName=(name:any)=>typeof name==='string'&&name.trim()?name.trim().slice(0,24):'Visitante';
export function applyAction(room:Room,seat:number,input:any,now=Date.now()) {
  normalizeRoom(room);
  const player=room.players[seat]; player.seen=now;
  if(input.action==='ping') return;
  if(room.kind==='puzzle') {
    if(input.round!==room.round)throw new Error('A rodada mudou. Aguarde a atualização da sala.');
    if(input.action==='choose') {
      if(room.phase!=='choosing'||seat!==room.round%2)throw new Error('Aguarde a vez de escolher o quebra-cabeça.');
      const scene=scenes.find(s=>s.id===input.photo),level=levels.find(l=>l.n===input.count);
      if(!scene||!level)throw new Error('Escolha uma fotografia e a quantidade de peças.');
      room.photo=scene.id;room.cols=level.cols;room.rows=level.rows;room.seed=crypto.getRandomValues(new Uint32Array(1))[0];
      room.boards=[0,1].map(()=>Array.from({length:level.n},()=>({x:-1,y:-1,placed:false})));
      room.phase='ready';return;
    }
    if(input.action==='next') {
      if(room.phase!=='round-ended')throw new Error('Esta rodada ainda não terminou ou a partida já acabou.');
      room.round++;room.phase='choosing';room.started=null;
      room.players.forEach(p=>{p.ready=false;p.finished=null;});return;
    }
    if(input.action==='ready'&&room.phase!=='ready')throw new Error('Primeiro, confirmem o quebra-cabeça desta rodada.');
    if(!['ready'].includes(input.action)&&room.phase!=='playing')throw new Error('A rodada não está em andamento.');
  }
  if(input.action==='ready' && !room.started) {
    player.ready=input.ready===true;
    if(room.players.length===2&&room.players.every(p=>p.ready)){room.started=now+3000;room.phase='playing';}
    return;
  }
  if(!room.started||now<room.started)throw new Error('Aguardem os dois ficarem prontos.');
  if(input.action==='film') {
    if(room.kind!=='film'||seat!==0)throw new Error('O anfitrião controla as imagens e confere as lousas.');
    if(!input.snapshot||JSON.stringify(input.snapshot).length>90000)throw new Error('Estado de partida inválido.');
    room.film=input.snapshot; return;
  }
  if(room.kind!=='puzzle')throw new Error('Ação inválida.');
  const board=room.boards[room.mode==='coop'?0:seat];
  if(!Number.isInteger(input.piece)||!board[input.piece])throw new Error('Peça inválida.');
  const piece=board[input.piece];
  if(piece.placed)throw new Error('Essa peça já está encaixada.');
  if(piece.owner!==undefined&&piece.owner!==seat&&(piece.until||0)>now)throw new Error('A outra pessoa está movendo essa peça.');
  if(input.action==='claim') {piece.owner=seat;piece.until=now+30000;return;}
  if(piece.owner!==seat||(piece.until||0)<now)throw new Error('Selecione a peça novamente.');
  if(input.action==='release'){delete piece.owner;delete piece.until;return;}
  if(input.action!=='drop')throw new Error('Ação inválida.');
  if(input.tray) {piece.x=-1;piece.y=-1;}
  else {
    if(!Number.isFinite(input.x)||!Number.isFinite(input.y))throw new Error('Posição inválida.');
    const targetX=input.piece%room.cols,targetY=Math.floor(input.piece/room.cols);
    if(Math.hypot(input.x-targetX,input.y-targetY)<0.28) {piece.x=targetX;piece.y=targetY;piece.placed=true;}
    else {piece.x=Math.max(-0.6,Math.min(room.cols-0.4,input.x));piece.y=Math.max(-0.6,Math.min(room.rows-0.4,input.y));}
  }
  delete piece.owner;delete piece.until;
  if(board.every(p=>p.placed)) {
    if(room.mode==='coop')room.players.forEach(p=>p.finished??=now);
    else player.finished??=now;
    room.results.push({round:room.round,photo:room.photo,count:board.length,started:room.started,ended:now,winner:room.mode==='race'?seat:null});
    room.phase=room.round+1>=room.totalRounds?'match-ended':'round-ended';
  }
}
export function publicRoom(room:Room,seat:number) {
  normalizeRoom(room);
  return {...room,boards:undefined,players:room.players.map(({hash,...p},i)=>({...p,online:Date.now()-p.seen<20000,progress:room.boards[room.mode==='coop'?0:i].filter(p=>p.placed).length})),pieces:room.boards[room.mode==='coop'?0:seat],seat};
}
