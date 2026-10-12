'use client';
import {useEffect,useRef,useState} from 'react';
import {Pause,Play,RotateCcw,Check} from 'lucide-react';

export default function SessionControls({room,act,connected}:{room:any;act:(input:any)=>Promise<any>;connected:boolean}) {
 const [busy,setBusy]=useState(false),[error,setError]=useState('');
 const dialog=useRef<HTMLDialogElement|null>(null),pause=room.pause;
 useEffect(()=>{const el=dialog.current;if(pause&&!el?.open)el?.showModal();else if(!pause&&el?.open)el.close();},[!!pause]);
 const send=async(action:string,ready=true)=>{setBusy(true);setError('');try{await act({action,ready});}catch(e){setError((e as Error).message);}finally{setBusy(false);}};
 const proposed=room.rematchReady?.some(Boolean),own=!!room.rematchReady?.[room.seat];
 return <><div className={'session-controls'+(room.matchFinished?' session-rematch':'')}>
 {room.matchFinished&&<><p>{proposed?'Vamos jogar outra vez?':'Que tal mais uma partida?'} <small>{room.kind==='journey'?'Um novo caminho, com as lembranças anteriores guardadas no álbum.':`A próxima escolha será de ${room.players[1-(room.controller??0)]?.name}.`}</small></p><button disabled={busy||!connected} onClick={()=>void send('rematch',!own)}><RotateCcw size={17}/>{own?'Cancelar minha revanche':proposed?'Aceitar revanche':'Revanche na mesma sala'}</button><span role="status">{room.players.map((p:any,i:number)=>`${p.name}: ${room.rematchReady?.[i]?'confirmou ✓':'aguardando'}`).join(' · ')}</span></>}
 </div><dialog ref={dialog} className="session-pause-dialog" aria-labelledby="pause-title" onCancel={e=>e.preventDefault()}><Pause size={32}/><h2 id="pause-title">Uma pausa para os dois.</h2><p>{room.players[pause?.by??0]?.name} pediu uma pausa. O progresso está guardado e o relógio está parado.</p><p>A partida retoma quando os dois confirmarem. Podem voltar pelo mesmo link neste aparelho.</p><ul>{room.players.map((p:any,i:number)=><li key={i}>{p.name}<span>{pause?.ready[i]?<><Check size={16}/> Pronto</>:'Em pausa'}</span></li>)}</ul><button autoFocus className="primary-button" disabled={busy||!connected||!pause} onClick={()=>void send('resume',!pause?.ready[room.seat])}><Play size={18}/>{pause?.ready[room.seat]?'Cancelar minha confirmação':'Estou pronto para retomar'}</button>{!connected&&<p role="status">Reconectando à sala…</p>}{error&&<p role="alert">{error}</p>}</dialog>{error&&!pause&&<p role="alert" className="error">{error}</p>}</>;
}
