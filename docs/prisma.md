# Prisma en Backend Feria Americana

## Proposito

Prisma es el ORM del backend para acceder a PostgreSQL con tipos generados desde el modelo de datos. En este proyecto reemplaza el uso de modelos manuales de persistencia y centraliza el contrato relacional en `prisma/schema.prisma`.

## Archivos involucrados

- [prisma/schema.prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/schema.prisma:1): modelos Prisma, relaciones, enums y mapeos a tablas
- [prisma/migrations](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/migrations): migraciones SQL versionadas para PostgreSQL
- [src/infrastructure/persistence/prisma/client.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure/persistence/prisma/client.ts:1): singleton manual de `PrismaClient`
- [src/config/database/connection.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/database/connection.ts:1): apertura y cierre de conexion antes de iniciar Express

## Configuracion requerida

Prisma usa la variable:

- `DATABASE_URL`

Formato local recomendado:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/feria_americana_store?schema=public"
```

En proveedores externos, usa la cadena PostgreSQL oficial del proveedor y conserva `sslmode=require` cuando el proveedor lo requiera.

## Flujo de desarrollo

1. Ajustar `DATABASE_URL`.
2. Ejecutar `npm install`.
3. Generar el cliente:

```bash
npm run prisma:generate
```

4. Aplicar migraciones en desarrollo:

```bash
npm run prisma:migrate
```

5. Levantar el backend:

```bash
npm run dev
```

## Flujo de despliegue

En un entorno desplegado, no uses `prisma migrate dev`. Aplica migraciones versionadas con:

```bash
npm run prisma:deploy
```

El build ejecuta `npm run prisma:generate` antes de compilar TypeScript.

## Uso desde codigo

Importa el cliente desde el adaptador manual, no directamente desde multiples lugares:

```ts
import prisma from '../infrastructure/persistence/prisma/client.js';

const productos = await prisma.producto.findMany();
```

Para tipos generados:

```ts
import type { Producto, Prisma } from '../infrastructure/persistence/prisma/client.js';
```

## Decisiones del proyecto

- `DATABASE_URL` es el contrato unico de conexion.
- El cliente Prisma se instancia una sola vez y se reutiliza en desarrollo.
- Las relaciones de carrito, listas de deseos y pedidos se representan con tablas de items.
- Los estados de usuario y pedido se modelan como enums.
- Los montos usan `Decimal(12, 2)`.
- Las migraciones son responsabilidad operativa explicita; el servidor no las aplica al arrancar.
