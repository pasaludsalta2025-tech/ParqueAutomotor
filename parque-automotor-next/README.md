# 🚗 Sistema de Parque Automotor - Next.js

Sistema moderno de gestión de expedientes para parque automotor, construido con Next.js 15, TypeScript, Tailwind CSS y Prisma ORM.

## ✨ Características

- **Dashboard moderno** con estadísticas en tiempo real
- **Gestión de expedientes** completos con información de vehículos
- **Sistema de usuarios** con roles y permisos
- **API REST** completa con Prisma ORM
- **Base de datos PostgreSQL** (compatible con Neon)
- **Diseño responsive** para todos los dispositivos
- **Autenticación JWT** segura
- **Historial de cambios** automático

## 🚀 Instalación

### 1. Clonar el proyecto
```bash
git clone <tu-repositorio>
cd parque-automotor-next
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
# Copiar el archivo de ejemplo
cp env.example .env

# Editar .env con tus credenciales
DATABASE_URL="postgresql://username:password@localhost:5432/parque_automotor"
JWT_SECRET="tu-secret-super-seguro-aqui"
```

### 4. Configurar la base de datos

#### Opción A: Base de datos local (PostgreSQL)
```bash
# Instalar PostgreSQL localmente
# Crear base de datos
createdb parque_automotor

# Ejecutar migraciones
npx prisma migrate dev
```

#### Opción B: Neon Database (Recomendado para producción)
1. Crear cuenta en [neon.tech](https://neon.tech)
2. Crear nuevo proyecto
3. Copiar la URL de conexión
4. Actualizar `DATABASE_URL` en `.env`

### 5. Ejecutar el proyecto
```bash
npm run dev
```

El sistema estará disponible en `http://localhost:3000`

## 🗄️ Estructura de la Base de Datos

### Modelos principales:

- **User**: Usuarios del sistema con roles
- **Expediente**: Expedientes de vehículos
- **HistorialExpediente**: Historial de cambios
- **Configuracion**: Configuraciones del sistema

### Estados de expedientes:
- `creado` - Expediente recién creado
- `en_ejecutivo` - En proceso de ejecución
- `en_compras` - En proceso de compras
- `finalizado` - Expediente completado

### Prioridades:
- `baja` - Prioridad baja
- `normal` - Prioridad normal
- `alta` - Prioridad alta
- `urgente` - Prioridad urgente

## 🔧 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión

### Usuarios
- `GET /api/users` - Obtener todos los usuarios
- `DELETE /api/users/[id]` - Eliminar usuario

### Expedientes
- `GET /api/expedientes` - Obtener expedientes
- `POST /api/expedientes` - Crear expediente
- `PUT /api/expedientes/[id]` - Actualizar expediente
- `DELETE /api/expedientes/[id]` - Eliminar expediente

## 📱 Páginas del Sistema

- **Dashboard** (`/`) - Vista principal con estadísticas
- **Nuevo Expediente** (`/nuevo-expediente`) - Crear expediente
- **Configuración** (`/configuracion`) - Administración del sistema

## 🚀 Despliegue en Vercel

### 1. Conectar con GitHub
1. Subir código a GitHub
2. Conectar repositorio en [vercel.com](https://vercel.com)

### 2. Configurar variables de entorno
En Vercel, agregar:
- `DATABASE_URL` - URL de Neon Database
- `JWT_SECRET` - Secret para JWT
- `NEXTAUTH_SECRET` - Secret para NextAuth

### 3. Desplegar
Vercel detectará automáticamente que es un proyecto Next.js y lo desplegará.

## 🔒 Seguridad

- **Contraseñas encriptadas** con bcrypt
- **JWT tokens** para autenticación
- **Validación de datos** en todas las APIs
- **Roles de usuario** para control de acceso

## 🎨 Personalización

### Colores del tema
El sistema usa Tailwind CSS con un tema azul personalizable. Para cambiar colores, edita las clases en los componentes.

### Logo y branding
Reemplaza el título "Parque Automotor" en los componentes con tu marca.

## 📊 Funcionalidades Futuras

- [ ] Sistema de notificaciones
- [ ] Reportes y estadísticas avanzadas
- [ ] Integración con sistemas externos
- [ ] App móvil
- [ ] Backup automático de base de datos

## 🐛 Solución de Problemas

### Error de conexión a base de datos
1. Verificar `DATABASE_URL` en `.env`
2. Asegurar que PostgreSQL esté ejecutándose
3. Verificar credenciales de acceso

### Error de migración
```bash
# Resetear base de datos
npx prisma migrate reset

# Ejecutar migraciones
npx prisma migrate dev
```

### Error de build en Vercel
1. Verificar que todas las variables de entorno estén configuradas
2. Asegurar que la base de datos esté accesible desde Vercel

## 📞 Soporte

Para soporte técnico o preguntas:
- Crear issue en GitHub
- Contactar al equipo de desarrollo

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS**
