'use client'

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark-800 border-t border-dark-700 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-accent-light font-semibold mb-2">
                Cookies e Privacidade
              </h3>
              <p className="text-sm text-accent-medium leading-relaxed">
                Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo. 
                Ao continuar navegando, você concorda com nossa{' '}
                <a href="/privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm text-accent-medium hover:text-accent-light transition-colors"
            >
              Recusar
            </button>
            <button
              onClick={acceptCookies}
              className="btn btn-primary px-6 py-2 text-sm font-medium"
            >
              Aceitar cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
