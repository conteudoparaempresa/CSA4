"use client"

import type React from "react"

import dynamic from "next/dynamic"
import { Suspense, useState } from "react"

// Importação dinâmica do formulário completo
const FormularioCompleto = dynamic(
  () => import("@/components/formulario-veiculo-compacto").then((mod) => ({ default: mod.FormularioVeiculoCompacto })),
  { ssr: false },
)

// Componente leve para primeira renderização
function FormularioLeve() {
  const [isLoading, setIsLoading] = useState(false)
  const [isFormularioCompleto, setIsFormularioCompleto] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Carregar o formulário completo
    setIsFormularioCompleto(true)
  }

  if (isFormularioCompleto) {
    return <FormularioCompleto />
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">Avaliação Gratuita</h3>
        <p className="text-sm text-gray-600">Receba uma proposta em até 24h</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Seu nome"
            className="h-9 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="WhatsApp"
            className="h-9 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <select
            className="h-9 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Marca</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Fiat">Fiat</option>
            <option value="Ford">Ford</option>
            <option value="Honda">Honda</option>
            <option value="Toyota">Toyota</option>
          </select>
          <input
            type="text"
            placeholder="Modelo"
            className="h-9 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Ano"
            className="h-9 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Cor"
            className="h-9 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="KM"
            className="h-9 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-10 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium rounded-md hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all"
        >
          {isLoading ? "Carregando..." : "Receber Proposta"}
        </button>
      </form>
    </div>
  )
}

export function FormularioWrapper() {
  return (
    <Suspense fallback={<FormularioLeve />}>
      <FormularioLeve />
    </Suspense>
  )
}

export default FormularioWrapper
