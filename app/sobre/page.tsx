import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FeatureList } from '@/components/FeatureList'
import { Button } from '@/components/ui/Button'
import { Calendar, Heart, Users, Shield, Leaf, Award, MapPin, Car, Accessibility } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre | Nosso propósito',
  description: 'Receber bem é a nossa natureza — e a nossa especialidade. Conheça nossa história, missão e valores no Espaço Olinda.',
  keywords: ['sobre', 'história', 'missão', 'valores', 'equipe', 'Espaço Olinda', 'Santa Isabel'],
  openGraph: {
    title: 'Sobre | Nosso propósito',
    description: 'Receber bem é a nossa natureza — e a nossa especialidade.',
    images: ['/sobre/og-image.jpg'],
  },
}

const teamMembers = [
  {
    name: 'Ana Oliveira',
    role: 'Diretora Geral',
    description: 'Mais de 15 anos de experiência em eventos. Especialista em criar experiências únicas e memoráveis.',
    image: '/team/ana-oliveira.jpg'
  },
  {
    name: 'Carlos Santos',
    role: 'Coordenador de Eventos',
    description: 'Responsável pela logística e execução perfeita de cada evento. Detalhista e apaixonado por excelência.',
    image: '/team/carlos-santos.jpg'
  },
  {
    name: 'Maria Silva',
    role: 'Especialista em Gastronomia',
    description: 'Chef com experiência internacional. Cuida de cada detalhe da experiência gastronômica dos nossos eventos.',
    image: '/team/maria-silva.jpg'
  },
  {
    name: 'João Costa',
    role: 'Coordenador Técnico',
    description: 'Especialista em som, iluminação e tecnologia. Garante que cada apresentação seja impecável.',
    image: '/team/joao-costa.jpg'
  }
]

const values = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Excelência',
    description: 'Buscamos a perfeição em cada detalhe, desde o primeiro contato até o último momento do evento.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Acolhimento',
    description: 'Cada pessoa que passa por aqui é tratada com carinho, respeito e atenção personalizada.'
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Confiabilidade',
    description: 'Nossa palavra é nosso compromisso. Entregamos exatamente o que prometemos, sempre.'
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: 'Sustentabilidade',
    description: 'Respeitamos o meio ambiente e promovemos práticas sustentáveis em todos os nossos eventos.'
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Inovação',
    description: 'Sempre buscamos novas formas de surpreender e criar experiências únicas e inesquecíveis.'
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Paixão',
    description: 'Amamos o que fazemos e isso se reflete em cada evento, cada sorriso, cada momento especial.'
  }
]

const facilities = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Cerimônia coberta',
    description: 'Estrutura elegante que preserva a beleza natural do campo com proteção total contra intempéries.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Salões moduláveis',
    description: 'Dois salões versáteis que se adaptam a diferentes tipos de eventos e números de convidados.'
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: 'Hospedagem on-site',
    description: 'Quartos e suítes para até 40 pessoas, criando uma experiência completa de wedding weekend.'
  },
  {
    icon: <Car className="h-6 w-6 text-primary" />,
    title: 'Estacionamento amplo',
    description: 'Estacionamento interno e seguro para todos os convidados, com fácil acesso aos espaços.'
  },
  {
    icon: <Accessibility className="h-6 w-6 text-primary" />,
    title: 'Acessibilidade',
    description: 'Estrutura totalmente acessível, garantindo conforto e inclusão para todos os convidados.'
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'Localização estratégica',
    description: 'Perto da cidade, longe do ruído. Fácil acesso por estradas pavimentadas.'
  }
]

