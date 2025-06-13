"use client"

import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  faqs: FaqItem[]
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
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
                <svg
                  className={`h-5 w-5 text-blue-600 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
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
  )
}
