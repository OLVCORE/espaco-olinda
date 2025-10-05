import { Phone, Mail, MapPin, Clock } from 'lucide-react'

interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
}

interface ContactStripProps {
  contactInfo?: ContactInfo
  className?: string
}

export function ContactStrip({ 
  contactInfo = {
    phone: '(11) 99999-9999',
    email: 'contato@espacoolinda.com.br',
    address: 'Estrada Municipal, s/n - Santa Isabel/SP',
    hours: 'Seg-Sex: 9h às 18h | Sáb: 9h às 16h'
  },
  className = ''
}: ContactStripProps) {
  return (
    <section className={`bg-dark-800 border-y border-dark-700 py-8 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-accent-medium">Telefone</p>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-accent-light hover:text-primary transition-colors font-medium"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-accent-medium">E-mail</p>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-accent-light hover:text-primary transition-colors font-medium"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-accent-medium">Localização</p>
              <p className="text-accent-light font-medium">
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-accent-medium">Horário</p>
              <p className="text-accent-light font-medium">
                {contactInfo.hours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}