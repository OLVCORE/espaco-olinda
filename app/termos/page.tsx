import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso e condições do site do Espaço Olinda.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TermosPage() {
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
            Termos de Uso
          </h1>

          <p className="text-accent-medium mb-6">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Ao acessar e usar o site do Espaço Olinda, você concorda em cumprir e estar vinculado 
                a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
                não deve usar nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                2. Descrição do Serviço
              </h2>
              <p className="text-accent-medium leading-relaxed">
                O Espaço Olinda é um local especializado em eventos, oferecendo serviços de:
              </p>
              <ul className="list-disc list-inside text-accent-medium space-y-2 mt-4">
                <li>Casamentos e celebrações</li>
                <li>Eventos corporativos</li>
                <li>Hospedagem para eventos</li>
                <li>Serviços de catering e decoração</li>
                <li>Consultoria em planejamento de eventos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                3. Uso do Site
              </h2>
              <p className="text-accent-medium leading-relaxed mb-4">
                Você concorda em usar o site apenas para fins legais e de acordo com estes termos. 
                É proibido:
              </p>
              <ul className="list-disc list-inside text-accent-medium space-y-2">
                <li>Usar o site para qualquer propósito ilegal ou não autorizado</li>
                <li>Interferir no funcionamento do site</li>
                <li>Transmitir vírus ou código malicioso</li>
                <li>Coletar informações de outros usuários</li>
                <li>Usar o site para spam ou comunicações não solicitadas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                4. Propriedade Intelectual
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Todo o conteúdo do site, incluindo textos, imagens, logotipos, design e funcionalidades, 
                é propriedade do Espaço Olinda ou de seus licenciadores e está protegido por leis de 
                direitos autorais e outras leis de propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                5. Reservas e Contratos
              </h2>
              <p className="text-accent-medium leading-relaxed">
                As reservas de serviços são feitas através de contrato específico. Os termos e condições 
                de cada serviço serão detalhados no contrato correspondente. O uso deste site não constitui 
                uma reserva ou contrato até que seja formalizado por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                6. Preços e Pagamentos
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Os preços exibidos no site são apenas informativos e podem estar sujeitos a alterações. 
                Os preços finais serão confirmados no contrato de serviço. Formas de pagamento e condições 
                serão especificadas no contrato.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                7. Limitação de Responsabilidade
              </h2>
              <p className="text-accent-medium leading-relaxed">
                O Espaço Olinda não se responsabiliza por danos diretos, indiretos, incidentais ou 
                consequenciais resultantes do uso do site ou dos serviços, incluindo perda de lucros, 
                dados ou outras perdas intangíveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                8. Disponibilidade do Site
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Nos esforçamos para manter o site disponível 24/7, mas não garantimos disponibilidade 
                contínua. O site pode estar temporariamente indisponível devido a manutenção, atualizações 
                ou problemas técnicos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                9. Links para Terceiros
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo 
                ou práticas de privacidade desses sites. Recomendamos que você leia os termos de uso e 
                políticas de privacidade de qualquer site que visitar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                10. Alterações nos Termos
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
                entrarão em vigor imediatamente após a publicação no site. O uso continuado do site 
                após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                11. Lei Aplicável
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos 
                tribunais competentes de São Paulo, SP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-accent-light mb-4">
                12. Contato
              </h2>
              <p className="text-accent-medium leading-relaxed">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
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
