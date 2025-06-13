"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqInteractiveClientProps {
  faqs: FaqItem[]
}

// Importação dinâmica do FAQ em Client Component
const FaqInteractive = dynamic(() => import("./FaqInteractive").then((mod) => ({ default: mod.FaqInteractive })), {
  ssr: false,
  loading: () => (
    <div className="space-y-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <div className="w-full px-6 py-4 flex items-center justify-between">
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  ),
})

export function FaqInteractiveClient({ faqs }: FaqInteractiveClientProps) {
  return (
    <Suspense
      fallback={
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl border shadow-sm overflow-hidden">
              <div className="w-full px-6 py-4 flex items-center justify-between">
                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      }
    >
      <FaqInteractive faqs={faqs} />
    </Suspense>
  )
}
