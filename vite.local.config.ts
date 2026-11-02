import base from './vite.pages.config';
import path from 'node:path';
// All requests stay on the local preview, including from the second hostname.
base.define!.__PUZZLOVE_API__=JSON.stringify('');
base.build!.outDir=path.resolve('.sites-runtime/local-preview');
export default base;
