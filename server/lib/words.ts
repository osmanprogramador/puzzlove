import {wordCatalog,type WordEntry} from './word-catalog';
export type WordLevel='misto'|'cotidiano'|'desafio';
export type WordAnswer={text:string;passed:boolean};
export type WordResult={index:number;word:string;answers:WordAnswer[];grades:number[];ended:number};
export type WordGame={judgeOnly?:boolean;mode?:'online'|'local';judging?:'host'|'circle';capacity?:number;names?:string[];level:WordLevel;count:number;deck:string[];index:number;stage:'writing'|'judging'|'result'|'finished';answers:(WordAnswer|null)[];grades:(number|null)[];confirmed:boolean[];scores:number[];history:WordResult[]};
export type WordView={judgeOnly:boolean;isJudge:boolean;playerIndex:number;judgeName:string;canReveal:boolean;mode:'online'|'local';judging:'host'|'circle';capacity:number;names:string[];level:WordLevel;count:number;index:number;stage:WordGame['stage'];word:Pick<WordEntry,'term'|'level'>|WordEntry|null;answers:({submitted:boolean;passed?:boolean;text?:string})[];grades:(number|null)[];confirmed:boolean[];scores:number[];history:(Omit<WordResult,'word'>&{word:WordEntry})[]};
const shuffle=<T,>(list:T[])=>{for(let i=list.length-1;i>0;i--){const j=crypto.getRandomValues(new Uint32Array(1))[0]%(i+1);[list[i],list[j]]=[list[j],list[i]];}return list;};
export function newWordGame(input:{wordLevel?:unknown;wordCount?:unknown;wordMode?:unknown;wordJudging?:unknown;wordPlayers?:unknown;wordNames?:unknown;name?:unknown},previous:string[]=[]):WordGame {
 const level:WordLevel=input.wordLevel==='cotidiano'||input.wordLevel==='desafio'?input.wordLevel:'misto';
 const pool=wordCatalog.filter(w=>level==='misto'||w.level===level),wanted=[5,10,12,15].includes(Number(input.wordCount))?Number(input.wordCount):10,count=Math.min(wanted,pool.length);
 // Prefer unseen words in a rematch, then reuse the rest if necessary.
 const deck=[...shuffle(pool.filter(w=>!previous.includes(w.id))),...shuffle(pool.filter(w=>previous.includes(w.id)))].slice(0,count).map(w=>w.id);
 const mode=input.wordMode==='local'?'local':'online',judging=mode==='local'||input.wordJudging!=='circle'?'host':'circle';
 const judgeOnly=judging==='host',judgeName=typeof input.name==='string'?input.name.trim().slice(0,24).toLocaleLowerCase('pt-BR'):'';
 const names=mode==='local'&&Array.isArray(input.wordNames)?input.wordNames.filter((n:unknown)=>typeof n==='string'&&n.trim()).map((n:string)=>n.trim().slice(0,24)).filter((n:string)=>n.toLocaleLowerCase('pt-BR')!==judgeName):[];
 if(mode==='local'&&names.length<1)throw Error('Cadastre pelo menos uma pessoa, além do juiz para jogar presencialmente.');
 const capacity=mode==='local'?1:judging==='circle'?2:[1,2,3,4].includes(Number(input.wordPlayers))?Number(input.wordPlayers)+1:3,n=mode==='local'?names.length:capacity-(judgeOnly?1:0);
 return {judgeOnly,mode,judging,capacity,names,level,count,deck,index:0,stage:'writing',answers:Array(n).fill(null),grades:Array(n).fill(null),confirmed:Array(capacity).fill(false),scores:Array(n).fill(0),history:[]};
}
export function normalizeWords(w:WordGame,judgeName:string){
 if(w.judging!=='host'||w.judgeOnly!==undefined)return;
 w.judgeOnly=true;
 const keep=w.mode==='local'?(w.names||[]).flatMap((name,i)=>name.toLocaleLowerCase('pt-BR')===judgeName.trim().slice(0,24).toLocaleLowerCase('pt-BR')?[]:[i]):w.scores.flatMap((_,i)=>i===0?[]:[i]);
 w.answers=keep.map(i=>w.answers[i]);w.grades=keep.map(i=>w.grades[i]);w.scores=keep.map(i=>w.scores[i]);
 if(w.mode==='local')w.names=keep.map(i=>w.names![i]);
 w.history=w.history.map(r=>({...r,answers:keep.map(i=>r.answers[i]),grades:keep.map(i=>r.grades[i])}));
}
export function applyWords(w:WordGame,seat:number,input:any,now:number):'ready'|undefined {
 if(input.wordRound!==w.index)throw Error('A palavra mudou. Aguarde a atualização da sala.');
 if(w.stage==='finished')throw Error('Esta partida já terminou. Vocês podem pedir uma revanche.');
 if(w.mode==='local'&&seat!==0)throw Error('Somente o aparelho da mesa controla esta partida.');
 if(input.action==='words-local-reveal'||input.action==='words-reveal'){
  if(seat!==0||w.judging!=='host'||w.stage!=='writing'||w.mode!=='local'&&!w.answers.every(Boolean))throw Error('Somente o juiz pode revelar, depois que todos responderem.');
  w.stage='judging';w.answers.forEach((answer,i)=>{if(answer?.passed)w.grades[i]=0;});return;
 }
 if(input.action==='words-answer') {
  if(w.mode==='local')throw Error('Neste modo, as respostas são escritas no papel.');
  if(w.judgeOnly&&seat===0)throw Error('Você é o juiz desta partida e não envia respostas.');
  const index=seat-(w.judgeOnly?1:0);
  if(w.stage!=='writing'||w.answers[index])throw Error('Sua resposta já foi confirmada e não pode mais ser alterada.');
  const passed=input.passed===true;
  if(!passed&&(typeof input.text!=='string'||!input.text.trim()||input.text.length>500))throw Error('Escreva uma resposta de até 500 caracteres ou escolha passar.');
  w.answers[index]={text:passed?'':input.text.trim(),passed};
  if(!w.judgeOnly&&w.answers.every(Boolean)){w.stage='judging';w.answers.forEach((answer,i)=>{if(answer?.passed)w.grades[i]=0;});}
  return;
 }
 if(input.action==='words-grade') {
  if(w.stage!=='judging'||w.confirmed[seat])throw Error('A avaliação já está confirmada ou ainda não está disponível.');
  const host=w.judging==='host';
  if(host&&seat!==0)throw Error('Quem criou a sala registra a pontuação de todos.');
  const target=host?input.target:1-seat;
  if(!Number.isInteger(target)||target<0||target>=w.scores.length)throw Error('Escolha a pessoa que receberá os pontos.');
  if(!host&&input.target!==undefined&&input.target!==target)throw Error('Você avalia somente a resposta da outra pessoa.');
  if(![0,1,2].includes(input.grade)||w.answers[target]?.passed&&input.grade!==0)throw Error('Escolha 1 ponto por acerto, meio pela criatividade ou zero. Quem passou recebe zero.');
  // Scores use integer half-points internally: 2 = 1 point, 1 = 0.5.
  w.grades[target]=input.grade;return;
 }
 if(input.action==='words-confirm') {
  if(w.judging==='host'){
   if(seat!==0)throw Error('Quem criou a sala confirma o placar da rodada.');
   if(w.stage!=='judging'||w.grades.some(g=>g===null))throw Error('Registre a pontuação de todas as pessoas antes de confirmar.');
   const grades=w.grades as number[];grades.forEach((g,i)=>w.scores[i]+=g);
   w.history.push({index:w.index,word:w.deck[w.index],answers:w.answers.map(a=>a||{text:'Resposta no papel',passed:false}),grades:[...grades],ended:now});
   w.stage=w.index+1===w.count?'finished':'result';return;
  }
  if(w.stage!=='judging'||w.grades[1-seat]===null)throw Error('Avalie a resposta da sua companhia antes de confirmar.');
  w.confirmed[seat]=input.ready!==false;
  if(w.confirmed.every(Boolean)&&w.grades.every(g=>g!==null)) {
   const grades=w.grades as number[];grades.forEach((g,i)=>w.scores[i]+=g);
   w.history.push({index:w.index,word:w.deck[w.index],answers:w.answers as WordAnswer[],grades:[...grades],ended:now});
   w.stage=w.index+1===w.count?'finished':'result';
  }
  return;
 }
 if(input.action==='words-next') {
  if(w.judging==='host'&&seat!==0)throw Error('Quem criou a sala avança para a próxima palavra.');
  if(w.stage!=='result')throw Error('Confirmem o placar antes de continuar.');
  w.index++;w.stage='writing';w.answers=Array(w.scores.length).fill(null);w.grades=Array(w.scores.length).fill(null);w.confirmed=Array(w.capacity||2).fill(false);return 'ready';
 }
 throw Error('Ação indisponível no Duelo das Palavras.');
}
export function wordsView(w:WordGame,seat:number,started:boolean,names:string[]=[]):WordView {
 const playerIndex=seat-(w.judgeOnly&&w.mode!=='local'?1:0),revealed=w.stage!=='writing',entry=wordCatalog.find(e=>e.id===w.deck[w.index])!;
 return {judgeOnly:!!w.judgeOnly,isJudge:!!w.judgeOnly&&seat===0,playerIndex,judgeName:names[0]||'Juiz',canReveal:started&&w.stage==='writing'&&(w.mode==='local'||w.answers.every(Boolean)),mode:w.mode||'online',judging:w.judging||'circle',capacity:w.capacity||2,names:w.mode==='local'?w.names||[]:w.judgeOnly?names.slice(1):names,level:w.level,count:w.count,index:w.index,stage:w.stage,word:!started?null:revealed?entry:{term:entry.term,level:entry.level},answers:w.answers.map((a,i)=>!a?{submitted:false}:revealed||i===playerIndex&&!(w.judgeOnly&&seat===0)?{submitted:true,...a}:{submitted:true}),grades:revealed?w.grades:Array(w.scores.length).fill(null),confirmed:w.confirmed,scores:w.scores,history:w.history.map(r=>({...r,word:wordCatalog.find(e=>e.id===r.word)!}))};
}
