import fs from 'node:fs';
import vm from 'node:vm';
const movies=vm.runInNewContext(fs.readFileSync('public/filme/database.js','utf8')+'; MOVIE_DATABASE');
if(movies.length<100||movies.some(m=>m.stages.length!==6))throw Error('Catálogo incompleto.');
fs.writeFileSync('public/filme/catalog.json',JSON.stringify(movies));
console.log(`${movies.length} títulos preservados no catálogo da interface integrada.`);
