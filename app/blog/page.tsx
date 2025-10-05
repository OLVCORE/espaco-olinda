import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { generateBlogPostMetadata } from '@/lib/seo'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Guia vivo para eventos no campo',
  description: 'Dicas, tendências e inspirações para casamentos, eventos corporativos e celebrações especiais no campo.',
  keywords: ['blog', 'dicas', 'tendências', 'inspiração', 'eventos', 'casamento', 'corporativo'],
  openGraph: {
    title: 'Blog | Guia vivo para eventos no campo',
    description: 'Dicas, tendências e inspirações para casamentos, eventos corporativos e celebrações especiais no campo.',
    images: ['/blog/og-image.jpg'],
  },
}

// Posts iniciais do blog (simulados)
const initialPosts = [
  {
    slug: 'como-escolher-espaco-casamento-interior-sp',
    title: 'Como escolher um espaço de casamento no interior de SP',
    description: 'O que avaliar em acesso, clima, cerimônia, logística e hospedagem para um dia sem imprevistos.',
    date: '2024-01-15',
    tags: ['casamentos', 'dicas', 'planejamento'],
    readTime: '5 min',
    image: '/blog/casamento-interior-sp.jpg',
    featured: true
  },
  {
    slug: 'wedding-weekend-vale-pena',
    title: 'Wedding weekend: vale a pena?',
    description: 'Por que estender a experiência muda a energia do evento — e como planejar.',
    date: '2024-01-10',
    tags: ['casamentos', 'wedding weekend', 'hospedagem'],
    readTime: '4 min',
    image: '/blog/wedding-weekend.jpg',
    featured: false
  },
  {
    slug: 'lancamento-produto-campo-checklist',
    title: 'Lançamento de produto no campo: checklist do produtor',
    description: 'Do roteiro de demonstração à logística técnica, sem gargalos.',
    date: '2024-01-05',
    tags: ['corporativo', 'lançamentos', 'checklist'],
    readTime: '6 min',
    image: '/blog/lancamento-produto.jpg',
    featured: false
  },
  {
    slug: 'confraternizacao-corporativa-ar-livre',
    title: 'Confraternização corporativa ao ar livre: 7 ideias práticas',
    description: 'Dinâmicas e ativações que engajam equipes e convidados.',
    date: '2024-01-01',
    tags: ['corporativo', 'confraternização', 'dinâmicas'],
    readTime: '5 min',
    image: '/blog/confraternizacao.jpg',
    featured: false
  },
  {
    slug: 'hospedagem-eventos-beneficios',
    title: 'Hospedagem para eventos: benefícios e boas práticas',
    description: 'Quem fica, descansa melhor — e vive tudo.',
    date: '2023-12-28',
    tags: ['hospedagem', 'eventos', 'benefícios'],
    readTime: '4 min',
    image: '/blog/hospedagem-eventos.jpg',
    featured: false
  }
]

const categories = [
  { name: 'Casamentos', slug: 'casamentos', count: 2 },
  { name: 'Corporativo', slug: 'corporativo', count: 2 },
  { name: 'Hospedagem', slug: 'hospedagem', count: 1 },
  { name: 'Dicas', slug: 'dicas', count: 1 },
  { name: 'Planejamento', slug: 'planejamento', count: 1 }
]

function BlogCard({ post }: { post: typeof initialPosts[0] }) {
  return (
    <article className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <Calendar className="h-16 w-16 text-primary" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-accent-medium mb-3">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('pt-BR')}
          </time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="text-xl font-serif font-semibold text-accent-light mb-3 hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <p className="text-accent-medium mb-4 leading-relaxed">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/20 text-primary"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Ler mais
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}

function FeaturedPost({ post }: { post: typeof initialPosts[0] }) {
  return (
    <article className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <Calendar className="h-24 w-24 text-primary" />
        </div>
        
        <div className="p-8">
          <div className="flex items-center space-x-2 text-sm text-accent-medium mb-4">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs ml-2">
              Destaque
            </span>
          </div>

          <h2 className="text-2xl font-serif font-bold text-accent-light mb-4 hover:text-primary transition-colors">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>

          <p className="text-accent-medium mb-6 leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/20 text-primary"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <Button
            href={`/blog/${post.slug}`}
            variant="primary"
            className="w-full lg:w-auto"
          >
            Ler artigo completo
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const featuredPost = initialPosts.find(post => post.featured)
  const regularPosts = initialPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-accent-light mb-6">
              Guia vivo para eventos no campo
            </h1>
            <p className="text-xl text-accent-medium max-w-3xl mx-auto leading-relaxed">
              Dicas, tendências e inspirações para casamentos, eventos corporativos 
              e celebrações especiais. Tudo que você precisa saber para planejar o evento perfeito.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 border-b border-dark-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-accent-medium font-medium">Filtrar por:</span>
            {categories.map((category) => (
              <Button
                key={category.slug}
                href={`/blog?categoria=${category.slug}`}
                variant="outline"
                size="sm"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Post em destaque */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-8">
                Em destaque
              </h2>
              <FeaturedPost post={featuredPost} />
            </div>
          )}

          {/* Grid de posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-accent-light mb-8">
              Últimos artigos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-dark-800 border border-dark-700 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-accent-light mb-4">
              Pronto para planejar seu evento?
            </h3>
            <p className="text-accent-medium mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e transforme suas ideias em realidade. 
              Nossa equipe está pronta para ajudar você a criar o evento dos seus sonhos.
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