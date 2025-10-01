# 🚀 INSTRUCCIONES DE DESPLIEGUE FIREBASE

## 📋 **COMANDOS A EJECUTAR EN ORDEN:**

### **1️⃣ Instalar Firebase CLI (Solo la primera vez):**
```bash
npm install -g firebase-tools
```

### **2️⃣ Autenticarse con Firebase:**
```bash
firebase login
```
- Se abrirá tu navegador
- Ingresa con la misma cuenta de Google que usaste para crear el proyecto Firebase
- Autoriza Firebase CLI

### **3️⃣ Activar Realtime Database (IMPORTANTE):**

**ANTES de continuar, debes activar Realtime Database:**

1. Ve a: https://console.firebase.google.com/project/parque-automotor-db88c
2. En el menú izquierdo: **"Realtime Database"**
3. Click **"Crear base de datos"**
4. Selecciona región (ej: us-central1)
5. **Selecciona "Comenzar en modo de prueba"**
6. Click **"Listo"**

### **4️⃣ Configurar Firebase Hosting:**

Ve a Firebase Console > Hosting:
1. https://console.firebase.google.com/project/parque-automotor-db88c/hosting
2. Click **"Comenzar"**
3. Sigue los pasos hasta llegar a la configuración del sitio
4. Crea un sitio llamado: **"parque-automotor-salta"**

### **5️⃣ Desplegar la aplicación:**
```bash
firebase deploy --only hosting:parque-automotor-salta
```

### **6️⃣ Configurar reglas de base de datos:**
```bash
firebase deploy --only database
```

---

## 🎯 **RESULTADO ESPERADO:**

✅ **URL de tu aplicación:** https://parque-automotor-salta.web.app/

✅ **Base de datos compartida:** Todos los usuarios verán los mismos expedientes

✅ **Sincronización en tiempo real:** Los cambios aparecen inmediatamente

---

## 🔧 **SI HAY PROBLEMAS:**

### **Error: "Project not found"**
```bash
firebase use parque-automotor-db88c
```

### **Error: "Site not found"**
1. Ve a Firebase Console > Hosting
2. Crea el sitio "parque-automotor-salta"
3. Intenta el deploy nuevamente

### **Error: "Permission denied"**
- Verifica que estés logueado: `firebase login`
- Verifica que tengas permisos en el proyecto Firebase

---

## 📱 **CÓMO PROBAR LA SINCRONIZACIÓN:**

1. Abre la URL en tu computadora
2. Crea un expediente
3. Abre la misma URL en tu celular
4. ¡Deberías ver el expediente inmediatamente!

---

## ⚡ **COMANDOS RÁPIDOS PARA ACTUALIZACIONES:**

```bash
# Subir solo cambios de código
firebase deploy --only hosting:parque-automotor-salta

# Subir cambios de base de datos
firebase deploy --only database

# Subir todo
firebase deploy
```

---

## 🎉 **¡LISTO!**

Una vez desplegado, tendrás:
- ✅ Aplicación web accesible desde cualquier lugar
- ✅ Base de datos compartida entre todos los usuarios
- ✅ Sincronización automática en tiempo real
- ✅ URL permanente para compartir

**¡Todos los usuarios podrán ver exactamente los mismos expedientes desde cualquier dispositivo!**

