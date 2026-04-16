# Backend Feria Americana

Backend de Node.js + Express para la gestion de usuarios, catalogo, carrito, lista de deseos y pedidos de Feria Americana Store.

## Requisitos

- Node.js 20 o superior

## Scripts

- `npm run dev`: arranca el servidor en modo desarrollo con recarga usando `tsx`
- `npm run build`: compila TypeScript a `dist/`
- `npm run start`: ejecuta la version compilada
- `npm run typecheck`: valida tipos sin generar salida

## Configuracion

- [src/config/app.config.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/app.config.ts:1): singleton de configuracion agrupado por secciones para app, Supabase, JWT, CORS y storage
- [src/config/database/connection.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/database/connection.ts:1): cliente singleton de Supabase construido con `SUPABASE_URL` y `SUPABASE_KEY`
- [src/infrastructure/persistence/prisma/client.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure/persistence/prisma/client.ts:1): punto de acceso manual al cliente y tipos de Prisma

## Estructura

- [src/app.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/app.ts:1): define y exporta la app de Express
- [src/index.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/index.ts:1): punto de entrada que levanta el servidor
- [src/config/](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config): configuracion de aplicacion y acceso a base de datos
- [src/infrastructure/](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure): adaptadores manuales de infraestructura
- [prisma/schema.prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/schema.prisma:1): definicion ORM del modelo relacional
- [generated/prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/generated/prisma): cliente Prisma generado, separado del codigo fuente manual
- [docs/system-artifact.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/docs/system-artifact.md:1): artefacto de sistema con la vista tecnica de los componentes del backend
- [docs/prisma.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/docs/prisma.md:1): documento explicativo sobre Prisma y su uso exacto en este proyecto
- [database/README.md](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/database/README.md:1): documentacion especifica de la base de datos
- [database/feria-americana.sql](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/database/feria-americana.sql:1): esquema relacional y datos de prueba
- [prds/](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prds): PRDs y decisiones tecnicas del backend

## Inicio rapido

```bash
npm install
npm run dev
```

Variables de entorno principales:

- `PORT`
- `DATABASE_URL`
- `SUPABASE_URL`
- `SUPABASE_KEY`
- `JWT_SECRET`
- `CORS_ORIGIN`

El servidor usa `PORT` desde variables de entorno y por defecto arranca en `8000`.
