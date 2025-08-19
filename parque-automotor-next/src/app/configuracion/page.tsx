'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface User {
  id: string
  username: string
  dni: string
  nombre: string
  apellido: string
  role: string
}

export default function Configuracion() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddUser, setShowAddUser] = useState(false)
  const [newUser, setNewUser] = useState({
    username: '',
    dni: '',
    nombre: '',
    apellido: '',
    password: '',
    role: 'user'
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      if (response.ok) {
        const data = await response.json()
        setUsers(data.users || [])
      }
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
      })

      if (response.ok) {
        setNewUser({
          username: '',
          dni: '',
          nombre: '',
          apellido: '',
          password: '',
          role: 'user'
        })
        setShowAddUser(false)
        fetchUsers()
        alert('Usuario creado exitosamente')
      } else {
        const error = await response.json()
        alert(error.error || 'Error al crear usuario')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al crear usuario')
    }
  }

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      return
    }

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        fetchUsers()
        alert('Usuario eliminado exitosamente')
      } else {
        alert('Error al eliminar usuario')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al eliminar usuario')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-white text-xl">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Configuración
              </h1>
              <p className="text-blue-100">Administración del sistema</p>
            </div>
            <Link 
              href="/"
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
            >
              ← Volver al Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gestión de Usuarios */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Gestión de Usuarios</h2>
            <button
              onClick={() => setShowAddUser(!showAddUser)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {showAddUser ? 'Cancelar' : '+ Agregar Usuario'}
            </button>
          </div>

          {/* Formulario para agregar usuario */}
          {showAddUser && (
            <form onSubmit={handleAddUser} className="bg-white/10 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-100 text-sm font-medium mb-2">
                    Usuario *
                  </label>
                  <input
                    type="text"
                    value={newUser.username}
                    onChange={(e) => setNewUser(prev => ({ ...prev, username: e.target.value }))}
                    required
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Nombre de usuario"
                  />
                </div>

                <div>
                  <label className="block text-blue-100 text-sm font-medium mb-2">
                    DNI *
                  </label>
                  <input
                    type="text"
                    value={newUser.dni}
                    onChange={(e) => setNewUser(prev => ({ ...prev, dni: e.target.value }))}
                    required
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Número de DNI"
                  />
                </div>

                <div>
                  <label className="block text-blue-100 text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={newUser.nombre}
                    onChange={(e) => setNewUser(prev => ({ ...prev, nombre: e.target.value }))}
                    required
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Nombre"
                  />
                </div>

                <div>
                  <label className="block text-blue-100 text-sm font-medium mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    value={newUser.apellido}
                    onChange={(e) => setNewUser(prev => ({ ...prev, apellido: e.target.value }))}
                    required
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Apellido"
                  />
                </div>

                <div>
                  <label className="block text-blue-100 text-sm font-medium mb-2">
                    Contraseña *
                  </label>
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser(prev => ({ ...prev, password: e.target.value }))}
                    required
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Contraseña"
                  />
                </div>

                <div>
                  <label className="block text-blue-100 text-sm font-medium mb-2">
                    Rol
                  </label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser(prev => ({ ...prev, role: e.target.value }))}
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="user">Usuario</option>
                    <option value="admin">Administrador</option>
                    <option value="ejecutivo">Ejecutivo</option>
                    <option value="compras">Compras</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Crear Usuario
                </button>
              </div>
            </form>
          )}

          {/* Lista de usuarios */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-3 text-blue-100 font-medium">Usuario</th>
                  <th className="pb-3 text-blue-100 font-medium">DNI</th>
                  <th className="pb-3 text-blue-100 font-medium">Nombre Completo</th>
                  <th className="pb-3 text-blue-100 font-medium">Rol</th>
                  <th className="pb-3 text-blue-100 font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-white/10">
                    <td className="py-3 text-white font-medium">
                      {user.username}
                    </td>
                    <td className="py-3 text-blue-100">
                      {user.dni}
                    </td>
                    <td className="py-3 text-blue-100">
                      {user.nombre} {user.apellido}
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.role === 'admin' ? 'bg-red-100 text-red-800' :
                        user.role === 'ejecutivo' ? 'bg-yellow-100 text-yellow-800' :
                        user.role === 'compras' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                        title="Eliminar usuario"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {users.length === 0 && (
            <div className="text-center py-8">
              <div className="text-blue-200 text-lg">No hay usuarios registrados</div>
            </div>
          )}
        </div>

        {/* Configuración del Sistema */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Configuración del Sistema</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Base de Datos</h3>
              <div className="space-y-2 text-blue-100">
                <div>Estado: <span className="text-green-400">Conectado</span></div>
                <div>Proveedor: PostgreSQL</div>
                <div>Prisma ORM: Activo</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Seguridad</h3>
              <div className="space-y-2 text-blue-100">
                <div>Autenticación: JWT</div>
                <div>Encriptación: bcrypt</div>
                <div>Roles: Activos</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">API</h3>
              <div className="space-y-2 text-blue-100">
                <div>Rutas: /api/*</div>
                <div>Métodos: GET, POST, PUT, DELETE</div>
                <div>Validación: Activa</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Frontend</h3>
              <div className="space-y-2 text-blue-100">
                <div>Framework: Next.js 15</div>
                <div>Styling: Tailwind CSS</div>
                <div>TypeScript: Activo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
