import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const tag = searchParams.get('tag')

    // Verificar secret
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ 
        success: false, 
        error: 'Secret inválido' 
      }, { status: 401 })
    }

    if (!tag) {
      return NextResponse.json({ 
        success: false, 
        error: 'Tag não especificada' 
      }, { status: 400 })
    }

    // Revalidar cache
    revalidateTag(tag)

    console.log(`Cache revalidado para tag: ${tag}`)

    return NextResponse.json({
      success: true,
      message: `Cache revalidado para tag: ${tag}`,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Erro ao revalidar cache:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }, { status: 500 })
  }
}
