import { scenes, levels } from './catalog';
export type AlbumData={album:string[];achievements:Record<string,any[]>;journey:any[]};
const fail=()=>{throw Error('Este arquivo não é um backup válido do álbum do Puzzlove.');};
const obj=(v:any)=>v&&typeof v==='object'&&!Array.isArray(v);
const str=(v:any,max:number)=>typeof v==='string'&&v.length<=max;
const stamp=(v:any)=>Number.isSafeInteger(v)&&v>0;
const players=(v:any)=>Array.isArray(v)&&v.length===2&&v.every(n=>str(n,24)&&n.trim());
export function validateBackup(value:any):AlbumData {
 if(!obj(value)||value.format!=='puzzlove-album'||value.version!==1||!obj(value.puzzles)||!Array.isArray(value.puzzles.revealed)||!obj(value.puzzles.records)||!Array.isArray(value.journey)||value.journey.length>500)fail();
 const ids:string[]=scenes.map(s=>s.id),album=[...new Set<string>(value.puzzles.revealed.filter((id:any)=>ids.includes(id)))],achievements:Record<string,any[]>={};let total=0;
 for(const [photo,list] of Object.entries(value.puzzles.records)){if(!ids.includes(photo)||!Array.isArray(list)||list.length>500)fail();achievements[photo]=(list as any[]).map(r=>{if(!obj(r)||!str(r.id,100)||!Number.isInteger(r.round)||r.round<0||r.round>2||r.photo!==photo||!levels.some(l=>l.n===r.count)||!stamp(r.started)||!stamp(r.ended)||r.ended<r.started||!players(r.players)||!['coop','race'].includes(r.mode)||![null,0,1].includes(r.winner))fail();total++;return {id:r.id,photo,round:r.round,count:r.count,started:r.started,ended:r.ended,players:[...r.players],mode:r.mode,winner:r.winner,rotation:r.rotation===true};});if((list as any[]).length&&!album.includes(photo))album.push(photo);}
 if(total>2000)fail();
 const journey=value.journey.map((r:any)=>{if(!obj(r)||!str(r.id,100)||!Number.isInteger(r.encounter)||r.encounter<0||r.encounter>6||!stamp(r.ended)||!players(r.players)||![0,1].includes(r.seat)||!Array.isArray(r.entries)||r.entries.length!==2)fail();return {id:r.id,encounter:r.encounter,ended:r.ended,players:[...r.players],seat:r.seat,entries:r.entries.map((entry:any)=>{if(!obj(entry))fail();const notes:any={};for(const field of ['reflection','message','commitment'])if(entry[field]){const n=entry[field];if(!obj(n)||!str(n.text,1200)||typeof n.shared!=='boolean'||typeof n.skipped!=='boolean')fail();notes[field]={text:n.skipped?'':n.text,shared:n.shared,skipped:n.skipped};}return notes;})};});
 return {album,achievements,journey};
}
export function buildBackup(data:AlbumData,includePrivate=false){const value={format:'puzzlove-album',version:1,exportedAt:new Date().toISOString(),puzzles:{revealed:data.album,records:data.achievements},journey:data.journey.map(r=>({...r,entries:r.entries.map((entry:any)=>Object.fromEntries(Object.entries(entry).map(([field,n]:[string,any])=>[field,includePrivate||n.shared?n:{text:'',shared:false,skipped:true}])))}))};const clean=validateBackup(value);return {format:value.format,version:value.version,exportedAt:value.exportedAt,puzzles:{revealed:clean.album,records:clean.achievements},journey:clean.journey};}
export function mergeAlbums(existing:AlbumData,incoming:AlbumData):AlbumData {
 const unique=(old:any[],added:any[])=>[...new Map([...added,...old].map(r=>[r.id,r])).values()];
 const journey=unique(existing.journey,incoming.journey).map(r=>{const added=incoming.journey.find(n=>n.id===r.id);if(!added||added===r||added.seat!==r.seat)return r;return {...r,entries:r.entries.map((entry:any,i:number)=>{const notes={...added.entries[i],...entry};for(const field of ['reflection','message','commitment'])if(!entry[field]?.text&&added.entries[i][field]?.text)notes[field]=added.entries[i][field];return notes;})};});
 return {album:[...new Set([...existing.album,...incoming.album])],achievements:Object.fromEntries(scenes.map(s=>[s.id,unique(existing.achievements[s.id]||[],incoming.achievements[s.id]||[])]).filter(([,list])=>(list as any[]).length)),journey};
}
