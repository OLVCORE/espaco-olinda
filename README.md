# Espaço Olinda - Site Oficial

Site oficial do Espaço Olinda, um venue premium em Santa Isabel/SP para casamentos, eventos corporativos, lançamentos de produtos, confraternizações, hospedagens e eventos sociais.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (componentes)
- **Contentlayer** (blog)
- **next-seo** (SEO)
- **next-sitemap** (sitemap)

## 📋 Funcionalidades

### ✅ Implementado

- [x] Estrutura base do projeto
- [x] Layout responsivo com header/footer
- [x] Páginas principais (Home, Casamentos, Corporativo, Hospedagem, Sobre, Contato)
- [x] Sistema de blog com posts iniciais
- [x] Páginas de cases com templates
- [x] Componentes reutilizáveis
- [x] API routes para Instagram, blog e formulários
- [x] SEO e schema.org
- [x] Páginas legais (Privacidade, Termos)
- [x] Scripts de ingestão automática

### 🔄 Pipeline Automático

- **Instagram**: Ingestão automática de posts do @espacoolinda
- **Blog**: Ingestão automática de feeds RSS com sumarização
- **Formulários**: Envio de e-mails e integração com HubSpot

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <repository-url>
cd espaco-olinda
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://espacoolinda.com.br
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PIXEL_ID=1234567890123456
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/espaco-olinda
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/5511999999999

# Instagram Ingest
IG_USERNAME=espacoolinda

# Blog Auto (RSS/Atom feeds)
BLOG_FEEDS=https://g1.globo.com/rss/g1/economia/agronegocios/,https://feeds.feedburner.com/casamentoscombr,https://tecmundo.com.br/rss,https://exame.com/rss,https://veja.abril.com.br/feed/

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contato@espacoolinda.com.br
SMTP_PASS=your-app-password
SMTP_FROM=contato@espacoolinda.com.br
SMTP_TO=contato@espacoolinda.com.br

# Content Control
PUBLISH_AUTO=true

# HubSpot Integration (optional)
HUBSPOT_API_KEY=
HUBSPOT_PORTAL_ID=

# Revalidation
REVALIDATE_SECRET=your-secret-key
```

4. **Execute o projeto**
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 📝 Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa o linter
```

### Ingestão de Conteúdo
```bash
npm run ingest:ig    # Ingesta posts do Instagram
npm run ingest:blog  # Ingesta posts do blog via RSS
```

## 🎨 Estrutura do Projeto

```
├── app/                    # App Router (Next.js 14)
│   ├── (site)/            # Páginas do site
│   │   ├── casamentos/    # Página de casamentos
│   │   ├── corporativo/   # Página corporativa
│   │   ├── hospedagem/    # Página de hospedagem
│   │   ├── sobre/         # Página sobre
│   │   ├── contato/       # Página de contato
│   │   ├── blog/          # Blog e posts
│   │   └── cases/         # Cases de eventos
│   ├── api/               # API routes
│   │   ├── ingest-ig/     # Ingestão Instagram
│   │   ├── ingest-blog/   # Ingestão blog
│   │   ├── lead/          # Formulários
│   │   ├── sitemap/       # Sitemap
│   │   └── revalidate/    # Revalidação de cache
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes base
│   ├── Header.tsx        # Cabeçalho
│   ├── Footer.tsx        # Rodapé
│   ├── Hero.tsx          # Seção hero
│   ├── Gallery.tsx       # Galeria de imagens
│   ├── LeadForm.tsx      # Formulário de leads
│   ├── FAQ.tsx           # Perguntas frequentes
│   └── ...
├── lib/                  # Utilitários
│   ├── seo.ts           # Configurações SEO
│   └── schema.ts        # Schema.org
├── scripts/             # Scripts de automação
│   ├── ingest-instagram.js
│   └── ingest-blog.js
├── styles/              # Estilos globais
│   └── globals.css
└── content/             # Conteúdo gerado
    ├── blog/           # Posts do blog
    ├── cases/          # Cases de eventos
    └── instagram/      # Feed do Instagram
```

## 🔧 Configuração

### SEO e Performance

O projeto está configurado para performance de classe A:

- **Lighthouse**: Alvo 100/100
- **LCP**: < 1.5s
- **CLS**: < 0.05
- **Acessibilidade**: WCAG 2.1 AA

### Analytics

- Google Analytics 4
- Facebook Pixel
- Configuração via variáveis de ambiente

### Formulários

- Validação com Zod
- Honeypot para spam
- Envio via SMTP
- Integração opcional com HubSpot

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ♿ Acessibilidade

- Navegação por teclado
- ARIA labels
- Skip links
- Contraste AA
- Screen reader friendly

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outros Provedores

O projeto é compatível com qualquer provedor que suporte Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Monitoramento

### Performance

- Lighthouse CI
- Web Vitals
- Core Web Vitals

### Analytics

- Google Analytics 4
- Facebook Pixel
- Métricas customizadas

## 🔄 Pipeline de Conteúdo

### Instagram

1. Script `npm run ingest:ig` busca posts do @espacoolinda
2. Filtra posts com marcas de terceiros
3. Salva em `/content/instagram/feed.json`
4. Componente Gallery consome o feed

### Blog

1. Script `npm run ingest:blog` processa feeds RSS
2. Filtra por relevância (casamento, evento, etc.)
3. Gera sumários originais
4. Salva posts como MDX em `/content/blog/`

### Revalidação

- Cache revalidation via API
- ISR (Incremental Static Regeneration)
- Rebuild automático em deploys

## 🛡️ Segurança

- Headers de segurança
- Validação de formulários
- Honeypot anti-spam
- Sanitização de dados
- HTTPS obrigatório

## 📞 Suporte

Para dúvidas ou suporte:

- **E-mail**: contato@espacoolinda.com.br
- **Telefone**: (11) 99999-9999
- **WhatsApp**: [Link direto](https://wa.me/5511999999999)

## 📄 Licença

Este projeto é propriedade do Espaço Olinda. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para celebrar momentos especiais**