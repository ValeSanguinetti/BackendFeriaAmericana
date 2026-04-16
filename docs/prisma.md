# Prisma en Backend Feria Americana

## Que es Prisma

Prisma es un ORM moderno para aplicaciones Node.js y TypeScript. Permite describir el modelo de datos en un archivo de esquema, generar un cliente tipado y consultar la base de datos con autocompletado y validacion de tipos.

En terminos practicos, Prisma sirve para:

- representar tablas como modelos de codigo
- generar un cliente de acceso a datos tipado
- reducir errores al consultar o mutar informacion
- mantener sincronizado el modelo de codigo con la estructura relacional

## Para que sirve

Prisma resuelve tres necesidades importantes en un backend:

### 1. Modelado

Permite definir entidades, relaciones, restricciones y nombres mapeados a tablas reales.

### 2. Cliente tipado

Genera un cliente que expone operaciones como:

- `findMany`
- `findUnique`
- `create`
- `update`
- `delete`

Todo esto con tipos inferidos desde el esquema.

### 3. Mantenibilidad

Evita que la capa de acceso a datos dependa solo de strings, SQL manual o estructuras no tipadas.

## Como se utiliza Prisma

El flujo habitual de trabajo con Prisma es este:

1. Definir un archivo `schema.prisma`
2. Configurar el `datasource` con la base de datos
3. Definir los modelos y relaciones
4. Generar el cliente con `prisma generate`
5. Importar `PrismaClient` en el codigo de la aplicacion

Ejemplo conceptual:

```ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const usuarios = await prisma.usuario.findMany();
```

## Como se uso en este proyecto

En este backend, Prisma se incorporo para traducir el esquema SQL existente de Feria Americana Store a una capa ORM limpia, separando definicion, codigo generado y codigo manual.

### Archivos involucrados

- [prisma/schema.prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/schema.prisma:1)
- [generated/prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/generated/prisma)
- [src/infrastructure/persistence/prisma/client.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure/persistence/prisma/client.ts:1)
- [database/feria-americana.sql](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/database/feria-americana.sql:1)

### Objetivo concreto dentro del proyecto

El objetivo no fue reemplazar inmediatamente todo el acceso a datos existente, sino:

- convertir el modelo SQL a una representacion tipada
- dejar una base mantenible para consultas futuras
- separar claramente definicion ORM, codigo generado y adaptadores manuales

### Mapeo del esquema SQL

Los modelos Prisma fueron creados a partir de estas tablas:

- `usuarios`
- `productos`
- `carrito`
- `carrito_items`
- `lista_deseos`
- `lista_deseos_items`
- `pedidos`
- `pedido_items`

Como la base de datos usa nombres en espanol y columnas con snake_case, se uso:

- `@map` para columnas
- `@@map` para tablas

Esto permite que el codigo tenga nombres idiomaticos y tipados sin perder compatibilidad con el esquema SQL real.

### Separacion entre codigo manual y generado

La version inicial habia dejado el codigo generado junto al codigo fuente. Eso no era una buena separacion para clean architecture ni para mantenimiento. La refactorizacion dejo esta estructura:

- `prisma/schema.prisma`: definicion del modelo ORM
- `generated/prisma`: cliente generado automaticamente
- `src/infrastructure/persistence/prisma/client.ts`: wrapper manual y singleton del cliente

Con esto:

- el codigo generado no contamina `src`
- el codigo fuente manual sigue siendo legible y versionable
- la capa de infraestructura depende del cliente generado, no al reves

### Punto de acceso estable

Se creo [src/infrastructure/persistence/prisma/client.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/infrastructure/persistence/prisma/client.ts:1) para:

- instanciar un singleton de `PrismaClient`
- evitar multiples conexiones innecesarias en desarrollo
- encapsular el acceso al cliente generado
- exportar tipos reutilizables desde un modulo manual

Ejemplo de uso en este proyecto:

```ts
import prisma from '../infrastructure/persistence/prisma/client.js';

const productos = await prisma.producto.findMany();
```

## Configuracion requerida

Prisma en este proyecto depende de:

- `DATABASE_URL`

Esa variable se agrego en:

- [.env](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/.env:1)
- [.env.example](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/.env.example:1)

Tambien se agrego el script:

```bash
npm run prisma:generate
```

## Relacion con Supabase en este proyecto

Actualmente el backend tiene dos piezas relacionadas con persistencia:

- `supabase-js` en [src/config/database/connection.ts](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/src/config/database/connection.ts:1)
- Prisma en `prisma/`, `generated/` y `src/infrastructure/persistence/prisma`

Eso significa que:

- Supabase sigue existiendo como cliente de integracion
- Prisma aporta la capa de modelos tipados sobre PostgreSQL

Todavia no se hizo una migracion completa de toda la logica de acceso a datos a Prisma.

## Cuando usar Prisma aqui

En este proyecto, Prisma deberia usarse cuando se necesite:

- consultar tablas relacionales del dominio
- aprovechar tipado fuerte en TypeScript
- navegar relaciones entre entidades
- construir repositorios o servicios sobre el modelo SQL existente

## Resumen

En Feria Americana Store, Prisma se uso como una capa de modelado y acceso tipado basada en el esquema SQL ya definido. La refactorizacion posterior separo el esquema ORM, el codigo generado y el codigo manual para alinearlo mejor con clean code, clean architecture y mantenibilidad.
