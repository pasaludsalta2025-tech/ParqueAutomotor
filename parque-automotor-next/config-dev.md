# 🔧 Configuración para Desarrollo

## 📝 Configuración Temporal sin Base de Datos

Para desarrollo rápido sin configurar PostgreSQL, puedes usar SQLite:

### 1. Cambiar el esquema de Prisma
Edita `prisma/schema.prisma` y cambia:

```prisma
datasource db {
  provider = "sqlite"  // Cambiar de "postgresql" a "sqlite"
  url      = "file:./dev.db"  // Cambiar DATABASE_URL
}
```

### 2. Regenerar cliente
```bash
npx prisma generate
```

### 3. Crear base de datos
```bash
npx prisma migrate dev --name init
```

### 4. Ejecutar seed
```bash
npm run seed
```

## 🚀 Alternativa: Usar Neon Database (Recomendado)

### 1. Crear cuenta en Neon
- Ir a [neon.tech](https://neon.tech)
- Crear cuenta gratuita
- Crear nuevo proyecto

### 2. Configurar variables
En tu archivo `.env`:
```env
DATABASE_URL="postgresql://username:password@ep-xxx-xxx-xxx.region.aws.neon.tech/parque_automotor?sslmode=require"
JWT_SECRET="tu-secret-super-seguro"
```

### 3. Ejecutar migraciones
```bash
npx prisma migrate deploy
npm run seed
```

## 🔑 Credenciales de Acceso

Después del seed:
- Usuario: `admin`
- Contraseña: `admin123`

## 📱 Probar el Sistema

```bash
npm run dev
```

Acceder a: http://localhost:3000
