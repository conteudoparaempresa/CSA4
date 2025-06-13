import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

// Otimização de fontes
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Compro Auto - Venda seu veículo de forma rápida e segura",
  description: "Venda seu veículo de forma rápida, segura e com avaliação justa. Receba uma proposta em até 24 horas.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* CSS crítico inline para melhorar FCP */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body { font-family: Inter, sans-serif; margin: 0; }
          .header-critical { position: sticky; top: 0; z-index: 50; width: 100%; border-bottom-width: 1px; background-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px); }
          .hero-critical { min-height: 100vh; background: linear-gradient(to bottom, #dbeafe, #ffffff); display: flex; align-items: center; padding-top: 5rem; }
          .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
          .logo-container { width: 40px; height: 40px; aspect-ratio: 1; }
          .form-container { min-height: 400px; }
        `,
          }}
        />

        {/* Preload de recursos críticos */}
        <link rel="preload" href="/images/icone-compro-seu-auto-azul.svg" as="image" />

        {/* DNS prefetch e preconnect */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Carregamento assíncrono de CSS não-crítico */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          const loadCSS = (href) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.media = 'print';
            link.onload = () => link.media = 'all';
            document.head.appendChild(link);
          };
          // Carregar CSS não-crítico após o conteúdo principal
          window.addEventListener('load', () => {
            setTimeout(() => {
              if (document.querySelector('[data-non-critical]')) {
                loadCSS(document.querySelector('[data-non-critical]').getAttribute('data-href'));
              }
            }, 100);
          });
        `,
          }}
        />
      </body>
    </html>
  )
}
