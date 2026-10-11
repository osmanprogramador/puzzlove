import type { Metadata } from 'next';
export const metadata:Metadata={title:'Puzzlove — Servidor das salas',description:'Servidor das partidas com convite.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>;}
