import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FeatureList } from '@/components/FeatureList'
import { Gallery } from '@/components/Gallery'
import { FAQ, FAQSchema } from '@/components/FAQ'
import { CalendarEmbed } from '@/components/CalendarEmbed'
import { Button } from '@/components/ui/Button'
import { Calendar, MessageCircle, Briefcase, Users, Mic, Wifi, Coffee, Presentation } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporativo | Lançamentos, convenções & treinamentos',
  description: 'Mais foco e criatividade no campo. Estrutura técnica, salões moduláveis e logística fluida para eventos corporativos.',
  keywords: ['evento corporativo', 'lançamento', 'convenção', 'treinamento', 'workshop', 'campo', 'Santa Isabel'],
  openGraph: {
    title: 'Corporativo | Lançamentos, convenções & treinamentos',
    description: 'Mais foco e criatividade no campo. Estrutura técnica, salões moduláveis e logística fluida.',
    images: ['/corporativo/og-image.jpg'],
  },
}

const corporateFeatures = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Logística simples, foco elevado',
    description: 'Ambiente controlado, sem distrações urbanas, com infraestrutura completa para máxima produtividade.'
  },
  {
    icon: <Presentation className="h-6 w-6 text-primary" />,
    title: 'Ar livre para dinâmicas e ativações',
    description: 'Espaços ao ar livre para atividades, dinâmicas de grupo e experiências imersivas que engajam equipes.'
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: 'Salões moduláveis para plenárias e workshops',
    description: 'Espaços flexíveis que se adaptam a diferentes formatos: plenárias, workshops, apresentações e networking.'
  },
  {
    icon: <Wifi className="h-6 w-6 text-primary" />,
    title: 'Menos ruído, mais engajamento',
    description: 'Ambiente tranquilo que favorece concentração, criatividade e conexão entre participantes.'
  }
]

const eventFormats = [
  {
    icon: <Presentation className="h-8 w-8 text-primary" />,
    title: 'Lançamentos de produtos',
    description: 'Demostrações, experiências e apresentações em ambiente inspirador que potencializa o impacto da sua marca.',
    features: ['Palco e projeção', 'Áreas de demonstração', 'Networking', 'Coffee breaks']
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Treinamentos & Workshops',
    description: 'Salas e áreas externas para capacitação, desenvolvimento de equipes e aprendizado prático.',
    features: ['Salas moduláveis', 'Áreas externas', 'Material técnico', 'Dinâmicas práticas']
  },
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'Convenções',
    description: 'Palco, projeção, som e estrutura completa para grandes apresentações e reuniões corporativas.',
    features: ['Palco profissional', 'Sistema de som', 'Projeção HD', 'Layout flexível']
  },
  {
    icon: <Coffee className="h-8 w-8 text-primary" />,
    title: 'Confraternizações',
    description: 'Áreas sociais integradas para celebrações, team buildings e momentos de descontração da equipe.',
    features: ['Áreas sociais', 'Atividades recreativas', 'Gastronomia', 'Ambiente descontraído']
  }
]

const technicalResources = [
  {
    title: 'Palco, som, projeção, mapping leve',
    description: 'Estrutura técnica profissional para apresentações impactantes e experiências audiovisuais.'
  },
  {
    title: 'Internet e pontos de energia dedicados',
    description: 'Conectividade robusta e infraestrutura elétrica preparada para equipamentos técnicos.'
  },
  {
    title: 'Cozinha industrial (coffee breaks, almoços, coquetéis)',
    description: 'Gastronomia completa para manter a energia e o foco durante todo o evento.'
  },
  {
    title: 'Áreas de apoio, camarins, docas',
    description: 'Espaços técnicos e logísticos para garantir fluidez e organização do evento.'
  }
]

const faqItems = [
  {
    question: 'Qual a capacidade para eventos corporativos?',
    answer: 'Nossa capacidade varia de 50 a 300 pessoas, dependendo do formato do evento. Para convenções e plenárias, recomendamos até 200 pessoas. Para workshops e treinamentos, até 100 pessoas para maior interatividade.'
  },
  {
    question: 'Há estrutura técnica completa?',
    answer: 'Sim, oferecemos palco profissional, sistema de som, projeção HD, internet dedicada, pontos de energia e equipe técnica especializada. Tudo para garantir que sua apresentação seja impecável.'
  },
  {
    question: 'É possível fazer eventos de múltiplos dias?',
    answer: 'Sim, oferecemos hospedagem para até 40 pessoas e estrutura completa para eventos de múltiplos dias, incluindo coffee breaks, almoços e jantares.'
  },
  {
    question: 'Há suporte para atividades externas?',
    answer: 'Sim, temos áreas ao ar livre para dinâmicas, team buildings, atividades recreativas e momentos de descontração que complementam o evento.'
  },
  {
    question: 'Como funciona a gastronomia para eventos corporativos?',
    answer: 'Oferecemos coffee breaks, almoços, coquetéis e jantares, com cardápios adaptados ao perfil corporativo. Trabalhamos com fornecedores homologados ou você pode trazer seus parceiros.'
  },
  {
    question: 'Há estacionamento para todos os participantes?',
    answer: 'Sim, temos estacionamento interno amplo para todos os participantes, com segurança e fácil acesso aos espaços do evento.'
  }
]

