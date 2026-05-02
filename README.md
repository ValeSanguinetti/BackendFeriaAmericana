# Backend Feria Americana

Backend de Node.js + Express para la gestion de usuarios, catalogo, carrito, lista de deseos y pedidos de Feria Americana Store.

## Requisitos

- Node.js 20 o superior
- PostgreSQL accesible mediante `DATABASE_URL`

## Scripts

- `npm run dev`: arranca el servidor en modo desarrollo con recarga usando `tsx`
- `npm run build`: genera Prisma Client y compila TypeScript a `dist/`
- `npm run start`: ejecuta la version compilada
- `npm run typecheck`: valida tipos sin generar salida
- `npm run test`: ejecuta pruebas automatizadas con Vitest
- `npm run prisma:generate`: genera Prisma Client desde `prisma/schema.prisma`
- `npm run prisma:migrate`: crea/aplica migraciones en desarrollo
- `npm run prisma:deploy`: aplica migraciones pendientes en despliegues

## API de autenticacion

El backend usa autenticacion propia con JWT Bearer.

- `POST /auth/register`: crea usuario, hashea contrasena y devuelve `{ token, expiresIn, user }`
- `POST /auth/login`: valida credenciales y devuelve `{ token, expiresIn, user }`
- `GET /me`: requiere `Authorization: Bearer <token>` y devuelve `{ user }`

El usuario publico tiene esta forma:

```json
{
  "id": 1,
  "name": "Nombre Usuario",
  "email": "usuario@example.com",
  "phone": null,
  "status": "activo",
  "registeredAt": "2026-04-30T12:00:00.000Z"
}
```

`contrasena` nunca se devuelve en respuestas HTTP.

## Configuracion

- [src/config/app.config.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/app.config.ts:1): singleton de configuracion agrupado por secciones para app, PostgreSQL, JWT, CORS y storage
- [src/config/database/connection.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/database/connection.ts:1): conexion centralizada a PostgreSQL mediante Prisma
- [src/infrastructure/persistence/prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure/persistence/prisma): cliente Prisma singleton y exportaciones de persistencia
- [prisma/schema.prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/schema.prisma:1): modelos ORM, relaciones y mapeo a tablas PostgreSQL
- [prisma/migrations](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/migrations): migraciones SQL versionadas

## Estructura

- [src/app.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/app.ts:1): define y exporta la app de Express
- [src/index.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/index.ts:1): conecta PostgreSQL y levanta el servidor
- [src/config/](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config): configuracion de aplicacion y acceso a base de datos
- [src/routes](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/routes): endpoints HTTP por recurso
- [src/controllers](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/controllers): mapeo de entrada/salida HTTP
- [src/services](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/services): logica de negocio y funcionamiento
- [src/repositories](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/repositories): acceso a datos
- [src/models](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/models): estructuras y contratos de datos
- [src/validators](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/validators): validaciones de payloads HTTP
- [src/infrastructure/](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure): adaptadores manuales de infraestructura
- [database/README.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/database/README.md:1): documentacion del modelo relacional
- [docs/system-artifact.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/docs/system-artifact.md:1): vista tecnica de los componentes vigentes
- [docs/prisma.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/docs/prisma.md:1): guia operativa de Prisma en el proyecto
- [prds/](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prds): PRDs y decisiones tecnicas del backend

## Convencion de capas

El backend usa carpetas de capa al mismo nivel del arbol:

- `routes/*.routes.ts`: declara endpoints y middleware de ruta.
- `controllers/*.controller.ts`: recibe la entrada HTTP, llama servicios y serializa respuestas.
- `services/*.service.ts`: concentra reglas de negocio y funcionamiento del caso de uso.
- `repositories/*.repository.ts`: encapsula acceso a datos y detalles de Prisma cuando el flujo persiste informacion.
- `models/*.model.ts`: define estructuras de datos, contratos internos y tipos publicos.

`app.ts` solo registra middleware global y monta routers. Los servicios no deben importar Prisma directamente; deben usar repositorios.

## Inicio rapido

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Variables de entorno principales:

- `PORT`
- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_EXPIRE`
- `CORS_ORIGIN`

El servidor usa `PORT` desde variables de entorno y por defecto arranca en `8000`. La conexion a base de datos se resuelve mediante `DATABASE_URL` y Prisma.

## Migraciones

En desarrollo, usa `npm run prisma:migrate` para crear o aplicar migraciones. En despliegues, usa `npm run prisma:deploy` para aplicar migraciones ya versionadas sin abrir un flujo interactivo.
