import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FeatureList } from '@/components/FeatureList'
import { Button } from '@/components/ui/Button'
import { Calendar, MessageCircle, Bed, Users, Coffee, Wifi, Car, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hospedagem | Quartos & suítes no local',
  description: 'Experiência completa com quem você ama ou com o seu time. Hospedagem para até 40 pessoas com conforto e proximidade total do evento.',
  keywords: ['hospedagem', 'quartos', 'suítes', 'wedding weekend', 'evento', 'Santa Isabel'],
  openGraph: {
    title: 'Hospedagem | Quartos & suítes no local',
    description: 'Experiência completa com quem você ama ou com o seu time. Hospedagem para até 40 pessoas.',
    images: ['/hospedagem/og-image.jpg'],
  },
}

const accommodations = [
  {
    type: 'Suíte dos Noivos',
    description: 'Suíte master com vista para o campo, cama king size, banheiro privativo e área de estar.',
    capacity: '2 pessoas',
    features: ['Vista para o campo', 'Cama king size', 'Banheiro privativo', 'Área de estar', 'Ar condicionado'],
    icon: <Bed className="h-8 w-8 text-primary" />
  },
  {
    type: 'Quartos Familiares',
    description: 'Quartos confortáveis para família e amigos próximos, com camas individuais ou de casal.',
    capacity: '2-4 pessoas',
    features: ['Camas individuais/casal', 'Banheiro compartilhado', 'Ar condicionado', 'Roupas de cama', 'Toalhas'],
    icon: <Users className="h-8 w-8 text-primary" />
  },
  {
    type: 'Quartos Executivos',
    description: 'Quartos para equipe técnica, fornecedores ou participantes de eventos corporativos.',
    capacity: '2 pessoas',
    features: ['Camas individuais', 'Banheiro compartilhado', 'Área de trabalho', 'Wi-Fi', 'Ar condicionado'],
    icon: <Shield className="h-8 w-8 text-primary" />
  }
]

const amenities = [
  {
    icon: <Coffee className="h-6 w-6 text-primary" />,
    title: 'Café da manhã',
    description: 'Café da manhã completo para todos os hóspedes, com produtos frescos e opções variadas.'
  },
  {
    icon: <Wifi className="h-6 w-6 text-primary" />,
    title: 'Wi-Fi gratuito',
    description: 'Internet de alta velocidade disponível em todas as áreas da hospedagem.'
  },
  {
    icon: <Car className="h-6 w-6 text-primary" />,
    title: 'Estacionamento',
    description: 'Estacionamento interno e seguro para todos os veículos dos hóspedes.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Áreas de convivência',
    description: 'Espaços comuns para relaxamento, conversas e momentos de descontração.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Segurança 24h',
    description: 'Monitoramento e segurança durante toda a estadia dos hóspedes.'
  },
  {
    icon: <Bed className="h-6 w-6 text-primary" />,
    title: 'Enxoval completo',
    description: 'Roupas de cama, toalhas e amenidades de banho de primeira qualidade.'
  }
]

const policies = [
  {
    title: 'Check-in e Check-out',
    content: 'Check-in a partir das 14h e check-out até 12h. Flexibilidade para eventos especiais.'
  },
  {
    title: 'Política de Silêncio',
    content: 'Respeitamos o descanso de todos. Mantemos ambiente tranquilo após 22h.'
  },
  {
    title: 'Crianças',
    content: 'Crianças são bem-vindas. Quartos familiares disponíveis para acomodar famílias.'
  },
  {
    title: 'Pets',
    content: 'Pets são permitidos mediante consulta prévia. Taxa adicional pode ser aplicada.'
  },
  {
    title: 'Cancelamento',
    content: 'Política de cancelamento flexível. Consulte condições específicas para seu evento.'
  },
  {
    title: 'Danos',
    content: 'Hóspedes são responsáveis por danos causados às instalações durante a estadia.'
  }
]

