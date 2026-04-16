# System Artifact - Backend Feria Americana

## Proposito

Este documento describe los artefactos principales del backend de Feria Americana Store y como se relacionan entre si. Su objetivo es dejar una vista tecnica estable del sistema para mantenimiento, onboarding y futuras extensiones.

## Vista general del sistema

El backend esta construido con Node.js, Express y TypeScript. Actualmente organiza tres capas tecnicas principales:

- capa de entrada HTTP con Express
- capa de configuracion y conectividad
- capa de persistencia y modelos

El sistema esta orientado a un dominio de ecommerce con estas entidades principales:

- usuarios
- productos
- carrito
- carrito_items
- lista_deseos
- lista_deseos_items
- pedidos
- pedido_items

## Artefactos principales

### 1. Punto de entrada

- [src/index.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/index.ts:1)

Responsabilidad:

- iniciar el servidor HTTP
- leer configuracion centralizada desde `app.config.ts`

### 2. Aplicacion HTTP

- [src/app.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/app.ts:1)

Responsabilidad:

- crear la instancia de Express
- registrar middlewares
- montar rutas

### 3. Configuracion de aplicacion

- [src/config/app.config.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/app.config.ts:1)

Responsabilidad:

- centralizar variables de entorno
- agrupar configuracion por secciones (`app`, `database`, `jwt`, `cors`, `storage`)
- validar configuracion minima segun el entorno

### 4. Cliente de Supabase

- [src/config/database/connection.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/database/connection.ts:1)

Responsabilidad:

- crear un cliente singleton de Supabase basado en `SUPABASE_URL` y `SUPABASE_KEY`

### 5. ORM y acceso a persistencia

- [prisma/schema.prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/schema.prisma:1)
- [generated/prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/generated/prisma)
- [src/infrastructure/persistence/prisma/client.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure/persistence/prisma/client.ts:1)

Responsabilidad:

- traducir el esquema SQL a modelos Prisma
- mantener separado el codigo generado del codigo manual
- ofrecer un adaptador de infraestructura estable para el resto del backend

### 6. Definicion fisica de base de datos

- [database/feria-americana.sql](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/database/feria-americana.sql:1)
- [database/README.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/database/README.md:1)

Responsabilidad:

- definir tablas, restricciones e indices
- documentar el modelo relacional y los datos de prueba

### 7. Trazabilidad de decisiones

- [prds/001-supabase-config-migration.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prds/001-supabase-config-migration.md:1)
- [prds/002-prisma-models-from-sql.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prds/002-prisma-models-from-sql.md:1)

Responsabilidad:

- registrar decisiones de arquitectura y persistencia
- dejar contexto para futuros cambios

## Flujo tecnico actual

1. El proceso arranca en `src/index.ts`.
2. `app.config.ts` carga y valida variables de entorno.
3. Express inicializa middlewares y rutas en `src/app.ts`.
4. La capa de persistencia puede usar:
   - `supabase-js` para integracion directa con Supabase
   - Prisma para acceso tipado a PostgreSQL mediante `DATABASE_URL`
5. El modelo de datos base sigue siendo el definido en `database/feria-americana.sql`.

## Variables de entorno relevantes

- `PORT`: puerto del backend
- `DATABASE_URL`: conexion PostgreSQL usada por Prisma
- `SUPABASE_URL`: URL del proyecto Supabase
- `SUPABASE_KEY`: clave usada por el cliente Supabase
- `JWT_SECRET`: secreto de autenticacion
- `CORS_ORIGIN`: origen permitido para CORS

## Observaciones de arquitectura

- Hoy conviven dos mecanismos de acceso a datos: `supabase-js` y Prisma.
- Prisma se incorporo como capa ORM tipada, con el esquema en `prisma/`, el cliente generado en `generated/` y el adaptador manual en `src/infrastructure/`.
- Si el backend evoluciona hacia una unica estrategia de persistencia, debera decidirse si Prisma sera la capa principal o si Supabase seguira siendo el acceso predominante.
