# PRD 004 - Autenticacion Backend con JWT

## Problema y objetivo

El backend necesita autenticar usuarios propios de Feria Americana Store sin depender de un proveedor externo. El objetivo es habilitar registro, inicio de sesion y consulta del usuario autenticado con JWT Bearer, usando PostgreSQL/Prisma y contrasenas hasheadas.

## Alcance

- Crear `POST /auth/register`.
- Crear `POST /auth/login`.
- Crear `GET /me`.
- Validar payloads de autenticacion en backend.
- Guardar contrasenas con hash.
- Firmar y verificar JWT con `JWT_SECRET` y `JWT_EXPIRE`.
- Devolver solo datos publicos del usuario.
- Mantener la feature limitada al backend.

## Fuera de alcance

- Conectar el frontend a estos endpoints.
- Persistir aceptacion de terminos.
- Implementar roles.
- Implementar refresh tokens, sesiones persistidas o blacklist de logout.
- Cambiar el modelo relacional vigente.

## Enfoque de implementacion

- Los endpoints de registro y login viven bajo `/auth`.
- La ruta `/me` vive en la raiz HTTP y se protege con `requireAuth`.
- La autenticacion usa `Authorization: Bearer <token>`.
- El token JWT usa `sub = idUsuario` y expira segun `JWT_EXPIRE`.
- `usuarios.contrasena` almacena un hash generado con `bcryptjs`.
- El servicio de auth usa `auth.repository.ts`; el repositorio encapsula Prisma como unico acceso a datos.
- Los errores HTTP se serializan como `{ message, issues? }`.

## Actores afectados

- Usuarios que se registran o inician sesion.
- Frontend futuro que consumira `/auth/register`, `/auth/login` y `/me`.
- Desarrolladores que agreguen rutas protegidas.

## Impacto en datos, contratos e integraciones

- No hay migracion de base de datos porque la tabla `usuarios` ya contiene los campos necesarios.
- El contrato publico del usuario autenticado es:
  - `id`
  - `name`
  - `email`
  - `phone`
  - `status`
  - `registeredAt`
- `contrasena` nunca debe salir en respuestas HTTP.
- `acceptedTerms` se valida al registrar, pero no se persiste.

## Validaciones y reglas

- `name` es obligatorio en registro.
- `email` es obligatorio, debe tener formato valido y se normaliza a minusculas.
- `password` debe tener al menos 8 caracteres.
- `passwordConfirmation` debe coincidir con `password`.
- `acceptedTerms` debe ser `true`.
- Email duplicado responde `409`.
- Credenciales invalidas responden `401` con mensaje generico.
- Usuarios `inactivo` no pueden iniciar sesion ni consultar `/me`.
- `/me` requiere token Bearer valido.

## Riesgos y casos borde

- Si `JWT_SECRET` se cambia, los tokens emitidos anteriormente dejan de ser validos.
- Al no existir refresh tokens, el cliente debera volver a iniciar sesion cuando expire el JWT.
- Al no persistir sesiones, no hay logout server-side en esta version.
- Si existen usuarios antiguos con contrasenas no hasheadas, no podran iniciar sesion hasta migrar sus contrasenas.

## Resultado esperado

El backend expone un flujo minimo de autenticacion propio, testeado y listo para que el frontend lo consuma en una iteracion posterior.
