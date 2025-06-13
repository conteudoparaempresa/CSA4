import type React from "react"
import Image from "next/image"

export function VeiculosSection({ veiculosRef }: { veiculosRef: React.RefObject<HTMLElement> }) {
  return (
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
              <Image
                src="/images/fox.webp"
                alt="Veículo popular hatch"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
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
              <Image
                src="/images/land-rover.webp"
                alt="Veículo de luxo blindado"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              <Image
                src="/images/fiorino-nova.webp"
                alt="Veículo utilitário pequeno como Fiat Fiorino"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
  )
}
