-- Esquema relacional para Feria Americana Store
-- SQL orientado a PostgreSQL / Supabase

create table if not exists usuarios (
    id_usuario integer generated always as identity primary key,
    nombre varchar(150) not null,
    email varchar(255) not null unique,
    contrasena varchar(255) not null,
    telefono varchar(30),
    fecha_registro timestamptz not null default now(),
    estado varchar(50) not null default 'activo'
);

create table if not exists productos (
    id_producto integer generated always as identity primary key,
    nombre varchar(180) not null,
    descripcion text,
    precio numeric(12, 2) not null check (precio >= 0),
    stock integer not null default 0 check (stock >= 0),
    categoria varchar(120),
    fecha_creacion timestamptz not null default now()
);

create table if not exists carrito (
    id_carrito integer generated always as identity primary key,
    id_usuario integer not null unique,
    fecha_creacion timestamptz not null default now(),
    fecha_actualizacion timestamptz not null default now(),
    constraint fk_carrito_usuario
        foreign key (id_usuario)
        references usuarios (id_usuario)
        on delete cascade
);

create table if not exists lista_deseos (
    id_lista_deseos integer generated always as identity primary key,
    id_usuario integer not null,
    nombre varchar(150) not null,
    fecha_creacion timestamptz not null default now(),
    constraint fk_lista_deseos_usuario
        foreign key (id_usuario)
        references usuarios (id_usuario)
        on delete cascade
);

create table if not exists carrito_items (
    id_carrito_item integer generated always as identity primary key,
    id_carrito integer not null,
    id_producto integer not null,
    cantidad integer not null default 1 check (cantidad > 0),
    precio_unitario numeric(12, 2) not null check (precio_unitario >= 0),
    constraint fk_carrito_items_carrito
        foreign key (id_carrito)
        references carrito (id_carrito)
        on delete cascade,
    constraint fk_carrito_items_producto
        foreign key (id_producto)
        references productos (id_producto)
        on delete restrict,
    constraint uq_carrito_producto unique (id_carrito, id_producto)
);

create table if not exists lista_deseos_items (
    id_lista_item integer generated always as identity primary key,
    id_lista_deseos integer not null,
    id_producto integer not null,
    fecha_agregado timestamptz not null default now(),
    constraint fk_lista_deseos_items_lista
        foreign key (id_lista_deseos)
        references lista_deseos (id_lista_deseos)
        on delete cascade,
    constraint fk_lista_deseos_items_producto
        foreign key (id_producto)
        references productos (id_producto)
        on delete cascade,
    constraint uq_lista_deseos_producto unique (id_lista_deseos, id_producto)
);

create table if not exists pedidos (
    id_pedido integer generated always as identity primary key,
    id_usuario integer not null,
    fecha_pedido timestamptz not null default now(),
    total numeric(12, 2) not null default 0 check (total >= 0),
    estado varchar(50) not null default 'pendiente',
    direccion_envio text not null,
    constraint fk_pedidos_usuario
        foreign key (id_usuario)
        references usuarios (id_usuario)
        on delete restrict
);

create table if not exists pedido_items (
    id_pedido_item integer generated always as identity primary key,
    id_pedido integer not null,
    id_producto integer not null,
    cantidad integer not null check (cantidad > 0),
    precio_unitario numeric(12, 2) not null check (precio_unitario >= 0),
    constraint fk_pedido_items_pedido
        foreign key (id_pedido)
        references pedidos (id_pedido)
        on delete cascade,
    constraint fk_pedido_items_producto
        foreign key (id_producto)
        references productos (id_producto)
        on delete restrict,
    constraint uq_pedido_producto unique (id_pedido, id_producto)
);

create index if not exists idx_productos_categoria
    on productos (categoria);

create index if not exists idx_lista_deseos_usuario
    on lista_deseos (id_usuario);

create index if not exists idx_pedidos_usuario
    on pedidos (id_usuario);

create index if not exists idx_carrito_items_producto
    on carrito_items (id_producto);

create index if not exists idx_pedido_items_producto
    on pedido_items (id_producto);

-- Datos de prueba

insert into usuarios (nombre, email, contrasena, telefono, estado)
values
    ('Valentina Sanguinetti', 'valentina@example.com', 'hash_demo_1', '3001234567', 'activo'),
    ('Carlos Ramirez', 'carlos@example.com', 'hash_demo_2', '3009876543', 'activo'),
    ('Laura Gomez', 'laura@example.com', 'hash_demo_3', '3014567890', 'inactivo')
on conflict (email) do nothing;

