import { NextResponse } from 'next/server'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://espacoolinda.com.br'

// Páginas estáticas
const staticPages = [
  '',
  '/casamentos',
  '/corporativo',
  '/hospedagem',
  '/sobre',
  '/contato',
  '/blog',
  '/cases',
  '/privacidade',
  '/termos'
]

// Função para gerar sitemap XML
function generateSitemap(pages: string[]): string {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => {
  const url = `${baseUrl}${page}`
  const priority = page === '' ? '1.0' : page === '/casamentos' || page === '/corporativo' ? '0.9' : '0.8'
  const changefreq = page === '' ? 'weekly' : 'monthly'
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}).join('\n')}
</urlset>`

  return sitemap
}

export async function GET() {
  try {
    // Aqui você poderia buscar posts do blog e cases dinamicamente
    // Por enquanto, usamos apenas as páginas estáticas
    
    const sitemap = generateSitemap(staticPages)
    
    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    })
    
  } catch (error) {
    console.error('Erro ao gerar sitemap:', error)
    
    return new NextResponse('Erro ao gerar sitemap', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain'
      }
    })
  }
}
