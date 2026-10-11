'use client';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { outline, edges, random } from '../lib/shapes';
import { scenes, surpriseName } from '../lib/catalog';
import { zoomAt } from '../lib/view';
export default memo(function PuzzleBoard({room,act}:{room:any;act:(action:any)=>Promise<any>}) {
 const scene=scenes.find(s=>s.id===room.photo)!;
 const canvas=useRef<HTMLCanvasElement>(null),tray=useRef<HTMLDivElement>(null),img=useRef<HTMLImageElement|null>(null),latest=useRef(room);
 latest.current=room;
 const [loaded,setLoaded]=useState(false),[imageError,setImageError]=useState(false),[zoom,setZoom]=useState(1),[pan,setPan]=useState({x:0,y:0}),[filter,setFilter]=useState('all'),[page,setPage]=useState(0),[ghost,setGhost]=useState<any>(null),[selected,setSelected]=useState<number|null>(null),[notice,setNotice]=useState(''),[panMode,setPanMode]=useState(false);
 const gesture=useRef<any>(null),selection=useRef<number|null>(null),viewport=useRef({w:1,h:1,scale:1,ox:0,oy:0,cw:1,ch:1}),[size,setSize]=useState({w:1000,h:650});
 const touches=useRef(new Map<number,{x:number;y:number}>()),pinch=useRef<any>(null),controls=useRef({zoom,pan});controls.current={zoom,pan};
 const [compact,setCompact]=useState(false),[focusMode,setFocusMode]=useState(false);
 useEffect(()=>{const query=matchMedia('(max-width: 900px), (pointer: coarse)'),sync=()=>setCompact(query.matches);sync();query.addEventListener('change',sync);return()=>query.removeEventListener('change',sync);},[]);
 useEffect(()=>{if(!focusMode)return;const old=document.body.style.overflow;document.body.style.overflow='hidden';const exit=(e:KeyboardEvent)=>{if(e.key==='Escape'&&selection.current===null)setFocusMode(false);};window.addEventListener('keydown',exit);return()=>{document.body.style.overflow=old;window.removeEventListener('keydown',exit);};},[focusMode]);
 const paths=useMemo(()=>Array.from({length:room.cols*room.rows},(_,id)=>new Path2D(outline(id,room.cols,room.rows,room.seed))),[room.cols,room.rows,room.seed]);
 const order=useMemo(()=>paths.map((_,id)=>id).sort((a,b)=>random(room.seed,a)-random(room.seed,b)),[paths,room.seed]);
 useEffect(()=>{let alive=true;setLoaded(false);setImageError(false);img.current=null;const image=new Image();image.onload=()=>{if(alive){img.current=image;setLoaded(true);}};image.onerror=()=>{if(alive)setImageError(true);};image.src=scene.image;return()=>{alive=false;};},[scene.image]);
 useEffect(()=>{const c=canvas.current;if(!c)return;const observer=new ResizeObserver(([entry])=>setSize({w:entry.contentRect.width,h:entry.contentRect.height}));observer.observe(c);return()=>observer.disconnect();},[]);
 const draw=useCallback(()=>{
  const c=canvas.current,image=img.current;if(!c||!image)return;const ctx=c.getContext('2d')!;
  const dpr=Math.min(window.devicePixelRatio||1,2);c.width=size.w*dpr;c.height=size.h*dpr;ctx.scale(dpr,dpr);ctx.clearRect(0,0,size.w,size.h);
  const bw=1200,bh=bw*image.naturalHeight/image.naturalWidth,scale=Math.min((size.w-64)/bw,(size.h-64)/bh)*zoom,ox=(size.w-bw*scale)/2+pan.x,oy=(size.h-bh*scale)/2+pan.y,cw=bw/room.cols,ch=bh/room.rows;
  viewport.current={w:size.w,h:size.h,scale,ox,oy,cw,ch};ctx.save();ctx.translate(ox,oy);ctx.scale(scale,scale);
  ctx.fillStyle='#f2e8d7';ctx.shadowColor='#0003';ctx.shadowBlur=24;ctx.fillRect(0,0,bw,bh);ctx.shadowBlur=0;
  ctx.strokeStyle='#a69a8522';ctx.lineWidth=1/scale;
  for(let col=1;col<room.cols;col++){ctx.beginPath();ctx.moveTo(col*cw,0);ctx.lineTo(col*cw,bh);ctx.stroke();}
  for(let row=1;row<room.rows;row++){ctx.beginPath();ctx.moveTo(0,row*ch);ctx.lineTo(bw,row*ch);ctx.stroke();}
  const piece=(id:number,x:number,y:number,placed:boolean,held:boolean)=>{
   ctx.save();ctx.translate(x*cw,y*ch);ctx.scale(cw,ch);
   if(!placed){ctx.shadowColor='#1e2f2b70';ctx.shadowBlur=5/scale;ctx.shadowOffsetY=2/scale;ctx.fillStyle='#fff';ctx.fill(paths[id]);ctx.shadowBlur=0;ctx.shadowOffsetY=0;}
   ctx.save();ctx.clip(paths[id]);ctx.drawImage(image,-(id%room.cols),-Math.floor(id/room.cols),room.cols,room.rows);ctx.restore();
   ctx.lineWidth=(held?2.5:placed?.45:1)/scale/Math.min(cw,ch);ctx.strokeStyle=held?'#d78042':placed?'#fff5':'#fff9';ctx.stroke(paths[id]);ctx.restore();
  };
  room.pieces.forEach((p:any,id:number)=>{if(p.placed)piece(id,p.x,p.y,true,false);});
  room.pieces.forEach((p:any,id:number)=>{if(!p.placed&&p.x!==-1&&gesture.current?.id!==id)piece(id,p.x,p.y,false,(p.until>Date.now()&&p.owner!==room.seat)||selected===id);});
  if(ghost)piece(ghost.id,ghost.x,ghost.y,false,true);
  ctx.restore();
 },[size,zoom,pan,room,paths,ghost,selected]);
 useEffect(()=>{if(loaded)draw();},[loaded,draw]);
 const position=(clientX:number,clientY:number)=>{const r=canvas.current!.getBoundingClientRect(),v=viewport.current;return{x:(clientX-r.left-v.ox)/v.scale/v.cw-.5,y:(clientY-r.top-v.oy)/v.scale/v.ch-.5};};
 const claim=async(id:number,event?:any)=>{
  if(room.pieces[id].placed)return;
  const previous=selection.current;if(previous!==null&&previous!==id){selection.current=null;setSelected(null);void act({action:'release',piece:previous}).catch(()=>{});}
  setNotice('');const g={id,approved:false,x:room.pieces[id].x,y:room.pieces[id].y,pointer:!!event,pointerId:event?.pointerId,touch:event?.pointerType==='touch',sx:event?.clientX,sy:event?.clientY};gesture.current=g;
  try{await act({action:'claim',piece:id});g.approved=true;if(gesture.current!==g){await act({action:'release',piece:id});return;}selection.current=id;setSelected(id);if(event&&g.pointer){const pos=position(event.clientX,event.clientY);setGhost({id,...pos});}else if(g.touch)canvas.current?.scrollIntoView({block:'center',behavior:'smooth'});}catch(e){setNotice((e as Error).message);if(gesture.current===g)gesture.current=null;}
 };
 const drop=async(id:number,x:number,y:number,returnTray=false)=>{
  try {await act({action:'drop',piece:id,x,y,tray:returnTray});selection.current=null;setSelected(null);setNotice(returnTray?'Peça devolvida à bandeja.':'');}
  catch(e){setNotice((e as Error).message);selection.current=null;setSelected(null);}
  setGhost(null);
 };
 useEffect(()=>{
  const move=(e:PointerEvent)=>{if(touches.current.has(e.pointerId))touches.current.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pinch.current){const points=[...touches.current.values()];if(points.length===2){const [a,b]=points,r=canvas.current!.getBoundingClientRect(),mid={x:(a.x+b.x)/2-r.left-r.width/2,y:(a.y+b.y)/2-r.top-r.height/2},p=pinch.current,next=zoomAt(p.view,p.mid,mid,p.view.zoom*Math.hypot(a.x-b.x,a.y-b.y)/p.distance);setZoom(next.zoom);setPan(next.pan);}return;}const g=gesture.current;if(!g||g.pointerId!==undefined&&g.pointerId!==e.pointerId)return;if(g.pan){setPan({x:g.origin.x+e.clientX-g.sx,y:g.origin.y+e.clientY-g.sy});return;}if(!g.pointer)return;const pos=position(e.clientX,e.clientY);g.x=pos.x;g.y=pos.y;setGhost({id:g.id,...pos});};
  const up=(e:PointerEvent)=>{touches.current.delete(e.pointerId);if(pinch.current){if(!touches.current.size)pinch.current=null;return;}const g=gesture.current;if(!g||g.pointerId!==undefined&&g.pointerId!==e.pointerId||!g.pointer&&!g.pan)return;if(!g.pan&&!g.dropTap&&Math.hypot(e.clientX-g.sx,e.clientY-g.sy)<6){g.pointer=false;setGhost(null);if(g.approved&&g.touch)canvas.current?.scrollIntoView({block:'center',behavior:'smooth'});return;}gesture.current=null;if(g.pan)return;if(!g.approved){setGhost(null);return;}const r=canvas.current!.getBoundingClientRect();const outside=e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom;const pos=position(e.clientX,e.clientY);void drop(g.id,pos.x,pos.y,outside);};
  const cancel=()=>{touches.current.clear();pinch.current=null;const g=gesture.current;gesture.current=null;setGhost(null);selection.current=null;setSelected(null);if(g?.approved)void act({action:'release',piece:g.id}).catch(()=>{});};
  window.addEventListener('pointermove',move);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',cancel);return()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',cancel);};
 },[act]);
 useEffect(()=>{const heartbeat=setInterval(()=>{const id=selection.current;if(id!==null)void act({action:'claim',piece:id}).catch(()=>{selection.current=null;setSelected(null);setGhost(null);});},10000);return()=>clearInterval(heartbeat);},[act]);
 const onBoard=(e:React.PointerEvent)=>{
  if(e.pointerType==='touch'){
   touches.current.set(e.pointerId,{x:e.clientX,y:e.clientY});
   if(touches.current.size===2){const [a,b]=[...touches.current.values()],r=canvas.current!.getBoundingClientRect();pinch.current={view:controls.current,distance:Math.max(1,Math.hypot(a.x-b.x,a.y-b.y)),mid:{x:(a.x+b.x)/2-r.left-r.width/2,y:(a.y+b.y)/2-r.top-r.height/2}};const g=gesture.current;gesture.current=null;setGhost(null);selection.current=null;setSelected(null);if(g?.approved)void act({action:'release',piece:g.id}).catch(()=>{});return;}
   if(pinch.current)return;
  }
  if(panMode||e.button===1){gesture.current={pan:true,pointer:true,pointerId:e.pointerId,origin:pan,sx:e.clientX,sy:e.clientY};return;}
  if(selection.current!==null){const id=selection.current;if(e.pointerType==='touch'){gesture.current={id,approved:true,pointer:true,pointerId:e.pointerId,dropTap:true,sx:e.clientX,sy:e.clientY};return;}gesture.current=null;const pos=position(e.clientX,e.clientY);void drop(id,pos.x,pos.y);return;}
  const v=viewport.current,r=canvas.current!.getBoundingClientRect(),wx=(e.clientX-r.left-v.ox)/v.scale/v.cw,wy=(e.clientY-r.top-v.oy)/v.scale/v.ch,ctx=canvas.current!.getContext('2d')!;
  for(let id=room.pieces.length-1;id>=0;id--){const p=room.pieces[id];if(p.placed||p.x===-1)continue;ctx.save();ctx.setTransform(1,0,0,1,0,0);const hit=ctx.isPointInPath(paths[id],wx-p.x,wy-p.y);ctx.restore();if(hit){void claim(id,e);return;}}
 };
 const available=order.filter(id=>{const p=room.pieces[id];return !p.placed&&p.x===-1&&(filter!=='edge'||edges(id,room.cols,room.rows,room.seed).includes(0));});
 const perPage=compact?(focusMode?(size.h<300?6:12):18):36,pages=Math.max(1,Math.ceil(available.length/perPage)),activePage=Math.min(page,pages-1),visible=available.slice(activePage*perPage,activePage*perPage+perPage);
 return <div className={'puzzle-layout'+(focusMode?' focused':'')}>
  <section className="table-panel">
   <div className="table-toolbar"><span className="table-title">{surpriseName(scene.id)}</span><div className="tools"><button onClick={()=>setFocusMode(v=>!v)} aria-pressed={focusMode} aria-label={focusMode?'Sair da mesa ampliada':'Ampliar mesa'}>{focusMode?'↙':'⛶'} <span>{focusMode?'Sair':'Ampliar mesa'}</span></button><button onClick={()=>setPanMode(v=>!v)} aria-pressed={panMode} aria-label="Mover mesa">✥ <span>Mover mesa</span></button><button onClick={()=>setZoom(z=>Math.max(.5,z-(z>4?1:z>2?.5:.25)))} aria-label="Diminuir zoom">−</button><span>{Math.round(zoom*100)}%</span><button onClick={()=>setZoom(z=>Math.min(12,z+(z>=4?1:z>=2?.5:.25)))} aria-label="Aumentar zoom">+</button><button onClick={()=>{setZoom(1);setPan({x:0,y:0});}} aria-label="Centralizar mesa" title="Centralizar mesa">⌂</button></div></div>
   <canvas ref={canvas} className={'puzzle-canvas'+(panMode?' panning':'')} onPointerDown={onBoard} aria-label="Mesa do quebra-cabeça. Arraste as peças da bandeja ou selecione uma e toque no destino." tabIndex={0} onKeyDown={e=>{const id=selection.current;if(id===null)return;const p=ghost||{x:room.cols/2-.5,y:room.rows/2-.5};let x=p.x,y=p.y;if(e.key==='ArrowRight')x+=.1;else if(e.key==='ArrowLeft')x-=.1;else if(e.key==='ArrowUp')y-=.1;else if(e.key==='ArrowDown')y+=.1;else if(e.key==='Enter'){gesture.current=null;void drop(id,x,y);return;}else if(e.key==='Escape'){gesture.current=null;void drop(id,0,0,true);return;}else return;e.preventDefault();setGhost({id,x,y});}} />
   {!loaded&&<p className="canvas-message">{imageError?'Não foi possível carregar a foto. Recarregue a página para tentar novamente.':'Preparando as peças…'}</p>}
   <div className="table-footer"><span>{selected===null?'Arraste ou toque numa peça e depois no destino. Use dois dedos na mesa para ampliar e mover.':'Peça selecionada. Toque no destino ou devolva à bandeja.'}</span><span role="status">{notice}</span></div>
  </section>
  <aside className="piece-panel" ref={tray}>
   <div className="tray-head"><h3>Suas peças <small>{available.length}</small></h3><button className="text-button" disabled={selected===null} onClick={()=>{gesture.current=null;if(selected!==null)void drop(selected,0,0,true);}}>↩ Devolver peça</button></div>
   <div className="segmented"><button className={filter==='all'?'active':''} onClick={()=>{setFilter('all');setPage(0);}}>Todas</button><button className={filter==='edge'?'active':''} onClick={()=>{setFilter('edge');setPage(0);}}>Só as bordas</button></div>
   <div className="pieces-grid">{visible.map(id=>{const locked=room.pieces[id].until>Date.now()&&room.pieces[id].owner!==room.seat;return <button key={id} className={'piece'+(selected===id?' selected':'')} disabled={locked} title={locked?'A outra pessoa está usando esta peça':'Arrastar ou selecionar peça'} aria-label={`Peça ${order.indexOf(id)+1}${locked?', em uso':''}`} onPointerDown={e=>{e.preventDefault();void claim(id,e);}} onClick={e=>{if(e.detail===0)void claim(id);}}><svg viewBox="-.32 -.32 1.64 1.64" aria-hidden="true"><defs><clipPath id={'clip-'+id}><path d={outline(id,room.cols,room.rows,room.seed)}/></clipPath></defs><g clipPath={`url(#clip-${id})`}><image href={scene.image} x={-(id%room.cols)} y={-Math.floor(id/room.cols)} width={room.cols} height={room.rows} preserveAspectRatio="none"/></g><path d={outline(id,room.cols,room.rows,room.seed)} fill="none" stroke="#fff9" strokeWidth=".015"/></svg></button>;})}</div>
   <div className="pagination"><button disabled={activePage===0} onClick={()=>setPage(activePage-1)} aria-label="Página anterior">←</button><span>{activePage+1} / {pages}</span><button disabled={activePage===pages-1} onClick={()=>setPage(activePage+1)} aria-label="Próxima página">→</button></div>
   <p className="surprise-reminder">A foto completa e o nome do lugar aparecem quando a rodada terminar.</p>
  </aside>
 </div>;
});
