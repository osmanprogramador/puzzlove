import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
function load(file){const exports={};vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,{exports});return exports;}
const {zoomAt}=load('lib/view.ts'),{scenes,surpriseName}=load('lib/catalog.ts');
const view={zoom:2,pan:{x:25,y:-30}},from={x:80,y:90},to={x:100,y:120};
for(const requested of [.01,1,4,50]){const next=zoomAt(view,from,to,requested);assert.ok(next.zoom>=.5&&next.zoom<=12);assert.equal((to.x-next.pan.x)/next.zoom,(from.x-view.pan.x)/view.zoom);assert.equal((to.y-next.pan.y)/next.zoom,(from.y-view.pan.y)/view.zoom);}
assert.ok(scenes.length>=10);assert.equal(new Set(scenes.map(s=>s.image)).size,scenes.length);
const credits=JSON.parse(fs.readFileSync('public/photos/credits.json','utf8'));
for(const scene of scenes){assert.ok(fs.statSync('public'+scene.image).size>1000);assert.ok(credits.some(c=>c.id===scene.id));assert.ok(surpriseName(scene.id).startsWith('Destino surpresa '));}
console.log('Zoom mantém o ponto tocado, respeita os limites e todas as 10 fotos têm arquivo, crédito e nome de surpresa.');
