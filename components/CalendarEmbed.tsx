'use client'

import { useState } from 'react'
import { Calendar, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface CalendarEmbedProps {
  url?: string
  title?: string
  subtitle?: string
  className?: string
}

export function CalendarEmbed({ 
  url,
  title = 'Agendar Visita',
  subtitle = 'Escolha um horário que funcione para você',
  className = ''
}: CalendarEmbedProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const calendlyUrl = url || process.env.NEXT_PUBLIC_CALENDLY_URL

  if (!calendlyUrl) {
    return (
      <div className={`bg-dark-800 border border-dark-700 rounded-lg p-8 text-center ${className}`}>
        <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-accent-light mb-4">
          {title}
        </h3>
        <p className="text-accent-medium mb-6">
          {subtitle}
        </p>
        <Button
          href="/contato"
          variant="primary"
          size="lg"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Entrar em contato
        </Button>
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Trigger Button */}
      <div className="bg-dark-800 border border-dark-700 rounded-lg p-8 text-center">
        <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-accent-light mb-4">
          {title}
        </h3>
        <p className="text-accent-medium mb-6">
          {subtitle}
        </p>
        <Button
          onClick={() => setIsOpen(true)}
          variant="primary"
          size="lg"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Agendar agora
        </Button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm" />
          
          <div className="relative bg-dark-800 border border-dark-700 rounded-lg w-full max-w-4xl h-[80vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-dark-700">
              <h3 className="text-lg font-semibold text-accent-light">
                {title}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-accent-medium hover:text-accent-light transition-colors"
                aria-label="Fechar"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Calendar Embed */}
            <div className="flex-1 p-4">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendário de agendamento"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