const certifications = [
  {
    title: 'Licença de Funcionamento',
    description: 'Espaço licenciado e regularizado para eventos de todos os tipos.'
  },
  {
    title: 'Certificação de Segurança',
    description: 'Equipamentos de segurança e protocolos de emergência em conformidade.'
  },
  {
    title: 'Certificação Ambiental',
    description: 'Práticas sustentáveis e respeito ao meio ambiente certificados.'
  },
  {
    title: 'Certificação de Acessibilidade',
    description: 'Estrutura acessível conforme normas técnicas de acessibilidade.'
  }
]

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Receber bem é a nossa natureza."
        subtitle="Somos um espaço de campo projetado para celebrar — com a serenidade da natureza e a precisão de um time que cuida de cada detalhe. Nossa missão é transformar eventos em experiências memoráveis."
        primaryCta={{
          text: 'Agendar visita',
          href: '/contato'
        }}
        className="pt-20"
      />

      {/* História e Missão */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-accent-light mb-6">
                Nossa história
              </h2>
              <p className="text-lg text-accent-medium mb-6 leading-relaxed">
                O Espaço Olinda nasceu do sonho de criar um lugar onde momentos especiais pudessem ser 
                celebrados com a perfeição que merecem. Localizado em Santa Isabel, a poucos minutos de 
                São Paulo, nosso espaço combina a tranquilidade do campo com a infraestrutura de um 
                centro de eventos de primeira linha.
              </p>
              <p className="text-accent-medium mb-8 leading-relaxed">
                Desde nossa inauguração, temos o privilégio de fazer parte de centenas de histórias 
                de amor, celebrações corporativas e momentos únicos que ficam marcados para sempre 
                na memória de nossos clientes.
              </p>
              <Button
                href="/contato"
                variant="primary"
                size="lg"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Conhecer pessoalmente
              </Button>
            </div>
            <div className="bg-dark-700 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Nossa missão
              </h3>
              <p className="text-accent-medium mb-6 leading-relaxed">
                Transformar eventos em experiências memoráveis, oferecendo um espaço único que combina 
                a beleza natural do campo com infraestrutura de excelência e atendimento personalizado.
              </p>
              <h4 className="font-semibold text-accent-light mb-3">Nossos valores:</h4>
              <ul className="space-y-2 text-sm text-accent-medium">
                {['Excelência em cada detalhe', 'Acolhimento personalizado', 'Confiabilidade total', 'Respeito ao meio ambiente'].map((value, index) => (
                  <li key={index} className="flex items-center">
                    <Heart className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Nossos valores
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada ação no Espaço Olinda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-dark-800 border border-dark-700 rounded-lg p-8 text-center">
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-accent-light mb-4">
                  {value.title}
                </h3>
                <p className="text-accent-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Nossa equipe
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Profissionais experientes e apaixonados pelo que fazem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-dark-700 rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-accent-light mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-accent-medium leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              O espaço e seus ambientes
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Cada detalhe foi pensado para criar experiências únicas e memoráveis.
            </p>
          </div>

          <FeatureList
            features={facilities}
            columns={2}
          />

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

      {/* Certificações e Compromissos */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Certificações e compromissos
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Qualidade, segurança e responsabilidade social e ambiental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-accent-light mb-3">
                  {cert.title}
                </h3>
                <p className="text-accent-medium leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisso com a vizinhança */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Compromisso com a vizinhança
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Respeitamos e valorizamos nossa comunidade local.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Respeito aos horários
              </h3>
              <p className="text-accent-medium">
                Respeitamos os horários estabelecidos e mantemos o silêncio após 22h.
              </p>
            </div>

            <div className="text-center">
              <Leaf className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Sustentabilidade
              </h3>
              <p className="text-accent-medium">
                Práticas sustentáveis e respeito ao meio ambiente em todas as atividades.
              </p>
            </div>

            <div className="text-center">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Comunidade local
              </h3>
              <p className="text-accent-medium">
                Priorizamos fornecedores locais e contribuímos para o desenvolvimento da região.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-accent-light mb-6">
            Conheça pessoalmente o Espaço Olinda
          </h2>
          <p className="text-lg text-accent-medium mb-8">
            Agende uma visita e descubra por que somos a escolha certa para seu evento especial.
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
      </section>
    </>
  )
}