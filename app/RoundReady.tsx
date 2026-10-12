'use client';
import {useEffect,useState} from 'react';
import {Check,ArrowRight} from 'lucide-react';
import {asset} from '../lib/client';
import {scenes} from '../lib/catalog';

export default function RoundReady({room,act,now,connected}:{room:any;act:(input:any)=>Promise<any>;now:number;connected:boolean}) {
 const [loaded,setLoaded]=useState(false),[failed,setFailed]=useState(false),[busy,setBusy]=useState(false);
 useEffect(()=>{
  let alive=true;setLoaded(false);setFailed(false);
  const timeout=setTimeout(()=>{if(alive){setLoaded(true);setFailed(true);}},12000);
  const done=(error=false)=>{if(alive){clearTimeout(timeout);setLoaded(true);setFailed(error);}};
  const preload=(url:string)=>{const image=new Image();image.onload=()=>done();image.onerror=()=>done(true);image.src=asset(url);};
  if(room.kind==='puzzle')preload(scenes.find(s=>s.id===room.photo)!.image);
  else if(room.kind==='film'&&room.film?.deck)fetch(asset('/filme/catalog.json')).then(r=>{if(!r.ok)throw Error();return r.json();}).then((list:any)=>{if(!alive)return;const movie=list.find((m:any)=>m.id===room.film.deck[room.film.currentRoundIndex]);if(movie)preload('/filme/'+movie.stages[0].image);else done(true);}).catch(()=>done(true));
  else done();
  return()=>{alive=false;clearTimeout(timeout);};
 },[room.match,room.turn,room.photo]);
 const ready=room.players[room.seat].ready;
 return <section className="waiting-card"><span className="eyebrow">NO MESMO RITMO</span><h2>{room.started?`Começamos em ${Math.min(3,Math.max(1,Math.ceil((room.started-now)/1000)))}…`:room.players.length===2?'Tudo pronto para começar?':'Aguardando sua companhia.'}</h2><p>{room.kind==='film'?`Título ${(room.film?.currentRoundIndex||0)+1} de ${room.film?.totalRounds||'sua sessão'} · sem revelar a resposta`:room.kind==='journey'?`Encontro ${(room.journeyView?.encounter||0)+1} de 7`: `${room.pieces.length} peças · ${room.mode==='coop'?'Um tabuleiro compartilhado':'Mesma foto e mesmo relógio'}`}</p><ul className="ready-players">{room.players.map((p:any,i:number)=><li key={i}>{p.name}{i===room.seat?' (você)':''}<span>{p.ready?'Pronto ✓':'Preparando-se'}</span></li>)}</ul><button className="primary-button" disabled={busy||!!room.started||!connected||!loaded} onClick={async()=>{setBusy(true);try{await act({action:'ready',ready:!ready});}catch{}finally{setBusy(false);}}}>{!loaded?'Carregando o desafio…':ready?<><Check size={18}/> Estou pronto · cancelar</>:<>Estou pronto <ArrowRight size={18}/></>}</button><small>{failed?'A imagem não carregou neste aparelho. Você pode tentar atualizar a página ou continuar. ':''}A rodada começa após as duas confirmações e uma contagem de 3 segundos.</small></section>;
}
