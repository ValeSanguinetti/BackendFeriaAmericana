# Base de Datos Feria Americana

Documentacion especifica del modelo de datos relacional usado por Feria Americana Store en PostgreSQL/Supabase.

---

## Indice

1. [Introduccion](#introduccion)
2. [Contexto del modelo](#contexto-del-modelo)
3. [Archivo principal](#archivo-principal)
4. [Entidades](#entidades)
5. [Relaciones](#relaciones)
6. [Decisiones tecnicas](#decisiones-tecnicas)
7. [Datos de prueba](#datos-de-prueba)

---

## Introduccion

La base de datos de Feria Americana Store fue diseñada para soportar operaciones de ecommerce centradas en usuarios, productos, carrito, listas de deseos y pedidos. El objetivo del modelo es mantener integridad referencial, permitir consultas consistentes y facilitar futuras integraciones desde el backend.

Este caso de uso no pertenece a un sistema academico ni a un dominio educativo. Toda la documentacion de este directorio esta enfocada exclusivamente en el funcionamiento de la tienda.

---

## Contexto del modelo

El sistema necesita resolver estas operaciones principales:

- registrar usuarios y controlar su estado
- gestionar un catalogo de productos con precio, stock y categoria
- permitir un carrito activo por usuario
- guardar listas de deseos con productos favoritos
- registrar pedidos y el detalle de cada compra

El diseño relacional se eligio para asegurar reglas claras entre entidades y evitar inconsistencias al momento de comprar, actualizar stock o consultar historiales.

---

## Archivo principal

El esquema y los datos de prueba estan definidos en [feria-americana.sql](/home/alexi-dg/Desktop/GitHub_Repositories/Feria-Americana-Store/BackendFeriaAmericana/database/feria-americana.sql:1).

Ese archivo contiene:

- creacion de tablas
- claves primarias y foraneas
- restricciones `check`
- indices
- bloque de datos de prueba

---

## Entidades

### 1. `usuarios`

Representa a las personas que interactuan con la plataforma.

Campos principales:

- `id_usuario`
- `nombre`
- `email`
- `contrasena`
- `telefono`
- `fecha_registro`
- `estado`

Reglas:

- `email` es unico
- `estado` permite controlar disponibilidad logica del usuario

### 2. `productos`

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

### 3. `carrito`

Carrito activo del usuario.

Campos principales:

- `id_carrito`
- `id_usuario`
- `fecha_creacion`
- `fecha_actualizacion`

Regla:

- un usuario solo puede tener un carrito activo, por eso `id_usuario` es `unique`

### 4. `carrito_items`

Detalle de productos agregados al carrito.

Campos principales:

- `id_carrito_item`
- `id_carrito`
- `id_producto`
- `cantidad`
- `precio_unitario`

Reglas:

- `cantidad > 0`
- `precio_unitario >= 0`
- no se permite repetir el mismo producto en el mismo carrito

### 5. `lista_deseos`

Listas de productos guardados por un usuario.

Campos principales:

- `id_lista_deseos`
- `id_usuario`
- `nombre`
- `fecha_creacion`

### 6. `lista_deseos_items`

Relacion entre listas de deseos y productos.

Campos principales:

- `id_lista_item`
- `id_lista_deseos`
- `id_producto`
- `fecha_agregado`

### 7. `pedidos`

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
- conserva la relacion con el usuario para trazabilidad comercial

### 8. `pedido_items`

Detalle de productos comprados dentro de cada pedido.

Campos principales:

- `id_pedido_item`
- `id_pedido`
- `id_producto`
- `cantidad`
- `precio_unitario`

Reglas:

- `cantidad > 0`
- `precio_unitario >= 0`
- no se repite el mismo producto dentro del mismo pedido

---

## Relaciones

Relaciones principales del modelo:

- `usuarios` 1:1 `carrito`
- `usuarios` 1:N `lista_deseos`
- `usuarios` 1:N `pedidos`
- `carrito` 1:N `carrito_items`
- `lista_deseos` 1:N `lista_deseos_items`
- `pedidos` 1:N `pedido_items`
- `productos` participa como referencia en `carrito_items`, `lista_deseos_items` y `pedido_items`

Esto permite separar claramente:

- el estado temporal de compra en `carrito`
- la intencion de compra o favoritos en `lista_deseos`
- la compra ya cerrada en `pedidos`

---

## Decisiones tecnicas

### Integridad referencial

Se usaron claves foraneas para garantizar que los items dependan de registros validos de usuario, carrito, lista, pedido y producto.

### Estrategia de borrado

- `carrito` y `lista_deseos` usan `on delete cascade` porque dependen operativamente del usuario
- los items de carrito, lista y pedido dependen de sus entidades padre
- en `pedidos` se conserva una relacion mas estricta para no perder historial comercial

### Restricciones de negocio

Se agregaron validaciones `check` para cantidades, precios, stock y total.

### Indices creados

- `idx_productos_categoria`
- `idx_lista_deseos_usuario`
- `idx_pedidos_usuario`
- `idx_carrito_items_producto`
- `idx_pedido_items_producto`

Estos indices ayudan a consultas comunes por categoria, usuario y producto.

---

## Datos de prueba

El esquema incluye un bloque de seed para poblar el entorno con ejemplos iniciales.

Contenido del seed:

- 3 usuarios
- 5 productos
- 2 carritos
- 3 listas de deseos
- items en carrito
- items en listas de deseos
- 2 pedidos
- items asociados a pedidos

Objetivo del seed:

- probar joins basicos
- validar claves foraneas
- ensayar flujos de carrito y pedido
- contar con una base minima para desarrollo local

Consideraciones:

- las inserciones usan `on conflict do nothing` donde aplica
- varias relaciones se arman mediante `select` para respetar ids generados
- los datos son de prueba y no representan informacion productiva
