
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Carrito
 * 
 */
export type Carrito = $Result.DefaultSelection<Prisma.$CarritoPayload>
/**
 * Model ListaDeseos
 * 
 */
export type ListaDeseos = $Result.DefaultSelection<Prisma.$ListaDeseosPayload>
/**
 * Model CarritoItem
 * 
 */
export type CarritoItem = $Result.DefaultSelection<Prisma.$CarritoItemPayload>
/**
 * Model ListaDeseosItem
 * 
 */
export type ListaDeseosItem = $Result.DefaultSelection<Prisma.$ListaDeseosItemPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model PedidoItem
 * 
 */
export type PedidoItem = $Result.DefaultSelection<Prisma.$PedidoItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrito`: Exposes CRUD operations for the **Carrito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carritos
    * const carritos = await prisma.carrito.findMany()
    * ```
    */
  get carrito(): Prisma.CarritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listaDeseos`: Exposes CRUD operations for the **ListaDeseos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaDeseos
    * const listaDeseos = await prisma.listaDeseos.findMany()
    * ```
    */
  get listaDeseos(): Prisma.ListaDeseosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carritoItem`: Exposes CRUD operations for the **CarritoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarritoItems
    * const carritoItems = await prisma.carritoItem.findMany()
    * ```
    */
  get carritoItem(): Prisma.CarritoItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listaDeseosItem`: Exposes CRUD operations for the **ListaDeseosItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaDeseosItems
    * const listaDeseosItems = await prisma.listaDeseosItem.findMany()
    * ```
    */
  get listaDeseosItem(): Prisma.ListaDeseosItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoItem`: Exposes CRUD operations for the **PedidoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoItems
    * const pedidoItems = await prisma.pedidoItem.findMany()
    * ```
    */
  get pedidoItem(): Prisma.PedidoItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Producto: 'Producto',
    Carrito: 'Carrito',
    ListaDeseos: 'ListaDeseos',
    CarritoItem: 'CarritoItem',
    ListaDeseosItem: 'ListaDeseosItem',
    Pedido: 'Pedido',
    PedidoItem: 'PedidoItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "producto" | "carrito" | "listaDeseos" | "carritoItem" | "listaDeseosItem" | "pedido" | "pedidoItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Carrito: {
        payload: Prisma.$CarritoPayload<ExtArgs>
        fields: Prisma.CarritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          findFirst: {
            args: Prisma.CarritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          findMany: {
            args: Prisma.CarritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>[]
          }
          create: {
            args: Prisma.CarritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          createMany: {
            args: Prisma.CarritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarritoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>[]
          }
          delete: {
            args: Prisma.CarritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          update: {
            args: Prisma.CarritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          deleteMany: {
            args: Prisma.CarritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarritoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>[]
          }
          upsert: {
            args: Prisma.CarritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          aggregate: {
            args: Prisma.CarritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrito>
          }
          groupBy: {
            args: Prisma.CarritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarritoCountArgs<ExtArgs>
            result: $Utils.Optional<CarritoCountAggregateOutputType> | number
          }
        }
      }
      ListaDeseos: {
        payload: Prisma.$ListaDeseosPayload<ExtArgs>
        fields: Prisma.ListaDeseosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListaDeseosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListaDeseosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload>
          }
          findFirst: {
            args: Prisma.ListaDeseosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListaDeseosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload>
          }
          findMany: {
            args: Prisma.ListaDeseosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload>[]
          }
          create: {
            args: Prisma.ListaDeseosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload>
          }
          createMany: {
            args: Prisma.ListaDeseosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListaDeseosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload>[]
          }
          delete: {
            args: Prisma.ListaDeseosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload>
          }
          update: {
            args: Prisma.ListaDeseosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload>
          }
          deleteMany: {
            args: Prisma.ListaDeseosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListaDeseosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListaDeseosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload>[]
          }
          upsert: {
            args: Prisma.ListaDeseosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosPayload>
          }
          aggregate: {
            args: Prisma.ListaDeseosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListaDeseos>
          }
          groupBy: {
            args: Prisma.ListaDeseosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListaDeseosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListaDeseosCountArgs<ExtArgs>
            result: $Utils.Optional<ListaDeseosCountAggregateOutputType> | number
          }
        }
      }
      CarritoItem: {
        payload: Prisma.$CarritoItemPayload<ExtArgs>
        fields: Prisma.CarritoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarritoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarritoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          findFirst: {
            args: Prisma.CarritoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarritoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          findMany: {
            args: Prisma.CarritoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>[]
          }
          create: {
            args: Prisma.CarritoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          createMany: {
            args: Prisma.CarritoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarritoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>[]
          }
          delete: {
            args: Prisma.CarritoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          update: {
            args: Prisma.CarritoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          deleteMany: {
            args: Prisma.CarritoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarritoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarritoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>[]
          }
          upsert: {
            args: Prisma.CarritoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoItemPayload>
          }
          aggregate: {
            args: Prisma.CarritoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarritoItem>
          }
          groupBy: {
            args: Prisma.CarritoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarritoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarritoItemCountArgs<ExtArgs>
            result: $Utils.Optional<CarritoItemCountAggregateOutputType> | number
          }
        }
      }
      ListaDeseosItem: {
        payload: Prisma.$ListaDeseosItemPayload<ExtArgs>
        fields: Prisma.ListaDeseosItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListaDeseosItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListaDeseosItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload>
          }
          findFirst: {
            args: Prisma.ListaDeseosItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListaDeseosItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload>
          }
          findMany: {
            args: Prisma.ListaDeseosItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload>[]
          }
          create: {
            args: Prisma.ListaDeseosItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload>
          }
          createMany: {
            args: Prisma.ListaDeseosItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListaDeseosItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload>[]
          }
          delete: {
            args: Prisma.ListaDeseosItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload>
          }
          update: {
            args: Prisma.ListaDeseosItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload>
          }
          deleteMany: {
            args: Prisma.ListaDeseosItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListaDeseosItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListaDeseosItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload>[]
          }
          upsert: {
            args: Prisma.ListaDeseosItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaDeseosItemPayload>
          }
          aggregate: {
            args: Prisma.ListaDeseosItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListaDeseosItem>
          }
          groupBy: {
            args: Prisma.ListaDeseosItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListaDeseosItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListaDeseosItemCountArgs<ExtArgs>
            result: $Utils.Optional<ListaDeseosItemCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      PedidoItem: {
        payload: Prisma.$PedidoItemPayload<ExtArgs>
        fields: Prisma.PedidoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          findFirst: {
            args: Prisma.PedidoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          findMany: {
            args: Prisma.PedidoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>[]
          }
          create: {
            args: Prisma.PedidoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          createMany: {
            args: Prisma.PedidoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>[]
          }
          delete: {
            args: Prisma.PedidoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          update: {
            args: Prisma.PedidoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          deleteMany: {
            args: Prisma.PedidoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>[]
          }
          upsert: {
            args: Prisma.PedidoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          aggregate: {
            args: Prisma.PedidoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoItem>
          }
          groupBy: {
            args: Prisma.PedidoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoItemCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    producto?: ProductoOmit
    carrito?: CarritoOmit
    listaDeseos?: ListaDeseosOmit
    carritoItem?: CarritoItemOmit
    listaDeseosItem?: ListaDeseosItemOmit
    pedido?: PedidoOmit
    pedidoItem?: PedidoItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    listasDeseos: number
    pedidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listasDeseos?: boolean | UsuarioCountOutputTypeCountListasDeseosArgs
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountListasDeseosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaDeseosWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    carritoItems: number
    listaDeseosItems: number
    pedidoItems: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carritoItems?: boolean | ProductoCountOutputTypeCountCarritoItemsArgs
    listaDeseosItems?: boolean | ProductoCountOutputTypeCountListaDeseosItemsArgs
    pedidoItems?: boolean | ProductoCountOutputTypeCountPedidoItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountCarritoItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoItemWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountListaDeseosItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaDeseosItemWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountPedidoItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoItemWhereInput
  }


  /**
   * Count Type CarritoCountOutputType
   */

  export type CarritoCountOutputType = {
    items: number
  }

  export type CarritoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CarritoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CarritoCountOutputType without action
   */
  export type CarritoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoCountOutputType
     */
    select?: CarritoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarritoCountOutputType without action
   */
  export type CarritoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoItemWhereInput
  }


  /**
   * Count Type ListaDeseosCountOutputType
   */

  export type ListaDeseosCountOutputType = {
    items: number
  }

  export type ListaDeseosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ListaDeseosCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ListaDeseosCountOutputType without action
   */
  export type ListaDeseosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosCountOutputType
     */
    select?: ListaDeseosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListaDeseosCountOutputType without action
   */
  export type ListaDeseosCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaDeseosItemWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    items: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PedidoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    idUsuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    idUsuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    idUsuario: number | null
    nombre: string | null
    email: string | null
    contrasena: string | null
    telefono: string | null
    fechaRegistro: Date | null
    estado: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    idUsuario: number | null
    nombre: string | null
    email: string | null
    contrasena: string | null
    telefono: string | null
    fechaRegistro: Date | null
    estado: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    idUsuario: number
    nombre: number
    email: number
    contrasena: number
    telefono: number
    fechaRegistro: number
    estado: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    idUsuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    idUsuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    idUsuario?: true
    nombre?: true
    email?: true
    contrasena?: true
    telefono?: true
    fechaRegistro?: true
    estado?: true
  }

  export type UsuarioMaxAggregateInputType = {
    idUsuario?: true
    nombre?: true
    email?: true
    contrasena?: true
    telefono?: true
    fechaRegistro?: true
    estado?: true
  }

  export type UsuarioCountAggregateInputType = {
    idUsuario?: true
    nombre?: true
    email?: true
    contrasena?: true
    telefono?: true
    fechaRegistro?: true
    estado?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    idUsuario: number
    nombre: string
    email: string
    contrasena: string
    telefono: string | null
    fechaRegistro: Date
    estado: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    telefono?: boolean
    fechaRegistro?: boolean
    estado?: boolean
    carrito?: boolean | Usuario$carritoArgs<ExtArgs>
    listasDeseos?: boolean | Usuario$listasDeseosArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    telefono?: boolean
    fechaRegistro?: boolean
    estado?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    telefono?: boolean
    fechaRegistro?: boolean
    estado?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    idUsuario?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    telefono?: boolean
    fechaRegistro?: boolean
    estado?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUsuario" | "nombre" | "email" | "contrasena" | "telefono" | "fechaRegistro" | "estado", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrito?: boolean | Usuario$carritoArgs<ExtArgs>
    listasDeseos?: boolean | Usuario$listasDeseosArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      carrito: Prisma.$CarritoPayload<ExtArgs> | null
      listasDeseos: Prisma.$ListaDeseosPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idUsuario: number
      nombre: string
      email: string
      contrasena: string
      telefono: string | null
      fechaRegistro: Date
      estado: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `idUsuario`
     * const usuarioWithIdUsuarioOnly = await prisma.usuario.findMany({ select: { idUsuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `idUsuario`
     * const usuarioWithIdUsuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { idUsuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `idUsuario`
     * const usuarioWithIdUsuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { idUsuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrito<T extends Usuario$carritoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$carritoArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    listasDeseos<T extends Usuario$listasDeseosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$listasDeseosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly idUsuario: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly fechaRegistro: FieldRef<"Usuario", 'DateTime'>
    readonly estado: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.carrito
   */
  export type Usuario$carritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    where?: CarritoWhereInput
  }

  /**
   * Usuario.listasDeseos
   */
  export type Usuario$listasDeseosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
    where?: ListaDeseosWhereInput
    orderBy?: ListaDeseosOrderByWithRelationInput | ListaDeseosOrderByWithRelationInput[]
    cursor?: ListaDeseosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaDeseosScalarFieldEnum | ListaDeseosScalarFieldEnum[]
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    idProducto: number | null
    precio: Decimal | null
    stock: number | null
  }

  export type ProductoSumAggregateOutputType = {
    idProducto: number | null
    precio: Decimal | null
    stock: number | null
  }

  export type ProductoMinAggregateOutputType = {
    idProducto: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    stock: number | null
    categoria: string | null
    fechaCreacion: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    idProducto: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    stock: number | null
    categoria: string | null
    fechaCreacion: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    idProducto: number
    nombre: number
    descripcion: number
    precio: number
    stock: number
    categoria: number
    fechaCreacion: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    idProducto?: true
    precio?: true
    stock?: true
  }

  export type ProductoSumAggregateInputType = {
    idProducto?: true
    precio?: true
    stock?: true
  }

  export type ProductoMinAggregateInputType = {
    idProducto?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    categoria?: true
    fechaCreacion?: true
  }

  export type ProductoMaxAggregateInputType = {
    idProducto?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    categoria?: true
    fechaCreacion?: true
  }

  export type ProductoCountAggregateInputType = {
    idProducto?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    categoria?: true
    fechaCreacion?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    idProducto: number
    nombre: string
    descripcion: string | null
    precio: Decimal
    stock: number
    categoria: string | null
    fechaCreacion: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProducto?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    categoria?: boolean
    fechaCreacion?: boolean
    carritoItems?: boolean | Producto$carritoItemsArgs<ExtArgs>
    listaDeseosItems?: boolean | Producto$listaDeseosItemsArgs<ExtArgs>
    pedidoItems?: boolean | Producto$pedidoItemsArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProducto?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    categoria?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProducto?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    categoria?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    idProducto?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    categoria?: boolean
    fechaCreacion?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idProducto" | "nombre" | "descripcion" | "precio" | "stock" | "categoria" | "fechaCreacion", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carritoItems?: boolean | Producto$carritoItemsArgs<ExtArgs>
    listaDeseosItems?: boolean | Producto$listaDeseosItemsArgs<ExtArgs>
    pedidoItems?: boolean | Producto$pedidoItemsArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      carritoItems: Prisma.$CarritoItemPayload<ExtArgs>[]
      listaDeseosItems: Prisma.$ListaDeseosItemPayload<ExtArgs>[]
      pedidoItems: Prisma.$PedidoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idProducto: number
      nombre: string
      descripcion: string | null
      precio: Prisma.Decimal
      stock: number
      categoria: string | null
      fechaCreacion: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `idProducto`
     * const productoWithIdProductoOnly = await prisma.producto.findMany({ select: { idProducto: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `idProducto`
     * const productoWithIdProductoOnly = await prisma.producto.createManyAndReturn({
     *   select: { idProducto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `idProducto`
     * const productoWithIdProductoOnly = await prisma.producto.updateManyAndReturn({
     *   select: { idProducto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carritoItems<T extends Producto$carritoItemsArgs<ExtArgs> = {}>(args?: Subset<T, Producto$carritoItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listaDeseosItems<T extends Producto$listaDeseosItemsArgs<ExtArgs> = {}>(args?: Subset<T, Producto$listaDeseosItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidoItems<T extends Producto$pedidoItemsArgs<ExtArgs> = {}>(args?: Subset<T, Producto$pedidoItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly idProducto: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Decimal'>
    readonly stock: FieldRef<"Producto", 'Int'>
    readonly categoria: FieldRef<"Producto", 'String'>
    readonly fechaCreacion: FieldRef<"Producto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.carritoItems
   */
  export type Producto$carritoItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    where?: CarritoItemWhereInput
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    cursor?: CarritoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * Producto.listaDeseosItems
   */
  export type Producto$listaDeseosItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    where?: ListaDeseosItemWhereInput
    orderBy?: ListaDeseosItemOrderByWithRelationInput | ListaDeseosItemOrderByWithRelationInput[]
    cursor?: ListaDeseosItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaDeseosItemScalarFieldEnum | ListaDeseosItemScalarFieldEnum[]
  }

  /**
   * Producto.pedidoItems
   */
  export type Producto$pedidoItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    where?: PedidoItemWhereInput
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    cursor?: PedidoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Carrito
   */

  export type AggregateCarrito = {
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  export type CarritoAvgAggregateOutputType = {
    idCarrito: number | null
    idUsuario: number | null
  }

  export type CarritoSumAggregateOutputType = {
    idCarrito: number | null
    idUsuario: number | null
  }

  export type CarritoMinAggregateOutputType = {
    idCarrito: number | null
    idUsuario: number | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type CarritoMaxAggregateOutputType = {
    idCarrito: number | null
    idUsuario: number | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type CarritoCountAggregateOutputType = {
    idCarrito: number
    idUsuario: number
    fechaCreacion: number
    fechaActualizacion: number
    _all: number
  }


  export type CarritoAvgAggregateInputType = {
    idCarrito?: true
    idUsuario?: true
  }

  export type CarritoSumAggregateInputType = {
    idCarrito?: true
    idUsuario?: true
  }

  export type CarritoMinAggregateInputType = {
    idCarrito?: true
    idUsuario?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type CarritoMaxAggregateInputType = {
    idCarrito?: true
    idUsuario?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type CarritoCountAggregateInputType = {
    idCarrito?: true
    idUsuario?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    _all?: true
  }

  export type CarritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrito to aggregate.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carritos
    **/
    _count?: true | CarritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarritoMaxAggregateInputType
  }

  export type GetCarritoAggregateType<T extends CarritoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrito[P]>
      : GetScalarType<T[P], AggregateCarrito[P]>
  }




  export type CarritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoWhereInput
    orderBy?: CarritoOrderByWithAggregationInput | CarritoOrderByWithAggregationInput[]
    by: CarritoScalarFieldEnum[] | CarritoScalarFieldEnum
    having?: CarritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarritoCountAggregateInputType | true
    _avg?: CarritoAvgAggregateInputType
    _sum?: CarritoSumAggregateInputType
    _min?: CarritoMinAggregateInputType
    _max?: CarritoMaxAggregateInputType
  }

  export type CarritoGroupByOutputType = {
    idCarrito: number
    idUsuario: number
    fechaCreacion: Date
    fechaActualizacion: Date
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  type GetCarritoGroupByPayload<T extends CarritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarritoGroupByOutputType[P]>
            : GetScalarType<T[P], CarritoGroupByOutputType[P]>
        }
      >
    >


  export type CarritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCarrito?: boolean
    idUsuario?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    items?: boolean | Carrito$itemsArgs<ExtArgs>
    _count?: boolean | CarritoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrito"]>

  export type CarritoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCarrito?: boolean
    idUsuario?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrito"]>

  export type CarritoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCarrito?: boolean
    idUsuario?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrito"]>

  export type CarritoSelectScalar = {
    idCarrito?: boolean
    idUsuario?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
  }

  export type CarritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCarrito" | "idUsuario" | "fechaCreacion" | "fechaActualizacion", ExtArgs["result"]["carrito"]>
  export type CarritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    items?: boolean | Carrito$itemsArgs<ExtArgs>
    _count?: boolean | CarritoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarritoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CarritoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CarritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrito"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      items: Prisma.$CarritoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idCarrito: number
      idUsuario: number
      fechaCreacion: Date
      fechaActualizacion: Date
    }, ExtArgs["result"]["carrito"]>
    composites: {}
  }

  type CarritoGetPayload<S extends boolean | null | undefined | CarritoDefaultArgs> = $Result.GetResult<Prisma.$CarritoPayload, S>

  type CarritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarritoCountAggregateInputType | true
    }

  export interface CarritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrito'], meta: { name: 'Carrito' } }
    /**
     * Find zero or one Carrito that matches the filter.
     * @param {CarritoFindUniqueArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarritoFindUniqueArgs>(args: SelectSubset<T, CarritoFindUniqueArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarritoFindUniqueOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarritoFindUniqueOrThrowArgs>(args: SelectSubset<T, CarritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarritoFindFirstArgs>(args?: SelectSubset<T, CarritoFindFirstArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarritoFindFirstOrThrowArgs>(args?: SelectSubset<T, CarritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carritos
     * const carritos = await prisma.carrito.findMany()
     * 
     * // Get first 10 Carritos
     * const carritos = await prisma.carrito.findMany({ take: 10 })
     * 
     * // Only select the `idCarrito`
     * const carritoWithIdCarritoOnly = await prisma.carrito.findMany({ select: { idCarrito: true } })
     * 
     */
    findMany<T extends CarritoFindManyArgs>(args?: SelectSubset<T, CarritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrito.
     * @param {CarritoCreateArgs} args - Arguments to create a Carrito.
     * @example
     * // Create one Carrito
     * const Carrito = await prisma.carrito.create({
     *   data: {
     *     // ... data to create a Carrito
     *   }
     * })
     * 
     */
    create<T extends CarritoCreateArgs>(args: SelectSubset<T, CarritoCreateArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carritos.
     * @param {CarritoCreateManyArgs} args - Arguments to create many Carritos.
     * @example
     * // Create many Carritos
     * const carrito = await prisma.carrito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarritoCreateManyArgs>(args?: SelectSubset<T, CarritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carritos and returns the data saved in the database.
     * @param {CarritoCreateManyAndReturnArgs} args - Arguments to create many Carritos.
     * @example
     * // Create many Carritos
     * const carrito = await prisma.carrito.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carritos and only return the `idCarrito`
     * const carritoWithIdCarritoOnly = await prisma.carrito.createManyAndReturn({
     *   select: { idCarrito: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarritoCreateManyAndReturnArgs>(args?: SelectSubset<T, CarritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrito.
     * @param {CarritoDeleteArgs} args - Arguments to delete one Carrito.
     * @example
     * // Delete one Carrito
     * const Carrito = await prisma.carrito.delete({
     *   where: {
     *     // ... filter to delete one Carrito
     *   }
     * })
     * 
     */
    delete<T extends CarritoDeleteArgs>(args: SelectSubset<T, CarritoDeleteArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrito.
     * @param {CarritoUpdateArgs} args - Arguments to update one Carrito.
     * @example
     * // Update one Carrito
     * const carrito = await prisma.carrito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarritoUpdateArgs>(args: SelectSubset<T, CarritoUpdateArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carritos.
     * @param {CarritoDeleteManyArgs} args - Arguments to filter Carritos to delete.
     * @example
     * // Delete a few Carritos
     * const { count } = await prisma.carrito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarritoDeleteManyArgs>(args?: SelectSubset<T, CarritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carritos
     * const carrito = await prisma.carrito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarritoUpdateManyArgs>(args: SelectSubset<T, CarritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carritos and returns the data updated in the database.
     * @param {CarritoUpdateManyAndReturnArgs} args - Arguments to update many Carritos.
     * @example
     * // Update many Carritos
     * const carrito = await prisma.carrito.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carritos and only return the `idCarrito`
     * const carritoWithIdCarritoOnly = await prisma.carrito.updateManyAndReturn({
     *   select: { idCarrito: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarritoUpdateManyAndReturnArgs>(args: SelectSubset<T, CarritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrito.
     * @param {CarritoUpsertArgs} args - Arguments to update or create a Carrito.
     * @example
     * // Update or create a Carrito
     * const carrito = await prisma.carrito.upsert({
     *   create: {
     *     // ... data to create a Carrito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrito we want to update
     *   }
     * })
     */
    upsert<T extends CarritoUpsertArgs>(args: SelectSubset<T, CarritoUpsertArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoCountArgs} args - Arguments to filter Carritos to count.
     * @example
     * // Count the number of Carritos
     * const count = await prisma.carrito.count({
     *   where: {
     *     // ... the filter for the Carritos we want to count
     *   }
     * })
    **/
    count<T extends CarritoCountArgs>(
      args?: Subset<T, CarritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarritoAggregateArgs>(args: Subset<T, CarritoAggregateArgs>): Prisma.PrismaPromise<GetCarritoAggregateType<T>>

    /**
     * Group by Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarritoGroupByArgs['orderBy'] }
        : { orderBy?: CarritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrito model
   */
  readonly fields: CarritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Carrito$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Carrito$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carrito model
   */
  interface CarritoFieldRefs {
    readonly idCarrito: FieldRef<"Carrito", 'Int'>
    readonly idUsuario: FieldRef<"Carrito", 'Int'>
    readonly fechaCreacion: FieldRef<"Carrito", 'DateTime'>
    readonly fechaActualizacion: FieldRef<"Carrito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Carrito findUnique
   */
  export type CarritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito findUniqueOrThrow
   */
  export type CarritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito findFirst
   */
  export type CarritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito findFirstOrThrow
   */
  export type CarritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito findMany
   */
  export type CarritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carritos to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito create
   */
  export type CarritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrito.
     */
    data: XOR<CarritoCreateInput, CarritoUncheckedCreateInput>
  }

  /**
   * Carrito createMany
   */
  export type CarritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carritos.
     */
    data: CarritoCreateManyInput | CarritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrito createManyAndReturn
   */
  export type CarritoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * The data used to create many Carritos.
     */
    data: CarritoCreateManyInput | CarritoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carrito update
   */
  export type CarritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrito.
     */
    data: XOR<CarritoUpdateInput, CarritoUncheckedUpdateInput>
    /**
     * Choose, which Carrito to update.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito updateMany
   */
  export type CarritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carritos.
     */
    data: XOR<CarritoUpdateManyMutationInput, CarritoUncheckedUpdateManyInput>
    /**
     * Filter which Carritos to update
     */
    where?: CarritoWhereInput
    /**
     * Limit how many Carritos to update.
     */
    limit?: number
  }

  /**
   * Carrito updateManyAndReturn
   */
  export type CarritoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * The data used to update Carritos.
     */
    data: XOR<CarritoUpdateManyMutationInput, CarritoUncheckedUpdateManyInput>
    /**
     * Filter which Carritos to update
     */
    where?: CarritoWhereInput
    /**
     * Limit how many Carritos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carrito upsert
   */
  export type CarritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrito to update in case it exists.
     */
    where: CarritoWhereUniqueInput
    /**
     * In case the Carrito found by the `where` argument doesn't exist, create a new Carrito with this data.
     */
    create: XOR<CarritoCreateInput, CarritoUncheckedCreateInput>
    /**
     * In case the Carrito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarritoUpdateInput, CarritoUncheckedUpdateInput>
  }

  /**
   * Carrito delete
   */
  export type CarritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter which Carrito to delete.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito deleteMany
   */
  export type CarritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carritos to delete
     */
    where?: CarritoWhereInput
    /**
     * Limit how many Carritos to delete.
     */
    limit?: number
  }

  /**
   * Carrito.items
   */
  export type Carrito$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    where?: CarritoItemWhereInput
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    cursor?: CarritoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * Carrito without action
   */
  export type CarritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
  }


  /**
   * Model ListaDeseos
   */

  export type AggregateListaDeseos = {
    _count: ListaDeseosCountAggregateOutputType | null
    _avg: ListaDeseosAvgAggregateOutputType | null
    _sum: ListaDeseosSumAggregateOutputType | null
    _min: ListaDeseosMinAggregateOutputType | null
    _max: ListaDeseosMaxAggregateOutputType | null
  }

  export type ListaDeseosAvgAggregateOutputType = {
    idListaDeseos: number | null
    idUsuario: number | null
  }

  export type ListaDeseosSumAggregateOutputType = {
    idListaDeseos: number | null
    idUsuario: number | null
  }

  export type ListaDeseosMinAggregateOutputType = {
    idListaDeseos: number | null
    idUsuario: number | null
    nombre: string | null
    fechaCreacion: Date | null
  }

  export type ListaDeseosMaxAggregateOutputType = {
    idListaDeseos: number | null
    idUsuario: number | null
    nombre: string | null
    fechaCreacion: Date | null
  }

  export type ListaDeseosCountAggregateOutputType = {
    idListaDeseos: number
    idUsuario: number
    nombre: number
    fechaCreacion: number
    _all: number
  }


  export type ListaDeseosAvgAggregateInputType = {
    idListaDeseos?: true
    idUsuario?: true
  }

  export type ListaDeseosSumAggregateInputType = {
    idListaDeseos?: true
    idUsuario?: true
  }

  export type ListaDeseosMinAggregateInputType = {
    idListaDeseos?: true
    idUsuario?: true
    nombre?: true
    fechaCreacion?: true
  }

  export type ListaDeseosMaxAggregateInputType = {
    idListaDeseos?: true
    idUsuario?: true
    nombre?: true
    fechaCreacion?: true
  }

  export type ListaDeseosCountAggregateInputType = {
    idListaDeseos?: true
    idUsuario?: true
    nombre?: true
    fechaCreacion?: true
    _all?: true
  }

  export type ListaDeseosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaDeseos to aggregate.
     */
    where?: ListaDeseosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeseos to fetch.
     */
    orderBy?: ListaDeseosOrderByWithRelationInput | ListaDeseosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListaDeseosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeseos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeseos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaDeseos
    **/
    _count?: true | ListaDeseosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListaDeseosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListaDeseosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaDeseosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaDeseosMaxAggregateInputType
  }

  export type GetListaDeseosAggregateType<T extends ListaDeseosAggregateArgs> = {
        [P in keyof T & keyof AggregateListaDeseos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaDeseos[P]>
      : GetScalarType<T[P], AggregateListaDeseos[P]>
  }




  export type ListaDeseosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaDeseosWhereInput
    orderBy?: ListaDeseosOrderByWithAggregationInput | ListaDeseosOrderByWithAggregationInput[]
    by: ListaDeseosScalarFieldEnum[] | ListaDeseosScalarFieldEnum
    having?: ListaDeseosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaDeseosCountAggregateInputType | true
    _avg?: ListaDeseosAvgAggregateInputType
    _sum?: ListaDeseosSumAggregateInputType
    _min?: ListaDeseosMinAggregateInputType
    _max?: ListaDeseosMaxAggregateInputType
  }

  export type ListaDeseosGroupByOutputType = {
    idListaDeseos: number
    idUsuario: number
    nombre: string
    fechaCreacion: Date
    _count: ListaDeseosCountAggregateOutputType | null
    _avg: ListaDeseosAvgAggregateOutputType | null
    _sum: ListaDeseosSumAggregateOutputType | null
    _min: ListaDeseosMinAggregateOutputType | null
    _max: ListaDeseosMaxAggregateOutputType | null
  }

  type GetListaDeseosGroupByPayload<T extends ListaDeseosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListaDeseosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaDeseosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaDeseosGroupByOutputType[P]>
            : GetScalarType<T[P], ListaDeseosGroupByOutputType[P]>
        }
      >
    >


  export type ListaDeseosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idListaDeseos?: boolean
    idUsuario?: boolean
    nombre?: boolean
    fechaCreacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    items?: boolean | ListaDeseos$itemsArgs<ExtArgs>
    _count?: boolean | ListaDeseosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaDeseos"]>

  export type ListaDeseosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idListaDeseos?: boolean
    idUsuario?: boolean
    nombre?: boolean
    fechaCreacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaDeseos"]>

  export type ListaDeseosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idListaDeseos?: boolean
    idUsuario?: boolean
    nombre?: boolean
    fechaCreacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaDeseos"]>

  export type ListaDeseosSelectScalar = {
    idListaDeseos?: boolean
    idUsuario?: boolean
    nombre?: boolean
    fechaCreacion?: boolean
  }

  export type ListaDeseosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idListaDeseos" | "idUsuario" | "nombre" | "fechaCreacion", ExtArgs["result"]["listaDeseos"]>
  export type ListaDeseosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    items?: boolean | ListaDeseos$itemsArgs<ExtArgs>
    _count?: boolean | ListaDeseosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListaDeseosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ListaDeseosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ListaDeseosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListaDeseos"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      items: Prisma.$ListaDeseosItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idListaDeseos: number
      idUsuario: number
      nombre: string
      fechaCreacion: Date
    }, ExtArgs["result"]["listaDeseos"]>
    composites: {}
  }

  type ListaDeseosGetPayload<S extends boolean | null | undefined | ListaDeseosDefaultArgs> = $Result.GetResult<Prisma.$ListaDeseosPayload, S>

  type ListaDeseosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListaDeseosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListaDeseosCountAggregateInputType | true
    }

  export interface ListaDeseosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListaDeseos'], meta: { name: 'ListaDeseos' } }
    /**
     * Find zero or one ListaDeseos that matches the filter.
     * @param {ListaDeseosFindUniqueArgs} args - Arguments to find a ListaDeseos
     * @example
     * // Get one ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListaDeseosFindUniqueArgs>(args: SelectSubset<T, ListaDeseosFindUniqueArgs<ExtArgs>>): Prisma__ListaDeseosClient<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListaDeseos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListaDeseosFindUniqueOrThrowArgs} args - Arguments to find a ListaDeseos
     * @example
     * // Get one ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListaDeseosFindUniqueOrThrowArgs>(args: SelectSubset<T, ListaDeseosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListaDeseosClient<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaDeseos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosFindFirstArgs} args - Arguments to find a ListaDeseos
     * @example
     * // Get one ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListaDeseosFindFirstArgs>(args?: SelectSubset<T, ListaDeseosFindFirstArgs<ExtArgs>>): Prisma__ListaDeseosClient<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaDeseos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosFindFirstOrThrowArgs} args - Arguments to find a ListaDeseos
     * @example
     * // Get one ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListaDeseosFindFirstOrThrowArgs>(args?: SelectSubset<T, ListaDeseosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListaDeseosClient<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListaDeseos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.findMany()
     * 
     * // Get first 10 ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.findMany({ take: 10 })
     * 
     * // Only select the `idListaDeseos`
     * const listaDeseosWithIdListaDeseosOnly = await prisma.listaDeseos.findMany({ select: { idListaDeseos: true } })
     * 
     */
    findMany<T extends ListaDeseosFindManyArgs>(args?: SelectSubset<T, ListaDeseosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListaDeseos.
     * @param {ListaDeseosCreateArgs} args - Arguments to create a ListaDeseos.
     * @example
     * // Create one ListaDeseos
     * const ListaDeseos = await prisma.listaDeseos.create({
     *   data: {
     *     // ... data to create a ListaDeseos
     *   }
     * })
     * 
     */
    create<T extends ListaDeseosCreateArgs>(args: SelectSubset<T, ListaDeseosCreateArgs<ExtArgs>>): Prisma__ListaDeseosClient<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListaDeseos.
     * @param {ListaDeseosCreateManyArgs} args - Arguments to create many ListaDeseos.
     * @example
     * // Create many ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListaDeseosCreateManyArgs>(args?: SelectSubset<T, ListaDeseosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListaDeseos and returns the data saved in the database.
     * @param {ListaDeseosCreateManyAndReturnArgs} args - Arguments to create many ListaDeseos.
     * @example
     * // Create many ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListaDeseos and only return the `idListaDeseos`
     * const listaDeseosWithIdListaDeseosOnly = await prisma.listaDeseos.createManyAndReturn({
     *   select: { idListaDeseos: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListaDeseosCreateManyAndReturnArgs>(args?: SelectSubset<T, ListaDeseosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListaDeseos.
     * @param {ListaDeseosDeleteArgs} args - Arguments to delete one ListaDeseos.
     * @example
     * // Delete one ListaDeseos
     * const ListaDeseos = await prisma.listaDeseos.delete({
     *   where: {
     *     // ... filter to delete one ListaDeseos
     *   }
     * })
     * 
     */
    delete<T extends ListaDeseosDeleteArgs>(args: SelectSubset<T, ListaDeseosDeleteArgs<ExtArgs>>): Prisma__ListaDeseosClient<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListaDeseos.
     * @param {ListaDeseosUpdateArgs} args - Arguments to update one ListaDeseos.
     * @example
     * // Update one ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListaDeseosUpdateArgs>(args: SelectSubset<T, ListaDeseosUpdateArgs<ExtArgs>>): Prisma__ListaDeseosClient<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListaDeseos.
     * @param {ListaDeseosDeleteManyArgs} args - Arguments to filter ListaDeseos to delete.
     * @example
     * // Delete a few ListaDeseos
     * const { count } = await prisma.listaDeseos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListaDeseosDeleteManyArgs>(args?: SelectSubset<T, ListaDeseosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaDeseos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListaDeseosUpdateManyArgs>(args: SelectSubset<T, ListaDeseosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaDeseos and returns the data updated in the database.
     * @param {ListaDeseosUpdateManyAndReturnArgs} args - Arguments to update many ListaDeseos.
     * @example
     * // Update many ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListaDeseos and only return the `idListaDeseos`
     * const listaDeseosWithIdListaDeseosOnly = await prisma.listaDeseos.updateManyAndReturn({
     *   select: { idListaDeseos: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListaDeseosUpdateManyAndReturnArgs>(args: SelectSubset<T, ListaDeseosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListaDeseos.
     * @param {ListaDeseosUpsertArgs} args - Arguments to update or create a ListaDeseos.
     * @example
     * // Update or create a ListaDeseos
     * const listaDeseos = await prisma.listaDeseos.upsert({
     *   create: {
     *     // ... data to create a ListaDeseos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaDeseos we want to update
     *   }
     * })
     */
    upsert<T extends ListaDeseosUpsertArgs>(args: SelectSubset<T, ListaDeseosUpsertArgs<ExtArgs>>): Prisma__ListaDeseosClient<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListaDeseos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosCountArgs} args - Arguments to filter ListaDeseos to count.
     * @example
     * // Count the number of ListaDeseos
     * const count = await prisma.listaDeseos.count({
     *   where: {
     *     // ... the filter for the ListaDeseos we want to count
     *   }
     * })
    **/
    count<T extends ListaDeseosCountArgs>(
      args?: Subset<T, ListaDeseosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaDeseosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaDeseos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListaDeseosAggregateArgs>(args: Subset<T, ListaDeseosAggregateArgs>): Prisma.PrismaPromise<GetListaDeseosAggregateType<T>>

    /**
     * Group by ListaDeseos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListaDeseosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaDeseosGroupByArgs['orderBy'] }
        : { orderBy?: ListaDeseosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListaDeseosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaDeseosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListaDeseos model
   */
  readonly fields: ListaDeseosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaDeseos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListaDeseosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends ListaDeseos$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ListaDeseos$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListaDeseos model
   */
  interface ListaDeseosFieldRefs {
    readonly idListaDeseos: FieldRef<"ListaDeseos", 'Int'>
    readonly idUsuario: FieldRef<"ListaDeseos", 'Int'>
    readonly nombre: FieldRef<"ListaDeseos", 'String'>
    readonly fechaCreacion: FieldRef<"ListaDeseos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListaDeseos findUnique
   */
  export type ListaDeseosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeseos to fetch.
     */
    where: ListaDeseosWhereUniqueInput
  }

  /**
   * ListaDeseos findUniqueOrThrow
   */
  export type ListaDeseosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeseos to fetch.
     */
    where: ListaDeseosWhereUniqueInput
  }

  /**
   * ListaDeseos findFirst
   */
  export type ListaDeseosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeseos to fetch.
     */
    where?: ListaDeseosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeseos to fetch.
     */
    orderBy?: ListaDeseosOrderByWithRelationInput | ListaDeseosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaDeseos.
     */
    cursor?: ListaDeseosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeseos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeseos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaDeseos.
     */
    distinct?: ListaDeseosScalarFieldEnum | ListaDeseosScalarFieldEnum[]
  }

  /**
   * ListaDeseos findFirstOrThrow
   */
  export type ListaDeseosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeseos to fetch.
     */
    where?: ListaDeseosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeseos to fetch.
     */
    orderBy?: ListaDeseosOrderByWithRelationInput | ListaDeseosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaDeseos.
     */
    cursor?: ListaDeseosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeseos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeseos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaDeseos.
     */
    distinct?: ListaDeseosScalarFieldEnum | ListaDeseosScalarFieldEnum[]
  }

  /**
   * ListaDeseos findMany
   */
  export type ListaDeseosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeseos to fetch.
     */
    where?: ListaDeseosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeseos to fetch.
     */
    orderBy?: ListaDeseosOrderByWithRelationInput | ListaDeseosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaDeseos.
     */
    cursor?: ListaDeseosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeseos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeseos.
     */
    skip?: number
    distinct?: ListaDeseosScalarFieldEnum | ListaDeseosScalarFieldEnum[]
  }

  /**
   * ListaDeseos create
   */
  export type ListaDeseosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
    /**
     * The data needed to create a ListaDeseos.
     */
    data: XOR<ListaDeseosCreateInput, ListaDeseosUncheckedCreateInput>
  }

  /**
   * ListaDeseos createMany
   */
  export type ListaDeseosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListaDeseos.
     */
    data: ListaDeseosCreateManyInput | ListaDeseosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListaDeseos createManyAndReturn
   */
  export type ListaDeseosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * The data used to create many ListaDeseos.
     */
    data: ListaDeseosCreateManyInput | ListaDeseosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaDeseos update
   */
  export type ListaDeseosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
    /**
     * The data needed to update a ListaDeseos.
     */
    data: XOR<ListaDeseosUpdateInput, ListaDeseosUncheckedUpdateInput>
    /**
     * Choose, which ListaDeseos to update.
     */
    where: ListaDeseosWhereUniqueInput
  }

  /**
   * ListaDeseos updateMany
   */
  export type ListaDeseosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListaDeseos.
     */
    data: XOR<ListaDeseosUpdateManyMutationInput, ListaDeseosUncheckedUpdateManyInput>
    /**
     * Filter which ListaDeseos to update
     */
    where?: ListaDeseosWhereInput
    /**
     * Limit how many ListaDeseos to update.
     */
    limit?: number
  }

  /**
   * ListaDeseos updateManyAndReturn
   */
  export type ListaDeseosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * The data used to update ListaDeseos.
     */
    data: XOR<ListaDeseosUpdateManyMutationInput, ListaDeseosUncheckedUpdateManyInput>
    /**
     * Filter which ListaDeseos to update
     */
    where?: ListaDeseosWhereInput
    /**
     * Limit how many ListaDeseos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaDeseos upsert
   */
  export type ListaDeseosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
    /**
     * The filter to search for the ListaDeseos to update in case it exists.
     */
    where: ListaDeseosWhereUniqueInput
    /**
     * In case the ListaDeseos found by the `where` argument doesn't exist, create a new ListaDeseos with this data.
     */
    create: XOR<ListaDeseosCreateInput, ListaDeseosUncheckedCreateInput>
    /**
     * In case the ListaDeseos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListaDeseosUpdateInput, ListaDeseosUncheckedUpdateInput>
  }

  /**
   * ListaDeseos delete
   */
  export type ListaDeseosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
    /**
     * Filter which ListaDeseos to delete.
     */
    where: ListaDeseosWhereUniqueInput
  }

  /**
   * ListaDeseos deleteMany
   */
  export type ListaDeseosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaDeseos to delete
     */
    where?: ListaDeseosWhereInput
    /**
     * Limit how many ListaDeseos to delete.
     */
    limit?: number
  }

  /**
   * ListaDeseos.items
   */
  export type ListaDeseos$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    where?: ListaDeseosItemWhereInput
    orderBy?: ListaDeseosItemOrderByWithRelationInput | ListaDeseosItemOrderByWithRelationInput[]
    cursor?: ListaDeseosItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaDeseosItemScalarFieldEnum | ListaDeseosItemScalarFieldEnum[]
  }

  /**
   * ListaDeseos without action
   */
  export type ListaDeseosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseos
     */
    select?: ListaDeseosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseos
     */
    omit?: ListaDeseosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosInclude<ExtArgs> | null
  }


  /**
   * Model CarritoItem
   */

  export type AggregateCarritoItem = {
    _count: CarritoItemCountAggregateOutputType | null
    _avg: CarritoItemAvgAggregateOutputType | null
    _sum: CarritoItemSumAggregateOutputType | null
    _min: CarritoItemMinAggregateOutputType | null
    _max: CarritoItemMaxAggregateOutputType | null
  }

  export type CarritoItemAvgAggregateOutputType = {
    idCarritoItem: number | null
    idCarrito: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type CarritoItemSumAggregateOutputType = {
    idCarritoItem: number | null
    idCarrito: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type CarritoItemMinAggregateOutputType = {
    idCarritoItem: number | null
    idCarrito: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type CarritoItemMaxAggregateOutputType = {
    idCarritoItem: number | null
    idCarrito: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type CarritoItemCountAggregateOutputType = {
    idCarritoItem: number
    idCarrito: number
    idProducto: number
    cantidad: number
    precioUnitario: number
    _all: number
  }


  export type CarritoItemAvgAggregateInputType = {
    idCarritoItem?: true
    idCarrito?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type CarritoItemSumAggregateInputType = {
    idCarritoItem?: true
    idCarrito?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type CarritoItemMinAggregateInputType = {
    idCarritoItem?: true
    idCarrito?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type CarritoItemMaxAggregateInputType = {
    idCarritoItem?: true
    idCarrito?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type CarritoItemCountAggregateInputType = {
    idCarritoItem?: true
    idCarrito?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
    _all?: true
  }

  export type CarritoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarritoItem to aggregate.
     */
    where?: CarritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoItems to fetch.
     */
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarritoItems
    **/
    _count?: true | CarritoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarritoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarritoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarritoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarritoItemMaxAggregateInputType
  }

  export type GetCarritoItemAggregateType<T extends CarritoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCarritoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarritoItem[P]>
      : GetScalarType<T[P], AggregateCarritoItem[P]>
  }




  export type CarritoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoItemWhereInput
    orderBy?: CarritoItemOrderByWithAggregationInput | CarritoItemOrderByWithAggregationInput[]
    by: CarritoItemScalarFieldEnum[] | CarritoItemScalarFieldEnum
    having?: CarritoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarritoItemCountAggregateInputType | true
    _avg?: CarritoItemAvgAggregateInputType
    _sum?: CarritoItemSumAggregateInputType
    _min?: CarritoItemMinAggregateInputType
    _max?: CarritoItemMaxAggregateInputType
  }

  export type CarritoItemGroupByOutputType = {
    idCarritoItem: number
    idCarrito: number
    idProducto: number
    cantidad: number
    precioUnitario: Decimal
    _count: CarritoItemCountAggregateOutputType | null
    _avg: CarritoItemAvgAggregateOutputType | null
    _sum: CarritoItemSumAggregateOutputType | null
    _min: CarritoItemMinAggregateOutputType | null
    _max: CarritoItemMaxAggregateOutputType | null
  }

  type GetCarritoItemGroupByPayload<T extends CarritoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarritoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarritoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarritoItemGroupByOutputType[P]>
            : GetScalarType<T[P], CarritoItemGroupByOutputType[P]>
        }
      >
    >


  export type CarritoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCarritoItem?: boolean
    idCarrito?: boolean
    idProducto?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carritoItem"]>

  export type CarritoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCarritoItem?: boolean
    idCarrito?: boolean
    idProducto?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carritoItem"]>

  export type CarritoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCarritoItem?: boolean
    idCarrito?: boolean
    idProducto?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carritoItem"]>

  export type CarritoItemSelectScalar = {
    idCarritoItem?: boolean
    idCarrito?: boolean
    idProducto?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
  }

  export type CarritoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCarritoItem" | "idCarrito" | "idProducto" | "cantidad" | "precioUnitario", ExtArgs["result"]["carritoItem"]>
  export type CarritoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type CarritoItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type CarritoItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $CarritoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarritoItem"
    objects: {
      carrito: Prisma.$CarritoPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idCarritoItem: number
      idCarrito: number
      idProducto: number
      cantidad: number
      precioUnitario: Prisma.Decimal
    }, ExtArgs["result"]["carritoItem"]>
    composites: {}
  }

  type CarritoItemGetPayload<S extends boolean | null | undefined | CarritoItemDefaultArgs> = $Result.GetResult<Prisma.$CarritoItemPayload, S>

  type CarritoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarritoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarritoItemCountAggregateInputType | true
    }

  export interface CarritoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarritoItem'], meta: { name: 'CarritoItem' } }
    /**
     * Find zero or one CarritoItem that matches the filter.
     * @param {CarritoItemFindUniqueArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarritoItemFindUniqueArgs>(args: SelectSubset<T, CarritoItemFindUniqueArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarritoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarritoItemFindUniqueOrThrowArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarritoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CarritoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarritoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemFindFirstArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarritoItemFindFirstArgs>(args?: SelectSubset<T, CarritoItemFindFirstArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarritoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemFindFirstOrThrowArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarritoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CarritoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarritoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarritoItems
     * const carritoItems = await prisma.carritoItem.findMany()
     * 
     * // Get first 10 CarritoItems
     * const carritoItems = await prisma.carritoItem.findMany({ take: 10 })
     * 
     * // Only select the `idCarritoItem`
     * const carritoItemWithIdCarritoItemOnly = await prisma.carritoItem.findMany({ select: { idCarritoItem: true } })
     * 
     */
    findMany<T extends CarritoItemFindManyArgs>(args?: SelectSubset<T, CarritoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarritoItem.
     * @param {CarritoItemCreateArgs} args - Arguments to create a CarritoItem.
     * @example
     * // Create one CarritoItem
     * const CarritoItem = await prisma.carritoItem.create({
     *   data: {
     *     // ... data to create a CarritoItem
     *   }
     * })
     * 
     */
    create<T extends CarritoItemCreateArgs>(args: SelectSubset<T, CarritoItemCreateArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarritoItems.
     * @param {CarritoItemCreateManyArgs} args - Arguments to create many CarritoItems.
     * @example
     * // Create many CarritoItems
     * const carritoItem = await prisma.carritoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarritoItemCreateManyArgs>(args?: SelectSubset<T, CarritoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarritoItems and returns the data saved in the database.
     * @param {CarritoItemCreateManyAndReturnArgs} args - Arguments to create many CarritoItems.
     * @example
     * // Create many CarritoItems
     * const carritoItem = await prisma.carritoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarritoItems and only return the `idCarritoItem`
     * const carritoItemWithIdCarritoItemOnly = await prisma.carritoItem.createManyAndReturn({
     *   select: { idCarritoItem: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarritoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CarritoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarritoItem.
     * @param {CarritoItemDeleteArgs} args - Arguments to delete one CarritoItem.
     * @example
     * // Delete one CarritoItem
     * const CarritoItem = await prisma.carritoItem.delete({
     *   where: {
     *     // ... filter to delete one CarritoItem
     *   }
     * })
     * 
     */
    delete<T extends CarritoItemDeleteArgs>(args: SelectSubset<T, CarritoItemDeleteArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarritoItem.
     * @param {CarritoItemUpdateArgs} args - Arguments to update one CarritoItem.
     * @example
     * // Update one CarritoItem
     * const carritoItem = await prisma.carritoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarritoItemUpdateArgs>(args: SelectSubset<T, CarritoItemUpdateArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarritoItems.
     * @param {CarritoItemDeleteManyArgs} args - Arguments to filter CarritoItems to delete.
     * @example
     * // Delete a few CarritoItems
     * const { count } = await prisma.carritoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarritoItemDeleteManyArgs>(args?: SelectSubset<T, CarritoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarritoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarritoItems
     * const carritoItem = await prisma.carritoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarritoItemUpdateManyArgs>(args: SelectSubset<T, CarritoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarritoItems and returns the data updated in the database.
     * @param {CarritoItemUpdateManyAndReturnArgs} args - Arguments to update many CarritoItems.
     * @example
     * // Update many CarritoItems
     * const carritoItem = await prisma.carritoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarritoItems and only return the `idCarritoItem`
     * const carritoItemWithIdCarritoItemOnly = await prisma.carritoItem.updateManyAndReturn({
     *   select: { idCarritoItem: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarritoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CarritoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarritoItem.
     * @param {CarritoItemUpsertArgs} args - Arguments to update or create a CarritoItem.
     * @example
     * // Update or create a CarritoItem
     * const carritoItem = await prisma.carritoItem.upsert({
     *   create: {
     *     // ... data to create a CarritoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarritoItem we want to update
     *   }
     * })
     */
    upsert<T extends CarritoItemUpsertArgs>(args: SelectSubset<T, CarritoItemUpsertArgs<ExtArgs>>): Prisma__CarritoItemClient<$Result.GetResult<Prisma.$CarritoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarritoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemCountArgs} args - Arguments to filter CarritoItems to count.
     * @example
     * // Count the number of CarritoItems
     * const count = await prisma.carritoItem.count({
     *   where: {
     *     // ... the filter for the CarritoItems we want to count
     *   }
     * })
    **/
    count<T extends CarritoItemCountArgs>(
      args?: Subset<T, CarritoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarritoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarritoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarritoItemAggregateArgs>(args: Subset<T, CarritoItemAggregateArgs>): Prisma.PrismaPromise<GetCarritoItemAggregateType<T>>

    /**
     * Group by CarritoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarritoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarritoItemGroupByArgs['orderBy'] }
        : { orderBy?: CarritoItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarritoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarritoItem model
   */
  readonly fields: CarritoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarritoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarritoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrito<T extends CarritoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarritoDefaultArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarritoItem model
   */
  interface CarritoItemFieldRefs {
    readonly idCarritoItem: FieldRef<"CarritoItem", 'Int'>
    readonly idCarrito: FieldRef<"CarritoItem", 'Int'>
    readonly idProducto: FieldRef<"CarritoItem", 'Int'>
    readonly cantidad: FieldRef<"CarritoItem", 'Int'>
    readonly precioUnitario: FieldRef<"CarritoItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * CarritoItem findUnique
   */
  export type CarritoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter, which CarritoItem to fetch.
     */
    where: CarritoItemWhereUniqueInput
  }

  /**
   * CarritoItem findUniqueOrThrow
   */
  export type CarritoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter, which CarritoItem to fetch.
     */
    where: CarritoItemWhereUniqueInput
  }

  /**
   * CarritoItem findFirst
   */
  export type CarritoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter, which CarritoItem to fetch.
     */
    where?: CarritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoItems to fetch.
     */
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarritoItems.
     */
    cursor?: CarritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarritoItems.
     */
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * CarritoItem findFirstOrThrow
   */
  export type CarritoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter, which CarritoItem to fetch.
     */
    where?: CarritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoItems to fetch.
     */
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarritoItems.
     */
    cursor?: CarritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarritoItems.
     */
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * CarritoItem findMany
   */
  export type CarritoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter, which CarritoItems to fetch.
     */
    where?: CarritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoItems to fetch.
     */
    orderBy?: CarritoItemOrderByWithRelationInput | CarritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarritoItems.
     */
    cursor?: CarritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoItems.
     */
    skip?: number
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * CarritoItem create
   */
  export type CarritoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CarritoItem.
     */
    data: XOR<CarritoItemCreateInput, CarritoItemUncheckedCreateInput>
  }

  /**
   * CarritoItem createMany
   */
  export type CarritoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarritoItems.
     */
    data: CarritoItemCreateManyInput | CarritoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarritoItem createManyAndReturn
   */
  export type CarritoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * The data used to create many CarritoItems.
     */
    data: CarritoItemCreateManyInput | CarritoItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarritoItem update
   */
  export type CarritoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CarritoItem.
     */
    data: XOR<CarritoItemUpdateInput, CarritoItemUncheckedUpdateInput>
    /**
     * Choose, which CarritoItem to update.
     */
    where: CarritoItemWhereUniqueInput
  }

  /**
   * CarritoItem updateMany
   */
  export type CarritoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarritoItems.
     */
    data: XOR<CarritoItemUpdateManyMutationInput, CarritoItemUncheckedUpdateManyInput>
    /**
     * Filter which CarritoItems to update
     */
    where?: CarritoItemWhereInput
    /**
     * Limit how many CarritoItems to update.
     */
    limit?: number
  }

  /**
   * CarritoItem updateManyAndReturn
   */
  export type CarritoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * The data used to update CarritoItems.
     */
    data: XOR<CarritoItemUpdateManyMutationInput, CarritoItemUncheckedUpdateManyInput>
    /**
     * Filter which CarritoItems to update
     */
    where?: CarritoItemWhereInput
    /**
     * Limit how many CarritoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarritoItem upsert
   */
  export type CarritoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CarritoItem to update in case it exists.
     */
    where: CarritoItemWhereUniqueInput
    /**
     * In case the CarritoItem found by the `where` argument doesn't exist, create a new CarritoItem with this data.
     */
    create: XOR<CarritoItemCreateInput, CarritoItemUncheckedCreateInput>
    /**
     * In case the CarritoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarritoItemUpdateInput, CarritoItemUncheckedUpdateInput>
  }

  /**
   * CarritoItem delete
   */
  export type CarritoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
    /**
     * Filter which CarritoItem to delete.
     */
    where: CarritoItemWhereUniqueInput
  }

  /**
   * CarritoItem deleteMany
   */
  export type CarritoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarritoItems to delete
     */
    where?: CarritoItemWhereInput
    /**
     * Limit how many CarritoItems to delete.
     */
    limit?: number
  }

  /**
   * CarritoItem without action
   */
  export type CarritoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoItem
     */
    select?: CarritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoItem
     */
    omit?: CarritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoItemInclude<ExtArgs> | null
  }


  /**
   * Model ListaDeseosItem
   */

  export type AggregateListaDeseosItem = {
    _count: ListaDeseosItemCountAggregateOutputType | null
    _avg: ListaDeseosItemAvgAggregateOutputType | null
    _sum: ListaDeseosItemSumAggregateOutputType | null
    _min: ListaDeseosItemMinAggregateOutputType | null
    _max: ListaDeseosItemMaxAggregateOutputType | null
  }

  export type ListaDeseosItemAvgAggregateOutputType = {
    idListaItem: number | null
    idListaDeseos: number | null
    idProducto: number | null
  }

  export type ListaDeseosItemSumAggregateOutputType = {
    idListaItem: number | null
    idListaDeseos: number | null
    idProducto: number | null
  }

  export type ListaDeseosItemMinAggregateOutputType = {
    idListaItem: number | null
    idListaDeseos: number | null
    idProducto: number | null
    fechaAgregado: Date | null
  }

  export type ListaDeseosItemMaxAggregateOutputType = {
    idListaItem: number | null
    idListaDeseos: number | null
    idProducto: number | null
    fechaAgregado: Date | null
  }

  export type ListaDeseosItemCountAggregateOutputType = {
    idListaItem: number
    idListaDeseos: number
    idProducto: number
    fechaAgregado: number
    _all: number
  }


  export type ListaDeseosItemAvgAggregateInputType = {
    idListaItem?: true
    idListaDeseos?: true
    idProducto?: true
  }

  export type ListaDeseosItemSumAggregateInputType = {
    idListaItem?: true
    idListaDeseos?: true
    idProducto?: true
  }

  export type ListaDeseosItemMinAggregateInputType = {
    idListaItem?: true
    idListaDeseos?: true
    idProducto?: true
    fechaAgregado?: true
  }

  export type ListaDeseosItemMaxAggregateInputType = {
    idListaItem?: true
    idListaDeseos?: true
    idProducto?: true
    fechaAgregado?: true
  }

  export type ListaDeseosItemCountAggregateInputType = {
    idListaItem?: true
    idListaDeseos?: true
    idProducto?: true
    fechaAgregado?: true
    _all?: true
  }

  export type ListaDeseosItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaDeseosItem to aggregate.
     */
    where?: ListaDeseosItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeseosItems to fetch.
     */
    orderBy?: ListaDeseosItemOrderByWithRelationInput | ListaDeseosItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListaDeseosItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeseosItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeseosItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaDeseosItems
    **/
    _count?: true | ListaDeseosItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListaDeseosItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListaDeseosItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaDeseosItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaDeseosItemMaxAggregateInputType
  }

  export type GetListaDeseosItemAggregateType<T extends ListaDeseosItemAggregateArgs> = {
        [P in keyof T & keyof AggregateListaDeseosItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaDeseosItem[P]>
      : GetScalarType<T[P], AggregateListaDeseosItem[P]>
  }




  export type ListaDeseosItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaDeseosItemWhereInput
    orderBy?: ListaDeseosItemOrderByWithAggregationInput | ListaDeseosItemOrderByWithAggregationInput[]
    by: ListaDeseosItemScalarFieldEnum[] | ListaDeseosItemScalarFieldEnum
    having?: ListaDeseosItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaDeseosItemCountAggregateInputType | true
    _avg?: ListaDeseosItemAvgAggregateInputType
    _sum?: ListaDeseosItemSumAggregateInputType
    _min?: ListaDeseosItemMinAggregateInputType
    _max?: ListaDeseosItemMaxAggregateInputType
  }

  export type ListaDeseosItemGroupByOutputType = {
    idListaItem: number
    idListaDeseos: number
    idProducto: number
    fechaAgregado: Date
    _count: ListaDeseosItemCountAggregateOutputType | null
    _avg: ListaDeseosItemAvgAggregateOutputType | null
    _sum: ListaDeseosItemSumAggregateOutputType | null
    _min: ListaDeseosItemMinAggregateOutputType | null
    _max: ListaDeseosItemMaxAggregateOutputType | null
  }

  type GetListaDeseosItemGroupByPayload<T extends ListaDeseosItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListaDeseosItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaDeseosItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaDeseosItemGroupByOutputType[P]>
            : GetScalarType<T[P], ListaDeseosItemGroupByOutputType[P]>
        }
      >
    >


  export type ListaDeseosItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idListaItem?: boolean
    idListaDeseos?: boolean
    idProducto?: boolean
    fechaAgregado?: boolean
    listaDeseos?: boolean | ListaDeseosDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaDeseosItem"]>

  export type ListaDeseosItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idListaItem?: boolean
    idListaDeseos?: boolean
    idProducto?: boolean
    fechaAgregado?: boolean
    listaDeseos?: boolean | ListaDeseosDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaDeseosItem"]>

  export type ListaDeseosItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idListaItem?: boolean
    idListaDeseos?: boolean
    idProducto?: boolean
    fechaAgregado?: boolean
    listaDeseos?: boolean | ListaDeseosDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaDeseosItem"]>

  export type ListaDeseosItemSelectScalar = {
    idListaItem?: boolean
    idListaDeseos?: boolean
    idProducto?: boolean
    fechaAgregado?: boolean
  }

  export type ListaDeseosItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idListaItem" | "idListaDeseos" | "idProducto" | "fechaAgregado", ExtArgs["result"]["listaDeseosItem"]>
  export type ListaDeseosItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listaDeseos?: boolean | ListaDeseosDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type ListaDeseosItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listaDeseos?: boolean | ListaDeseosDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type ListaDeseosItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listaDeseos?: boolean | ListaDeseosDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $ListaDeseosItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListaDeseosItem"
    objects: {
      listaDeseos: Prisma.$ListaDeseosPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idListaItem: number
      idListaDeseos: number
      idProducto: number
      fechaAgregado: Date
    }, ExtArgs["result"]["listaDeseosItem"]>
    composites: {}
  }

  type ListaDeseosItemGetPayload<S extends boolean | null | undefined | ListaDeseosItemDefaultArgs> = $Result.GetResult<Prisma.$ListaDeseosItemPayload, S>

  type ListaDeseosItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListaDeseosItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListaDeseosItemCountAggregateInputType | true
    }

  export interface ListaDeseosItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListaDeseosItem'], meta: { name: 'ListaDeseosItem' } }
    /**
     * Find zero or one ListaDeseosItem that matches the filter.
     * @param {ListaDeseosItemFindUniqueArgs} args - Arguments to find a ListaDeseosItem
     * @example
     * // Get one ListaDeseosItem
     * const listaDeseosItem = await prisma.listaDeseosItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListaDeseosItemFindUniqueArgs>(args: SelectSubset<T, ListaDeseosItemFindUniqueArgs<ExtArgs>>): Prisma__ListaDeseosItemClient<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListaDeseosItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListaDeseosItemFindUniqueOrThrowArgs} args - Arguments to find a ListaDeseosItem
     * @example
     * // Get one ListaDeseosItem
     * const listaDeseosItem = await prisma.listaDeseosItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListaDeseosItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ListaDeseosItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListaDeseosItemClient<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaDeseosItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosItemFindFirstArgs} args - Arguments to find a ListaDeseosItem
     * @example
     * // Get one ListaDeseosItem
     * const listaDeseosItem = await prisma.listaDeseosItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListaDeseosItemFindFirstArgs>(args?: SelectSubset<T, ListaDeseosItemFindFirstArgs<ExtArgs>>): Prisma__ListaDeseosItemClient<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaDeseosItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosItemFindFirstOrThrowArgs} args - Arguments to find a ListaDeseosItem
     * @example
     * // Get one ListaDeseosItem
     * const listaDeseosItem = await prisma.listaDeseosItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListaDeseosItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ListaDeseosItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListaDeseosItemClient<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListaDeseosItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaDeseosItems
     * const listaDeseosItems = await prisma.listaDeseosItem.findMany()
     * 
     * // Get first 10 ListaDeseosItems
     * const listaDeseosItems = await prisma.listaDeseosItem.findMany({ take: 10 })
     * 
     * // Only select the `idListaItem`
     * const listaDeseosItemWithIdListaItemOnly = await prisma.listaDeseosItem.findMany({ select: { idListaItem: true } })
     * 
     */
    findMany<T extends ListaDeseosItemFindManyArgs>(args?: SelectSubset<T, ListaDeseosItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListaDeseosItem.
     * @param {ListaDeseosItemCreateArgs} args - Arguments to create a ListaDeseosItem.
     * @example
     * // Create one ListaDeseosItem
     * const ListaDeseosItem = await prisma.listaDeseosItem.create({
     *   data: {
     *     // ... data to create a ListaDeseosItem
     *   }
     * })
     * 
     */
    create<T extends ListaDeseosItemCreateArgs>(args: SelectSubset<T, ListaDeseosItemCreateArgs<ExtArgs>>): Prisma__ListaDeseosItemClient<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListaDeseosItems.
     * @param {ListaDeseosItemCreateManyArgs} args - Arguments to create many ListaDeseosItems.
     * @example
     * // Create many ListaDeseosItems
     * const listaDeseosItem = await prisma.listaDeseosItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListaDeseosItemCreateManyArgs>(args?: SelectSubset<T, ListaDeseosItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListaDeseosItems and returns the data saved in the database.
     * @param {ListaDeseosItemCreateManyAndReturnArgs} args - Arguments to create many ListaDeseosItems.
     * @example
     * // Create many ListaDeseosItems
     * const listaDeseosItem = await prisma.listaDeseosItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListaDeseosItems and only return the `idListaItem`
     * const listaDeseosItemWithIdListaItemOnly = await prisma.listaDeseosItem.createManyAndReturn({
     *   select: { idListaItem: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListaDeseosItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ListaDeseosItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListaDeseosItem.
     * @param {ListaDeseosItemDeleteArgs} args - Arguments to delete one ListaDeseosItem.
     * @example
     * // Delete one ListaDeseosItem
     * const ListaDeseosItem = await prisma.listaDeseosItem.delete({
     *   where: {
     *     // ... filter to delete one ListaDeseosItem
     *   }
     * })
     * 
     */
    delete<T extends ListaDeseosItemDeleteArgs>(args: SelectSubset<T, ListaDeseosItemDeleteArgs<ExtArgs>>): Prisma__ListaDeseosItemClient<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListaDeseosItem.
     * @param {ListaDeseosItemUpdateArgs} args - Arguments to update one ListaDeseosItem.
     * @example
     * // Update one ListaDeseosItem
     * const listaDeseosItem = await prisma.listaDeseosItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListaDeseosItemUpdateArgs>(args: SelectSubset<T, ListaDeseosItemUpdateArgs<ExtArgs>>): Prisma__ListaDeseosItemClient<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListaDeseosItems.
     * @param {ListaDeseosItemDeleteManyArgs} args - Arguments to filter ListaDeseosItems to delete.
     * @example
     * // Delete a few ListaDeseosItems
     * const { count } = await prisma.listaDeseosItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListaDeseosItemDeleteManyArgs>(args?: SelectSubset<T, ListaDeseosItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaDeseosItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaDeseosItems
     * const listaDeseosItem = await prisma.listaDeseosItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListaDeseosItemUpdateManyArgs>(args: SelectSubset<T, ListaDeseosItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaDeseosItems and returns the data updated in the database.
     * @param {ListaDeseosItemUpdateManyAndReturnArgs} args - Arguments to update many ListaDeseosItems.
     * @example
     * // Update many ListaDeseosItems
     * const listaDeseosItem = await prisma.listaDeseosItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListaDeseosItems and only return the `idListaItem`
     * const listaDeseosItemWithIdListaItemOnly = await prisma.listaDeseosItem.updateManyAndReturn({
     *   select: { idListaItem: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListaDeseosItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ListaDeseosItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListaDeseosItem.
     * @param {ListaDeseosItemUpsertArgs} args - Arguments to update or create a ListaDeseosItem.
     * @example
     * // Update or create a ListaDeseosItem
     * const listaDeseosItem = await prisma.listaDeseosItem.upsert({
     *   create: {
     *     // ... data to create a ListaDeseosItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaDeseosItem we want to update
     *   }
     * })
     */
    upsert<T extends ListaDeseosItemUpsertArgs>(args: SelectSubset<T, ListaDeseosItemUpsertArgs<ExtArgs>>): Prisma__ListaDeseosItemClient<$Result.GetResult<Prisma.$ListaDeseosItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListaDeseosItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosItemCountArgs} args - Arguments to filter ListaDeseosItems to count.
     * @example
     * // Count the number of ListaDeseosItems
     * const count = await prisma.listaDeseosItem.count({
     *   where: {
     *     // ... the filter for the ListaDeseosItems we want to count
     *   }
     * })
    **/
    count<T extends ListaDeseosItemCountArgs>(
      args?: Subset<T, ListaDeseosItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaDeseosItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaDeseosItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListaDeseosItemAggregateArgs>(args: Subset<T, ListaDeseosItemAggregateArgs>): Prisma.PrismaPromise<GetListaDeseosItemAggregateType<T>>

    /**
     * Group by ListaDeseosItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeseosItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListaDeseosItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaDeseosItemGroupByArgs['orderBy'] }
        : { orderBy?: ListaDeseosItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListaDeseosItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaDeseosItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListaDeseosItem model
   */
  readonly fields: ListaDeseosItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaDeseosItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListaDeseosItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listaDeseos<T extends ListaDeseosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListaDeseosDefaultArgs<ExtArgs>>): Prisma__ListaDeseosClient<$Result.GetResult<Prisma.$ListaDeseosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListaDeseosItem model
   */
  interface ListaDeseosItemFieldRefs {
    readonly idListaItem: FieldRef<"ListaDeseosItem", 'Int'>
    readonly idListaDeseos: FieldRef<"ListaDeseosItem", 'Int'>
    readonly idProducto: FieldRef<"ListaDeseosItem", 'Int'>
    readonly fechaAgregado: FieldRef<"ListaDeseosItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListaDeseosItem findUnique
   */
  export type ListaDeseosItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeseosItem to fetch.
     */
    where: ListaDeseosItemWhereUniqueInput
  }

  /**
   * ListaDeseosItem findUniqueOrThrow
   */
  export type ListaDeseosItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeseosItem to fetch.
     */
    where: ListaDeseosItemWhereUniqueInput
  }

  /**
   * ListaDeseosItem findFirst
   */
  export type ListaDeseosItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeseosItem to fetch.
     */
    where?: ListaDeseosItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeseosItems to fetch.
     */
    orderBy?: ListaDeseosItemOrderByWithRelationInput | ListaDeseosItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaDeseosItems.
     */
    cursor?: ListaDeseosItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeseosItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeseosItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaDeseosItems.
     */
    distinct?: ListaDeseosItemScalarFieldEnum | ListaDeseosItemScalarFieldEnum[]
  }

  /**
   * ListaDeseosItem findFirstOrThrow
   */
  export type ListaDeseosItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeseosItem to fetch.
     */
    where?: ListaDeseosItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeseosItems to fetch.
     */
    orderBy?: ListaDeseosItemOrderByWithRelationInput | ListaDeseosItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaDeseosItems.
     */
    cursor?: ListaDeseosItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeseosItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeseosItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaDeseosItems.
     */
    distinct?: ListaDeseosItemScalarFieldEnum | ListaDeseosItemScalarFieldEnum[]
  }

  /**
   * ListaDeseosItem findMany
   */
  export type ListaDeseosItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    /**
     * Filter, which ListaDeseosItems to fetch.
     */
    where?: ListaDeseosItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeseosItems to fetch.
     */
    orderBy?: ListaDeseosItemOrderByWithRelationInput | ListaDeseosItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaDeseosItems.
     */
    cursor?: ListaDeseosItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeseosItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeseosItems.
     */
    skip?: number
    distinct?: ListaDeseosItemScalarFieldEnum | ListaDeseosItemScalarFieldEnum[]
  }

  /**
   * ListaDeseosItem create
   */
  export type ListaDeseosItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ListaDeseosItem.
     */
    data: XOR<ListaDeseosItemCreateInput, ListaDeseosItemUncheckedCreateInput>
  }

  /**
   * ListaDeseosItem createMany
   */
  export type ListaDeseosItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListaDeseosItems.
     */
    data: ListaDeseosItemCreateManyInput | ListaDeseosItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListaDeseosItem createManyAndReturn
   */
  export type ListaDeseosItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * The data used to create many ListaDeseosItems.
     */
    data: ListaDeseosItemCreateManyInput | ListaDeseosItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaDeseosItem update
   */
  export type ListaDeseosItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ListaDeseosItem.
     */
    data: XOR<ListaDeseosItemUpdateInput, ListaDeseosItemUncheckedUpdateInput>
    /**
     * Choose, which ListaDeseosItem to update.
     */
    where: ListaDeseosItemWhereUniqueInput
  }

  /**
   * ListaDeseosItem updateMany
   */
  export type ListaDeseosItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListaDeseosItems.
     */
    data: XOR<ListaDeseosItemUpdateManyMutationInput, ListaDeseosItemUncheckedUpdateManyInput>
    /**
     * Filter which ListaDeseosItems to update
     */
    where?: ListaDeseosItemWhereInput
    /**
     * Limit how many ListaDeseosItems to update.
     */
    limit?: number
  }

  /**
   * ListaDeseosItem updateManyAndReturn
   */
  export type ListaDeseosItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * The data used to update ListaDeseosItems.
     */
    data: XOR<ListaDeseosItemUpdateManyMutationInput, ListaDeseosItemUncheckedUpdateManyInput>
    /**
     * Filter which ListaDeseosItems to update
     */
    where?: ListaDeseosItemWhereInput
    /**
     * Limit how many ListaDeseosItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaDeseosItem upsert
   */
  export type ListaDeseosItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ListaDeseosItem to update in case it exists.
     */
    where: ListaDeseosItemWhereUniqueInput
    /**
     * In case the ListaDeseosItem found by the `where` argument doesn't exist, create a new ListaDeseosItem with this data.
     */
    create: XOR<ListaDeseosItemCreateInput, ListaDeseosItemUncheckedCreateInput>
    /**
     * In case the ListaDeseosItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListaDeseosItemUpdateInput, ListaDeseosItemUncheckedUpdateInput>
  }

  /**
   * ListaDeseosItem delete
   */
  export type ListaDeseosItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
    /**
     * Filter which ListaDeseosItem to delete.
     */
    where: ListaDeseosItemWhereUniqueInput
  }

  /**
   * ListaDeseosItem deleteMany
   */
  export type ListaDeseosItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaDeseosItems to delete
     */
    where?: ListaDeseosItemWhereInput
    /**
     * Limit how many ListaDeseosItems to delete.
     */
    limit?: number
  }

  /**
   * ListaDeseosItem without action
   */
  export type ListaDeseosItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaDeseosItem
     */
    select?: ListaDeseosItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaDeseosItem
     */
    omit?: ListaDeseosItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaDeseosItemInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    idPedido: number | null
    idUsuario: number | null
    total: Decimal | null
  }

  export type PedidoSumAggregateOutputType = {
    idPedido: number | null
    idUsuario: number | null
    total: Decimal | null
  }

  export type PedidoMinAggregateOutputType = {
    idPedido: number | null
    idUsuario: number | null
    fechaPedido: Date | null
    total: Decimal | null
    estado: string | null
    direccionEnvio: string | null
  }

  export type PedidoMaxAggregateOutputType = {
    idPedido: number | null
    idUsuario: number | null
    fechaPedido: Date | null
    total: Decimal | null
    estado: string | null
    direccionEnvio: string | null
  }

  export type PedidoCountAggregateOutputType = {
    idPedido: number
    idUsuario: number
    fechaPedido: number
    total: number
    estado: number
    direccionEnvio: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    idPedido?: true
    idUsuario?: true
    total?: true
  }

  export type PedidoSumAggregateInputType = {
    idPedido?: true
    idUsuario?: true
    total?: true
  }

  export type PedidoMinAggregateInputType = {
    idPedido?: true
    idUsuario?: true
    fechaPedido?: true
    total?: true
    estado?: true
    direccionEnvio?: true
  }

  export type PedidoMaxAggregateInputType = {
    idPedido?: true
    idUsuario?: true
    fechaPedido?: true
    total?: true
    estado?: true
    direccionEnvio?: true
  }

  export type PedidoCountAggregateInputType = {
    idPedido?: true
    idUsuario?: true
    fechaPedido?: true
    total?: true
    estado?: true
    direccionEnvio?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    idPedido: number
    idUsuario: number
    fechaPedido: Date
    total: Decimal
    estado: string
    direccionEnvio: string
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPedido?: boolean
    idUsuario?: boolean
    fechaPedido?: boolean
    total?: boolean
    estado?: boolean
    direccionEnvio?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    items?: boolean | Pedido$itemsArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPedido?: boolean
    idUsuario?: boolean
    fechaPedido?: boolean
    total?: boolean
    estado?: boolean
    direccionEnvio?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPedido?: boolean
    idUsuario?: boolean
    fechaPedido?: boolean
    total?: boolean
    estado?: boolean
    direccionEnvio?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    idPedido?: boolean
    idUsuario?: boolean
    fechaPedido?: boolean
    total?: boolean
    estado?: boolean
    direccionEnvio?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPedido" | "idUsuario" | "fechaPedido" | "total" | "estado" | "direccionEnvio", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    items?: boolean | Pedido$itemsArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      items: Prisma.$PedidoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idPedido: number
      idUsuario: number
      fechaPedido: Date
      total: Prisma.Decimal
      estado: string
      direccionEnvio: string
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `idPedido`
     * const pedidoWithIdPedidoOnly = await prisma.pedido.findMany({ select: { idPedido: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `idPedido`
     * const pedidoWithIdPedidoOnly = await prisma.pedido.createManyAndReturn({
     *   select: { idPedido: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `idPedido`
     * const pedidoWithIdPedidoOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { idPedido: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Pedido$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly idPedido: FieldRef<"Pedido", 'Int'>
    readonly idUsuario: FieldRef<"Pedido", 'Int'>
    readonly fechaPedido: FieldRef<"Pedido", 'DateTime'>
    readonly total: FieldRef<"Pedido", 'Decimal'>
    readonly estado: FieldRef<"Pedido", 'String'>
    readonly direccionEnvio: FieldRef<"Pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.items
   */
  export type Pedido$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    where?: PedidoItemWhereInput
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    cursor?: PedidoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model PedidoItem
   */

  export type AggregatePedidoItem = {
    _count: PedidoItemCountAggregateOutputType | null
    _avg: PedidoItemAvgAggregateOutputType | null
    _sum: PedidoItemSumAggregateOutputType | null
    _min: PedidoItemMinAggregateOutputType | null
    _max: PedidoItemMaxAggregateOutputType | null
  }

  export type PedidoItemAvgAggregateOutputType = {
    idPedidoItem: number | null
    idPedido: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type PedidoItemSumAggregateOutputType = {
    idPedidoItem: number | null
    idPedido: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type PedidoItemMinAggregateOutputType = {
    idPedidoItem: number | null
    idPedido: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type PedidoItemMaxAggregateOutputType = {
    idPedidoItem: number | null
    idPedido: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type PedidoItemCountAggregateOutputType = {
    idPedidoItem: number
    idPedido: number
    idProducto: number
    cantidad: number
    precioUnitario: number
    _all: number
  }


  export type PedidoItemAvgAggregateInputType = {
    idPedidoItem?: true
    idPedido?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type PedidoItemSumAggregateInputType = {
    idPedidoItem?: true
    idPedido?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type PedidoItemMinAggregateInputType = {
    idPedidoItem?: true
    idPedido?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type PedidoItemMaxAggregateInputType = {
    idPedidoItem?: true
    idPedido?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type PedidoItemCountAggregateInputType = {
    idPedidoItem?: true
    idPedido?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
    _all?: true
  }

  export type PedidoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoItem to aggregate.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoItems
    **/
    _count?: true | PedidoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoItemMaxAggregateInputType
  }

  export type GetPedidoItemAggregateType<T extends PedidoItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoItem[P]>
      : GetScalarType<T[P], AggregatePedidoItem[P]>
  }




  export type PedidoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoItemWhereInput
    orderBy?: PedidoItemOrderByWithAggregationInput | PedidoItemOrderByWithAggregationInput[]
    by: PedidoItemScalarFieldEnum[] | PedidoItemScalarFieldEnum
    having?: PedidoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoItemCountAggregateInputType | true
    _avg?: PedidoItemAvgAggregateInputType
    _sum?: PedidoItemSumAggregateInputType
    _min?: PedidoItemMinAggregateInputType
    _max?: PedidoItemMaxAggregateInputType
  }

  export type PedidoItemGroupByOutputType = {
    idPedidoItem: number
    idPedido: number
    idProducto: number
    cantidad: number
    precioUnitario: Decimal
    _count: PedidoItemCountAggregateOutputType | null
    _avg: PedidoItemAvgAggregateOutputType | null
    _sum: PedidoItemSumAggregateOutputType | null
    _min: PedidoItemMinAggregateOutputType | null
    _max: PedidoItemMaxAggregateOutputType | null
  }

  type GetPedidoItemGroupByPayload<T extends PedidoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoItemGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoItemGroupByOutputType[P]>
        }
      >
    >


  export type PedidoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPedidoItem?: boolean
    idPedido?: boolean
    idProducto?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoItem"]>

  export type PedidoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPedidoItem?: boolean
    idPedido?: boolean
    idProducto?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoItem"]>

  export type PedidoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPedidoItem?: boolean
    idPedido?: boolean
    idProducto?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoItem"]>

  export type PedidoItemSelectScalar = {
    idPedidoItem?: boolean
    idPedido?: boolean
    idProducto?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
  }

  export type PedidoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPedidoItem" | "idPedido" | "idProducto" | "cantidad" | "precioUnitario", ExtArgs["result"]["pedidoItem"]>
  export type PedidoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type PedidoItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type PedidoItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $PedidoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoItem"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idPedidoItem: number
      idPedido: number
      idProducto: number
      cantidad: number
      precioUnitario: Prisma.Decimal
    }, ExtArgs["result"]["pedidoItem"]>
    composites: {}
  }

  type PedidoItemGetPayload<S extends boolean | null | undefined | PedidoItemDefaultArgs> = $Result.GetResult<Prisma.$PedidoItemPayload, S>

  type PedidoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoItemCountAggregateInputType | true
    }

  export interface PedidoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoItem'], meta: { name: 'PedidoItem' } }
    /**
     * Find zero or one PedidoItem that matches the filter.
     * @param {PedidoItemFindUniqueArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoItemFindUniqueArgs>(args: SelectSubset<T, PedidoItemFindUniqueArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoItemFindUniqueOrThrowArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemFindFirstArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoItemFindFirstArgs>(args?: SelectSubset<T, PedidoItemFindFirstArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemFindFirstOrThrowArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoItems
     * const pedidoItems = await prisma.pedidoItem.findMany()
     * 
     * // Get first 10 PedidoItems
     * const pedidoItems = await prisma.pedidoItem.findMany({ take: 10 })
     * 
     * // Only select the `idPedidoItem`
     * const pedidoItemWithIdPedidoItemOnly = await prisma.pedidoItem.findMany({ select: { idPedidoItem: true } })
     * 
     */
    findMany<T extends PedidoItemFindManyArgs>(args?: SelectSubset<T, PedidoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoItem.
     * @param {PedidoItemCreateArgs} args - Arguments to create a PedidoItem.
     * @example
     * // Create one PedidoItem
     * const PedidoItem = await prisma.pedidoItem.create({
     *   data: {
     *     // ... data to create a PedidoItem
     *   }
     * })
     * 
     */
    create<T extends PedidoItemCreateArgs>(args: SelectSubset<T, PedidoItemCreateArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoItems.
     * @param {PedidoItemCreateManyArgs} args - Arguments to create many PedidoItems.
     * @example
     * // Create many PedidoItems
     * const pedidoItem = await prisma.pedidoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoItemCreateManyArgs>(args?: SelectSubset<T, PedidoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PedidoItems and returns the data saved in the database.
     * @param {PedidoItemCreateManyAndReturnArgs} args - Arguments to create many PedidoItems.
     * @example
     * // Create many PedidoItems
     * const pedidoItem = await prisma.pedidoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PedidoItems and only return the `idPedidoItem`
     * const pedidoItemWithIdPedidoItemOnly = await prisma.pedidoItem.createManyAndReturn({
     *   select: { idPedidoItem: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PedidoItem.
     * @param {PedidoItemDeleteArgs} args - Arguments to delete one PedidoItem.
     * @example
     * // Delete one PedidoItem
     * const PedidoItem = await prisma.pedidoItem.delete({
     *   where: {
     *     // ... filter to delete one PedidoItem
     *   }
     * })
     * 
     */
    delete<T extends PedidoItemDeleteArgs>(args: SelectSubset<T, PedidoItemDeleteArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoItem.
     * @param {PedidoItemUpdateArgs} args - Arguments to update one PedidoItem.
     * @example
     * // Update one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoItemUpdateArgs>(args: SelectSubset<T, PedidoItemUpdateArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoItems.
     * @param {PedidoItemDeleteManyArgs} args - Arguments to filter PedidoItems to delete.
     * @example
     * // Delete a few PedidoItems
     * const { count } = await prisma.pedidoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoItemDeleteManyArgs>(args?: SelectSubset<T, PedidoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoItems
     * const pedidoItem = await prisma.pedidoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoItemUpdateManyArgs>(args: SelectSubset<T, PedidoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoItems and returns the data updated in the database.
     * @param {PedidoItemUpdateManyAndReturnArgs} args - Arguments to update many PedidoItems.
     * @example
     * // Update many PedidoItems
     * const pedidoItem = await prisma.pedidoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PedidoItems and only return the `idPedidoItem`
     * const pedidoItemWithIdPedidoItemOnly = await prisma.pedidoItem.updateManyAndReturn({
     *   select: { idPedidoItem: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PedidoItem.
     * @param {PedidoItemUpsertArgs} args - Arguments to update or create a PedidoItem.
     * @example
     * // Update or create a PedidoItem
     * const pedidoItem = await prisma.pedidoItem.upsert({
     *   create: {
     *     // ... data to create a PedidoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoItem we want to update
     *   }
     * })
     */
    upsert<T extends PedidoItemUpsertArgs>(args: SelectSubset<T, PedidoItemUpsertArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemCountArgs} args - Arguments to filter PedidoItems to count.
     * @example
     * // Count the number of PedidoItems
     * const count = await prisma.pedidoItem.count({
     *   where: {
     *     // ... the filter for the PedidoItems we want to count
     *   }
     * })
    **/
    count<T extends PedidoItemCountArgs>(
      args?: Subset<T, PedidoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoItemAggregateArgs>(args: Subset<T, PedidoItemAggregateArgs>): Prisma.PrismaPromise<GetPedidoItemAggregateType<T>>

    /**
     * Group by PedidoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoItemGroupByArgs['orderBy'] }
        : { orderBy?: PedidoItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoItem model
   */
  readonly fields: PedidoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PedidoItem model
   */
  interface PedidoItemFieldRefs {
    readonly idPedidoItem: FieldRef<"PedidoItem", 'Int'>
    readonly idPedido: FieldRef<"PedidoItem", 'Int'>
    readonly idProducto: FieldRef<"PedidoItem", 'Int'>
    readonly cantidad: FieldRef<"PedidoItem", 'Int'>
    readonly precioUnitario: FieldRef<"PedidoItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PedidoItem findUnique
   */
  export type PedidoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem findUniqueOrThrow
   */
  export type PedidoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem findFirst
   */
  export type PedidoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoItems.
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoItems.
     */
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * PedidoItem findFirstOrThrow
   */
  export type PedidoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoItems.
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoItems.
     */
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * PedidoItem findMany
   */
  export type PedidoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItems to fetch.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoItems.
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * PedidoItem create
   */
  export type PedidoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidoItem.
     */
    data: XOR<PedidoItemCreateInput, PedidoItemUncheckedCreateInput>
  }

  /**
   * PedidoItem createMany
   */
  export type PedidoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoItems.
     */
    data: PedidoItemCreateManyInput | PedidoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoItem createManyAndReturn
   */
  export type PedidoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * The data used to create many PedidoItems.
     */
    data: PedidoItemCreateManyInput | PedidoItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoItem update
   */
  export type PedidoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidoItem.
     */
    data: XOR<PedidoItemUpdateInput, PedidoItemUncheckedUpdateInput>
    /**
     * Choose, which PedidoItem to update.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem updateMany
   */
  export type PedidoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoItems.
     */
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyInput>
    /**
     * Filter which PedidoItems to update
     */
    where?: PedidoItemWhereInput
    /**
     * Limit how many PedidoItems to update.
     */
    limit?: number
  }

  /**
   * PedidoItem updateManyAndReturn
   */
  export type PedidoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * The data used to update PedidoItems.
     */
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyInput>
    /**
     * Filter which PedidoItems to update
     */
    where?: PedidoItemWhereInput
    /**
     * Limit how many PedidoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoItem upsert
   */
  export type PedidoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidoItem to update in case it exists.
     */
    where: PedidoItemWhereUniqueInput
    /**
     * In case the PedidoItem found by the `where` argument doesn't exist, create a new PedidoItem with this data.
     */
    create: XOR<PedidoItemCreateInput, PedidoItemUncheckedCreateInput>
    /**
     * In case the PedidoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoItemUpdateInput, PedidoItemUncheckedUpdateInput>
  }

  /**
   * PedidoItem delete
   */
  export type PedidoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter which PedidoItem to delete.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem deleteMany
   */
  export type PedidoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoItems to delete
     */
    where?: PedidoItemWhereInput
    /**
     * Limit how many PedidoItems to delete.
     */
    limit?: number
  }

  /**
   * PedidoItem without action
   */
  export type PedidoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    idUsuario: 'idUsuario',
    nombre: 'nombre',
    email: 'email',
    contrasena: 'contrasena',
    telefono: 'telefono',
    fechaRegistro: 'fechaRegistro',
    estado: 'estado'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    idProducto: 'idProducto',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    stock: 'stock',
    categoria: 'categoria',
    fechaCreacion: 'fechaCreacion'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const CarritoScalarFieldEnum: {
    idCarrito: 'idCarrito',
    idUsuario: 'idUsuario',
    fechaCreacion: 'fechaCreacion',
    fechaActualizacion: 'fechaActualizacion'
  };

  export type CarritoScalarFieldEnum = (typeof CarritoScalarFieldEnum)[keyof typeof CarritoScalarFieldEnum]


  export const ListaDeseosScalarFieldEnum: {
    idListaDeseos: 'idListaDeseos',
    idUsuario: 'idUsuario',
    nombre: 'nombre',
    fechaCreacion: 'fechaCreacion'
  };

  export type ListaDeseosScalarFieldEnum = (typeof ListaDeseosScalarFieldEnum)[keyof typeof ListaDeseosScalarFieldEnum]


  export const CarritoItemScalarFieldEnum: {
    idCarritoItem: 'idCarritoItem',
    idCarrito: 'idCarrito',
    idProducto: 'idProducto',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario'
  };

  export type CarritoItemScalarFieldEnum = (typeof CarritoItemScalarFieldEnum)[keyof typeof CarritoItemScalarFieldEnum]


  export const ListaDeseosItemScalarFieldEnum: {
    idListaItem: 'idListaItem',
    idListaDeseos: 'idListaDeseos',
    idProducto: 'idProducto',
    fechaAgregado: 'fechaAgregado'
  };

  export type ListaDeseosItemScalarFieldEnum = (typeof ListaDeseosItemScalarFieldEnum)[keyof typeof ListaDeseosItemScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    idPedido: 'idPedido',
    idUsuario: 'idUsuario',
    fechaPedido: 'fechaPedido',
    total: 'total',
    estado: 'estado',
    direccionEnvio: 'direccionEnvio'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PedidoItemScalarFieldEnum: {
    idPedidoItem: 'idPedidoItem',
    idPedido: 'idPedido',
    idProducto: 'idProducto',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario'
  };

  export type PedidoItemScalarFieldEnum = (typeof PedidoItemScalarFieldEnum)[keyof typeof PedidoItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    idUsuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    fechaRegistro?: DateTimeFilter<"Usuario"> | Date | string
    estado?: StringFilter<"Usuario"> | string
    carrito?: XOR<CarritoNullableScalarRelationFilter, CarritoWhereInput> | null
    listasDeseos?: ListaDeseosListRelationFilter
    pedidos?: PedidoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    idUsuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
    carrito?: CarritoOrderByWithRelationInput
    listasDeseos?: ListaDeseosOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    idUsuario?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    fechaRegistro?: DateTimeFilter<"Usuario"> | Date | string
    estado?: StringFilter<"Usuario"> | string
    carrito?: XOR<CarritoNullableScalarRelationFilter, CarritoWhereInput> | null
    listasDeseos?: ListaDeseosListRelationFilter
    pedidos?: PedidoListRelationFilter
  }, "idUsuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    idUsuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    idUsuario?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    fechaRegistro?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    estado?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    idProducto?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    categoria?: StringNullableFilter<"Producto"> | string | null
    fechaCreacion?: DateTimeFilter<"Producto"> | Date | string
    carritoItems?: CarritoItemListRelationFilter
    listaDeseosItems?: ListaDeseosItemListRelationFilter
    pedidoItems?: PedidoItemListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    categoria?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    carritoItems?: CarritoItemOrderByRelationAggregateInput
    listaDeseosItems?: ListaDeseosItemOrderByRelationAggregateInput
    pedidoItems?: PedidoItemOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    idProducto?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    categoria?: StringNullableFilter<"Producto"> | string | null
    fechaCreacion?: DateTimeFilter<"Producto"> | Date | string
    carritoItems?: CarritoItemListRelationFilter
    listaDeseosItems?: ListaDeseosItemListRelationFilter
    pedidoItems?: PedidoItemListRelationFilter
  }, "idProducto">

  export type ProductoOrderByWithAggregationInput = {
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    categoria?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    idProducto?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    precio?: DecimalWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Producto"> | number
    categoria?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    fechaCreacion?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type CarritoWhereInput = {
    AND?: CarritoWhereInput | CarritoWhereInput[]
    OR?: CarritoWhereInput[]
    NOT?: CarritoWhereInput | CarritoWhereInput[]
    idCarrito?: IntFilter<"Carrito"> | number
    idUsuario?: IntFilter<"Carrito"> | number
    fechaCreacion?: DateTimeFilter<"Carrito"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Carrito"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    items?: CarritoItemListRelationFilter
  }

  export type CarritoOrderByWithRelationInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    items?: CarritoItemOrderByRelationAggregateInput
  }

  export type CarritoWhereUniqueInput = Prisma.AtLeast<{
    idCarrito?: number
    idUsuario?: number
    AND?: CarritoWhereInput | CarritoWhereInput[]
    OR?: CarritoWhereInput[]
    NOT?: CarritoWhereInput | CarritoWhereInput[]
    fechaCreacion?: DateTimeFilter<"Carrito"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Carrito"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    items?: CarritoItemListRelationFilter
  }, "idCarrito" | "idUsuario">

  export type CarritoOrderByWithAggregationInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    _count?: CarritoCountOrderByAggregateInput
    _avg?: CarritoAvgOrderByAggregateInput
    _max?: CarritoMaxOrderByAggregateInput
    _min?: CarritoMinOrderByAggregateInput
    _sum?: CarritoSumOrderByAggregateInput
  }

  export type CarritoScalarWhereWithAggregatesInput = {
    AND?: CarritoScalarWhereWithAggregatesInput | CarritoScalarWhereWithAggregatesInput[]
    OR?: CarritoScalarWhereWithAggregatesInput[]
    NOT?: CarritoScalarWhereWithAggregatesInput | CarritoScalarWhereWithAggregatesInput[]
    idCarrito?: IntWithAggregatesFilter<"Carrito"> | number
    idUsuario?: IntWithAggregatesFilter<"Carrito"> | number
    fechaCreacion?: DateTimeWithAggregatesFilter<"Carrito"> | Date | string
    fechaActualizacion?: DateTimeWithAggregatesFilter<"Carrito"> | Date | string
  }

  export type ListaDeseosWhereInput = {
    AND?: ListaDeseosWhereInput | ListaDeseosWhereInput[]
    OR?: ListaDeseosWhereInput[]
    NOT?: ListaDeseosWhereInput | ListaDeseosWhereInput[]
    idListaDeseos?: IntFilter<"ListaDeseos"> | number
    idUsuario?: IntFilter<"ListaDeseos"> | number
    nombre?: StringFilter<"ListaDeseos"> | string
    fechaCreacion?: DateTimeFilter<"ListaDeseos"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    items?: ListaDeseosItemListRelationFilter
  }

  export type ListaDeseosOrderByWithRelationInput = {
    idListaDeseos?: SortOrder
    idUsuario?: SortOrder
    nombre?: SortOrder
    fechaCreacion?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    items?: ListaDeseosItemOrderByRelationAggregateInput
  }

  export type ListaDeseosWhereUniqueInput = Prisma.AtLeast<{
    idListaDeseos?: number
    AND?: ListaDeseosWhereInput | ListaDeseosWhereInput[]
    OR?: ListaDeseosWhereInput[]
    NOT?: ListaDeseosWhereInput | ListaDeseosWhereInput[]
    idUsuario?: IntFilter<"ListaDeseos"> | number
    nombre?: StringFilter<"ListaDeseos"> | string
    fechaCreacion?: DateTimeFilter<"ListaDeseos"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    items?: ListaDeseosItemListRelationFilter
  }, "idListaDeseos">

  export type ListaDeseosOrderByWithAggregationInput = {
    idListaDeseos?: SortOrder
    idUsuario?: SortOrder
    nombre?: SortOrder
    fechaCreacion?: SortOrder
    _count?: ListaDeseosCountOrderByAggregateInput
    _avg?: ListaDeseosAvgOrderByAggregateInput
    _max?: ListaDeseosMaxOrderByAggregateInput
    _min?: ListaDeseosMinOrderByAggregateInput
    _sum?: ListaDeseosSumOrderByAggregateInput
  }

  export type ListaDeseosScalarWhereWithAggregatesInput = {
    AND?: ListaDeseosScalarWhereWithAggregatesInput | ListaDeseosScalarWhereWithAggregatesInput[]
    OR?: ListaDeseosScalarWhereWithAggregatesInput[]
    NOT?: ListaDeseosScalarWhereWithAggregatesInput | ListaDeseosScalarWhereWithAggregatesInput[]
    idListaDeseos?: IntWithAggregatesFilter<"ListaDeseos"> | number
    idUsuario?: IntWithAggregatesFilter<"ListaDeseos"> | number
    nombre?: StringWithAggregatesFilter<"ListaDeseos"> | string
    fechaCreacion?: DateTimeWithAggregatesFilter<"ListaDeseos"> | Date | string
  }

  export type CarritoItemWhereInput = {
    AND?: CarritoItemWhereInput | CarritoItemWhereInput[]
    OR?: CarritoItemWhereInput[]
    NOT?: CarritoItemWhereInput | CarritoItemWhereInput[]
    idCarritoItem?: IntFilter<"CarritoItem"> | number
    idCarrito?: IntFilter<"CarritoItem"> | number
    idProducto?: IntFilter<"CarritoItem"> | number
    cantidad?: IntFilter<"CarritoItem"> | number
    precioUnitario?: DecimalFilter<"CarritoItem"> | Decimal | DecimalJsLike | number | string
    carrito?: XOR<CarritoScalarRelationFilter, CarritoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type CarritoItemOrderByWithRelationInput = {
    idCarritoItem?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    carrito?: CarritoOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type CarritoItemWhereUniqueInput = Prisma.AtLeast<{
    idCarritoItem?: number
    idCarrito_idProducto?: CarritoItemIdCarritoIdProductoCompoundUniqueInput
    AND?: CarritoItemWhereInput | CarritoItemWhereInput[]
    OR?: CarritoItemWhereInput[]
    NOT?: CarritoItemWhereInput | CarritoItemWhereInput[]
    idCarrito?: IntFilter<"CarritoItem"> | number
    idProducto?: IntFilter<"CarritoItem"> | number
    cantidad?: IntFilter<"CarritoItem"> | number
    precioUnitario?: DecimalFilter<"CarritoItem"> | Decimal | DecimalJsLike | number | string
    carrito?: XOR<CarritoScalarRelationFilter, CarritoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "idCarritoItem" | "idCarrito_idProducto">

  export type CarritoItemOrderByWithAggregationInput = {
    idCarritoItem?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    _count?: CarritoItemCountOrderByAggregateInput
    _avg?: CarritoItemAvgOrderByAggregateInput
    _max?: CarritoItemMaxOrderByAggregateInput
    _min?: CarritoItemMinOrderByAggregateInput
    _sum?: CarritoItemSumOrderByAggregateInput
  }

  export type CarritoItemScalarWhereWithAggregatesInput = {
    AND?: CarritoItemScalarWhereWithAggregatesInput | CarritoItemScalarWhereWithAggregatesInput[]
    OR?: CarritoItemScalarWhereWithAggregatesInput[]
    NOT?: CarritoItemScalarWhereWithAggregatesInput | CarritoItemScalarWhereWithAggregatesInput[]
    idCarritoItem?: IntWithAggregatesFilter<"CarritoItem"> | number
    idCarrito?: IntWithAggregatesFilter<"CarritoItem"> | number
    idProducto?: IntWithAggregatesFilter<"CarritoItem"> | number
    cantidad?: IntWithAggregatesFilter<"CarritoItem"> | number
    precioUnitario?: DecimalWithAggregatesFilter<"CarritoItem"> | Decimal | DecimalJsLike | number | string
  }

  export type ListaDeseosItemWhereInput = {
    AND?: ListaDeseosItemWhereInput | ListaDeseosItemWhereInput[]
    OR?: ListaDeseosItemWhereInput[]
    NOT?: ListaDeseosItemWhereInput | ListaDeseosItemWhereInput[]
    idListaItem?: IntFilter<"ListaDeseosItem"> | number
    idListaDeseos?: IntFilter<"ListaDeseosItem"> | number
    idProducto?: IntFilter<"ListaDeseosItem"> | number
    fechaAgregado?: DateTimeFilter<"ListaDeseosItem"> | Date | string
    listaDeseos?: XOR<ListaDeseosScalarRelationFilter, ListaDeseosWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type ListaDeseosItemOrderByWithRelationInput = {
    idListaItem?: SortOrder
    idListaDeseos?: SortOrder
    idProducto?: SortOrder
    fechaAgregado?: SortOrder
    listaDeseos?: ListaDeseosOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type ListaDeseosItemWhereUniqueInput = Prisma.AtLeast<{
    idListaItem?: number
    idListaDeseos_idProducto?: ListaDeseosItemIdListaDeseosIdProductoCompoundUniqueInput
    AND?: ListaDeseosItemWhereInput | ListaDeseosItemWhereInput[]
    OR?: ListaDeseosItemWhereInput[]
    NOT?: ListaDeseosItemWhereInput | ListaDeseosItemWhereInput[]
    idListaDeseos?: IntFilter<"ListaDeseosItem"> | number
    idProducto?: IntFilter<"ListaDeseosItem"> | number
    fechaAgregado?: DateTimeFilter<"ListaDeseosItem"> | Date | string
    listaDeseos?: XOR<ListaDeseosScalarRelationFilter, ListaDeseosWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "idListaItem" | "idListaDeseos_idProducto">

  export type ListaDeseosItemOrderByWithAggregationInput = {
    idListaItem?: SortOrder
    idListaDeseos?: SortOrder
    idProducto?: SortOrder
    fechaAgregado?: SortOrder
    _count?: ListaDeseosItemCountOrderByAggregateInput
    _avg?: ListaDeseosItemAvgOrderByAggregateInput
    _max?: ListaDeseosItemMaxOrderByAggregateInput
    _min?: ListaDeseosItemMinOrderByAggregateInput
    _sum?: ListaDeseosItemSumOrderByAggregateInput
  }

  export type ListaDeseosItemScalarWhereWithAggregatesInput = {
    AND?: ListaDeseosItemScalarWhereWithAggregatesInput | ListaDeseosItemScalarWhereWithAggregatesInput[]
    OR?: ListaDeseosItemScalarWhereWithAggregatesInput[]
    NOT?: ListaDeseosItemScalarWhereWithAggregatesInput | ListaDeseosItemScalarWhereWithAggregatesInput[]
    idListaItem?: IntWithAggregatesFilter<"ListaDeseosItem"> | number
    idListaDeseos?: IntWithAggregatesFilter<"ListaDeseosItem"> | number
    idProducto?: IntWithAggregatesFilter<"ListaDeseosItem"> | number
    fechaAgregado?: DateTimeWithAggregatesFilter<"ListaDeseosItem"> | Date | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    idPedido?: IntFilter<"Pedido"> | number
    idUsuario?: IntFilter<"Pedido"> | number
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    estado?: StringFilter<"Pedido"> | string
    direccionEnvio?: StringFilter<"Pedido"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    items?: PedidoItemListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    idPedido?: SortOrder
    idUsuario?: SortOrder
    fechaPedido?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    direccionEnvio?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    items?: PedidoItemOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    idPedido?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    idUsuario?: IntFilter<"Pedido"> | number
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    estado?: StringFilter<"Pedido"> | string
    direccionEnvio?: StringFilter<"Pedido"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    items?: PedidoItemListRelationFilter
  }, "idPedido">

  export type PedidoOrderByWithAggregationInput = {
    idPedido?: SortOrder
    idUsuario?: SortOrder
    fechaPedido?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    direccionEnvio?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    idPedido?: IntWithAggregatesFilter<"Pedido"> | number
    idUsuario?: IntWithAggregatesFilter<"Pedido"> | number
    fechaPedido?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    total?: DecimalWithAggregatesFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    estado?: StringWithAggregatesFilter<"Pedido"> | string
    direccionEnvio?: StringWithAggregatesFilter<"Pedido"> | string
  }

  export type PedidoItemWhereInput = {
    AND?: PedidoItemWhereInput | PedidoItemWhereInput[]
    OR?: PedidoItemWhereInput[]
    NOT?: PedidoItemWhereInput | PedidoItemWhereInput[]
    idPedidoItem?: IntFilter<"PedidoItem"> | number
    idPedido?: IntFilter<"PedidoItem"> | number
    idProducto?: IntFilter<"PedidoItem"> | number
    cantidad?: IntFilter<"PedidoItem"> | number
    precioUnitario?: DecimalFilter<"PedidoItem"> | Decimal | DecimalJsLike | number | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type PedidoItemOrderByWithRelationInput = {
    idPedidoItem?: SortOrder
    idPedido?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type PedidoItemWhereUniqueInput = Prisma.AtLeast<{
    idPedidoItem?: number
    idPedido_idProducto?: PedidoItemIdPedidoIdProductoCompoundUniqueInput
    AND?: PedidoItemWhereInput | PedidoItemWhereInput[]
    OR?: PedidoItemWhereInput[]
    NOT?: PedidoItemWhereInput | PedidoItemWhereInput[]
    idPedido?: IntFilter<"PedidoItem"> | number
    idProducto?: IntFilter<"PedidoItem"> | number
    cantidad?: IntFilter<"PedidoItem"> | number
    precioUnitario?: DecimalFilter<"PedidoItem"> | Decimal | DecimalJsLike | number | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "idPedidoItem" | "idPedido_idProducto">

  export type PedidoItemOrderByWithAggregationInput = {
    idPedidoItem?: SortOrder
    idPedido?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    _count?: PedidoItemCountOrderByAggregateInput
    _avg?: PedidoItemAvgOrderByAggregateInput
    _max?: PedidoItemMaxOrderByAggregateInput
    _min?: PedidoItemMinOrderByAggregateInput
    _sum?: PedidoItemSumOrderByAggregateInput
  }

  export type PedidoItemScalarWhereWithAggregatesInput = {
    AND?: PedidoItemScalarWhereWithAggregatesInput | PedidoItemScalarWhereWithAggregatesInput[]
    OR?: PedidoItemScalarWhereWithAggregatesInput[]
    NOT?: PedidoItemScalarWhereWithAggregatesInput | PedidoItemScalarWhereWithAggregatesInput[]
    idPedidoItem?: IntWithAggregatesFilter<"PedidoItem"> | number
    idPedido?: IntWithAggregatesFilter<"PedidoItem"> | number
    idProducto?: IntWithAggregatesFilter<"PedidoItem"> | number
    cantidad?: IntWithAggregatesFilter<"PedidoItem"> | number
    precioUnitario?: DecimalWithAggregatesFilter<"PedidoItem"> | Decimal | DecimalJsLike | number | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    carrito?: CarritoCreateNestedOneWithoutUsuarioInput
    listasDeseos?: ListaDeseosCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    idUsuario?: number
    nombre: string
    email: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    carrito?: CarritoUncheckedCreateNestedOneWithoutUsuarioInput
    listasDeseos?: ListaDeseosUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUpdateOneWithoutUsuarioNestedInput
    listasDeseos?: ListaDeseosUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUncheckedUpdateOneWithoutUsuarioNestedInput
    listasDeseos?: ListaDeseosUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    idUsuario?: number
    nombre: string
    email: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    categoria?: string | null
    fechaCreacion?: Date | string
    carritoItems?: CarritoItemCreateNestedManyWithoutProductoInput
    listaDeseosItems?: ListaDeseosItemCreateNestedManyWithoutProductoInput
    pedidoItems?: PedidoItemCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    idProducto?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    categoria?: string | null
    fechaCreacion?: Date | string
    carritoItems?: CarritoItemUncheckedCreateNestedManyWithoutProductoInput
    listaDeseosItems?: ListaDeseosItemUncheckedCreateNestedManyWithoutProductoInput
    pedidoItems?: PedidoItemUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    carritoItems?: CarritoItemUpdateManyWithoutProductoNestedInput
    listaDeseosItems?: ListaDeseosItemUpdateManyWithoutProductoNestedInput
    pedidoItems?: PedidoItemUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    carritoItems?: CarritoItemUncheckedUpdateManyWithoutProductoNestedInput
    listaDeseosItems?: ListaDeseosItemUncheckedUpdateManyWithoutProductoNestedInput
    pedidoItems?: PedidoItemUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    idProducto?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    categoria?: string | null
    fechaCreacion?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarritoCreateInput = {
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCarritoInput
    items?: CarritoItemCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUncheckedCreateInput = {
    idCarrito?: number
    idUsuario: number
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    items?: CarritoItemUncheckedCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUpdateInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCarritoNestedInput
    items?: CarritoItemUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateInput = {
    idCarrito?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CarritoItemUncheckedUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoCreateManyInput = {
    idCarrito?: number
    idUsuario: number
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CarritoUpdateManyMutationInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarritoUncheckedUpdateManyInput = {
    idCarrito?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeseosCreateInput = {
    nombre: string
    fechaCreacion?: Date | string
    usuario: UsuarioCreateNestedOneWithoutListasDeseosInput
    items?: ListaDeseosItemCreateNestedManyWithoutListaDeseosInput
  }

  export type ListaDeseosUncheckedCreateInput = {
    idListaDeseos?: number
    idUsuario: number
    nombre: string
    fechaCreacion?: Date | string
    items?: ListaDeseosItemUncheckedCreateNestedManyWithoutListaDeseosInput
  }

  export type ListaDeseosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutListasDeseosNestedInput
    items?: ListaDeseosItemUpdateManyWithoutListaDeseosNestedInput
  }

  export type ListaDeseosUncheckedUpdateInput = {
    idListaDeseos?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ListaDeseosItemUncheckedUpdateManyWithoutListaDeseosNestedInput
  }

  export type ListaDeseosCreateManyInput = {
    idListaDeseos?: number
    idUsuario: number
    nombre: string
    fechaCreacion?: Date | string
  }

  export type ListaDeseosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeseosUncheckedUpdateManyInput = {
    idListaDeseos?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarritoItemCreateInput = {
    cantidad?: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    carrito: CarritoCreateNestedOneWithoutItemsInput
    producto: ProductoCreateNestedOneWithoutCarritoItemsInput
  }

  export type CarritoItemUncheckedCreateInput = {
    idCarritoItem?: number
    idCarrito: number
    idProducto: number
    cantidad?: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carrito?: CarritoUpdateOneRequiredWithoutItemsNestedInput
    producto?: ProductoUpdateOneRequiredWithoutCarritoItemsNestedInput
  }

  export type CarritoItemUncheckedUpdateInput = {
    idCarritoItem?: IntFieldUpdateOperationsInput | number
    idCarrito?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemCreateManyInput = {
    idCarritoItem?: number
    idCarrito: number
    idProducto: number
    cantidad?: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemUncheckedUpdateManyInput = {
    idCarritoItem?: IntFieldUpdateOperationsInput | number
    idCarrito?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ListaDeseosItemCreateInput = {
    fechaAgregado?: Date | string
    listaDeseos: ListaDeseosCreateNestedOneWithoutItemsInput
    producto: ProductoCreateNestedOneWithoutListaDeseosItemsInput
  }

  export type ListaDeseosItemUncheckedCreateInput = {
    idListaItem?: number
    idListaDeseos: number
    idProducto: number
    fechaAgregado?: Date | string
  }

  export type ListaDeseosItemUpdateInput = {
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string
    listaDeseos?: ListaDeseosUpdateOneRequiredWithoutItemsNestedInput
    producto?: ProductoUpdateOneRequiredWithoutListaDeseosItemsNestedInput
  }

  export type ListaDeseosItemUncheckedUpdateInput = {
    idListaItem?: IntFieldUpdateOperationsInput | number
    idListaDeseos?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeseosItemCreateManyInput = {
    idListaItem?: number
    idListaDeseos: number
    idProducto: number
    fechaAgregado?: Date | string
  }

  export type ListaDeseosItemUpdateManyMutationInput = {
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeseosItemUncheckedUpdateManyInput = {
    idListaItem?: IntFieldUpdateOperationsInput | number
    idListaDeseos?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateInput = {
    fechaPedido?: Date | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: string
    direccionEnvio: string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    items?: PedidoItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    idPedido?: number
    idUsuario: number
    fechaPedido?: Date | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: string
    direccionEnvio: string
    items?: PedidoItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionEnvio?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    items?: PedidoItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    idPedido?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionEnvio?: StringFieldUpdateOperationsInput | string
    items?: PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    idPedido?: number
    idUsuario: number
    fechaPedido?: Date | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: string
    direccionEnvio: string
  }

  export type PedidoUpdateManyMutationInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionEnvio?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    idPedido?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionEnvio?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoItemCreateInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutItemsInput
    producto: ProductoCreateNestedOneWithoutPedidoItemsInput
  }

  export type PedidoItemUncheckedCreateInput = {
    idPedidoItem?: number
    idPedido: number
    idProducto: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type PedidoItemUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutItemsNestedInput
    producto?: ProductoUpdateOneRequiredWithoutPedidoItemsNestedInput
  }

  export type PedidoItemUncheckedUpdateInput = {
    idPedidoItem?: IntFieldUpdateOperationsInput | number
    idPedido?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoItemCreateManyInput = {
    idPedidoItem?: number
    idPedido: number
    idProducto: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type PedidoItemUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoItemUncheckedUpdateManyInput = {
    idPedidoItem?: IntFieldUpdateOperationsInput | number
    idPedido?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CarritoNullableScalarRelationFilter = {
    is?: CarritoWhereInput | null
    isNot?: CarritoWhereInput | null
  }

  export type ListaDeseosListRelationFilter = {
    every?: ListaDeseosWhereInput
    some?: ListaDeseosWhereInput
    none?: ListaDeseosWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ListaDeseosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    idUsuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    idUsuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    idUsuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    idUsuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    idUsuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemListRelationFilter = {
    every?: CarritoItemWhereInput
    some?: CarritoItemWhereInput
    none?: CarritoItemWhereInput
  }

  export type ListaDeseosItemListRelationFilter = {
    every?: ListaDeseosItemWhereInput
    some?: ListaDeseosItemWhereInput
    none?: ListaDeseosItemWhereInput
  }

  export type PedidoItemListRelationFilter = {
    every?: PedidoItemWhereInput
    some?: PedidoItemWhereInput
    none?: PedidoItemWhereInput
  }

  export type CarritoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListaDeseosItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    categoria?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    idProducto?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    categoria?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    categoria?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    idProducto?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CarritoCountOrderByAggregateInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CarritoAvgOrderByAggregateInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
  }

  export type CarritoMaxOrderByAggregateInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CarritoMinOrderByAggregateInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CarritoSumOrderByAggregateInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
  }

  export type ListaDeseosCountOrderByAggregateInput = {
    idListaDeseos?: SortOrder
    idUsuario?: SortOrder
    nombre?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ListaDeseosAvgOrderByAggregateInput = {
    idListaDeseos?: SortOrder
    idUsuario?: SortOrder
  }

  export type ListaDeseosMaxOrderByAggregateInput = {
    idListaDeseos?: SortOrder
    idUsuario?: SortOrder
    nombre?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ListaDeseosMinOrderByAggregateInput = {
    idListaDeseos?: SortOrder
    idUsuario?: SortOrder
    nombre?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ListaDeseosSumOrderByAggregateInput = {
    idListaDeseos?: SortOrder
    idUsuario?: SortOrder
  }

  export type CarritoScalarRelationFilter = {
    is?: CarritoWhereInput
    isNot?: CarritoWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type CarritoItemIdCarritoIdProductoCompoundUniqueInput = {
    idCarrito: number
    idProducto: number
  }

  export type CarritoItemCountOrderByAggregateInput = {
    idCarritoItem?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type CarritoItemAvgOrderByAggregateInput = {
    idCarritoItem?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type CarritoItemMaxOrderByAggregateInput = {
    idCarritoItem?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type CarritoItemMinOrderByAggregateInput = {
    idCarritoItem?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type CarritoItemSumOrderByAggregateInput = {
    idCarritoItem?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type ListaDeseosScalarRelationFilter = {
    is?: ListaDeseosWhereInput
    isNot?: ListaDeseosWhereInput
  }

  export type ListaDeseosItemIdListaDeseosIdProductoCompoundUniqueInput = {
    idListaDeseos: number
    idProducto: number
  }

  export type ListaDeseosItemCountOrderByAggregateInput = {
    idListaItem?: SortOrder
    idListaDeseos?: SortOrder
    idProducto?: SortOrder
    fechaAgregado?: SortOrder
  }

  export type ListaDeseosItemAvgOrderByAggregateInput = {
    idListaItem?: SortOrder
    idListaDeseos?: SortOrder
    idProducto?: SortOrder
  }

  export type ListaDeseosItemMaxOrderByAggregateInput = {
    idListaItem?: SortOrder
    idListaDeseos?: SortOrder
    idProducto?: SortOrder
    fechaAgregado?: SortOrder
  }

  export type ListaDeseosItemMinOrderByAggregateInput = {
    idListaItem?: SortOrder
    idListaDeseos?: SortOrder
    idProducto?: SortOrder
    fechaAgregado?: SortOrder
  }

  export type ListaDeseosItemSumOrderByAggregateInput = {
    idListaItem?: SortOrder
    idListaDeseos?: SortOrder
    idProducto?: SortOrder
  }

  export type PedidoCountOrderByAggregateInput = {
    idPedido?: SortOrder
    idUsuario?: SortOrder
    fechaPedido?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    direccionEnvio?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    idPedido?: SortOrder
    idUsuario?: SortOrder
    total?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    idPedido?: SortOrder
    idUsuario?: SortOrder
    fechaPedido?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    direccionEnvio?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    idPedido?: SortOrder
    idUsuario?: SortOrder
    fechaPedido?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    direccionEnvio?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    idPedido?: SortOrder
    idUsuario?: SortOrder
    total?: SortOrder
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type PedidoItemIdPedidoIdProductoCompoundUniqueInput = {
    idPedido: number
    idProducto: number
  }

  export type PedidoItemCountOrderByAggregateInput = {
    idPedidoItem?: SortOrder
    idPedido?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type PedidoItemAvgOrderByAggregateInput = {
    idPedidoItem?: SortOrder
    idPedido?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type PedidoItemMaxOrderByAggregateInput = {
    idPedidoItem?: SortOrder
    idPedido?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type PedidoItemMinOrderByAggregateInput = {
    idPedidoItem?: SortOrder
    idPedido?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type PedidoItemSumOrderByAggregateInput = {
    idPedidoItem?: SortOrder
    idPedido?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type CarritoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    connect?: CarritoWhereUniqueInput
  }

  export type ListaDeseosCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ListaDeseosCreateWithoutUsuarioInput, ListaDeseosUncheckedCreateWithoutUsuarioInput> | ListaDeseosCreateWithoutUsuarioInput[] | ListaDeseosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ListaDeseosCreateOrConnectWithoutUsuarioInput | ListaDeseosCreateOrConnectWithoutUsuarioInput[]
    createMany?: ListaDeseosCreateManyUsuarioInputEnvelope
    connect?: ListaDeseosWhereUniqueInput | ListaDeseosWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type CarritoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    connect?: CarritoWhereUniqueInput
  }

  export type ListaDeseosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ListaDeseosCreateWithoutUsuarioInput, ListaDeseosUncheckedCreateWithoutUsuarioInput> | ListaDeseosCreateWithoutUsuarioInput[] | ListaDeseosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ListaDeseosCreateOrConnectWithoutUsuarioInput | ListaDeseosCreateOrConnectWithoutUsuarioInput[]
    createMany?: ListaDeseosCreateManyUsuarioInputEnvelope
    connect?: ListaDeseosWhereUniqueInput | ListaDeseosWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CarritoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    upsert?: CarritoUpsertWithoutUsuarioInput
    disconnect?: CarritoWhereInput | boolean
    delete?: CarritoWhereInput | boolean
    connect?: CarritoWhereUniqueInput
    update?: XOR<XOR<CarritoUpdateToOneWithWhereWithoutUsuarioInput, CarritoUpdateWithoutUsuarioInput>, CarritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ListaDeseosUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ListaDeseosCreateWithoutUsuarioInput, ListaDeseosUncheckedCreateWithoutUsuarioInput> | ListaDeseosCreateWithoutUsuarioInput[] | ListaDeseosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ListaDeseosCreateOrConnectWithoutUsuarioInput | ListaDeseosCreateOrConnectWithoutUsuarioInput[]
    upsert?: ListaDeseosUpsertWithWhereUniqueWithoutUsuarioInput | ListaDeseosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ListaDeseosCreateManyUsuarioInputEnvelope
    set?: ListaDeseosWhereUniqueInput | ListaDeseosWhereUniqueInput[]
    disconnect?: ListaDeseosWhereUniqueInput | ListaDeseosWhereUniqueInput[]
    delete?: ListaDeseosWhereUniqueInput | ListaDeseosWhereUniqueInput[]
    connect?: ListaDeseosWhereUniqueInput | ListaDeseosWhereUniqueInput[]
    update?: ListaDeseosUpdateWithWhereUniqueWithoutUsuarioInput | ListaDeseosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ListaDeseosUpdateManyWithWhereWithoutUsuarioInput | ListaDeseosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ListaDeseosScalarWhereInput | ListaDeseosScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarritoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    upsert?: CarritoUpsertWithoutUsuarioInput
    disconnect?: CarritoWhereInput | boolean
    delete?: CarritoWhereInput | boolean
    connect?: CarritoWhereUniqueInput
    update?: XOR<XOR<CarritoUpdateToOneWithWhereWithoutUsuarioInput, CarritoUpdateWithoutUsuarioInput>, CarritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ListaDeseosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ListaDeseosCreateWithoutUsuarioInput, ListaDeseosUncheckedCreateWithoutUsuarioInput> | ListaDeseosCreateWithoutUsuarioInput[] | ListaDeseosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ListaDeseosCreateOrConnectWithoutUsuarioInput | ListaDeseosCreateOrConnectWithoutUsuarioInput[]
    upsert?: ListaDeseosUpsertWithWhereUniqueWithoutUsuarioInput | ListaDeseosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ListaDeseosCreateManyUsuarioInputEnvelope
    set?: ListaDeseosWhereUniqueInput | ListaDeseosWhereUniqueInput[]
    disconnect?: ListaDeseosWhereUniqueInput | ListaDeseosWhereUniqueInput[]
    delete?: ListaDeseosWhereUniqueInput | ListaDeseosWhereUniqueInput[]
    connect?: ListaDeseosWhereUniqueInput | ListaDeseosWhereUniqueInput[]
    update?: ListaDeseosUpdateWithWhereUniqueWithoutUsuarioInput | ListaDeseosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ListaDeseosUpdateManyWithWhereWithoutUsuarioInput | ListaDeseosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ListaDeseosScalarWhereInput | ListaDeseosScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type CarritoItemCreateNestedManyWithoutProductoInput = {
    create?: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput> | CarritoItemCreateWithoutProductoInput[] | CarritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutProductoInput | CarritoItemCreateOrConnectWithoutProductoInput[]
    createMany?: CarritoItemCreateManyProductoInputEnvelope
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
  }

  export type ListaDeseosItemCreateNestedManyWithoutProductoInput = {
    create?: XOR<ListaDeseosItemCreateWithoutProductoInput, ListaDeseosItemUncheckedCreateWithoutProductoInput> | ListaDeseosItemCreateWithoutProductoInput[] | ListaDeseosItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ListaDeseosItemCreateOrConnectWithoutProductoInput | ListaDeseosItemCreateOrConnectWithoutProductoInput[]
    createMany?: ListaDeseosItemCreateManyProductoInputEnvelope
    connect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
  }

  export type PedidoItemCreateNestedManyWithoutProductoInput = {
    create?: XOR<PedidoItemCreateWithoutProductoInput, PedidoItemUncheckedCreateWithoutProductoInput> | PedidoItemCreateWithoutProductoInput[] | PedidoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutProductoInput | PedidoItemCreateOrConnectWithoutProductoInput[]
    createMany?: PedidoItemCreateManyProductoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type CarritoItemUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput> | CarritoItemCreateWithoutProductoInput[] | CarritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutProductoInput | CarritoItemCreateOrConnectWithoutProductoInput[]
    createMany?: CarritoItemCreateManyProductoInputEnvelope
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
  }

  export type ListaDeseosItemUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ListaDeseosItemCreateWithoutProductoInput, ListaDeseosItemUncheckedCreateWithoutProductoInput> | ListaDeseosItemCreateWithoutProductoInput[] | ListaDeseosItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ListaDeseosItemCreateOrConnectWithoutProductoInput | ListaDeseosItemCreateOrConnectWithoutProductoInput[]
    createMany?: ListaDeseosItemCreateManyProductoInputEnvelope
    connect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
  }

  export type PedidoItemUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<PedidoItemCreateWithoutProductoInput, PedidoItemUncheckedCreateWithoutProductoInput> | PedidoItemCreateWithoutProductoInput[] | PedidoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutProductoInput | PedidoItemCreateOrConnectWithoutProductoInput[]
    createMany?: PedidoItemCreateManyProductoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput> | CarritoItemCreateWithoutProductoInput[] | CarritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutProductoInput | CarritoItemCreateOrConnectWithoutProductoInput[]
    upsert?: CarritoItemUpsertWithWhereUniqueWithoutProductoInput | CarritoItemUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CarritoItemCreateManyProductoInputEnvelope
    set?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    disconnect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    delete?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    update?: CarritoItemUpdateWithWhereUniqueWithoutProductoInput | CarritoItemUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CarritoItemUpdateManyWithWhereWithoutProductoInput | CarritoItemUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
  }

  export type ListaDeseosItemUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ListaDeseosItemCreateWithoutProductoInput, ListaDeseosItemUncheckedCreateWithoutProductoInput> | ListaDeseosItemCreateWithoutProductoInput[] | ListaDeseosItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ListaDeseosItemCreateOrConnectWithoutProductoInput | ListaDeseosItemCreateOrConnectWithoutProductoInput[]
    upsert?: ListaDeseosItemUpsertWithWhereUniqueWithoutProductoInput | ListaDeseosItemUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ListaDeseosItemCreateManyProductoInputEnvelope
    set?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    disconnect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    delete?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    connect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    update?: ListaDeseosItemUpdateWithWhereUniqueWithoutProductoInput | ListaDeseosItemUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ListaDeseosItemUpdateManyWithWhereWithoutProductoInput | ListaDeseosItemUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ListaDeseosItemScalarWhereInput | ListaDeseosItemScalarWhereInput[]
  }

  export type PedidoItemUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutProductoInput, PedidoItemUncheckedCreateWithoutProductoInput> | PedidoItemCreateWithoutProductoInput[] | PedidoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutProductoInput | PedidoItemCreateOrConnectWithoutProductoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutProductoInput | PedidoItemUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PedidoItemCreateManyProductoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutProductoInput | PedidoItemUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutProductoInput | PedidoItemUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type CarritoItemUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput> | CarritoItemCreateWithoutProductoInput[] | CarritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutProductoInput | CarritoItemCreateOrConnectWithoutProductoInput[]
    upsert?: CarritoItemUpsertWithWhereUniqueWithoutProductoInput | CarritoItemUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CarritoItemCreateManyProductoInputEnvelope
    set?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    disconnect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    delete?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    update?: CarritoItemUpdateWithWhereUniqueWithoutProductoInput | CarritoItemUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CarritoItemUpdateManyWithWhereWithoutProductoInput | CarritoItemUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
  }

  export type ListaDeseosItemUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ListaDeseosItemCreateWithoutProductoInput, ListaDeseosItemUncheckedCreateWithoutProductoInput> | ListaDeseosItemCreateWithoutProductoInput[] | ListaDeseosItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ListaDeseosItemCreateOrConnectWithoutProductoInput | ListaDeseosItemCreateOrConnectWithoutProductoInput[]
    upsert?: ListaDeseosItemUpsertWithWhereUniqueWithoutProductoInput | ListaDeseosItemUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ListaDeseosItemCreateManyProductoInputEnvelope
    set?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    disconnect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    delete?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    connect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    update?: ListaDeseosItemUpdateWithWhereUniqueWithoutProductoInput | ListaDeseosItemUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ListaDeseosItemUpdateManyWithWhereWithoutProductoInput | ListaDeseosItemUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ListaDeseosItemScalarWhereInput | ListaDeseosItemScalarWhereInput[]
  }

  export type PedidoItemUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutProductoInput, PedidoItemUncheckedCreateWithoutProductoInput> | PedidoItemCreateWithoutProductoInput[] | PedidoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutProductoInput | PedidoItemCreateOrConnectWithoutProductoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutProductoInput | PedidoItemUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PedidoItemCreateManyProductoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutProductoInput | PedidoItemUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutProductoInput | PedidoItemUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCarritoInput = {
    create?: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarritoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CarritoItemCreateNestedManyWithoutCarritoInput = {
    create?: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput> | CarritoItemCreateWithoutCarritoInput[] | CarritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutCarritoInput | CarritoItemCreateOrConnectWithoutCarritoInput[]
    createMany?: CarritoItemCreateManyCarritoInputEnvelope
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
  }

  export type CarritoItemUncheckedCreateNestedManyWithoutCarritoInput = {
    create?: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput> | CarritoItemCreateWithoutCarritoInput[] | CarritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutCarritoInput | CarritoItemCreateOrConnectWithoutCarritoInput[]
    createMany?: CarritoItemCreateManyCarritoInputEnvelope
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutCarritoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarritoInput
    upsert?: UsuarioUpsertWithoutCarritoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCarritoInput, UsuarioUpdateWithoutCarritoInput>, UsuarioUncheckedUpdateWithoutCarritoInput>
  }

  export type CarritoItemUpdateManyWithoutCarritoNestedInput = {
    create?: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput> | CarritoItemCreateWithoutCarritoInput[] | CarritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutCarritoInput | CarritoItemCreateOrConnectWithoutCarritoInput[]
    upsert?: CarritoItemUpsertWithWhereUniqueWithoutCarritoInput | CarritoItemUpsertWithWhereUniqueWithoutCarritoInput[]
    createMany?: CarritoItemCreateManyCarritoInputEnvelope
    set?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    disconnect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    delete?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    update?: CarritoItemUpdateWithWhereUniqueWithoutCarritoInput | CarritoItemUpdateWithWhereUniqueWithoutCarritoInput[]
    updateMany?: CarritoItemUpdateManyWithWhereWithoutCarritoInput | CarritoItemUpdateManyWithWhereWithoutCarritoInput[]
    deleteMany?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
  }

  export type CarritoItemUncheckedUpdateManyWithoutCarritoNestedInput = {
    create?: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput> | CarritoItemCreateWithoutCarritoInput[] | CarritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoItemCreateOrConnectWithoutCarritoInput | CarritoItemCreateOrConnectWithoutCarritoInput[]
    upsert?: CarritoItemUpsertWithWhereUniqueWithoutCarritoInput | CarritoItemUpsertWithWhereUniqueWithoutCarritoInput[]
    createMany?: CarritoItemCreateManyCarritoInputEnvelope
    set?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    disconnect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    delete?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    connect?: CarritoItemWhereUniqueInput | CarritoItemWhereUniqueInput[]
    update?: CarritoItemUpdateWithWhereUniqueWithoutCarritoInput | CarritoItemUpdateWithWhereUniqueWithoutCarritoInput[]
    updateMany?: CarritoItemUpdateManyWithWhereWithoutCarritoInput | CarritoItemUpdateManyWithWhereWithoutCarritoInput[]
    deleteMany?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutListasDeseosInput = {
    create?: XOR<UsuarioCreateWithoutListasDeseosInput, UsuarioUncheckedCreateWithoutListasDeseosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutListasDeseosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ListaDeseosItemCreateNestedManyWithoutListaDeseosInput = {
    create?: XOR<ListaDeseosItemCreateWithoutListaDeseosInput, ListaDeseosItemUncheckedCreateWithoutListaDeseosInput> | ListaDeseosItemCreateWithoutListaDeseosInput[] | ListaDeseosItemUncheckedCreateWithoutListaDeseosInput[]
    connectOrCreate?: ListaDeseosItemCreateOrConnectWithoutListaDeseosInput | ListaDeseosItemCreateOrConnectWithoutListaDeseosInput[]
    createMany?: ListaDeseosItemCreateManyListaDeseosInputEnvelope
    connect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
  }

  export type ListaDeseosItemUncheckedCreateNestedManyWithoutListaDeseosInput = {
    create?: XOR<ListaDeseosItemCreateWithoutListaDeseosInput, ListaDeseosItemUncheckedCreateWithoutListaDeseosInput> | ListaDeseosItemCreateWithoutListaDeseosInput[] | ListaDeseosItemUncheckedCreateWithoutListaDeseosInput[]
    connectOrCreate?: ListaDeseosItemCreateOrConnectWithoutListaDeseosInput | ListaDeseosItemCreateOrConnectWithoutListaDeseosInput[]
    createMany?: ListaDeseosItemCreateManyListaDeseosInputEnvelope
    connect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutListasDeseosNestedInput = {
    create?: XOR<UsuarioCreateWithoutListasDeseosInput, UsuarioUncheckedCreateWithoutListasDeseosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutListasDeseosInput
    upsert?: UsuarioUpsertWithoutListasDeseosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutListasDeseosInput, UsuarioUpdateWithoutListasDeseosInput>, UsuarioUncheckedUpdateWithoutListasDeseosInput>
  }

  export type ListaDeseosItemUpdateManyWithoutListaDeseosNestedInput = {
    create?: XOR<ListaDeseosItemCreateWithoutListaDeseosInput, ListaDeseosItemUncheckedCreateWithoutListaDeseosInput> | ListaDeseosItemCreateWithoutListaDeseosInput[] | ListaDeseosItemUncheckedCreateWithoutListaDeseosInput[]
    connectOrCreate?: ListaDeseosItemCreateOrConnectWithoutListaDeseosInput | ListaDeseosItemCreateOrConnectWithoutListaDeseosInput[]
    upsert?: ListaDeseosItemUpsertWithWhereUniqueWithoutListaDeseosInput | ListaDeseosItemUpsertWithWhereUniqueWithoutListaDeseosInput[]
    createMany?: ListaDeseosItemCreateManyListaDeseosInputEnvelope
    set?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    disconnect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    delete?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    connect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    update?: ListaDeseosItemUpdateWithWhereUniqueWithoutListaDeseosInput | ListaDeseosItemUpdateWithWhereUniqueWithoutListaDeseosInput[]
    updateMany?: ListaDeseosItemUpdateManyWithWhereWithoutListaDeseosInput | ListaDeseosItemUpdateManyWithWhereWithoutListaDeseosInput[]
    deleteMany?: ListaDeseosItemScalarWhereInput | ListaDeseosItemScalarWhereInput[]
  }

  export type ListaDeseosItemUncheckedUpdateManyWithoutListaDeseosNestedInput = {
    create?: XOR<ListaDeseosItemCreateWithoutListaDeseosInput, ListaDeseosItemUncheckedCreateWithoutListaDeseosInput> | ListaDeseosItemCreateWithoutListaDeseosInput[] | ListaDeseosItemUncheckedCreateWithoutListaDeseosInput[]
    connectOrCreate?: ListaDeseosItemCreateOrConnectWithoutListaDeseosInput | ListaDeseosItemCreateOrConnectWithoutListaDeseosInput[]
    upsert?: ListaDeseosItemUpsertWithWhereUniqueWithoutListaDeseosInput | ListaDeseosItemUpsertWithWhereUniqueWithoutListaDeseosInput[]
    createMany?: ListaDeseosItemCreateManyListaDeseosInputEnvelope
    set?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    disconnect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    delete?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    connect?: ListaDeseosItemWhereUniqueInput | ListaDeseosItemWhereUniqueInput[]
    update?: ListaDeseosItemUpdateWithWhereUniqueWithoutListaDeseosInput | ListaDeseosItemUpdateWithWhereUniqueWithoutListaDeseosInput[]
    updateMany?: ListaDeseosItemUpdateManyWithWhereWithoutListaDeseosInput | ListaDeseosItemUpdateManyWithWhereWithoutListaDeseosInput[]
    deleteMany?: ListaDeseosItemScalarWhereInput | ListaDeseosItemScalarWhereInput[]
  }

  export type CarritoCreateNestedOneWithoutItemsInput = {
    create?: XOR<CarritoCreateWithoutItemsInput, CarritoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutItemsInput
    connect?: CarritoWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutCarritoItemsInput = {
    create?: XOR<ProductoCreateWithoutCarritoItemsInput, ProductoUncheckedCreateWithoutCarritoItemsInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutCarritoItemsInput
    connect?: ProductoWhereUniqueInput
  }

  export type CarritoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CarritoCreateWithoutItemsInput, CarritoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutItemsInput
    upsert?: CarritoUpsertWithoutItemsInput
    connect?: CarritoWhereUniqueInput
    update?: XOR<XOR<CarritoUpdateToOneWithWhereWithoutItemsInput, CarritoUpdateWithoutItemsInput>, CarritoUncheckedUpdateWithoutItemsInput>
  }

  export type ProductoUpdateOneRequiredWithoutCarritoItemsNestedInput = {
    create?: XOR<ProductoCreateWithoutCarritoItemsInput, ProductoUncheckedCreateWithoutCarritoItemsInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutCarritoItemsInput
    upsert?: ProductoUpsertWithoutCarritoItemsInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutCarritoItemsInput, ProductoUpdateWithoutCarritoItemsInput>, ProductoUncheckedUpdateWithoutCarritoItemsInput>
  }

  export type ListaDeseosCreateNestedOneWithoutItemsInput = {
    create?: XOR<ListaDeseosCreateWithoutItemsInput, ListaDeseosUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ListaDeseosCreateOrConnectWithoutItemsInput
    connect?: ListaDeseosWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutListaDeseosItemsInput = {
    create?: XOR<ProductoCreateWithoutListaDeseosItemsInput, ProductoUncheckedCreateWithoutListaDeseosItemsInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutListaDeseosItemsInput
    connect?: ProductoWhereUniqueInput
  }

  export type ListaDeseosUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ListaDeseosCreateWithoutItemsInput, ListaDeseosUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ListaDeseosCreateOrConnectWithoutItemsInput
    upsert?: ListaDeseosUpsertWithoutItemsInput
    connect?: ListaDeseosWhereUniqueInput
    update?: XOR<XOR<ListaDeseosUpdateToOneWithWhereWithoutItemsInput, ListaDeseosUpdateWithoutItemsInput>, ListaDeseosUncheckedUpdateWithoutItemsInput>
  }

  export type ProductoUpdateOneRequiredWithoutListaDeseosItemsNestedInput = {
    create?: XOR<ProductoCreateWithoutListaDeseosItemsInput, ProductoUncheckedCreateWithoutListaDeseosItemsInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutListaDeseosItemsInput
    upsert?: ProductoUpsertWithoutListaDeseosItemsInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutListaDeseosItemsInput, ProductoUpdateWithoutListaDeseosItemsInput>, ProductoUncheckedUpdateWithoutListaDeseosItemsInput>
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PedidoItemCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type PedidoItemUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type PedidoItemUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutPedidoInput | PedidoItemUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutPedidoInput | PedidoItemUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutPedidoInput | PedidoItemUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutPedidoInput | PedidoItemUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutPedidoInput | PedidoItemUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutPedidoInput | PedidoItemUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutItemsInput = {
    create?: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItemsInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutPedidoItemsInput = {
    create?: XOR<ProductoCreateWithoutPedidoItemsInput, ProductoUncheckedCreateWithoutPedidoItemsInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPedidoItemsInput
    connect?: ProductoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItemsInput
    upsert?: PedidoUpsertWithoutItemsInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItemsInput, PedidoUpdateWithoutItemsInput>, PedidoUncheckedUpdateWithoutItemsInput>
  }

  export type ProductoUpdateOneRequiredWithoutPedidoItemsNestedInput = {
    create?: XOR<ProductoCreateWithoutPedidoItemsInput, ProductoUncheckedCreateWithoutPedidoItemsInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPedidoItemsInput
    upsert?: ProductoUpsertWithoutPedidoItemsInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutPedidoItemsInput, ProductoUpdateWithoutPedidoItemsInput>, ProductoUncheckedUpdateWithoutPedidoItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CarritoCreateWithoutUsuarioInput = {
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    items?: CarritoItemCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUncheckedCreateWithoutUsuarioInput = {
    idCarrito?: number
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    items?: CarritoItemUncheckedCreateNestedManyWithoutCarritoInput
  }

  export type CarritoCreateOrConnectWithoutUsuarioInput = {
    where: CarritoWhereUniqueInput
    create: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
  }

  export type ListaDeseosCreateWithoutUsuarioInput = {
    nombre: string
    fechaCreacion?: Date | string
    items?: ListaDeseosItemCreateNestedManyWithoutListaDeseosInput
  }

  export type ListaDeseosUncheckedCreateWithoutUsuarioInput = {
    idListaDeseos?: number
    nombre: string
    fechaCreacion?: Date | string
    items?: ListaDeseosItemUncheckedCreateNestedManyWithoutListaDeseosInput
  }

  export type ListaDeseosCreateOrConnectWithoutUsuarioInput = {
    where: ListaDeseosWhereUniqueInput
    create: XOR<ListaDeseosCreateWithoutUsuarioInput, ListaDeseosUncheckedCreateWithoutUsuarioInput>
  }

  export type ListaDeseosCreateManyUsuarioInputEnvelope = {
    data: ListaDeseosCreateManyUsuarioInput | ListaDeseosCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutUsuarioInput = {
    fechaPedido?: Date | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: string
    direccionEnvio: string
    items?: PedidoItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutUsuarioInput = {
    idPedido?: number
    fechaPedido?: Date | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: string
    direccionEnvio: string
    items?: PedidoItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoCreateManyUsuarioInputEnvelope = {
    data: PedidoCreateManyUsuarioInput | PedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CarritoUpsertWithoutUsuarioInput = {
    update: XOR<CarritoUpdateWithoutUsuarioInput, CarritoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    where?: CarritoWhereInput
  }

  export type CarritoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: CarritoWhereInput
    data: XOR<CarritoUpdateWithoutUsuarioInput, CarritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CarritoUpdateWithoutUsuarioInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CarritoItemUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateWithoutUsuarioInput = {
    idCarrito?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CarritoItemUncheckedUpdateManyWithoutCarritoNestedInput
  }

  export type ListaDeseosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ListaDeseosWhereUniqueInput
    update: XOR<ListaDeseosUpdateWithoutUsuarioInput, ListaDeseosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ListaDeseosCreateWithoutUsuarioInput, ListaDeseosUncheckedCreateWithoutUsuarioInput>
  }

  export type ListaDeseosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ListaDeseosWhereUniqueInput
    data: XOR<ListaDeseosUpdateWithoutUsuarioInput, ListaDeseosUncheckedUpdateWithoutUsuarioInput>
  }

  export type ListaDeseosUpdateManyWithWhereWithoutUsuarioInput = {
    where: ListaDeseosScalarWhereInput
    data: XOR<ListaDeseosUpdateManyMutationInput, ListaDeseosUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ListaDeseosScalarWhereInput = {
    AND?: ListaDeseosScalarWhereInput | ListaDeseosScalarWhereInput[]
    OR?: ListaDeseosScalarWhereInput[]
    NOT?: ListaDeseosScalarWhereInput | ListaDeseosScalarWhereInput[]
    idListaDeseos?: IntFilter<"ListaDeseos"> | number
    idUsuario?: IntFilter<"ListaDeseos"> | number
    nombre?: StringFilter<"ListaDeseos"> | string
    fechaCreacion?: DateTimeFilter<"ListaDeseos"> | Date | string
  }

  export type PedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    idPedido?: IntFilter<"Pedido"> | number
    idUsuario?: IntFilter<"Pedido"> | number
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    estado?: StringFilter<"Pedido"> | string
    direccionEnvio?: StringFilter<"Pedido"> | string
  }

  export type CarritoItemCreateWithoutProductoInput = {
    cantidad?: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    carrito: CarritoCreateNestedOneWithoutItemsInput
  }

  export type CarritoItemUncheckedCreateWithoutProductoInput = {
    idCarritoItem?: number
    idCarrito: number
    cantidad?: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemCreateOrConnectWithoutProductoInput = {
    where: CarritoItemWhereUniqueInput
    create: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput>
  }

  export type CarritoItemCreateManyProductoInputEnvelope = {
    data: CarritoItemCreateManyProductoInput | CarritoItemCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type ListaDeseosItemCreateWithoutProductoInput = {
    fechaAgregado?: Date | string
    listaDeseos: ListaDeseosCreateNestedOneWithoutItemsInput
  }

  export type ListaDeseosItemUncheckedCreateWithoutProductoInput = {
    idListaItem?: number
    idListaDeseos: number
    fechaAgregado?: Date | string
  }

  export type ListaDeseosItemCreateOrConnectWithoutProductoInput = {
    where: ListaDeseosItemWhereUniqueInput
    create: XOR<ListaDeseosItemCreateWithoutProductoInput, ListaDeseosItemUncheckedCreateWithoutProductoInput>
  }

  export type ListaDeseosItemCreateManyProductoInputEnvelope = {
    data: ListaDeseosItemCreateManyProductoInput | ListaDeseosItemCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type PedidoItemCreateWithoutProductoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutItemsInput
  }

  export type PedidoItemUncheckedCreateWithoutProductoInput = {
    idPedidoItem?: number
    idPedido: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type PedidoItemCreateOrConnectWithoutProductoInput = {
    where: PedidoItemWhereUniqueInput
    create: XOR<PedidoItemCreateWithoutProductoInput, PedidoItemUncheckedCreateWithoutProductoInput>
  }

  export type PedidoItemCreateManyProductoInputEnvelope = {
    data: PedidoItemCreateManyProductoInput | PedidoItemCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CarritoItemUpsertWithWhereUniqueWithoutProductoInput = {
    where: CarritoItemWhereUniqueInput
    update: XOR<CarritoItemUpdateWithoutProductoInput, CarritoItemUncheckedUpdateWithoutProductoInput>
    create: XOR<CarritoItemCreateWithoutProductoInput, CarritoItemUncheckedCreateWithoutProductoInput>
  }

  export type CarritoItemUpdateWithWhereUniqueWithoutProductoInput = {
    where: CarritoItemWhereUniqueInput
    data: XOR<CarritoItemUpdateWithoutProductoInput, CarritoItemUncheckedUpdateWithoutProductoInput>
  }

  export type CarritoItemUpdateManyWithWhereWithoutProductoInput = {
    where: CarritoItemScalarWhereInput
    data: XOR<CarritoItemUpdateManyMutationInput, CarritoItemUncheckedUpdateManyWithoutProductoInput>
  }

  export type CarritoItemScalarWhereInput = {
    AND?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
    OR?: CarritoItemScalarWhereInput[]
    NOT?: CarritoItemScalarWhereInput | CarritoItemScalarWhereInput[]
    idCarritoItem?: IntFilter<"CarritoItem"> | number
    idCarrito?: IntFilter<"CarritoItem"> | number
    idProducto?: IntFilter<"CarritoItem"> | number
    cantidad?: IntFilter<"CarritoItem"> | number
    precioUnitario?: DecimalFilter<"CarritoItem"> | Decimal | DecimalJsLike | number | string
  }

  export type ListaDeseosItemUpsertWithWhereUniqueWithoutProductoInput = {
    where: ListaDeseosItemWhereUniqueInput
    update: XOR<ListaDeseosItemUpdateWithoutProductoInput, ListaDeseosItemUncheckedUpdateWithoutProductoInput>
    create: XOR<ListaDeseosItemCreateWithoutProductoInput, ListaDeseosItemUncheckedCreateWithoutProductoInput>
  }

  export type ListaDeseosItemUpdateWithWhereUniqueWithoutProductoInput = {
    where: ListaDeseosItemWhereUniqueInput
    data: XOR<ListaDeseosItemUpdateWithoutProductoInput, ListaDeseosItemUncheckedUpdateWithoutProductoInput>
  }

  export type ListaDeseosItemUpdateManyWithWhereWithoutProductoInput = {
    where: ListaDeseosItemScalarWhereInput
    data: XOR<ListaDeseosItemUpdateManyMutationInput, ListaDeseosItemUncheckedUpdateManyWithoutProductoInput>
  }

  export type ListaDeseosItemScalarWhereInput = {
    AND?: ListaDeseosItemScalarWhereInput | ListaDeseosItemScalarWhereInput[]
    OR?: ListaDeseosItemScalarWhereInput[]
    NOT?: ListaDeseosItemScalarWhereInput | ListaDeseosItemScalarWhereInput[]
    idListaItem?: IntFilter<"ListaDeseosItem"> | number
    idListaDeseos?: IntFilter<"ListaDeseosItem"> | number
    idProducto?: IntFilter<"ListaDeseosItem"> | number
    fechaAgregado?: DateTimeFilter<"ListaDeseosItem"> | Date | string
  }

  export type PedidoItemUpsertWithWhereUniqueWithoutProductoInput = {
    where: PedidoItemWhereUniqueInput
    update: XOR<PedidoItemUpdateWithoutProductoInput, PedidoItemUncheckedUpdateWithoutProductoInput>
    create: XOR<PedidoItemCreateWithoutProductoInput, PedidoItemUncheckedCreateWithoutProductoInput>
  }

  export type PedidoItemUpdateWithWhereUniqueWithoutProductoInput = {
    where: PedidoItemWhereUniqueInput
    data: XOR<PedidoItemUpdateWithoutProductoInput, PedidoItemUncheckedUpdateWithoutProductoInput>
  }

  export type PedidoItemUpdateManyWithWhereWithoutProductoInput = {
    where: PedidoItemScalarWhereInput
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyWithoutProductoInput>
  }

  export type PedidoItemScalarWhereInput = {
    AND?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
    OR?: PedidoItemScalarWhereInput[]
    NOT?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
    idPedidoItem?: IntFilter<"PedidoItem"> | number
    idPedido?: IntFilter<"PedidoItem"> | number
    idProducto?: IntFilter<"PedidoItem"> | number
    cantidad?: IntFilter<"PedidoItem"> | number
    precioUnitario?: DecimalFilter<"PedidoItem"> | Decimal | DecimalJsLike | number | string
  }

  export type UsuarioCreateWithoutCarritoInput = {
    nombre: string
    email: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    listasDeseos?: ListaDeseosCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCarritoInput = {
    idUsuario?: number
    nombre: string
    email: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    listasDeseos?: ListaDeseosUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCarritoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
  }

  export type CarritoItemCreateWithoutCarritoInput = {
    cantidad?: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    producto: ProductoCreateNestedOneWithoutCarritoItemsInput
  }

  export type CarritoItemUncheckedCreateWithoutCarritoInput = {
    idCarritoItem?: number
    idProducto: number
    cantidad?: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemCreateOrConnectWithoutCarritoInput = {
    where: CarritoItemWhereUniqueInput
    create: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput>
  }

  export type CarritoItemCreateManyCarritoInputEnvelope = {
    data: CarritoItemCreateManyCarritoInput | CarritoItemCreateManyCarritoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutCarritoInput = {
    update: XOR<UsuarioUpdateWithoutCarritoInput, UsuarioUncheckedUpdateWithoutCarritoInput>
    create: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCarritoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCarritoInput, UsuarioUncheckedUpdateWithoutCarritoInput>
  }

  export type UsuarioUpdateWithoutCarritoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    listasDeseos?: ListaDeseosUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCarritoInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    listasDeseos?: ListaDeseosUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CarritoItemUpsertWithWhereUniqueWithoutCarritoInput = {
    where: CarritoItemWhereUniqueInput
    update: XOR<CarritoItemUpdateWithoutCarritoInput, CarritoItemUncheckedUpdateWithoutCarritoInput>
    create: XOR<CarritoItemCreateWithoutCarritoInput, CarritoItemUncheckedCreateWithoutCarritoInput>
  }

  export type CarritoItemUpdateWithWhereUniqueWithoutCarritoInput = {
    where: CarritoItemWhereUniqueInput
    data: XOR<CarritoItemUpdateWithoutCarritoInput, CarritoItemUncheckedUpdateWithoutCarritoInput>
  }

  export type CarritoItemUpdateManyWithWhereWithoutCarritoInput = {
    where: CarritoItemScalarWhereInput
    data: XOR<CarritoItemUpdateManyMutationInput, CarritoItemUncheckedUpdateManyWithoutCarritoInput>
  }

  export type UsuarioCreateWithoutListasDeseosInput = {
    nombre: string
    email: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    carrito?: CarritoCreateNestedOneWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutListasDeseosInput = {
    idUsuario?: number
    nombre: string
    email: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    carrito?: CarritoUncheckedCreateNestedOneWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutListasDeseosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutListasDeseosInput, UsuarioUncheckedCreateWithoutListasDeseosInput>
  }

  export type ListaDeseosItemCreateWithoutListaDeseosInput = {
    fechaAgregado?: Date | string
    producto: ProductoCreateNestedOneWithoutListaDeseosItemsInput
  }

  export type ListaDeseosItemUncheckedCreateWithoutListaDeseosInput = {
    idListaItem?: number
    idProducto: number
    fechaAgregado?: Date | string
  }

  export type ListaDeseosItemCreateOrConnectWithoutListaDeseosInput = {
    where: ListaDeseosItemWhereUniqueInput
    create: XOR<ListaDeseosItemCreateWithoutListaDeseosInput, ListaDeseosItemUncheckedCreateWithoutListaDeseosInput>
  }

  export type ListaDeseosItemCreateManyListaDeseosInputEnvelope = {
    data: ListaDeseosItemCreateManyListaDeseosInput | ListaDeseosItemCreateManyListaDeseosInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutListasDeseosInput = {
    update: XOR<UsuarioUpdateWithoutListasDeseosInput, UsuarioUncheckedUpdateWithoutListasDeseosInput>
    create: XOR<UsuarioCreateWithoutListasDeseosInput, UsuarioUncheckedCreateWithoutListasDeseosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutListasDeseosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutListasDeseosInput, UsuarioUncheckedUpdateWithoutListasDeseosInput>
  }

  export type UsuarioUpdateWithoutListasDeseosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUpdateOneWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutListasDeseosInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUncheckedUpdateOneWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ListaDeseosItemUpsertWithWhereUniqueWithoutListaDeseosInput = {
    where: ListaDeseosItemWhereUniqueInput
    update: XOR<ListaDeseosItemUpdateWithoutListaDeseosInput, ListaDeseosItemUncheckedUpdateWithoutListaDeseosInput>
    create: XOR<ListaDeseosItemCreateWithoutListaDeseosInput, ListaDeseosItemUncheckedCreateWithoutListaDeseosInput>
  }

  export type ListaDeseosItemUpdateWithWhereUniqueWithoutListaDeseosInput = {
    where: ListaDeseosItemWhereUniqueInput
    data: XOR<ListaDeseosItemUpdateWithoutListaDeseosInput, ListaDeseosItemUncheckedUpdateWithoutListaDeseosInput>
  }

  export type ListaDeseosItemUpdateManyWithWhereWithoutListaDeseosInput = {
    where: ListaDeseosItemScalarWhereInput
    data: XOR<ListaDeseosItemUpdateManyMutationInput, ListaDeseosItemUncheckedUpdateManyWithoutListaDeseosInput>
  }

  export type CarritoCreateWithoutItemsInput = {
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCarritoInput
  }

  export type CarritoUncheckedCreateWithoutItemsInput = {
    idCarrito?: number
    idUsuario: number
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CarritoCreateOrConnectWithoutItemsInput = {
    where: CarritoWhereUniqueInput
    create: XOR<CarritoCreateWithoutItemsInput, CarritoUncheckedCreateWithoutItemsInput>
  }

  export type ProductoCreateWithoutCarritoItemsInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    categoria?: string | null
    fechaCreacion?: Date | string
    listaDeseosItems?: ListaDeseosItemCreateNestedManyWithoutProductoInput
    pedidoItems?: PedidoItemCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCarritoItemsInput = {
    idProducto?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    categoria?: string | null
    fechaCreacion?: Date | string
    listaDeseosItems?: ListaDeseosItemUncheckedCreateNestedManyWithoutProductoInput
    pedidoItems?: PedidoItemUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCarritoItemsInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCarritoItemsInput, ProductoUncheckedCreateWithoutCarritoItemsInput>
  }

  export type CarritoUpsertWithoutItemsInput = {
    update: XOR<CarritoUpdateWithoutItemsInput, CarritoUncheckedUpdateWithoutItemsInput>
    create: XOR<CarritoCreateWithoutItemsInput, CarritoUncheckedCreateWithoutItemsInput>
    where?: CarritoWhereInput
  }

  export type CarritoUpdateToOneWithWhereWithoutItemsInput = {
    where?: CarritoWhereInput
    data: XOR<CarritoUpdateWithoutItemsInput, CarritoUncheckedUpdateWithoutItemsInput>
  }

  export type CarritoUpdateWithoutItemsInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateWithoutItemsInput = {
    idCarrito?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUpsertWithoutCarritoItemsInput = {
    update: XOR<ProductoUpdateWithoutCarritoItemsInput, ProductoUncheckedUpdateWithoutCarritoItemsInput>
    create: XOR<ProductoCreateWithoutCarritoItemsInput, ProductoUncheckedCreateWithoutCarritoItemsInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutCarritoItemsInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutCarritoItemsInput, ProductoUncheckedUpdateWithoutCarritoItemsInput>
  }

  export type ProductoUpdateWithoutCarritoItemsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    listaDeseosItems?: ListaDeseosItemUpdateManyWithoutProductoNestedInput
    pedidoItems?: PedidoItemUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCarritoItemsInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    listaDeseosItems?: ListaDeseosItemUncheckedUpdateManyWithoutProductoNestedInput
    pedidoItems?: PedidoItemUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ListaDeseosCreateWithoutItemsInput = {
    nombre: string
    fechaCreacion?: Date | string
    usuario: UsuarioCreateNestedOneWithoutListasDeseosInput
  }

  export type ListaDeseosUncheckedCreateWithoutItemsInput = {
    idListaDeseos?: number
    idUsuario: number
    nombre: string
    fechaCreacion?: Date | string
  }

  export type ListaDeseosCreateOrConnectWithoutItemsInput = {
    where: ListaDeseosWhereUniqueInput
    create: XOR<ListaDeseosCreateWithoutItemsInput, ListaDeseosUncheckedCreateWithoutItemsInput>
  }

  export type ProductoCreateWithoutListaDeseosItemsInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    categoria?: string | null
    fechaCreacion?: Date | string
    carritoItems?: CarritoItemCreateNestedManyWithoutProductoInput
    pedidoItems?: PedidoItemCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutListaDeseosItemsInput = {
    idProducto?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    categoria?: string | null
    fechaCreacion?: Date | string
    carritoItems?: CarritoItemUncheckedCreateNestedManyWithoutProductoInput
    pedidoItems?: PedidoItemUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutListaDeseosItemsInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutListaDeseosItemsInput, ProductoUncheckedCreateWithoutListaDeseosItemsInput>
  }

  export type ListaDeseosUpsertWithoutItemsInput = {
    update: XOR<ListaDeseosUpdateWithoutItemsInput, ListaDeseosUncheckedUpdateWithoutItemsInput>
    create: XOR<ListaDeseosCreateWithoutItemsInput, ListaDeseosUncheckedCreateWithoutItemsInput>
    where?: ListaDeseosWhereInput
  }

  export type ListaDeseosUpdateToOneWithWhereWithoutItemsInput = {
    where?: ListaDeseosWhereInput
    data: XOR<ListaDeseosUpdateWithoutItemsInput, ListaDeseosUncheckedUpdateWithoutItemsInput>
  }

  export type ListaDeseosUpdateWithoutItemsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutListasDeseosNestedInput
  }

  export type ListaDeseosUncheckedUpdateWithoutItemsInput = {
    idListaDeseos?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUpsertWithoutListaDeseosItemsInput = {
    update: XOR<ProductoUpdateWithoutListaDeseosItemsInput, ProductoUncheckedUpdateWithoutListaDeseosItemsInput>
    create: XOR<ProductoCreateWithoutListaDeseosItemsInput, ProductoUncheckedCreateWithoutListaDeseosItemsInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutListaDeseosItemsInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutListaDeseosItemsInput, ProductoUncheckedUpdateWithoutListaDeseosItemsInput>
  }

  export type ProductoUpdateWithoutListaDeseosItemsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    carritoItems?: CarritoItemUpdateManyWithoutProductoNestedInput
    pedidoItems?: PedidoItemUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutListaDeseosItemsInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    carritoItems?: CarritoItemUncheckedUpdateManyWithoutProductoNestedInput
    pedidoItems?: PedidoItemUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type UsuarioCreateWithoutPedidosInput = {
    nombre: string
    email: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    carrito?: CarritoCreateNestedOneWithoutUsuarioInput
    listasDeseos?: ListaDeseosCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    idUsuario?: number
    nombre: string
    email: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    carrito?: CarritoUncheckedCreateNestedOneWithoutUsuarioInput
    listasDeseos?: ListaDeseosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type PedidoItemCreateWithoutPedidoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    producto: ProductoCreateNestedOneWithoutPedidoItemsInput
  }

  export type PedidoItemUncheckedCreateWithoutPedidoInput = {
    idPedidoItem?: number
    idProducto: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type PedidoItemCreateOrConnectWithoutPedidoInput = {
    where: PedidoItemWhereUniqueInput
    create: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoItemCreateManyPedidoInputEnvelope = {
    data: PedidoItemCreateManyPedidoInput | PedidoItemCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUpdateOneWithoutUsuarioNestedInput
    listasDeseos?: ListaDeseosUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUncheckedUpdateOneWithoutUsuarioNestedInput
    listasDeseos?: ListaDeseosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PedidoItemUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoItemWhereUniqueInput
    update: XOR<PedidoItemUpdateWithoutPedidoInput, PedidoItemUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoItemUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoItemWhereUniqueInput
    data: XOR<PedidoItemUpdateWithoutPedidoInput, PedidoItemUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoItemUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoItemScalarWhereInput
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoCreateWithoutItemsInput = {
    fechaPedido?: Date | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: string
    direccionEnvio: string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutItemsInput = {
    idPedido?: number
    idUsuario: number
    fechaPedido?: Date | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: string
    direccionEnvio: string
  }

  export type PedidoCreateOrConnectWithoutItemsInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
  }

  export type ProductoCreateWithoutPedidoItemsInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    categoria?: string | null
    fechaCreacion?: Date | string
    carritoItems?: CarritoItemCreateNestedManyWithoutProductoInput
    listaDeseosItems?: ListaDeseosItemCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutPedidoItemsInput = {
    idProducto?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    categoria?: string | null
    fechaCreacion?: Date | string
    carritoItems?: CarritoItemUncheckedCreateNestedManyWithoutProductoInput
    listaDeseosItems?: ListaDeseosItemUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutPedidoItemsInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutPedidoItemsInput, ProductoUncheckedCreateWithoutPedidoItemsInput>
  }

  export type PedidoUpsertWithoutItemsInput = {
    update: XOR<PedidoUpdateWithoutItemsInput, PedidoUncheckedUpdateWithoutItemsInput>
    create: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItemsInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItemsInput, PedidoUncheckedUpdateWithoutItemsInput>
  }

  export type PedidoUpdateWithoutItemsInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionEnvio?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItemsInput = {
    idPedido?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionEnvio?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoUpsertWithoutPedidoItemsInput = {
    update: XOR<ProductoUpdateWithoutPedidoItemsInput, ProductoUncheckedUpdateWithoutPedidoItemsInput>
    create: XOR<ProductoCreateWithoutPedidoItemsInput, ProductoUncheckedCreateWithoutPedidoItemsInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutPedidoItemsInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutPedidoItemsInput, ProductoUncheckedUpdateWithoutPedidoItemsInput>
  }

  export type ProductoUpdateWithoutPedidoItemsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    carritoItems?: CarritoItemUpdateManyWithoutProductoNestedInput
    listaDeseosItems?: ListaDeseosItemUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutPedidoItemsInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    carritoItems?: CarritoItemUncheckedUpdateManyWithoutProductoNestedInput
    listaDeseosItems?: ListaDeseosItemUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ListaDeseosCreateManyUsuarioInput = {
    idListaDeseos?: number
    nombre: string
    fechaCreacion?: Date | string
  }

  export type PedidoCreateManyUsuarioInput = {
    idPedido?: number
    fechaPedido?: Date | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: string
    direccionEnvio: string
  }

  export type ListaDeseosUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ListaDeseosItemUpdateManyWithoutListaDeseosNestedInput
  }

  export type ListaDeseosUncheckedUpdateWithoutUsuarioInput = {
    idListaDeseos?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ListaDeseosItemUncheckedUpdateManyWithoutListaDeseosNestedInput
  }

  export type ListaDeseosUncheckedUpdateManyWithoutUsuarioInput = {
    idListaDeseos?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUpdateWithoutUsuarioInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionEnvio?: StringFieldUpdateOperationsInput | string
    items?: PedidoItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutUsuarioInput = {
    idPedido?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionEnvio?: StringFieldUpdateOperationsInput | string
    items?: PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioInput = {
    idPedido?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionEnvio?: StringFieldUpdateOperationsInput | string
  }

  export type CarritoItemCreateManyProductoInput = {
    idCarritoItem?: number
    idCarrito: number
    cantidad?: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type ListaDeseosItemCreateManyProductoInput = {
    idListaItem?: number
    idListaDeseos: number
    fechaAgregado?: Date | string
  }

  export type PedidoItemCreateManyProductoInput = {
    idPedidoItem?: number
    idPedido: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carrito?: CarritoUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CarritoItemUncheckedUpdateWithoutProductoInput = {
    idCarritoItem?: IntFieldUpdateOperationsInput | number
    idCarrito?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemUncheckedUpdateManyWithoutProductoInput = {
    idCarritoItem?: IntFieldUpdateOperationsInput | number
    idCarrito?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ListaDeseosItemUpdateWithoutProductoInput = {
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string
    listaDeseos?: ListaDeseosUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ListaDeseosItemUncheckedUpdateWithoutProductoInput = {
    idListaItem?: IntFieldUpdateOperationsInput | number
    idListaDeseos?: IntFieldUpdateOperationsInput | number
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeseosItemUncheckedUpdateManyWithoutProductoInput = {
    idListaItem?: IntFieldUpdateOperationsInput | number
    idListaDeseos?: IntFieldUpdateOperationsInput | number
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoItemUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PedidoItemUncheckedUpdateWithoutProductoInput = {
    idPedidoItem?: IntFieldUpdateOperationsInput | number
    idPedido?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoItemUncheckedUpdateManyWithoutProductoInput = {
    idPedidoItem?: IntFieldUpdateOperationsInput | number
    idPedido?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemCreateManyCarritoInput = {
    idCarritoItem?: number
    idProducto: number
    cantidad?: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemUpdateWithoutCarritoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto?: ProductoUpdateOneRequiredWithoutCarritoItemsNestedInput
  }

  export type CarritoItemUncheckedUpdateWithoutCarritoInput = {
    idCarritoItem?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CarritoItemUncheckedUpdateManyWithoutCarritoInput = {
    idCarritoItem?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ListaDeseosItemCreateManyListaDeseosInput = {
    idListaItem?: number
    idProducto: number
    fechaAgregado?: Date | string
  }

  export type ListaDeseosItemUpdateWithoutListaDeseosInput = {
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutListaDeseosItemsNestedInput
  }

  export type ListaDeseosItemUncheckedUpdateWithoutListaDeseosInput = {
    idListaItem?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeseosItemUncheckedUpdateManyWithoutListaDeseosInput = {
    idListaItem?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoItemCreateManyPedidoInput = {
    idPedidoItem?: number
    idProducto: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type PedidoItemUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto?: ProductoUpdateOneRequiredWithoutPedidoItemsNestedInput
  }

  export type PedidoItemUncheckedUpdateWithoutPedidoInput = {
    idPedidoItem?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoItemUncheckedUpdateManyWithoutPedidoInput = {
    idPedidoItem?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}