import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Calendar, Users, Heart, Briefcase, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cases | Eventos reais',
  description: 'Resultados que falam por si: antes, durante e depois. Conheça alguns dos eventos realizados no Espaço Olinda.',
  keywords: ['cases', 'eventos reais', 'resultados', 'exemplos', 'Espaço Olinda'],
  openGraph: {
    title: 'Cases | Eventos reais',
    description: 'Resultados que falam por si: antes, durante e depois.',
    images: ['/cases/og-image.jpg'],
  },
}

// Cases fictícios (em produção viriam de um CMS)
const cases = [
  {
    slug: 'casamento-ana-joao-wedding-weekend',
    title: 'Casamento Ana & João - Wedding Weekend Completo',
    type: 'Casamento',
    date: '2023-10-15',
    guests: 120,
    duration: '3 dias',
    description: 'Um wedding weekend completo com cerimônia coberta, recepção ao ar livre e hospedagem para 40 convidados.',
    challenge: 'Criar uma experiência imersiva para convidados que vinham de diferentes estados, com atividades para todos os gostos.',
    solution: 'Wedding weekend estruturado com jantar de boas-vindas, cerimônia coberta, recepção ao ar livre e atividades recreativas.',
    results: [
      '100% dos convidados elogiaram a experiência',
      '40 pessoas hospedadas no local',
      'Zero imprevistos climáticos',
      'Feedback unânime sobre a qualidade'
    ],
    image: '/cases/casamento-ana-joao.jpg',
    featured: true
  },
  {
    slug: 'lancamento-techcorp-produto-innovador',
    title: 'Lançamento TechCorp - Produto Inovador',
    type: 'Corporativo',
    date: '2023-09-20',
    guests: 150,
    duration: '1 dia',
    description: 'Lançamento de produto tecnológico com demonstrações práticas e networking em ambiente inspirador.',
    challenge: 'Criar um ambiente que estimulasse criatividade e inovação, com estrutura técnica para demonstrações.',
    solution: 'Layout misto com palco para apresentações, áreas de demonstração e espaços de networking ao ar livre.',
    results: [
      '95% de engajamento nas demonstrações',
      '80% dos participantes fizeram networking',
      '15 leads qualificados gerados',
      'Feedback excelente sobre o ambiente'
    ],
    image: '/cases/lancamento-techcorp.jpg',
    featured: false
  },
  {
    slug: 'boda-ouro-maria-carlos-25-anos',
    title: 'Boda de Ouro Maria & Carlos - 25 Anos',
    type: 'Celebração Familiar',
    date: '2023-11-05',
    guests: 80,
    duration: '1 dia',
    description: 'Celebração de 25 anos de casamento com toda a família, incluindo netos e bisnetos.',
    challenge: 'Criar um ambiente acolhedor e nostálgico para diferentes gerações, com atividades para todas as idades.',
    solution: 'Decoração vintage, menu tradicional e atividades que uniram as gerações.',
    results: [
      '4 gerações presentes',
      'Atividades para todas as idades',
      'Momentos emocionantes registrados',
      'Família unida em celebração'
    ],
    image: '/cases/boda-ouro-maria-carlos.jpg',
    featured: false
  },
  {
    slug: 'treinamento-globalcorp-lideranca',
    title: 'Treinamento GlobalCorp - Liderança',
    type: 'Corporativo',
    date: '2023-08-12',
    guests: 60,
    duration: '2 dias',
    description: 'Workshop de liderança para executivos com hospedagem e atividades de team building.',
    challenge: 'Criar um ambiente que favorecesse reflexão e conexão, longe das distrações urbanas.',
    solution: 'Programa imersivo com workshops, atividades externas e hospedagem no local.',
    results: [
      '90% de participação ativa',
      'Hospedagem para 30 executivos',
      'Atividades de team building',
      'Avaliação 9.2/10'
    ],
    image: '/cases/treinamento-globalcorp.jpg',
    featured: false
  },
  {
    slug: 'formatura-medicina-universidade-sp',
    title: 'Formatura Medicina - Universidade SP',
    type: 'Formatura',
    date: '2023-12-10',
    guests: 200,
    duration: '1 dia',
    description: 'Cerimônia de formatura de medicina com recepção para 200 pessoas.',
    challenge: 'Organizar uma celebração digna de anos de estudo, com estrutura para cerimônia formal e festa.',
    solution: 'Cerimônia coberta seguida de recepção ao ar livre com decoração elegante.',
    results: [
      '200 formandos e familiares',
      'Cerimônia sem imprevistos',
      'Recepção memorável',
      'Fotos espetaculares'
    ],
    image: '/cases/formatura-medicina.jpg',
    featured: false
  },
  {
    slug: 'confraternizacao-startupx-fim-ano',
    title: 'Confraternização StartupX - Fim de Ano',
    type: 'Corporativo',
    date: '2023-12-15',
    guests: 80,
    duration: '1 dia',
    description: 'Celebração de fim de ano com equipe de startup, atividades recreativas e jantar.',
    challenge: 'Criar um ambiente descontraído que refletisse a cultura jovem da empresa.',
    solution: 'Atividades recreativas, jantar ao ar livre e momentos de descontração.',
    results: [
      '100% da equipe presente',
      'Atividades recreativas',
      'Ambiente descontraído',
      'Fim de ano memorável'
    ],
    image: '/cases/confraternizacao-startupx.jpg',
    featured: false
  }
]

