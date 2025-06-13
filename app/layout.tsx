import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Adicionado para melhorar o LCP
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Preload da fonte principal para melhorar o LCP */}
        <link
          rel="preload"
          href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`}
          as="style"
        />
        {/* Preload das imagens críticas */}
        <link rel="preload" href="/images/icone-carro-azul.webp" as="image" />
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
  generator: "v0.dev",
}
