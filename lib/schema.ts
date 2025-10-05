// Schema.org JSON-LD para SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Espaço Olinda",
  "description": "Espaço de eventos no campo, perto da cidade. Cerimônia coberta, salões versáteis e hospedagem on-site para casamentos e eventos corporativos.",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://espacoolinda.com.br",
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://espacoolinda.com.br"}/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-99999-9999",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Estrada Municipal, s/n",
    "addressLocality": "Santa Isabel",
    "addressRegion": "SP",
    "postalCode": "07500-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.3167,
    "longitude": -46.2167
  },
  "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-16:00",
  "sameAs": [
    "https://instagram.com/espacoolinda",
    "https://facebook.com/espacoolinda"
  ]
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Espaço Olinda",
  "description": "Espaço de eventos no campo para casamentos, eventos corporativos e celebrações especiais.",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://espacoolinda.com.br",
  "telephone": "+55-11-99999-9999",
  "email": "contato@espacoolinda.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Estrada Municipal, s/n",
    "addressLocality": "Santa Isabel",
    "addressRegion": "SP",
    "postalCode": "07500-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.3167,
    "longitude": -46.2167
  },
  "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-16:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card",
  "currenciesAccepted": "BRL",
  "areaServed": {
    "@type": "City",
    "name": "Santa Isabel"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Eventos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Casamentos",
          "description": "Cerimônia coberta, recepção e wedding weekend completo"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Eventos Corporativos",
          "description": "Lançamentos, convenções, treinamentos e confraternizações"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hospedagem",
          "description": "Quartos e suítes para até 40 pessoas"
        }
      }
    ]
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Espaço Olinda",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://espacoolinda.com.br",
  "description": "Espaço de eventos no campo, perto da cidade. Cerimônia coberta, salões versáteis e hospedagem on-site.",
  "publisher": {
    "@type": "Organization",
    "name": "Espaço Olinda"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://espacoolinda.com.br"}/contato?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const eventSchema = (eventData: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: string
  organizer: string
  price?: string
  availability?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": eventData.name,
  "description": eventData.description,
  "startDate": eventData.startDate,
  "endDate": eventData.endDate || eventData.startDate,
  "location": {
    "@type": "Place",
    "name": "Espaço Olinda",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Estrada Municipal, s/n",
      "addressLocality": "Santa Isabel",
      "addressRegion": "SP",
      "postalCode": "07500-000",
      "addressCountry": "BR"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": eventData.organizer,
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://espacoolinda.com.br"
  },
  "offers": eventData.price ? {
    "@type": "Offer",
    "price": eventData.price,
    "priceCurrency": "BRL",
    "availability": eventData.availability || "https://schema.org/InStock"
  } : undefined
})

export const blogPostSchema = (postData: {
  title: string
  description: string
  date: string
  author: string
  url: string
  image?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": postData.title,
  "description": postData.description,
  "datePublished": postData.date,
  "dateModified": postData.date,
  "author": {
    "@type": "Organization",
    "name": postData.author,
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://espacoolinda.com.br"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Espaço Olinda",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://espacoolinda.com.br",
    "logo": {
      "@type": "ImageObject",
      "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://espacoolinda.com.br"}/logo.png`
    }
  },
  "url": postData.url,
  "image": postData.image || `${process.env.NEXT_PUBLIC_SITE_URL || "https://espacoolinda.com.br"}/og-image.jpg`,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": postData.url
  }
})

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})
