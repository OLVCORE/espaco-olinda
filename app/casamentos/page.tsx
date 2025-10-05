import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FeatureList } from '@/components/FeatureList'
import { Gallery } from '@/components/Gallery'
import { FAQ, FAQSchema } from '@/components/FAQ'
import { CalendarEmbed } from '@/components/CalendarEmbed'
import { Button } from '@/components/ui/Button'
import { Calendar, MessageCircle, Heart, Users, Shield, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Casamentos | Cerimônia coberta & wedding weekend',
  description: 'Um lugar para dizer "sim" sem imprevistos. Espaço, serviços e hospedagem em um só destino. Cerimônia coberta e wedding weekend completo.',
  keywords: ['casamento', 'cerimônia coberta', 'wedding weekend', 'casamento no campo', 'Santa Isabel', 'SP'],
  openGraph: {
    title: 'Casamentos | Cerimônia coberta & wedding weekend',
    description: 'Um lugar para dizer "sim" sem imprevistos. Espaço, serviços e hospedagem em um só destino.',
    images: ['/casamentos/og-image.jpg'],
  },
}

const weddingFeatures = [
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: 'Cerimônia coberta com cenários naturais',
    description: 'Estrutura coberta que preserva a beleza natural do campo, com proteção total contra intempéries.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Dois salões com plantas versáteis',
    description: 'Salões moduláveis que se adaptam ao seu estilo e número de convidados, do íntimo ao grandioso.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Cozinha industrial e área técnica',
    description: 'Infraestrutura completa para recepção, com cozinha industrial e áreas técnicas dedicadas.'
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'Estacionamento interno',
    description: 'Amplo estacionamento interno para todos os convidados, com segurança e comodidade.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Acessibilidade',
    description: 'Estrutura totalmente acessível, garantindo conforto para todos os convidados.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: '1 evento por dia',
    description: 'Exclusividade total. Seu casamento é o único evento do dia, com atenção completa da equipe.'
  }
]

const faqItems = [
  {
    question: 'O espaço realiza apenas 1 evento por dia?',
    answer: 'Sim, garantimos exclusividade total. Realizamos apenas um evento por dia, seja casamento, evento corporativo ou social. Isso garante que toda nossa atenção e infraestrutura estejam dedicadas exclusivamente ao seu evento.'
  },
  {
    question: 'Qual a capacidade recomendada de convidados?',
    answer: 'Nossa capacidade varia de 50 a 300 convidados, dependendo do tipo de evento e layout escolhido. Para casamentos, recomendamos entre 100 e 200 convidados para uma experiência ideal, mas nos adaptamos ao seu número específico.'
  },
  {
    question: 'A cerimônia é coberta?',
    answer: 'Sim, nossa cerimônia é totalmente coberta. Temos uma estrutura elegante que preserva a beleza natural do campo enquanto oferece proteção completa contra chuva, sol forte ou qualquer intempérie.'
  },
  {
    question: 'Posso trazer meus fornecedores?',
    answer: 'Sim, você pode trabalhar com fornecedores de sua escolha, desde que sejam homologados por nós. Também oferecemos uma rede de fornecedores parceiros com qualidade comprovada para facilitar sua escolha.'
  },
  {
    question: 'Há suíte dos noivos e quartos para família?',
    answer: 'Sim, oferecemos hospedagem para até 40 pessoas no local, incluindo suíte dos noivos e quartos para família e amigos próximos. Isso permite uma experiência de wedding weekend completa.'
  },
  {
    question: 'Como funciona a visita técnica?',
    answer: 'A visita técnica é agendada após a contratação e inclui teste de som, iluminação, layout final e cronograma detalhado. Nossa equipe técnica acompanha todo o processo para garantir que tudo funcione perfeitamente no dia.'
  },
  {
    question: 'Há plano B para mudanças climáticas?',
    answer: 'Nossa cerimônia coberta é o plano A e B. Além disso, temos áreas internas alternativas e coberturas móveis para garantir que seu evento aconteça independente das condições climáticas.'
  }
]

