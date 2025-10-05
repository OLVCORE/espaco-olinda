import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FeatureList } from '@/components/FeatureList'
import { Gallery } from '@/components/Gallery'
import { TestimonialsGrid } from '@/components/Testimonial'
import { ContactStrip } from '@/components/ContactStrip'
import { Button } from '@/components/ui/Button'
import { Calendar, MessageCircle, MapPin, Users, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Espaço Olinda | Eventos no campo, perto da cidade',
  description: 'Cerimônia coberta, salões versáteis e hospedagem on-site. Casamentos e eventos corporativos com exclusividade no interior de SP.',
  keywords: ['eventos', 'casamento', 'corporativo', 'campo', 'Santa Isabel', 'SP', 'hospedagem', 'cerimônia coberta'],
  openGraph: {
    title: 'Espaço Olinda | Eventos no campo, perto da cidade',
    description: 'Cerimônia coberta, salões versáteis e hospedagem on-site. Casamentos e eventos corporativos com exclusividade.',
    images: ['/og-image.jpg'],
  },
}

const features = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Cerimônia coberta',
    description: 'Sem imprevistos climáticos. Nossa estrutura coberta garante que seu momento especial aconteça independente do tempo.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Hospedagem no local',
    description: 'Até 40 pessoas podem ficar hospedadas no próprio espaço, criando uma experiência completa e exclusiva.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: '1 evento por dia',
    description: 'Exclusividade total. Seu evento é o único do dia, garantindo atenção completa da nossa equipe.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Capacidade 50-300 convidados',
    description: 'Salões versáteis que se adaptam ao tamanho do seu evento, do íntimo ao grandioso.'
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'Localização estratégica',
    description: 'Perto da cidade, longe do ruído. Fácil acesso por estradas pavimentadas com estacionamento interno.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: 'Logística fluida',
    description: 'Cozinha industrial, áreas técnicas, docas de carga e equipe especializada para cuidar de cada detalhe.'
  }
]

const howItWorks = [
  {
    step: '01',
    title: 'Briefing',
    description: 'Entendemos seu sonho ou o objetivo do seu evento. Coletamos todas as informações necessárias para criar uma proposta personalizada.'
  },
  {
    step: '02',
    title: 'Visita guiada',
    description: 'Você conhece os ambientes e as possibilidades. Mostramos como cada espaço pode ser adaptado para sua celebração.'
  },
  {
    step: '03',
    title: 'Proposta',
    description: 'Espaço + serviços (gastronomia, bar, décor, A/V, confeitaria). Tudo detalhado e transparente, sem surpresas.'
  },
  {
    step: '04',
    title: 'Produção',
    description: 'Cronograma, fornecedores homologados e ensaios quando necessário. Acompanhamos cada etapa da preparação.'
  },
  {
    step: '05',
    title: 'Dia do evento',
    description: 'Uma equipe dedicada, um dia inesquecível. Estamos presentes para garantir que tudo aconteça perfeitamente.'
  }
]

