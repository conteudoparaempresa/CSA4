"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  nome: z.string().min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
  whatsapp: z.string().min(11, {
    message: "Informe um número de WhatsApp válido com DDD.",
  }),
  marca: z.string().min(1, {
    message: "Selecione a marca do veículo.",
  }),
  modelo: z.string().min(1, {
    message: "Informe o modelo e versão do veículo.",
  }),
  ano: z.string().min(4, {
    message: "Informe o ano do veículo.",
  }),
  cor: z.string().min(1, {
    message: "Informe a cor do veículo.",
  }),
  quilometragem: z.string().min(1, {
    message: "Informe a quilometragem do veículo.",
  }),
})

export function FormularioVeiculo() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulando envio para um servidor
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log(values)
    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSuccess(false)
      form.reset()
    }, 5000)
  }

  const marcasVeiculos = [
    "Chevrolet",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Jeep",
    "Nissan",
    "Peugeot",
    "Renault",
    "Toyota",
    "Volkswagen",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Mitsubishi",
    "Citroën",
    "Kia",
    "Outro",
  ]

  if (isSuccess) {
    return (
      <Alert className="bg-green-50 border-green-200">
        <Check className="h-5 w-5 text-green-600" />
        <AlertTitle className="text-green-800">Solicitação enviada com sucesso!</AlertTitle>
        <AlertDescription className="text-green-700">
          Recebemos seus dados e entraremos em contato em até 24 horas com uma proposta para seu veículo.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do proprietário</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp para contato</FormLabel>
                <FormControl>
                  <Input placeholder="(11) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="marca"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca do veículo</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a marca" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {marcasVeiculos.map((marca) => (
                      <SelectItem key={marca} value={marca}>
                        {marca}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="modelo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo e versão</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Onix 1.0 LT" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <FormField
            control={form.control}
            name="ano"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ano de fabricação/modelo</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 2020/2021" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cor do veículo</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Prata" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quilometragem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quilometragem</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 45000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Avaliar meu veículo"
          )}
        </Button>
      </form>
    </Form>
  )
}
