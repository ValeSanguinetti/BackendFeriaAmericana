# PRD 003 - Migracion a PostgreSQL con Prisma

## Problema y objetivo

El backend debe usar PostgreSQL como base de datos relacional y Prisma como ORM de runtime. El objetivo es dejar una estrategia unica de persistencia, con modelos tipados, migraciones versionadas y un punto de conexion estable para Express.

## Alcance

- Reemplazar la dependencia de MongoDB/Mongoose por PostgreSQL/Prisma.
- Usar `DATABASE_URL` como contrato unico de conexion a base de datos.
- Definir el modelo relacional del dominio en `prisma/schema.prisma`.
- Versionar una migracion inicial de PostgreSQL para crear tablas, relaciones, indices y restricciones principales.
- Exponer un cliente Prisma singleton desde la capa de infraestructura.
- Mantener `src/config/database/connection.ts` como punto estable para conectar y desconectar la base de datos.
- Actualizar README, documentacion tecnica, documentacion de base de datos y ejemplo de entorno.

## Fuera de alcance

- Migrar datos reales desde MongoDB u otra base existente.
- Implementar nuevos endpoints de negocio.
- Cambiar contratos HTTP del frontend.
- Aplicar migraciones en una instancia remota desde este cambio.

## Enfoque de implementacion

- `AppConfig.database` leera `DATABASE_URL`.
- `connectDatabase()` ejecutara `prisma.$connect()` antes de levantar el servidor.
- `disconnectDatabase()` ejecutara `prisma.$disconnect()` para cierres controlados y pruebas futuras.
- `src/infrastructure/persistence/prisma/client.ts` encapsulara el singleton de `PrismaClient`.
- `prisma/schema.prisma` sera la fuente principal del modelo ORM.
- `prisma/migrations` versionara el SQL fisico para PostgreSQL.
- Los items de carrito, listas de deseos y pedidos pasaran de documentos embebidos a tablas relacionadas.

## Actores afectados

- Backend Node.js/Express.
- Desarrolladores que ejecutan el backend localmente.
- Entornos de despliegue que deben proveer `DATABASE_URL`.
- Futuras rutas, servicios y repositorios que consulten datos del dominio.

## Impacto en datos, contratos e integraciones

- `MONGO_URI` y `MONGO_SERVER_SELECTION_TIMEOUT_MS` dejan de ser variables vigentes.
- `DATABASE_URL` queda como variable obligatoria en produccion.
- La persistencia se modela con tablas relacionales:
  - `usuarios`
  - `productos`
  - `carrito`
  - `carrito_items`
  - `lista_deseos`
  - `lista_deseos_items`
  - `pedidos`
  - `pedido_items`
- Las relaciones usan claves foraneas e integridad referencial de PostgreSQL.
- Los importadores de persistencia deben usar el cliente Prisma, no modelos Mongoose.

## Validaciones, permisos y reglas

- `usuarios.email` es unico.
- Un usuario solo puede tener un carrito activo.
- `precio`, `precio_unitario` y `total` no pueden ser negativos.
- `stock` no puede ser negativo.
- `cantidad` debe ser mayor a cero.
- `estado` de usuario permite `activo` o `inactivo`.
- `estado` de pedido permite `pendiente`, `pagado`, `enviado` o `cancelado`.
- Las eliminaciones de usuario eliminan carrito y listas de deseos asociadas.
- Los pedidos restringen la eliminacion del usuario para conservar historial comercial.

## Riesgos y casos borde

- Si `DATABASE_URL` no apunta a una instancia PostgreSQL accesible, el servidor no arranca.
- Los datos existentes en MongoDB no se migran automaticamente y requieren un proceso dedicado.
- Prisma no aplica migraciones automaticamente al arrancar; deben ejecutarse con los scripts documentados.
- Los campos monetarios se exponen como `Decimal` en Prisma y deben tratarse cuidadosamente al serializar respuestas futuras.

## Resultado esperado

El backend queda listo para operar con PostgreSQL y Prisma como unica estrategia de persistencia, con configuracion, schema, migracion inicial y documentacion alineadas.
