"use client"

import type React from "react"

import { useState, useRef } from "react"
import {
  CheckCircle,
  Clock,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Award,
  Car,
  Phone,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { FormularioVeiculoCompacto } from "@/components/formulario-veiculo-compacto"

export default function ClientPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Refs para as seções
  const comoFuncionaRef = useRef<HTMLElement>(null)
  const beneficiosRef = useRef<HTMLElement>(null)
  const veiculosRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const formularioRef = useRef<HTMLDivElement>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Função para scroll suave sem alterar a URL
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
    // Fechar o menu mobile se estiver aberto
    setIsMobileMenuOpen(false)
  }

  const faqs = [
    {
      question: "Existe algum custo?",
      answer: "Durante todo o processo você não precisa pagar nada, é tudo por nossa conta.",
    },
    {
      question: "Compram motos?",
      answer: "No momento estamos comprando apenas veículos.",
    },
    {
      question: "Compram veículos de leilão?",
      answer: "Compramos sim, mas somente leilão financeira.",
    },
    {
      question: "Até que ano vocês compram?",
      answer: "• Veículos leves a partir do ano 2000.\n• Veículos blindados qualquer ano.",
    },
    {
      question: "Onde vocês ficam?",
      answer:
        "Nós estamos na Freguesia do Ó, na Rua Professor João Machado, 684.\n\nPróximo a Av. Edgar Facó e Ministro Petrônio Portella.",
    },
    {
      question: "É seguro?",
      answer:
        "Sim, é totalmente seguro.\n\nSua segurança é nossa prioridade, conosco você está no controle de tudo.\n\nVocê só vende seu veículo se gostar da nossa proposta e só entrega o veículo após receber o pagamento à vista em sua conta.\n\nEstamos no mercado desde 2021 e já ajudamos milhares de pessoas a venderem seus veículos, tornando o processo mais seguro, prático e rápido.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 relative">
              <svg viewBox="0 0 900 672.36" className="h-full w-full fill-blue-600" aria-hidden="true">
                <path d="M867.59,163.06c-23.42-9.85-92.4-8.63-92.4-8.63-61.58-126.87-98.55-137.96-98.55-137.96-46.52-8.61-92.49-13.71-136.37-16.47-1.89,1.13-3.78,2.26-5.67,3.38-26.8-1.64-55.15-2.62-84.91-2.67-31.03-.06-60.54.91-88.38,2.59-1.86-1.01-3.71-2.02-5.57-3.03-42.69,2.82-87.28,7.84-132.41,16.2,0,0-36.94,11.09-98.54,137.96,0,0-68.99-1.22-92.38,8.63-23.4,9.87-48.04,39.43-19.72,51.73,28.34,12.32,81.3,8.63,81.3,8.63-6.04,6.7-11.31,12.75-15.75,17.96-9.36,10.97-11.17,13.62-12.25,17.88,0,0-.55,2.15-1.56,15.89,0,0-36.12,29.17-45.17,37.37-9.02,8.22-9.85,7.95-10.67,27.38-.83,19.43-3.28,303.58-3.28,303.58,0,0-1.24,27.09,28.32,28.32,29.57,1.25,77.61,0,77.61,0,0,0,24.64,2.47,25.87-24.62.57-12.73.61-17.84.49-19.7l-.49-.02s.34-2.09.49.02l90.66,3.68,50.51-16.02,6.17,8.62,165.06,1.25,165.06-1.25,6.17-8.62,50.49,16.02,90.67-3.68c.14-2.11.48-.02.48-.02l-.48.02c-.13,1.86-.09,6.97.48,19.7,1.25,27.09,25.87,24.62,25.87,24.62,0,0,48.06,1.25,77.6,0,29.57-1.23,28.34-28.32,28.34-28.32,0,0-2.47-284.15-3.27-303.58-.46-10.86-.92-15.57-2.82-19.04-2.59-4.74-6.3-7.22-7.87-8.34-9.01-6.41-24.1-18.56-45.05-35.92l-1.59-1.45c-1.01-13.74-1.56-15.89-1.56-15.89-1.09-4.26-2.89-6.91-12.26-17.88-4.44-5.21-9.71-11.26-15.75-17.96h2.19c11.36.72,20.8.81,27.56.74,35.02-.36,46.44-5.44,53.03-9.37,6.27-3.73,10.27-6.3,11.92-11.11,4.85-14.05-13.75-33.08-31.62-40.62ZM182.5,97.41c8.98-14.35,18.2-27.42,27.32-39.27,70.14-8.69,149.53-14.65,236.66-14.79,91-.15,173.68,6.09,246.29,15.21,8.74,11.68,17.54,24.61,26.07,38.85,22.88,38.18,37.25,74.82,46.5,105.89H132.6c10.53-31.44,26.18-67.96,49.9-105.89ZM33.63,379.87c-.61-6.17-1.22-20.33,0-28.34,1.25-8.01,5.96-15.39,13.36-19.29,7.38-3.91,32.84-2.05,32.84-2.05,0,0,44.55,15.59,67.55,22.17,22.99,6.57,95.67,22.59,95.67,22.59,9.03-9.45,29.15-12.75,29.15-12.75,0,0,117.02-1.62,142.08,0,25.05,1.65,27.92,27.12,27.92,27.12v27.09c0,9.85,0,16.02-6.57,23.4-6.58,7.4-11.5,8.43-29.36,8.43s6.15.61-66.53,0c-72.68-.63-93.41-46.77-93.41-46.77h-34.9l-31.82,21.52c-25.26,1.22-89.93-9.24-115.8-16.02-25.87-6.79-30.18-27.1-30.18-27.1ZM242.56,517.45c-5.63,19.03-26.25,49.17-26.25,49.17l-22.38,11.71c-40.03,16.63-63.43,11.08-98.55,6.15-35.1-4.92-36.94-14.77-41.87-41.25-4.92-26.51-4.92-81.31-4.92-81.31h19.7l23.41,29.57c32.04,10.12,135.59,22.57,149.71,24.24.83.09,1.4.92,1.15,1.72ZM634.77,592.97c-24.64,3.7-96.7,7.4-184.77,8.62-88.07-1.22-160.14-4.92-184.78-8.62-24.64-3.7-27.09-16.63-12.61-36.75,14.51-20.12,18.15-38.38,52.64-40.86,34.49-2.45,144.75-4.92,144.75-4.92,0,0,110.25,2.47,144.75,4.92,34.49,2.48,38.13,20.74,52.61,40.86,14.51,20.12,12.06,33.05-12.59,36.75ZM846.43,543.23c-4.94,26.48-6.78,36.33-41.88,41.25-35.11,4.93-58.52,10.48-98.55-6.15l-22.38-11.71s-20.6-30.14-26.25-49.15c-.25-.82.32-1.65,1.17-1.74,14.1-1.67,117.65-14.12,149.71-24.24l23.39-29.57h19.72s0,54.82-4.93,81.31ZM821.08,330.19s25.47-1.86,32.87,2.05c7.37,3.9,12.11,11.28,13.33,19.29,1.23,8.01.62,22.17,0,28.34,0,0-4.31,20.31-30.18,27.1-25.87,6.78-90.54,17.24-115.79,16.02l-31.83-21.52h-34.89s-20.74,46.14-93.42,46.77c-72.68.61-48.65,0-66.51,0s-22.8-1.03-29.37-8.43c-6.55-7.38-6.55-13.55-6.55-23.4v-27.09s2.87-25.47,27.91-27.12c25.05-1.62,142.07,0,142.07,0,0,0,20.12,3.3,29.14,12.75,0,0,72.68-16.02,95.68-22.59,22.99-6.58,67.54-22.17,67.54-22.17Z" />
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
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
          </nav>

          <Button onClick={() => scrollToSection(formularioRef)} size="sm" className="hidden md:inline-flex">
            Avaliar Meu Veículo
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
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
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center">
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center -mt-16">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium shadow-sm">
                  <Award className="h-4 w-4" />
                  <span>Nº 1 em compra de veículos</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Venda seu veículo de forma <span className="text-blue-600">rápida, segura</span> e com avaliação justa
                </h1>
                <p className="text-lg text-gray-600 md:text-xl">
                  Descubra quanto pagamos pelo seu veículo de forma 100% online.
                </p>
              </div>
              <div
                ref={formularioRef}
                className="relative mx-auto w-full max-w-lg rounded-xl bg-white/95 p-5 backdrop-blur-sm shadow-lg"
              >
                <FormularioVeiculoCompacto />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_60%)]" />
        </section>

        <section ref={comoFuncionaRef} className="py-20 scroll-mt-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Como Funciona</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Vender seu veículo para nós é simples, rápido e seguro. Veja como funciona o processo:
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center p-6 rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">1. Preencha o Formulário</h3>
                <p className="mt-2 text-gray-600">
                  Informe os dados do seu veículo no formulário acima para iniciar o processo de avaliação.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center p-6 rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">2. Receba uma Proposta</h3>
                <p className="mt-2 text-gray-600">
                  Nossa equipe analisará as informações e entrará em contato com uma proposta em até 24 horas.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center p-6 rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">3. Receba o Pagamento</h3>
                <p className="mt-2 text-gray-600">
                  Após a aprovação e vistoria, o pagamento é realizado em até 48 horas diretamente na sua conta.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={beneficiosRef} className="py-20 bg-gradient-to-b from-white to-blue-50 scroll-mt-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Por que vender para nós?</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Oferecemos a melhor experiência para quem deseja vender seu veículo com segurança e agilidade.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Pagamento Rápido</h3>
                  <p className="mt-1 text-sm text-gray-600">Receba o pagamento na hora após a aprovação da venda.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm">
                <ShieldCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Segurança Garantida</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Processo 100% seguro com toda documentação e transferência garantida.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm">
                <Car className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Avaliação Justa</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Avaliamos seu veículo pelo valor justo de mercado, sem desvalorizações.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm">
                <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Processo Rápido</h3>
                  <p className="mt-1 text-sm text-gray-600">Todo o processo de venda pode ser concluído em até 24h.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm">
                <CreditCard className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Financiamento e Dívidas</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Nós quitamos todos os débitos do seu veículo e transferimos o valor restante para sua conta.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-white shadow-sm">
                <MessageSquare className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Suporte Personalizado</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Atendimento personalizado durante todo o processo de venda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={veiculosRef} className="py-20 scroll-mt-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Veículos que compramos</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Avaliamos e compramos diversos tipos de veículos com as melhores condições do mercado.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img src="/images/fox.webp" alt="Veículo popular hatch" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Leves</h3>
                  <p className="text-gray-600">
                    Compramos veículos leves como Picape, SUV, sedan, entre outros de qualquer marca ou valor.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/land-rover.webp"
                    alt="Veículo de luxo blindado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Blindado</h3>
                  <p className="text-gray-600">
                    Compramos veículos blindados de qualquer marca, valor ou ano de fabricação.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/fiorino-nova.webp"
                    alt="Veículo utilitário pequeno como Fiat Fiorino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Utilitários</h3>
                  <p className="text-gray-600">
                    Compramos veículos utilitário de pequeno porte, como Fiorino, Kangoo, Jumpy, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={faqRef} className="py-20 scroll-mt-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Perguntas Frequentes</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Tire suas dúvidas sobre nosso processo de compra de veículos.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border shadow-sm overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Coluna 1 - Logo e descrição */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
                <div className="h-8 w-8 relative">
                  <svg viewBox="0 0 900 262.31" className="h-full w-full fill-blue-600" aria-hidden="true">
                    <g>
                      <path d="M68.91,5.47c4.56,2.55,7.47,7.29,7.47,12.22,0,6.56-4.74,12.03-10.57,12.03-2.37,0-3.1-.18-9.66-2.74-3.83-1.46-6.75-2.01-9.66-2.01-11.49,0-19.69,9.66-19.69,23.15s8.2,22.97,20.42,22.97c3.28,0,6.93-.91,10.57-2.55,4.56-2.19,5.29-2.37,7.66-2.37,6.2,0,11.12,5.29,11.12,12.22,0,3.65-2.01,7.47-5.11,9.84-6.38,4.74-16.77,7.84-26.8,7.84-13.13,0-24.07-4.74-32.45-13.86C3.65,72.92,0,62.72,0,47.77S4.92,20.42,13.86,12.4C22.42,4.56,34.46,0,45.76,0c8.2,0,16.95,2.01,23.15,5.47Z" />
                      <path d="M158.24,14.58c7.84,8.57,12.03,20.42,12.03,33.55,0,27.35-19.14,47.95-44.67,47.95-12.4,0-24.61-5.47-32.82-14.58-8.02-8.75-12.03-20.24-12.03-34.09C80.76,20.78,100.27,0,125.61,0c12.21,0,24.43,5.47,32.63,14.58ZM107.2,47.77c0,13.49,7.66,23.34,17.87,23.34s18.78-10.21,18.78-23.15-8.2-22.97-18.78-22.97c-10.03,0-17.87,10.03-17.87,22.79Z" />
                      <path d="M181.39,16.04c0-9.3,5.29-15.5,13.31-15.5,5.29,0,8.2,1.82,12.94,8.75,7.47-6.75,14.04-9.3,23.52-9.3,6.56,0,13.31,1.64,18.23,4.56,2.73,1.46,4.38,3.1,7.47,7.11,10.76-8.75,17.87-11.67,28.08-11.67,18.6,0,32.27,13.13,32.27,30.99v46.67c0,6.38-.18,8.02-1.82,11.12-2.01,4.01-6.75,6.75-11.49,6.75s-9.66-2.74-11.67-6.75c-1.64-3.1-1.82-4.56-1.82-11.12v-40.66c0-8.2-5.47-13.86-13.67-13.86s-14.04,5.65-14.04,13.86v40.66c0,6.38-.18,8.02-1.82,11.12-2.01,4.01-6.75,6.75-11.49,6.75s-9.66-2.74-11.67-6.75c-1.64-3.1-1.82-4.56-1.82-11.12v-38.1c0-10.39-5.1-16.41-13.86-16.41-8.02,0-13.86,5.83-13.86,13.86v40.66c0,6.38-.18,8.02-1.82,11.12-2.01,4.01-6.75,6.75-11.49,6.75s-9.66-2.74-11.67-6.75c-1.64-3.1-1.82-4.56-1.82-11.12V16.04Z" />
                      <path d="M333.25,16.41c0-9.84,4.92-15.86,12.94-15.86,6.2,0,9.48,2.55,12.94,10.21,7.11-7.84,13.67-10.76,23.88-10.76,22.24,0,39.56,20.6,39.56,47.22s-17.68,48.86-41.2,48.86c-8.39,0-13.49-1.82-21.33-7.84v25.89c0,6.56-.18,8.2-1.82,11.12-2.01,4.01-6.75,6.75-11.49,6.75s-9.66-2.74-11.67-6.75c-1.64-3.1-1.82-4.56-1.82-11.12V16.41ZM359.33,47.77c0,13.86,7.29,23.34,18.05,23.34s18.41-10.03,18.41-23.15-8.02-22.97-18.41-22.97-18.05,9.48-18.05,22.79Z" />
                      <path d="M433.52,15.86c0-9.3,5.29-15.31,13.49-15.31,6.02,0,10.39,3.1,13.31,9.48,7.47-7.47,12.22-10.03,18.41-10.03,7.66,0,13.67,6.2,13.67,13.86,0,6.38-2.73,8.93-13.67,12.21-14.58,4.92-18.78,8.93-18.41,17.87v33.73c0,6.38-.18,8.02-1.82,11.12-2.01,4.01-6.75,6.75-11.49,6.75s-9.66-2.74-11.67-6.75c-1.64-3.1-1.82-4.56-1.82-11.12V15.86Z" />
                      <path d="M569.71,14.58c7.84,8.57,12.03,20.42,12.03,33.55,0,27.35-19.14,47.95-44.67,47.95-12.4,0-24.61-5.47-32.82-14.58-8.02-8.75-12.03-20.24-12.03-34.09,0-26.62,19.51-47.4,44.85-47.4,12.22,0,24.43,5.47,32.63,14.58ZM518.66,47.77c0,13.49,7.66,23.34,17.87,23.34s18.78-10.21,18.78-23.15-8.2-22.97-18.78-22.97c-10.03,0-17.87,10.03-17.87,22.79Z" />
                    </g>
                    <g>
                      <path d="M69.46,184.64c0,6.02-4.92,11.67-10.39,11.67-2.92,0-3.1,0-11.3-3.65-4.01-1.82-7.47-2.73-10.21-2.73-4.38,0-7.11,1.82-7.11,4.74,0,3.46,1.46,4.38,14.04,9.3,11.85,4.74,15.68,6.93,20.42,11.67,4.19,4.56,6.56,10.21,6.56,16.77,0,17.68-14.4,29.9-35.37,29.9-18.23,0-34.27-9.12-34.27-19.33,0-6.2,5.47-12.03,11.12-12.03q3.1,0,13.86,4.74c4.38,2.01,7.84,2.92,10.76,2.92,4.38,0,7.84-2.73,7.84-6.2,0-3.1-2.01-4.74-10.21-7.84-13.31-4.92-16.95-6.75-21.51-10.03-6.38-4.56-9.12-10.57-9.12-19.32,0-16.59,14.77-28.99,34.46-28.99,16.23,0,30.45,8.57,30.45,18.41Z" />
                      <path d="M108.11,223.11c4.01,10.76,10.76,15.86,21.33,15.86,6.38,0,8.02-.55,22.06-7.47,1.64-.73,3.83-1.28,5.83-1.28,5.47,0,10.76,5.29,10.76,10.94,0,10.94-19.51,21.15-40.11,21.15-28.62,0-48.68-19.33-48.68-46.67s19.51-49.41,45.94-49.41c24.98,0,44.48,20.24,44.48,46.31,0,7.47-3.46,10.57-11.67,10.57h-49.95ZM143.3,204.88c-1.28-5.1-2.19-7.29-3.83-9.84-3.1-4.37-8.2-6.93-13.67-6.93-8.93,0-14.77,5.1-18.6,16.77h36.1Z" />
                      <path d="M263.62,224.39c0,9.48-2.01,16.41-6.56,22.06-7.66,9.84-20.97,15.86-35,15.86s-27.35-6.02-35-15.86c-4.56-5.65-6.56-12.58-6.56-22.06v-39.74c0-6.38.18-8.02,1.82-11.12,2.01-4.01,6.75-6.74,11.67-6.74s9.48,2.73,11.49,6.74c1.64,3.1,1.82,4.56,1.82,11.12v36.46c0,5.65,1.09,8.39,4.19,11.49,2.92,2.73,6.56,4.19,10.57,4.19s7.66-1.46,10.57-4.19c3.1-3.1,4.19-5.83,4.19-11.49v-36.46c0-6.38.18-8.02,1.82-11.12,2.01-4.01,6.75-6.74,11.67-6.74s9.48,2.73,11.49,6.74c1.64,3.1,1.82,4.56,1.82,11.12v39.74Z" />
                      <path d="M411.47,245.9c0,9.48-5.47,15.86-13.49,15.86-6.38,0-10.76-3.46-13.49-10.57-6.75,8.39-12.22,11.12-22.06,11.12s-18.78-3.46-26.43-10.21c-10.57-9.3-15.86-22.06-15.86-38.29,0-14.77,4.38-25.89,14.04-35.37,8.02-8.02,17.5-12.22,27.89-12.22,9.48,0,15.13,2.73,22.79,10.57,2.92-7.11,6.93-10.03,13.31-10.03,7.47,0,13.31,6.02,13.31,13.67v65.45ZM346.93,213.99c0,14.04,7.29,23.34,18.6,23.34s18.41-9.48,18.41-23.15-7.47-22.97-18.6-22.97-18.41,9.3-18.41,22.79Z" />
                      <path d="M510.1,224.39c0,9.48-2.01,16.41-6.56,22.06-7.66,9.84-20.97,15.86-35,15.86s-27.35-6.02-35-15.86c-4.56-5.65-6.56-12.58-6.56-22.06v-39.74c0-6.38.18-8.02,1.82-11.12,2.01-4.01,6.75-6.74,11.67-6.74s9.48,2.73,11.49,6.74c1.64,3.1,1.82,4.56,1.82,11.12v36.46c0,5.65,1.09,8.39,4.19,11.49,2.92,2.73,6.56,4.19,10.57,4.19s7.66-1.46,10.57-4.19c3.1-3.1,4.19-5.83,4.19-11.49v-36.46c0-6.38.18-8.02,1.82-11.12,2-4.01,6.74-6.74,11.67-6.74s9.48,2.73,11.49,6.74c1.64,3.1,1.82,4.56,1.82,11.12v39.74Z" />
                      <path d="M561.33,243.89c0,6.38-.18,8.02-1.82,11.12-2.01,4.01-6.75,6.74-11.49,6.74s-9.66-2.73-11.67-6.74c-1.64-3.1-1.82-4.56-1.82-11.12v-51.59c-7.11.18-11.12-1.09-13.49-3.83-2-2.55-3.1-5.29-3.1-8.2,0-6.2,4.01-10.94,10.39-11.85q1.82-.36,6.2-.36v-13.86c0-6.38.18-8.02,1.82-10.94,2-4.01,6.74-6.74,11.67-6.74s9.48,2.73,11.49,6.56c1.64,3.1,1.82,4.56,1.82,11.12v13.86h4.92c5.83,0,7.47.18,10.21,1.64,3.46,1.82,6.02,6.2,6.02,10.57s-2.55,8.75-6.02,10.39c-2.92,1.46-4.19,1.64-10.21,1.64h-4.92v51.59Z" />
                      <path d="M660.14,180.81c7.84,8.57,12.03,20.42,12.03,33.55,0,27.35-19.14,47.95-44.67,47.95-12.4,0-24.61-5.47-32.82-14.59-8.02-8.75-12.03-20.24-12.03-34.09,0-26.62,19.51-47.4,44.85-47.4,12.22,0,24.43,5.47,32.63,14.59ZM609.09,213.99c0,13.49,7.66,23.34,17.87,23.34s18.78-10.21,18.78-23.15-8.2-22.97-18.78-22.97c-10.03,0-17.87,10.03-17.87,22.79Z" />
                    </g>
                    <path d="M893.34,157.59c-4.81-2.02-18.98-1.77-18.98-1.77-12.65-26.06-20.24-28.34-20.24-28.34-9.56-1.77-19-2.82-28.01-3.38-.39.23-.78.46-1.16.69-5.51-.34-11.33-.54-17.44-.55-6.37-.01-12.44.19-18.15.53-.38-.21-.76-.41-1.14-.62-8.77.58-17.93,1.61-27.2,3.33,0,0-7.59,2.28-20.24,28.34,0,0-14.17-.25-18.98,1.77-4.81,2.03-9.87,8.1-4.05,10.63,5.82,2.53,16.7,1.77,16.7,1.77-1.24,1.38-2.32,2.62-3.24,3.69-1.92,2.25-2.29,2.8-2.52,3.67,0,0-.11.44-.32,3.26,0,0-7.42,5.99-9.28,7.68-1.85,1.69-2.02,1.63-2.19,5.62-.17,3.99-.67,62.36-.67,62.36,0,0-.25,5.56,5.82,5.82,6.07.26,15.94,0,15.94,0,0,0,5.06.51,5.31-5.06.12-2.61.13-3.66.1-4.05h-.1s.07-.43.1,0l18.62.76,10.38-3.29,1.27,1.77,33.91.26,33.91-.26,1.27-1.77,10.37,3.29,18.62-.76c.03-.43.1,0,.1,0h-.1c-.03.39-.02,1.44.1,4.05.26,5.56,5.31,5.06,5.31,5.06,0,0,9.87.26,15.94,0,6.07-.25,5.82-5.82,5.82-5.82,0,0-.51-58.37-.67-62.36-.09-2.23-.19-3.2-.58-3.91-.53-.97-1.29-1.48-1.62-1.71-1.85-1.32-4.95-3.81-9.25-7.38l-.33-.3c-.21-2.82-.32-3.26-.32-3.26-.22-.88-.59-1.42-2.52-3.67-.91-1.07-1.99-2.31-3.24-3.69h.45c2.33.15,4.27.17,5.66.15,7.19-.07,9.54-1.12,10.89-1.92,1.29-.77,2.11-1.29,2.45-2.28,1-2.89-2.82-6.8-6.5-8.34ZM752.62,144.11c1.84-2.95,3.74-5.63,5.61-8.07,14.41-1.79,30.72-3.01,48.61-3.04,18.69-.03,35.68,1.25,50.59,3.12,1.8,2.4,3.6,5.06,5.36,7.98,4.7,7.84,7.65,15.37,9.55,21.75h-129.97c2.16-6.46,5.38-13.96,10.25-21.75ZM722.04,202.13c-.13-1.27-.25-4.18,0-5.82.26-1.65,1.22-3.16,2.74-3.96,1.52-.8,6.75-.42,6.75-.42,0,0,9.15,3.2,13.88,4.55,4.72,1.35,19.65,4.64,19.65,4.64,1.85-1.94,5.99-2.62,5.99-2.62,0,0,24.04-.33,29.19,0,5.15.34,5.74,5.57,5.74,5.57v5.56c0,2.02,0,3.29-1.35,4.81-1.35,1.52-2.36,1.73-6.03,1.73s1.26.13-13.67,0c-14.93-.13-19.19-9.61-19.19-9.61h-7.17l-6.54,4.42c-5.19.25-18.47-1.9-23.79-3.29-5.31-1.39-6.2-5.57-6.2-5.57ZM764.95,230.39c-1.16,3.91-5.39,10.1-5.39,10.1l-4.6,2.41c-8.22,3.42-13.03,2.28-20.24,1.26-7.21-1.01-7.59-3.03-8.6-8.47-1.01-5.45-1.01-16.7-1.01-16.7h4.05l4.81,6.07c6.58,2.08,27.85,4.64,30.75,4.98.17.02.29.19.24.35ZM845.52,245.9c-5.06.76-19.86,1.52-37.95,1.77-18.09-.25-32.9-1.01-37.96-1.77-5.06-.76-5.56-3.42-2.59-7.55,2.98-4.13,3.73-7.88,10.81-8.39,7.08-.5,29.73-1.01,29.73-1.01,0,0,22.65.51,29.73,1.01,7.08.51,7.83,4.26,10.81,8.39,2.98,4.13,2.48,6.79-2.59,7.55ZM889,235.69c-1.01,5.44-1.39,7.46-8.6,8.47-7.21,1.01-12.02,2.15-20.24-1.26l-4.6-2.41s-4.23-6.19-5.39-10.1c-.05-.17.07-.34.24-.36,2.9-.34,24.17-2.9,30.75-4.98l4.8-6.07h4.05s0,11.26-1.01,16.7ZM883.79,191.92s5.23-.38,6.75.42c1.51.8,2.49,2.32,2.74,3.96.25,1.65.13,4.55,0,5.82,0,0-.89,4.17-6.2,5.57-5.31,1.39-18.6,3.54-23.79,3.29l-6.54-4.42h-7.17s-4.26,9.48-19.19,9.61c-14.93.13-9.99,0-13.66,0s-4.68-.21-6.03-1.73c-1.35-1.52-1.35-2.78-1.35-4.81v-5.56s.59-5.23,5.73-5.57c5.15-.33,29.18,0,29.18,0,0,0,4.13.68,5.99,2.62,0,0,14.93-3.29,19.65-4.64,4.72-1.35,13.87-4.55,13.87-4.55Z" />
                  </svg>
                </div>
                <span>Compro seu auto</span>
              </div>
              <p className="text-gray-600">
                Compramos seu veículo de forma rápida, segura e sem burocracia. Pagamento à vista e avaliação pelo
                WhatsApp.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                WhatsApp
              </button>
            </div>

            {/* Coluna 2 - Contato */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">(11) 91399-2025</span>
                </div>
                <div className="flex gap-2">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Rua Professor João Machado, 684
                    <br />
                    Nossa Senhora do Ó
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna 3 - Funcionamento */}
            <div>
              <h3 className="text-lg font-bold mb-4">Funcionamento</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Segunda a Sexta: 8h às 18h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Sábado: 8h às 14h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Compro seu auto. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
