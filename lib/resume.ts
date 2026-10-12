export type SavedRoom={code:string;kind:string};
export function savedRoom(raw:string):SavedRoom|null {
 try{const r=JSON.parse(raw);return /^[A-Z0-9]{8}$/.test(r?.code)&&['puzzle','film','journey'].includes(r?.kind)?{code:r.code,kind:r.kind}:null;}catch{return null;}
}
export async function fetchSavedRoom(url:string,code:string,token:string,signal?:AbortSignal):Promise<any> {
 if(!/^[A-Z0-9]{8}$/.test(code)||!token)throw Error('Este aparelho não tem o acesso salvo desta sala. Entre com o convite.');
 let res:Response;try{res=await fetch(`${url}?code=${encodeURIComponent(code)}`,{headers:{'x-player-token':token},signal});}catch(err){if((err as Error).name==='AbortError')throw err;throw Error('Não foi possível retomar agora. Sua sala continua salva; tente novamente quando a conexão voltar.');}
 if(res.status===401||res.status===403||res.status===404){const err=Object.assign(Error('Esta sala expirou ou o acesso salvo não está mais disponível. Vocês podem criar outra sala.'),{expired:true});throw err;}
 if(!res.ok)throw Error('O servidor está indisponível. Sua sala continua salva para tentar novamente.');
 return res.json();
}
