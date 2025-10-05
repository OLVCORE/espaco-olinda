import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Espaço Olinda Blog Bot 1.0'
  }
})

interface BlogPost {
  title: string
  description: string
  link: string
  pubDate: string
  source: string
  sourceUrl: string
  content?: string
  summary?: string
  tags: string[]
}

// Função para filtrar posts por relevância
function isRelevantPost(post: BlogPost): boolean {
  const relevantKeywords = [
    'casamento', 'wedding', 'evento', 'lançamento', 'corporativo', 
    'hospedagem', 'campo', 'venue', 'espaço', 'celebração',
    'fazenda', 'interior', 'santa isabel', 'sp', 'são paulo',
    'treinamento', 'workshop', 'convenção', 'confraternização',
    'aniversário', 'formatura', 'debutante', 'boda'
  ]

  const text = `${post.title} ${post.description}`.toLowerCase()
  
  return relevantKeywords.some(keyword => text.includes(keyword))
}

// Função para gerar sumário (heurística simples)
function generateSummary(post: BlogPost): string {
  // Extrair as primeiras frases da descrição
  const sentences = post.description.split(/[.!?]+/).filter(s => s.trim().length > 20)
  
  if (sentences.length >= 2) {
    return sentences.slice(0, 2).join('. ') + '.'
  }
  
  // Se não há frases suficientes, usar a descrição truncada
  return post.description.length > 200 
    ? post.description.substring(0, 200) + '...'
    : post.description
}

// Função para gerar tags baseadas no conteúdo
function generateTags(post: BlogPost): string[] {
  const tags: string[] = []
  const text = `${post.title} ${post.description}`.toLowerCase()

  if (text.includes('casamento') || text.includes('wedding')) {
    tags.push('casamentos')
  }
  if (text.includes('corporativo') || text.includes('empresa') || text.includes('treinamento')) {
    tags.push('corporativo')
  }
  if (text.includes('hospedagem') || text.includes('hotel') || text.includes('acomodação')) {
    tags.push('hospedagem')
  }
  if (text.includes('lançamento') || text.includes('produto')) {
    tags.push('lançamentos')
  }
  if (text.includes('campo') || text.includes('fazenda') || text.includes('interior')) {
    tags.push('eventos no campo')
  }

  return tags.length > 0 ? tags : ['eventos']
}

// Função para salvar post como MDX
async function savePostAsMDX(post: BlogPost): Promise<string> {
  const date = new Date(post.pubDate)
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50)
  
  const filename = `auto-${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}-${slug}.mdx`
  
  const frontmatter = `---
title: "${post.title}"
description: "${post.summary || post.description}"
date: "${date.toISOString()}"
tags: [${post.tags.map(tag => `"${tag}"`).join(', ')}]
sourceName: "${post.source}"
sourceUrl: "${post.link}"
auto: true
---

${post.summary || post.description}

## Sobre este conteúdo

Este conteúdo foi automaticamente importado de [${post.source}](${post.sourceUrl}) e resumido para sua conveniência.

### Links relacionados

- [Casamentos no Espaço Olinda](/casamentos)
- [Eventos Corporativos](/corporativo)
- [Hospedagem](/hospedagem)
- [Contato](/contato)

---

*Fonte: [${post.title}](${post.link}) - ${post.source}*
`

  // Em um ambiente real, você salvaria o arquivo aqui
  // Por enquanto, apenas retornamos o conteúdo
  console.log(`Post salvo: ${filename}`)
  
  return filename
}

export async function GET() {
  try {
    const feeds = process.env.BLOG_FEEDS?.split(',') || []
    
    if (feeds.length === 0) {
      return NextResponse.json({
        ok: false,
        error: 'Nenhuma feed RSS configurada',
        posts: []
      })
    }

    const allPosts: BlogPost[] = []
    const processedFeeds: string[] = []

    // Processar cada feed
    for (const feedUrl of feeds) {
      try {
        console.log(`Processando feed: ${feedUrl}`)
        
        const feed = await parser.parseURL(feedUrl.trim())
        const sourceName = feed.title || new URL(feedUrl).hostname
        
        const posts = feed.items
          .map(item => ({
            title: item.title || 'Sem título',
            description: item.contentSnippet || item.content || 'Sem descrição',
            link: item.link || '',
            pubDate: item.pubDate || new Date().toISOString(),
            source: sourceName,
            sourceUrl: feedUrl,
            content: item.content,
            tags: [] as string[]
          }))
          .filter(isRelevantPost)
          .map(post => ({
            ...post,
            summary: generateSummary(post),
            tags: generateTags(post)
          }))
          .slice(0, 5) // Limitar a 5 posts por feed

        allPosts.push(...posts)
        processedFeeds.push(feedUrl)
        
        console.log(`Feed ${sourceName}: ${posts.length} posts relevantes encontrados`)
        
      } catch (feedError) {
        console.error(`Erro ao processar feed ${feedUrl}:`, feedError)
      }
    }

    // Ordenar por data (mais recentes primeiro)
    allPosts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())

    // Limitar total de posts
    const limitedPosts = allPosts.slice(0, 20)

    // Salvar posts como MDX (simulado)
    const savedPosts = []
    for (const post of limitedPosts) {
      try {
        const filename = await savePostAsMDX(post)
        savedPosts.push({
          ...post,
          filename
        })
      } catch (saveError) {
        console.error(`Erro ao salvar post ${post.title}:`, saveError)
      }
    }

    return NextResponse.json({
      ok: true,
      posts: savedPosts,
      count: savedPosts.length,
      processedFeeds: processedFeeds.length,
      totalFeeds: feeds.length,
      message: `Processados ${savedPosts.length} posts de ${processedFeeds.length} feeds`
    })

  } catch (error) {
    console.error('Erro ao processar feeds do blog:', error)
    
    return NextResponse.json({
      ok: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      posts: [],
      count: 0
    }, { status: 500 })
  }
}