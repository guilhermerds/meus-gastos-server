
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Income
 * 
 */
export type Income = $Result.DefaultSelection<Prisma.$IncomePayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model CreditCard
 * 
 */
export type CreditCard = $Result.DefaultSelection<Prisma.$CreditCardPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Installment
 * 
 */
export type Installment = $Result.DefaultSelection<Prisma.$InstallmentPayload>
/**
 * Model CreditCardPurchase
 * 
 */
export type CreditCardPurchase = $Result.DefaultSelection<Prisma.$CreditCardPurchasePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.income`: Exposes CRUD operations for the **Income** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incomes
    * const incomes = await prisma.income.findMany()
    * ```
    */
  get income(): Prisma.IncomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditCard`: Exposes CRUD operations for the **CreditCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditCards
    * const creditCards = await prisma.creditCard.findMany()
    * ```
    */
  get creditCard(): Prisma.CreditCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.installment`: Exposes CRUD operations for the **Installment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Installments
    * const installments = await prisma.installment.findMany()
    * ```
    */
  get installment(): Prisma.InstallmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditCardPurchase`: Exposes CRUD operations for the **CreditCardPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditCardPurchases
    * const creditCardPurchases = await prisma.creditCardPurchase.findMany()
    * ```
    */
  get creditCardPurchase(): Prisma.CreditCardPurchaseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Category: 'Category',
    Income: 'Income',
    Expense: 'Expense',
    CreditCard: 'CreditCard',
    Invoice: 'Invoice',
    Installment: 'Installment',
    CreditCardPurchase: 'CreditCardPurchase'
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
      modelProps: "user" | "category" | "income" | "expense" | "creditCard" | "invoice" | "installment" | "creditCardPurchase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Income: {
        payload: Prisma.$IncomePayload<ExtArgs>
        fields: Prisma.IncomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          findFirst: {
            args: Prisma.IncomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          findMany: {
            args: Prisma.IncomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          create: {
            args: Prisma.IncomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          createMany: {
            args: Prisma.IncomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          delete: {
            args: Prisma.IncomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          update: {
            args: Prisma.IncomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          deleteMany: {
            args: Prisma.IncomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncomeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          upsert: {
            args: Prisma.IncomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          aggregate: {
            args: Prisma.IncomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncome>
          }
          groupBy: {
            args: Prisma.IncomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncomeCountArgs<ExtArgs>
            result: $Utils.Optional<IncomeCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      CreditCard: {
        payload: Prisma.$CreditCardPayload<ExtArgs>
        fields: Prisma.CreditCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findFirst: {
            args: Prisma.CreditCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findMany: {
            args: Prisma.CreditCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          create: {
            args: Prisma.CreditCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          createMany: {
            args: Prisma.CreditCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          delete: {
            args: Prisma.CreditCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          update: {
            args: Prisma.CreditCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          deleteMany: {
            args: Prisma.CreditCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          upsert: {
            args: Prisma.CreditCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          aggregate: {
            args: Prisma.CreditCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditCard>
          }
          groupBy: {
            args: Prisma.CreditCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCardCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCardCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Installment: {
        payload: Prisma.$InstallmentPayload<ExtArgs>
        fields: Prisma.InstallmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstallmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstallmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload>
          }
          findFirst: {
            args: Prisma.InstallmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstallmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload>
          }
          findMany: {
            args: Prisma.InstallmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload>[]
          }
          create: {
            args: Prisma.InstallmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload>
          }
          createMany: {
            args: Prisma.InstallmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstallmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload>[]
          }
          delete: {
            args: Prisma.InstallmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload>
          }
          update: {
            args: Prisma.InstallmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload>
          }
          deleteMany: {
            args: Prisma.InstallmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstallmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstallmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload>[]
          }
          upsert: {
            args: Prisma.InstallmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallmentPayload>
          }
          aggregate: {
            args: Prisma.InstallmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstallment>
          }
          groupBy: {
            args: Prisma.InstallmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstallmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstallmentCountArgs<ExtArgs>
            result: $Utils.Optional<InstallmentCountAggregateOutputType> | number
          }
        }
      }
      CreditCardPurchase: {
        payload: Prisma.$CreditCardPurchasePayload<ExtArgs>
        fields: Prisma.CreditCardPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditCardPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditCardPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload>
          }
          findFirst: {
            args: Prisma.CreditCardPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditCardPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload>
          }
          findMany: {
            args: Prisma.CreditCardPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload>[]
          }
          create: {
            args: Prisma.CreditCardPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload>
          }
          createMany: {
            args: Prisma.CreditCardPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditCardPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload>[]
          }
          delete: {
            args: Prisma.CreditCardPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload>
          }
          update: {
            args: Prisma.CreditCardPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload>
          }
          deleteMany: {
            args: Prisma.CreditCardPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditCardPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditCardPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload>[]
          }
          upsert: {
            args: Prisma.CreditCardPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPurchasePayload>
          }
          aggregate: {
            args: Prisma.CreditCardPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditCardPurchase>
          }
          groupBy: {
            args: Prisma.CreditCardPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditCardPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCardPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCardPurchaseCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    category?: CategoryOmit
    income?: IncomeOmit
    expense?: ExpenseOmit
    creditCard?: CreditCardOmit
    invoice?: InvoiceOmit
    installment?: InstallmentOmit
    creditCardPurchase?: CreditCardPurchaseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    incomes: number
    expenses: number
    creditCards: number
    categories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomes?: boolean | UserCountOutputTypeCountIncomesArgs
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    creditCards?: boolean | UserCountOutputTypeCountCreditCardsArgs
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    expenses: number
    incomes: number
    creditCardPurchases: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | CategoryCountOutputTypeCountExpensesArgs
    incomes?: boolean | CategoryCountOutputTypeCountIncomesArgs
    creditCardPurchases?: boolean | CategoryCountOutputTypeCountCreditCardPurchasesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCreditCardPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardPurchaseWhereInput
  }


  /**
   * Count Type CreditCardCountOutputType
   */

  export type CreditCardCountOutputType = {
    invoices: number
  }

  export type CreditCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | CreditCardCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * CreditCardCountOutputType without action
   */
  export type CreditCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardCountOutputType
     */
    select?: CreditCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditCardCountOutputType without action
   */
  export type CreditCardCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    installments: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installments?: boolean | InvoiceCountOutputTypeCountInstallmentsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountInstallmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallmentWhereInput
  }


  /**
   * Count Type CreditCardPurchaseCountOutputType
   */

  export type CreditCardPurchaseCountOutputType = {
    installments: number
  }

  export type CreditCardPurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installments?: boolean | CreditCardPurchaseCountOutputTypeCountInstallmentsArgs
  }

  // Custom InputTypes
  /**
   * CreditCardPurchaseCountOutputType without action
   */
  export type CreditCardPurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchaseCountOutputType
     */
    select?: CreditCardPurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditCardPurchaseCountOutputType without action
   */
  export type CreditCardPurchaseCountOutputTypeCountInstallmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    incomes?: boolean | User$incomesArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    creditCards?: boolean | User$creditCardsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomes?: boolean | User$incomesArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    creditCards?: boolean | User$creditCardsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      incomes: Prisma.$IncomePayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      creditCards: Prisma.$CreditCardPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incomes<T extends User$incomesArgs<ExtArgs> = {}>(args?: Subset<T, User$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditCards<T extends User$creditCardsArgs<ExtArgs> = {}>(args?: Subset<T, User$creditCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.incomes
   */
  export type User$incomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    where?: IncomeWhereInput
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    cursor?: IncomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.creditCards
   */
  export type User$creditCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    where?: CreditCardWhereInput
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    cursor?: CreditCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    isExpense: boolean | null
    icon: string | null
    userId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isExpense: boolean | null
    icon: string | null
    userId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    isExpense: number
    icon: number
    userId: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    isExpense?: true
    icon?: true
    userId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    isExpense?: true
    icon?: true
    userId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    isExpense?: true
    icon?: true
    userId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    isExpense: boolean
    icon: string
    userId: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isExpense?: boolean
    icon?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    expenses?: boolean | Category$expensesArgs<ExtArgs>
    incomes?: boolean | Category$incomesArgs<ExtArgs>
    creditCardPurchases?: boolean | Category$creditCardPurchasesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isExpense?: boolean
    icon?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isExpense?: boolean
    icon?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    isExpense?: boolean
    icon?: boolean
    userId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isExpense" | "icon" | "userId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    expenses?: boolean | Category$expensesArgs<ExtArgs>
    incomes?: boolean | Category$incomesArgs<ExtArgs>
    creditCardPurchases?: boolean | Category$creditCardPurchasesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      incomes: Prisma.$IncomePayload<ExtArgs>[]
      creditCardPurchases: Prisma.$CreditCardPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isExpense: boolean
      icon: string
      userId: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expenses<T extends Category$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Category$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomes<T extends Category$incomesArgs<ExtArgs> = {}>(args?: Subset<T, Category$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditCardPurchases<T extends Category$creditCardPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, Category$creditCardPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly isExpense: FieldRef<"Category", 'Boolean'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly userId: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.expenses
   */
  export type Category$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Category.incomes
   */
  export type Category$incomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    where?: IncomeWhereInput
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    cursor?: IncomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Category.creditCardPurchases
   */
  export type Category$creditCardPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
    where?: CreditCardPurchaseWhereInput
    orderBy?: CreditCardPurchaseOrderByWithRelationInput | CreditCardPurchaseOrderByWithRelationInput[]
    cursor?: CreditCardPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditCardPurchaseScalarFieldEnum | CreditCardPurchaseScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Income
   */

  export type AggregateIncome = {
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  export type IncomeAvgAggregateOutputType = {
    value: number | null
  }

  export type IncomeSumAggregateOutputType = {
    value: number | null
  }

  export type IncomeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    value: number | null
    date: Date | null
    received: boolean | null
    userId: string | null
    categoryId: string | null
  }

  export type IncomeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    value: number | null
    date: Date | null
    received: boolean | null
    userId: string | null
    categoryId: string | null
  }

  export type IncomeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    value: number
    date: number
    received: number
    userId: number
    categoryId: number
    _all: number
  }


  export type IncomeAvgAggregateInputType = {
    value?: true
  }

  export type IncomeSumAggregateInputType = {
    value?: true
  }

  export type IncomeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    value?: true
    date?: true
    received?: true
    userId?: true
    categoryId?: true
  }

  export type IncomeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    value?: true
    date?: true
    received?: true
    userId?: true
    categoryId?: true
  }

  export type IncomeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    value?: true
    date?: true
    received?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type IncomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Income to aggregate.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incomes
    **/
    _count?: true | IncomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomeMaxAggregateInputType
  }

  export type GetIncomeAggregateType<T extends IncomeAggregateArgs> = {
        [P in keyof T & keyof AggregateIncome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncome[P]>
      : GetScalarType<T[P], AggregateIncome[P]>
  }




  export type IncomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeWhereInput
    orderBy?: IncomeOrderByWithAggregationInput | IncomeOrderByWithAggregationInput[]
    by: IncomeScalarFieldEnum[] | IncomeScalarFieldEnum
    having?: IncomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomeCountAggregateInputType | true
    _avg?: IncomeAvgAggregateInputType
    _sum?: IncomeSumAggregateInputType
    _min?: IncomeMinAggregateInputType
    _max?: IncomeMaxAggregateInputType
  }

  export type IncomeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    value: number
    date: Date
    received: boolean
    userId: string
    categoryId: string
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  type GetIncomeGroupByPayload<T extends IncomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomeGroupByOutputType[P]>
            : GetScalarType<T[P], IncomeGroupByOutputType[P]>
        }
      >
    >


  export type IncomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    date?: boolean
    received?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    date?: boolean
    received?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    date?: boolean
    received?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    date?: boolean
    received?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type IncomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "value" | "date" | "received" | "userId" | "categoryId", ExtArgs["result"]["income"]>
  export type IncomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type IncomeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type IncomeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $IncomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Income"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      value: number
      date: Date
      received: boolean
      userId: string
      categoryId: string
    }, ExtArgs["result"]["income"]>
    composites: {}
  }

  type IncomeGetPayload<S extends boolean | null | undefined | IncomeDefaultArgs> = $Result.GetResult<Prisma.$IncomePayload, S>

  type IncomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncomeCountAggregateInputType | true
    }

  export interface IncomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Income'], meta: { name: 'Income' } }
    /**
     * Find zero or one Income that matches the filter.
     * @param {IncomeFindUniqueArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncomeFindUniqueArgs>(args: SelectSubset<T, IncomeFindUniqueArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Income that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncomeFindUniqueOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncomeFindUniqueOrThrowArgs>(args: SelectSubset<T, IncomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindFirstArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncomeFindFirstArgs>(args?: SelectSubset<T, IncomeFindFirstArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindFirstOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncomeFindFirstOrThrowArgs>(args?: SelectSubset<T, IncomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incomes
     * const incomes = await prisma.income.findMany()
     * 
     * // Get first 10 Incomes
     * const incomes = await prisma.income.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incomeWithIdOnly = await prisma.income.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncomeFindManyArgs>(args?: SelectSubset<T, IncomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Income.
     * @param {IncomeCreateArgs} args - Arguments to create a Income.
     * @example
     * // Create one Income
     * const Income = await prisma.income.create({
     *   data: {
     *     // ... data to create a Income
     *   }
     * })
     * 
     */
    create<T extends IncomeCreateArgs>(args: SelectSubset<T, IncomeCreateArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incomes.
     * @param {IncomeCreateManyArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncomeCreateManyArgs>(args?: SelectSubset<T, IncomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incomes and returns the data saved in the database.
     * @param {IncomeCreateManyAndReturnArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incomes and only return the `id`
     * const incomeWithIdOnly = await prisma.income.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncomeCreateManyAndReturnArgs>(args?: SelectSubset<T, IncomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Income.
     * @param {IncomeDeleteArgs} args - Arguments to delete one Income.
     * @example
     * // Delete one Income
     * const Income = await prisma.income.delete({
     *   where: {
     *     // ... filter to delete one Income
     *   }
     * })
     * 
     */
    delete<T extends IncomeDeleteArgs>(args: SelectSubset<T, IncomeDeleteArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Income.
     * @param {IncomeUpdateArgs} args - Arguments to update one Income.
     * @example
     * // Update one Income
     * const income = await prisma.income.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncomeUpdateArgs>(args: SelectSubset<T, IncomeUpdateArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incomes.
     * @param {IncomeDeleteManyArgs} args - Arguments to filter Incomes to delete.
     * @example
     * // Delete a few Incomes
     * const { count } = await prisma.income.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncomeDeleteManyArgs>(args?: SelectSubset<T, IncomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incomes
     * const income = await prisma.income.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncomeUpdateManyArgs>(args: SelectSubset<T, IncomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes and returns the data updated in the database.
     * @param {IncomeUpdateManyAndReturnArgs} args - Arguments to update many Incomes.
     * @example
     * // Update many Incomes
     * const income = await prisma.income.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incomes and only return the `id`
     * const incomeWithIdOnly = await prisma.income.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends IncomeUpdateManyAndReturnArgs>(args: SelectSubset<T, IncomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Income.
     * @param {IncomeUpsertArgs} args - Arguments to update or create a Income.
     * @example
     * // Update or create a Income
     * const income = await prisma.income.upsert({
     *   create: {
     *     // ... data to create a Income
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Income we want to update
     *   }
     * })
     */
    upsert<T extends IncomeUpsertArgs>(args: SelectSubset<T, IncomeUpsertArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeCountArgs} args - Arguments to filter Incomes to count.
     * @example
     * // Count the number of Incomes
     * const count = await prisma.income.count({
     *   where: {
     *     // ... the filter for the Incomes we want to count
     *   }
     * })
    **/
    count<T extends IncomeCountArgs>(
      args?: Subset<T, IncomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncomeAggregateArgs>(args: Subset<T, IncomeAggregateArgs>): Prisma.PrismaPromise<GetIncomeAggregateType<T>>

    /**
     * Group by Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeGroupByArgs} args - Group by arguments.
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
      T extends IncomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncomeGroupByArgs['orderBy'] }
        : { orderBy?: IncomeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Income model
   */
  readonly fields: IncomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Income.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Income model
   */
  interface IncomeFieldRefs {
    readonly id: FieldRef<"Income", 'String'>
    readonly name: FieldRef<"Income", 'String'>
    readonly description: FieldRef<"Income", 'String'>
    readonly value: FieldRef<"Income", 'Float'>
    readonly date: FieldRef<"Income", 'DateTime'>
    readonly received: FieldRef<"Income", 'Boolean'>
    readonly userId: FieldRef<"Income", 'String'>
    readonly categoryId: FieldRef<"Income", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Income findUnique
   */
  export type IncomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income findUniqueOrThrow
   */
  export type IncomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income findFirst
   */
  export type IncomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income findFirstOrThrow
   */
  export type IncomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income findMany
   */
  export type IncomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Incomes to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income create
   */
  export type IncomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The data needed to create a Income.
     */
    data: XOR<IncomeCreateInput, IncomeUncheckedCreateInput>
  }

  /**
   * Income createMany
   */
  export type IncomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incomes.
     */
    data: IncomeCreateManyInput | IncomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Income createManyAndReturn
   */
  export type IncomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * The data used to create many Incomes.
     */
    data: IncomeCreateManyInput | IncomeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Income update
   */
  export type IncomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The data needed to update a Income.
     */
    data: XOR<IncomeUpdateInput, IncomeUncheckedUpdateInput>
    /**
     * Choose, which Income to update.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income updateMany
   */
  export type IncomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incomes.
     */
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyInput>
    /**
     * Filter which Incomes to update
     */
    where?: IncomeWhereInput
    /**
     * Limit how many Incomes to update.
     */
    limit?: number
  }

  /**
   * Income updateManyAndReturn
   */
  export type IncomeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * The data used to update Incomes.
     */
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyInput>
    /**
     * Filter which Incomes to update
     */
    where?: IncomeWhereInput
    /**
     * Limit how many Incomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Income upsert
   */
  export type IncomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The filter to search for the Income to update in case it exists.
     */
    where: IncomeWhereUniqueInput
    /**
     * In case the Income found by the `where` argument doesn't exist, create a new Income with this data.
     */
    create: XOR<IncomeCreateInput, IncomeUncheckedCreateInput>
    /**
     * In case the Income was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncomeUpdateInput, IncomeUncheckedUpdateInput>
  }

  /**
   * Income delete
   */
  export type IncomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter which Income to delete.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income deleteMany
   */
  export type IncomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incomes to delete
     */
    where?: IncomeWhereInput
    /**
     * Limit how many Incomes to delete.
     */
    limit?: number
  }

  /**
   * Income without action
   */
  export type IncomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    value: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    value: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    value: number | null
    date: Date | null
    paid: boolean | null
    userId: string | null
    categoryId: string | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    value: number | null
    date: Date | null
    paid: boolean | null
    userId: string | null
    categoryId: string | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    value: number
    date: number
    paid: number
    userId: number
    categoryId: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    value?: true
  }

  export type ExpenseSumAggregateInputType = {
    value?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    value?: true
    date?: true
    paid?: true
    userId?: true
    categoryId?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    value?: true
    date?: true
    paid?: true
    userId?: true
    categoryId?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    value?: true
    date?: true
    paid?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    name: string
    description: string | null
    value: number
    date: Date
    paid: boolean
    userId: string
    categoryId: string
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    date?: boolean
    paid?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    date?: boolean
    paid?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    date?: boolean
    paid?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    date?: boolean
    paid?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "value" | "date" | "paid" | "userId" | "categoryId", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      value: number
      date: Date
      paid: boolean
      userId: string
      categoryId: string
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
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
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly name: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly value: FieldRef<"Expense", 'Float'>
    readonly date: FieldRef<"Expense", 'DateTime'>
    readonly paid: FieldRef<"Expense", 'Boolean'>
    readonly userId: FieldRef<"Expense", 'String'>
    readonly categoryId: FieldRef<"Expense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model CreditCard
   */

  export type AggregateCreditCard = {
    _count: CreditCardCountAggregateOutputType | null
    _avg: CreditCardAvgAggregateOutputType | null
    _sum: CreditCardSumAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  export type CreditCardAvgAggregateOutputType = {
    limit: number | null
    closingDay: number | null
    dueDay: number | null
  }

  export type CreditCardSumAggregateOutputType = {
    limit: number | null
    closingDay: number | null
    dueDay: number | null
  }

  export type CreditCardMinAggregateOutputType = {
    id: string | null
    name: string | null
    limit: number | null
    closingDay: number | null
    dueDay: number | null
    userId: string | null
  }

  export type CreditCardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    limit: number | null
    closingDay: number | null
    dueDay: number | null
    userId: string | null
  }

  export type CreditCardCountAggregateOutputType = {
    id: number
    name: number
    limit: number
    closingDay: number
    dueDay: number
    userId: number
    _all: number
  }


  export type CreditCardAvgAggregateInputType = {
    limit?: true
    closingDay?: true
    dueDay?: true
  }

  export type CreditCardSumAggregateInputType = {
    limit?: true
    closingDay?: true
    dueDay?: true
  }

  export type CreditCardMinAggregateInputType = {
    id?: true
    name?: true
    limit?: true
    closingDay?: true
    dueDay?: true
    userId?: true
  }

  export type CreditCardMaxAggregateInputType = {
    id?: true
    name?: true
    limit?: true
    closingDay?: true
    dueDay?: true
    userId?: true
  }

  export type CreditCardCountAggregateInputType = {
    id?: true
    name?: true
    limit?: true
    closingDay?: true
    dueDay?: true
    userId?: true
    _all?: true
  }

  export type CreditCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCard to aggregate.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditCards
    **/
    _count?: true | CreditCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditCardMaxAggregateInputType
  }

  export type GetCreditCardAggregateType<T extends CreditCardAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditCard[P]>
      : GetScalarType<T[P], AggregateCreditCard[P]>
  }




  export type CreditCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardWhereInput
    orderBy?: CreditCardOrderByWithAggregationInput | CreditCardOrderByWithAggregationInput[]
    by: CreditCardScalarFieldEnum[] | CreditCardScalarFieldEnum
    having?: CreditCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCardCountAggregateInputType | true
    _avg?: CreditCardAvgAggregateInputType
    _sum?: CreditCardSumAggregateInputType
    _min?: CreditCardMinAggregateInputType
    _max?: CreditCardMaxAggregateInputType
  }

  export type CreditCardGroupByOutputType = {
    id: string
    name: string
    limit: number
    closingDay: number
    dueDay: number
    userId: string
    _count: CreditCardCountAggregateOutputType | null
    _avg: CreditCardAvgAggregateOutputType | null
    _sum: CreditCardSumAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  type GetCreditCardGroupByPayload<T extends CreditCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
            : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
        }
      >
    >


  export type CreditCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    limit?: boolean
    closingDay?: boolean
    dueDay?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoices?: boolean | CreditCard$invoicesArgs<ExtArgs>
    _count?: boolean | CreditCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    limit?: boolean
    closingDay?: boolean
    dueDay?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    limit?: boolean
    closingDay?: boolean
    dueDay?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectScalar = {
    id?: boolean
    name?: boolean
    limit?: boolean
    closingDay?: boolean
    dueDay?: boolean
    userId?: boolean
  }

  export type CreditCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "limit" | "closingDay" | "dueDay" | "userId", ExtArgs["result"]["creditCard"]>
  export type CreditCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoices?: boolean | CreditCard$invoicesArgs<ExtArgs>
    _count?: boolean | CreditCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreditCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditCard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      limit: number
      closingDay: number
      dueDay: number
      userId: string
    }, ExtArgs["result"]["creditCard"]>
    composites: {}
  }

  type CreditCardGetPayload<S extends boolean | null | undefined | CreditCardDefaultArgs> = $Result.GetResult<Prisma.$CreditCardPayload, S>

  type CreditCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditCardCountAggregateInputType | true
    }

  export interface CreditCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditCard'], meta: { name: 'CreditCard' } }
    /**
     * Find zero or one CreditCard that matches the filter.
     * @param {CreditCardFindUniqueArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditCardFindUniqueArgs>(args: SelectSubset<T, CreditCardFindUniqueArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditCardFindUniqueOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditCardFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditCardFindFirstArgs>(args?: SelectSubset<T, CreditCardFindFirstArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditCardFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditCards
     * const creditCards = await prisma.creditCard.findMany()
     * 
     * // Get first 10 CreditCards
     * const creditCards = await prisma.creditCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditCardFindManyArgs>(args?: SelectSubset<T, CreditCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditCard.
     * @param {CreditCardCreateArgs} args - Arguments to create a CreditCard.
     * @example
     * // Create one CreditCard
     * const CreditCard = await prisma.creditCard.create({
     *   data: {
     *     // ... data to create a CreditCard
     *   }
     * })
     * 
     */
    create<T extends CreditCardCreateArgs>(args: SelectSubset<T, CreditCardCreateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditCards.
     * @param {CreditCardCreateManyArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCardCreateManyArgs>(args?: SelectSubset<T, CreditCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditCards and returns the data saved in the database.
     * @param {CreditCardCreateManyAndReturnArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditCardCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditCard.
     * @param {CreditCardDeleteArgs} args - Arguments to delete one CreditCard.
     * @example
     * // Delete one CreditCard
     * const CreditCard = await prisma.creditCard.delete({
     *   where: {
     *     // ... filter to delete one CreditCard
     *   }
     * })
     * 
     */
    delete<T extends CreditCardDeleteArgs>(args: SelectSubset<T, CreditCardDeleteArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditCard.
     * @param {CreditCardUpdateArgs} args - Arguments to update one CreditCard.
     * @example
     * // Update one CreditCard
     * const creditCard = await prisma.creditCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditCardUpdateArgs>(args: SelectSubset<T, CreditCardUpdateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditCards.
     * @param {CreditCardDeleteManyArgs} args - Arguments to filter CreditCards to delete.
     * @example
     * // Delete a few CreditCards
     * const { count } = await prisma.creditCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditCardDeleteManyArgs>(args?: SelectSubset<T, CreditCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditCardUpdateManyArgs>(args: SelectSubset<T, CreditCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards and returns the data updated in the database.
     * @param {CreditCardUpdateManyAndReturnArgs} args - Arguments to update many CreditCards.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CreditCardUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditCard.
     * @param {CreditCardUpsertArgs} args - Arguments to update or create a CreditCard.
     * @example
     * // Update or create a CreditCard
     * const creditCard = await prisma.creditCard.upsert({
     *   create: {
     *     // ... data to create a CreditCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditCard we want to update
     *   }
     * })
     */
    upsert<T extends CreditCardUpsertArgs>(args: SelectSubset<T, CreditCardUpsertArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardCountArgs} args - Arguments to filter CreditCards to count.
     * @example
     * // Count the number of CreditCards
     * const count = await prisma.creditCard.count({
     *   where: {
     *     // ... the filter for the CreditCards we want to count
     *   }
     * })
    **/
    count<T extends CreditCardCountArgs>(
      args?: Subset<T, CreditCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditCardAggregateArgs>(args: Subset<T, CreditCardAggregateArgs>): Prisma.PrismaPromise<GetCreditCardAggregateType<T>>

    /**
     * Group by CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardGroupByArgs} args - Group by arguments.
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
      T extends CreditCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditCardGroupByArgs['orderBy'] }
        : { orderBy?: CreditCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditCard model
   */
  readonly fields: CreditCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoices<T extends CreditCard$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, CreditCard$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CreditCard model
   */
  interface CreditCardFieldRefs {
    readonly id: FieldRef<"CreditCard", 'String'>
    readonly name: FieldRef<"CreditCard", 'String'>
    readonly limit: FieldRef<"CreditCard", 'Float'>
    readonly closingDay: FieldRef<"CreditCard", 'Int'>
    readonly dueDay: FieldRef<"CreditCard", 'Int'>
    readonly userId: FieldRef<"CreditCard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CreditCard findUnique
   */
  export type CreditCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findUniqueOrThrow
   */
  export type CreditCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findFirst
   */
  export type CreditCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findFirstOrThrow
   */
  export type CreditCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findMany
   */
  export type CreditCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCards to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard create
   */
  export type CreditCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditCard.
     */
    data: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
  }

  /**
   * CreditCard createMany
   */
  export type CreditCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditCard createManyAndReturn
   */
  export type CreditCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditCard update
   */
  export type CreditCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditCard.
     */
    data: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
    /**
     * Choose, which CreditCard to update.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard updateMany
   */
  export type CreditCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to update.
     */
    limit?: number
  }

  /**
   * CreditCard updateManyAndReturn
   */
  export type CreditCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditCard upsert
   */
  export type CreditCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditCard to update in case it exists.
     */
    where: CreditCardWhereUniqueInput
    /**
     * In case the CreditCard found by the `where` argument doesn't exist, create a new CreditCard with this data.
     */
    create: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
    /**
     * In case the CreditCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
  }

  /**
   * CreditCard delete
   */
  export type CreditCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter which CreditCard to delete.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard deleteMany
   */
  export type CreditCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCards to delete
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to delete.
     */
    limit?: number
  }

  /**
   * CreditCard.invoices
   */
  export type CreditCard$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * CreditCard without action
   */
  export type CreditCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    dueDate: Date | null
    paid: boolean | null
    creditCardId: string | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    dueDate: Date | null
    paid: boolean | null
    creditCardId: string | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    dueDate: number
    paid: number
    creditCardId: number
    _all: number
  }


  export type InvoiceMinAggregateInputType = {
    id?: true
    dueDate?: true
    paid?: true
    creditCardId?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    dueDate?: true
    paid?: true
    creditCardId?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    dueDate?: true
    paid?: true
    creditCardId?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    dueDate: Date
    paid: boolean
    creditCardId: string
    _count: InvoiceCountAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dueDate?: boolean
    paid?: boolean
    creditCardId?: boolean
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
    installments?: boolean | Invoice$installmentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dueDate?: boolean
    paid?: boolean
    creditCardId?: boolean
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dueDate?: boolean
    paid?: boolean
    creditCardId?: boolean
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    dueDate?: boolean
    paid?: boolean
    creditCardId?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dueDate" | "paid" | "creditCardId", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
    installments?: boolean | Invoice$installmentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      creditCard: Prisma.$CreditCardPayload<ExtArgs>
      installments: Prisma.$InstallmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dueDate: Date
      paid: boolean
      creditCardId: string
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creditCard<T extends CreditCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditCardDefaultArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    installments<T extends Invoice$installmentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$installmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly paid: FieldRef<"Invoice", 'Boolean'>
    readonly creditCardId: FieldRef<"Invoice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.installments
   */
  export type Invoice$installmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    where?: InstallmentWhereInput
    orderBy?: InstallmentOrderByWithRelationInput | InstallmentOrderByWithRelationInput[]
    cursor?: InstallmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstallmentScalarFieldEnum | InstallmentScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Installment
   */

  export type AggregateInstallment = {
    _count: InstallmentCountAggregateOutputType | null
    _avg: InstallmentAvgAggregateOutputType | null
    _sum: InstallmentSumAggregateOutputType | null
    _min: InstallmentMinAggregateOutputType | null
    _max: InstallmentMaxAggregateOutputType | null
  }

  export type InstallmentAvgAggregateOutputType = {
    installmentValue: number | null
  }

  export type InstallmentSumAggregateOutputType = {
    installmentValue: number | null
  }

  export type InstallmentMinAggregateOutputType = {
    id: string | null
    installmentValue: number | null
    invoiceId: string | null
    creditCardPurchaseId: string | null
  }

  export type InstallmentMaxAggregateOutputType = {
    id: string | null
    installmentValue: number | null
    invoiceId: string | null
    creditCardPurchaseId: string | null
  }

  export type InstallmentCountAggregateOutputType = {
    id: number
    installmentValue: number
    invoiceId: number
    creditCardPurchaseId: number
    _all: number
  }


  export type InstallmentAvgAggregateInputType = {
    installmentValue?: true
  }

  export type InstallmentSumAggregateInputType = {
    installmentValue?: true
  }

  export type InstallmentMinAggregateInputType = {
    id?: true
    installmentValue?: true
    invoiceId?: true
    creditCardPurchaseId?: true
  }

  export type InstallmentMaxAggregateInputType = {
    id?: true
    installmentValue?: true
    invoiceId?: true
    creditCardPurchaseId?: true
  }

  export type InstallmentCountAggregateInputType = {
    id?: true
    installmentValue?: true
    invoiceId?: true
    creditCardPurchaseId?: true
    _all?: true
  }

  export type InstallmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Installment to aggregate.
     */
    where?: InstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installments to fetch.
     */
    orderBy?: InstallmentOrderByWithRelationInput | InstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Installments
    **/
    _count?: true | InstallmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstallmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstallmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstallmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstallmentMaxAggregateInputType
  }

  export type GetInstallmentAggregateType<T extends InstallmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInstallment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstallment[P]>
      : GetScalarType<T[P], AggregateInstallment[P]>
  }




  export type InstallmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallmentWhereInput
    orderBy?: InstallmentOrderByWithAggregationInput | InstallmentOrderByWithAggregationInput[]
    by: InstallmentScalarFieldEnum[] | InstallmentScalarFieldEnum
    having?: InstallmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstallmentCountAggregateInputType | true
    _avg?: InstallmentAvgAggregateInputType
    _sum?: InstallmentSumAggregateInputType
    _min?: InstallmentMinAggregateInputType
    _max?: InstallmentMaxAggregateInputType
  }

  export type InstallmentGroupByOutputType = {
    id: string
    installmentValue: number
    invoiceId: string
    creditCardPurchaseId: string
    _count: InstallmentCountAggregateOutputType | null
    _avg: InstallmentAvgAggregateOutputType | null
    _sum: InstallmentSumAggregateOutputType | null
    _min: InstallmentMinAggregateOutputType | null
    _max: InstallmentMaxAggregateOutputType | null
  }

  type GetInstallmentGroupByPayload<T extends InstallmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstallmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstallmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstallmentGroupByOutputType[P]>
            : GetScalarType<T[P], InstallmentGroupByOutputType[P]>
        }
      >
    >


  export type InstallmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installmentValue?: boolean
    invoiceId?: boolean
    creditCardPurchaseId?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    creditCardPurchase?: boolean | CreditCardPurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installment"]>

  export type InstallmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installmentValue?: boolean
    invoiceId?: boolean
    creditCardPurchaseId?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    creditCardPurchase?: boolean | CreditCardPurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installment"]>

  export type InstallmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installmentValue?: boolean
    invoiceId?: boolean
    creditCardPurchaseId?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    creditCardPurchase?: boolean | CreditCardPurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installment"]>

  export type InstallmentSelectScalar = {
    id?: boolean
    installmentValue?: boolean
    invoiceId?: boolean
    creditCardPurchaseId?: boolean
  }

  export type InstallmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "installmentValue" | "invoiceId" | "creditCardPurchaseId", ExtArgs["result"]["installment"]>
  export type InstallmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    creditCardPurchase?: boolean | CreditCardPurchaseDefaultArgs<ExtArgs>
  }
  export type InstallmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    creditCardPurchase?: boolean | CreditCardPurchaseDefaultArgs<ExtArgs>
  }
  export type InstallmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    creditCardPurchase?: boolean | CreditCardPurchaseDefaultArgs<ExtArgs>
  }

  export type $InstallmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Installment"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
      creditCardPurchase: Prisma.$CreditCardPurchasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      installmentValue: number
      invoiceId: string
      creditCardPurchaseId: string
    }, ExtArgs["result"]["installment"]>
    composites: {}
  }

  type InstallmentGetPayload<S extends boolean | null | undefined | InstallmentDefaultArgs> = $Result.GetResult<Prisma.$InstallmentPayload, S>

  type InstallmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstallmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstallmentCountAggregateInputType | true
    }

  export interface InstallmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Installment'], meta: { name: 'Installment' } }
    /**
     * Find zero or one Installment that matches the filter.
     * @param {InstallmentFindUniqueArgs} args - Arguments to find a Installment
     * @example
     * // Get one Installment
     * const installment = await prisma.installment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstallmentFindUniqueArgs>(args: SelectSubset<T, InstallmentFindUniqueArgs<ExtArgs>>): Prisma__InstallmentClient<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Installment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstallmentFindUniqueOrThrowArgs} args - Arguments to find a Installment
     * @example
     * // Get one Installment
     * const installment = await prisma.installment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstallmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InstallmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstallmentClient<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Installment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallmentFindFirstArgs} args - Arguments to find a Installment
     * @example
     * // Get one Installment
     * const installment = await prisma.installment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstallmentFindFirstArgs>(args?: SelectSubset<T, InstallmentFindFirstArgs<ExtArgs>>): Prisma__InstallmentClient<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Installment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallmentFindFirstOrThrowArgs} args - Arguments to find a Installment
     * @example
     * // Get one Installment
     * const installment = await prisma.installment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstallmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InstallmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstallmentClient<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Installments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Installments
     * const installments = await prisma.installment.findMany()
     * 
     * // Get first 10 Installments
     * const installments = await prisma.installment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const installmentWithIdOnly = await prisma.installment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstallmentFindManyArgs>(args?: SelectSubset<T, InstallmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Installment.
     * @param {InstallmentCreateArgs} args - Arguments to create a Installment.
     * @example
     * // Create one Installment
     * const Installment = await prisma.installment.create({
     *   data: {
     *     // ... data to create a Installment
     *   }
     * })
     * 
     */
    create<T extends InstallmentCreateArgs>(args: SelectSubset<T, InstallmentCreateArgs<ExtArgs>>): Prisma__InstallmentClient<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Installments.
     * @param {InstallmentCreateManyArgs} args - Arguments to create many Installments.
     * @example
     * // Create many Installments
     * const installment = await prisma.installment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstallmentCreateManyArgs>(args?: SelectSubset<T, InstallmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Installments and returns the data saved in the database.
     * @param {InstallmentCreateManyAndReturnArgs} args - Arguments to create many Installments.
     * @example
     * // Create many Installments
     * const installment = await prisma.installment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Installments and only return the `id`
     * const installmentWithIdOnly = await prisma.installment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstallmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InstallmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Installment.
     * @param {InstallmentDeleteArgs} args - Arguments to delete one Installment.
     * @example
     * // Delete one Installment
     * const Installment = await prisma.installment.delete({
     *   where: {
     *     // ... filter to delete one Installment
     *   }
     * })
     * 
     */
    delete<T extends InstallmentDeleteArgs>(args: SelectSubset<T, InstallmentDeleteArgs<ExtArgs>>): Prisma__InstallmentClient<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Installment.
     * @param {InstallmentUpdateArgs} args - Arguments to update one Installment.
     * @example
     * // Update one Installment
     * const installment = await prisma.installment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstallmentUpdateArgs>(args: SelectSubset<T, InstallmentUpdateArgs<ExtArgs>>): Prisma__InstallmentClient<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Installments.
     * @param {InstallmentDeleteManyArgs} args - Arguments to filter Installments to delete.
     * @example
     * // Delete a few Installments
     * const { count } = await prisma.installment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstallmentDeleteManyArgs>(args?: SelectSubset<T, InstallmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Installments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Installments
     * const installment = await prisma.installment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstallmentUpdateManyArgs>(args: SelectSubset<T, InstallmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Installments and returns the data updated in the database.
     * @param {InstallmentUpdateManyAndReturnArgs} args - Arguments to update many Installments.
     * @example
     * // Update many Installments
     * const installment = await prisma.installment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Installments and only return the `id`
     * const installmentWithIdOnly = await prisma.installment.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends InstallmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InstallmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Installment.
     * @param {InstallmentUpsertArgs} args - Arguments to update or create a Installment.
     * @example
     * // Update or create a Installment
     * const installment = await prisma.installment.upsert({
     *   create: {
     *     // ... data to create a Installment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Installment we want to update
     *   }
     * })
     */
    upsert<T extends InstallmentUpsertArgs>(args: SelectSubset<T, InstallmentUpsertArgs<ExtArgs>>): Prisma__InstallmentClient<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Installments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallmentCountArgs} args - Arguments to filter Installments to count.
     * @example
     * // Count the number of Installments
     * const count = await prisma.installment.count({
     *   where: {
     *     // ... the filter for the Installments we want to count
     *   }
     * })
    **/
    count<T extends InstallmentCountArgs>(
      args?: Subset<T, InstallmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Installment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstallmentAggregateArgs>(args: Subset<T, InstallmentAggregateArgs>): Prisma.PrismaPromise<GetInstallmentAggregateType<T>>

    /**
     * Group by Installment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallmentGroupByArgs} args - Group by arguments.
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
      T extends InstallmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstallmentGroupByArgs['orderBy'] }
        : { orderBy?: InstallmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstallmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Installment model
   */
  readonly fields: InstallmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Installment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstallmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creditCardPurchase<T extends CreditCardPurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditCardPurchaseDefaultArgs<ExtArgs>>): Prisma__CreditCardPurchaseClient<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Installment model
   */
  interface InstallmentFieldRefs {
    readonly id: FieldRef<"Installment", 'String'>
    readonly installmentValue: FieldRef<"Installment", 'Float'>
    readonly invoiceId: FieldRef<"Installment", 'String'>
    readonly creditCardPurchaseId: FieldRef<"Installment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Installment findUnique
   */
  export type InstallmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    /**
     * Filter, which Installment to fetch.
     */
    where: InstallmentWhereUniqueInput
  }

  /**
   * Installment findUniqueOrThrow
   */
  export type InstallmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    /**
     * Filter, which Installment to fetch.
     */
    where: InstallmentWhereUniqueInput
  }

  /**
   * Installment findFirst
   */
  export type InstallmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    /**
     * Filter, which Installment to fetch.
     */
    where?: InstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installments to fetch.
     */
    orderBy?: InstallmentOrderByWithRelationInput | InstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installments.
     */
    cursor?: InstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installments.
     */
    distinct?: InstallmentScalarFieldEnum | InstallmentScalarFieldEnum[]
  }

  /**
   * Installment findFirstOrThrow
   */
  export type InstallmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    /**
     * Filter, which Installment to fetch.
     */
    where?: InstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installments to fetch.
     */
    orderBy?: InstallmentOrderByWithRelationInput | InstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installments.
     */
    cursor?: InstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installments.
     */
    distinct?: InstallmentScalarFieldEnum | InstallmentScalarFieldEnum[]
  }

  /**
   * Installment findMany
   */
  export type InstallmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    /**
     * Filter, which Installments to fetch.
     */
    where?: InstallmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installments to fetch.
     */
    orderBy?: InstallmentOrderByWithRelationInput | InstallmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Installments.
     */
    cursor?: InstallmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installments.
     */
    skip?: number
    distinct?: InstallmentScalarFieldEnum | InstallmentScalarFieldEnum[]
  }

  /**
   * Installment create
   */
  export type InstallmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Installment.
     */
    data: XOR<InstallmentCreateInput, InstallmentUncheckedCreateInput>
  }

  /**
   * Installment createMany
   */
  export type InstallmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Installments.
     */
    data: InstallmentCreateManyInput | InstallmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Installment createManyAndReturn
   */
  export type InstallmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * The data used to create many Installments.
     */
    data: InstallmentCreateManyInput | InstallmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Installment update
   */
  export type InstallmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Installment.
     */
    data: XOR<InstallmentUpdateInput, InstallmentUncheckedUpdateInput>
    /**
     * Choose, which Installment to update.
     */
    where: InstallmentWhereUniqueInput
  }

  /**
   * Installment updateMany
   */
  export type InstallmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Installments.
     */
    data: XOR<InstallmentUpdateManyMutationInput, InstallmentUncheckedUpdateManyInput>
    /**
     * Filter which Installments to update
     */
    where?: InstallmentWhereInput
    /**
     * Limit how many Installments to update.
     */
    limit?: number
  }

  /**
   * Installment updateManyAndReturn
   */
  export type InstallmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * The data used to update Installments.
     */
    data: XOR<InstallmentUpdateManyMutationInput, InstallmentUncheckedUpdateManyInput>
    /**
     * Filter which Installments to update
     */
    where?: InstallmentWhereInput
    /**
     * Limit how many Installments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Installment upsert
   */
  export type InstallmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Installment to update in case it exists.
     */
    where: InstallmentWhereUniqueInput
    /**
     * In case the Installment found by the `where` argument doesn't exist, create a new Installment with this data.
     */
    create: XOR<InstallmentCreateInput, InstallmentUncheckedCreateInput>
    /**
     * In case the Installment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstallmentUpdateInput, InstallmentUncheckedUpdateInput>
  }

  /**
   * Installment delete
   */
  export type InstallmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    /**
     * Filter which Installment to delete.
     */
    where: InstallmentWhereUniqueInput
  }

  /**
   * Installment deleteMany
   */
  export type InstallmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Installments to delete
     */
    where?: InstallmentWhereInput
    /**
     * Limit how many Installments to delete.
     */
    limit?: number
  }

  /**
   * Installment without action
   */
  export type InstallmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
  }


  /**
   * Model CreditCardPurchase
   */

  export type AggregateCreditCardPurchase = {
    _count: CreditCardPurchaseCountAggregateOutputType | null
    _avg: CreditCardPurchaseAvgAggregateOutputType | null
    _sum: CreditCardPurchaseSumAggregateOutputType | null
    _min: CreditCardPurchaseMinAggregateOutputType | null
    _max: CreditCardPurchaseMaxAggregateOutputType | null
  }

  export type CreditCardPurchaseAvgAggregateOutputType = {
    value: number | null
    installmentsNumber: number | null
  }

  export type CreditCardPurchaseSumAggregateOutputType = {
    value: number | null
    installmentsNumber: number | null
  }

  export type CreditCardPurchaseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    value: number | null
    purchaseDate: Date | null
    installmentsNumber: number | null
    categoryId: string | null
  }

  export type CreditCardPurchaseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    value: number | null
    purchaseDate: Date | null
    installmentsNumber: number | null
    categoryId: string | null
  }

  export type CreditCardPurchaseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    value: number
    purchaseDate: number
    installmentsNumber: number
    categoryId: number
    _all: number
  }


  export type CreditCardPurchaseAvgAggregateInputType = {
    value?: true
    installmentsNumber?: true
  }

  export type CreditCardPurchaseSumAggregateInputType = {
    value?: true
    installmentsNumber?: true
  }

  export type CreditCardPurchaseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    value?: true
    purchaseDate?: true
    installmentsNumber?: true
    categoryId?: true
  }

  export type CreditCardPurchaseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    value?: true
    purchaseDate?: true
    installmentsNumber?: true
    categoryId?: true
  }

  export type CreditCardPurchaseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    value?: true
    purchaseDate?: true
    installmentsNumber?: true
    categoryId?: true
    _all?: true
  }

  export type CreditCardPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCardPurchase to aggregate.
     */
    where?: CreditCardPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCardPurchases to fetch.
     */
    orderBy?: CreditCardPurchaseOrderByWithRelationInput | CreditCardPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditCardPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCardPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCardPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditCardPurchases
    **/
    _count?: true | CreditCardPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditCardPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditCardPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditCardPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditCardPurchaseMaxAggregateInputType
  }

  export type GetCreditCardPurchaseAggregateType<T extends CreditCardPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditCardPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditCardPurchase[P]>
      : GetScalarType<T[P], AggregateCreditCardPurchase[P]>
  }




  export type CreditCardPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardPurchaseWhereInput
    orderBy?: CreditCardPurchaseOrderByWithAggregationInput | CreditCardPurchaseOrderByWithAggregationInput[]
    by: CreditCardPurchaseScalarFieldEnum[] | CreditCardPurchaseScalarFieldEnum
    having?: CreditCardPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCardPurchaseCountAggregateInputType | true
    _avg?: CreditCardPurchaseAvgAggregateInputType
    _sum?: CreditCardPurchaseSumAggregateInputType
    _min?: CreditCardPurchaseMinAggregateInputType
    _max?: CreditCardPurchaseMaxAggregateInputType
  }

  export type CreditCardPurchaseGroupByOutputType = {
    id: string
    name: string
    description: string | null
    value: number
    purchaseDate: Date
    installmentsNumber: number
    categoryId: string
    _count: CreditCardPurchaseCountAggregateOutputType | null
    _avg: CreditCardPurchaseAvgAggregateOutputType | null
    _sum: CreditCardPurchaseSumAggregateOutputType | null
    _min: CreditCardPurchaseMinAggregateOutputType | null
    _max: CreditCardPurchaseMaxAggregateOutputType | null
  }

  type GetCreditCardPurchaseGroupByPayload<T extends CreditCardPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditCardPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditCardPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditCardPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], CreditCardPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type CreditCardPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    purchaseDate?: boolean
    installmentsNumber?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    installments?: boolean | CreditCardPurchase$installmentsArgs<ExtArgs>
    _count?: boolean | CreditCardPurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCardPurchase"]>

  export type CreditCardPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    purchaseDate?: boolean
    installmentsNumber?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCardPurchase"]>

  export type CreditCardPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    purchaseDate?: boolean
    installmentsNumber?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCardPurchase"]>

  export type CreditCardPurchaseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    value?: boolean
    purchaseDate?: boolean
    installmentsNumber?: boolean
    categoryId?: boolean
  }

  export type CreditCardPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "value" | "purchaseDate" | "installmentsNumber" | "categoryId", ExtArgs["result"]["creditCardPurchase"]>
  export type CreditCardPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    installments?: boolean | CreditCardPurchase$installmentsArgs<ExtArgs>
    _count?: boolean | CreditCardPurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreditCardPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type CreditCardPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CreditCardPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditCardPurchase"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      installments: Prisma.$InstallmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      value: number
      purchaseDate: Date
      installmentsNumber: number
      categoryId: string
    }, ExtArgs["result"]["creditCardPurchase"]>
    composites: {}
  }

  type CreditCardPurchaseGetPayload<S extends boolean | null | undefined | CreditCardPurchaseDefaultArgs> = $Result.GetResult<Prisma.$CreditCardPurchasePayload, S>

  type CreditCardPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditCardPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditCardPurchaseCountAggregateInputType | true
    }

  export interface CreditCardPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditCardPurchase'], meta: { name: 'CreditCardPurchase' } }
    /**
     * Find zero or one CreditCardPurchase that matches the filter.
     * @param {CreditCardPurchaseFindUniqueArgs} args - Arguments to find a CreditCardPurchase
     * @example
     * // Get one CreditCardPurchase
     * const creditCardPurchase = await prisma.creditCardPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditCardPurchaseFindUniqueArgs>(args: SelectSubset<T, CreditCardPurchaseFindUniqueArgs<ExtArgs>>): Prisma__CreditCardPurchaseClient<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditCardPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditCardPurchaseFindUniqueOrThrowArgs} args - Arguments to find a CreditCardPurchase
     * @example
     * // Get one CreditCardPurchase
     * const creditCardPurchase = await prisma.creditCardPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditCardPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditCardPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditCardPurchaseClient<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCardPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardPurchaseFindFirstArgs} args - Arguments to find a CreditCardPurchase
     * @example
     * // Get one CreditCardPurchase
     * const creditCardPurchase = await prisma.creditCardPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditCardPurchaseFindFirstArgs>(args?: SelectSubset<T, CreditCardPurchaseFindFirstArgs<ExtArgs>>): Prisma__CreditCardPurchaseClient<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCardPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardPurchaseFindFirstOrThrowArgs} args - Arguments to find a CreditCardPurchase
     * @example
     * // Get one CreditCardPurchase
     * const creditCardPurchase = await prisma.creditCardPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditCardPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditCardPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditCardPurchaseClient<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditCardPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditCardPurchases
     * const creditCardPurchases = await prisma.creditCardPurchase.findMany()
     * 
     * // Get first 10 CreditCardPurchases
     * const creditCardPurchases = await prisma.creditCardPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditCardPurchaseWithIdOnly = await prisma.creditCardPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditCardPurchaseFindManyArgs>(args?: SelectSubset<T, CreditCardPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditCardPurchase.
     * @param {CreditCardPurchaseCreateArgs} args - Arguments to create a CreditCardPurchase.
     * @example
     * // Create one CreditCardPurchase
     * const CreditCardPurchase = await prisma.creditCardPurchase.create({
     *   data: {
     *     // ... data to create a CreditCardPurchase
     *   }
     * })
     * 
     */
    create<T extends CreditCardPurchaseCreateArgs>(args: SelectSubset<T, CreditCardPurchaseCreateArgs<ExtArgs>>): Prisma__CreditCardPurchaseClient<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditCardPurchases.
     * @param {CreditCardPurchaseCreateManyArgs} args - Arguments to create many CreditCardPurchases.
     * @example
     * // Create many CreditCardPurchases
     * const creditCardPurchase = await prisma.creditCardPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCardPurchaseCreateManyArgs>(args?: SelectSubset<T, CreditCardPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditCardPurchases and returns the data saved in the database.
     * @param {CreditCardPurchaseCreateManyAndReturnArgs} args - Arguments to create many CreditCardPurchases.
     * @example
     * // Create many CreditCardPurchases
     * const creditCardPurchase = await prisma.creditCardPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditCardPurchases and only return the `id`
     * const creditCardPurchaseWithIdOnly = await prisma.creditCardPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditCardPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditCardPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditCardPurchase.
     * @param {CreditCardPurchaseDeleteArgs} args - Arguments to delete one CreditCardPurchase.
     * @example
     * // Delete one CreditCardPurchase
     * const CreditCardPurchase = await prisma.creditCardPurchase.delete({
     *   where: {
     *     // ... filter to delete one CreditCardPurchase
     *   }
     * })
     * 
     */
    delete<T extends CreditCardPurchaseDeleteArgs>(args: SelectSubset<T, CreditCardPurchaseDeleteArgs<ExtArgs>>): Prisma__CreditCardPurchaseClient<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditCardPurchase.
     * @param {CreditCardPurchaseUpdateArgs} args - Arguments to update one CreditCardPurchase.
     * @example
     * // Update one CreditCardPurchase
     * const creditCardPurchase = await prisma.creditCardPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditCardPurchaseUpdateArgs>(args: SelectSubset<T, CreditCardPurchaseUpdateArgs<ExtArgs>>): Prisma__CreditCardPurchaseClient<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditCardPurchases.
     * @param {CreditCardPurchaseDeleteManyArgs} args - Arguments to filter CreditCardPurchases to delete.
     * @example
     * // Delete a few CreditCardPurchases
     * const { count } = await prisma.creditCardPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditCardPurchaseDeleteManyArgs>(args?: SelectSubset<T, CreditCardPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCardPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditCardPurchases
     * const creditCardPurchase = await prisma.creditCardPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditCardPurchaseUpdateManyArgs>(args: SelectSubset<T, CreditCardPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCardPurchases and returns the data updated in the database.
     * @param {CreditCardPurchaseUpdateManyAndReturnArgs} args - Arguments to update many CreditCardPurchases.
     * @example
     * // Update many CreditCardPurchases
     * const creditCardPurchase = await prisma.creditCardPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditCardPurchases and only return the `id`
     * const creditCardPurchaseWithIdOnly = await prisma.creditCardPurchase.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CreditCardPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditCardPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditCardPurchase.
     * @param {CreditCardPurchaseUpsertArgs} args - Arguments to update or create a CreditCardPurchase.
     * @example
     * // Update or create a CreditCardPurchase
     * const creditCardPurchase = await prisma.creditCardPurchase.upsert({
     *   create: {
     *     // ... data to create a CreditCardPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditCardPurchase we want to update
     *   }
     * })
     */
    upsert<T extends CreditCardPurchaseUpsertArgs>(args: SelectSubset<T, CreditCardPurchaseUpsertArgs<ExtArgs>>): Prisma__CreditCardPurchaseClient<$Result.GetResult<Prisma.$CreditCardPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditCardPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardPurchaseCountArgs} args - Arguments to filter CreditCardPurchases to count.
     * @example
     * // Count the number of CreditCardPurchases
     * const count = await prisma.creditCardPurchase.count({
     *   where: {
     *     // ... the filter for the CreditCardPurchases we want to count
     *   }
     * })
    **/
    count<T extends CreditCardPurchaseCountArgs>(
      args?: Subset<T, CreditCardPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCardPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditCardPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditCardPurchaseAggregateArgs>(args: Subset<T, CreditCardPurchaseAggregateArgs>): Prisma.PrismaPromise<GetCreditCardPurchaseAggregateType<T>>

    /**
     * Group by CreditCardPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardPurchaseGroupByArgs} args - Group by arguments.
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
      T extends CreditCardPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditCardPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: CreditCardPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditCardPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditCardPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditCardPurchase model
   */
  readonly fields: CreditCardPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditCardPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditCardPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    installments<T extends CreditCardPurchase$installmentsArgs<ExtArgs> = {}>(args?: Subset<T, CreditCardPurchase$installmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CreditCardPurchase model
   */
  interface CreditCardPurchaseFieldRefs {
    readonly id: FieldRef<"CreditCardPurchase", 'String'>
    readonly name: FieldRef<"CreditCardPurchase", 'String'>
    readonly description: FieldRef<"CreditCardPurchase", 'String'>
    readonly value: FieldRef<"CreditCardPurchase", 'Float'>
    readonly purchaseDate: FieldRef<"CreditCardPurchase", 'DateTime'>
    readonly installmentsNumber: FieldRef<"CreditCardPurchase", 'Int'>
    readonly categoryId: FieldRef<"CreditCardPurchase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CreditCardPurchase findUnique
   */
  export type CreditCardPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CreditCardPurchase to fetch.
     */
    where: CreditCardPurchaseWhereUniqueInput
  }

  /**
   * CreditCardPurchase findUniqueOrThrow
   */
  export type CreditCardPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CreditCardPurchase to fetch.
     */
    where: CreditCardPurchaseWhereUniqueInput
  }

  /**
   * CreditCardPurchase findFirst
   */
  export type CreditCardPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CreditCardPurchase to fetch.
     */
    where?: CreditCardPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCardPurchases to fetch.
     */
    orderBy?: CreditCardPurchaseOrderByWithRelationInput | CreditCardPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCardPurchases.
     */
    cursor?: CreditCardPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCardPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCardPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCardPurchases.
     */
    distinct?: CreditCardPurchaseScalarFieldEnum | CreditCardPurchaseScalarFieldEnum[]
  }

  /**
   * CreditCardPurchase findFirstOrThrow
   */
  export type CreditCardPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CreditCardPurchase to fetch.
     */
    where?: CreditCardPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCardPurchases to fetch.
     */
    orderBy?: CreditCardPurchaseOrderByWithRelationInput | CreditCardPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCardPurchases.
     */
    cursor?: CreditCardPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCardPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCardPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCardPurchases.
     */
    distinct?: CreditCardPurchaseScalarFieldEnum | CreditCardPurchaseScalarFieldEnum[]
  }

  /**
   * CreditCardPurchase findMany
   */
  export type CreditCardPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CreditCardPurchases to fetch.
     */
    where?: CreditCardPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCardPurchases to fetch.
     */
    orderBy?: CreditCardPurchaseOrderByWithRelationInput | CreditCardPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditCardPurchases.
     */
    cursor?: CreditCardPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCardPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCardPurchases.
     */
    skip?: number
    distinct?: CreditCardPurchaseScalarFieldEnum | CreditCardPurchaseScalarFieldEnum[]
  }

  /**
   * CreditCardPurchase create
   */
  export type CreditCardPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditCardPurchase.
     */
    data: XOR<CreditCardPurchaseCreateInput, CreditCardPurchaseUncheckedCreateInput>
  }

  /**
   * CreditCardPurchase createMany
   */
  export type CreditCardPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditCardPurchases.
     */
    data: CreditCardPurchaseCreateManyInput | CreditCardPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditCardPurchase createManyAndReturn
   */
  export type CreditCardPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many CreditCardPurchases.
     */
    data: CreditCardPurchaseCreateManyInput | CreditCardPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditCardPurchase update
   */
  export type CreditCardPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditCardPurchase.
     */
    data: XOR<CreditCardPurchaseUpdateInput, CreditCardPurchaseUncheckedUpdateInput>
    /**
     * Choose, which CreditCardPurchase to update.
     */
    where: CreditCardPurchaseWhereUniqueInput
  }

  /**
   * CreditCardPurchase updateMany
   */
  export type CreditCardPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditCardPurchases.
     */
    data: XOR<CreditCardPurchaseUpdateManyMutationInput, CreditCardPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which CreditCardPurchases to update
     */
    where?: CreditCardPurchaseWhereInput
    /**
     * Limit how many CreditCardPurchases to update.
     */
    limit?: number
  }

  /**
   * CreditCardPurchase updateManyAndReturn
   */
  export type CreditCardPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update CreditCardPurchases.
     */
    data: XOR<CreditCardPurchaseUpdateManyMutationInput, CreditCardPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which CreditCardPurchases to update
     */
    where?: CreditCardPurchaseWhereInput
    /**
     * Limit how many CreditCardPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditCardPurchase upsert
   */
  export type CreditCardPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditCardPurchase to update in case it exists.
     */
    where: CreditCardPurchaseWhereUniqueInput
    /**
     * In case the CreditCardPurchase found by the `where` argument doesn't exist, create a new CreditCardPurchase with this data.
     */
    create: XOR<CreditCardPurchaseCreateInput, CreditCardPurchaseUncheckedCreateInput>
    /**
     * In case the CreditCardPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditCardPurchaseUpdateInput, CreditCardPurchaseUncheckedUpdateInput>
  }

  /**
   * CreditCardPurchase delete
   */
  export type CreditCardPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
    /**
     * Filter which CreditCardPurchase to delete.
     */
    where: CreditCardPurchaseWhereUniqueInput
  }

  /**
   * CreditCardPurchase deleteMany
   */
  export type CreditCardPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCardPurchases to delete
     */
    where?: CreditCardPurchaseWhereInput
    /**
     * Limit how many CreditCardPurchases to delete.
     */
    limit?: number
  }

  /**
   * CreditCardPurchase.installments
   */
  export type CreditCardPurchase$installmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installment
     */
    select?: InstallmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installment
     */
    omit?: InstallmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallmentInclude<ExtArgs> | null
    where?: InstallmentWhereInput
    orderBy?: InstallmentOrderByWithRelationInput | InstallmentOrderByWithRelationInput[]
    cursor?: InstallmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstallmentScalarFieldEnum | InstallmentScalarFieldEnum[]
  }

  /**
   * CreditCardPurchase without action
   */
  export type CreditCardPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardPurchase
     */
    select?: CreditCardPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCardPurchase
     */
    omit?: CreditCardPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardPurchaseInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isExpense: 'isExpense',
    icon: 'icon',
    userId: 'userId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const IncomeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    value: 'value',
    date: 'date',
    received: 'received',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type IncomeScalarFieldEnum = (typeof IncomeScalarFieldEnum)[keyof typeof IncomeScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    value: 'value',
    date: 'date',
    paid: 'paid',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const CreditCardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    limit: 'limit',
    closingDay: 'closingDay',
    dueDay: 'dueDay',
    userId: 'userId'
  };

  export type CreditCardScalarFieldEnum = (typeof CreditCardScalarFieldEnum)[keyof typeof CreditCardScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    dueDate: 'dueDate',
    paid: 'paid',
    creditCardId: 'creditCardId'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InstallmentScalarFieldEnum: {
    id: 'id',
    installmentValue: 'installmentValue',
    invoiceId: 'invoiceId',
    creditCardPurchaseId: 'creditCardPurchaseId'
  };

  export type InstallmentScalarFieldEnum = (typeof InstallmentScalarFieldEnum)[keyof typeof InstallmentScalarFieldEnum]


  export const CreditCardPurchaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    value: 'value',
    purchaseDate: 'purchaseDate',
    installmentsNumber: 'installmentsNumber',
    categoryId: 'categoryId'
  };

  export type CreditCardPurchaseScalarFieldEnum = (typeof CreditCardPurchaseScalarFieldEnum)[keyof typeof CreditCardPurchaseScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    incomes?: IncomeListRelationFilter
    expenses?: ExpenseListRelationFilter
    creditCards?: CreditCardListRelationFilter
    categories?: CategoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    incomes?: IncomeOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    creditCards?: CreditCardOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    incomes?: IncomeListRelationFilter
    expenses?: ExpenseListRelationFilter
    creditCards?: CreditCardListRelationFilter
    categories?: CategoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    isExpense?: BoolFilter<"Category"> | boolean
    icon?: StringFilter<"Category"> | string
    userId?: StringFilter<"Category"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    expenses?: ExpenseListRelationFilter
    incomes?: IncomeListRelationFilter
    creditCardPurchases?: CreditCardPurchaseListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isExpense?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    expenses?: ExpenseOrderByRelationAggregateInput
    incomes?: IncomeOrderByRelationAggregateInput
    creditCardPurchases?: CreditCardPurchaseOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    isExpense?: BoolFilter<"Category"> | boolean
    icon?: StringFilter<"Category"> | string
    userId?: StringFilter<"Category"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    expenses?: ExpenseListRelationFilter
    incomes?: IncomeListRelationFilter
    creditCardPurchases?: CreditCardPurchaseListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isExpense?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    isExpense?: BoolWithAggregatesFilter<"Category"> | boolean
    icon?: StringWithAggregatesFilter<"Category"> | string
    userId?: StringWithAggregatesFilter<"Category"> | string
  }

  export type IncomeWhereInput = {
    AND?: IncomeWhereInput | IncomeWhereInput[]
    OR?: IncomeWhereInput[]
    NOT?: IncomeWhereInput | IncomeWhereInput[]
    id?: StringFilter<"Income"> | string
    name?: StringFilter<"Income"> | string
    description?: StringNullableFilter<"Income"> | string | null
    value?: FloatFilter<"Income"> | number
    date?: DateTimeFilter<"Income"> | Date | string
    received?: BoolFilter<"Income"> | boolean
    userId?: StringFilter<"Income"> | string
    categoryId?: StringFilter<"Income"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type IncomeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrder
    date?: SortOrder
    received?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type IncomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncomeWhereInput | IncomeWhereInput[]
    OR?: IncomeWhereInput[]
    NOT?: IncomeWhereInput | IncomeWhereInput[]
    name?: StringFilter<"Income"> | string
    description?: StringNullableFilter<"Income"> | string | null
    value?: FloatFilter<"Income"> | number
    date?: DateTimeFilter<"Income"> | Date | string
    received?: BoolFilter<"Income"> | boolean
    userId?: StringFilter<"Income"> | string
    categoryId?: StringFilter<"Income"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type IncomeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrder
    date?: SortOrder
    received?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    _count?: IncomeCountOrderByAggregateInput
    _avg?: IncomeAvgOrderByAggregateInput
    _max?: IncomeMaxOrderByAggregateInput
    _min?: IncomeMinOrderByAggregateInput
    _sum?: IncomeSumOrderByAggregateInput
  }

  export type IncomeScalarWhereWithAggregatesInput = {
    AND?: IncomeScalarWhereWithAggregatesInput | IncomeScalarWhereWithAggregatesInput[]
    OR?: IncomeScalarWhereWithAggregatesInput[]
    NOT?: IncomeScalarWhereWithAggregatesInput | IncomeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Income"> | string
    name?: StringWithAggregatesFilter<"Income"> | string
    description?: StringNullableWithAggregatesFilter<"Income"> | string | null
    value?: FloatWithAggregatesFilter<"Income"> | number
    date?: DateTimeWithAggregatesFilter<"Income"> | Date | string
    received?: BoolWithAggregatesFilter<"Income"> | boolean
    userId?: StringWithAggregatesFilter<"Income"> | string
    categoryId?: StringWithAggregatesFilter<"Income"> | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    name?: StringFilter<"Expense"> | string
    description?: StringNullableFilter<"Expense"> | string | null
    value?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    paid?: BoolFilter<"Expense"> | boolean
    userId?: StringFilter<"Expense"> | string
    categoryId?: StringFilter<"Expense"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrder
    date?: SortOrder
    paid?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    name?: StringFilter<"Expense"> | string
    description?: StringNullableFilter<"Expense"> | string | null
    value?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    paid?: BoolFilter<"Expense"> | boolean
    userId?: StringFilter<"Expense"> | string
    categoryId?: StringFilter<"Expense"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrder
    date?: SortOrder
    paid?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    name?: StringWithAggregatesFilter<"Expense"> | string
    description?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    value?: FloatWithAggregatesFilter<"Expense"> | number
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    paid?: BoolWithAggregatesFilter<"Expense"> | boolean
    userId?: StringWithAggregatesFilter<"Expense"> | string
    categoryId?: StringWithAggregatesFilter<"Expense"> | string
  }

  export type CreditCardWhereInput = {
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    id?: StringFilter<"CreditCard"> | string
    name?: StringFilter<"CreditCard"> | string
    limit?: FloatFilter<"CreditCard"> | number
    closingDay?: IntFilter<"CreditCard"> | number
    dueDay?: IntFilter<"CreditCard"> | number
    userId?: StringFilter<"CreditCard"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoices?: InvoiceListRelationFilter
  }

  export type CreditCardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type CreditCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    name?: StringFilter<"CreditCard"> | string
    limit?: FloatFilter<"CreditCard"> | number
    closingDay?: IntFilter<"CreditCard"> | number
    dueDay?: IntFilter<"CreditCard"> | number
    userId?: StringFilter<"CreditCard"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoices?: InvoiceListRelationFilter
  }, "id">

  export type CreditCardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
    userId?: SortOrder
    _count?: CreditCardCountOrderByAggregateInput
    _avg?: CreditCardAvgOrderByAggregateInput
    _max?: CreditCardMaxOrderByAggregateInput
    _min?: CreditCardMinOrderByAggregateInput
    _sum?: CreditCardSumOrderByAggregateInput
  }

  export type CreditCardScalarWhereWithAggregatesInput = {
    AND?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    OR?: CreditCardScalarWhereWithAggregatesInput[]
    NOT?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditCard"> | string
    name?: StringWithAggregatesFilter<"CreditCard"> | string
    limit?: FloatWithAggregatesFilter<"CreditCard"> | number
    closingDay?: IntWithAggregatesFilter<"CreditCard"> | number
    dueDay?: IntWithAggregatesFilter<"CreditCard"> | number
    userId?: StringWithAggregatesFilter<"CreditCard"> | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    paid?: BoolFilter<"Invoice"> | boolean
    creditCardId?: StringFilter<"Invoice"> | string
    creditCard?: XOR<CreditCardScalarRelationFilter, CreditCardWhereInput>
    installments?: InstallmentListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    dueDate?: SortOrder
    paid?: SortOrder
    creditCardId?: SortOrder
    creditCard?: CreditCardOrderByWithRelationInput
    installments?: InstallmentOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    paid?: BoolFilter<"Invoice"> | boolean
    creditCardId?: StringFilter<"Invoice"> | string
    creditCard?: XOR<CreditCardScalarRelationFilter, CreditCardWhereInput>
    installments?: InstallmentListRelationFilter
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    dueDate?: SortOrder
    paid?: SortOrder
    creditCardId?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    paid?: BoolWithAggregatesFilter<"Invoice"> | boolean
    creditCardId?: StringWithAggregatesFilter<"Invoice"> | string
  }

  export type InstallmentWhereInput = {
    AND?: InstallmentWhereInput | InstallmentWhereInput[]
    OR?: InstallmentWhereInput[]
    NOT?: InstallmentWhereInput | InstallmentWhereInput[]
    id?: StringFilter<"Installment"> | string
    installmentValue?: FloatFilter<"Installment"> | number
    invoiceId?: StringFilter<"Installment"> | string
    creditCardPurchaseId?: StringFilter<"Installment"> | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    creditCardPurchase?: XOR<CreditCardPurchaseScalarRelationFilter, CreditCardPurchaseWhereInput>
  }

  export type InstallmentOrderByWithRelationInput = {
    id?: SortOrder
    installmentValue?: SortOrder
    invoiceId?: SortOrder
    creditCardPurchaseId?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
    creditCardPurchase?: CreditCardPurchaseOrderByWithRelationInput
  }

  export type InstallmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstallmentWhereInput | InstallmentWhereInput[]
    OR?: InstallmentWhereInput[]
    NOT?: InstallmentWhereInput | InstallmentWhereInput[]
    installmentValue?: FloatFilter<"Installment"> | number
    invoiceId?: StringFilter<"Installment"> | string
    creditCardPurchaseId?: StringFilter<"Installment"> | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    creditCardPurchase?: XOR<CreditCardPurchaseScalarRelationFilter, CreditCardPurchaseWhereInput>
  }, "id">

  export type InstallmentOrderByWithAggregationInput = {
    id?: SortOrder
    installmentValue?: SortOrder
    invoiceId?: SortOrder
    creditCardPurchaseId?: SortOrder
    _count?: InstallmentCountOrderByAggregateInput
    _avg?: InstallmentAvgOrderByAggregateInput
    _max?: InstallmentMaxOrderByAggregateInput
    _min?: InstallmentMinOrderByAggregateInput
    _sum?: InstallmentSumOrderByAggregateInput
  }

  export type InstallmentScalarWhereWithAggregatesInput = {
    AND?: InstallmentScalarWhereWithAggregatesInput | InstallmentScalarWhereWithAggregatesInput[]
    OR?: InstallmentScalarWhereWithAggregatesInput[]
    NOT?: InstallmentScalarWhereWithAggregatesInput | InstallmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Installment"> | string
    installmentValue?: FloatWithAggregatesFilter<"Installment"> | number
    invoiceId?: StringWithAggregatesFilter<"Installment"> | string
    creditCardPurchaseId?: StringWithAggregatesFilter<"Installment"> | string
  }

  export type CreditCardPurchaseWhereInput = {
    AND?: CreditCardPurchaseWhereInput | CreditCardPurchaseWhereInput[]
    OR?: CreditCardPurchaseWhereInput[]
    NOT?: CreditCardPurchaseWhereInput | CreditCardPurchaseWhereInput[]
    id?: StringFilter<"CreditCardPurchase"> | string
    name?: StringFilter<"CreditCardPurchase"> | string
    description?: StringNullableFilter<"CreditCardPurchase"> | string | null
    value?: FloatFilter<"CreditCardPurchase"> | number
    purchaseDate?: DateTimeFilter<"CreditCardPurchase"> | Date | string
    installmentsNumber?: IntFilter<"CreditCardPurchase"> | number
    categoryId?: StringFilter<"CreditCardPurchase"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    installments?: InstallmentListRelationFilter
  }

  export type CreditCardPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrder
    purchaseDate?: SortOrder
    installmentsNumber?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    installments?: InstallmentOrderByRelationAggregateInput
  }

  export type CreditCardPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditCardPurchaseWhereInput | CreditCardPurchaseWhereInput[]
    OR?: CreditCardPurchaseWhereInput[]
    NOT?: CreditCardPurchaseWhereInput | CreditCardPurchaseWhereInput[]
    name?: StringFilter<"CreditCardPurchase"> | string
    description?: StringNullableFilter<"CreditCardPurchase"> | string | null
    value?: FloatFilter<"CreditCardPurchase"> | number
    purchaseDate?: DateTimeFilter<"CreditCardPurchase"> | Date | string
    installmentsNumber?: IntFilter<"CreditCardPurchase"> | number
    categoryId?: StringFilter<"CreditCardPurchase"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    installments?: InstallmentListRelationFilter
  }, "id">

  export type CreditCardPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrder
    purchaseDate?: SortOrder
    installmentsNumber?: SortOrder
    categoryId?: SortOrder
    _count?: CreditCardPurchaseCountOrderByAggregateInput
    _avg?: CreditCardPurchaseAvgOrderByAggregateInput
    _max?: CreditCardPurchaseMaxOrderByAggregateInput
    _min?: CreditCardPurchaseMinOrderByAggregateInput
    _sum?: CreditCardPurchaseSumOrderByAggregateInput
  }

  export type CreditCardPurchaseScalarWhereWithAggregatesInput = {
    AND?: CreditCardPurchaseScalarWhereWithAggregatesInput | CreditCardPurchaseScalarWhereWithAggregatesInput[]
    OR?: CreditCardPurchaseScalarWhereWithAggregatesInput[]
    NOT?: CreditCardPurchaseScalarWhereWithAggregatesInput | CreditCardPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditCardPurchase"> | string
    name?: StringWithAggregatesFilter<"CreditCardPurchase"> | string
    description?: StringNullableWithAggregatesFilter<"CreditCardPurchase"> | string | null
    value?: FloatWithAggregatesFilter<"CreditCardPurchase"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"CreditCardPurchase"> | Date | string
    installmentsNumber?: IntWithAggregatesFilter<"CreditCardPurchase"> | number
    categoryId?: StringWithAggregatesFilter<"CreditCardPurchase"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    incomes?: IncomeCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    creditCards?: CreditCardCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    creditCards?: CreditCardUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    creditCards?: CreditCardUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    user: UserCreateNestedOneWithoutCategoriesInput
    expenses?: ExpenseCreateNestedManyWithoutCategoryInput
    incomes?: IncomeCreateNestedManyWithoutCategoryInput
    creditCardPurchases?: CreditCardPurchaseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    userId: string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCategoryInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutCategoryInput
    creditCardPurchases?: CreditCardPurchaseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    expenses?: ExpenseUpdateManyWithoutCategoryNestedInput
    incomes?: IncomeUpdateManyWithoutCategoryNestedInput
    creditCardPurchases?: CreditCardPurchaseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expenses?: ExpenseUncheckedUpdateManyWithoutCategoryNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutCategoryNestedInput
    creditCardPurchases?: CreditCardPurchaseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    userId: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeCreateInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    received: boolean
    user: UserCreateNestedOneWithoutIncomesInput
    category: CategoryCreateNestedOneWithoutIncomesInput
  }

  export type IncomeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    received: boolean
    userId: string
    categoryId: string
  }

  export type IncomeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutIncomesNestedInput
    category?: CategoryUpdateOneRequiredWithoutIncomesNestedInput
  }

  export type IncomeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    received: boolean
    userId: string
    categoryId: string
  }

  export type IncomeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncomeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseCreateInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    paid: boolean
    user: UserCreateNestedOneWithoutExpensesInput
    category: CategoryCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    paid: boolean
    userId: string
    categoryId: string
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
    category?: CategoryUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    paid: boolean
    userId: string
    categoryId: string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditCardCreateInput = {
    id?: string
    name: string
    limit: number
    closingDay: number
    dueDay: number
    user: UserCreateNestedOneWithoutCreditCardsInput
    invoices?: InvoiceCreateNestedManyWithoutCreditCardInput
  }

  export type CreditCardUncheckedCreateInput = {
    id?: string
    name: string
    limit: number
    closingDay: number
    dueDay: number
    userId: string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCreditCardInput
  }

  export type CreditCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: FloatFieldUpdateOperationsInput | number
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCreditCardsNestedInput
    invoices?: InvoiceUpdateManyWithoutCreditCardNestedInput
  }

  export type CreditCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: FloatFieldUpdateOperationsInput | number
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    invoices?: InvoiceUncheckedUpdateManyWithoutCreditCardNestedInput
  }

  export type CreditCardCreateManyInput = {
    id?: string
    name: string
    limit: number
    closingDay: number
    dueDay: number
    userId: string
  }

  export type CreditCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: FloatFieldUpdateOperationsInput | number
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
  }

  export type CreditCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: FloatFieldUpdateOperationsInput | number
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateInput = {
    id?: string
    dueDate: Date | string
    paid: boolean
    creditCard: CreditCardCreateNestedOneWithoutInvoicesInput
    installments?: InstallmentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    dueDate: Date | string
    paid: boolean
    creditCardId: string
    installments?: InstallmentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    creditCard?: CreditCardUpdateOneRequiredWithoutInvoicesNestedInput
    installments?: InstallmentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    creditCardId?: StringFieldUpdateOperationsInput | string
    installments?: InstallmentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    dueDate: Date | string
    paid: boolean
    creditCardId: string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    creditCardId?: StringFieldUpdateOperationsInput | string
  }

  export type InstallmentCreateInput = {
    id?: string
    installmentValue: number
    invoice: InvoiceCreateNestedOneWithoutInstallmentsInput
    creditCardPurchase: CreditCardPurchaseCreateNestedOneWithoutInstallmentsInput
  }

  export type InstallmentUncheckedCreateInput = {
    id?: string
    installmentValue: number
    invoiceId: string
    creditCardPurchaseId: string
  }

  export type InstallmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentValue?: FloatFieldUpdateOperationsInput | number
    invoice?: InvoiceUpdateOneRequiredWithoutInstallmentsNestedInput
    creditCardPurchase?: CreditCardPurchaseUpdateOneRequiredWithoutInstallmentsNestedInput
  }

  export type InstallmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentValue?: FloatFieldUpdateOperationsInput | number
    invoiceId?: StringFieldUpdateOperationsInput | string
    creditCardPurchaseId?: StringFieldUpdateOperationsInput | string
  }

  export type InstallmentCreateManyInput = {
    id?: string
    installmentValue: number
    invoiceId: string
    creditCardPurchaseId: string
  }

  export type InstallmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentValue?: FloatFieldUpdateOperationsInput | number
  }

  export type InstallmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentValue?: FloatFieldUpdateOperationsInput | number
    invoiceId?: StringFieldUpdateOperationsInput | string
    creditCardPurchaseId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditCardPurchaseCreateInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    purchaseDate: Date | string
    installmentsNumber: number
    category: CategoryCreateNestedOneWithoutCreditCardPurchasesInput
    installments?: InstallmentCreateNestedManyWithoutCreditCardPurchaseInput
  }

  export type CreditCardPurchaseUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    purchaseDate: Date | string
    installmentsNumber: number
    categoryId: string
    installments?: InstallmentUncheckedCreateNestedManyWithoutCreditCardPurchaseInput
  }

  export type CreditCardPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentsNumber?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutCreditCardPurchasesNestedInput
    installments?: InstallmentUpdateManyWithoutCreditCardPurchaseNestedInput
  }

  export type CreditCardPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentsNumber?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    installments?: InstallmentUncheckedUpdateManyWithoutCreditCardPurchaseNestedInput
  }

  export type CreditCardPurchaseCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    purchaseDate: Date | string
    installmentsNumber: number
    categoryId: string
  }

  export type CreditCardPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentsNumber?: IntFieldUpdateOperationsInput | number
  }

  export type CreditCardPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentsNumber?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
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

  export type IncomeListRelationFilter = {
    every?: IncomeWhereInput
    some?: IncomeWhereInput
    none?: IncomeWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type CreditCardListRelationFilter = {
    every?: CreditCardWhereInput
    some?: CreditCardWhereInput
    none?: CreditCardWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type IncomeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CreditCardPurchaseListRelationFilter = {
    every?: CreditCardPurchaseWhereInput
    some?: CreditCardPurchaseWhereInput
    none?: CreditCardPurchaseWhereInput
  }

  export type CreditCardPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isExpense?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isExpense?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isExpense?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IncomeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    value?: SortOrder
    date?: SortOrder
    received?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type IncomeAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type IncomeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    value?: SortOrder
    date?: SortOrder
    received?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type IncomeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    value?: SortOrder
    date?: SortOrder
    received?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type IncomeSumOrderByAggregateInput = {
    value?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    value?: SortOrder
    date?: SortOrder
    paid?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    value?: SortOrder
    date?: SortOrder
    paid?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    value?: SortOrder
    date?: SortOrder
    paid?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    value?: SortOrder
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

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditCardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
    userId?: SortOrder
  }

  export type CreditCardAvgOrderByAggregateInput = {
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
  }

  export type CreditCardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
    userId?: SortOrder
  }

  export type CreditCardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
    userId?: SortOrder
  }

  export type CreditCardSumOrderByAggregateInput = {
    limit?: SortOrder
    closingDay?: SortOrder
    dueDay?: SortOrder
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

  export type CreditCardScalarRelationFilter = {
    is?: CreditCardWhereInput
    isNot?: CreditCardWhereInput
  }

  export type InstallmentListRelationFilter = {
    every?: InstallmentWhereInput
    some?: InstallmentWhereInput
    none?: InstallmentWhereInput
  }

  export type InstallmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    dueDate?: SortOrder
    paid?: SortOrder
    creditCardId?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    dueDate?: SortOrder
    paid?: SortOrder
    creditCardId?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    dueDate?: SortOrder
    paid?: SortOrder
    creditCardId?: SortOrder
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type CreditCardPurchaseScalarRelationFilter = {
    is?: CreditCardPurchaseWhereInput
    isNot?: CreditCardPurchaseWhereInput
  }

  export type InstallmentCountOrderByAggregateInput = {
    id?: SortOrder
    installmentValue?: SortOrder
    invoiceId?: SortOrder
    creditCardPurchaseId?: SortOrder
  }

  export type InstallmentAvgOrderByAggregateInput = {
    installmentValue?: SortOrder
  }

  export type InstallmentMaxOrderByAggregateInput = {
    id?: SortOrder
    installmentValue?: SortOrder
    invoiceId?: SortOrder
    creditCardPurchaseId?: SortOrder
  }

  export type InstallmentMinOrderByAggregateInput = {
    id?: SortOrder
    installmentValue?: SortOrder
    invoiceId?: SortOrder
    creditCardPurchaseId?: SortOrder
  }

  export type InstallmentSumOrderByAggregateInput = {
    installmentValue?: SortOrder
  }

  export type CreditCardPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    value?: SortOrder
    purchaseDate?: SortOrder
    installmentsNumber?: SortOrder
    categoryId?: SortOrder
  }

  export type CreditCardPurchaseAvgOrderByAggregateInput = {
    value?: SortOrder
    installmentsNumber?: SortOrder
  }

  export type CreditCardPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    value?: SortOrder
    purchaseDate?: SortOrder
    installmentsNumber?: SortOrder
    categoryId?: SortOrder
  }

  export type CreditCardPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    value?: SortOrder
    purchaseDate?: SortOrder
    installmentsNumber?: SortOrder
    categoryId?: SortOrder
  }

  export type CreditCardPurchaseSumOrderByAggregateInput = {
    value?: SortOrder
    installmentsNumber?: SortOrder
  }

  export type IncomeCreateNestedManyWithoutUserInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type CreditCardCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type IncomeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type CreditCardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IncomeUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    upsert?: IncomeUpsertWithWhereUniqueWithoutUserInput | IncomeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    set?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    disconnect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    delete?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    update?: IncomeUpdateWithWhereUniqueWithoutUserInput | IncomeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncomeUpdateManyWithWhereWithoutUserInput | IncomeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type CreditCardUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    upsert?: CreditCardUpsertWithWhereUniqueWithoutUserInput | CreditCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    set?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    disconnect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    delete?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    update?: CreditCardUpdateWithWhereUniqueWithoutUserInput | CreditCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditCardUpdateManyWithWhereWithoutUserInput | CreditCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type IncomeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    upsert?: IncomeUpsertWithWhereUniqueWithoutUserInput | IncomeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    set?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    disconnect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    delete?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    update?: IncomeUpdateWithWhereUniqueWithoutUserInput | IncomeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncomeUpdateManyWithWhereWithoutUserInput | IncomeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type CreditCardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    upsert?: CreditCardUpsertWithWhereUniqueWithoutUserInput | CreditCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    set?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    disconnect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    delete?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    update?: CreditCardUpdateWithWhereUniqueWithoutUserInput | CreditCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditCardUpdateManyWithWhereWithoutUserInput | CreditCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type IncomeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<IncomeCreateWithoutCategoryInput, IncomeUncheckedCreateWithoutCategoryInput> | IncomeCreateWithoutCategoryInput[] | IncomeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutCategoryInput | IncomeCreateOrConnectWithoutCategoryInput[]
    createMany?: IncomeCreateManyCategoryInputEnvelope
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
  }

  export type CreditCardPurchaseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CreditCardPurchaseCreateWithoutCategoryInput, CreditCardPurchaseUncheckedCreateWithoutCategoryInput> | CreditCardPurchaseCreateWithoutCategoryInput[] | CreditCardPurchaseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CreditCardPurchaseCreateOrConnectWithoutCategoryInput | CreditCardPurchaseCreateOrConnectWithoutCategoryInput[]
    createMany?: CreditCardPurchaseCreateManyCategoryInputEnvelope
    connect?: CreditCardPurchaseWhereUniqueInput | CreditCardPurchaseWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type IncomeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<IncomeCreateWithoutCategoryInput, IncomeUncheckedCreateWithoutCategoryInput> | IncomeCreateWithoutCategoryInput[] | IncomeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutCategoryInput | IncomeCreateOrConnectWithoutCategoryInput[]
    createMany?: IncomeCreateManyCategoryInputEnvelope
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
  }

  export type CreditCardPurchaseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CreditCardPurchaseCreateWithoutCategoryInput, CreditCardPurchaseUncheckedCreateWithoutCategoryInput> | CreditCardPurchaseCreateWithoutCategoryInput[] | CreditCardPurchaseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CreditCardPurchaseCreateOrConnectWithoutCategoryInput | CreditCardPurchaseCreateOrConnectWithoutCategoryInput[]
    createMany?: CreditCardPurchaseCreateManyCategoryInputEnvelope
    connect?: CreditCardPurchaseWhereUniqueInput | CreditCardPurchaseWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type ExpenseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCategoryInput | ExpenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCategoryInput | ExpenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCategoryInput | ExpenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type IncomeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<IncomeCreateWithoutCategoryInput, IncomeUncheckedCreateWithoutCategoryInput> | IncomeCreateWithoutCategoryInput[] | IncomeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutCategoryInput | IncomeCreateOrConnectWithoutCategoryInput[]
    upsert?: IncomeUpsertWithWhereUniqueWithoutCategoryInput | IncomeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: IncomeCreateManyCategoryInputEnvelope
    set?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    disconnect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    delete?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    update?: IncomeUpdateWithWhereUniqueWithoutCategoryInput | IncomeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: IncomeUpdateManyWithWhereWithoutCategoryInput | IncomeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
  }

  export type CreditCardPurchaseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CreditCardPurchaseCreateWithoutCategoryInput, CreditCardPurchaseUncheckedCreateWithoutCategoryInput> | CreditCardPurchaseCreateWithoutCategoryInput[] | CreditCardPurchaseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CreditCardPurchaseCreateOrConnectWithoutCategoryInput | CreditCardPurchaseCreateOrConnectWithoutCategoryInput[]
    upsert?: CreditCardPurchaseUpsertWithWhereUniqueWithoutCategoryInput | CreditCardPurchaseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CreditCardPurchaseCreateManyCategoryInputEnvelope
    set?: CreditCardPurchaseWhereUniqueInput | CreditCardPurchaseWhereUniqueInput[]
    disconnect?: CreditCardPurchaseWhereUniqueInput | CreditCardPurchaseWhereUniqueInput[]
    delete?: CreditCardPurchaseWhereUniqueInput | CreditCardPurchaseWhereUniqueInput[]
    connect?: CreditCardPurchaseWhereUniqueInput | CreditCardPurchaseWhereUniqueInput[]
    update?: CreditCardPurchaseUpdateWithWhereUniqueWithoutCategoryInput | CreditCardPurchaseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CreditCardPurchaseUpdateManyWithWhereWithoutCategoryInput | CreditCardPurchaseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CreditCardPurchaseScalarWhereInput | CreditCardPurchaseScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCategoryInput | ExpenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCategoryInput | ExpenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCategoryInput | ExpenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type IncomeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<IncomeCreateWithoutCategoryInput, IncomeUncheckedCreateWithoutCategoryInput> | IncomeCreateWithoutCategoryInput[] | IncomeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutCategoryInput | IncomeCreateOrConnectWithoutCategoryInput[]
    upsert?: IncomeUpsertWithWhereUniqueWithoutCategoryInput | IncomeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: IncomeCreateManyCategoryInputEnvelope
    set?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    disconnect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    delete?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    update?: IncomeUpdateWithWhereUniqueWithoutCategoryInput | IncomeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: IncomeUpdateManyWithWhereWithoutCategoryInput | IncomeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
  }

  export type CreditCardPurchaseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CreditCardPurchaseCreateWithoutCategoryInput, CreditCardPurchaseUncheckedCreateWithoutCategoryInput> | CreditCardPurchaseCreateWithoutCategoryInput[] | CreditCardPurchaseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CreditCardPurchaseCreateOrConnectWithoutCategoryInput | CreditCardPurchaseCreateOrConnectWithoutCategoryInput[]
    upsert?: CreditCardPurchaseUpsertWithWhereUniqueWithoutCategoryInput | CreditCardPurchaseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CreditCardPurchaseCreateManyCategoryInputEnvelope
    set?: CreditCardPurchaseWhereUniqueInput | CreditCardPurchaseWhereUniqueInput[]
    disconnect?: CreditCardPurchaseWhereUniqueInput | CreditCardPurchaseWhereUniqueInput[]
    delete?: CreditCardPurchaseWhereUniqueInput | CreditCardPurchaseWhereUniqueInput[]
    connect?: CreditCardPurchaseWhereUniqueInput | CreditCardPurchaseWhereUniqueInput[]
    update?: CreditCardPurchaseUpdateWithWhereUniqueWithoutCategoryInput | CreditCardPurchaseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CreditCardPurchaseUpdateManyWithWhereWithoutCategoryInput | CreditCardPurchaseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CreditCardPurchaseScalarWhereInput | CreditCardPurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIncomesInput = {
    create?: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutIncomesInput = {
    create?: XOR<CategoryCreateWithoutIncomesInput, CategoryUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutIncomesInput
    connect?: CategoryWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutIncomesNestedInput = {
    create?: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomesInput
    upsert?: UserUpsertWithoutIncomesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncomesInput, UserUpdateWithoutIncomesInput>, UserUncheckedUpdateWithoutIncomesInput>
  }

  export type CategoryUpdateOneRequiredWithoutIncomesNestedInput = {
    create?: XOR<CategoryCreateWithoutIncomesInput, CategoryUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutIncomesInput
    upsert?: CategoryUpsertWithoutIncomesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutIncomesInput, CategoryUpdateWithoutIncomesInput>, CategoryUncheckedUpdateWithoutIncomesInput>
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutExpensesInput = {
    create?: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutExpensesInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type CategoryUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutExpensesInput
    upsert?: CategoryUpsertWithoutExpensesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutExpensesInput, CategoryUpdateWithoutExpensesInput>, CategoryUncheckedUpdateWithoutExpensesInput>
  }

  export type UserCreateNestedOneWithoutCreditCardsInput = {
    create?: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditCardsInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutCreditCardInput = {
    create?: XOR<InvoiceCreateWithoutCreditCardInput, InvoiceUncheckedCreateWithoutCreditCardInput> | InvoiceCreateWithoutCreditCardInput[] | InvoiceUncheckedCreateWithoutCreditCardInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCreditCardInput | InvoiceCreateOrConnectWithoutCreditCardInput[]
    createMany?: InvoiceCreateManyCreditCardInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCreditCardInput = {
    create?: XOR<InvoiceCreateWithoutCreditCardInput, InvoiceUncheckedCreateWithoutCreditCardInput> | InvoiceCreateWithoutCreditCardInput[] | InvoiceUncheckedCreateWithoutCreditCardInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCreditCardInput | InvoiceCreateOrConnectWithoutCreditCardInput[]
    createMany?: InvoiceCreateManyCreditCardInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCreditCardsNestedInput = {
    create?: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditCardsInput
    upsert?: UserUpsertWithoutCreditCardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditCardsInput, UserUpdateWithoutCreditCardsInput>, UserUncheckedUpdateWithoutCreditCardsInput>
  }

  export type InvoiceUpdateManyWithoutCreditCardNestedInput = {
    create?: XOR<InvoiceCreateWithoutCreditCardInput, InvoiceUncheckedCreateWithoutCreditCardInput> | InvoiceCreateWithoutCreditCardInput[] | InvoiceUncheckedCreateWithoutCreditCardInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCreditCardInput | InvoiceCreateOrConnectWithoutCreditCardInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCreditCardInput | InvoiceUpsertWithWhereUniqueWithoutCreditCardInput[]
    createMany?: InvoiceCreateManyCreditCardInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCreditCardInput | InvoiceUpdateWithWhereUniqueWithoutCreditCardInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCreditCardInput | InvoiceUpdateManyWithWhereWithoutCreditCardInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutCreditCardNestedInput = {
    create?: XOR<InvoiceCreateWithoutCreditCardInput, InvoiceUncheckedCreateWithoutCreditCardInput> | InvoiceCreateWithoutCreditCardInput[] | InvoiceUncheckedCreateWithoutCreditCardInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCreditCardInput | InvoiceCreateOrConnectWithoutCreditCardInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCreditCardInput | InvoiceUpsertWithWhereUniqueWithoutCreditCardInput[]
    createMany?: InvoiceCreateManyCreditCardInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCreditCardInput | InvoiceUpdateWithWhereUniqueWithoutCreditCardInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCreditCardInput | InvoiceUpdateManyWithWhereWithoutCreditCardInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type CreditCardCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<CreditCardCreateWithoutInvoicesInput, CreditCardUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutInvoicesInput
    connect?: CreditCardWhereUniqueInput
  }

  export type InstallmentCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InstallmentCreateWithoutInvoiceInput, InstallmentUncheckedCreateWithoutInvoiceInput> | InstallmentCreateWithoutInvoiceInput[] | InstallmentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InstallmentCreateOrConnectWithoutInvoiceInput | InstallmentCreateOrConnectWithoutInvoiceInput[]
    createMany?: InstallmentCreateManyInvoiceInputEnvelope
    connect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
  }

  export type InstallmentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InstallmentCreateWithoutInvoiceInput, InstallmentUncheckedCreateWithoutInvoiceInput> | InstallmentCreateWithoutInvoiceInput[] | InstallmentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InstallmentCreateOrConnectWithoutInvoiceInput | InstallmentCreateOrConnectWithoutInvoiceInput[]
    createMany?: InstallmentCreateManyInvoiceInputEnvelope
    connect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
  }

  export type CreditCardUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<CreditCardCreateWithoutInvoicesInput, CreditCardUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutInvoicesInput
    upsert?: CreditCardUpsertWithoutInvoicesInput
    connect?: CreditCardWhereUniqueInput
    update?: XOR<XOR<CreditCardUpdateToOneWithWhereWithoutInvoicesInput, CreditCardUpdateWithoutInvoicesInput>, CreditCardUncheckedUpdateWithoutInvoicesInput>
  }

  export type InstallmentUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InstallmentCreateWithoutInvoiceInput, InstallmentUncheckedCreateWithoutInvoiceInput> | InstallmentCreateWithoutInvoiceInput[] | InstallmentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InstallmentCreateOrConnectWithoutInvoiceInput | InstallmentCreateOrConnectWithoutInvoiceInput[]
    upsert?: InstallmentUpsertWithWhereUniqueWithoutInvoiceInput | InstallmentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InstallmentCreateManyInvoiceInputEnvelope
    set?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    disconnect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    delete?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    connect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    update?: InstallmentUpdateWithWhereUniqueWithoutInvoiceInput | InstallmentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InstallmentUpdateManyWithWhereWithoutInvoiceInput | InstallmentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InstallmentScalarWhereInput | InstallmentScalarWhereInput[]
  }

  export type InstallmentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InstallmentCreateWithoutInvoiceInput, InstallmentUncheckedCreateWithoutInvoiceInput> | InstallmentCreateWithoutInvoiceInput[] | InstallmentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InstallmentCreateOrConnectWithoutInvoiceInput | InstallmentCreateOrConnectWithoutInvoiceInput[]
    upsert?: InstallmentUpsertWithWhereUniqueWithoutInvoiceInput | InstallmentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InstallmentCreateManyInvoiceInputEnvelope
    set?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    disconnect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    delete?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    connect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    update?: InstallmentUpdateWithWhereUniqueWithoutInvoiceInput | InstallmentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InstallmentUpdateManyWithWhereWithoutInvoiceInput | InstallmentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InstallmentScalarWhereInput | InstallmentScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutInstallmentsInput = {
    create?: XOR<InvoiceCreateWithoutInstallmentsInput, InvoiceUncheckedCreateWithoutInstallmentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutInstallmentsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type CreditCardPurchaseCreateNestedOneWithoutInstallmentsInput = {
    create?: XOR<CreditCardPurchaseCreateWithoutInstallmentsInput, CreditCardPurchaseUncheckedCreateWithoutInstallmentsInput>
    connectOrCreate?: CreditCardPurchaseCreateOrConnectWithoutInstallmentsInput
    connect?: CreditCardPurchaseWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutInstallmentsNestedInput = {
    create?: XOR<InvoiceCreateWithoutInstallmentsInput, InvoiceUncheckedCreateWithoutInstallmentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutInstallmentsInput
    upsert?: InvoiceUpsertWithoutInstallmentsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutInstallmentsInput, InvoiceUpdateWithoutInstallmentsInput>, InvoiceUncheckedUpdateWithoutInstallmentsInput>
  }

  export type CreditCardPurchaseUpdateOneRequiredWithoutInstallmentsNestedInput = {
    create?: XOR<CreditCardPurchaseCreateWithoutInstallmentsInput, CreditCardPurchaseUncheckedCreateWithoutInstallmentsInput>
    connectOrCreate?: CreditCardPurchaseCreateOrConnectWithoutInstallmentsInput
    upsert?: CreditCardPurchaseUpsertWithoutInstallmentsInput
    connect?: CreditCardPurchaseWhereUniqueInput
    update?: XOR<XOR<CreditCardPurchaseUpdateToOneWithWhereWithoutInstallmentsInput, CreditCardPurchaseUpdateWithoutInstallmentsInput>, CreditCardPurchaseUncheckedUpdateWithoutInstallmentsInput>
  }

  export type CategoryCreateNestedOneWithoutCreditCardPurchasesInput = {
    create?: XOR<CategoryCreateWithoutCreditCardPurchasesInput, CategoryUncheckedCreateWithoutCreditCardPurchasesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCreditCardPurchasesInput
    connect?: CategoryWhereUniqueInput
  }

  export type InstallmentCreateNestedManyWithoutCreditCardPurchaseInput = {
    create?: XOR<InstallmentCreateWithoutCreditCardPurchaseInput, InstallmentUncheckedCreateWithoutCreditCardPurchaseInput> | InstallmentCreateWithoutCreditCardPurchaseInput[] | InstallmentUncheckedCreateWithoutCreditCardPurchaseInput[]
    connectOrCreate?: InstallmentCreateOrConnectWithoutCreditCardPurchaseInput | InstallmentCreateOrConnectWithoutCreditCardPurchaseInput[]
    createMany?: InstallmentCreateManyCreditCardPurchaseInputEnvelope
    connect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
  }

  export type InstallmentUncheckedCreateNestedManyWithoutCreditCardPurchaseInput = {
    create?: XOR<InstallmentCreateWithoutCreditCardPurchaseInput, InstallmentUncheckedCreateWithoutCreditCardPurchaseInput> | InstallmentCreateWithoutCreditCardPurchaseInput[] | InstallmentUncheckedCreateWithoutCreditCardPurchaseInput[]
    connectOrCreate?: InstallmentCreateOrConnectWithoutCreditCardPurchaseInput | InstallmentCreateOrConnectWithoutCreditCardPurchaseInput[]
    createMany?: InstallmentCreateManyCreditCardPurchaseInputEnvelope
    connect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutCreditCardPurchasesNestedInput = {
    create?: XOR<CategoryCreateWithoutCreditCardPurchasesInput, CategoryUncheckedCreateWithoutCreditCardPurchasesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCreditCardPurchasesInput
    upsert?: CategoryUpsertWithoutCreditCardPurchasesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCreditCardPurchasesInput, CategoryUpdateWithoutCreditCardPurchasesInput>, CategoryUncheckedUpdateWithoutCreditCardPurchasesInput>
  }

  export type InstallmentUpdateManyWithoutCreditCardPurchaseNestedInput = {
    create?: XOR<InstallmentCreateWithoutCreditCardPurchaseInput, InstallmentUncheckedCreateWithoutCreditCardPurchaseInput> | InstallmentCreateWithoutCreditCardPurchaseInput[] | InstallmentUncheckedCreateWithoutCreditCardPurchaseInput[]
    connectOrCreate?: InstallmentCreateOrConnectWithoutCreditCardPurchaseInput | InstallmentCreateOrConnectWithoutCreditCardPurchaseInput[]
    upsert?: InstallmentUpsertWithWhereUniqueWithoutCreditCardPurchaseInput | InstallmentUpsertWithWhereUniqueWithoutCreditCardPurchaseInput[]
    createMany?: InstallmentCreateManyCreditCardPurchaseInputEnvelope
    set?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    disconnect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    delete?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    connect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    update?: InstallmentUpdateWithWhereUniqueWithoutCreditCardPurchaseInput | InstallmentUpdateWithWhereUniqueWithoutCreditCardPurchaseInput[]
    updateMany?: InstallmentUpdateManyWithWhereWithoutCreditCardPurchaseInput | InstallmentUpdateManyWithWhereWithoutCreditCardPurchaseInput[]
    deleteMany?: InstallmentScalarWhereInput | InstallmentScalarWhereInput[]
  }

  export type InstallmentUncheckedUpdateManyWithoutCreditCardPurchaseNestedInput = {
    create?: XOR<InstallmentCreateWithoutCreditCardPurchaseInput, InstallmentUncheckedCreateWithoutCreditCardPurchaseInput> | InstallmentCreateWithoutCreditCardPurchaseInput[] | InstallmentUncheckedCreateWithoutCreditCardPurchaseInput[]
    connectOrCreate?: InstallmentCreateOrConnectWithoutCreditCardPurchaseInput | InstallmentCreateOrConnectWithoutCreditCardPurchaseInput[]
    upsert?: InstallmentUpsertWithWhereUniqueWithoutCreditCardPurchaseInput | InstallmentUpsertWithWhereUniqueWithoutCreditCardPurchaseInput[]
    createMany?: InstallmentCreateManyCreditCardPurchaseInputEnvelope
    set?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    disconnect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    delete?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    connect?: InstallmentWhereUniqueInput | InstallmentWhereUniqueInput[]
    update?: InstallmentUpdateWithWhereUniqueWithoutCreditCardPurchaseInput | InstallmentUpdateWithWhereUniqueWithoutCreditCardPurchaseInput[]
    updateMany?: InstallmentUpdateManyWithWhereWithoutCreditCardPurchaseInput | InstallmentUpdateManyWithWhereWithoutCreditCardPurchaseInput[]
    deleteMany?: InstallmentScalarWhereInput | InstallmentScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type IncomeCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    received: boolean
    category: CategoryCreateNestedOneWithoutIncomesInput
  }

  export type IncomeUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    received: boolean
    categoryId: string
  }

  export type IncomeCreateOrConnectWithoutUserInput = {
    where: IncomeWhereUniqueInput
    create: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput>
  }

  export type IncomeCreateManyUserInputEnvelope = {
    data: IncomeCreateManyUserInput | IncomeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    paid: boolean
    category: CategoryCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    paid: boolean
    categoryId: string
  }

  export type ExpenseCreateOrConnectWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseCreateManyUserInputEnvelope = {
    data: ExpenseCreateManyUserInput | ExpenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreditCardCreateWithoutUserInput = {
    id?: string
    name: string
    limit: number
    closingDay: number
    dueDay: number
    invoices?: InvoiceCreateNestedManyWithoutCreditCardInput
  }

  export type CreditCardUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    limit: number
    closingDay: number
    dueDay: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCreditCardInput
  }

  export type CreditCardCreateOrConnectWithoutUserInput = {
    where: CreditCardWhereUniqueInput
    create: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput>
  }

  export type CreditCardCreateManyUserInputEnvelope = {
    data: CreditCardCreateManyUserInput | CreditCardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutUserInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    expenses?: ExpenseCreateNestedManyWithoutCategoryInput
    incomes?: IncomeCreateNestedManyWithoutCategoryInput
    creditCardPurchases?: CreditCardPurchaseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCategoryInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutCategoryInput
    creditCardPurchases?: CreditCardPurchaseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IncomeUpsertWithWhereUniqueWithoutUserInput = {
    where: IncomeWhereUniqueInput
    update: XOR<IncomeUpdateWithoutUserInput, IncomeUncheckedUpdateWithoutUserInput>
    create: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput>
  }

  export type IncomeUpdateWithWhereUniqueWithoutUserInput = {
    where: IncomeWhereUniqueInput
    data: XOR<IncomeUpdateWithoutUserInput, IncomeUncheckedUpdateWithoutUserInput>
  }

  export type IncomeUpdateManyWithWhereWithoutUserInput = {
    where: IncomeScalarWhereInput
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyWithoutUserInput>
  }

  export type IncomeScalarWhereInput = {
    AND?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
    OR?: IncomeScalarWhereInput[]
    NOT?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
    id?: StringFilter<"Income"> | string
    name?: StringFilter<"Income"> | string
    description?: StringNullableFilter<"Income"> | string | null
    value?: FloatFilter<"Income"> | number
    date?: DateTimeFilter<"Income"> | Date | string
    received?: BoolFilter<"Income"> | boolean
    userId?: StringFilter<"Income"> | string
    categoryId?: StringFilter<"Income"> | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    name?: StringFilter<"Expense"> | string
    description?: StringNullableFilter<"Expense"> | string | null
    value?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    paid?: BoolFilter<"Expense"> | boolean
    userId?: StringFilter<"Expense"> | string
    categoryId?: StringFilter<"Expense"> | string
  }

  export type CreditCardUpsertWithWhereUniqueWithoutUserInput = {
    where: CreditCardWhereUniqueInput
    update: XOR<CreditCardUpdateWithoutUserInput, CreditCardUncheckedUpdateWithoutUserInput>
    create: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput>
  }

  export type CreditCardUpdateWithWhereUniqueWithoutUserInput = {
    where: CreditCardWhereUniqueInput
    data: XOR<CreditCardUpdateWithoutUserInput, CreditCardUncheckedUpdateWithoutUserInput>
  }

  export type CreditCardUpdateManyWithWhereWithoutUserInput = {
    where: CreditCardScalarWhereInput
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyWithoutUserInput>
  }

  export type CreditCardScalarWhereInput = {
    AND?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
    OR?: CreditCardScalarWhereInput[]
    NOT?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
    id?: StringFilter<"CreditCard"> | string
    name?: StringFilter<"CreditCard"> | string
    limit?: FloatFilter<"CreditCard"> | number
    closingDay?: IntFilter<"CreditCard"> | number
    dueDay?: IntFilter<"CreditCard"> | number
    userId?: StringFilter<"CreditCard"> | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    isExpense?: BoolFilter<"Category"> | boolean
    icon?: StringFilter<"Category"> | string
    userId?: StringFilter<"Category"> | string
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    name: string
    email: string
    password: string
    incomes?: IncomeCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    creditCards?: CreditCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    email: string
    password: string
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type ExpenseCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    paid: boolean
    user: UserCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    paid: boolean
    userId: string
  }

  export type ExpenseCreateOrConnectWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput>
  }

  export type ExpenseCreateManyCategoryInputEnvelope = {
    data: ExpenseCreateManyCategoryInput | ExpenseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type IncomeCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    received: boolean
    user: UserCreateNestedOneWithoutIncomesInput
  }

  export type IncomeUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    received: boolean
    userId: string
  }

  export type IncomeCreateOrConnectWithoutCategoryInput = {
    where: IncomeWhereUniqueInput
    create: XOR<IncomeCreateWithoutCategoryInput, IncomeUncheckedCreateWithoutCategoryInput>
  }

  export type IncomeCreateManyCategoryInputEnvelope = {
    data: IncomeCreateManyCategoryInput | IncomeCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CreditCardPurchaseCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    purchaseDate: Date | string
    installmentsNumber: number
    installments?: InstallmentCreateNestedManyWithoutCreditCardPurchaseInput
  }

  export type CreditCardPurchaseUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    purchaseDate: Date | string
    installmentsNumber: number
    installments?: InstallmentUncheckedCreateNestedManyWithoutCreditCardPurchaseInput
  }

  export type CreditCardPurchaseCreateOrConnectWithoutCategoryInput = {
    where: CreditCardPurchaseWhereUniqueInput
    create: XOR<CreditCardPurchaseCreateWithoutCategoryInput, CreditCardPurchaseUncheckedCreateWithoutCategoryInput>
  }

  export type CreditCardPurchaseCreateManyCategoryInputEnvelope = {
    data: CreditCardPurchaseCreateManyCategoryInput | CreditCardPurchaseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    creditCards?: CreditCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    creditCards?: CreditCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCategoryInput, ExpenseUncheckedUpdateWithoutCategoryInput>
    create: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCategoryInput, ExpenseUncheckedUpdateWithoutCategoryInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCategoryInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type IncomeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: IncomeWhereUniqueInput
    update: XOR<IncomeUpdateWithoutCategoryInput, IncomeUncheckedUpdateWithoutCategoryInput>
    create: XOR<IncomeCreateWithoutCategoryInput, IncomeUncheckedCreateWithoutCategoryInput>
  }

  export type IncomeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: IncomeWhereUniqueInput
    data: XOR<IncomeUpdateWithoutCategoryInput, IncomeUncheckedUpdateWithoutCategoryInput>
  }

  export type IncomeUpdateManyWithWhereWithoutCategoryInput = {
    where: IncomeScalarWhereInput
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CreditCardPurchaseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CreditCardPurchaseWhereUniqueInput
    update: XOR<CreditCardPurchaseUpdateWithoutCategoryInput, CreditCardPurchaseUncheckedUpdateWithoutCategoryInput>
    create: XOR<CreditCardPurchaseCreateWithoutCategoryInput, CreditCardPurchaseUncheckedCreateWithoutCategoryInput>
  }

  export type CreditCardPurchaseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CreditCardPurchaseWhereUniqueInput
    data: XOR<CreditCardPurchaseUpdateWithoutCategoryInput, CreditCardPurchaseUncheckedUpdateWithoutCategoryInput>
  }

  export type CreditCardPurchaseUpdateManyWithWhereWithoutCategoryInput = {
    where: CreditCardPurchaseScalarWhereInput
    data: XOR<CreditCardPurchaseUpdateManyMutationInput, CreditCardPurchaseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CreditCardPurchaseScalarWhereInput = {
    AND?: CreditCardPurchaseScalarWhereInput | CreditCardPurchaseScalarWhereInput[]
    OR?: CreditCardPurchaseScalarWhereInput[]
    NOT?: CreditCardPurchaseScalarWhereInput | CreditCardPurchaseScalarWhereInput[]
    id?: StringFilter<"CreditCardPurchase"> | string
    name?: StringFilter<"CreditCardPurchase"> | string
    description?: StringNullableFilter<"CreditCardPurchase"> | string | null
    value?: FloatFilter<"CreditCardPurchase"> | number
    purchaseDate?: DateTimeFilter<"CreditCardPurchase"> | Date | string
    installmentsNumber?: IntFilter<"CreditCardPurchase"> | number
    categoryId?: StringFilter<"CreditCardPurchase"> | string
  }

  export type UserCreateWithoutIncomesInput = {
    id?: string
    name: string
    email: string
    password: string
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    creditCards?: CreditCardCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIncomesInput = {
    id?: string
    name: string
    email: string
    password: string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncomesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
  }

  export type CategoryCreateWithoutIncomesInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    user: UserCreateNestedOneWithoutCategoriesInput
    expenses?: ExpenseCreateNestedManyWithoutCategoryInput
    creditCardPurchases?: CreditCardPurchaseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutIncomesInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    userId: string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCategoryInput
    creditCardPurchases?: CreditCardPurchaseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutIncomesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutIncomesInput, CategoryUncheckedCreateWithoutIncomesInput>
  }

  export type UserUpsertWithoutIncomesInput = {
    update: XOR<UserUpdateWithoutIncomesInput, UserUncheckedUpdateWithoutIncomesInput>
    create: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncomesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncomesInput, UserUncheckedUpdateWithoutIncomesInput>
  }

  export type UserUpdateWithoutIncomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    creditCards?: CreditCardUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIncomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    creditCards?: CreditCardUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutIncomesInput = {
    update: XOR<CategoryUpdateWithoutIncomesInput, CategoryUncheckedUpdateWithoutIncomesInput>
    create: XOR<CategoryCreateWithoutIncomesInput, CategoryUncheckedCreateWithoutIncomesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutIncomesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutIncomesInput, CategoryUncheckedUpdateWithoutIncomesInput>
  }

  export type CategoryUpdateWithoutIncomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    expenses?: ExpenseUpdateManyWithoutCategoryNestedInput
    creditCardPurchases?: CreditCardPurchaseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutIncomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expenses?: ExpenseUncheckedUpdateManyWithoutCategoryNestedInput
    creditCardPurchases?: CreditCardPurchaseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutExpensesInput = {
    id?: string
    name: string
    email: string
    password: string
    incomes?: IncomeCreateNestedManyWithoutUserInput
    creditCards?: CreditCardCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    email: string
    password: string
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type CategoryCreateWithoutExpensesInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    user: UserCreateNestedOneWithoutCategoriesInput
    incomes?: IncomeCreateNestedManyWithoutCategoryInput
    creditCardPurchases?: CreditCardPurchaseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    userId: string
    incomes?: IncomeUncheckedCreateNestedManyWithoutCategoryInput
    creditCardPurchases?: CreditCardPurchaseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutExpensesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    creditCards?: CreditCardUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    creditCards?: CreditCardUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutExpensesInput = {
    update: XOR<CategoryUpdateWithoutExpensesInput, CategoryUncheckedUpdateWithoutExpensesInput>
    create: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutExpensesInput, CategoryUncheckedUpdateWithoutExpensesInput>
  }

  export type CategoryUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    incomes?: IncomeUpdateManyWithoutCategoryNestedInput
    creditCardPurchases?: CreditCardPurchaseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    incomes?: IncomeUncheckedUpdateManyWithoutCategoryNestedInput
    creditCardPurchases?: CreditCardPurchaseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutCreditCardsInput = {
    id?: string
    name: string
    email: string
    password: string
    incomes?: IncomeCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditCardsInput = {
    id?: string
    name: string
    email: string
    password: string
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
  }

  export type InvoiceCreateWithoutCreditCardInput = {
    id?: string
    dueDate: Date | string
    paid: boolean
    installments?: InstallmentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutCreditCardInput = {
    id?: string
    dueDate: Date | string
    paid: boolean
    installments?: InstallmentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutCreditCardInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCreditCardInput, InvoiceUncheckedCreateWithoutCreditCardInput>
  }

  export type InvoiceCreateManyCreditCardInputEnvelope = {
    data: InvoiceCreateManyCreditCardInput | InvoiceCreateManyCreditCardInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreditCardsInput = {
    update: XOR<UserUpdateWithoutCreditCardsInput, UserUncheckedUpdateWithoutCreditCardsInput>
    create: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditCardsInput, UserUncheckedUpdateWithoutCreditCardsInput>
  }

  export type UserUpdateWithoutCreditCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCreditCardInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCreditCardInput, InvoiceUncheckedUpdateWithoutCreditCardInput>
    create: XOR<InvoiceCreateWithoutCreditCardInput, InvoiceUncheckedCreateWithoutCreditCardInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCreditCardInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCreditCardInput, InvoiceUncheckedUpdateWithoutCreditCardInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCreditCardInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCreditCardInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    paid?: BoolFilter<"Invoice"> | boolean
    creditCardId?: StringFilter<"Invoice"> | string
  }

  export type CreditCardCreateWithoutInvoicesInput = {
    id?: string
    name: string
    limit: number
    closingDay: number
    dueDay: number
    user: UserCreateNestedOneWithoutCreditCardsInput
  }

  export type CreditCardUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    limit: number
    closingDay: number
    dueDay: number
    userId: string
  }

  export type CreditCardCreateOrConnectWithoutInvoicesInput = {
    where: CreditCardWhereUniqueInput
    create: XOR<CreditCardCreateWithoutInvoicesInput, CreditCardUncheckedCreateWithoutInvoicesInput>
  }

  export type InstallmentCreateWithoutInvoiceInput = {
    id?: string
    installmentValue: number
    creditCardPurchase: CreditCardPurchaseCreateNestedOneWithoutInstallmentsInput
  }

  export type InstallmentUncheckedCreateWithoutInvoiceInput = {
    id?: string
    installmentValue: number
    creditCardPurchaseId: string
  }

  export type InstallmentCreateOrConnectWithoutInvoiceInput = {
    where: InstallmentWhereUniqueInput
    create: XOR<InstallmentCreateWithoutInvoiceInput, InstallmentUncheckedCreateWithoutInvoiceInput>
  }

  export type InstallmentCreateManyInvoiceInputEnvelope = {
    data: InstallmentCreateManyInvoiceInput | InstallmentCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type CreditCardUpsertWithoutInvoicesInput = {
    update: XOR<CreditCardUpdateWithoutInvoicesInput, CreditCardUncheckedUpdateWithoutInvoicesInput>
    create: XOR<CreditCardCreateWithoutInvoicesInput, CreditCardUncheckedCreateWithoutInvoicesInput>
    where?: CreditCardWhereInput
  }

  export type CreditCardUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: CreditCardWhereInput
    data: XOR<CreditCardUpdateWithoutInvoicesInput, CreditCardUncheckedUpdateWithoutInvoicesInput>
  }

  export type CreditCardUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: FloatFieldUpdateOperationsInput | number
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCreditCardsNestedInput
  }

  export type CreditCardUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: FloatFieldUpdateOperationsInput | number
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InstallmentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InstallmentWhereUniqueInput
    update: XOR<InstallmentUpdateWithoutInvoiceInput, InstallmentUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InstallmentCreateWithoutInvoiceInput, InstallmentUncheckedCreateWithoutInvoiceInput>
  }

  export type InstallmentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InstallmentWhereUniqueInput
    data: XOR<InstallmentUpdateWithoutInvoiceInput, InstallmentUncheckedUpdateWithoutInvoiceInput>
  }

  export type InstallmentUpdateManyWithWhereWithoutInvoiceInput = {
    where: InstallmentScalarWhereInput
    data: XOR<InstallmentUpdateManyMutationInput, InstallmentUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InstallmentScalarWhereInput = {
    AND?: InstallmentScalarWhereInput | InstallmentScalarWhereInput[]
    OR?: InstallmentScalarWhereInput[]
    NOT?: InstallmentScalarWhereInput | InstallmentScalarWhereInput[]
    id?: StringFilter<"Installment"> | string
    installmentValue?: FloatFilter<"Installment"> | number
    invoiceId?: StringFilter<"Installment"> | string
    creditCardPurchaseId?: StringFilter<"Installment"> | string
  }

  export type InvoiceCreateWithoutInstallmentsInput = {
    id?: string
    dueDate: Date | string
    paid: boolean
    creditCard: CreditCardCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutInstallmentsInput = {
    id?: string
    dueDate: Date | string
    paid: boolean
    creditCardId: string
  }

  export type InvoiceCreateOrConnectWithoutInstallmentsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutInstallmentsInput, InvoiceUncheckedCreateWithoutInstallmentsInput>
  }

  export type CreditCardPurchaseCreateWithoutInstallmentsInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    purchaseDate: Date | string
    installmentsNumber: number
    category: CategoryCreateNestedOneWithoutCreditCardPurchasesInput
  }

  export type CreditCardPurchaseUncheckedCreateWithoutInstallmentsInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    purchaseDate: Date | string
    installmentsNumber: number
    categoryId: string
  }

  export type CreditCardPurchaseCreateOrConnectWithoutInstallmentsInput = {
    where: CreditCardPurchaseWhereUniqueInput
    create: XOR<CreditCardPurchaseCreateWithoutInstallmentsInput, CreditCardPurchaseUncheckedCreateWithoutInstallmentsInput>
  }

  export type InvoiceUpsertWithoutInstallmentsInput = {
    update: XOR<InvoiceUpdateWithoutInstallmentsInput, InvoiceUncheckedUpdateWithoutInstallmentsInput>
    create: XOR<InvoiceCreateWithoutInstallmentsInput, InvoiceUncheckedCreateWithoutInstallmentsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutInstallmentsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutInstallmentsInput, InvoiceUncheckedUpdateWithoutInstallmentsInput>
  }

  export type InvoiceUpdateWithoutInstallmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    creditCard?: CreditCardUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutInstallmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    creditCardId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditCardPurchaseUpsertWithoutInstallmentsInput = {
    update: XOR<CreditCardPurchaseUpdateWithoutInstallmentsInput, CreditCardPurchaseUncheckedUpdateWithoutInstallmentsInput>
    create: XOR<CreditCardPurchaseCreateWithoutInstallmentsInput, CreditCardPurchaseUncheckedCreateWithoutInstallmentsInput>
    where?: CreditCardPurchaseWhereInput
  }

  export type CreditCardPurchaseUpdateToOneWithWhereWithoutInstallmentsInput = {
    where?: CreditCardPurchaseWhereInput
    data: XOR<CreditCardPurchaseUpdateWithoutInstallmentsInput, CreditCardPurchaseUncheckedUpdateWithoutInstallmentsInput>
  }

  export type CreditCardPurchaseUpdateWithoutInstallmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentsNumber?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutCreditCardPurchasesNestedInput
  }

  export type CreditCardPurchaseUncheckedUpdateWithoutInstallmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentsNumber?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateWithoutCreditCardPurchasesInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    user: UserCreateNestedOneWithoutCategoriesInput
    expenses?: ExpenseCreateNestedManyWithoutCategoryInput
    incomes?: IncomeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutCreditCardPurchasesInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
    userId: string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCategoryInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCreditCardPurchasesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCreditCardPurchasesInput, CategoryUncheckedCreateWithoutCreditCardPurchasesInput>
  }

  export type InstallmentCreateWithoutCreditCardPurchaseInput = {
    id?: string
    installmentValue: number
    invoice: InvoiceCreateNestedOneWithoutInstallmentsInput
  }

  export type InstallmentUncheckedCreateWithoutCreditCardPurchaseInput = {
    id?: string
    installmentValue: number
    invoiceId: string
  }

  export type InstallmentCreateOrConnectWithoutCreditCardPurchaseInput = {
    where: InstallmentWhereUniqueInput
    create: XOR<InstallmentCreateWithoutCreditCardPurchaseInput, InstallmentUncheckedCreateWithoutCreditCardPurchaseInput>
  }

  export type InstallmentCreateManyCreditCardPurchaseInputEnvelope = {
    data: InstallmentCreateManyCreditCardPurchaseInput | InstallmentCreateManyCreditCardPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutCreditCardPurchasesInput = {
    update: XOR<CategoryUpdateWithoutCreditCardPurchasesInput, CategoryUncheckedUpdateWithoutCreditCardPurchasesInput>
    create: XOR<CategoryCreateWithoutCreditCardPurchasesInput, CategoryUncheckedCreateWithoutCreditCardPurchasesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCreditCardPurchasesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCreditCardPurchasesInput, CategoryUncheckedUpdateWithoutCreditCardPurchasesInput>
  }

  export type CategoryUpdateWithoutCreditCardPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    expenses?: ExpenseUpdateManyWithoutCategoryNestedInput
    incomes?: IncomeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCreditCardPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expenses?: ExpenseUncheckedUpdateManyWithoutCategoryNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type InstallmentUpsertWithWhereUniqueWithoutCreditCardPurchaseInput = {
    where: InstallmentWhereUniqueInput
    update: XOR<InstallmentUpdateWithoutCreditCardPurchaseInput, InstallmentUncheckedUpdateWithoutCreditCardPurchaseInput>
    create: XOR<InstallmentCreateWithoutCreditCardPurchaseInput, InstallmentUncheckedCreateWithoutCreditCardPurchaseInput>
  }

  export type InstallmentUpdateWithWhereUniqueWithoutCreditCardPurchaseInput = {
    where: InstallmentWhereUniqueInput
    data: XOR<InstallmentUpdateWithoutCreditCardPurchaseInput, InstallmentUncheckedUpdateWithoutCreditCardPurchaseInput>
  }

  export type InstallmentUpdateManyWithWhereWithoutCreditCardPurchaseInput = {
    where: InstallmentScalarWhereInput
    data: XOR<InstallmentUpdateManyMutationInput, InstallmentUncheckedUpdateManyWithoutCreditCardPurchaseInput>
  }

  export type IncomeCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    received: boolean
    categoryId: string
  }

  export type ExpenseCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    paid: boolean
    categoryId: string
  }

  export type CreditCardCreateManyUserInput = {
    id?: string
    name: string
    limit: number
    closingDay: number
    dueDay: number
  }

  export type CategoryCreateManyUserInput = {
    id?: string
    name: string
    isExpense: boolean
    icon: string
  }

  export type IncomeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneRequiredWithoutIncomesNestedInput
  }

  export type IncomeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditCardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: FloatFieldUpdateOperationsInput | number
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCreditCardNestedInput
  }

  export type CreditCardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: FloatFieldUpdateOperationsInput | number
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCreditCardNestedInput
  }

  export type CreditCardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limit?: FloatFieldUpdateOperationsInput | number
    closingDay?: IntFieldUpdateOperationsInput | number
    dueDay?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    expenses?: ExpenseUpdateManyWithoutCategoryNestedInput
    incomes?: IncomeUpdateManyWithoutCategoryNestedInput
    creditCardPurchases?: CreditCardPurchaseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    expenses?: ExpenseUncheckedUpdateManyWithoutCategoryNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutCategoryNestedInput
    creditCardPurchases?: CreditCardPurchaseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isExpense?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    paid: boolean
    userId: string
  }

  export type IncomeCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    date: Date | string
    received: boolean
    userId: string
  }

  export type CreditCardPurchaseCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    value: number
    purchaseDate: Date | string
    installmentsNumber: number
  }

  export type ExpenseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutIncomesNestedInput
  }

  export type IncomeUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditCardPurchaseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentsNumber?: IntFieldUpdateOperationsInput | number
    installments?: InstallmentUpdateManyWithoutCreditCardPurchaseNestedInput
  }

  export type CreditCardPurchaseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentsNumber?: IntFieldUpdateOperationsInput | number
    installments?: InstallmentUncheckedUpdateManyWithoutCreditCardPurchaseNestedInput
  }

  export type CreditCardPurchaseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installmentsNumber?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceCreateManyCreditCardInput = {
    id?: string
    dueDate: Date | string
    paid: boolean
  }

  export type InvoiceUpdateWithoutCreditCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    installments?: InstallmentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutCreditCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    installments?: InstallmentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutCreditCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InstallmentCreateManyInvoiceInput = {
    id?: string
    installmentValue: number
    creditCardPurchaseId: string
  }

  export type InstallmentUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentValue?: FloatFieldUpdateOperationsInput | number
    creditCardPurchase?: CreditCardPurchaseUpdateOneRequiredWithoutInstallmentsNestedInput
  }

  export type InstallmentUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentValue?: FloatFieldUpdateOperationsInput | number
    creditCardPurchaseId?: StringFieldUpdateOperationsInput | string
  }

  export type InstallmentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentValue?: FloatFieldUpdateOperationsInput | number
    creditCardPurchaseId?: StringFieldUpdateOperationsInput | string
  }

  export type InstallmentCreateManyCreditCardPurchaseInput = {
    id?: string
    installmentValue: number
    invoiceId: string
  }

  export type InstallmentUpdateWithoutCreditCardPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentValue?: FloatFieldUpdateOperationsInput | number
    invoice?: InvoiceUpdateOneRequiredWithoutInstallmentsNestedInput
  }

  export type InstallmentUncheckedUpdateWithoutCreditCardPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentValue?: FloatFieldUpdateOperationsInput | number
    invoiceId?: StringFieldUpdateOperationsInput | string
  }

  export type InstallmentUncheckedUpdateManyWithoutCreditCardPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    installmentValue?: FloatFieldUpdateOperationsInput | number
    invoiceId?: StringFieldUpdateOperationsInput | string
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