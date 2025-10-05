import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Analytics } from '@/components/Analytics'
import { CookieConsent } from '@/components/CookieConsent'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Espaço Olinda | Eventos no campo, perto da cidade',
    template: '%s | Espaço Olinda',
  },
  description: 'Cerimônia coberta, salões versáteis e hospedagem on-site. Casamentos e eventos corporativos com exclusividade no interior de SP.',
  keywords: ['eventos', 'casamento', 'corporativo', 'campo', 'Santa Isabel', 'SP', 'hospedagem', 'cerimônia coberta'],
  authors: [{ name: 'Espaço Olinda' }],
  creator: 'Espaço Olinda',
  publisher: 'Espaço Olinda',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://espacoolinda.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    title: 'Espaço Olinda | Eventos no campo, perto da cidade',
    description: 'Cerimônia coberta, salões versáteis e hospedagem on-site. Casamentos e eventos corporativos com exclusividade.',
    siteName: 'Espaço Olinda',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espaço Olinda | Eventos no campo, perto da cidade',
    description: 'Cerimônia coberta, salões versáteis e hospedagem on-site. Casamentos e eventos corporativos com exclusividade.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0f1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-dark-900 text-accent-light font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        
        <Header />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}