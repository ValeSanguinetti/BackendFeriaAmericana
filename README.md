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
- `npm run prisma:generate`: genera Prisma Client desde `prisma/schema.prisma`
- `npm run prisma:migrate`: crea/aplica migraciones en desarrollo
- `npm run prisma:deploy`: aplica migraciones pendientes en despliegues

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
- [src/infrastructure/](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure): adaptadores manuales de infraestructura
- [database/README.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/database/README.md:1): documentacion del modelo relacional
- [docs/system-artifact.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/docs/system-artifact.md:1): vista tecnica de los componentes vigentes
- [docs/prisma.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/docs/prisma.md:1): guia operativa de Prisma en el proyecto
- [prds/](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prds): PRDs y decisiones tecnicas del backend

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
- `CORS_ORIGIN`

El servidor usa `PORT` desde variables de entorno y por defecto arranca en `8000`. La conexion a base de datos se resuelve mediante `DATABASE_URL` y Prisma.

## Migraciones

En desarrollo, usa `npm run prisma:migrate` para crear o aplicar migraciones. En despliegues, usa `npm run prisma:deploy` para aplicar migraciones ya versionadas sin abrir un flujo interactivo.
