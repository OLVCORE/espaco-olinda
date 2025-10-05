#!/usr/bin/env node

/**
 * Script para ingerir posts do blog via RSS
 * Executa: node scripts/ingest-blog.js
 */

const fs = require('fs')
const path = require('path')

async function ingestBlog() {
  try {
    console.log('🔄 Iniciando ingestão do blog...')
    
    // URL da API route local
    const apiUrl = 'http://localhost:3000/api/ingest-blog'
    
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    if (data.ok) {
      console.log(`✅ Sucesso! ${data.count} posts processados de ${data.processedFeeds} feeds`)
      
      // Criar diretório se não existir
      const contentDir = path.join(process.cwd(), 'content', 'blog')
      if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true })
      }
      
      // Salvar cada post como MDX
      for (const post of data.posts) {
        const filename = post.filename || `auto-${Date.now()}-${post.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.mdx`
        const filePath = path.join(contentDir, filename)
        
        const mdxContent = `---
title: "${post.title}"
description: "${post.summary || post.description}"
date: "${post.pubDate}"
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

        fs.writeFileSync(filePath, mdxContent)
        console.log(`📝 Post salvo: ${filename}`)
      }
      
      // Salvar log da ingestão
      const logData = {
        timestamp: new Date().toISOString(),
        postsProcessed: data.count,
        feedsProcessed: data.processedFeeds,
        totalFeeds: data.totalFeeds,
        message: data.message
      }
      
      const logPath = path.join(contentDir, 'ingestion-log.json')
      fs.writeFileSync(logPath, JSON.stringify(logData, null, 2))
      
      console.log(`📊 Log salvo em: ${logPath}`)
      
      // Log dos posts
      if (data.posts && data.posts.length > 0) {
        console.log('\n📰 Posts processados:')
        data.posts.forEach((post, index) => {
          console.log(`${index + 1}. ${post.title}`)
          console.log(`   Fonte: ${post.source}`)
          console.log(`   Tags: ${post.tags.join(', ')}`)
        })
      }
      
    } else {
      console.error('❌ Erro na ingestão:', data.error)
    }
    
  } catch (error) {
    console.error('❌ Erro ao executar ingestão do blog:', error.message)
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  ingestBlog()
}

module.exports = { ingestBlog }
