'use client';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { appBase } from '../lib/client';
export default function Invite({code}:{code:string}) {
 const [open,setOpen]=useState(false),[qr,setQr]=useState(''),[notice,setNotice]=useState('');
 const url=typeof location==='undefined'?'':`${location.origin}${appBase}?sala=${code}`;
 useEffect(()=>{let live=true;if(open)QRCode.toDataURL(url,{width:256,margin:4,errorCorrectionLevel:'M'}).then(data=>{if(live)setQr(data);}).catch(()=>{if(live)setNotice('Não foi possível gerar o QR code. Use o link abaixo.');});return()=>{live=false;};},[open,url]);
 return <div className="invite-actions"><a className="share-button" href={'https://wa.me/?text='+encodeURIComponent(`Vamos jogar juntos? Sala ${code}: ${url}`)} target="_blank" rel="noreferrer">Convidar pelo WhatsApp</a>{typeof navigator!=='undefined'&&!!navigator.share&&<button onClick={async()=>{try{await navigator.share({title:'Peças do Tempo',text:`Entre na nossa sala ${code}`,url});}catch(e){if((e as Error).name!=='AbortError')setNotice('Use o botão do WhatsApp ou copie o link.');}}}>Compartilhar</button>}<button onClick={()=>setOpen(v=>!v)} aria-expanded={open}>{open?'Fechar QR code':'Mostrar QR code'}</button>{open&&<div className="invite-qr">{qr&&<img src={qr} alt={`QR code para entrar na sala ${code}`} width="256" height="256"/>}<p>Aponte a câmera do outro aparelho.</p><a href={url}>{url}</a></div>}{notice&&<p role="status">{notice}</p>}</div>;
}
