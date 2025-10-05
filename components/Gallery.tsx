'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ExternalLink, Instagram } from 'lucide-react'

interface GalleryImage {
  id: string
  caption: string
  image: string
  permalink: string
  timestamp: number
  is_video: boolean
  ratio?: number
}

interface GalleryProps {
  source?: 'ig' | 'local'
  maxItems?: number
  title?: string
  className?: string
}

export function Gallery({ 
  source = 'ig', 
  maxItems = 12, 
  title = 'Galeria',
  className = '' 
}: GalleryProps) {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (source === 'ig') {
      fetchInstagramImages()
    } else {
      // Fallback para imagens locais
      setImages(getLocalImages())
      setLoading(false)
    }
  }, [source])

  const fetchInstagramImages = async () => {
    try {
      const response = await fetch('/api/ingest-ig')
      const data = await response.json()
      
      if (data.ok && data.posts) {
        const filteredImages = data.posts
          .filter((img: GalleryImage) => !img.is_video)
          .filter((img: GalleryImage) => {
            // Filtrar posts com marcas de terceiros
            const caption = img.caption.toLowerCase()
            return !caption.includes('kelludy') && 
                   !caption.includes('welucci') &&
                   !caption.includes('parceiro') &&
                   !caption.includes('fornecedor')
          })
          .slice(0, maxItems)
        
        setImages(filteredImages)
      } else {
        setError(true)
        setImages(getLocalImages())
      }
    } catch (err) {
      console.error('Erro ao carregar galeria do Instagram:', err)
      setError(true)
      setImages(getLocalImages())
    } finally {
      setLoading(false)
    }
  }

  const getLocalImages = (): GalleryImage[] => {
    // Imagens locais como fallback
    return Array.from({ length: Math.min(maxItems, 8) }, (_, i) => ({
      id: `local-${i}`,
      caption: `Imagem ${i + 1} do Espaço Olinda`,
      image: `/gallery/placeholder-${(i % 4) + 1}.jpg`,
      permalink: '#',
      timestamp: Date.now() - i * 86400000,
      is_video: false,
    }))
  }

  if (loading) {
    return (
      <section className={`py-16 ${className}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-accent-light mb-12">
            {title}
          </h2>
          <div className="gallery-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square bg-dark-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
            {title}
          </h2>
          <p className="text-accent-medium max-w-2xl mx-auto">
            {source === 'ig' 
              ? 'Nossa galeria é alimentada por eventos recentes. As imagens falam por si.'
              : 'Momentos especiais capturados em nosso espaço.'
            }
          </p>
        </div>

        {error && source === 'ig' && (
          <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-center space-x-2 text-accent-medium">
              <Instagram className="h-5 w-5" />
              <span className="text-sm">
                Carregando imagens do Instagram... Exibindo galeria local.
              </span>
            </div>
          </div>
        )}

        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg bg-dark-800">
              <div className="aspect-square relative">
                <Image
                  src={image.image}
                  alt={image.caption}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay com caption e link */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-accent-light mb-2 line-clamp-2">
                    {image.caption}
                  </p>
                  {image.permalink !== '#' && (
                    <a
                      href={image.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      <Instagram className="h-4 w-4 mr-1" />
                      Ver no Instagram
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-12">
            <p className="text-accent-medium">
              Nenhuma imagem encontrada. Tente novamente mais tarde.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}