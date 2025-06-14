"use client"

import type React from "react"
import Image from "next/image"
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
            <div className="h-10 w-10 relative flex items-center justify-center">
              <Image
                src="/images/icone-carro-azul.webp"
                alt="Ícone Compro Auto"
                width={40}
                height={40}
                className="object-contain"
              />
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
              onClick={() => scrollToSection(veiculosRef)}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Veículos
            </button>
            <button
              onClick={() => scrollToSection(faqRef)}
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
              onClick={() => scrollToSection(veiculosRef)}
            >
              Veículos
            </button>
            <button
              className="block text-sm font-medium hover:text-blue-600 transition-colors py-2 w-full text-left"
              onClick={() => scrollToSection(faqRef)}
            >
              FAQ
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center pt-20 md:pt-0">
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center md:-mt-16">
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
              <div className="flex items-center">
                <div className="h-14 w-auto relative mb-0.5">
                  <Image
                    src="/images/logo-compro-seu-auto-azul.webp"
                    alt="Logo Compro Seu Auto"
                    width={180}
                    height={52}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Somos uma empresa especializada na compra de veículos, oferecendo o melhor valor de mercado com
                segurança e agilidade.
              </p>
              <div>
                <Button
                  className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center gap-2"
                  size="sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-circle"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  Fale conosco pelo WhatsApp
                </Button>
              </div>
            </div>

            {/* Coluna 2 - Contato */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-gray-600">(11) 93285-8585</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-gray-600">
                      Rua Professor João Machado, 684
                      <br />
                      Freguesia do Ó - São Paulo/SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 3 - Funcionamento */}
            <div>
              <h3 className="text-lg font-bold mb-4">Funcionamento</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda à Sexta</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado</span>
                  <span className="font-medium">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo</span>
                  <span className="font-medium">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Compro Auto. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
