import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { generateCaseMetadata } from '@/lib/seo'
import { Calendar, Users, Clock, Heart, Briefcase, ArrowLeft, CheckCircle, Star } from 'lucide-react'

// Cases fictícios (em produção viriam de um CMS)
const cases = {
  'casamento-ana-joao-wedding-weekend': {
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
    gallery: [
      '/cases/casamento-ana-joao-1.jpg',
      '/cases/casamento-ana-joao-2.jpg',
      '/cases/casamento-ana-joao-3.jpg',
      '/cases/casamento-ana-joao-4.jpg'
    ],
    testimonial: {
      text: 'O Espaço Olinda superou todas as nossas expectativas. O wedding weekend foi perfeito, todos os nossos convidados ficaram encantados com a experiência. Recomendamos de olhos fechados!',
      author: 'Ana e João',
      rating: 5
    },
    tags: ['casamento', 'wedding weekend', 'hospedagem', 'cerimônia coberta']
  },
  'lancamento-techcorp-produto-innovador': {
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
    gallery: [
      '/cases/lancamento-techcorp-1.jpg',
      '/cases/lancamento-techcorp-2.jpg',
      '/cases/lancamento-techcorp-3.jpg'
    ],
    testimonial: {
      text: 'Excelente para eventos corporativos. A estrutura técnica é impecável, o ambiente inspira criatividade e a logística foi fluida. Recomendamos para qualquer empresa que queira impressionar.',
      author: 'TechCorp',
      rating: 5
    },
    tags: ['corporativo', 'lançamento', 'tecnologia', 'networking']
  }
}

interface CasePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const caseData = cases[params.slug as keyof typeof cases]
  
  if (!caseData) {
    return {
      title: 'Case não encontrado',
      description: 'O case solicitado não foi encontrado.',
    }
  }

  return generateCaseMetadata({
    title: caseData.title,
    description: caseData.description,
    date: caseData.date,
    slug: params.slug,
    tags: caseData.tags,
    image: caseData.image,
  })
}

export default function CasePage({ params }: CasePageProps) {
  const caseData = cases[params.slug as keyof typeof cases]

  if (!caseData) {
    notFound()
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'Casamento':
        return <Heart className="h-8 w-8 text-primary" />
      case 'Corporativo':
        return <Briefcase className="h-8 w-8 text-primary" />
      default:
        return <Calendar className="h-8 w-8 text-primary" />
    }
  }

  const relatedCases = Object.entries(cases)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 2)
    .map(([slug, data]) => ({ slug, ...data }))

  return (
    <div className="min-h-screen pt-20">
      {/* Hero do Case */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              href="/cases"
              variant="outline"
              size="sm"
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos cases
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                {getIcon(caseData.type)}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/20 text-primary">
                  {caseData.type}
                </span>
                <time className="text-sm text-accent-medium">
                  {new Date(caseData.date).toLocaleDateString('pt-BR')}
                </time>
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-bold text-accent-light mb-6">
                {caseData.title}
              </h1>

              <p className="text-xl text-accent-medium mb-8 leading-relaxed">
                {caseData.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{caseData.guests}</div>
                  <div className="text-sm text-accent-medium">Convidados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{caseData.duration}</div>
                  <div className="text-sm text-accent-medium">Duração</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {caseData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/20 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
              {getIcon(caseData.type)}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do Case */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Conteúdo principal */}
            <div className="lg:col-span-2 space-y-12">
              {/* Desafio */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                  Desafio
                </h2>
                <p className="text-accent-medium leading-relaxed">
                  {caseData.challenge}
                </p>
              </div>

              {/* Solução */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                  Solução
                </h2>
                <p className="text-accent-medium leading-relaxed">
                  {caseData.solution}
                </p>
              </div>

              {/* Resultados */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-accent-light mb-6">
                  Resultados
                </h2>
                <div className="space-y-4">
                  {caseData.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-accent-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Galeria */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-accent-light mb-6">
                  Galeria
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {caseData.gallery.map((image, index) => (
                    <div key={index} className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Depoimento */}
              <div className="bg-dark-800 border border-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-accent-light mb-4">
                  Depoimento
                </h3>
                <div className="flex items-center mb-4">
                  {Array.from({ length: caseData.testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-accent-medium mb-4 leading-relaxed">
                  "{caseData.testimonial.text}"
                </blockquote>
                <cite className="text-sm text-primary font-medium">
                  — {caseData.testimonial.author}
                </cite>
              </div>

              {/* Informações do evento */}
              <div className="bg-dark-800 border border-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-accent-light mb-4">
                  Informações do evento
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-accent-medium">Tipo:</span>
                    <span className="text-accent-light">{caseData.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-accent-medium">Data:</span>
                    <span className="text-accent-light">
                      {new Date(caseData.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-accent-medium">Convidados:</span>
                    <span className="text-accent-light">{caseData.guests}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-accent-medium">Duração:</span>
                    <span className="text-accent-light">{caseData.duration}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-accent-light mb-4">
                  Quer um resultado similar?
                </h3>
                <p className="text-accent-medium mb-6 text-sm">
                  Entre em contato conosco e vamos criar o evento dos seus sonhos.
                </p>
                <Button
                  href="/contato"
                  variant="primary"
                  className="w-full"
                >
                  Solicitar proposta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases relacionados */}
      {relatedCases.length > 0 && (
        <section className="py-16 bg-dark-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-accent-light mb-8 text-center">
              Cases relacionados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCases.map((relatedCase) => (
                <article key={relatedCase.slug} className="bg-dark-700 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {getIcon(relatedCase.type)}
                    <span className="text-sm text-accent-medium">{relatedCase.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-accent-light mb-2 hover:text-primary transition-colors">
                    <Link href={`/cases/${relatedCase.slug}`}>
                      {relatedCase.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-accent-medium mb-4">
                    {relatedCase.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-accent-medium">
                      {new Date(relatedCase.date).toLocaleDateString('pt-BR')}
                    </time>
                    <Link
                      href={`/cases/${relatedCase.slug}`}
                      className="text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      Ver case →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-dark-800 border border-dark-700 rounded-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-accent-light mb-4">
              Pronto para ser nosso próximo case de sucesso?
            </h3>
            <p className="text-accent-medium mb-6">
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
        </div>
      </section>
    </div>
  )
}