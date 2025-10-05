#!/usr/bin/env node

/**
 * Script para ingerir posts do Instagram
 * Executa: node scripts/ingest-instagram.js
 */

const fs = require('fs')
const path = require('path')

async function ingestInstagram() {
  try {
    console.log('🔄 Iniciando ingestão do Instagram...')
    
    // URL da API route local
    const apiUrl = 'http://localhost:3000/api/ingest-ig'
    
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    if (data.ok) {
      console.log(`✅ Sucesso! ${data.count} posts encontrados`)
      
      // Criar diretório se não existir
      const contentDir = path.join(process.cwd(), 'content', 'instagram')
      if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true })
      }
      
      // Salvar feed
      const feedPath = path.join(contentDir, 'feed.json')
      fs.writeFileSync(feedPath, JSON.stringify(data, null, 2))
      
      console.log(`📁 Feed salvo em: ${feedPath}`)
      
      // Log dos posts
      if (data.posts && data.posts.length > 0) {
        console.log('\n📸 Posts encontrados:')
        data.posts.forEach((post, index) => {
          console.log(`${index + 1}. ${post.caption.substring(0, 50)}...`)
        })
      }
      
    } else {
      console.error('❌ Erro na ingestão:', data.error)
      
      if (data.fallback) {
        console.log('🔄 Usando posts de fallback...')
        
        // Salvar fallback
        const contentDir = path.join(process.cwd(), 'content', 'instagram')
        if (!fs.existsSync(contentDir)) {
          fs.mkdirSync(contentDir, { recursive: true })
        }
        
        const feedPath = path.join(contentDir, 'feed.json')
        fs.writeFileSync(feedPath, JSON.stringify(data, null, 2))
        
        console.log(`📁 Feed de fallback salvo em: ${feedPath}`)
      }
    }
    
  } catch (error) {
    console.error('❌ Erro ao executar ingestão:', error.message)
    
    // Criar feed de fallback em caso de erro
    const fallbackData = {
      ok: false,
      error: error.message,
      posts: Array.from({ length: 8 }, (_, i) => ({
        id: `fallback-${i}`,
        caption: `Imagem ${i + 1} do Espaço Olinda`,
        image: `/gallery/placeholder-${(i % 4) + 1}.jpg`,
        permalink: '#',
        timestamp: Date.now() - i * 86400000,
        is_video: false,
        ratio: 1.0
      })),
      count: 8,
      username: 'espacoolinda',
      fallback: true
    }
    
    const contentDir = path.join(process.cwd(), 'content', 'instagram')
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true })
    }
    
    const feedPath = path.join(contentDir, 'feed.json')
    fs.writeFileSync(feedPath, JSON.stringify(fallbackData, null, 2))
    
    console.log(`📁 Feed de fallback criado em: ${feedPath}`)
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  ingestInstagram()
}

module.exports = { ingestInstagram }
