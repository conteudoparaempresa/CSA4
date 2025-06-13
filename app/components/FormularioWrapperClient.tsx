"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Importação dinâmica do formulário completo em Client Component
const FormularioCompleto = dynamic(
  () => import("@/components/formulario-veiculo-compacto").then((mod) => ({ default: mod.FormularioVeiculoCompacto })),
  { ssr: false },
)

// Skeleton para o formulário
function FormularioSkeleton() {
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <div className="h-7 bg-gray-200 rounded w-3/4 mx-auto mb-2 animate-pulse"></div>
        <div className="h-5 bg-gray-100 rounded w-1/2 mx-auto animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="h-9 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-9 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="h-9 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-9 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="h-9 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-9 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-9 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="h-10 bg-blue-600 rounded animate-pulse"></div>
    </div>
  )
}

export function FormularioWrapperClient() {
  return (
    <Suspense fallback={<FormularioSkeleton />}>
      <FormularioCompleto />
    </Suspense>
  )
}
