# System Artifact - Backend Feria Americana

## Proposito

Este documento describe los artefactos principales del backend de Feria Americana Store y como se relacionan entre si. Su objetivo es dejar una vista tecnica estable para mantenimiento, onboarding y futuras extensiones.

## Vista general del sistema

El backend esta construido con Node.js, Express, TypeScript, PostgreSQL y Prisma. Organiza tres capas tecnicas principales:

- capa de entrada HTTP con Express
- capa de configuracion y conectividad
- capa de persistencia relacional con Prisma

El sistema esta orientado a un dominio de ecommerce con estas tablas principales:

- `usuarios`
- `productos`
- `carrito`
- `carrito_items`
- `lista_deseos`
- `lista_deseos_items`
- `pedidos`
- `pedido_items`

## Artefactos principales

### 1. Punto de entrada

- [src/index.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/index.ts:1)

Responsabilidad:

- conectar PostgreSQL mediante Prisma antes de levantar el servidor HTTP
- iniciar Express con el puerto configurado

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

### 4. Conexion PostgreSQL

- [src/config/database/connection.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/database/connection.ts:1)

Responsabilidad:

- validar que exista `DATABASE_URL` antes de conectar
- abrir y cerrar la conexion de Prisma
- exponer un punto estable de conexion para infraestructura y pruebas futuras

### 5. Cliente Prisma

- [src/infrastructure/persistence/prisma/client.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure/persistence/prisma/client.ts:1)
- [src/infrastructure/persistence/prisma/index.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure/persistence/prisma/index.ts:1)

Responsabilidad:

- instanciar un singleton de `PrismaClient`
- reutilizar el cliente en desarrollo para evitar multiples conexiones por recarga
- reexportar modelos y tipos generados por Prisma desde un modulo manual estable

### 6. Modelo y migraciones

- [prisma/schema.prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/schema.prisma:1)
- [prisma/migrations](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/migrations)

Responsabilidad:

- definir modelos, relaciones, enums y mapeos a tablas reales
- versionar el SQL aplicado a PostgreSQL
- mantener sincronizado el cliente tipado con el esquema del dominio

### 7. Documentacion de base de datos

- [database/README.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/database/README.md:1)

Responsabilidad:

- documentar tablas, campos, relaciones y reglas principales
- dejar criterios de modelado PostgreSQL

### 8. Trazabilidad de decisiones

- [prds/003-postgresql-prisma-migration.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prds/003-postgresql-prisma-migration.md:1)

Responsabilidad:

- registrar la decision vigente de persistencia
- dejar contexto para futuros cambios

## Flujo tecnico actual

1. El proceso arranca en `src/index.ts`.
2. `app.config.ts` carga y valida variables de entorno.
3. `connectDatabase()` abre la conexion PostgreSQL mediante Prisma.
4. Express inicializa middlewares y rutas en `src/app.ts`.
5. La capa de persistencia usa `PrismaClient` desde `src/infrastructure/persistence/prisma`.

## Variables de entorno relevantes

- `PORT`: puerto del backend
- `DATABASE_URL`: URI de conexion PostgreSQL usada por Prisma
- `JWT_SECRET`: secreto de autenticacion
- `CORS_ORIGIN`: origen permitido para CORS

## Observaciones de arquitectura

- PostgreSQL y Prisma son la estrategia unica de persistencia runtime.
- `prisma/schema.prisma` define el contrato ORM y las migraciones versionan el SQL fisico.
- `src/config/database/connection.ts` se mantiene como punto estable para no dispersar la conexion a base de datos.
- El codigo generado de Prisma debe producirse con `npm run prisma:generate`; no se edita manualmente.
