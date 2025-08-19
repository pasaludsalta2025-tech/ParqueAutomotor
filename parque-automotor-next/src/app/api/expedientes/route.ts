import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

// GET - Obtener todos los expedientes
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const estado = searchParams.get('estado')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const skip = (page - 1) * limit

    // Construir filtros
    const where: Record<string, unknown> = {}
    if (estado) {
      where.estado = estado
    }

    // Obtener expedientes con paginación
    const [expedientes, total] = await Promise.all([
      prisma.expediente.findMany({
        where,
        include: {
          creadoPor: {
            select: { id: true, nombre: true, apellido: true, username: true }
          },
          ejecutivo: {
            select: { id: true, nombre: true, apellido: true, username: true }
          },
          compras: {
            select: { id: true, nombre: true, apellido: true, username: true }
          },
          finalizadoPor: {
            select: { id: true, nombre: true, apellido: true, username: true }
          }
        },
        orderBy: { fechaCreacion: 'desc' },
        skip,
        take: limit
      }),
      prisma.expediente.count({ where })
    ])

    return NextResponse.json({
      expedientes,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error obteniendo expedientes:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// POST - Crear nuevo expediente
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validaciones básicas
    if (!data.numeroExpediente) {
      return NextResponse.json(
        { error: 'El número de expediente es requerido' },
        { status: 400 }
      )
    }

    // Verificar si el expediente ya existe
    const existingExpediente = await prisma.expediente.findUnique({
      where: { numeroExpediente: data.numeroExpediente }
    })

    if (existingExpediente) {
      return NextResponse.json(
        { error: 'El número de expediente ya existe' },
        { status: 400 }
      )
    }

    // Crear expediente
    const expediente = await prisma.expediente.create({
      data: {
        numeroExpediente: data.numeroExpediente,
        marca: data.marca,
        modelo: data.modelo,
        año: data.año,
        color: data.color,
        placa: data.placa,
        vin: data.vin,
        motor: data.motor,
        transmision: data.transmision,
        estado: data.estado || 'creado',
        prioridad: data.prioridad || 'normal',
        descripcion: data.descripcion,
        observaciones: data.observaciones,
        tipoExpediente: data.tipoExpediente,
        departamento: data.departamento,
        responsable: data.responsable,
        fechaLimite: data.fechaLimite ? new Date(data.fechaLimite) : null,
        costoEstimado: data.costoEstimado,
        costoReal: data.costoReal,
        creadoPorId: data.creadoPorId
      },
      include: {
        creadoPor: {
          select: { id: true, nombre: true, apellido: true, username: true }
        }
      }
    })

    // Crear historial
    if (data.creadoPorId) {
      await prisma.historialExpediente.create({
        data: {
          expedienteId: expediente.id,
          accion: 'creado',
          descripcion: 'Expediente creado',
          usuarioId: data.creadoPorId
        }
      })
    }

    return NextResponse.json({
      message: 'Expediente creado exitosamente',
      expediente
    }, { status: 201 })

  } catch (error) {
    console.error('Error creando expediente:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
