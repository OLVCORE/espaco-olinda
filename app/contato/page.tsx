import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { LeadForm } from '@/components/LeadForm'
import { CalendarEmbed } from '@/components/CalendarEmbed'
import { ContactStrip } from '@/components/ContactStrip'
import { Button } from '@/components/ui/Button'
import { Calendar, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato | Fale conosco',
  description: 'Propostas, visitas e reservas. Estamos prontos para atender e transformar seu evento em uma experiência inesquecível.',
  keywords: ['contato', 'proposta', 'visita', 'reserva', 'evento', 'Espaço Olinda'],
  openGraph: {
    title: 'Contato | Fale conosco',
    description: 'Propostas, visitas e reservas. Estamos prontos para atender.',
    images: ['/contato/og-image.jpg'],
  },
}

export default function ContatoPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Vamos planejar a sua visita?"
        subtitle="Conte um pouco sobre o seu evento. Responderemos com proposta e datas."
        primaryCta={{ text: "Agendar visita", href: "#form" }}
        className="pt-20"
      />

      {/* Contact Form and Calendar */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <LeadForm
                title="Solicitar Proposta"
                subtitle="Preencha o formulário e receba uma proposta personalizada para seu evento."
                eventType=""
              />
            </div>

            {/* Calendar */}
            <div>
              <CalendarEmbed
                title="Agendar Visita"
                subtitle="Escolha um horário para conhecer pessoalmente o Espaço Olinda."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Outras formas de contato
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Escolha a forma que for mais conveniente para você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <div className="bg-dark-700 rounded-lg p-8 text-center">
              <MessageCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-2">
                WhatsApp
              </h3>
              <p className="text-accent-medium mb-4">
                Resposta rápida e direta
              </p>
              <Button
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/5511999999999'}
                variant="primary"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Conversar agora
              </Button>
            </div>

            {/* Telefone */}
            <div className="bg-dark-700 rounded-lg p-8 text-center">
              <Phone className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-2">
                Telefone
              </h3>
              <p className="text-accent-medium mb-4">
                Segunda a Sexta: 9h às 18h
              </p>
              <Button
                href="tel:+5511999999999"
                variant="outline"
                className="w-full"
              >
                <Phone className="h-5 w-5 mr-2" />
                Ligar agora
              </Button>
            </div>

            {/* E-mail */}
            <div className="bg-dark-700 rounded-lg p-8 text-center">
              <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-2">
                E-mail
              </h3>
              <p className="text-accent-medium mb-4">
                Resposta em até 24h
              </p>
              <Button
                href="mailto:contato@espacoolinda.com.br"
                variant="outline"
                className="w-full"
              >
                <Mail className="h-5 w-5 mr-2" />
                Enviar e-mail
              </Button>
            </div>

            {/* Localização */}
            <div className="bg-dark-700 rounded-lg p-8 text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-2">
                Localização
              </h3>
              <p className="text-accent-medium mb-4">
                Santa Isabel - SP
              </p>
              <Button
                href="https://maps.google.com/?q=Estrada+Municipal+Santa+Isabel+SP"
                variant="outline"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Ver no mapa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Location Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="bg-dark-800 rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-accent-light mb-6">
                Como chegar
              </h3>
              <div className="aspect-video bg-dark-700 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-accent-medium">
                    Mapa interativo será carregado aqui
                  </p>
                  <p className="text-sm text-accent-medium mt-2">
                    Estrada Municipal, s/n - Santa Isabel/SP
                  </p>
                </div>
              </div>
              <Button
                href="https://maps.google.com/?q=Estrada+Municipal+Santa+Isabel+SP"
                variant="primary"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Abrir no Google Maps
              </Button>
            </div>

            {/* Location Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent-light mb-6">
                  Informações de localização
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-accent-light mb-1">
                        Endereço
                      </h4>
                      <p className="text-accent-medium">
                        Estrada Municipal, s/n<br />
                        Santa Isabel - SP<br />
                        CEP: 07500-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-accent-light mb-1">
                        Horário de atendimento
                      </h4>
                      <p className="text-accent-medium">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 16h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-accent-light mb-1">
                        Telefone
                      </h4>
                      <p className="text-accent-medium">
                        (11) 99999-9999
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-accent-light mb-1">
                        E-mail
                      </h4>
                      <p className="text-accent-medium">
                        contato@espacoolinda.com.br
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-800 border border-dark-700 rounded-lg p-6">
                <h4 className="font-semibold text-accent-light mb-3">
                  Dicas para a visita
                </h4>
                <ul className="space-y-2 text-sm text-accent-medium">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                    Agende sua visita com antecedência
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                    Traga informações sobre seu evento
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                    Venha com calçado confortável
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                    Tempo estimado: 1-2 horas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <ContactStrip />
    </>
  )
}