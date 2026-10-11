import { env } from 'cloudflare:workers';
import { applyAction, initialRoom, publicRoom, cleanName, normalizeRoom, type Room } from '../../../lib/game';
export const dynamic='force-dynamic';
const json=(data:any,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
const hash=async(token:string)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(token)))).map(n=>n.toString(16).padStart(2,'0')).join('');
const random=(n:number)=>Array.from(crypto.getRandomValues(new Uint8Array(n))).map(n=>'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[n%32]).join('');
async function read(code:string){return env.DB!.prepare('SELECT revision,data FROM rooms WHERE code=? AND expires>?').bind(code,Date.now()).first<{revision:number;data:string}>();}
function sameOrigin(req:Request){const origin=req.headers.get('origin');return !origin||origin===new URL(req.url).origin;}
export async function GET(req:Request) {
  try {
    const url=new URL(req.url), code=url.searchParams.get('code')||'';
    const row=await read(code);if(!row)return json({error:'Sala não encontrada ou expirada.'},404);
    const room=JSON.parse(row.data) as Room, token=req.headers.get('x-player-token')||'', digest=await hash(token);
    const seat=room.players.findIndex(p=>p.hash===digest);if(seat<0)return json({error:'Entre na sala com o código de convite.'},401);
    if(url.searchParams.get('revision')===String(row.revision))return new Response(null,{status:204,headers:{'Cache-Control':'no-store'}});
    return json(publicRoom(room,seat));
  }catch{return json({error:'Não foi possível acessar a sala. Tente novamente.'},503);}
}
export async function POST(req:Request) {
  try {
    if(!sameOrigin(req))return json({error:'Origem inválida.'},403);
    if(Number(req.headers.get('content-length')||0)>100000)return json({error:'Pedido muito grande.'},413);
    const raw=await req.text();if(raw.length>100000)return json({error:'Pedido muito grande.'},413);
    const input=JSON.parse(raw);let token=req.headers.get('x-player-token')||'';
    if(input.action==='create') {
      token=random(48);const code=random(8),room=initialRoom(code,await hash(token),input);
      await env.DB!.prepare('INSERT INTO rooms(code,revision,data,expires) VALUES(?,?,?,?)').bind(code,0,JSON.stringify(room),Date.now()+7*86400000).run();
      await env.DB!.prepare('DELETE FROM rooms WHERE code IN (SELECT code FROM rooms WHERE expires<? LIMIT 100)').bind(Date.now()).run();
      return json({room:publicRoom(room,0),token});
    }
    const code=String(input.code||'').toUpperCase().replace(/[^A-Z0-9]/g,'');
    if(!/^[A-Z0-9]{8}$/.test(code))return json({error:'O código tem 8 caracteres.'},400);
    const join=input.action==='join';if(join&&!token)token=random(48);
    const digest=await hash(token);
    for(let attempt=0;attempt<12;attempt++) {
      const row=await read(code);if(!row)return json({error:'Sala não encontrada ou expirada.'},404);
      const room=normalizeRoom(JSON.parse(row.data) as Room);let seat=room.players.findIndex(p=>p.hash===digest);
      if(join) {
        if(seat<0) {
          if(room.players.length>=2)return json({error:'Essa sala já tem duas pessoas. Use o aparelho em que entrou para reconectar.'},409);
          seat=room.players.length;room.players.push({name:cleanName(input.name),hash:digest,ready:false,seen:Date.now(),finished:null});
        }else room.players[seat].seen=Date.now();
      }else {
        if(seat<0)return json({error:'Entre na sala primeiro.'},401);
        try {applyAction(room,seat,input);}catch(e){return json({error:(e as Error).message},409);}
      }
      room.revision=row.revision+1;
      const update=await env.DB!.prepare('UPDATE rooms SET revision=?,data=? WHERE code=? AND revision=?').bind(room.revision,JSON.stringify(room),code,row.revision).run();
      if(update.meta.changes)return json({room:publicRoom(room,seat),...(join?{token}:{})});
    }
    return json({error:'Sala ocupada, tente novamente.'},409);
  }catch{return json({error:'Não foi possível salvar. Confira a conexão e tente novamente.'},503);}
}
