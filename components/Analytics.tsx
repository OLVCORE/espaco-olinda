'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID

  useEffect(() => {
    if (gaId) {
      // Google Analytics 4
      window.gtag = window.gtag || function() {
        (window.gtag as any).q = (window.gtag as any).q || []
        ;(window.gtag as any).q.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', gaId)
    }

    if (pixelId) {
      // Facebook Pixel - simplified for TypeScript
      const script = document.createElement('script')
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      script.async = true
      document.head.appendChild(script)
      
      // Initialize Facebook Pixel
      window.fbq = window.fbq || function() {
        (window.fbq as any).q = (window.fbq as any).q || []
        ;(window.fbq as any).q.push(arguments)
      }
      window.fbq('init', pixelId)
      window.fbq('track', 'PageView')
    }
  }, [gaId, pixelId])

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
          </Script>
        </>
      )}
    </>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}