function CaseCard({ caseData }: { caseData: typeof cases[0] }) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Casamento':
        return <Heart className="h-6 w-6 text-primary" />
      case 'Corporativo':
        return <Briefcase className="h-6 w-6 text-primary" />
      case 'Formatura':
        return <Users className="h-6 w-6 text-primary" />
      default:
        return <Calendar className="h-6 w-6 text-primary" />
    }
  }

  return (
    <article className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        {getIcon(caseData.type)}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/20 text-primary">
            {getIcon(caseData.type)}
            <span className="ml-2">{caseData.type}</span>
          </span>
          <time className="text-sm text-accent-medium">
            {new Date(caseData.date).toLocaleDateString('pt-BR')}
          </time>
        </div>

        <h2 className="text-xl font-serif font-semibold text-accent-light mb-3 hover:text-primary transition-colors">
          <Link href={`/cases/${caseData.slug}`}>
            {caseData.title}
          </Link>
        </h2>

        <p className="text-accent-medium mb-4 leading-relaxed">
          {caseData.description}
        </p>

        <div className="flex items-center justify-between text-sm text-accent-medium mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{caseData.guests} convidados</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{caseData.duration}</span>
          </div>
        </div>

        <Link
          href={`/cases/${caseData.slug}`}
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Ver case completo
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </article>
  )
}

function FeaturedCase({ caseData }: { caseData: typeof cases[0] }) {
  return (
    <article className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <Heart className="h-24 w-24 text-primary" />
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/20 text-primary">
              <Heart className="h-4 w-4 mr-2" />
              {caseData.type}
            </span>
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
              Destaque
            </span>
          </div>

          <h2 className="text-2xl font-serif font-bold text-accent-light mb-4 hover:text-primary transition-colors">
            <Link href={`/cases/${caseData.slug}`}>
              {caseData.title}
            </Link>
          </h2>

          <p className="text-accent-medium mb-6 leading-relaxed">
            {caseData.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{caseData.guests}</div>
              <div className="text-sm text-accent-medium">Convidados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{caseData.duration}</div>
              <div className="text-sm text-accent-medium">Duração</div>
            </div>
          </div>

          <Button
            href={`/cases/${caseData.slug}`}
            variant="primary"
            className="w-full lg:w-auto"
          >
            Ver case completo
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </article>
  )
}

export default function CasesPage() {
  const featuredCase = cases.find(c => c.featured)
  const regularCases = cases.filter(c => !c.featured)

  const stats = [
    { label: 'Eventos realizados', value: '150+' },
    { label: 'Anos de experiência', value: '5+' },
    { label: 'Clientes satisfeitos', value: '100%' },
    { label: 'Tipos de eventos', value: '10+' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-accent-light mb-6">
              Resultados que falam por si
            </h1>
            <p className="text-xl text-accent-medium max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos eventos realizados no Espaço Olinda. Cada case é uma história 
              de sucesso, planejamento impecável e momentos inesquecíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-accent-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case em destaque */}
      {featuredCase && (
        <section className="py-16 bg-dark-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-accent-light mb-8 text-center">
              Case em destaque
            </h2>
            <FeaturedCase caseData={featuredCase} />
          </div>
        </section>
      )}

      {/* Grid de cases */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-accent-light mb-8 text-center">
            Todos os cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCases.map((caseData) => (
              <CaseCard key={caseData.slug} caseData={caseData} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-accent-light mb-6">
            Quer ser nosso próximo case de sucesso?
          </h2>
          <p className="text-lg text-accent-medium mb-8">
            Entre em contato conosco e vamos criar juntos o evento dos seus sonhos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contato"
              variant="primary"
              size="lg"
            >
              Solicitar proposta
            </Button>
            <Button
              href="/casamentos"
              variant="outline"
              size="lg"
            >
              Ver casamentos
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}