const fs = require('fs');
const path = require('path');
const https = require('https');

// Função para buscar posts reais do Instagram do Espaço Olinda
async function fetchInstagramPosts() {
  const username = 'espacoolinda';
  const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`;
  
  try {
    console.log('🔍 Buscando posts reais do Instagram @espacoolinda...');
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Instagram API responded with status: ${response.status}`);
    }

    const data = await response.json();
    const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges || [];
    
    console.log(`📊 Encontrados ${edges.length} posts no Instagram`);
    
    // Processar posts e ordenar por engajamento
    const posts = edges.map((edge) => {
      const node = edge.node;
      return {
        id: node.id,
        shortcode: node.shortcode,
        caption: node.edge_media_to_caption?.edges?.[0]?.node?.text || '',
        imageUrl: node.display_url,
        thumbnailUrl: node.thumbnail_src,
        isVideo: node.is_video,
        timestamp: node.taken_at_timestamp,
        likes: node.edge_liked_by?.count || 0,
        comments: node.edge_media_to_comment?.count || 0,
        dimensions: node.dimensions,
        permalink: `https://www.instagram.com/p/${node.shortcode}/`,
        // Calcular engajamento (likes + comments)
        engagement: (node.edge_liked_by?.count || 0) + (node.edge_media_to_comment?.count || 0)
      };
    });

    // Filtrar apenas imagens (não vídeos) e ordenar por engajamento
    const imagePosts = posts
      .filter(post => !post.isVideo)
      .filter(post => post.caption && !/kelludy|welucci|parceiro|fornecedor/i.test(post.caption))
      .sort((a, b) => b.engagement - a.engagement)
      .slice(0, 20); // Top 20 posts mais engajados

    console.log(`✅ ${imagePosts.length} posts de imagem filtrados e ordenados por engajamento`);
    
    return imagePosts;
    
  } catch (error) {
    console.error('❌ Erro ao buscar posts do Instagram:', error);
    return [];
  }
}

// Função para baixar imagem
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Baixada: ${path.basename(filepath)}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Remove arquivo parcial
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Função principal
async function downloadRealInstagramImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const galleryDir = path.join(publicDir, 'gallery');
  
  // Criar diretório se não existir
  if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
    console.log('📁 Diretório gallery criado');
  }
  
  console.log('🚀 Iniciando download das imagens REAIS do Instagram @espacoolinda...\n');
  
  // Buscar posts reais
  const posts = await fetchInstagramPosts();
  
  if (posts.length === 0) {
    console.log('⚠️ Nenhum post encontrado. Usando fallback...');
    return;
  }
  
  // Baixar as melhores imagens
  const metadata = {
    lastUpdated: new Date().toISOString(),
    source: 'instagram_espacoolinda',
    totalImages: posts.length,
    images: []
  };
  
  for (let i = 0; i < Math.min(posts.length, 12); i++) {
    const post = posts[i];
    const filename = `instagram-real-${(i + 1).toString().padStart(2, '0')}.jpg`;
    const filepath = path.join(galleryDir, filename);
    
    try {
      await downloadImage(post.imageUrl, filepath);
      
      // Extrair título da caption
      const title = post.caption.split('\n')[0].substring(0, 50) || `Post ${i + 1}`;
      
      console.log(`   📸 ${title} (${post.likes} likes, ${post.comments} comentários)`);
      
      metadata.images.push({
        id: post.id,
        src: `/gallery/${filename}`,
        alt: title,
        title: title,
        description: post.caption.substring(0, 200),
        category: 'Instagram Real',
        likes: post.likes,
        comments: post.comments,
        engagement: post.engagement,
        permalink: post.permalink,
        timestamp: post.timestamp
      });
      
    } catch (error) {
      console.error(`❌ Erro ao baixar ${filename}:`, error.message);
    }
    
    // Delay entre downloads para não sobrecarregar
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Salvar metadados
  const metadataPath = path.join(galleryDir, 'instagram-real-metadata.json');
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  
  console.log('\n✅ Download das imagens REAIS concluído!');
  console.log(`📊 Total: ${metadata.images.length} imagens baixadas do Instagram real`);
  console.log(`📄 Metadados salvos em: ${metadataPath}`);
  console.log('\n🎨 As imagens REAIS do Espaço Olinda estão prontas para uso!');
}

// Executar se chamado diretamente
if (require.main === module) {
  downloadRealInstagramImages().catch(console.error);
}

module.exports = { downloadRealInstagramImages, fetchInstagramPosts };

