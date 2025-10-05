import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Início', href: '/' },
    { name: 'Casamentos', href: '/casamentos' },
    { name: 'Corporativo', href: '/corporativo' },
    { name: 'Hospedagem', href: '/hospedagem' },
    { name: 'Cases', href: '/cases' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
  ],
  legal: [
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://instagram.com/espacoolinda',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/espacoolinda',
      icon: Facebook,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">EO</span>
                </div>
                <span className="font-serif text-xl font-semibold text-accent-light">
                  Espaço Olinda
                </span>
              </div>
              <p className="text-accent-medium text-sm leading-relaxed">
                Receber bem é a nossa natureza. Um espaço de campo para celebrar momentos especiais com exclusividade e elegância.
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-accent-light font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-accent-medium">
                    <p>Estrada Municipal, s/n</p>
                    <p>Santa Isabel - SP</p>
                    <p>CEP: 07500-000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+5511999999999" 
                    className="text-sm text-accent-medium hover:text-primary transition-colors"
                  >
                    (11) 99999-9999
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:contato@espacoolinda.com.br" 
                    className="text-sm text-accent-medium hover:text-primary transition-colors"
                  >
                    contato@espacoolinda.com.br
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-accent-medium">
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 16h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h3 className="text-accent-light font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-accent-medium hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes sociais */}
            <div>
              <h3 className="text-accent-light font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-medium hover:text-primary transition-colors"
                      aria-label={item.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
              
              <div className="mt-6">
                <h4 className="text-accent-light font-semibold mb-2">CNPJ</h4>
                <p className="text-sm text-accent-medium">00.000.000/0001-00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-dark-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-accent-medium">
                © {new Date().getFullYear()} Espaço Olinda. Todos os direitos reservados.
              </p>
              <div className="flex space-x-4">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-accent-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-sm text-accent-medium">
              Desenvolvido com ❤️ para celebrar momentos especiais
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
