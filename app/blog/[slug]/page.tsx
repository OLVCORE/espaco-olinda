import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { generateBlogPostMetadata } from '@/lib/seo'
import { Calendar, Tag, ArrowLeft, Share2, Clock } from 'lucide-react'

// Posts do blog (simulados - em produção viriam de um CMS ou banco de dados)
const blogPosts = {
  'como-escolher-espaco-casamento-interior-sp': {
    title: 'Como escolher um espaço de casamento no interior de SP',
    description: 'O que avaliar em acesso, clima, cerimônia, logística e hospedagem para um dia sem imprevistos.',
    date: '2024-01-15',
    tags: ['casamentos', 'dicas', 'planejamento'],
    readTime: '5 min',
    content: `
# Como escolher um espaço de casamento no interior de SP

Planejar um casamento no interior de São Paulo pode ser uma experiência maravilhosa, mas exige atenção a detalhes específicos que não existem na cidade. Aqui estão os pontos essenciais para considerar:

## 1. Acesso e Localização

O primeiro passo é avaliar como os convidados chegarão ao local. Considere:

- **Distância da cidade**: Idealmente entre 1-2 horas de São Paulo
- **Qualidade das estradas**: Vias pavimentadas são essenciais
- **Sinalização**: O local deve ser fácil de encontrar
- **Estacionamento**: Capacidade para todos os convidados

## 2. Proteção contra o Clima

No interior, o clima pode ser imprevisível. Certifique-se de que o espaço oferece:

- **Cerimônia coberta**: Fundamental para evitar imprevistos
- **Áreas internas alternativas**: Para recepção em caso de chuva
- **Aquecimento/refrigeração**: Conforto em qualquer estação

## 3. Infraestrutura Técnica

Verifique se o local possui:

- **Sistema de som adequado**: Para cerimônia e recepção
- **Iluminação profissional**: Especialmente para eventos noturnos
- **Pontos de energia**: Suficientes para todos os equipamentos
- **Internet**: Para transmissões ao vivo ou música online

## 4. Hospedagem e Experiência

Para um wedding weekend completo, considere:

- **Quartos no local**: Para família e amigos próximos
- **Suíte dos noivos**: Com vista especial
- **Áreas de convivência**: Para momentos de descontração
- **Atividades extras**: Caminhadas, jogos, etc.

## 5. Logística e Serviços

Avalie a disponibilidade de:

- **Cozinha industrial**: Para preparação de alimentos
- **Equipe de apoio**: Para organização e limpeza
- **Fornecedores locais**: Para facilitar a logística
- **Áreas técnicas**: Para montagem e desmontagem

## Checklist Final

Antes de fechar o contrato, confirme:

- [ ] Visita técnica realizada
- [ ] Teste de som e iluminação
- [ ] Política de cancelamento clara
- [ ] Plano B para mudanças climáticas
- [ ] Cronograma detalhado do evento
- [ ] Lista de fornecedores recomendados

## Conclusão

Escolher o espaço certo é fundamental para o sucesso do seu casamento. No Espaço Olinda, oferecemos todos esses elementos em um só lugar, com a tranquilidade do campo e a infraestrutura de um centro de eventos de primeira linha.

Quer conhecer pessoalmente? [Agende uma visita](/contato) e descubra por que somos a escolha certa para seu casamento no interior.
    `,
    author: 'Espaço Olinda',
    image: '/blog/casamento-interior-sp.jpg'
  },
  'wedding-weekend-vale-pena': {
    title: 'Wedding weekend: vale a pena?',
    description: 'Por que estender a experiência muda a energia do evento — e como planejar.',
    date: '2024-01-10',
    tags: ['casamentos', 'wedding weekend', 'hospedagem'],
    readTime: '4 min',
    content: `
# Wedding weekend: vale a pena?

O conceito de wedding weekend tem ganhado cada vez mais popularidade entre casais que querem estender a celebração além do dia principal. Mas será que vale a pena?

## O que é um Wedding Weekend?

Um wedding weekend é uma celebração que se estende por dois ou três dias, incluindo:

- **Sexta-feira**: Chegada dos convidados, jantar de boas-vindas
- **Sábado**: Dia principal do casamento
- **Domingo**: Brunch de despedida, atividades relaxantes

## Vantagens do Wedding Weekend

### 1. Mais Tempo Juntos
- Convidados podem chegar com antecedência
- Mais momentos de convivência e descontração
- Menos pressa e stress no dia principal

### 2. Experiência Completa
- Prova do menu com os noivos
- Ensaio da cerimônia
- Atividades recreativas
- Momentos únicos de conexão

### 3. Justificativa para Viagem
- Convidados que vêm de longe têm mais motivos para vir
- Experiência mais completa para quem se desloca
- Melhor aproveitamento do tempo e investimento

## Como Planejar um Wedding Weekend

### Estrutura Sugerida

**Sexta-feira (Chegada)**
- Check-in dos hóspedes
- Jantar de boas-vindas informal
- Atividades de integração

**Sábado (Dia Principal)**
- Cerimônia
- Recepção
- Festa até tarde

**Domingo (Despedida)**
- Brunch coletivo
- Atividades relaxantes
- Check-out

### Orçamento

Um wedding weekend pode custar 20-30% a mais que um evento de um dia, mas oferece:

- Mais valor agregado
- Experiência diferenciada
- Memórias mais ricas
- Justificativa para investimento maior

## Quando Vale a Pena?

O wedding weekend é ideal quando:

- **Maioria dos convidados vem de longe**
- **Orçamento permite investimento adicional**
- **Local oferece hospedagem no próprio espaço**
- **Casal valoriza experiências imersivas**

## Conclusão

Para casais que querem uma experiência única e memorável, o wedding weekend é uma excelente opção. No Espaço Olinda, oferecemos toda a infraestrutura necessária para um wedding weekend perfeito.

Quer saber mais? [Entre em contato](/contato) e descubra como podemos tornar seu wedding weekend inesquecível.
    `,
    author: 'Espaço Olinda',
    image: '/blog/wedding-weekend.jpg'
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post solicitado não foi encontrado.',
    }
  }

  return generateBlogPostMetadata({
    title: post.title,
    description: post.description,
    date: post.date,
    slug: params.slug,
    tags: post.tags,
    author: post.author,
    image: post.image,
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const relatedPosts = Object.entries(blogPosts)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3)
    .map(([slug, postData]) => ({ slug, ...postData }))

  return (
    <div className="min-h-screen pt-20">
      {/* Hero do Post */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              href="/blog"
              variant="outline"
              size="sm"
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao blog
            </Button>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 text-sm text-accent-medium mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </time>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <span>Por {post.author}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-accent-light mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-accent-medium mb-8 leading-relaxed">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
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
          </div>
        </div>
      </section>

      {/* Conteúdo do Post */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert prose-lg max-w-none">
            <div 
              className="whitespace-pre-wrap leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-serif font-bold text-accent-light mb-6 mt-12">$1</h1>')
                  .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-serif font-bold text-accent-light mb-4 mt-8">$1</h2>')
                  .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-accent-light mb-3 mt-6">$1</h3>')
                  .replace(/^- (.*$)/gim, '<li class="flex items-start mb-2"><span class="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>$1</li>')
                  .replace(/^\[ \] (.*$)/gim, '<li class="flex items-start mb-2"><input type="checkbox" class="mr-3 mt-1" disabled> $1</li>')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-primary/80 underline">$1</a>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-accent-light">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^(?!<[h|l|i|a|s|e])/gm, '<p class="mb-4">')
                  .replace(/(<[^>]*>)$/gm, '$1</p>')
              }}
            />
          </article>

          {/* Compartilhar */}
          <div className="mt-12 pt-8 border-t border-dark-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-accent-light mb-2">
                  Gostou do artigo?
                </h3>
                <p className="text-accent-medium">
                  Compartilhe com quem pode se interessar!
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.description,
                        url: window.location.href,
                      })
                    } else {
                      navigator.clipboard.writeText(window.location.href)
                      alert('Link copiado para a área de transferência!')
                    }
                  }}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-dark-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-accent-light mb-8 text-center">
              Artigos relacionados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-dark-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-accent-light mb-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-accent-medium mb-4">
                    {relatedPost.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-accent-medium">
                      {new Date(relatedPost.date).toLocaleDateString('pt-BR')}
                    </time>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-dark-800 border border-dark-700 rounded-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-accent-light mb-4">
              Pronto para planejar seu evento?
            </h3>
            <p className="text-accent-medium mb-6">
              Entre em contato conosco e transforme suas ideias em realidade.
            </p>
            <Button
              href="/contato"
              variant="primary"
              size="lg"
            >
              Solicitar proposta
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}