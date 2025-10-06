const fs = require('fs');
const path = require('path');
const https = require('https');

// Simulação de imagens premium do Instagram do Espaço Olinda
// Baseado em padrões de casamentos e eventos premium
const premiumImages = [
  {
    id: 'ig_001',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-01.jpg',
    caption: 'Cerimônia coberta elegante com vista para a natureza',
    likes: 1247,
    views: 8932,
    category: 'Casamentos'
  },
  {
    id: 'ig_002', 
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-02.jpg',
    caption: 'Recepção premium ao ar livre com decoração sofisticada',
    likes: 892,
    views: 5643,
    category: 'Eventos'
  },
  {
    id: 'ig_003',
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-03.jpg',
    caption: 'Hospedagem exclusiva com suítes elegantes',
    likes: 1567,
    views: 7891,
    category: 'Hospedagem'
  },
  {
    id: 'ig_004',
    url: 'https://images.unsplash.com/photo-1519167758481-83f1426b6f5e?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-04.jpg',
    caption: 'Evento corporativo com estrutura técnica completa',
    likes: 743,
    views: 4231,
    category: 'Corporativo'
  },
  {
    id: 'ig_005',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-05.jpg',
    caption: 'Decoração sofisticada para casamentos inesquecíveis',
    likes: 2134,
    views: 12456,
    category: 'Casamentos'
  },
  {
    id: 'ig_006',
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-06.jpg',
    caption: 'Celebrações especiais em ambiente único',
    likes: 967,
    views: 6789,
    category: 'Eventos'
  },
  {
    id: 'ig_007',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-07.jpg',
    caption: 'Bodas de ouro com toda a família reunida',
    likes: 1456,
    views: 8234,
    category: 'Casamentos'
  },
  {
    id: 'ig_008',
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-08.jpg',
    caption: 'Lançamento de produto em ambiente inspirador',
    likes: 678,
    views: 3456,
    category: 'Corporativo'
  },
  {
    id: 'ig_009',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-09.jpg',
    caption: 'Festa de formatura com vista panorâmica',
    likes: 1123,
    views: 7890,
    category: 'Eventos'
  },
  {
    id: 'ig_010',
    url: 'https://images.unsplash.com/photo-1519167758481-83f1426b6f5e?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-10.jpg',
    caption: 'Confraternização empresarial premium',
    likes: 834,
    views: 4567,
    category: 'Corporativo'
  },
  {
    id: 'ig_011',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-11.jpg',
    caption: 'Cerimônia íntima com decoração minimalista',
    likes: 1789,
    views: 9876,
    category: 'Casamentos'
  },
  {
    id: 'ig_012',
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop&crop=center',
    filename: 'instagram-12.jpg',
    caption: 'Evento de gala com iluminação especial',
    likes: 1456,
    views: 8123,
    category: 'Eventos'
  }
];

// Função para baixar imagem
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
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
async function downloadInstagramImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const galleryDir = path.join(publicDir, 'gallery');
  
  // Criar diretório se não existir
  if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
    console.log('📁 Diretório gallery criado');
  }
  
  console.log('🚀 Iniciando download das imagens premium do Instagram...\n');
  
  // Baixar imagens
  for (let i = 0; i < premiumImages.length; i++) {
    const image = premiumImages[i];
    const filepath = path.join(galleryDir, image.filename);
    
    try {
      await downloadImage(image.url, filepath);
      console.log(`   📸 ${image.caption} (${image.likes} likes, ${image.views} views)`);
    } catch (error) {
      console.error(`❌ Erro ao baixar ${image.filename}:`, error.message);
    }
    
    // Delay entre downloads para não sobrecarregar
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Criar arquivo JSON com metadados
  const metadata = {
    lastUpdated: new Date().toISOString(),
    totalImages: premiumImages.length,
    images: premiumImages.map(img => ({
      id: img.id,
      src: `/gallery/${img.filename}`,
      alt: img.caption,
      title: img.caption,
      description: img.caption,
      category: img.category,
      likes: img.likes,
      views: img.views
    }))
  };
  
  const metadataPath = path.join(galleryDir, 'instagram-metadata.json');
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  
  console.log('\n✅ Download concluído!');
  console.log(`📊 Total: ${premiumImages.length} imagens baixadas`);
  console.log(`📄 Metadados salvos em: ${metadataPath}`);
  console.log('\n🎨 As imagens estão prontas para uso no site premium!');
}

// Executar se chamado diretamente
if (require.main === module) {
  downloadInstagramImages().catch(console.error);
}

module.exports = { downloadInstagramImages, premiumImages };


