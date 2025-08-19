'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Expediente {
  id: string
  numeroExpediente: string
  estado: string
  marca?: string
  modelo?: string
  placa?: string
  prioridad: string
  fechaCreacion: string
  creadoPor?: {
    nombre: string
    apellido: string
  }
}

interface DashboardStats {
  total: number
  creados: number
  enEjecutivo: number
  enCompras: number
  finalizados: number
}

export default function Dashboard() {
  const [expedientes, setExpedientes] = useState<Expediente[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    total: 0,
    creados: 0,
    enEjecutivo: 0,
    enCompras: 0,
    finalizados: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchExpedientes()
  }, [])

  const fetchExpedientes = async () => {
    try {
      const response = await fetch('/api/expedientes?limit=10')
      const data = await response.json()
      
      if (data.expedientes) {
        setExpedientes(data.expedientes)
        
        // Calcular estadísticas
        const stats = data.expedientes.reduce((acc: DashboardStats, exp: Expediente) => {
          acc.total++
          switch (exp.estado) {
            case 'creado':
              acc.creados++
              break
            case 'en_ejecutivo':
              acc.enEjecutivo++
              break
            case 'en_compras':
              acc.enCompras++
              break
            case 'finalizado':
              acc.finalizados++
              break
          }
          return acc
        }, { total: 0, creados: 0, enEjecutivo: 0, enCompras: 0, finalizados: 0 })
        
        setStats(stats)
      }
    } catch (error) {
      console.error('Error fetching expedientes:', error)
    } finally {
      setLoading(false)
    }
  }

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'creado':
        return 'bg-blue-100 text-blue-800'
      case 'en_ejecutivo':
        return 'bg-yellow-100 text-yellow-800'
      case 'en_compras':
        return 'bg-purple-100 text-purple-800'
      case 'finalizado':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case 'urgente':
        return 'bg-red-100 text-red-800'
      case 'alta':
        return 'bg-orange-100 text-orange-800'
      case 'normal':
        return 'bg-blue-100 text-blue-800'
      case 'baja':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
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
                Parque Automotor
              </h1>
              <p className="text-blue-100">Sistema de Control de Expedientes</p>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/nuevo-expediente"
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Nuevo Expediente
              </Link>
              <Link 
                href="/configuracion"
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Configuración
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white">{stats.total}</div>
            <div className="text-blue-100">Total</div>
          </div>
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white">{stats.creados}</div>
            <div className="text-blue-100">Creados</div>
          </div>
          <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white">{stats.enEjecutivo}</div>
            <div className="text-blue-100">En Ejecutivo</div>
          </div>
          <div className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white">{stats.enCompras}</div>
            <div className="text-blue-100">En Compras</div>
          </div>
          <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white">{stats.finalizados}</div>
            <div className="text-blue-100">Finalizados</div>
          </div>
        </div>

        {/* Expedientes Recientes */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Expedientes Recientes</h2>
            <Link 
              href="/expedientes"
              className="text-blue-200 hover:text-white transition-colors"
            >
              Ver todos →
            </Link>
          </div>

          {expedientes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-blue-200 text-lg mb-4">No hay expedientes aún</div>
              <Link 
                href="/nuevo-expediente"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Crear Primer Expediente
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="pb-3 text-blue-100 font-medium">Número</th>
                    <th className="pb-3 text-blue-100 font-medium">Vehículo</th>
                    <th className="pb-3 text-blue-100 font-medium">Estado</th>
                    <th className="pb-3 text-blue-100 font-medium">Prioridad</th>
                    <th className="pb-3 text-blue-100 font-medium">Creado Por</th>
                    <th className="pb-3 text-blue-100 font-medium">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {expedientes.map((expediente) => (
                    <tr key={expediente.id} className="border-b border-white/10">
                      <td className="py-3 text-white font-medium">
                        {expediente.numeroExpediente}
                      </td>
                      <td className="py-3 text-blue-100">
                        {expediente.marca && expediente.modelo 
                          ? `${expediente.marca} ${expediente.modelo}`
                          : expediente.placa || 'Sin información'
                        }
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEstadoColor(expediente.estado)}`}>
                          {expediente.estado.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPrioridadColor(expediente.prioridad)}`}>
                          {expediente.prioridad}
                        </span>
                      </td>
                      <td className="py-3 text-blue-100">
                        {expediente.creadoPor 
                          ? `${expediente.creadoPor.nombre} ${expediente.creadoPor.apellido}`
                          : 'N/A'
                        }
                      </td>
                      <td className="py-3 text-blue-100">
                        {new Date(expediente.fechaCreacion).toLocaleDateString('es-ES')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
