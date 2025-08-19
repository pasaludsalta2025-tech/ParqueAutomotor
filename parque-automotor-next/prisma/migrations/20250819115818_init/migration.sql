-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."expedientes" (
    "id" TEXT NOT NULL,
    "numeroExpediente" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaModificacion" TIMESTAMP(3) NOT NULL,
    "marca" TEXT,
    "modelo" TEXT,
    "año" TEXT,
    "color" TEXT,
    "placa" TEXT,
    "vin" TEXT,
    "motor" TEXT,
    "transmision" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'creado',
    "prioridad" TEXT NOT NULL DEFAULT 'normal',
    "descripcion" TEXT,
    "observaciones" TEXT,
    "tipoExpediente" TEXT,
    "departamento" TEXT,
    "responsable" TEXT,
    "fechaLimite" TIMESTAMP(3),
    "costoEstimado" DOUBLE PRECISION,
    "costoReal" DOUBLE PRECISION,
    "creadoPorId" TEXT,
    "ejecutivoId" TEXT,
    "comprasId" TEXT,
    "finalizadoPorId" TEXT,

    CONSTRAINT "expedientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."historial_expedientes" (
    "id" TEXT NOT NULL,
    "expedienteId" TEXT NOT NULL,
    "accion" TEXT NOT NULL,
    "descripcion" TEXT,
    "usuarioId" TEXT,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datosAnteriores" JSONB,
    "datosNuevos" JSONB,

    CONSTRAINT "historial_expedientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."configuracion" (
    "id" TEXT NOT NULL,
    "clave" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "descripcion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "configuracion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_dni_key" ON "public"."users"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "expedientes_numeroExpediente_key" ON "public"."expedientes"("numeroExpediente");

-- CreateIndex
CREATE UNIQUE INDEX "configuracion_clave_key" ON "public"."configuracion"("clave");

-- AddForeignKey
ALTER TABLE "public"."expedientes" ADD CONSTRAINT "expedientes_creadoPorId_fkey" FOREIGN KEY ("creadoPorId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."expedientes" ADD CONSTRAINT "expedientes_ejecutivoId_fkey" FOREIGN KEY ("ejecutivoId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."expedientes" ADD CONSTRAINT "expedientes_comprasId_fkey" FOREIGN KEY ("comprasId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."expedientes" ADD CONSTRAINT "expedientes_finalizadoPorId_fkey" FOREIGN KEY ("finalizadoPorId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."historial_expedientes" ADD CONSTRAINT "historial_expedientes_expedienteId_fkey" FOREIGN KEY ("expedienteId") REFERENCES "public"."expedientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."historial_expedientes" ADD CONSTRAINT "historial_expedientes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
