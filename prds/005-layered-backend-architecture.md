# PRD 005 - Arquitectura en capas del backend

## Problema y objetivo

El backend necesita una separacion clara entre rutas HTTP, controladores, servicios, repositorios y modelos para que futuras funcionalidades no mezclen transporte, reglas de negocio y acceso a datos. El objetivo es dejar una estructura mantenible donde cada componente tenga una responsabilidad explicita.

## Alcance

- Reorganizar el backend actual bajo una arquitectura por capas.
- Mantener los contratos HTTP vigentes sin cambios:
  - `GET /`
  - `POST /auth/register`
  - `POST /auth/login`
  - `GET /me`
- Separar el acceso a Prisma en repositorios.
- Centralizar las estructuras de datos en `src/models`.
- Dejar las rutas con definicion de endpoints y middleware de ruta.
- Mantener las respuestas HTTP y manejo de errores en controladores y middleware global.

## Fuera de alcance

- Crear nuevos endpoints funcionales.
- Cambiar el modelo relacional o las migraciones.
- Cambiar el contrato publico de autenticacion.
- Implementar roles, refresh tokens o sesiones persistidas.

## Enfoque de implementacion

- `src/routes/*.routes.ts` define endpoints y middleware aplicado a cada endpoint.
- `src/controllers/*.controller.ts` valida/lee la entrada HTTP, llama servicios y serializa respuestas.
- `src/services/*.service.ts` contiene reglas de negocio, uso de tokens, hashes, estados de usuario y transformaciones de dominio.
- `src/repositories/*.repository.ts` encapsula el acceso a datos y detalles de Prisma.
- `src/models/*.model.ts` declara estructuras de datos internas y contratos.
- `src/validators/*.validation.ts` contiene validaciones de payloads HTTP.
- El endpoint raiz usa las mismas carpetas de capa para evitar controladores inline en `app.ts`.

## Actores afectados

- Desarrolladores que agreguen modulos o endpoints al backend.
- Frontend que consume autenticacion; no debe percibir cambios de contrato.
- Mantenedores de base de datos, porque Prisma queda encapsulado detras de repositorios.

## Impacto en datos, contratos e integraciones

- No hay cambios en datos ni migraciones.
- Prisma sigue siendo la unica fuente runtime de persistencia.
- Las respuestas HTTP de autenticacion conservan `{ token, expiresIn, user }` y `{ user }`.
- Los errores HTTP siguen serializados como `{ message, issues? }`.

## Validaciones, permisos y reglas

- Las validaciones existentes de registro e inicio de sesion se conservan.
- `GET /me` sigue requiriendo `Authorization: Bearer <token>`.
- Usuarios `inactivo` siguen bloqueados para login y consulta de usuario actual.
- La contrasena nunca sale de la capa de servicio ni de las respuestas HTTP.

## Riesgos y casos borde

- Si un servicio accede directamente a Prisma en futuros cambios, se rompe la separacion definida.
- Los repositorios deben evitar devolver campos sensibles salvo cuando el caso de uso lo requiera.
- El middleware global de errores debe seguir registrandose despues de todas las rutas.

## Resultado esperado

El backend queda organizado por carpetas de capa al mismo nivel del arbol. Esta estructura debe servir como guia para nuevos endpoints sin alterar el comportamiento publico actual.
