import type React from "react"

export function FaqSection({
  faqRef,
  faqs,
  FaqToggle,
  FaqContent,
}: {
  faqRef: React.RefObject<HTMLElement>
  faqs: Array<{ question: string; answer: string }>
  FaqToggle: ({ index: number, question: string }) => JSX.Element
  FaqContent: ({ index: number, answer: string }) => JSX.Element
}) {
  return (
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
              <FaqToggle index={index} question={faq.question} />
              <FaqContent index={index} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
