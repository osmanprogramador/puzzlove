import { encounters } from './encounters';
export type Note = {text:string;shared:boolean;skipped:boolean};
export type Notes = {reflection?:Note;message?:Note;commitment?:Note};
export type Journey = {encounter:number;step:number;revealed:number;discovered:boolean;choices:(number|null)[];confirmed:boolean[];paused:boolean;finished:boolean;notes:Record<string,Notes[]>;completed:{encounter:number;ended:number;players:string[]}[]};
export const newJourney=():Journey=>({encounter:0,step:0,revealed:1,discovered:false,choices:[null,null],confirmed:[false,false],paused:false,finished:false,notes:{},completed:[]});
export function applyJourney(j:Journey,seat:number,input:any,players:string[],now:number) {
 if(input.encounter!==j.encounter)throw Error('O encontro mudou. Aguarde a atualização.');
 if(input.action==='journey-pause'){j.paused=input.paused===true;return;}
 if(j.paused)throw Error('Retomem o encontro para continuar.');
 if(input.action==='journey-next'){
  if(!j.finished||j.encounter>=encounters.length-1)throw Error('Concluam este encontro primeiro.');
  j.encounter++;j.step=0;j.revealed=1;j.discovered=false;j.choices=[null,null];j.confirmed=[false,false];j.finished=false;return;
 }
 if(j.finished||input.step!==j.step)throw Error('Esta etapa já foi concluída. Aguarde a atualização.');
 const e=encounters[j.encounter];j.notes[e.id]??=[{},{}];const notes=j.notes[e.id][seat];
 if(input.action==='journey-reveal'&&j.step===0){j.revealed=Math.min(e.discovery.length,j.revealed+1);return;}
 if(input.action==='journey-discover'&&j.step===0){if(input.choice!==e.answer)throw Error('Ainda não é essa história. Revelem outra pista e conversem.');j.discovered=true;return;}
 if(input.action==='journey-choice'&&j.step===2){if(!Number.isInteger(input.choice)||input.choice<0||input.choice>2)throw Error('Escolha uma resposta.');j.choices[seat]=input.choice;j.confirmed[seat]=false;return;}
 if(input.action==='journey-note'){
  if(!((j.step===3&&['reflection','message'].includes(input.field))||(j.step===4&&input.field==='commitment'))||input.field==='message'&&!e.message)throw Error('Esta pergunta não está disponível nesta etapa.');
  if(typeof input.text!=='string'||input.text.length>1200||!input.skipped&&!input.text.trim())throw Error('Escreva até 1.200 caracteres ou escolha pular.');
  notes[input.field as keyof Notes]={text:input.skipped?'':input.text.trim(),shared:!input.skipped&&input.shared===true,skipped:input.skipped===true};j.confirmed[seat]=false;return;
 }
 if(input.action==='journey-ready'){
  if(players.length!==2)throw Error('Aguardem sua companhia entrar.');
  if(j.step===0&&!j.discovered)throw Error('Descubram a história antes de continuar.');
  if(j.step===2&&!j.choices.every((v,i)=>v===e.questions[i].answer))throw Error('Conversem sobre as duas pistas e confiram as respostas na leitura.');
  if(j.step===3&&(!notes.reflection||e.message&&!notes.message))throw Error('Guardem ou pulem as perguntas pessoais antes de continuar.');
  if(j.step===4&&!notes.commitment)throw Error('Escolha uma atitude ou pule por hoje.');
  j.confirmed[seat]=input.ready!==false;
  if(j.confirmed.every(Boolean)){if(j.step===4){j.completed.push({encounter:j.encounter,ended:now,players:[...players]});j.finished=true;}else{j.step++;j.confirmed=[false,false];}}return;
 }
 throw Error('Ação indisponível nesta etapa.');
}
function visibleNotes(notes:Notes,own:boolean):Notes {
 const result:Notes={};for(const field of ['reflection','message','commitment'] as const){const n=notes[field];if(n)result[field]={text:own||n.shared?n.text:'',shared:n.shared,skipped:n.skipped};}return result;
}
export function journeyView(j:Journey,seat:number){const e=encounters[j.encounter];return {encounter:j.encounter,step:j.step,revealed:j.revealed,discovered:j.discovered,choices:j.choices.map((v,i)=>({submitted:v!==null,correct:v===e.questions[i].answer,choice:i===seat?v:undefined})),confirmed:j.confirmed,paused:j.paused,finished:j.finished,notes:(j.notes[e.id]||[{},{}]).map((n,i)=>visibleNotes(n,i===seat)),completed:j.completed.map(r=>({...r,entries:(j.notes[encounters[r.encounter].id]||[{},{}]).map((n,i)=>visibleNotes(n,i===seat))}))};}
