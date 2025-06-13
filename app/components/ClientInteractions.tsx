"use client"

import { useState } from "react"

// Componente ultra-leve para navegação
export function ClientInteractions() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <button
          onClick={() => scrollToSection("como-funciona")}
          className="text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Como Funciona
        </button>
        <button
          onClick={() => scrollToSection("beneficios")}
          className="text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Benefícios
        </button>
        <button
          onClick={() => scrollToSection("formulario")}
          className="text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Vender Meu Carro
        </button>
      </nav>

      <button
        onClick={() => scrollToSection("formulario")}
        className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        Avaliar Meu Veículo
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-16 border-t bg-white/95 backdrop-blur-md">
          <nav className="container py-4 space-y-4">
            <button
              className="block text-sm font-medium hover:text-blue-600 transition-colors py-2 w-full text-left"
              onClick={() => scrollToSection("como-funciona")}
            >
              Como Funciona
            </button>
            <button
              className="block text-sm font-medium hover:text-blue-600 transition-colors py-2 w-full text-left"
              onClick={() => scrollToSection("beneficios")}
            >
              Benefícios
            </button>
            <button
              className="block text-sm font-medium hover:text-blue-600 transition-colors py-2 w-full text-left"
              onClick={() => scrollToSection("formulario")}
            >
              Vender Meu Carro
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection("formulario")}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                Avaliar Meu Veículo
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
