import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import http from 'node:http';
import net from 'node:net';
import {spawn,spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('..',import.meta.url)));
const state=path.join(os.tmpdir(),'puzzlove-words-state'),runtime=path.resolve('.sites-runtime'),root=path.join(runtime,'local-preview'),children=new Set();
let server,stopping=false;
function stop(){if(stopping)return;stopping=true;server?.close();for(const child of children){if(child.exitCode===null){if(process.platform==='win32')spawnSync('taskkill',['/PID',String(child.pid),'/T','/F'],{stdio:'ignore',windowsHide:true});else child.kill('SIGTERM');}}}
process.on('SIGINT',()=>{stop();process.exit(0);});process.on('SIGTERM',()=>{stop();process.exit(0);});process.on('exit',stop);
async function free(port){return new Promise((resolve,reject)=>{const socket=net.createServer();socket.once('error',()=>reject(Error(`A porta ${port} já está em uso. Feche a prévia anterior antes de iniciar outra.`)));socket.listen(port,'127.0.0.1',()=>socket.close(resolve));});}
async function run(args){return new Promise((resolve,reject)=>{const child=spawn(process.execPath,args,{stdio:'inherit',windowsHide:true});children.add(child);child.once('error',reject);child.once('exit',code=>{children.delete(child);code===0?resolve():reject(Error('A preparação local falhou. Confira a mensagem acima.'));});});}
try {
 if(!fs.existsSync('node_modules/vite/bin/vite.js'))throw Error('As dependências não estão instaladas neste checkout. Execute npm ci antes.');
 await free(5173);await free(4173);fs.mkdirSync(runtime,{recursive:true});
 const config=path.join(runtime,'local-rooms.wrangler.json');fs.writeFileSync(config,JSON.stringify({name:'puzzlove-local',compatibility_date:'2026-05-15',d1_databases:[{binding:'DB',database_name:'site-creator-d1',database_id:'00000000-0000-4000-8000-000000000000'}]}));
 await run(['node_modules/wrangler/bin/wrangler.js','d1','execute','DB','--local','--persist-to',state,'--config',config,'--command','CREATE TABLE IF NOT EXISTS rooms (code text PRIMARY KEY NOT NULL, revision integer DEFAULT 0 NOT NULL, data text NOT NULL, expires integer NOT NULL)']);
 await run(['node_modules/vite/bin/vite.js','build','--config','vite.local.config.ts']);
 const backend=spawn(process.execPath,['scripts/run-framework.mjs','dev'],{env:{...process.env,PECAS_LOCAL_STATE:state},windowsHide:true,stdio:['ignore','pipe','pipe']});children.add(backend);let tail='';for(const stream of [backend.stdout,backend.stderr])stream.on('data',data=>tail=(tail+data).slice(-3000));backend.on('error',err=>{console.error(err.message);stop();process.exitCode=1;});backend.on('exit',()=>{children.delete(backend);if(!stopping){console.error('O servidor local foi encerrado.\n'+tail);stop();process.exitCode=1;}});
 let ready=false;for(let attempt=0;attempt<120&&!stopping;attempt++){try{const res=await fetch('http://127.0.0.1:5173/api/rooms?code=PREVIEW0',{signal:AbortSignal.timeout(1500)});if(res.status===404){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,500));}
 if(!ready)throw Error('O servidor local não iniciou.\n'+tail);
 const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.json':'application/json; charset=utf-8','.woff2':'font/woff2'};
 server=http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://127.0.0.1:4173');if(url.pathname==='/api/rooms'){if(!['GET','POST','OPTIONS'].includes(req.method)){res.writeHead(405);res.end();return;}if(req.method==='OPTIONS'){res.writeHead(204);res.end();return;}const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>100000){res.writeHead(413);res.end();return;}chunks.push(chunk);}const response=await fetch('http://127.0.0.1:5173'+url.pathname+url.search,{method:req.method,headers:{'Content-Type':'application/json','x-player-token':req.headers['x-player-token']||''},...(req.method==='POST'?{body:Buffer.concat(chunks)}:{})});res.writeHead(response.status,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(Buffer.from(await response.arrayBuffer()));return;}
  const file=path.resolve(root,decodeURIComponent(url.pathname.replace(/^\/puzzlove\/?/,''))||'index.html');if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});fs.createReadStream(file).pipe(res);
 }catch{res.writeHead(503);res.end('Não foi possível atender o pedido local.');}});
 await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(4173,'127.0.0.1',resolve);});
 console.log('\nPuzzlove local — nenhuma publicação foi feita.\nAbra: http://127.0.0.1:4173/puzzlove/?jogo=palavras\nSegunda pessoa neste computador: http://localhost:4173/puzzlove/\nUse o convite da mesma sala. Ctrl+C encerra os dois servidores.\n');
}catch(err){console.error(err.message);stop();process.exitCode=1;}
