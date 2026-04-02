import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var s = localStorage.getItem('theme');
            var d = document.documentElement;
            if (s === 'dark' || (!s && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              d.classList.add('dark');
            }
          })();
        `}} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider>
          <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
            <div className="mx-auto max-w-xl px-4 py-3 flex items-center justify-between">
              <span className="font-semibold text-base tracking-tight">
                🚦 Simulador de Examen — Quilmes
              </span>
              <ThemeToggle />
            </div>
          </header>
          <main className="flex flex-1 flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
