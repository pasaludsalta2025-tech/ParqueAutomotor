# Sistema de URLs - Parque Automotor

## 🔗 URLs Disponibles

El sistema ahora cuenta con URLs únicas para cada sección, permitiendo compartir enlaces directos y usar el botón de retroceso del navegador.

### URLs Públicas (Sin autenticación)
- **`/`** - Página inicial (redirige a login o dashboard según autenticación)
- **`/login`** - Página de inicio de sesión
- **`/register`** - Página de registro de usuarios

### URLs Protegidas (Requieren autenticación)
- **`/dashboard`** - Panel principal con todos los expedientes
- **`/config`** - Página de configuración de usuario
- **`/nuevo-expediente`** - Formulario para crear nuevo expediente
- **`/rol-pendiente`** - Página mostrada cuando el usuario no tiene rol asignado

## 🚀 Características Implementadas

### 1. Navegación con Historial
- ✅ Botón "Atrás" del navegador funciona correctamente
- ✅ Botón "Adelante" del navegador funciona correctamente
- ✅ URLs se actualizan sin recargar la página (SPA)

### 2. Protección de Rutas
- ✅ Rutas protegidas redirigen a `/login` si no hay autenticación
- ✅ Usuarios sin rol son redirigidos a `/rol-pendiente`
- ✅ Usuarios autenticados con rol acceden directamente al dashboard

### 3. Enlaces Directos
Puedes compartir URLs directas:
```
https://parque-automotor.vercel.app/dashboard
https://parque-automotor.vercel.app/nuevo-expediente
https://parque-automotor.vercel.app/config
```

### 4. Configuración de Servidor

#### Para Vercel
El archivo `vercel.json` está configurado para:
- Redirigir todas las rutas a `index.html`
- Cachear archivos estáticos (CSS, JS, imágenes)
- Configurar headers de seguridad

#### Para Firebase Hosting
El archivo `firebase.json` está configurado para:
- Reescribir todas las rutas a `index.html`
- Configurar cache para archivos estáticos
- Agregar headers de seguridad

#### Para Apache
El archivo `.htaccess` está configurado para:
- Habilitar mod_rewrite
- Redirigir todas las rutas a `index.html`
- Configurar cache y seguridad

## 💻 Uso Programático

### Navegar a una ruta
```javascript
navigateTo('/dashboard');
navigateTo('/config');
navigateTo('/nuevo-expediente');
```

### Obtener ruta actual
```javascript
const currentPath = window.location.pathname;
console.log('Ruta actual:', currentPath);
```

### Agregar nueva ruta
Para agregar una nueva ruta, editar el objeto `ROUTES` en el código:

```javascript
const ROUTES = {
    '/': 'loginPage',
    '/login': 'loginPage',
    '/register': 'registerPage',
    '/dashboard': 'mainPage',
    '/config': 'configPage',
    '/nuevo-expediente': 'newExpedienteModal',
    '/rol-pendiente': 'rolePendingPage',
    '/mi-nueva-ruta': 'elementoId' // <- Nueva ruta
};
```

Luego agregar el caso en el switch de `renderRoute()`:

```javascript
case '/mi-nueva-ruta':
    document.getElementById('mainPage').style.display = '';
    mostrarMiNuevaSeccion();
    break;
```

## 🔒 Seguridad

El sistema de URLs incluye:
- ✅ Validación de autenticación antes de mostrar contenido protegido
- ✅ Verificación de roles para acceso a funciones específicas
- ✅ Redirección automática a login si la sesión expira
- ✅ Headers de seguridad (X-Frame-Options, X-XSS-Protection, etc.)

## 📱 Compartir URLs

Ahora puedes compartir URLs específicas con otros usuarios:

1. **Compartir un expediente específico**: 
   - Futura implementación: `/expediente/[codigo]`

2. **Compartir la página de configuración**:
   ```
   https://parque-automotor.vercel.app/config
   ```

3. **Compartir el formulario de nuevo expediente**:
   ```
   https://parque-automotor.vercel.app/nuevo-expediente
   ```

## 🐛 Debugging

Para ver logs de navegación en la consola:
```javascript
console.log('🔗 Navegando a:', path);
```

Cada cambio de ruta muestra en la consola del navegador la ruta a la que se está navegando.

## ✅ Testing

Para probar el sistema de URLs:

1. **Test de navegación básica**:
   - Abrir `/login`
   - Iniciar sesión
   - Verificar redirección a `/dashboard`

2. **Test de botón atrás**:
   - Navegar a `/config`
   - Presionar botón atrás
   - Verificar retorno a `/dashboard`

3. **Test de enlaces directos**:
   - Copiar URL de una sección
   - Abrir en nueva pestaña
   - Verificar que funciona correctamente

4. **Test de protección de rutas**:
   - Cerrar sesión
   - Intentar acceder a `/dashboard`
   - Verificar redirección a `/login`

## 📝 Notas Importantes

1. **Recarga de página**: Al recargar la página, el sistema leerá la URL actual y mostrará la sección correspondiente.

2. **Compatibilidad**: El sistema funciona en todos los navegadores modernos que soporten `history.pushState()`.

3. **SEO**: Para mejorar SEO, considera implementar Server-Side Rendering (SSR) en el futuro.

4. **URLs con parámetros**: Para implementar URLs con parámetros (ej: `/expediente/123`), se debe actualizar la función `renderRoute()` para parsear parámetros.

## 🎯 Próximas Mejoras

- [ ] URLs con parámetros: `/expediente/[codigo]`
- [ ] Breadcrumbs basados en URL
- [ ] Pre-carga de datos según URL
- [ ] Meta tags dinámicos según ruta
- [ ] Transiciones animadas entre rutas

