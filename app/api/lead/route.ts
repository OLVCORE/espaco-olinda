import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const leadSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  eventType: z.string().min(1, 'Tipo de evento é obrigatório'),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  acceptTerms: z.boolean().refine(val => val === true, 'Você deve aceitar os termos'),
  honeypot: z.string().optional(),
})

type LeadData = z.infer<typeof leadSchema>

// Função para enviar e-mail (implementação básica)
async function sendEmail(data: LeadData) {
  // Aqui você implementaria o envio de e-mail via SMTP, SendGrid, etc.
  // Por enquanto, apenas logamos os dados
  
  const emailContent = `
Nova solicitação de proposta - Espaço Olinda

Nome: ${data.name}
E-mail: ${data.email}
Telefone: ${data.phone}
Tipo de evento: ${data.eventType}
Data desejada: ${data.eventDate || 'Não informada'}
Número de convidados: ${data.guestCount || 'Não informado'}
Orçamento: ${data.budget || 'Não informado'}

Mensagem:
${data.message}

---
Enviado em: ${new Date().toLocaleString('pt-BR')}
IP: ${process.env.NEXT_PUBLIC_SITE_URL}
  `

  console.log('=== NOVA SOLICITAÇÃO DE PROPOSTA ===')
  console.log(emailContent)
  console.log('=====================================')

  // Simular envio de e-mail
  return { success: true, messageId: `msg_${Date.now()}` }
}

// Função para salvar no HubSpot (opcional)
async function saveToHubSpot(data: LeadData) {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY
  const hubspotPortalId = process.env.HUBSPOT_PORTAL_ID

  if (!hubspotApiKey || !hubspotPortalId) {
    console.log('HubSpot não configurado')
    return { success: false, error: 'HubSpot não configurado' }
  }

  try {
    const contactData = {
      properties: {
        firstname: data.name.split(' ')[0],
        lastname: data.name.split(' ').slice(1).join(' ') || '',
        email: data.email,
        phone: data.phone,
        event_type: data.eventType,
        event_date: data.eventDate || '',
        guest_count: data.guestCount || '',
        budget: data.budget || '',
        message: data.message,
        lead_source: 'Website',
        lead_status: 'New',
        created_date: new Date().toISOString(),
      }
    }

    const response = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${hubspotApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      }
    )

    if (!response.ok) {
      throw new Error(`HubSpot API error: ${response.status}`)
    }

    const result = await response.json()
    return { success: true, contactId: result.id }

  } catch (error) {
    console.error('Erro ao salvar no HubSpot:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Verificar honeypot
    if (body.honeypot) {
      console.log('Bot detectado via honeypot')
      return NextResponse.json({ 
        success: false, 
        error: 'Bot detectado' 
      }, { status: 400 })
    }

    // Validar dados
    const validatedData = leadSchema.parse(body)

    // Enviar e-mail
    const emailResult = await sendEmail(validatedData)
    
    // Salvar no HubSpot (opcional)
    const hubspotResult = await saveToHubSpot(validatedData)

    // Log da solicitação
    console.log('Solicitação processada:', {
      name: validatedData.name,
      email: validatedData.email,
      eventType: validatedData.eventType,
      emailSent: emailResult.success,
      hubspotSaved: hubspotResult.success,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: 'Solicitação enviada com sucesso! Entraremos em contato em breve.',
      emailResult,
      hubspotResult
    })

  } catch (error) {
    console.error('Erro no endpoint /api/lead:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Dados inválidos',
        details: error.errors
      }, { status: 400 })
    }

    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}
