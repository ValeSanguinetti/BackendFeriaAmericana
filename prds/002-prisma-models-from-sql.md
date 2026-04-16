# PRD 002 - Prisma Models From SQL Schema

## Problema y objetivo

El backend ya cuenta con un esquema SQL para Feria Americana Store, pero no tiene una capa de modelos tipados que represente ese diseño dentro del codigo. El objetivo es traducir el modelo relacional existente a Prisma y dejar una integracion alineada con buenas practicas: esquema ORM separado, codigo generado fuera de `src` y adaptadores manuales dentro de infraestructura.

## Alcance

- incorporar Prisma al backend
- modelar en Prisma las entidades definidas en `database/feria-americana.sql`
- generar el cliente de Prisma fuera de `src`
- exponer un punto de acceso manual desde infraestructura para importar cliente y tipos
- actualizar variables de entorno y documentacion asociada
- generar un system artifact del backend y un documento explicativo de Prisma para mantenimiento futuro

## Enfoque de implementacion

- definir `schema.prisma` con las tablas `usuarios`, `productos`, `carrito`, `lista_deseos`, `carrito_items`, `lista_deseos_items`, `pedidos` y `pedido_items`
- mapear nombres de tablas y columnas existentes usando `@@map` y `@map`
- ubicar `schema.prisma` en `prisma/`
- generar el cliente de Prisma en `generated/prisma`
- crear `src/infrastructure/persistence/prisma/client.ts` como punto de acceso estable para el resto del backend
- agregar `DATABASE_URL` para el datasource PostgreSQL de Prisma

## Impacto en contratos

- se introduce `DATABASE_URL` para Prisma
- el backend mantiene su configuracion actual de Supabase, pero ahora tambien dispone de una capa ORM tipada para PostgreSQL
- `prisma/` y `generated/` pasan a ser artefactos de persistencia separados del codigo fuente manual
- `src/infrastructure/persistence/prisma` pasa a ser el adaptador manual para consumir Prisma
- `docs/` pasa a incluir documentacion estable de arquitectura y de uso de Prisma

## Riesgos y casos borde

- si `DATABASE_URL` no apunta a una instancia PostgreSQL valida, Prisma no podra generar o sincronizar el esquema
- los nombres en espanol del esquema SQL requieren mapeo explicito para mantener consistencia entre base de datos y codigo
- si mas adelante se reemplaza `supabase-js` por Prisma en runtime, habra que revisar la capa de conexion para no duplicar responsabilidades
- si se importa el cliente generado directamente desde multiples puntos, se perdera el beneficio del adaptador manual centralizado

## Resultado documental

- `docs/system-artifact.md` describe los artefactos principales y su relacion
- `docs/prisma.md` explica que es Prisma, para que sirve, como usarlo y como se aplico exactamente en Feria Americana Store
