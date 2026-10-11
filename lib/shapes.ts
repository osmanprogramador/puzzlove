export function random(seed:number,id:number){let v=(seed+Math.imul(id+1,2654435761))|0;v=Math.imul(v^(v>>>16),2246822507);return ((v^(v>>>13))>>>0)/4294967296;}
export function edges(id:number,cols:number,rows:number,seed:number){
 const c=id%cols,r=Math.floor(id/cols),sign=(key:number)=>random(seed,key)>.5?1:-1;
 return [r===0?0:-sign(100000+(r-1)*cols+c),c===cols-1?0:sign(r*cols+c),r===rows-1?0:sign(100000+r*cols+c),c===0?0:-sign(r*cols+c-1)];
}
export function outline(id:number,cols:number,rows:number,seed:number){
 const e=edges(id,cols,rows,seed),parts=['M 0 0'];
 for(let side=0;side<4;side++) {
  const point=(u:number,v:number)=>{const xy=side===0?[u,-v]:side===1?[1+v,u]:side===2?[1-u,1+v]:[-v,1-u];return xy.map(n=>Number(n.toFixed(4))).join(' ');};
  const k=e[side];if(!k){parts.push('L '+point(1,0));continue;}
  parts.push('L '+point(.34,0),'C '+point(.44,0)+' '+point(.43,.04*k)+' '+point(.39,.10*k),'C '+point(.29,.26*k)+' '+point(.43,.27*k)+' '+point(.5,.27*k),'C '+point(.57,.27*k)+' '+point(.71,.26*k)+' '+point(.61,.10*k),'C '+point(.57,.04*k)+' '+point(.56,0)+' '+point(.66,0),'L '+point(1,0));
 }
 return parts.join(' ')+' Z';
}
