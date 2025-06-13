import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

// Configuração otimizada da fonte
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"], // Carrega apenas os pesos que usamos
  variable: "--font-inter", // Permite personalização via CSS
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
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Preloads críticos para LCP */}
        <link rel="preload" href="/images/icone-carro-azul.webp" as="image" type="image/webp" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Preload do CSS crítico */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* CSS crítico para o LCP */
            .hero-title {
              font-size: 2.25rem;
              font-weight: 700;
              line-height: 1.2;
            }
            @media (min-width: 768px) {
              .hero-title {
                font-size: 3rem;
              }
            }
            @media (min-width: 1024px) {
              .hero-title {
                font-size: 3.75rem;
              }
            }
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
