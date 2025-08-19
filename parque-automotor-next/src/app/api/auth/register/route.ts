import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { username, dni, nombre, apellido, password, role } = await request.json()

    // Validaciones básicas
    if (!username || !dni || !nombre || !apellido || !password) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username },
          { dni }
        ]
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'El usuario o DNI ya existe' },
        { status: 400 }
      )
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 12)

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        username,
        dni,
        nombre,
        apellido,
        password: hashedPassword,
        role: role || 'user'
      },
      select: {
        id: true,
        username: true,
        dni: true,
        nombre: true,
        apellido: true,
        role: true,
        createdAt: true
      }
    })

    return NextResponse.json({
      message: 'Usuario creado exitosamente',
      user
    })

  } catch (error) {
    console.error('Error en registro:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
