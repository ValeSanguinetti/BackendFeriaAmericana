# Backend Feria Americana

Backend base en Node.js + Express listo para trabajar con TypeScript.

## Requisitos

- Node.js 20 o superior

## Scripts

- `npm run dev`: arranca el servidor en modo desarrollo con recarga usando `tsx`
- `npm run build`: compila TypeScript a `dist/`
- `npm run start`: ejecuta la versión compilada
- `npm run typecheck`: valida tipos sin generar salida

## Configuracion

- `src/config/app.config.ts`: singleton de configuracion agrupado por secciones para app, Supabase, JWT, CORS y storage
- `src/config/database/connection.ts`: cliente singleton de Supabase construido con `SUPABASE_URL` y `SUPABASE_KEY`

## Estructura

- `src/app.ts`: define y exporta la app de Express
- `src/index.ts`: punto de entrada que levanta el servidor
- `tsconfig.json`: configuración del compilador TypeScript
- `docs/`: documentación técnica y operativa del backend
- `prds/`: PRDs y documentos de planificación funcional

## Inicio rápido

```bash
npm install
npm run dev
```

Variables de entorno principales:

- `PORT`
- `SUPABASE_URL`
- `SUPABASE_KEY`
- `JWT_SECRET`
- `CORS_ORIGIN`

El servidor usa `PORT` desde variables de entorno y por defecto arranca en `8000`.
