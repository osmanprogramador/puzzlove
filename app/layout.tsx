import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./journey.css";

export const metadata: Metadata = {
  title: "Peças do Tempo | Nossa mesa a dois",
  description: "Quebra-cabeças, cinema e Caminho a Dois: encontros bíblicos cooperativos em salas para duas pessoas.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};
export const viewport: Viewport = {width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#285749'};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
