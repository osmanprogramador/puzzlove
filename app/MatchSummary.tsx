'use client';
import {useEffect,useRef} from 'react';
import {ArrowRight,Flag} from 'lucide-react';
import {encounters} from '../lib/encounters';
import {scenes} from '../lib/catalog';
const format=(n:number)=>n.toLocaleString('pt-BR',{maximumFractionDigits:1});
export default function MatchSummary({room,onLeave}:{room:any;onLeave:()=>void}){
 const heading=useRef<HTMLHeadingElement|null>(null);useEffect(()=>{heading.current?.focus();},[]);
 const words=room.kind==='words',film=room.kind==='film',puzzle=room.kind==='puzzle',journey=room.kind==='journey',w=room.wordsView;
 const scores:{name:string;score:number}[]=words?(w?.names||[]).map((name:string,i:number)=>({name,score:(w.scores[i]||0)/2})):film?room.players.map((p:any,i:number)=>({name:p.name,score:room.film?.players?.[i===0?'p1':'p2']?.score||0})):puzzle&&room.mode==='race'?room.players.map((p:any,i:number)=>({name:p.name,score:room.results.filter((r:any)=>r.winner===i).length})):[];
 const sorted=[...scores].sort((a,b)=>b.score-a.score),max=sorted[0]?.score||0,winners=sorted.filter(p=>p.score===max);
 const competed=words?w?.history?.length:film?room.film?.currentRoundIndex+(room.film?.roundScored?1:0):room.results.length;
 return <section className="match-summary" aria-label="Resultado final"><Flag size={36}/><span className="eyebrow">RESULTADO FINAL</span><h2 ref={heading} tabIndex={-1}>Partida encerrada</h2><p>{room.players[room.endedEarly.by]?.name} encerrou a partida. O resultado foi sincronizado para todos.</p>
  {!!scores.length&&<><h3>{!competed?'Nenhuma rodada pontuada.':winners.length>1?'A partida terminou empatada.':`${winners[0].name} ficou em primeiro lugar!`}</h3><ol className="final-score-list">{sorted.map((p,i)=><li key={i}><span>{p.name}</span><strong>{format(p.score)} <small>{puzzle?(p.score===1?'vitória':'vitórias'):(p.score===1?'ponto':'pontos')}</small></strong></li>)}</ol><p className="summary-rule">{words?`${w.history.length} de ${w.count} palavras pontuadas. O juiz fica fora do placar; avaliações não confirmadas não somam pontos.`:film?'O placar contém os pontos já registrados. Palpites ainda não conferidos não somam pontos.':'As vitórias consideram apenas rodadas concluídas.'}</p></>}
  {words&&!!w.history.length&&<details><summary>Palavras já descobertas · {w.history.length}</summary><ul className="summary-history">{w.history.map((r:any)=><li key={r.index}><b>{r.word.term}</b><p>{r.word.meaning}</p></li>)}</ul></details>}
  {puzzle&&<><h3>{room.results.length} de {room.totalRounds} quebra-cabeças concluídos</h3>{room.mode==='coop'&&<p>Vocês construíram esse progresso juntos.</p>}<ul className="summary-history">{room.results.map((r:any)=><li key={r.round}>Rodada {r.round+1}: {scenes.find(s=>s.id===r.photo)?.title} · {r.count} peças</li>)}</ul><p>A montagem incompleta não foi marcada como concluída no álbum.</p></>}
  {journey&&<><h3>{room.journeyView?.completed.length||0} de 7 encontros vividos</h3><p>Os encontros concluídos continuam no álbum. Esta jornada é cooperativa e não tem placar nas reflexões pessoais.</p><ul className="summary-history">{room.journeyView?.completed.map((r:any)=><li key={r.encounter}><b>{encounters[r.encounter]?.theme}</b> · {encounters[r.encounter]?.reference}</li>)}</ul></>}
  <button className="primary-button" onClick={onLeave}>Voltar aos jogos <ArrowRight size={18}/></button><small>Vocês também podem usar a revanche nesta sala, confirmando com os mesmos participantes.</small>
 </section>;
}
