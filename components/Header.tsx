'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Calendar } from 'lucide-react'
import { clsx } from 'clsx'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Casamentos', href: '/casamentos' },
  { name: 'Corporativo', href: '/corporativo' },
  { name: 'Hospedagem', href: '/hospedagem' },
  { name: 'Cases', href: '/cases' },
  { name: 'Blog', href: '/blog' },
  { name: 'Sobre', href: '/sobre' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={clsx(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-700' : 'bg-transparent'
    )}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EO</span>
              </div>
              <span className="font-serif text-xl font-semibold text-accent-light">
                Espaço Olinda
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-accent-medium'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/contato"
              className="btn btn-primary px-6 py-2 text-sm font-medium"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Agendar visita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-accent-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2 bg-dark-900/95 backdrop-blur-md border-t border-dark-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'block px-3 py-2 text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'text-primary bg-dark-800'
                      : 'text-accent-medium hover:text-primary hover:bg-dark-800'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-4">
                <Link
                  href="/contato"
                  className="btn btn-primary w-full px-4 py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar visita
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
