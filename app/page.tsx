import type { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
import { CheckCircle, Clock, CreditCard, MessageSquare, ShieldCheck, Award, Car, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ClientInteractionsWrapper } from "./components/ClientInteractionsWrapper"
import { VeiculosSection } from "./sections/VeiculosSection"
import { FaqSection } from "./sections/FaqSection"

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

export const metadata: Metadata = {
  title: "Compro Auto - Venda seu veículo de forma rápida e segura",
  description: "Venda seu veículo de forma rápida, segura e com avaliação justa. Receba uma proposta em até 24 horas.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ClientInteractionsWrapper>
        {({
          headerRef,
          comoFuncionaRef,
          beneficiosRef,
          veiculosRef,
          faqRef,
          formularioRef,
          MobileMenuButton,
          MobileMenu,
          NavButtons,
          HeaderButton,
          FormularioComponent,
          FaqToggle,
          FaqContent,
        }) => (
          <>
            <header ref={headerRef} className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 relative flex items-center justify-center">
                    <Image
                      src="/images/icone-carro-azul.webp"
                      alt="Ícone Compro Auto"
                      width={40}
                      height={40}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                  <NavButtons />
                </nav>

                <HeaderButton />

                {/* Mobile Menu Button */}
                <MobileMenuButton />
              </div>

              {/* Mobile Navigation Menu */}
              <MobileMenu />
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
                      {/* LCP Element com classe CSS crítico inline */}
                      <h1 className="hero-title">
                        Venda seu veículo de forma <span className="text-blue-600">rápida, segura</span> e com avaliação
                        justa
                      </h1>
                      <p className="text-lg text-gray-600 md:text-xl">
                        Descubra quanto pagamos pelo seu veículo de forma 100% online.
                      </p>
                    </div>
                    <FormularioComponent />
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
                        <p className="mt-1 text-sm text-gray-600">
                          Receba o pagamento na hora após a aprovação da venda.
                        </p>
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
                        <p className="mt-1 text-sm text-gray-600">
                          Todo o processo de venda pode ser concluído em até 24h.
                        </p>
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

              {/* Usando Suspense para as seções pesadas abaixo da dobra */}
              <Suspense
                fallback={
                  <div className="py-20 px-4">
                    <div className="container">
                      <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto mb-4"></div>
                      <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto mb-12"></div>
                      <div className="grid gap-8 md:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="h-48 bg-slate-200"></div>
                            <div className="p-6">
                              <div className="h-6 bg-slate-200 rounded w-1/2 mb-4"></div>
                              <div className="h-4 bg-slate-200 rounded mb-2"></div>
                              <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              >
                <VeiculosSection veiculosRef={veiculosRef} />
              </Suspense>

              <Suspense
                fallback={
                  <div className="py-20 px-4">
                    <div className="container">
                      <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto mb-4"></div>
                      <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto mb-12"></div>
                      <div className="max-w-3xl mx-auto space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-16 bg-slate-200 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              >
                <FaqSection faqRef={faqRef} faqs={faqs} FaqToggle={FaqToggle} FaqContent={FaqContent} />
              </Suspense>
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
          </>
        )}
      </ClientInteractionsWrapper>
    </div>
  )
}