const testimonials = [
  {
    id: '1',
    name: 'Maria e João',
    event: 'Casamento',
    date: 'Outubro 2023',
    rating: 5,
    text: 'O Espaço Olinda superou todas as nossas expectativas. A cerimônia coberta nos salvou da chuva, e a hospedagem no local permitiu que nossa família inteira ficasse conosco. Foi perfeito!'
  },
  {
    id: '2',
    name: 'TechCorp',
    event: 'Lançamento de produto',
    date: 'Setembro 2023',
    rating: 5,
    text: 'Excelente para eventos corporativos. A estrutura técnica é impecável, o ambiente inspira criatividade e a logística foi fluida. Recomendamos para qualquer empresa que queira impressionar.'
  },
  {
    id: '3',
    name: 'Ana e Carlos',
    event: 'Boda de 25 anos',
    date: 'Novembro 2023',
    rating: 5,
    text: 'Celebramos nossas bodas de prata com toda a família. O espaço é acolhedor, a equipe atenciosa e cada detalhe foi pensado para nos fazer sentir especiais. Memórias para toda a vida.'
  }
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Onde o 'sim' encontra a natureza — e tudo fica perfeito."
        subtitle="Um espaço de campo, a poucos minutos da cidade, com cerimônia coberta, salões versáteis e hospedagem on-site. Um único lugar para celebrar, receber e viver uma experiência completa."
        primaryCta={{
          text: 'Agendar visita',
          href: '/contato'
        }}
        secondaryCta={{
          text: 'Solicitar orçamento',
          href: '/contato'
        }}
        proofPoints={[
          'Cerimônia coberta',
          'Hospedagem até ~40 pessoas',
          '1 evento por dia',
          '50–300 convidados'
        ]}
      />

      {/* Por que o campo */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              O melhor do campo, perto de você.
            </h2>
            <p className="text-lg text-accent-medium max-w-3xl mx-auto leading-relaxed">
              O Espaço Olinda combina atmosfera de fazenda com a precisão de um centro de eventos: 
              cerimônia coberta para qualquer clima, salões com plantas flexíveis, cozinha industrial 
              e estacionamento amplo. A poucos minutos da cidade, sem abrir mão da natureza — e do conforto.
            </p>
          </div>

          <FeatureList
            features={features}
            columns={2}
            className="bg-transparent"
          />

          <div className="text-center mt-12">
            <Button
              href="/sobre"
              variant="primary"
              size="lg"
            >
              Conhecer a infraestrutura
            </Button>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Como funciona
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Um processo simples e transparente, do primeiro contato ao dia do seu evento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-accent-light mb-2">
                  {step.title}
                </h3>
                <p className="text-accent-medium text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/contato"
              variant="primary"
              size="lg"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Agendar visita
            </Button>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <Gallery
        source="ig"
        maxItems={12}
        title="Eventos reais, momentos verdadeiros"
      />

      {/* Serviços integrados */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Espaço, serviços e curadoria — tudo no mesmo lugar.
            </h2>
            <p className="text-lg text-accent-medium max-w-3xl mx-auto leading-relaxed">
              Você pode contratar serviços via Espaço Olinda ou trazer fornecedores homologados. 
              Gastronomia, bar, decoração, iluminação, som e confeitaria — com o nível de qualidade 
              que sua celebração exige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-700 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Para Casamentos
              </h3>
              <p className="text-accent-medium mb-6">
                Wedding weekend completo com cerimônia coberta, recepção, hospedagem e todos os serviços integrados.
              </p>
              <Button
                href="/casamentos"
                variant="outline"
                className="w-full"
              >
                Ver opções para casamentos
              </Button>
            </div>

            <div className="bg-dark-700 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Para Eventos Corporativos
              </h3>
              <p className="text-accent-medium mb-6">
                Lançamentos, convenções, treinamentos e confraternizações com estrutura técnica completa.
              </p>
              <Button
                href="/corporativo"
                variant="outline"
                className="w-full"
              >
                Ver opções para eventos corporativos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <TestimonialsGrid
        testimonials={testimonials}
        title="O que nossos clientes dizem"
      />

      {/* Mapa/Local */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Fácil de chegar, difícil de esquecer.
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Estrada tranquila, vias pavimentadas e estacionamento interno. Perto da cidade, longe do ruído.
            </p>
          </div>

          <div className="bg-dark-800 rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Estrada Municipal, s/n - Santa Isabel/SP
              </h3>
              <p className="text-accent-medium mb-6">
                A apenas 45 minutos de São Paulo, com fácil acesso por estradas pavimentadas. 
                Estacionamento interno para todos os convidados.
              </p>
              <Button
                href="/contato"
                variant="primary"
                size="lg"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Agendar visita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <ContactStrip />
    </>
  )
}