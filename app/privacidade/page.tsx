import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados do Espaço Olinda.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Button
            href="/"
            variant="outline"
            size="sm"
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Button>
        </div>

        <div className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-serif font-bold text-accent-light mb-8">
            Política de Privacidade
          </h1>

          <p className="text-accent-medium mb-6">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                1. Informações Gerais
              </h2>
              <p className="text-accent-medium leading-relaxed">
                O Espaço Olinda ("nós", "nosso" ou "empresa") está comprometido com a proteção da privacidade 
                e dos dados pessoais de nossos clientes e visitantes. Esta Política de Privacidade descreve 
                como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                2. Informações que Coletamos
              </h2>
              <p className="text-accent-medium leading-relaxed mb-4">
                Coletamos as seguintes informações quando você interage conosco:
              </p>
              <ul className="list-disc list-inside text-accent-medium space-y-2">
                <li><strong>Informações de contato:</strong> Nome, e-mail, telefone e endereço</li>
                <li><strong>Informações do evento:</strong> Tipo de evento, data, número de convidados, orçamento</li>
                <li><strong>Informações de navegação:</strong> Cookies, endereço IP, tipo de navegador</li>
                <li><strong>Comunicações:</strong> Mensagens enviadas através de formulários ou e-mail</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                3. Como Usamos suas Informações
              </h2>
              <p className="text-accent-medium leading-relaxed mb-4">
                Utilizamos suas informações pessoais para:
              </p>
              <ul className="list-disc list-inside text-accent-medium space-y-2">
                <li>Responder às suas solicitações e fornecer propostas personalizadas</li>
                <li>Agendar visitas e reuniões</li>
                <li>Comunicar sobre nossos serviços e eventos</li>
                <li>Melhorar nosso site e serviços</li>
                <li>Cumprir obrigações legais e contratuais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                4. Compartilhamento de Informações
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto quando necessário para fornecer nossos serviços ou quando exigido por lei. 
                Podemos compartilhar informações com fornecedores de confiança que nos ajudam a 
                operar nosso negócio, sempre sob acordos de confidencialidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                5. Segurança dos Dados
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para 
                proteger suas informações pessoais contra acesso não autorizado, alteração, 
                divulgação ou destruição. No entanto, nenhum método de transmissão pela internet 
                ou armazenamento eletrônico é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                6. Seus Direitos
              </h2>
              <p className="text-accent-medium leading-relaxed mb-4">
                Você tem os seguintes direitos em relação às suas informações pessoais:
              </p>
              <ul className="list-disc list-inside text-accent-medium space-y-2">
                <li>Acesso às suas informações pessoais</li>
                <li>Correção de informações incorretas ou incompletas</li>
                <li>Exclusão de suas informações pessoais</li>
                <li>Portabilidade dos dados</li>
                <li>Oposição ao processamento</li>
                <li>Retirada do consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                7. Cookies
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Utilizamos cookies para melhorar sua experiência em nosso site, analisar o tráfego 
                e personalizar conteúdo. Você pode controlar o uso de cookies através das configurações 
                do seu navegador. Alguns recursos do site podem não funcionar corretamente se os cookies 
                estiverem desabilitados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                8. Retenção de Dados
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os 
                propósitos descritos nesta política, a menos que um período de retenção mais longo 
                seja exigido ou permitido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                9. Alterações nesta Política
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                mudanças significativas através de nosso site ou por e-mail. Recomendamos que você 
                revise esta política regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                10. Contato
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas 
                informações pessoais, entre em contato conosco:
              </p>
              <div className="mt-4 p-4 bg-dark-800 rounded-lg">
                <p className="text-accent-medium">
                  <strong>E-mail:</strong> contato@espacoolinda.com.br<br />
                  <strong>Telefone:</strong> (11) 99999-9999<br />
                  <strong>Endereço:</strong> Estrada Municipal, s/n - Santa Isabel/SP
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
