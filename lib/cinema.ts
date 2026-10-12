export type Movie={id:string;title:string;originalTitle:string;category:string;categoryName:string;year:number;director?:string;initialHint:string;trivia:string;synopsis:string;stages:{image:string;alt:string;points:number}[]};
export const categories=[['todos','Todos'],['ficcao','Ficção e fantasia'],['animacao','Animação'],['acao','Ação e aventura'],['classicos','Clássicos'],['series','Séries'],['comedia','Comédia e nacional'],['romance','Romance'],['anime','Animes'],['programas','Programas e reality'],['esportes','Esportes e documentários'],['natal','Natal']];
export function startCinema(catalog:Movie[],category:string,rounds:number,names:string[],scoringMode:string,random=()=>crypto.getRandomValues(new Uint32Array(1))[0]/4294967296){
 const deck=catalog.filter(m=>category==='todos'||m.category===category).map(m=>m.id);if(!deck.length)throw Error('Escolha uma categoria com títulos.');
 for(let i=deck.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}
 const totalRounds=Math.min(rounds,deck.length);return {screen:'game',selectedCategory:category,requestedRounds:rounds,totalRounds,players:{p1:{name:names[0],score:0},p2:{name:names[1],score:0}},deck:deck.slice(0,totalRounds),sessionId:crypto.randomUUID(),currentRoundIndex:0,maxUnlockedStageIndex:0,viewingStageIndex:0,roundScored:false,answerRevealed:false,frameReady:true,scoringMode:scoringMode==='immediate'?'immediate':'final',choices:['',''],modalOpen:false};
}
export function cinemaTransition(state:any,command:string,value?:any){
 const s=structuredClone(state);if(!s||s.screen!=='game')throw Error('A sessão não está em andamento.');
 if(command==='frame'){
  if(s.answerRevealed||s.roundScored||!Number.isInteger(value)||value<0||value>5||value>s.maxUnlockedStageIndex+1)throw Error('Esta imagem ainda está bloqueada.');
  s.viewingStageIndex=value;s.maxUnlockedStageIndex=Math.max(value,s.maxUnlockedStageIndex);return s;
 }
 if(command==='reveal'){
  if(s.answerRevealed||s.roundScored||s.scoringMode==='final'&&s.maxUnlockedStageIndex<5)throw Error('Revelem as seis imagens antes de conferir.');
  s.answerRevealed=true;s.modalOpen=true;s.choices=['',''];if(s.scoringMode!=='final'){s.roundScored=true;const points=6-s.maxUnlockedStageIndex;for(const [seat,key] of ['p1','p2'].entries())if(value==='both'||value===seat)s.players[key].score+=points;}return s;
 }
 if(command==='choice'){
  if(!s.answerRevealed||s.roundScored||s.scoringMode!=='final'||![0,1].includes(value?.seat)||!/^[0-6]$/.test(value?.choice))throw Error('Resultado inválido.');
  s.choices??=['',''];s.choices[value.seat]=value.choice;return s;
 }
 if(command==='next'){
  if(!s.answerRevealed)throw Error('Confiram a resposta antes de continuar.');
  if(s.scoringMode==='final'&&!s.roundScored){if(!s.choices?.every((c:string)=>/^[0-6]$/.test(c))||s.choices.length!==2)throw Error('Escolha o resultado das duas pessoas.');for(const [i,key] of ['p1','p2'].entries())s.players[key].score+=s.choices[i]==='0'?0:7-Number(s.choices[i]);s.roundScored=true;}
  if(!s.roundScored)throw Error('Registrem a pontuação.');s.modalOpen=false;
  if(s.currentRoundIndex+1>=s.totalRounds){s.screen='victory';return s;}
  s.currentRoundIndex++;s.maxUnlockedStageIndex=0;s.viewingStageIndex=0;s.answerRevealed=false;s.roundScored=false;s.choices=['',''];return s;
 }
 throw Error('Comando inválido.');
}
