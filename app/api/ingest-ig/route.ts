import { NextResponse } from 'next/server'

export async function GET() {
  const username = process.env.IG_USERNAME || 'espacoolinda'
  
  try {
    // URL da API pública do Instagram (não oficial, pode mudar)
    const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      },
    })

    if (!response.ok) {
      throw new Error(`Instagram API responded with status: ${response.status}`)
    }

    const data = await response.json()
    const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges || []
    
    const posts = edges
      .map((edge: any) => {
        const node = edge.node
        return {
          id: node.id,
          caption: node.edge_media_to_caption?.edges?.[0]?.node?.text || '',
          image: node.display_url,
          permalink: `https://www.instagram.com/p/${node.shortcode}/`,
          timestamp: node.taken_at_timestamp,
          is_video: node.is_video,
          dimensions: node.dimensions,
          ratio: node.dimensions ? (node.dimensions.width / node.dimensions.height) : null
        }
      })
      // Filtrar posts com marcas de terceiros
      .filter((post: any) => {
        const caption = post.caption.toLowerCase()
        return !caption.includes('kelludy') && 
               !caption.includes('welucci') &&
               !caption.includes('parceiro') &&
               !caption.includes('fornecedor') &&
               !caption.includes('sponsor') &&
               !caption.includes('parceria')
      })
      // Filtrar vídeos para performance
      .filter((post: any) => !post.is_video)
      // Filtrar por aspect ratio (evitar imagens muito alongadas)
      .filter((post: any) => {
        if (!post.ratio) return true
        return post.ratio > 0.5 && post.ratio < 2.0
      })
      // Limitar quantidade
      .slice(0, 20)

    return NextResponse.json({ 
      ok: true, 
      posts,
      count: posts.length,
      username 
    })

  } catch (error) {
    console.error('Erro ao buscar posts do Instagram:', error)
    
    // Retornar posts de fallback em caso de erro
    const fallbackPosts = Array.from({ length: 8 }, (_, i) => ({
      id: `fallback-${i}`,
      caption: `Imagem ${i + 1} do Espaço Olinda`,
      image: `/gallery/placeholder-${(i % 4) + 1}.jpg`,
      permalink: '#',
      timestamp: Date.now() - i * 86400000,
      is_video: false,
      ratio: 1.0
    }))

    return NextResponse.json({ 
      ok: false, 
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      posts: fallbackPosts,
      count: fallbackPosts.length,
      username,
      fallback: true
    }, { status: 500 })
  }
}