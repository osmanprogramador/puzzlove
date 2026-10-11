import fs from 'node:fs/promises';
const files=[
 ['teatro-fachada','Teatro Santa Isabel em Recife.JPG'],
 ['teatro-interior','Teatro de Santa Isabel, Recife, Pernambuco, Brasil.jpg'],
 ['olinda-se','Olinda Pernambuco plaza church Jun 2017.jpg'],
 ['malakoff','Torre Malakoff - Recife, Pernambuco, Brasil.jpg'],
 ['capela','Capela dourada, Recife - PE.JPG'],
 ['forte','Apr2024. Recife City Museum aka Museu da Cidade do Recife - Forte das Cinco Pontas 26.jpg'],
];
const credits=JSON.parse(await fs.readFile('public/photos/credits.json','utf8'));
for(const [id,file] of files){
 const url=new URL('https://commons.wikimedia.org/w/api.php');url.search=new URLSearchParams({action:'query',format:'json',prop:'imageinfo',iiprop:'url|extmetadata|size',iiurlwidth:'1600',titles:'File:'+file});
 const response=await fetch(url,{headers:{'User-Agent':'PecasDoTempo/1.0 (educational jigsaw; attribution)'}});if(!response.ok)throw Error('Metadata '+response.status);
 const data=await response.json(),info=Object.values(data.query.pages)[0].imageinfo[0];
 if(!info.extmetadata.LicenseShortName)throw Error('Missing license');
 const prior=credits.findIndex(c=>c.id===id);if(prior>=0)credits.splice(prior,1);credits.push({id,file,...info});
 let image=await fetch(info.thumburl||info.url,{headers:{'User-Agent':'PecasDoTempo/1.0'}});
 for(let attempt=0;!image.ok&&attempt<3;attempt++){await new Promise(r=>setTimeout(r,3000));image=await fetch(info.thumburl||info.url,{headers:{'User-Agent':'PecasDoTempo/1.0'}});}
 if(!image.ok)throw Error('Image '+image.status);
 await fs.writeFile('public/photos/'+id+'.jpg',Buffer.from(await image.arrayBuffer()));
 await fs.writeFile('public/photos/credits.json',JSON.stringify(credits,null,2));
 console.log(JSON.stringify({id,date:info.extmetadata.DateTimeOriginal?.value,author:info.extmetadata.Artist?.value,license:info.extmetadata.LicenseShortName.value,licenseUrl:info.extmetadata.LicenseUrl?.value}));
}