insert into productos (nombre, descripcion, precio, stock, categoria)
values
    ('Chaqueta Denim Vintage', 'Chaqueta azul clasica en excelente estado.', 95000.00, 5, 'Chaquetas'),
    ('Vestido Floral Retro', 'Vestido ligero estampado para uso casual.', 78000.00, 8, 'Vestidos'),
    ('Bolso Cuero Marron', 'Bolso mediano con compartimientos internos.', 120000.00, 3, 'Accesorios'),
    ('Camisa Oversize Blanca', 'Camisa manga larga de algodon.', 54000.00, 10, 'Camisas'),
    ('Botines Negros', 'Botines de tacon medio con cierre lateral.', 135000.00, 4, 'Calzado')
on conflict do nothing;

insert into carrito (id_usuario)
select u.id_usuario
from usuarios u
where u.email in ('valentina@example.com', 'carlos@example.com')
on conflict (id_usuario) do nothing;

insert into lista_deseos (id_usuario, nombre)
select u.id_usuario, data.nombre
from usuarios u
join (
    values
        ('valentina@example.com', 'Favoritos de temporada'),
        ('carlos@example.com', 'Regalos'),
        ('laura@example.com', 'Pendientes')
) as data(email, nombre)
    on data.email = u.email
where not exists (
    select 1
    from lista_deseos ld
    where ld.id_usuario = u.id_usuario
      and ld.nombre = data.nombre
);

insert into carrito_items (id_carrito, id_producto, cantidad, precio_unitario)
select c.id_carrito, p.id_producto, data.cantidad, p.precio
from carrito c
join usuarios u on u.id_usuario = c.id_usuario
join (
    values
        ('valentina@example.com', 'Chaqueta Denim Vintage', 1),
        ('valentina@example.com', 'Bolso Cuero Marron', 1),
        ('carlos@example.com', 'Camisa Oversize Blanca', 2)
) as data(email, producto, cantidad)
    on data.email = u.email
join productos p on p.nombre = data.producto
on conflict (id_carrito, id_producto) do nothing;

insert into lista_deseos_items (id_lista_deseos, id_producto)
select ld.id_lista_deseos, p.id_producto
from lista_deseos ld
join usuarios u on u.id_usuario = ld.id_usuario
join (
    values
        ('valentina@example.com', 'Favoritos de temporada', 'Vestido Floral Retro'),
        ('valentina@example.com', 'Favoritos de temporada', 'Botines Negros'),
        ('carlos@example.com', 'Regalos', 'Bolso Cuero Marron'),
        ('laura@example.com', 'Pendientes', 'Chaqueta Denim Vintage')
) as data(email, lista_nombre, producto)
    on data.email = u.email
   and data.lista_nombre = ld.nombre
join productos p on p.nombre = data.producto
on conflict (id_lista_deseos, id_producto) do nothing;

insert into pedidos (id_usuario, fecha_pedido, total, estado, direccion_envio)
select
    u.id_usuario,
    data.fecha_pedido,
    data.total,
    data.estado,
    data.direccion_envio
from usuarios u
join (
    values
        ('valentina@example.com', '2026-04-10 10:00:00+00'::timestamptz, 173000.00, 'pagado', 'Calle 10 # 20-30, Bogota'),
        ('carlos@example.com', '2026-04-12 15:30:00+00'::timestamptz, 108000.00, 'enviado', 'Carrera 50 # 80-15, Medellin')
) as data(email, fecha_pedido, total, estado, direccion_envio)
    on data.email = u.email
where not exists (
    select 1
    from pedidos pe
    where pe.id_usuario = u.id_usuario
      and pe.fecha_pedido = data.fecha_pedido
);

insert into pedido_items (id_pedido, id_producto, cantidad, precio_unitario)
select pe.id_pedido, p.id_producto, data.cantidad, data.precio_unitario
from pedidos pe
join usuarios u on u.id_usuario = pe.id_usuario
join (
    values
        ('valentina@example.com', '2026-04-10 10:00:00+00'::timestamptz, 'Chaqueta Denim Vintage', 1, 95000.00),
        ('valentina@example.com', '2026-04-10 10:00:00+00'::timestamptz, 'Vestido Floral Retro', 1, 78000.00),
        ('carlos@example.com', '2026-04-12 15:30:00+00'::timestamptz, 'Camisa Oversize Blanca', 2, 54000.00)
) as data(email, fecha_pedido, producto, cantidad, precio_unitario)
    on data.email = u.email
   and data.fecha_pedido = pe.fecha_pedido
join productos p on p.nombre = data.producto
on conflict (id_pedido, id_producto) do nothing;
