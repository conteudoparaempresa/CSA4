"use client"

import type React from "react"
import { useRef } from "react"
import { ClientInteractions } from "./ClientInteractions"

// Este componente é mantido o mais enxuto possível
export function ClientInteractionsWrapper({ children }: { children: (props: any) => React.ReactNode }) {
  const headerRef = useRef<HTMLElement>(null)
  const comoFuncionaRef = useRef<HTMLElement>(null)
  const beneficiosRef = useRef<HTMLElement>(null)
  const veiculosRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const formularioRef = useRef<HTMLDivElement>(null)

  const refs = {
    comoFuncionaRef,
    beneficiosRef,
    veiculosRef,
    faqRef,
    formularioRef,
  }

  const clientInteractions = ClientInteractions({ refs })

  return children({
    headerRef,
    comoFuncionaRef,
    beneficiosRef,
    veiculosRef,
    faqRef,
    formularioRef,
    ...clientInteractions,
  })
}
