# 🚀 Configuración del Sistema Parque Automotor

## 📋 Requisitos Previos

- Node.js 18+ instalado
- PostgreSQL instalado (o cuenta en Neon Database)
- Git instalado

## 🔧 Configuración Paso a Paso

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Configurar Variables de Entorno
```bash
# Copiar archivo de ejemplo
cp env.example .env

# Editar .env con tus credenciales
DATABASE_URL="postgresql://username:password@localhost:5432/parque_automotor"
JWT_SECRET="tu-secret-super-seguro-aqui"
```

### 3. Configurar Base de Datos

#### Opción A: PostgreSQL Local
```bash
# Crear base de datos
createdb parque_automotor

# Ejecutar migraciones
npx prisma migrate dev --name init

# Ejecutar seed (crear datos de ejemplo)
npm run seed
```

#### Opción B: Neon Database (Recomendado)
1. Ir a [neon.tech](https://neon.tech)
2. Crear cuenta gratuita
3. Crear nuevo proyecto
4. Copiar URL de conexión
5. Actualizar `DATABASE_URL` en `.env`
6. Ejecutar migraciones:
   ```bash
   npx prisma migrate deploy
   npm run seed
   ```

### 4. Ejecutar el Sistema
```bash
npm run dev
```

El sistema estará disponible en: http://localhost:3000

## 🔑 Credenciales de Acceso

Después de ejecutar el seed, podrás acceder con:
- **Usuario**: `admin`
- **Contraseña**: `admin123`

⚠️ **IMPORTANTE**: Cambia la contraseña del administrador después del primer acceso.

## 📱 Funcionalidades del Sistema

### Dashboard Principal
- Estadísticas en tiempo real
- Lista de expedientes recientes
- Navegación rápida

### Gestión de Expedientes
- Crear nuevos expedientes
- Información completa de vehículos
- Estados y prioridades
- Historial de cambios

### Administración
- Gestión de usuarios
- Roles y permisos
- Configuración del sistema

## 🚀 Despliegue en Producción

### Vercel (Recomendado)
1. Conectar repositorio en [vercel.com](https://vercel.com)
2. Configurar variables de entorno
3. Desplegar automáticamente

### Variables de Entorno en Vercel
- `DATABASE_URL` - URL de Neon Database
- `JWT_SECRET` - Secret para JWT
- `NEXTAUTH_SECRET` - Secret para NextAuth

## 🐛 Solución de Problemas

### Error de Conexión a Base de Datos
```bash
# Verificar conexión
npx prisma db pull

# Resetear base de datos
npx prisma migrate reset
```

### Error de Build
```bash
# Limpiar cache
rm -rf .next
npm run build
```

### Error de Seed
```bash
# Verificar esquema
npx prisma validate

# Regenerar cliente
npx prisma generate
```

## 📞 Soporte

Si tienes problemas:
1. Verificar que PostgreSQL esté ejecutándose
2. Verificar credenciales en `.env`
3. Ejecutar `npx prisma studio` para ver la base de datos
4. Revisar logs del servidor

## 🎯 Próximos Pasos

1. **Personalizar**: Cambiar colores, logo y branding
2. **Agregar Funcionalidades**: Notificaciones, reportes, etc.
3. **Desplegar**: Subir a Vercel o tu servidor preferido
4. **Configurar Dominio**: Agregar tu dominio personalizado

---

¡Tu sistema de Parque Automotor está listo! 🎉
