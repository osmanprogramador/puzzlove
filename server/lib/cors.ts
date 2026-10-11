export const allowedOrigin=(origin:string|null)=>origin==='https://osmanprogramador.github.io';
export function withCors(request:Request,response:Response){
 if(!allowedOrigin(request.headers.get('origin')))return response;
 const headers=new Headers(response.headers);
 headers.set('Access-Control-Allow-Origin','https://osmanprogramador.github.io');
 headers.set('Vary','Origin');
 headers.set('Access-Control-Allow-Methods','GET, POST, OPTIONS');
 headers.set('Access-Control-Allow-Headers','Content-Type, X-Player-Token');
 headers.set('Access-Control-Max-Age','600');
 return new Response(response.body,{status:response.status,headers});
}
