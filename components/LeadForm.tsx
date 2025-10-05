'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Send, Loader2, CheckCircle } from 'lucide-react'

const leadFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  eventType: z.string().min(1, 'Selecione o tipo de evento'),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  acceptTerms: z.boolean().refine(val => val === true, 'Você deve aceitar os termos'),
  honeypot: z.string().optional(), // Campo honeypot para spam
})

type LeadFormData = z.infer<typeof leadFormSchema>

interface LeadFormProps {
  title?: string
  subtitle?: string
  eventType?: string
  className?: string
}

export function LeadForm({ 
  title = 'Solicitar Proposta', 
  subtitle = 'Conte-nos sobre seu evento e receba uma proposta personalizada.',
  eventType = '',
  className = ''
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      eventType: eventType,
      acceptTerms: false,
    },
  })

  const onSubmit = async (data: LeadFormData) => {
    // Verificar honeypot
    if (data.honeypot) {
      return // Bot detectado, não enviar
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error('Erro ao enviar formulário')
      }
    } catch (error) {
      setSubmitError('Erro ao enviar formulário. Tente novamente ou entre em contato via WhatsApp.')
      console.error('Erro no formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`bg-dark-800 border border-dark-700 rounded-lg p-8 text-center ${className}`}>
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-accent-light mb-4">
          Obrigado pelo seu interesse!
        </h3>
        <p className="text-accent-medium mb-6">
          Recebemos sua solicitação e entraremos em contato em breve com uma proposta personalizada.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Enviar nova solicitação
        </Button>
      </div>
    )
  }

  return (
    <div className={`bg-dark-800 border border-dark-700 rounded-lg p-8 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif font-bold text-accent-light mb-4">
          {title}
        </h3>
        <p className="text-accent-medium">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field */}
        <input
          type="text"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
          {...register('honeypot')}
        />

        {/* Nome e E-mail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-accent-light mb-2">
              Nome completo *
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Seu nome completo"
              {...register('name')}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-accent-light mb-2">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="seu@email.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Telefone e Tipo de Evento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-accent-light mb-2">
              Telefone *
            </label>
            <input
              type="tel"
              id="phone"
              className="form-input"
              placeholder="(11) 99999-9999"
              {...register('phone')}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="eventType" className="block text-sm font-medium text-accent-light mb-2">
              Tipo de evento *
            </label>
            <select
              id="eventType"
              className="form-input"
              {...register('eventType')}
            >
              <option value="">Selecione...</option>
              <option value="casamento">Casamento</option>
              <option value="corporativo">Evento Corporativo</option>
              <option value="aniversario">Aniversário</option>
              <option value="formatura">Formatura</option>
              <option value="debutante">Debutante</option>
              <option value="boda">Boda</option>
              <option value="outro">Outro</option>
            </select>
            {errors.eventType && (
              <p className="mt-1 text-sm text-red-400">{errors.eventType.message}</p>
            )}
          </div>
        </div>

        {/* Data e Número de Convidados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="eventDate" className="block text-sm font-medium text-accent-light mb-2">
              Data desejada
            </label>
            <input
              type="date"
              id="eventDate"
              className="form-input"
              {...register('eventDate')}
            />
          </div>

          <div>
            <label htmlFor="guestCount" className="block text-sm font-medium text-accent-light mb-2">
              Número estimado de convidados
            </label>
            <input
              type="number"
              id="guestCount"
              className="form-input"
              placeholder="Ex: 150"
              min="1"
              {...register('guestCount')}
            />
          </div>
        </div>

        {/* Orçamento */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-accent-light mb-2">
            Faixa de orçamento
          </label>
          <select
            id="budget"
            className="form-input"
            {...register('budget')}
          >
            <option value="">Selecione...</option>
            <option value="ate-50k">Até R$ 50.000</option>
            <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
            <option value="100k-200k">R$ 100.000 - R$ 200.000</option>
            <option value="200k-500k">R$ 200.000 - R$ 500.000</option>
            <option value="acima-500k">Acima de R$ 500.000</option>
          </select>
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-accent-light mb-2">
            Mensagem *
          </label>
          <textarea
            id="message"
            rows={4}
            className="form-textarea"
            placeholder="Conte-nos mais sobre seu evento, expectativas, necessidades especiais..."
            {...register('message')}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Termos */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="acceptTerms"
            className="mt-1 h-4 w-4 text-primary focus:ring-primary border-dark-600 rounded"
            {...register('acceptTerms')}
          />
          <label htmlFor="acceptTerms" className="text-sm text-accent-medium">
            Aceito a{' '}
            <a href="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </a>{' '}
            e autorizo o uso dos meus dados para contato e envio de proposta. *
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-sm text-red-400">{errors.acceptTerms.message}</p>
        )}

        {/* Erro de envio */}
        {submitError && (
          <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
            <p className="text-sm text-red-400">{submitError}</p>
          </div>
        )}

        {/* Botão de envio */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Solicitar proposta
            </>
          )}
        </Button>

        <p className="text-xs text-accent-medium text-center">
          Seus dados são usados apenas para contato e proposta. Não compartilhamos com terceiros.
        </p>
      </form>
    </div>
  )
}
