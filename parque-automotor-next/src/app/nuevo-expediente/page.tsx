'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NuevoExpediente() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    numeroExpediente: '',
    marca: '',
    modelo: '',
    año: '',
    color: '',
    placa: '',
    vin: '',
    motor: '',
    transmision: '',
    descripcion: '',
    observaciones: '',
    tipoExpediente: '',
    departamento: '',
    responsable: '',
    prioridad: 'normal',
    fechaLimite: '',
    costoEstimado: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/expedientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          costoEstimado: formData.costoEstimado ? parseFloat(formData.costoEstimado) : null,
          fechaLimite: formData.fechaLimite || null
        })
      })

      if (response.ok) {
        router.push('/')
      } else {
        const error = await response.json()
        alert(error.error || 'Error al crear expediente')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al crear expediente')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Nuevo Expediente
              </h1>
              <p className="text-blue-100">Crear nuevo expediente en el sistema</p>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          {/* Información del Expediente */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Información del Expediente</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Número de Expediente *
                </label>
                <input
                  type="text"
                  name="numeroExpediente"
                  value={formData.numeroExpediente}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ej: EXP-2024-001"
                />
              </div>
              
              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Tipo de Expediente
                </label>
                <select
                  name="tipoExpediente"
                  value={formData.tipoExpediente}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Seleccionar tipo</option>
                  <option value="mantenimiento">Mantenimiento</option>
                  <option value="reparacion">Reparación</option>
                  <option value="inspeccion">Inspección</option>
                  <option value="compra">Compra</option>
                  <option value="venta">Venta</option>
                </select>
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Departamento
                </label>
                <input
                  type="text"
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ej: Mecánica"
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Responsable
                </label>
                <input
                  type="text"
                  name="responsable"
                  value={formData.responsable}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Nombre del responsable"
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Prioridad
                </label>
                <select
                  name="prioridad"
                  value={formData.prioridad}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="baja">Baja</option>
                  <option value="normal">Normal</option>
                  <option value="alta">Alta</option>
                  <option value="urgente">Urgente</option>
                </select>
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Fecha Límite
                </label>
                <input
                  type="date"
                  name="fechaLimite"
                  value={formData.fechaLimite}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>

          {/* Información del Vehículo */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Información del Vehículo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Marca
                </label>
                <input
                  type="text"
                  name="marca"
                  value={formData.marca}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ej: Toyota"
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Modelo
                </label>
                <input
                  type="text"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ej: Corolla"
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Año
                </label>
                <input
                  type="text"
                  name="año"
                  value={formData.año}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ej: 2020"
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ej: Blanco"
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Placa
                </label>
                <input
                  type="text"
                  name="placa"
                  value={formData.placa}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ej: ABC-123"
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  VIN
                </label>
                <input
                  type="text"
                  name="vin"
                  value={formData.vin}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Número de identificación del vehículo"
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Motor
                </label>
                <input
                  type="text"
                  name="motor"
                  value={formData.motor}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ej: 2.0L 4-Cylinder"
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Transmisión
                </label>
                <input
                  type="text"
                  name="transmision"
                  value={formData.transmision}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ej: Automática 6 velocidades"
                />
              </div>
            </div>
          </div>

          {/* Información Adicional */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Información Adicional</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Descripción
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Descripción detallada del expediente..."
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Observaciones
                </label>
                <textarea
                  name="observaciones"
                  value={formData.observaciones}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Observaciones adicionales..."
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Costo Estimado
                </label>
                <input
                  type="number"
                  name="costoEstimado"
                  value={formData.costoEstimado}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-end space-x-4">
            <Link
              href="/"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white rounded-lg transition-colors"
            >
              {loading ? 'Creando...' : 'Crear Expediente'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
