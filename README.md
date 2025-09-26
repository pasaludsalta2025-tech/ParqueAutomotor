# 🚗 Sistema de Gestión de Expedientes - Parque Automotor

Sistema integral para la gestión de expedientes automotores con sincronización cross-device y flujo bidireccional.

## 🌟 Características Principales

### 🌐 Sistema Global
- ✅ **Expedientes visibles para todos los usuarios** desde cualquier dispositivo
- ✅ **Sincronización automática** entre computadoras, tablets y celulares
- ✅ **Acceso universal** sin restricciones de ubicación

### 🔄 Flujo Bidireccional
- ✅ **Movimiento libre** entre todas las secciones:
  - Expedientes Creados ↔ Parque Automotor Ejecutivo ↔ Compras
- ✅ **Botón FINALIZAR** disponible en todas las secciones
- ✅ **Controles unificados** en toda la aplicación

### 📱💻 Sincronización Cross-Device
- ✅ **URL de sincronización automática** 
- ✅ **Copiar y pegar** entre dispositivos
- ✅ **Actualización en tiempo real**
- ✅ **Compatible con todos los navegadores**

## 🚀 Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Almacenamiento**: localStorage, sessionStorage, URL Hash
- **Sincronización**: BroadcastChannel, Custom Events
- **Estilos**: CSS Grid, Flexbox, Gradientes modernos

## 📋 Funcionalidades

### 📄 Gestión de Expedientes
- ✅ Crear, editar y eliminar expedientes
- ✅ Seguimiento de estados (Pendiente/Finalizado)
- ✅ Cálculo automático de días de trámite
- ✅ Campos completos (código, número, corresponde, derivado, etc.)

### 👥 Sistema de Usuarios
- ✅ Autenticación por DNI
- ✅ Roles: ADMIN, MESA_DE_ENTRADA, PERSONAL
- ✅ Registro automático de usuarios
- ✅ Panel de configuración

### 🏢 Secciones del Sistema
1. **Expedientes Creados** - Punto de entrada principal
2. **Parque Automotor Ejecutivo** - Gestión ejecutiva  
3. **Centro de Compras** - Gestión de compras
4. **Expedientes Finalizados** - Archivo histórico

## 💻 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/[tu-usuario]/sistema-parque-automotor.git
   ```

2. **Abrir el archivo:**
   ```bash
   cd sistema-parque-automotor
   # Abrir index.html en tu navegador
   ```

3. **Usuario Admin por defecto:**
   - **Usuario:** 35477889
   - **Contraseña:** 35477889

## 📱 Cómo usar la Sincronización Cross-Device

1. **Crear expedientes** en cualquier dispositivo
2. **Copiar la URL** del panel azul de sincronización
3. **Pegar la URL** en otro dispositivo
4. **¡Los expedientes aparecen automáticamente!**

## 🔧 Configuración

- **Acceso universal**: Todos los usuarios pueden ver todos los expedientes
- **Roles diferenciados**: Diferentes permisos según el rol del usuario
- **Almacenamiento persistente**: Los datos se mantienen entre sesiones
- **Responsive**: Compatible con móviles y tablets

## 📊 Estados del Sistema

- 🟢 **Sistema Global Activo** - Expedientes visibles universalmente
- 🔄 **Flujo Bidireccional** - Movimiento libre entre secciones
- 📱 **Sync Cross-Device** - Sincronización entre dispositivos

## 🛠️ Desarrollo

El sistema está construido como una Single Page Application (SPA) con:

- **Arquitectura modular** con funciones especializadas
- **Sistema de eventos** para sincronización en tiempo real
- **Almacenamiento múltiple** para máxima compatibilidad
- **Interface responsive** para todos los dispositivos

## 📝 Próximas Mejoras

- [ ] API backend para sincronización real
- [ ] Base de datos centralizada
- [ ] Notificaciones push
- [ ] Reportes y estadísticas
- [ ] Backup automático

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

---

**Desarrollado por [Tu Nombre]** - Sistema de Gestión de Expedientes Automotores