export default function CasamentosPage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      
      {/* Hero Section */}
      <Hero
        title="Casamento no campo, sem imprevistos."
        subtitle="Cerimônia coberta, salões moduláveis e hospedagem no local. Um lugar para dizer 'sim' com total tranquilidade."
        primaryCta={{
          text: 'Solicitar orçamento',
          href: '/contato'
        }}
        secondaryCta={{
          text: 'Agendar visita',
          href: '/contato'
        }}
        className="pt-20"
      />

      {/* Wedding Weekend */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-accent-light mb-6">
                Um fim de semana inteiro para viver o seu dia.
              </h2>
              <p className="text-lg text-accent-medium mb-6 leading-relaxed">
                Chegue antes, hospede pessoas especiais, aproveite cada momento. Da prova do menu à última dança, 
                sem pressa, tudo no mesmo lugar.
              </p>
              <p className="text-accent-medium mb-8 leading-relaxed">
                O wedding weekend no Espaço Olinda é mais que um casamento — é uma experiência completa. 
                Família e amigos ficam hospedados, participam de atividades, provam o menu e vivem cada 
                momento da celebração sem pressa.
              </p>
              <Button
                href="/hospedagem"
                variant="primary"
                size="lg"
              >
                Conhecer hospedagem
              </Button>
            </div>
            <div className="bg-dark-700 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Inclui no wedding weekend:
              </h3>
              <ul className="space-y-3">
                {[
                  'Hospedagem para até 40 pessoas',
                  'Suíte dos noivos com vista para o campo',
                  'Quartos para família e amigos próximos',
                  'Áreas de convivência e lazer',
                  'Prova do menu com os noivos',
                  'Ensaio da cerimônia',
                  'Café da manhã para hospedes',
                  'Atividades opcionais (caminhadas, jogos)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-accent-medium">
                    <Heart className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Espaços & Layouts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Espaços & Layouts
            </h2>
            <p className="text-lg text-accent-medium max-w-2xl mx-auto">
              Cada ambiente foi pensado para criar momentos únicos e memoráveis.
            </p>
          </div>

          <FeatureList
            features={weddingFeatures}
            columns={2}
          />

          <div className="text-center mt-12">
            <Button
              href="/sobre"
              variant="primary"
              size="lg"
            >
              Conhecer a infraestrutura
            </Button>
          </div>
        </div>
      </section>

      {/* Pacotes & Serviços */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-accent-light mb-4">
              Pacotes & Serviços
            </h2>
            <p className="text-lg text-accent-medium max-w-3xl mx-auto leading-relaxed">
              Monte o seu evento do seu jeito: espaço + gastronomia, bar, décor, iluminação, 
              sonorização e confeitaria. Você escolhe contratar via Olinda ou com fornecedores homologados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Espaço */}
            <div className="bg-dark-700 rounded-lg p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Espaço
              </h3>
              <ul className="text-accent-medium space-y-2 text-sm">
                <li>• Cerimônia coberta</li>
                <li>• Dois salões moduláveis</li>
                <li>• Áreas técnicas</li>
                <li>• Estacionamento</li>
                <li>• Equipe de apoio</li>
              </ul>
            </div>

            {/* Serviços */}
            <div className="bg-dark-700 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Serviços
              </h3>
              <ul className="text-accent-medium space-y-2 text-sm">
                <li>• Gastronomia completa</li>
                <li>• Bar e bebidas</li>
                <li>• Decoração e florais</li>
                <li>• Iluminação e som</li>
                <li>• Confeitaria</li>
              </ul>
            </div>

            {/* Hospedagem */}
            <div className="bg-dark-700 rounded-lg p-6 text-center md:col-span-2 lg:col-span-1">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Hospedagem
              </h3>
              <ul className="text-accent-medium space-y-2 text-sm">
                <li>• Suíte dos noivos</li>
                <li>• Quartos para família</li>
                <li>• Áreas de convivência</li>
                <li>• Café da manhã</li>
                <li>• Wedding weekend</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              href="/contato"
              variant="primary"
              size="lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Solicitar proposta personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Galeria Casamentos */}
      <Gallery
        source="ig"
        maxItems={12}
        title="Casamentos reais, momentos verdadeiros"
      />

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Perguntas Frequentes - Casamentos"
        subtitle="Tire suas dúvidas sobre casamentos no Espaço Olinda"
      />

      {/* CTA Final */}
      <section className="py-16 bg-dark-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-accent-light mb-6">
            Pronto para começar a planejar seu casamento?
          </h2>
          <p className="text-lg text-accent-medium mb-8">
            Agende uma visita e conheça pessoalmente todos os espaços e possibilidades.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CalendarEmbed
              title="Agendar visita"
              subtitle="Escolha um horário para conhecer o espaço"
            />
            
            <div className="bg-dark-700 rounded-lg p-8 text-center">
              <MessageCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent-light mb-4">
                Falar no WhatsApp
              </h3>
              <p className="text-accent-medium mb-6">
                Tire suas dúvidas rapidamente
              </p>
              <Button
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/5511999999999'}
                variant="outline"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Conversar agora
              </Button>
            </div>
          </div>
      </div>
      </section>
    </>
  )
}