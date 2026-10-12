'use client';
import {useEffect,useId,useRef,useState} from 'react';
export default function CinemaSynopsis({text,hint=false}:{text:string;hint?:boolean}){
 const id=useId(),dialog=useRef<HTMLDialogElement|null>(null),[open,setOpen]=useState(false);
 useEffect(()=>{if(open&&!dialog.current?.open)dialog.current?.showModal();},[open]);
 return <div className="cinema-synopsis"><button className="cinema-synopsis-trigger" onClick={()=>setOpen(true)}>Ver sinopse{hint?' (ajuda opcional)':''}</button><dialog ref={dialog} className="cinema-synopsis-dialog" aria-labelledby={id} onClose={()=>setOpen(false)} onClick={event=>{if(event.target===dialog.current)dialog.current?.close();}}><h3 id={id}>Sinopse</h3><p>{text}</p><button autoFocus onClick={()=>dialog.current?.close()}>Fechar sinopse</button></dialog></div>;
}
