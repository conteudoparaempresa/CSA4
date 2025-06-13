import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* CSS crítico inline para primeira dobra */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* CSS crítico para FCP otimizado */
              body { 
                font-family: ${inter.style.fontFamily}, system-ui, -apple-system, sans-serif;
                margin: 0;
                background: #ffffff;
                color: #0f172a;
                line-height: 1.5;
              }
              
              /* Header crítico */
              .header-critical {
                position: sticky;
                top: 0;
                z-index: 50;
                width: 100%;
                border-bottom: 1px solid #e2e8f0;
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(12px);
              }
              
              .container-critical {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 1rem;
                display: flex;
                height: 4rem;
                align-items: center;
                justify-content: space-between;
              }
              
              /* Hero crítico */
              .hero-critical {
                position: relative;
                overflow: hidden;
                background: linear-gradient(to bottom, #dbeafe, #ffffff);
                min-height: 100vh;
                display: flex;
                align-items: center;
                padding-top: 5rem;
              }
              
              .hero-title-critical {
                font-size: 2.25rem;
                font-weight: 700;
                line-height: 1.2;
                margin: 0 0 1rem 0;
              }
              
              .hero-subtitle-critical {
                font-size: 1.125rem;
                color: #4b5563;
                margin: 0 0 1.5rem 0;
              }
              
              .form-container-critical {
                background: rgba(255, 255, 255, 0.95);
                border-radius: 0.75rem;
                padding: 1.25rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(4px);
              }
              
              /* Responsive */
              @media (min-width: 768px) {
                .hero-title-critical {
                  font-size: 3rem;
                }
                .hero-subtitle-critical {
                  font-size: 1.25rem;
                }
                .hero-critical {
                  padding-top: 0;
                }
              }
              
              @media (min-width: 1024px) {
                .hero-title-critical {
                  font-size: 3.75rem;
                }
              }
              
              /* Loading placeholder para formulário */
              .form-loading {
                height: 400px;
                background: #f8fafc;
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #64748b;
              }
            `,
          }}
        />

        {/* Preload crítico */}
        <link rel="preload" href="/images/icone-compro-seu-auto-azul.svg" as="image" />

        {/* Script para carregar CSS não crítico de forma assíncrona */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '/_next/static/css/1042a8bc65b871b4.css';
                link.media = 'print';
                link.onload = function() {
                  this.media = 'all';
                };
                document.head.appendChild(link);
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: "Compro Auto - Venda seu veículo de forma rápida e segura",
  description: "Venda seu veículo de forma rápida, segura e com avaliação justa. Receba uma proposta em até 24 horas.",
  generator: "v0.dev",
}