const comboPackages = [
  {
    title: 'Wedding Weekend',
    description: 'Pacote completo para casamentos com hospedagem de 2 noites.',
    includes: [
      'Hospedagem para até 40 pessoas',
      'Suíte dos noivos',
      'Café da manhã para todos',
      'Áreas de convivência',
      'Acesso aos espaços do evento'
    ],
    price: 'Consulte valores'
  },
  {
    title: 'Evento Corporativo',
    description: 'Hospedagem para eventos corporativos de múltiplos dias.',
    includes: [
      'Quartos executivos',
      'Wi-Fi dedicado',
      'Áreas de trabalho',
      'Coffee breaks',
      'Jantares de networking'
    ],
    price: 'Consulte valores'
  },
  {
    title: 'Família e Amigos',
    description: 'Hospedagem para eventos familiares e celebrações especiais.',
    includes: [
      'Quartos familiares',
      'Áreas de convivência',
      'Café da manhã',
      'Acesso aos jardins',
      'Atividades recreativas'
    ],
    price: 'Consulte valores'
  }
]

export default function HospedagemPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Fique mais. Viva tudo."
        subtitle="Quartos e suítes para ~40 pessoas, conforto e proximidade total do evento."
        primaryCta={{
          text: 'Consultar disponibilidade',
          href: '/contato'
        }}
        className="pt-20"
      />

      {/* Acomodações */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Acomodações
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Quartos e suítes pensados para diferentes perfis e necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="bg-dark-700 rounded-lg p-8 text-center">
                <div className="mb-6">
                  {accommodation.icon}
                </div>
                <h3 className="text-xl font-semibold text-accent-light mb-2">
                  {accommodation.type}
                </h3>
                <p className="text-accent-medium mb-4 leading-relaxed">
                  {accommodation.description}
                </p>
                <div className="bg-primary/20 rounded-lg p-3 mb-4">
                  <span className="text-primary font-medium">
                    {accommodation.capacity}
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-accent-medium">
                  {accommodation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comodidades */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Comodidades
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Tudo para garantir conforto e comodidade durante sua estadia.
            </p>
          </div>

          <FeatureList
            features={amenities}
            columns={3}
          />
        </div>
      </section>

      {/* Pacotes Combinados */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Pacotes Combinados
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Combine hospedagem com eventos para uma experiência completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboPackages.map((pkg, index) => (
              <div key={index} className="bg-dark-700 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-accent-light mb-2">
                  {pkg.title}
                </h3>
                <p className="text-accent-medium mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-accent-light font-medium mb-3">Inclui:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-accent-medium">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="text-primary font-semibold mb-4">
                    {pkg.price}
                  </div>
                  <Button
                    href="/contato"
                    variant="outline"
                    className="w-full"
                  >
                    Consultar disponibilidade
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Políticas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Políticas
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Informações importantes sobre sua estadia no Espaço Olinda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="bg-dark-800 border border-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-accent-light mb-3">
                  {policy.title}
                </h3>
                <p className="text-accent-medium leading-relaxed">
                  {policy.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-accent-light mb-6">
            Pronto para uma experiência completa?
          </h2>
          <p className="text-lg text-accent-medium mb-8">
            Consulte disponibilidade e reserve sua hospedagem no Espaço Olinda.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-700 rounded-lg p-8 text-center">
              <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Consultar disponibilidade
              </h3>
              <p className="text-accent-medium mb-6">
                Verifique datas disponíveis para sua estadia
              </p>
              <Button
                href="/contato"
                variant="primary"
                className="w-full"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Consultar agora
              </Button>
            </div>
            
            <div className="bg-dark-700 rounded-lg p-8 text-center">
              <MessageCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Falar no WhatsApp
              </h3>
              <p className="text-accent-medium mb-6">
                Tire suas dúvidas sobre hospedagem
              </p>
              <Button
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/5511999999999'}
                variant="outline"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Conversar agora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}