import { newJourney, applyJourney, journeyView, type Journey } from './journey';
import { levels, scenes } from './catalog';
export type Piece = {x:number;y:number;placed:boolean;owner?:number;until?:number;group?:number;rotation?:number;by?:number;tray?:number;cursor?:{x:number;y:number}};
export type Player = {name:string;hash:string;ready:boolean;seen:number;finished:number|null};
export type RoundResult = {round:number;photo:string;count:number;started:number;ended:number;winner:number|null;players?:string[];mode?:string;rotation?:boolean};
export type Room = {code:string;revision:number;kind:'puzzle'|'film'|'journey';mode:'coop'|'race';photo:string;cols:number;rows:number;seed:number;created:number;started:number|null;players:Player[];boards:Piece[][];film:any;round:number;totalRounds:number;phase:'choosing'|'ready'|'playing'|'round-ended'|'match-ended';results:RoundResult[];rotation?:boolean;guesses?:Record<string,any[]>;journey?:Journey};
// Older invitations retain their current puzzle and progress as a one-round match.
export function normalizeRoom(room:Room) {
  if(room.round===undefined){room.round=0;room.totalRounds=1;room.results=[];room.phase=room.started?'playing':'ready';}
  return room;
}
export function initialRoom(code:string,hash:string,input:any,now=Date.now()):Room {
  const level=levels.find(l=>l.n===Number(input.count))||levels[0];
  return {code,revision:0,kind:input.kind==='journey'?'journey':input.kind==='film'?'film':'puzzle',mode:input.kind!=='journey'&&input.mode==='race'?'race':'coop',photo:scenes.find(s=>s.id===input.photo)?.id||scenes[0].id,cols:level.cols,rows:level.rows,seed:crypto.getRandomValues(new Uint32Array(1))[0],created:now,started:null,players:[{name:cleanName(input.name),hash,ready:false,seen:now,finished:null}],boards:[Array.from({length:level.n},()=>({x:-1,y:-1,placed:false})),Array.from({length:level.n},()=>({x:-1,y:-1,placed:false}))],film:null,round:0,totalRounds:input.rounds===3?3:2,phase:input.kind==='film'||input.kind==='journey'?'ready':'choosing',results:[],rotation:input.rotation===true,guesses:{},...(input.kind==='journey'?{journey:newJourney()}: {})};
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
      room.rotation=input.rotation===true; if(room.rotation){const turns=crypto.getRandomValues(new Uint8Array(level.n));room.boards.forEach(board=>board.forEach((p,i)=>p.rotation=turns[i]%4));}room.phase='ready';return;
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
  if(room.kind==='journey'){room.journey??=newJourney();applyJourney(room.journey,seat,input,room.players.map(p=>p.name),now);return;}
  if(input.action==='film') {
    if(room.kind!=='film'||seat!==0)throw new Error('O anfitrião controla as imagens e confere as lousas.');
    if(!input.snapshot||JSON.stringify(input.snapshot).length>90000)throw new Error('Estado de partida inválido.');
    room.film=input.snapshot; return;
  }
  if(input.action==='guess') {
    const film=room.film,key=filmKey(film);
    if(room.kind!=='film'||!key||film.screen!=='game'||film.answerRevealed||film.roundScored)throw new Error('Os palpites desta rodada já estão fechados.');
    if(input.key!==key||input.stage!==film.viewingStageIndex||input.stage!==film.maxUnlockedStageIndex||!Number.isInteger(input.stage)||input.stage<0||input.stage>5)throw new Error('A imagem mudou. Confira a pista atual e envie novamente.');
    if(typeof input.text!=='string'||!input.text.trim()||input.text.length>160)throw new Error('Escreva um palpite de até 160 caracteres.');
    room.guesses??={};room.guesses[key]??=[[],[]];
    room.guesses[key][seat][input.stage]={text:input.text.trim(),stage:input.stage,at:now};return;
  }
  if(room.kind!=='puzzle')throw new Error('Ação inválida.');
  const board=room.boards[room.mode==='coop'?0:seat];
  if(!Number.isInteger(input.piece)||!board[input.piece])throw new Error('Peça inválida.');
  const piece=board[input.piece],ids=groupIds(board,input.piece);
  if(piece.placed)throw new Error('Essa peça já está encaixada.');
  if(ids.some(id=>board[id].owner!==undefined&&board[id].owner!==seat&&(board[id].until||0)>now))throw new Error('A outra pessoa está movendo esse conjunto.');
  if(input.action==='claim') {ids.forEach(id=>{board[id].owner=seat;board[id].until=now+30000;});return;}
  if(ids.some(id=>board[id].owner!==seat||(board[id].until||0)<now))throw new Error('Selecione a peça novamente.');
  if(input.action==='release'){ids.forEach(id=>{delete board[id].owner;delete board[id].until;delete board[id].cursor;});return;}
  if(input.action==='move') {
    if(!Number.isFinite(input.x)||!Number.isFinite(input.y))throw new Error('Posição inválida.');
    piece.cursor={x:Math.max(-1,Math.min(room.cols,input.x)),y:Math.max(-1,Math.min(room.rows,input.y))};piece.until=now+30000;return;
  }
  if(input.action==='rotate') {
    if(!room.rotation||ids.length!==1)throw new Error('Gire apenas peças soltas antes de unir um conjunto.');
    piece.rotation=((piece.rotation||0)+1)%4;return;
  }
  if(input.action==='organize') {
    if(!Number.isInteger(input.tray)||input.tray<0||input.tray>2||piece.x!==-1)throw new Error('Selecione uma bandeja para uma peça solta.');
    piece.tray=input.tray;delete piece.owner;delete piece.until;return;
  }
  if(input.action!=='drop')throw new Error('Ação inválida.');
  if(input.tray) {ids.forEach(id=>{board[id].x=-1;board[id].y=-1;delete board[id].group;});}
  else {
    if(!Number.isFinite(input.x)||!Number.isFinite(input.y))throw new Error('Posição inválida.');
    const x=Math.max(-0.6,Math.min(room.cols-0.4,input.x)),y=Math.max(-0.6,Math.min(room.rows-0.4,input.y)),oldX=piece.x,oldY=piece.y;
    ids.forEach(id=>{const p=board[id];p.x=id===input.piece?x:x+(p.x-oldX);p.y=id===input.piece?y:y+(p.y-oldY);});
    // Snap only genuine neighbours with matching relative image positions.
    let joined=true;
    assembly: while(joined){joined=false;
      for(const id of [...ids]) {
        const a=board[id];if(a.rotation)continue;
        const col=id%room.cols,row=Math.floor(id/room.cols);
        for(const neighbour of [col>0?id-1:-1,col<room.cols-1?id+1:-1,row>0?id-room.cols:-1,row<room.rows-1?id+room.cols:-1]) {
          const b=board[neighbour];if(!b||b.x===-1||b.rotation||ids.includes(neighbour)||(b.owner!==undefined&&b.owner!==seat&&(b.until||0)>now))continue;
          const dx=neighbour%room.cols-col,dy=Math.floor(neighbour/room.cols)-row;
          if(Math.hypot(b.x-a.x-dx,b.y-a.y-dy)>=.22)continue;
          const shiftX=b.x-a.x-dx,shiftY=b.y-a.y-dy;ids.forEach(i=>{board[i].x+=shiftX;board[i].y+=shiftY;});
          if(b.placed)break assembly;
          for(const i of groupIds(board,neighbour))if(!ids.includes(i))ids.push(i);
          joined=true;
        }
      }
    }
    const anchor=ids.find(id=>!board[id].rotation&&Math.hypot(board[id].x-id%room.cols,board[id].y-Math.floor(id/room.cols))<.28);
    if(anchor!==undefined&&ids.every(id=>!board[id].rotation))ids.forEach(id=>{const p=board[id];p.x=id%room.cols;p.y=Math.floor(id/room.cols);p.placed=true;p.by??=seat;});
    else if(ids.length>1){const group=Math.min(...ids);ids.forEach(id=>board[id].group=group);}
  }
  ids.forEach(id=>{delete board[id].owner;delete board[id].until;delete board[id].cursor;});
  if(board.every(p=>p.placed)) {
    if(room.mode==='coop')room.players.forEach(p=>p.finished??=now);
    else player.finished??=now;
    room.results.push({round:room.round,photo:room.photo,count:board.length,started:room.started,ended:now,winner:room.mode==='race'?seat:null,players:room.players.map(p=>p.name),mode:room.mode,rotation:!!room.rotation});
    room.phase=room.round+1>=room.totalRounds?'match-ended':'round-ended';
  }
}
export function publicRoom(room:Room,seat:number) {
  normalizeRoom(room);
  const key=filmKey(room.film),all=key?room.guesses?.[key]||[[],[]]:[[],[]],revealed=room.film?.maxUnlockedStageIndex>=5||room.film?.answerRevealed;
  return {...room,journey:undefined,journeyView:room.journey?journeyView(room.journey,seat):undefined,guesses:undefined,filmGuesses:{key,closed:!!room.film?.answerRevealed,own:all[seat]||[],players:all.map((list,i)=>revealed||i===seat?list:list.map((g:any)=>g?{stage:g.stage,submitted:true}:null))},boards:undefined,players:room.players.map(({hash,...p},i)=>({...p,online:Date.now()-p.seen<20000,progress:room.boards[room.mode==='coop'?0:i].filter(p=>p.placed).length})),pieces:room.boards[room.mode==='coop'?0:seat],seat};
}

export function groupIds(board:Piece[],id:number) {const group=board[id].group;return group===undefined?[id]:board.flatMap((p,i)=>p.group===group&&!p.placed?[i]:[]);}
export function filmKey(film:any) {return film?.deck?.[film.currentRoundIndex]?`${film.sessionId||film.deck.join(',')}:${film.currentRoundIndex}:${film.deck[film.currentRoundIndex]}`:'';}
