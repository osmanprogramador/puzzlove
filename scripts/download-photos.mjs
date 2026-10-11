import fs from 'node:fs/promises';
const files=[['bom-jesus-hoje','Rua do Bom Jesus (2013) 1.jpg'],['bom-jesus-1880','Rua do Bom Jesus, c. 1880.jpg'],['marco-zero','Marco Zero - Recife Antigo - Recife, Pernambuco, Brasil (foto Panorâmica night).jpg'],['mercado-1905','1905 - Manoel Tondella; Photographia Tondella. Mercado Público de São José, 1905. Recife, Pernambuco - Acervo FUNDAJ.jpg']];
await fs.mkdir('public/photos',{recursive:true});
let credits=[];
try{credits=JSON.parse(await fs.readFile('public/photos/credits.json','utf8'));}catch{}
for(const [id,file] of files){
 const url=new URL('https://commons.wikimedia.org/w/api.php');url.search=new URLSearchParams({action:'query',format:'json',prop:'imageinfo',iiprop:'url|extmetadata',titles:'File:'+file});
 const response=await fetch(url,{headers:{'User-Agent':'PecasDoTempo/1.0 (educational jigsaw; Wikimedia attribution)'}});if(!response.ok)throw Error('Metadata '+response.status);
 const data=await response.json(), info=Object.values(data.query.pages)[0].imageinfo[0];
 credits=credits.filter(credit=>credit.id!==id);credits.push({id,file,...info});await fs.writeFile('public/photos/credits.json',JSON.stringify(credits,null,2));
 try{await fs.access('public/photos/'+id+'.jpg');continue;}catch{}
 let image=await fetch(info.url,{headers:{'User-Agent':'PecasDoTempo/1.0'}});
 for(let attempt=0;!image.ok&&attempt<3;attempt++){await new Promise(r=>setTimeout(r,3000));image=await fetch(info.url,{headers:{'User-Agent':'PecasDoTempo/1.0'}});}
 if(!image.ok)throw Error('Image '+image.status);
 await fs.writeFile('public/photos/'+id+'.jpg',Buffer.from(await image.arrayBuffer()));console.log(id+' salvo');
}
