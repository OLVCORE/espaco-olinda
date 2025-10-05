import { Star, Quote } from 'lucide-react'

interface TestimonialData {
  id: string
  name: string
  event: string
  date: string
  rating: number
  text: string
  image?: string
}

interface TestimonialProps {
  testimonial: TestimonialData
  className?: string
}

interface TestimonialsGridProps {
  testimonials: TestimonialData[]
  title?: string
  subtitle?: string
  className?: string
}

export function Testimonial({ testimonial, className = '' }: TestimonialProps) {
  return (
    <div className={`bg-dark-800 border border-dark-700 rounded-lg p-6 relative ${className}`}>
      <Quote className="h-8 w-8 text-primary/30 absolute top-4 left-4" />
      
      {/* Rating */}
      <div className="flex items-center mb-4 pt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? 'text-primary fill-current'
                : 'text-dark-600'
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <blockquote className="text-accent-medium mb-6 leading-relaxed">
        "{testimonial.text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-3">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-semibold text-lg">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <div className="font-medium text-accent-light">{testimonial.name}</div>
          <div className="text-sm text-accent-medium">
            {testimonial.event} • {testimonial.date}
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsGrid({ 
  testimonials, 
  title = 'O que nossos clientes dizem',
  subtitle,
  className = ''
}: TestimonialsGridProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-accent-medium max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
