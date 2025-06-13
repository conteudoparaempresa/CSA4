"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Carregamento dinâmico do componente de formulário pesado
const FormularioVeiculoCompacto = dynamic(
  () => import("@/components/formulario-veiculo-compacto").then((mod) => ({ default: mod.FormularioVeiculoCompacto })),
  {
    ssr: false,
    loading: () => (
      <div className="p-6 animate-pulse">
        <div className="h-6 bg-slate-200 rounded mb-4"></div>
        <div className="h-10 bg-slate-200 rounded mb-3"></div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="h-10 bg-slate-200 rounded"></div>
          <div className="h-10 bg-slate-200 rounded"></div>
        </div>
        <div className="h-10 bg-slate-200 rounded"></div>
      </div>
    ),
  },
)

type SectionRefs = {
  comoFuncionaRef: React.RefObject<HTMLElement>
  beneficiosRef: React.RefObject<HTMLElement>
  veiculosRef: React.RefObject<HTMLElement>
  faqRef: React.RefObject<HTMLElement>
  formularioRef: React.RefObject<HTMLDivElement>
}

export function ClientInteractions({ refs }: { refs: SectionRefs }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { comoFuncionaRef, beneficiosRef, veiculosRef, faqRef, formularioRef } = refs

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return {
    isMobileMenuOpen,
    openFaq,
    toggleFaq,
    scrollToSection,
    setIsMobileMenuOpen,
    MobileMenuButton: () => (
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
      </button>
    ),
    MobileMenu: () => (
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100 border-t bg-white/95 backdrop-blur-md"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="container py-4 space-y-4">
          <button
            className="block text-sm font-medium hover:text-blue-600 transition-colors py-2 w-full text-left"
            onClick={() => scrollToSection(comoFuncionaRef)}
          >
            Como Funciona
          </button>
          <button
            className="block text-sm font-medium hover:text-blue-600 transition-colors py-2 w-full text-left"
            onClick={() => scrollToSection(beneficiosRef)}
          >
            Benefícios
          </button>
          <button
            className="block text-sm font-medium hover:text-blue-600 transition-colors py-2 w-full text-left"
            onClick={() => scrollToSection(formularioRef)}
          >
            Vender Meu Carro
          </button>
          <div className="pt-2">
            <Button onClick={() => scrollToSection(formularioRef)} size="sm" className="w-full">
              Avaliar Meu Veículo
            </Button>
          </div>
        </nav>
      </div>
    ),
    FormularioComponent: () => (
      <div
        ref={formularioRef}
        className="relative mx-auto w-full max-w-lg rounded-xl bg-white/95 p-5 backdrop-blur-sm shadow-lg"
      >
        <FormularioVeiculoCompacto />
      </div>
    ),
    FaqToggle: ({ index, question }: { index: number; question: string }) => (
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={() => toggleFaq(index)}
      >
        <h3 className="font-semibold text-gray-900">{question}</h3>
        {openFaq === index ? (
          <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
        )}
      </button>
    ),
    FaqContent: ({ index, answer }: { index: number; answer: string }) => (
      <div
        className={`transition-all duration-300 ease-in-out ${
          openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-4">
          <p className="text-gray-600 whitespace-pre-line">{answer}</p>
        </div>
      </div>
    ),
    NavButtons: () => (
      <>
        <button
          onClick={() => scrollToSection(comoFuncionaRef)}
          className="text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Como Funciona
        </button>
        <button
          onClick={() => scrollToSection(beneficiosRef)}
          className="text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Benefícios
        </button>
        <button
          onClick={() => scrollToSection(formularioRef)}
          className="text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Vender Meu Carro
        </button>
      </>
    ),
    HeaderButton: () => (
      <Button onClick={() => scrollToSection(formularioRef)} size="sm" className="hidden md:inline-flex">
        Avaliar Meu Veículo
      </Button>
    ),
  }
}
