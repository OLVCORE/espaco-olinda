import { Button } from '@/components/ui/Button'
import { Calendar, MessageCircle } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  proofPoints?: string[]
  backgroundImage?: string
  className?: string
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  proofPoints = [],
  backgroundImage,
  className = '',
}: HeroProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700" />
        )}
        <div className="absolute inset-0 bg-dark-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-accent-light mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-accent-medium mb-8 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Button
              href={primaryCta.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Calendar className="h-5 w-5 mr-2" />
              {primaryCta.text}
            </Button>
            
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {secondaryCta.text}
              </Button>
            )}
          </div>

          {/* Proof Points */}
          {proofPoints.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-accent-medium">
              {proofPoints.map((point, index) => (
                <span key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  {point}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-accent-medium rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-medium rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
