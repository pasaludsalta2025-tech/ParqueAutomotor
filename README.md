# 🚗 Sistema de Control de Expedientes - Parque Automotor

Sistema web moderno para la gestión integral de expedientes del Parque Automotor, con control de roles, flujo de trabajo automatizado y diseño responsive.

## ✨ Características Principales

### 🔐 Sistema de Autenticación
- **Login/Registro** con DNI como identificador único
- **Control de roles** (ADMIN, MESA_DE_ENTRADA, PERSONAL)
- **Gestión de usuarios** con bloqueo/desbloqueo de cuentas

### 📋 Gestión de Expedientes
- **Creación y edición** de expedientes con validación completa
- **Flujo de trabajo** entre secciones (Creados → Ejecutivo/Compras → Finalizados)
- **Búsqueda por fecha** con filtros avanzados
- **Estados automáticos** (PENDIENTE, FINALIZADO)
- **Alertas** para expedientes pendientes más de 2 días
- **Eliminación** de expedientes con confirmación

### 🎯 Control de Accesos por Rol
- **ADMIN**: Acceso completo a todas las funcionalidades
- **MESA_DE_ENTRADA**: Puede crear expedientes, acceso limitado a configuración
- **PERSONAL**: Solo visualización y movimiento de expedientes

### 📱 Interfaz Moderna y Responsive
- **Diseño responsive** optimizado para móviles y tablets
- **Fuente Inter** para mejor legibilidad
- **Iconografía intuitiva** y navegación clara
- **Botones táctiles** optimizados para dispositivos móviles
- **Gradientes y animaciones** modernas

## 🚀 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Almacenamiento**: localStorage para persistencia de datos
- **Fuentes**: Google Fonts (Inter)
- **Iconos**: SVG integrados
- **Responsive**: CSS Grid y Flexbox
- **Backend**: Next.js 15 con Prisma (versión Next.js disponible)

## 📁 Estructura del Proyecto

```
ParqueAutomotor/
├── index.html                 # Página principal con login y dashboard
├── nuevo-expediente/
│   └── index.html            # Formulario de creación/edición
├── configuracion/
│   └── index.html            # Gestión de usuarios y roles
├── parque-automotor-next/    # Versión Next.js del proyecto
│   ├── src/
│   ├── prisma/
│   └── package.json
├── .gitignore                # Archivos a excluir de Git
└── README.md                 # Este archivo
```

## 🔧 Instalación y Uso

### Versión HTML (Actual)
1. Abre `index.html` en tu navegador web
2. No requiere instalación adicional
3. Los datos se guardan en localStorage del navegador

### Versión Next.js (Opcional)
```bash
cd parque-automotor-next
npm install
npm run dev
```

## 📱 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (versiones recientes)
- **Dispositivos**: Desktop, Tablet, Móvil
- **Resoluciones**: Optimizado para 320px - 1920px+

## 🎨 Características del Diseño

### Responsive Design
- **Desktop**: Layout de 3 columnas con sidebar
- **Tablet**: Layout de 2 columnas adaptativo
- **Móvil**: Layout de 1 columna con navegación optimizada

### Paleta de Colores
- **Primario**: Azul (#1e40af)
- **Secundario**: Azul claro (#3b82f6)
- **Éxito**: Verde (#10b981)
- **Advertencia**: Amarillo (#f59e0b)
- **Peligro**: Rojo (#ef4444)

## 🔄 Flujo de Trabajo

1. **Creación**: Los expedientes se crean en "Expedientes Creados"
2. **Asignación**: Se mueven a "Parque Automotor Ejecutivo" o "Centro de Compras"
3. **Finalización**: Se marcan como "FINALIZADO" cuando se completan
4. **Seguimiento**: Alertas automáticas para expedientes pendientes >2 días

## 🛠️ Funcionalidades Técnicas

### Gestión de Datos
- **Persistencia**: localStorage con sincronización automática
- **Validación**: Formularios con validación en tiempo real
- **Búsqueda**: Filtros por fecha y estado
- **Estadísticas**: Contadores automáticos de expedientes

### Optimizaciones Móviles
- **Touch-friendly**: Botones de 44px mínimo
- **Gestos**: Soporte para touch y swipe
- **Performance**: Carga optimizada para conexiones lentas
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

## 📊 Estadísticas y Reportes

- **Total de expedientes** por sección
- **Expedientes pendientes** con alertas
- **Expedientes finalizados** en el período
- **Tiempo promedio** de procesamiento

## 🔒 Seguridad

- **Validación de entrada** en todos los formularios
- **Sanitización** de datos antes de guardar
- **Control de acceso** basado en roles
- **Confirmaciones** para acciones destructivas

## 🚀 Próximas Mejoras

- [ ] Exportación a PDF/Excel
- [ ] Notificaciones push
- [ ] Modo offline
- [ ] Integración con APIs externas
- [ ] Dashboard con gráficos avanzados

## 📞 Soporte

Para reportar problemas o solicitar nuevas funcionalidades, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ para el Parque Automotor**