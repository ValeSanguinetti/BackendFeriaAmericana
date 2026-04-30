CREATE TYPE "EstadoUsuario" AS ENUM ('activo', 'inactivo');

CREATE TYPE "EstadoPedido" AS ENUM ('pendiente', 'pagado', 'enviado', 'cancelado');

CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "contrasena" VARCHAR(255) NOT NULL,
    "telefono" VARCHAR(30),
    "fecha_registro" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" "EstadoUsuario" NOT NULL DEFAULT 'activo',

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

CREATE TABLE "productos" (
    "id_producto" SERIAL NOT NULL,
    "nombre" VARCHAR(180) NOT NULL,
    "descripcion" TEXT,
    "precio" DECIMAL(12,2) NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "categoria" VARCHAR(120),
    "fecha_creacion" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id_producto"),
    CONSTRAINT "productos_precio_check" CHECK ("precio" >= 0),
    CONSTRAINT "productos_stock_check" CHECK ("stock" >= 0)
);

CREATE TABLE "carrito" (
    "id_carrito" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "fecha_creacion" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "carrito_pkey" PRIMARY KEY ("id_carrito")
);

CREATE TABLE "carrito_items" (
    "id_carrito_item" SERIAL NOT NULL,
    "id_carrito" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,
    "precio_unitario" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "carrito_items_pkey" PRIMARY KEY ("id_carrito_item"),
    CONSTRAINT "carrito_items_cantidad_check" CHECK ("cantidad" > 0),
    CONSTRAINT "carrito_items_precio_unitario_check" CHECK ("precio_unitario" >= 0)
);

CREATE TABLE "lista_deseos" (
    "id_lista_deseos" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "fecha_creacion" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lista_deseos_pkey" PRIMARY KEY ("id_lista_deseos")
);

CREATE TABLE "lista_deseos_items" (
    "id_lista_item" SERIAL NOT NULL,
    "id_lista_deseos" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "fecha_agregado" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lista_deseos_items_pkey" PRIMARY KEY ("id_lista_item")
);

CREATE TABLE "pedidos" (
    "id_pedido" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "fecha_pedido" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "estado" "EstadoPedido" NOT NULL DEFAULT 'pendiente',
    "direccion_envio" TEXT NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id_pedido"),
    CONSTRAINT "pedidos_total_check" CHECK ("total" >= 0)
);

CREATE TABLE "pedido_items" (
    "id_pedido_item" SERIAL NOT NULL,
    "id_pedido" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio_unitario" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "pedido_items_pkey" PRIMARY KEY ("id_pedido_item"),
    CONSTRAINT "pedido_items_cantidad_check" CHECK ("cantidad" > 0),
    CONSTRAINT "pedido_items_precio_unitario_check" CHECK ("precio_unitario" >= 0)
);

CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

CREATE INDEX "idx_productos_categoria" ON "productos"("categoria");

CREATE UNIQUE INDEX "carrito_id_usuario_key" ON "carrito"("id_usuario");

CREATE UNIQUE INDEX "uq_carrito_producto" ON "carrito_items"("id_carrito", "id_producto");

CREATE INDEX "idx_carrito_items_producto" ON "carrito_items"("id_producto");

CREATE INDEX "idx_lista_deseos_usuario" ON "lista_deseos"("id_usuario");

CREATE UNIQUE INDEX "uq_lista_deseos_producto" ON "lista_deseos_items"("id_lista_deseos", "id_producto");

CREATE INDEX "idx_lista_deseos_items_producto" ON "lista_deseos_items"("id_producto");

CREATE INDEX "idx_pedidos_usuario" ON "pedidos"("id_usuario");

CREATE UNIQUE INDEX "uq_pedido_producto" ON "pedido_items"("id_pedido", "id_producto");

CREATE INDEX "idx_pedido_items_producto" ON "pedido_items"("id_producto");

ALTER TABLE "carrito" ADD CONSTRAINT "carrito_id_usuario_fkey"
    FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "carrito_items" ADD CONSTRAINT "carrito_items_id_carrito_fkey"
    FOREIGN KEY ("id_carrito") REFERENCES "carrito"("id_carrito")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "carrito_items" ADD CONSTRAINT "carrito_items_id_producto_fkey"
    FOREIGN KEY ("id_producto") REFERENCES "productos"("id_producto")
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "lista_deseos" ADD CONSTRAINT "lista_deseos_id_usuario_fkey"
    FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "lista_deseos_items" ADD CONSTRAINT "lista_deseos_items_id_lista_deseos_fkey"
    FOREIGN KEY ("id_lista_deseos") REFERENCES "lista_deseos"("id_lista_deseos")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "lista_deseos_items" ADD CONSTRAINT "lista_deseos_items_id_producto_fkey"
    FOREIGN KEY ("id_producto") REFERENCES "productos"("id_producto")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_id_usuario_fkey"
    FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario")
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "pedido_items" ADD CONSTRAINT "pedido_items_id_pedido_fkey"
    FOREIGN KEY ("id_pedido") REFERENCES "pedidos"("id_pedido")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "pedido_items" ADD CONSTRAINT "pedido_items_id_producto_fkey"
    FOREIGN KEY ("id_producto") REFERENCES "productos"("id_producto")
    ON DELETE RESTRICT ON UPDATE CASCADE;
