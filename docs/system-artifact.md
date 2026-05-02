# System Artifact - Backend Feria Americana

## Proposito

Este documento describe los artefactos principales del backend de Feria Americana Store y como se relacionan entre si. Su objetivo es dejar una vista tecnica estable para mantenimiento, onboarding y futuras extensiones.

## Vista general del sistema

El backend esta construido con Node.js, Express, TypeScript, PostgreSQL y Prisma. Organiza capas tecnicas con responsabilidades separadas:

- capa de entrada HTTP con Express
- capa de rutas por modulo
- capa de controladores HTTP
- capa de servicios de negocio
- capa de repositorios de datos
- capa de modelos internos por modulo
- capa de autenticacion con JWT Bearer
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
- registrar CORS, JSON parser y middleware de errores
- montar routers publicos y protegidos sin declarar controladores inline

### 3. Convencion de capas por carpeta

Las responsabilidades viven en carpetas de capa al mismo nivel del arbol:

- `src/routes`: define endpoints y middleware de ruta.
- `src/controllers`: valida/lee entrada HTTP, llama servicios y serializa respuestas.
- `src/services`: contiene reglas de negocio, transformaciones y funcionamiento del caso de uso.
- `src/repositories`: encapsula acceso a datos y detalles de Prisma cuando aplica.
- `src/models`: declara estructuras de datos, contratos internos y tipos publicos.
- `src/validators`: contiene validaciones de payloads HTTP.

Los servicios no importan Prisma directamente. El acceso a datos entra por repositorios para evitar acoplar reglas de negocio a detalles de persistencia.

### 4. Configuracion de aplicacion

- [src/config/app.config.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/app.config.ts:1)

Responsabilidad:

- centralizar variables de entorno
- agrupar configuracion por secciones (`app`, `database`, `jwt`, `cors`, `storage`)
- validar configuracion minima segun el entorno

### 5. Endpoint health

- [src/routes/health.routes.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/routes/health.routes.ts:1)
- [src/controllers/health.controller.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/controllers/health.controller.ts:1)
- [src/services/health.service.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/services/health.service.ts:1)
- [src/models/health.model.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/models/health.model.ts:1)

Responsabilidad:

- exponer `GET /`
- devolver el estado basico del backend
- mantener el endpoint raiz fuera de `app.ts`

Capas:

- `health.routes.ts`: endpoint `GET /`
- `health.controller.ts`: respuesta HTTP `200`
- `health.service.ts`: construccion del estado
- `health.model.ts`: estructura `HealthStatus`

### 6. Autenticacion

- [src/routes/auth.routes.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/routes/auth.routes.ts:1)
- [src/controllers/auth.controller.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/controllers/auth.controller.ts:1)
- [src/services/auth.service.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/services/auth.service.ts:1)
- [src/repositories/auth.repository.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/repositories/auth.repository.ts:1)
- [src/models/auth.model.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/models/auth.model.ts:1)

Responsabilidad:

- exponer `POST /auth/register` y `POST /auth/login`
- exponer `GET /me` mediante middleware `requireAuth`
- validar payloads de autenticacion
- hashear contrasenas con `bcryptjs`
- firmar y verificar JWT con `jose`
- devolver solo datos publicos de usuario
- encapsular consultas de usuarios en `auth.repository.ts`

Capas:

- `auth.routes.ts`: endpoints `POST /auth/register`, `POST /auth/login` y `GET /me`
- `auth.controller.ts`: lectura de payloads, respuesta HTTP y delegacion al servicio
- `auth.service.ts`: hash de contrasenas, validacion de credenciales, estado de usuario, JWT y usuario publico
- `auth.repository.ts`: consultas y creacion de usuarios mediante Prisma
- `auth.model.ts`: estructuras de entrada, usuario interno, usuario publico y respuesta de autenticacion

### 7. Conexion PostgreSQL

- [src/config/database/connection.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/database/connection.ts:1)

Responsabilidad:

- validar que exista `DATABASE_URL` antes de conectar
- abrir y cerrar la conexion de Prisma
- exponer un punto estable de conexion para infraestructura y pruebas futuras

### 8. Cliente Prisma

- [src/infrastructure/persistence/prisma/client.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure/persistence/prisma/client.ts:1)
- [src/infrastructure/persistence/prisma/index.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure/persistence/prisma/index.ts:1)

Responsabilidad:

- instanciar un singleton de `PrismaClient`
- reutilizar el cliente en desarrollo para evitar multiples conexiones por recarga
- reexportar modelos y tipos generados por Prisma desde un modulo manual estable

### 9. Modelo y migraciones

- [prisma/schema.prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/schema.prisma:1)
- [prisma/migrations](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/migrations)

Responsabilidad:

- definir modelos, relaciones, enums y mapeos a tablas reales
- versionar el SQL aplicado a PostgreSQL
- mantener sincronizado el cliente tipado con el esquema del dominio

### 10. Documentacion de base de datos

- [database/README.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/database/README.md:1)

Responsabilidad:

- documentar tablas, campos, relaciones y reglas principales
- dejar criterios de modelado PostgreSQL

### 11. Trazabilidad de decisiones

- [prds/003-postgresql-prisma-migration.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prds/003-postgresql-prisma-migration.md:1)
- [prds/004-authentication.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prds/004-authentication.md:1)
- [prds/005-layered-backend-architecture.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prds/005-layered-backend-architecture.md:1)

Responsabilidad:

- registrar la decision vigente de persistencia
- dejar contexto para futuros cambios

## Flujo tecnico actual

1. El proceso arranca en `src/index.ts`.
2. `app.config.ts` carga y valida variables de entorno.
3. `connectDatabase()` abre la conexion PostgreSQL mediante Prisma.
4. Express inicializa CORS, JSON parser, rutas y middleware de errores en `src/app.ts`.
5. Los routers de modulo exponen endpoints y delegan en controladores.
6. Los controladores llaman servicios y serializan respuestas HTTP.
7. Los servicios aplican reglas de negocio y usan repositorios para datos.
8. Los repositorios usan `PrismaClient` desde `src/infrastructure/persistence/prisma`.

## Variables de entorno relevantes

- `PORT`: puerto del backend
- `DATABASE_URL`: URI de conexion PostgreSQL usada por Prisma
- `JWT_SECRET`: secreto de autenticacion
- `JWT_EXPIRE`: tiempo de expiracion de tokens JWT
- `CORS_ORIGIN`: origen permitido para CORS

## Observaciones de arquitectura

- PostgreSQL y Prisma son la estrategia unica de persistencia runtime.
- La autenticacion es stateless; el backend no persiste sesiones ni implementa logout server-side.
- Las rutas no contienen reglas de negocio ni consultas a datos.
- Los repositorios son la unica capa de modulo autorizada para consultar Prisma.
- `prisma/schema.prisma` define el contrato ORM y las migraciones versionan el SQL fisico.
- `src/config/database/connection.ts` se mantiene como punto estable para no dispersar la conexion a base de datos.
- El codigo generado de Prisma debe producirse con `npm run prisma:generate`; no se edita manualmente.
