# 🚗 Control de Expediente - Parque Automotor

Sistema web para la gestión integral de expedientes del Parque Automotor, con control de roles y flujo de trabajo automatizado.

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

### 🎯 Control de Accesos por Rol
- **ADMIN**: Acceso completo a todas las funcionalidades
- **MESA_DE_ENTRADA**: Puede crear expedientes, acceso limitado a configuración
- **PERSONAL**: Solo visualización y movimiento de expedientes

### 📱 Interfaz Moderna
- **Diseño responsive** con gradientes y animaciones
- **Fuente Inter** para mejor legibilidad
- **Iconografía intuitiva** y navegación clara

## 🚀 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Almacenamiento**: localStorage para persistencia de datos
- **Fuentes**: Google Fonts (Inter)
- **Iconos**: SVG integrados
- **Responsive**: CSS Grid y Flexbox

## 📁 Estructura del Proyecto

 ```
 ParqueAutomotor/
 ├── index.html                 # Página principal con login y dashboard
 ├── nuevo-expediente/
 │   └── index.html            # Formulario de creación/edición
 ├── configuracion/
 │   └── index.html            # Gestión de usuarios y roles
 ├── .gitignore                # Archivos a excluir de Git
 └── README.md                 # Este archivo
 ```

## 🔧 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local o hosting

### Instalación Local
1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/pasaludsalta2025-tech/ParqueAutomotor.git
   cd ParqueAutomotor
   ```

2. **Servir archivos estáticos**
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js
   npx http-server -p 8000
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Abrir en navegador**
   ```
   http://localhost:8000
   ```

### Usuarios por Defecto
- **ADMIN**: `35477889` / `35477889`
- **MESA_DE_ENTRADA**: `12345678` / `12345678`
- **PERSONAL**: `87654321` / `87654321`

## 📊 Funcionalidades por Rol

| Funcionalidad | ADMIN | MESA_DE_ENTRADA | PERSONAL |
|---------------|-------|------------------|----------|
| Crear Expedientes | ✅ | ✅ | ❌ |
| Ver Expedientes | ✅ | ✅ | ✅ |
| Mover Expedientes | ✅ | ✅ | ✅ |
| Gestión de Usuarios | ✅ | ❌ | ❌ |
| Configuración Completa | ✅ | ❌ | ❌ |

## 🔄 Flujo de Expedientes

1. **Creación** → Expediente en estado "CREADO"
2. **Derivación** → Enviado a "Parque Automotor Ejecutivo" o "Compras"
3. **Procesamiento** → Estado "PENDIENTE" en sección correspondiente
4. **Finalización** → Retorno a "Expedientes Creados" como "FINALIZADO"
5. **Almacenamiento** → Expedientes finalizados son permanentes

## 🎨 Personalización

### Colores del Tema
```css
:root {
  --primary-blue: #1e40af;
  --primary-blue-light: #3b82f6;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
}
```

### Fuentes
- **Principal**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI'

## 📝 Notas de Desarrollo

- **localStorage**: Todos los datos se almacenan localmente en el navegador
- **Responsive**: Diseño adaptativo para dispositivos móviles y desktop
- **Accesibilidad**: Uso de atributos ARIA y navegación por teclado
- **Validación**: Validación del lado cliente con mensajes en español

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre** - [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

## 🙏 Agradecimientos

- Google Fonts por la tipografía Inter
- Comunidad de desarrolladores web
- Usuarios del Parque Automotor por el feedback

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!**
