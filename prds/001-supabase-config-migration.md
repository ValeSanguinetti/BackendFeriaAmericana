# PRD 001 - Supabase Config Migration

## Problema y objetivo

El backend tenía variables de entorno y estructura de configuración orientadas a MongoDB, pero la integración actual requiere Supabase. El objetivo es centralizar la configuración de la aplicación en un singleton reutilizable y exponer un cliente único de Supabase desde la capa de configuración de base de datos.

## Alcance

- reemplazar la configuración plana actual por un objeto singleton agrupado por secciones
- cargar variables de entorno al inicializar la configuración
- sustituir el contrato de variables de base de datos de Mongo por variables de Supabase
- exponer un cliente singleton de Supabase desde `src/config/database/connection.ts`
- actualizar el ejemplo de variables de entorno y la documentación base del backend

## Enfoque de implementación

- crear una clase `AppConfig` con secciones `app`, `database`, `jwt`, `cors` y `storage`
- usar `dotenv/config` para cargar variables al iniciar el módulo
- modelar `database` con `url` y `key` para el cliente de Supabase
- crear el cliente con `createClient(url, key)` y exportarlo como singleton
- mantener validaciones mínimas para producción sobre secretos y credenciales requeridas

## Actores afectados

- backend de Node.js/Express
- desarrolladores que ejecutan el proyecto localmente
- futuras integraciones que consuman el cliente compartido de Supabase

## Impacto en datos, contratos e integraciones

- se elimina el contrato de entorno basado en `DATABASE_URL`, `MONGO_URI_CLOUD`, `MONGO_USERNAME` y `MONGO_PASSWORD`
- se introduce el contrato `SUPABASE_URL` y `SUPABASE_KEY`
- la capa de conexión deja de depender de una conexión stateful estilo MongoDB y pasa a un cliente HTTP de Supabase

## Validaciones y reglas

- en producción `JWT_SECRET` sigue siendo obligatorio
- en producción `SUPABASE_URL` y `SUPABASE_KEY` deben estar definidos
- en producción el bloque de storage sigue requiriendo bucket y credenciales AWS si se usa esa capacidad

## Riesgos y casos borde

- si la clave de Supabase no corresponde al entorno esperado, el backend fallará en runtime al consultar datos
- si el frontend o despliegue siguen usando variables viejas de Mongo, el arranque quedará desalineado
- si se requiere una distinción entre anon key y service role key, el contrato actual deberá refinarse
