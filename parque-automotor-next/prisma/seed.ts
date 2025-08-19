import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...')

  // Crear usuario administrador por defecto
  const adminPassword = await bcrypt.hash('admin123', 12)
  
  const adminUser = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      dni: '12345678',
      nombre: 'Administrador',
      apellido: 'Sistema',
      password: adminPassword,
      role: 'admin'
    }
  })

  console.log('✅ Usuario administrador creado:', adminUser.username)

  // Crear algunos expedientes de ejemplo
  const expediente1 = await prisma.expediente.upsert({
    where: { numeroExpediente: 'EXP-2024-001' },
    update: {},
    create: {
      numeroExpediente: 'EXP-2024-001',
      marca: 'Toyota',
      modelo: 'Corolla',
      año: '2020',
      color: 'Blanco',
      placa: 'ABC-123',
      estado: 'creado',
      prioridad: 'normal',
      descripcion: 'Mantenimiento preventivo del vehículo',
      tipoExpediente: 'mantenimiento',
      departamento: 'Mecánica',
      responsable: 'Juan Pérez',
      creadoPorId: adminUser.id
    }
  })

  const expediente2 = await prisma.expediente.upsert({
    where: { numeroExpediente: 'EXP-2024-002' },
    update: {},
    create: {
      numeroExpediente: 'EXP-2024-002',
      marca: 'Honda',
      modelo: 'Civic',
      año: '2019',
      color: 'Negro',
      placa: 'XYZ-789',
      estado: 'en_ejecutivo',
      prioridad: 'alta',
      descripcion: 'Reparación del sistema de frenos',
      tipoExpediente: 'reparacion',
      departamento: 'Mecánica',
      responsable: 'María García',
      creadoPorId: adminUser.id
    }
  })

  console.log('✅ Expedientes de ejemplo creados')

  // Crear historial para los expedientes
  await prisma.historialExpediente.createMany({
    data: [
      {
        expedienteId: expediente1.id,
        accion: 'creado',
        descripcion: 'Expediente creado por el sistema',
        usuarioId: adminUser.id
      },
      {
        expedienteId: expediente2.id,
        accion: 'creado',
        descripcion: 'Expediente creado por el sistema',
        usuarioId: adminUser.id
      },
      {
        expedienteId: expediente2.id,
        accion: 'cambiado_estado',
        descripcion: 'Estado cambiado a en ejecutivo',
        usuarioId: adminUser.id
      }
    ]
  })

  console.log('✅ Historial de expedientes creado')

  console.log('🎉 Seed completado exitosamente!')
  console.log('')
  console.log('📋 Credenciales de acceso:')
  console.log('   Usuario: admin')
  console.log('   Contraseña: admin123')
  console.log('')
  console.log('⚠️  IMPORTANTE: Cambia la contraseña del administrador después del primer acceso')
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
