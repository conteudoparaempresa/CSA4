"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  whatsapp: z.string().min(10, "WhatsApp deve ter pelo menos 10 dígitos"),
  marca: z.string().min(1, "Selecione a marca do veículo"),
  modelo: z.string().min(2, "Modelo deve ter pelo menos 2 caracteres"),
  ano: z.string().min(4, "Ano deve ter 4 dígitos"),
  cor: z.string().min(1, "Selecione a cor do veículo"),
  quilometragem: z.string().min(1, "Informe a quilometragem"),
})

type FormData = z.infer<typeof formSchema>

const marcas = [
  "Chevrolet",
  "Volkswagen",
  "Fiat",
  "Ford",
  "Honda",
  "Toyota",
  "Hyundai",
  "Renault",
  "Nissan",
  "Peugeot",
  "Citroën",
  "Jeep",
  "BMW",
  "Mercedes-Benz",
  "Audi",
]

const cores = ["Branco", "Prata", "Preto", "Cinza", "Vermelho", "Azul", "Verde", "Amarelo", "Bege", "Marrom"]

export function FormularioVeiculoCompacto() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      whatsapp: "",
      marca: "",
      modelo: "",
      ano: "",
      cor: "",
      quilometragem: "",
    },
  })

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Dados do formulário:", data)
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="flex h-full items-center justify-center">
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800 text-sm">
            <strong>Formulário enviado!</strong>
            <br />
            Entraremos em contato em até 24 horas.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="h-full">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-center text-gray-900">Avaliação Gratuita</h3>
        <p className="text-sm text-gray-600 text-center">Receba uma proposta em até 24h</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Seu nome" className="h-9 text-sm" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="WhatsApp" className="h-9 text-sm" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="marca"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue placeholder="Marca" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {marcas.map((marca) => (
                        <SelectItem key={marca} value={marca} className="text-sm">
                          {marca}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="modelo"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Modelo" className="h-9 text-sm" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="ano"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Ano" className="h-9 text-sm" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cor"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue placeholder="Cor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cores.map((cor) => (
                        <SelectItem key={cor} value={cor} className="text-sm">
                          {cor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quilometragem"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="KM" className="h-9 text-sm" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full h-10 text-sm bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Receber Proposta"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
