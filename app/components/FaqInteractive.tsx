"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqInteractiveProps {
  faqs: FaqItem[]
}

export function FaqInteractive({ faqs }: FaqInteractiveProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
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
    </>
  )
}
