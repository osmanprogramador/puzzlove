import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
export default defineConfig({
 root:path.resolve('github-pages'),base:'/puzzlove/',plugins:[react()],
 publicDir:path.resolve('public'),
 define:{__PUZZLOVE_BASE__:JSON.stringify('/puzzlove/'),__PUZZLOVE_API__:JSON.stringify(process.env.PUZZLOVE_API_ORIGIN||'https://pecas-do-tempo-osman.osmananalisedesistem.chatgpt.site')},
 build:{outDir:path.resolve('pages-dist'),emptyOutDir:true},
});
