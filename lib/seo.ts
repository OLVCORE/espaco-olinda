import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateMetadata({
  title = 'Espaço Olinda | Eventos no campo, perto da cidade',
  description = 'Cerimônia coberta, salões versáteis e hospedagem on-site. Casamentos e eventos corporativos com exclusividade no interior de SP.',
  keywords = ['eventos', 'casamento', 'corporativo', 'campo', 'Santa Isabel', 'SP'],
  image = '/og-image.jpg',
  url = '/',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Espaço Olinda',
  section,
  tags = []
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://espacoolinda.com.br'
  const fullUrl = `${siteUrl}${url}`
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`

  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: 'Espaço Olinda',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      locale: 'pt_BR',
      url: fullUrl,
      title,
      description,
      siteName: 'Espaço Olinda',
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  // Adicionar campos específicos para artigos
  if (type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [author],
      section,
      tags,
    }
  }

  return metadata
}

// Metadados específicos para cada página
export const homeMetadata = generateMetadata({
  title: 'Espaço Olinda | Eventos no campo, perto da cidade',
  description: 'Cerimônia coberta, salões versáteis e hospedagem on-site. Casamentos e eventos corporativos com exclusividade no interior de SP.',
  keywords: ['eventos', 'casamento', 'corporativo', 'campo', 'Santa Isabel', 'SP', 'hospedagem', 'cerimônia coberta'],
  url: '/',
})

export const casamentosMetadata = generateMetadata({
  title: 'Casamentos | Cerimônia coberta & wedding weekend',
  description: 'Um lugar para dizer "sim" sem imprevistos. Espaço, serviços e hospedagem em um só destino. Cerimônia coberta e wedding weekend completo.',
  keywords: ['casamento', 'cerimônia coberta', 'wedding weekend', 'casamento no campo', 'Santa Isabel', 'SP'],
  url: '/casamentos',
})

export const corporativoMetadata = generateMetadata({
  title: 'Corporativo | Lançamentos, convenções & treinamentos',
  description: 'Mais foco e criatividade no campo. Estrutura técnica, salões moduláveis e logística fluida para eventos corporativos.',
  keywords: ['evento corporativo', 'lançamento', 'convenção', 'treinamento', 'workshop', 'campo', 'Santa Isabel'],
  url: '/corporativo',
})

export const hospedagemMetadata = generateMetadata({
  title: 'Hospedagem | Quartos & suítes no local',
  description: 'Experiência completa com quem você ama ou com o seu time. Hospedagem para até 40 pessoas com conforto e proximidade total do evento.',
  keywords: ['hospedagem', 'quartos', 'suítes', 'wedding weekend', 'evento', 'Santa Isabel'],
  url: '/hospedagem',
})

export const sobreMetadata = generateMetadata({
  title: 'Sobre | Nosso propósito',
  description: 'Receber bem é a nossa natureza — e a nossa especialidade. Conheça nossa história, missão e valores no Espaço Olinda.',
  keywords: ['sobre', 'história', 'missão', 'valores', 'equipe', 'Espaço Olinda', 'Santa Isabel'],
  url: '/sobre',
})

export const contatoMetadata = generateMetadata({
  title: 'Contato | Fale conosco',
  description: 'Propostas, visitas e reservas. Estamos prontos para atender e transformar seu evento em uma experiência inesquecível.',
  keywords: ['contato', 'proposta', 'visita', 'reserva', 'evento', 'Espaço Olinda'],
  url: '/contato',
})

export const blogMetadata = generateMetadata({
  title: 'Blog | Guia vivo para eventos no campo',
  description: 'Dicas, tendências e inspirações para casamentos, eventos corporativos e celebrações especiais no campo.',
  keywords: ['blog', 'dicas', 'tendências', 'inspiração', 'eventos', 'casamento', 'corporativo'],
  url: '/blog',
})

export const casesMetadata = generateMetadata({
  title: 'Cases | Eventos reais',
  description: 'Resultados que falam por si: antes, durante e depois. Conheça alguns dos eventos realizados no Espaço Olinda.',
  keywords: ['cases', 'eventos reais', 'resultados', 'exemplos', 'Espaço Olinda'],
  url: '/cases',
})

// Função para gerar metadados de posts do blog
export function generateBlogPostMetadata(post: {
  title: string
  description: string
  date: string
  slug: string
  tags?: string[]
  author?: string
  image?: string
}) {
  return generateMetadata({
    title: `${post.title} | Blog Espaço Olinda`,
    description: post.description,
    keywords: post.tags || [],
    image: post.image || '/blog/default.jpg',
    url: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.date,
    author: post.author || 'Espaço Olinda',
    section: 'Blog',
    tags: post.tags || [],
  })
}

// Função para gerar metadados de cases
export function generateCaseMetadata(caseData: {
  title: string
  description: string
  date: string
  slug: string
  tags?: string[]
  image?: string
}) {
  return generateMetadata({
    title: `${caseData.title} | Cases Espaço Olinda`,
    description: caseData.description,
    keywords: caseData.tags || [],
    image: caseData.image || '/cases/default.jpg',
    url: `/cases/${caseData.slug}`,
    type: 'article',
    publishedTime: caseData.date,
    modifiedTime: caseData.date,
    author: 'Espaço Olinda',
    section: 'Cases',
    tags: caseData.tags || [],
  })
}
