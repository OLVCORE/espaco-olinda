import { ReactNode } from 'react'
import { CheckCircle } from 'lucide-react'

interface Feature {
  icon?: ReactNode
  title: string
  description: string
}

interface FeatureListProps {
  features: Feature[]
  title?: string
  subtitle?: string
  columns?: 1 | 2 | 3
  className?: string
}

export function FeatureList({ 
  features, 
  title,
  subtitle,
  columns = 2,
  className = ''
}: FeatureListProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-accent-medium max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {feature.icon || (
                  <CheckCircle className="h-6 w-6 text-primary" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent-light mb-2">
                  {feature.title}
                </h3>
                <p className="text-accent-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