export default function CorporativoPage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      
      {/* Hero Section */}
      <Hero
        title="Negócios respiram melhor no campo."
        subtitle="Lançamentos, convenções, treinamentos e confraternizações em um cenário que estimula concentração, criatividade e conexão."
        primaryCta={{
          text: 'Solicitar proposta',
          href: '/contato'
        }}
        secondaryCta={{
          text: 'Agendar visita técnica',
          href: '/contato'
        }}
        className="pt-20"
      />

      {/* Por que campo > cidade */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Por que campo &gt; cidade para empresas?
            </h2>
            <p className="text-lg text-accent-medium max-w-3xl mx-auto leading-relaxed">
              O ambiente rural oferece vantagens únicas para eventos corporativos: menos distrações, 
              mais foco, criatividade estimulada e conexão genuína entre participantes.
            </p>
          </div>

          <FeatureList
            features={corporateFeatures}
            columns={2}
          />

          <div className="text-center mt-12">
            <Button
              href="/sobre"
              variant="primary"
              size="lg"
            >
              Ver layouts e infraestrutura
            </Button>
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Formatos
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Adaptamos nossos espaços para diferentes tipos de eventos corporativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventFormats.map((format, index) => (
              <div key={index} className="bg-dark-800 border border-dark-700 rounded-lg p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    {format.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent-light mb-2">
                      {format.title}
                    </h3>
                    <p className="text-accent-medium leading-relaxed">
                      {format.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {format.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-accent-medium">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/contato"
              variant="primary"
              size="lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Solicitar proposta
            </Button>
          </div>
        </div>
      </section>

      {/* Recursos técnicos */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Recursos técnicos
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Infraestrutura completa para eventos corporativos de alto nível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalResources.map((resource, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-light mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-accent-medium leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/contato"
              variant="primary"
              size="lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Solicitar proposta
            </Button>
          </div>
        </div>
      </section>

      {/* Galeria Corporativo */}
      <Gallery
        source="ig"
        maxItems={12}
        title="Eventos corporativos reais"
      />

      {/* Cases Corporativos */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Cases Corporativos
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Alguns exemplos de eventos corporativos realizados no Espaço Olinda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Briefcase className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-accent-light mb-2">
                  Lançamento TechCorp
                </h3>
                <p className="text-sm text-accent-medium mb-4">
                  Lançamento de produto com 150 participantes, demonstrações práticas e networking.
                </p>
                <div className="flex items-center justify-between text-sm text-accent-medium">
                  <span>150 participantes</span>
                  <span>2 dias</span>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-accent-light mb-2">
                  Treinamento GlobalCorp
                </h3>
                <p className="text-sm text-accent-medium mb-4">
                  Workshop de liderança com 80 executivos, atividades externas e hospedagem.
                </p>
                <div className="flex items-center justify-between text-sm text-accent-medium">
                  <span>80 participantes</span>
                  <span>3 dias</span>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-accent-light mb-2">
                  Confraternização StartupX
                </h3>
                <p className="text-sm text-accent-medium mb-4">
                  Celebração de fim de ano com 60 colaboradores, atividades recreativas e jantar.
                </p>
                <div className="flex items-center justify-between text-sm text-accent-medium">
                  <span>60 participantes</span>
                  <span>1 dia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              href="/cases"
              variant="outline"
              size="lg"
            >
              Ver todos os cases
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Perguntas Frequentes - Corporativo"
        subtitle="Tire suas dúvidas sobre eventos corporativos no Espaço Olinda"
      />

      {/* CTA Final */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-accent-light mb-6">
            Pronto para levar sua empresa ao campo?
          </h2>
          <p className="text-lg text-accent-medium mb-8">
            Agende uma visita técnica e conheça todas as possibilidades para seu evento corporativo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CalendarEmbed
              title="Agendar visita técnica"
              subtitle="Conheça a infraestrutura e recursos técnicos"
            />
            
            <div className="bg-dark-700 rounded-lg p-8 text-center">
              <MessageCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Falar no WhatsApp
              </h3>
              <p className="text-accent-medium mb-6">
                Tire suas dúvidas rapidamente
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