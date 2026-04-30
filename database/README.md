# Base de Datos Feria Americana

Documentacion especifica del modelo PostgreSQL usado por Feria Americana Store.

## Introduccion

La base de datos soporta operaciones de ecommerce centradas en usuarios, productos, carrito, listas de deseos y pedidos. El modelo usa tablas relacionales de PostgreSQL y Prisma como ORM tipado desde el backend.

La fuente de verdad tecnica esta en:

- [prisma/schema.prisma](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/schema.prisma:1)
- [prisma/migrations](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/prisma/migrations)

## Tablas

### `usuarios`

Representa a las personas que interactuan con la plataforma.

Campos principales:

- `id_usuario`
- `nombre`
- `email`
- `contrasena`
- `telefono`
- `estado`
- `fecha_registro`

Reglas:

- `email` es unico
- `estado` permite `activo` o `inactivo`

### `productos`

Catalogo principal de articulos publicados.

Campos principales:

- `id_producto`
- `nombre`
- `descripcion`
- `precio`
- `stock`
- `categoria`
- `fecha_creacion`

Reglas:

- `precio >= 0`
- `stock >= 0`
- existe indice por `categoria`

### `carrito`

Carrito activo de un usuario.

Campos principales:

- `id_carrito`
- `id_usuario`
- `fecha_creacion`
- `fecha_actualizacion`

Reglas:

- un usuario solo puede tener un carrito activo
- al eliminar un usuario, se elimina su carrito

### `carrito_items`

Productos agregados al carrito.

Campos principales:

- `id_carrito_item`
- `id_carrito`
- `id_producto`
- `cantidad`
- `precio_unitario`

Reglas:

- `cantidad > 0`
- `precio_unitario >= 0`
- un producto no se repite dentro del mismo carrito
- al eliminar el carrito, se eliminan sus items
- no se permite eliminar un producto referenciado por items de carrito

### `lista_deseos`

Listas de productos guardados por un usuario.

Campos principales:

- `id_lista_deseos`
- `id_usuario`
- `nombre`
- `fecha_creacion`

Reglas:

- existe indice por usuario
- al eliminar un usuario, se eliminan sus listas

### `lista_deseos_items`

Productos guardados en una lista de deseos.

Campos principales:

- `id_lista_item`
- `id_lista_deseos`
- `id_producto`
- `fecha_agregado`

Reglas:

- un producto no se repite dentro de la misma lista
- al eliminar la lista, se eliminan sus items

### `pedidos`

Registro de compras confirmadas.

Campos principales:

- `id_pedido`
- `id_usuario`
- `fecha_pedido`
- `total`
- `estado`
- `direccion_envio`

Reglas:

- `total >= 0`
- `estado` permite `pendiente`, `pagado`, `enviado` o `cancelado`
- no se permite eliminar un usuario con pedidos asociados

### `pedido_items`

Productos comprados dentro de un pedido.

Campos principales:

- `id_pedido_item`
- `id_pedido`
- `id_producto`
- `cantidad`
- `precio_unitario`

Reglas:

- `cantidad > 0`
- `precio_unitario >= 0`
- un producto no se repite dentro del mismo pedido
- al eliminar el pedido, se eliminan sus items
- no se permite eliminar un producto referenciado por items de pedido

## Decisiones tecnicas

Los items de carrito, listas de deseos y pedidos se modelan como tablas independientes porque PostgreSQL mantiene la integridad referencial, permite indices por producto y evita estructuras embebidas no normalizadas.

Los estados de usuarios y pedidos se modelan como enums de Prisma/PostgreSQL para que el dominio quede restringido tanto en TypeScript como en la base de datos.

Los valores monetarios usan `Decimal(12, 2)` para evitar errores de precision de punto flotante.

Las migraciones no se ejecutan automaticamente al arrancar el servidor. Deben aplicarse con `npm run prisma:migrate` en desarrollo o `npm run prisma:deploy` en entornos desplegados.
