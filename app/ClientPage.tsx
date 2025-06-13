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
      <footer className="border-t bg-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <div className="h-8 w-8 relative">
                <svg viewBox="0 0 900 672.36" className="h-full w-full fill-blue-600">
                  <path d="M867.59,163.06c-23.42-9.85-92.4-8.63-92.4-8.63-61.58-126.87-98.55-137.96-98.55-137.96-46.52-8.61-92.49-13.71-136.37-16.47-1.89,1.13-3.78,2.26-5.67,3.38-26.8-1.64-55.15-2.62-84.91-2.67-31.03-.06-60.54.91-88.38,2.59-1.86-1.01-3.71-2.02-5.57-3.03-42.69,2.82-87.28,7.84-132.41,16.2,0,0-36.94,11.09-98.54,137.96,0,0-68.99-1.22-92.38,8.63-23.4,9.87-48.04,39.43-19.72,51.73,28.34,12.32,81.3,8.63,81.3,8.63-6.04,6.7-11.31,12.75-15.75,17.96-9.36,10.97-11.17,13.62-12.25,17.88,0,0-.55,2.15-1.56,15.89,0,0-36.12,29.17-45.17,37.37-9.02,8.22-9.85,7.95-10.67,27.38-.83,19.43-3.28,303.58-3.28,303.58,0,0-1.24,27.09,28.32,28.32,29.57,1.25,77.61,0,77.61,0,0,0,24.64,2.47,25.87-24.62.57-12.73.61-17.84.49-19.7l-.49-.02s.34-2.09.49.02l90.66,3.68,50.51-16.02,6.17,8.62,165.06,1.25,165.06-1.25,6.17-8.62,50.49,16.02,90.67-3.68c.14-2.11.48-.02.48-.02l-.48.02c-.13,1.86-.09,6.97.48,19.7,1.25,27.09,25.87,24.62,25.87,24.62,0,0,48.06,1.25,77.6,0,29.57-1.23,28.34-28.32,28.34-28.32,0,0-2.47-284.15-3.27-303.58-.46-10.86-.92-15.57-2.82-19.04-2.59-4.74-6.3-7.22-7.87-8.34-9.01-6.41-24.1-18.56-45.05-35.92l-1.59-1.45c-1.01-13.74-1.56-15.89-1.56-15.89-1.09-4.26-2.89-6.91-12.26-17.88-4.44-5.21-9.71-11.26-15.75-17.96h2.19c11.36.72,20.8.81,27.56.74,35.02-.36,46.44-5.44,53.03-9.37,6.27-3.73,10.27-6.3,11.92-11.11,4.85-14.05-13.75-33.08-31.62-40.62ZM182.5,97.41c8.98-14.35,18.2-27.42,27.32-39.27,70.14-8.69,149.53-14.65,236.66-14.79,91-.15,173.68,6.09,246.29,15.21,8.74,11.68,17.54,24.61,26.07,38.85,22.88,38.18,37.25,74.82,46.5,105.89H132.6c10.53-31.44,26.18-67.96,49.9-105.89ZM33.63,379.87c-.61-6.17-1.22-20.33,0-28.34,1.25-8.01,5.96-15.39,13.36-19.29,7.38-3.91,32.84-2.05,32.84-2.05,0,0,44.55,15.59,67.55,22.17,22.99,6.57,95.67,22.59,95.67,22.59,9.03-9.45,29.15-12.75,29.15-12.75,0,0,117.02-1.62,142.08,0,25.05,1.65,27.92,27.12,27.92,27.12v27.09c0,9.85,0,16.02-6.57,23.4-6.58,7.4-11.5,8.43-29.36,8.43s6.15.61-66.53,0c-72.68-.63-93.41-46.77-93.41-46.77h-34.9l-31.82,21.52c-25.26,1.22-89.93-9.24-115.8-16.02-25.87-6.79-30.18-27.1-30.18-27.1ZM242.56,517.45c-5.63,19.03-26.25,49.17-26.25,49.17l-22.38,11.71c-40.03,16.63-63.43,11.08-98.55,6.15-35.1-4.92-36.94-14.77-41.87-41.25-4.92-26.51-4.92-81.31-4.92-81.31h19.7l23.41,29.57c32.04,10.12,135.59,22.57,149.71,24.24.83.09,1.4.92,1.15,1.72ZM634.77,592.97c-24.64,3.7-96.7,7.4-184.77,8.62-88.07-1.22-160.14-4.92-184.78-8.62-24.64-3.7-27.09-16.63-12.61-36.75,14.51-20.12,18.15-38.38,52.64-40.86,34.49-2.45,144.75-4.92,144.75-4.92,0,0,110.25,2.47,144.75,4.92,34.49,2.48,38.13,20.74,52.61,40.86,14.51,20.12,12.06,33.05-12.59,36.75ZM846.43,543.23c-4.94,26.48-6.78,36.33-41.88,41.25-35.11,4.93-58.52,10.48-98.55-6.15l-22.38-11.71s-20.6-30.14-26.25-49.15c-.25-.82.32-1.65,1.17-1.74,14.1-1.67,117.65-14.12,149.71-24.24l23.39-29.57h19.72s0,54.82-4.93,81.31ZM821.08,330.19s25.47-1.86,32.87,2.05c7.37,3.9,12.11,11.28,13.33,19.29,1.23,8.01.62,22.17,0,28.34,0,0-4.31,20.31-30.18,27.1-25.87,6.78-90.54,17.24-115.79,16.02l-31.83-21.52h-34.89s-20.74,46.14-93.42,46.77c-72.68.61-48.65,0-66.51,0s-22.8-1.03-29.37-8.43c-6.55-7.38-6.55-13.55-6.55-23.4v-27.09s2.87-25.47,27.91-27.12c25.05-1.62,142.07,0,142.07,0,0,0,20.12,3.3,29.14,12.75,0,0,72.68-16.02,95.68-22.59,22.99-6.58,67.54-22.17,67.54-22.17Z" />
                </svg>
              </div>
            </div>
            <div className="text-center md:text-right text-sm text-gray-600">
              <p>© {new Date().getFullYear()} ComproAuto. Todos os direitos reservados.</p>
              <p className="mt-1">Contato: (11) 99999-9999 | contato@comproauto.com.br</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
