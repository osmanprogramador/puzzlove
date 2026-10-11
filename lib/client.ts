declare const __PUZZLOVE_BASE__: string | undefined;
declare const __PUZZLOVE_API__: string | undefined;
export const appBase=typeof __PUZZLOVE_BASE__==='undefined'?'/':__PUZZLOVE_BASE__!;
const apiOrigin=typeof __PUZZLOVE_API__==='undefined'?'':__PUZZLOVE_API__!;
export const asset=(path:string)=>appBase+path.replace(/^\//,'');
export const api=(path:string)=>apiOrigin+path;
