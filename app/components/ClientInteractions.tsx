"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

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
          onClick={() => scrollToSection("veiculos")}
          className="text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Veículos
        </button>
        <button
          onClick={() => scrollToSection("faq")}
          className="text-sm font-medium hover:text-blue-600 transition-colors"
        >
          FAQ
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 top-16 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100 border-t bg-white/95 backdrop-blur-md"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
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
            onClick={() => scrollToSection("veiculos")}
          >
            Veículos
          </button>
          <button
            className="block text-sm font-medium hover:text-blue-600 transition-colors py-2 w-full text-left"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </button>
        </nav>
      </div>
    </>
  )
}
