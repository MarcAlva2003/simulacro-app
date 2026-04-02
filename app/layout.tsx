import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Simulador de Examen - Quilmes",
  description: "Simulador de examen teórico de manejo para Quilmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-xl px-4 py-3">
            <span className="font-semibold text-base tracking-tight">
              🚦 Simulador de Examen — Quilmes
            </span>
          </div>
        </header>
        <main className="flex flex-1 flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
