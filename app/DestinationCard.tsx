'use client';
import { asset } from '../lib/client';
import { Check, MapPin, Puzzle } from 'lucide-react';
import { scenes, surpriseName } from '../lib/catalog';
export default function DestinationCard({scene,revealed,selected,onSelect,records=[]}:{scene:typeof scenes[number];revealed:boolean;selected:boolean;onSelect:()=>void;records?:any[]}) {
 return <button className={'scene-card'+(selected?' selected':'')} onClick={onSelect} aria-pressed={selected} aria-label={revealed?`${scene.title} · Já montado`:surpriseName(scene.id)}>
  <div className={'scene-image'+(!revealed?' mystery-image':'')}>{revealed?<><img src={asset(scene.image)} alt={scene.title}/><span className="era-tag">Já montado ✓</span></>:<><Puzzle size={32} aria-hidden="true"/><span className="mystery-number">{surpriseName(scene.id).slice(-2)}</span><span className="mystery-note">UMA HISTÓRIA PARA DESCOBRIR</span></>}<span className="scene-check">{selected?<Check size={16}/>:<span/>}</span></div>
  <div className="scene-caption">{revealed?<span><MapPin size={12}/>{scene.city} <i>·</i> {scene.year}</span>:<span>Foto e lugar revelados ao concluir</span>}<h3>{revealed?scene.title:surpriseName(scene.id)}</h3>{revealed&&records.length>0&&<div className="album-records"><strong>{records.length} {records.length===1?'conquista':'conquistas'}</strong><small>{new Date(records.at(-1).ended).toLocaleDateString('pt-BR')} · {records.at(-1).count} peças{records.at(-1).rotation?' · com rotação':''}</small><small>{Math.floor((records.at(-1).ended-records.at(-1).started)/60000)} min {Math.floor((records.at(-1).ended-records.at(-1).started)/1000)%60} s · {records.at(-1).players.join(' e ')}</small><small>{records.at(-1).mode==='race'?'Corrida a dois':'Montado juntos'}</small></div>}</div>
 </button>;
}
