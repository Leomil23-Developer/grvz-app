
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model AccountRole
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type AccountRole = $Result.DefaultSelection<Prisma.$AccountRolePayload>
/**
 * Model AdminNotification
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type AdminNotification = $Result.DefaultSelection<Prisma.$AdminNotificationPayload>
/**
 * Model Attendance
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Chapters
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Chapters = $Result.DefaultSelection<Prisma.$ChaptersPayload>
/**
 * Model Event
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Members
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Members = $Result.DefaultSelection<Prisma.$MembersPayload>
/**
 * Model NotificationReadStatus
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type NotificationReadStatus = $Result.DefaultSelection<Prisma.$NotificationReadStatusPayload>
/**
 * Model Role
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountRole`: Exposes CRUD operations for the **AccountRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountRoles
    * const accountRoles = await prisma.accountRole.findMany()
    * ```
    */
  get accountRole(): Prisma.AccountRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminNotification`: Exposes CRUD operations for the **AdminNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminNotifications
    * const adminNotifications = await prisma.adminNotification.findMany()
    * ```
    */
  get adminNotification(): Prisma.AdminNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapters`: Exposes CRUD operations for the **Chapters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapters.findMany()
    * ```
    */
  get chapters(): Prisma.ChaptersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.members`: Exposes CRUD operations for the **Members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.members.findMany()
    * ```
    */
  get members(): Prisma.MembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationReadStatus`: Exposes CRUD operations for the **NotificationReadStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationReadStatuses
    * const notificationReadStatuses = await prisma.notificationReadStatus.findMany()
    * ```
    */
  get notificationReadStatus(): Prisma.NotificationReadStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Account: 'Account',
    AccountRole: 'AccountRole',
    AdminNotification: 'AdminNotification',
    Attendance: 'Attendance',
    Chapters: 'Chapters',
    Event: 'Event',
    Members: 'Members',
    NotificationReadStatus: 'NotificationReadStatus',
    Role: 'Role'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "accountRole" | "adminNotification" | "attendance" | "chapters" | "event" | "members" | "notificationReadStatus" | "role"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      AccountRole: {
        payload: Prisma.$AccountRolePayload<ExtArgs>
        fields: Prisma.AccountRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload>
          }
          findFirst: {
            args: Prisma.AccountRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload>
          }
          findMany: {
            args: Prisma.AccountRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload>[]
          }
          create: {
            args: Prisma.AccountRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload>
          }
          createMany: {
            args: Prisma.AccountRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload>[]
          }
          delete: {
            args: Prisma.AccountRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload>
          }
          update: {
            args: Prisma.AccountRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload>
          }
          deleteMany: {
            args: Prisma.AccountRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload>[]
          }
          upsert: {
            args: Prisma.AccountRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountRolePayload>
          }
          aggregate: {
            args: Prisma.AccountRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountRole>
          }
          groupBy: {
            args: Prisma.AccountRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountRoleCountArgs<ExtArgs>
            result: $Utils.Optional<AccountRoleCountAggregateOutputType> | number
          }
        }
      }
      AdminNotification: {
        payload: Prisma.$AdminNotificationPayload<ExtArgs>
        fields: Prisma.AdminNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload>
          }
          findFirst: {
            args: Prisma.AdminNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload>
          }
          findMany: {
            args: Prisma.AdminNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload>[]
          }
          create: {
            args: Prisma.AdminNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload>
          }
          createMany: {
            args: Prisma.AdminNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload>[]
          }
          delete: {
            args: Prisma.AdminNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload>
          }
          update: {
            args: Prisma.AdminNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload>
          }
          deleteMany: {
            args: Prisma.AdminNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload>[]
          }
          upsert: {
            args: Prisma.AdminNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminNotificationPayload>
          }
          aggregate: {
            args: Prisma.AdminNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminNotification>
          }
          groupBy: {
            args: Prisma.AdminNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<AdminNotificationCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Chapters: {
        payload: Prisma.$ChaptersPayload<ExtArgs>
        fields: Prisma.ChaptersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChaptersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChaptersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          findFirst: {
            args: Prisma.ChaptersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChaptersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          findMany: {
            args: Prisma.ChaptersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>[]
          }
          create: {
            args: Prisma.ChaptersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          createMany: {
            args: Prisma.ChaptersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChaptersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>[]
          }
          delete: {
            args: Prisma.ChaptersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          update: {
            args: Prisma.ChaptersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          deleteMany: {
            args: Prisma.ChaptersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChaptersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChaptersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>[]
          }
          upsert: {
            args: Prisma.ChaptersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaptersPayload>
          }
          aggregate: {
            args: Prisma.ChaptersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapters>
          }
          groupBy: {
            args: Prisma.ChaptersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChaptersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChaptersCountArgs<ExtArgs>
            result: $Utils.Optional<ChaptersCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Members: {
        payload: Prisma.$MembersPayload<ExtArgs>
        fields: Prisma.MembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          findFirst: {
            args: Prisma.MembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          findMany: {
            args: Prisma.MembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>[]
          }
          create: {
            args: Prisma.MembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          createMany: {
            args: Prisma.MembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>[]
          }
          delete: {
            args: Prisma.MembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          update: {
            args: Prisma.MembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          deleteMany: {
            args: Prisma.MembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>[]
          }
          upsert: {
            args: Prisma.MembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          aggregate: {
            args: Prisma.MembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembers>
          }
          groupBy: {
            args: Prisma.MembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembersCountArgs<ExtArgs>
            result: $Utils.Optional<MembersCountAggregateOutputType> | number
          }
        }
      }
      NotificationReadStatus: {
        payload: Prisma.$NotificationReadStatusPayload<ExtArgs>
        fields: Prisma.NotificationReadStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationReadStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationReadStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload>
          }
          findFirst: {
            args: Prisma.NotificationReadStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationReadStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload>
          }
          findMany: {
            args: Prisma.NotificationReadStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload>[]
          }
          create: {
            args: Prisma.NotificationReadStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload>
          }
          createMany: {
            args: Prisma.NotificationReadStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationReadStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload>[]
          }
          delete: {
            args: Prisma.NotificationReadStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload>
          }
          update: {
            args: Prisma.NotificationReadStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload>
          }
          deleteMany: {
            args: Prisma.NotificationReadStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationReadStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationReadStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload>[]
          }
          upsert: {
            args: Prisma.NotificationReadStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadStatusPayload>
          }
          aggregate: {
            args: Prisma.NotificationReadStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationReadStatus>
          }
          groupBy: {
            args: Prisma.NotificationReadStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationReadStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationReadStatusCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationReadStatusCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    accountRole?: AccountRoleOmit
    adminNotification?: AdminNotificationOmit
    attendance?: AttendanceOmit
    chapters?: ChaptersOmit
    event?: EventOmit
    members?: MembersOmit
    notificationReadStatus?: NotificationReadStatusOmit
    role?: RoleOmit
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
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    AccountRole: number
    Attendance: number
    Members_Members_account_idToAccount: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AccountRole?: boolean | AccountCountOutputTypeCountAccountRoleArgs
    Attendance?: boolean | AccountCountOutputTypeCountAttendanceArgs
    Members_Members_account_idToAccount?: boolean | AccountCountOutputTypeCountMembers_Members_account_idToAccountArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountAccountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountRoleWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountMembers_Members_account_idToAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersWhereInput
  }


  /**
   * Count Type ChaptersCountOutputType
   */

  export type ChaptersCountOutputType = {
    Event: number
  }

  export type ChaptersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | ChaptersCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * ChaptersCountOutputType without action
   */
  export type ChaptersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaptersCountOutputType
     */
    select?: ChaptersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChaptersCountOutputType without action
   */
  export type ChaptersCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    Attendance: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | EventCountOutputTypeCountAttendanceArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type MembersCountOutputType
   */

  export type MembersCountOutputType = {
    Account_Account_recruiter_idToMembers: number
  }

  export type MembersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Account_recruiter_idToMembers?: boolean | MembersCountOutputTypeCountAccount_Account_recruiter_idToMembersArgs
  }

  // Custom InputTypes
  /**
   * MembersCountOutputType without action
   */
  export type MembersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersCountOutputType
     */
    select?: MembersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MembersCountOutputType without action
   */
  export type MembersCountOutputTypeCountAccount_Account_recruiter_idToMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    AccountRole: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AccountRole?: boolean | RoleCountOutputTypeCountAccountRoleArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountAccountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountRoleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    recruiter_id: string | null
    accntStatus: string | null
    created_at: Date | null
    fullname: string | null
    email: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    recruiter_id: string | null
    accntStatus: string | null
    created_at: Date | null
    fullname: string | null
    email: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    username: number
    password: number
    recruiter_id: number
    accntStatus: number
    created_at: number
    fullname: number
    email: number
    resetToken: number
    resetTokenExpiry: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    recruiter_id?: true
    accntStatus?: true
    created_at?: true
    fullname?: true
    email?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    recruiter_id?: true
    accntStatus?: true
    created_at?: true
    fullname?: true
    email?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    recruiter_id?: true
    accntStatus?: true
    created_at?: true
    fullname?: true
    email?: true
    resetToken?: true
    resetTokenExpiry?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    username: string
    password: string
    recruiter_id: string | null
    accntStatus: string | null
    created_at: Date
    fullname: string | null
    email: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    recruiter_id?: boolean
    accntStatus?: boolean
    created_at?: boolean
    fullname?: boolean
    email?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    Members_Account_recruiter_idToMembers?: boolean | Account$Members_Account_recruiter_idToMembersArgs<ExtArgs>
    AccountRole?: boolean | Account$AccountRoleArgs<ExtArgs>
    Attendance?: boolean | Account$AttendanceArgs<ExtArgs>
    Members_Members_account_idToAccount?: boolean | Account$Members_Members_account_idToAccountArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    recruiter_id?: boolean
    accntStatus?: boolean
    created_at?: boolean
    fullname?: boolean
    email?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    Members_Account_recruiter_idToMembers?: boolean | Account$Members_Account_recruiter_idToMembersArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    recruiter_id?: boolean
    accntStatus?: boolean
    created_at?: boolean
    fullname?: boolean
    email?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    Members_Account_recruiter_idToMembers?: boolean | Account$Members_Account_recruiter_idToMembersArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    recruiter_id?: boolean
    accntStatus?: boolean
    created_at?: boolean
    fullname?: boolean
    email?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "recruiter_id" | "accntStatus" | "created_at" | "fullname" | "email" | "resetToken" | "resetTokenExpiry", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Members_Account_recruiter_idToMembers?: boolean | Account$Members_Account_recruiter_idToMembersArgs<ExtArgs>
    AccountRole?: boolean | Account$AccountRoleArgs<ExtArgs>
    Attendance?: boolean | Account$AttendanceArgs<ExtArgs>
    Members_Members_account_idToAccount?: boolean | Account$Members_Members_account_idToAccountArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Members_Account_recruiter_idToMembers?: boolean | Account$Members_Account_recruiter_idToMembersArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Members_Account_recruiter_idToMembers?: boolean | Account$Members_Account_recruiter_idToMembersArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      Members_Account_recruiter_idToMembers: Prisma.$MembersPayload<ExtArgs> | null
      AccountRole: Prisma.$AccountRolePayload<ExtArgs>[]
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
      Members_Members_account_idToAccount: Prisma.$MembersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      recruiter_id: string | null
      accntStatus: string | null
      created_at: Date
      fullname: string | null
      email: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Members_Account_recruiter_idToMembers<T extends Account$Members_Account_recruiter_idToMembersArgs<ExtArgs> = {}>(args?: Subset<T, Account$Members_Account_recruiter_idToMembersArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    AccountRole<T extends Account$AccountRoleArgs<ExtArgs> = {}>(args?: Subset<T, Account$AccountRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Attendance<T extends Account$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Account$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Members_Members_account_idToAccount<T extends Account$Members_Members_account_idToAccountArgs<ExtArgs> = {}>(args?: Subset<T, Account$Members_Members_account_idToAccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly username: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly recruiter_id: FieldRef<"Account", 'String'>
    readonly accntStatus: FieldRef<"Account", 'String'>
    readonly created_at: FieldRef<"Account", 'DateTime'>
    readonly fullname: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly resetToken: FieldRef<"Account", 'String'>
    readonly resetTokenExpiry: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.Members_Account_recruiter_idToMembers
   */
  export type Account$Members_Account_recruiter_idToMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    where?: MembersWhereInput
  }

  /**
   * Account.AccountRole
   */
  export type Account$AccountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    where?: AccountRoleWhereInput
    orderBy?: AccountRoleOrderByWithRelationInput | AccountRoleOrderByWithRelationInput[]
    cursor?: AccountRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountRoleScalarFieldEnum | AccountRoleScalarFieldEnum[]
  }

  /**
   * Account.Attendance
   */
  export type Account$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Account.Members_Members_account_idToAccount
   */
  export type Account$Members_Members_account_idToAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    where?: MembersWhereInput
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    cursor?: MembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model AccountRole
   */

  export type AggregateAccountRole = {
    _count: AccountRoleCountAggregateOutputType | null
    _avg: AccountRoleAvgAggregateOutputType | null
    _sum: AccountRoleSumAggregateOutputType | null
    _min: AccountRoleMinAggregateOutputType | null
    _max: AccountRoleMaxAggregateOutputType | null
  }

  export type AccountRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountRoleSumAggregateOutputType = {
    id: number | null
  }

  export type AccountRoleMinAggregateOutputType = {
    id: number | null
    account_id: string | null
    role_id: string | null
    created_at: Date | null
  }

  export type AccountRoleMaxAggregateOutputType = {
    id: number | null
    account_id: string | null
    role_id: string | null
    created_at: Date | null
  }

  export type AccountRoleCountAggregateOutputType = {
    id: number
    account_id: number
    role_id: number
    created_at: number
    _all: number
  }


  export type AccountRoleAvgAggregateInputType = {
    id?: true
  }

  export type AccountRoleSumAggregateInputType = {
    id?: true
  }

  export type AccountRoleMinAggregateInputType = {
    id?: true
    account_id?: true
    role_id?: true
    created_at?: true
  }

  export type AccountRoleMaxAggregateInputType = {
    id?: true
    account_id?: true
    role_id?: true
    created_at?: true
  }

  export type AccountRoleCountAggregateInputType = {
    id?: true
    account_id?: true
    role_id?: true
    created_at?: true
    _all?: true
  }

  export type AccountRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountRole to aggregate.
     */
    where?: AccountRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountRoles to fetch.
     */
    orderBy?: AccountRoleOrderByWithRelationInput | AccountRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountRoles
    **/
    _count?: true | AccountRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountRoleMaxAggregateInputType
  }

  export type GetAccountRoleAggregateType<T extends AccountRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountRole[P]>
      : GetScalarType<T[P], AggregateAccountRole[P]>
  }




  export type AccountRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountRoleWhereInput
    orderBy?: AccountRoleOrderByWithAggregationInput | AccountRoleOrderByWithAggregationInput[]
    by: AccountRoleScalarFieldEnum[] | AccountRoleScalarFieldEnum
    having?: AccountRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountRoleCountAggregateInputType | true
    _avg?: AccountRoleAvgAggregateInputType
    _sum?: AccountRoleSumAggregateInputType
    _min?: AccountRoleMinAggregateInputType
    _max?: AccountRoleMaxAggregateInputType
  }

  export type AccountRoleGroupByOutputType = {
    id: number
    account_id: string
    role_id: string
    created_at: Date
    _count: AccountRoleCountAggregateOutputType | null
    _avg: AccountRoleAvgAggregateOutputType | null
    _sum: AccountRoleSumAggregateOutputType | null
    _min: AccountRoleMinAggregateOutputType | null
    _max: AccountRoleMaxAggregateOutputType | null
  }

  type GetAccountRoleGroupByPayload<T extends AccountRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountRoleGroupByOutputType[P]>
            : GetScalarType<T[P], AccountRoleGroupByOutputType[P]>
        }
      >
    >


  export type AccountRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    role_id?: boolean
    created_at?: boolean
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountRole"]>

  export type AccountRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    role_id?: boolean
    created_at?: boolean
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountRole"]>

  export type AccountRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    role_id?: boolean
    created_at?: boolean
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountRole"]>

  export type AccountRoleSelectScalar = {
    id?: boolean
    account_id?: boolean
    role_id?: boolean
    created_at?: boolean
  }

  export type AccountRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "role_id" | "created_at", ExtArgs["result"]["accountRole"]>
  export type AccountRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type AccountRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type AccountRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $AccountRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountRole"
    objects: {
      Account: Prisma.$AccountPayload<ExtArgs>
      Role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_id: string
      role_id: string
      created_at: Date
    }, ExtArgs["result"]["accountRole"]>
    composites: {}
  }

  type AccountRoleGetPayload<S extends boolean | null | undefined | AccountRoleDefaultArgs> = $Result.GetResult<Prisma.$AccountRolePayload, S>

  type AccountRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountRoleCountAggregateInputType | true
    }

  export interface AccountRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountRole'], meta: { name: 'AccountRole' } }
    /**
     * Find zero or one AccountRole that matches the filter.
     * @param {AccountRoleFindUniqueArgs} args - Arguments to find a AccountRole
     * @example
     * // Get one AccountRole
     * const accountRole = await prisma.accountRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountRoleFindUniqueArgs>(args: SelectSubset<T, AccountRoleFindUniqueArgs<ExtArgs>>): Prisma__AccountRoleClient<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountRoleFindUniqueOrThrowArgs} args - Arguments to find a AccountRole
     * @example
     * // Get one AccountRole
     * const accountRole = await prisma.accountRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountRoleClient<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountRoleFindFirstArgs} args - Arguments to find a AccountRole
     * @example
     * // Get one AccountRole
     * const accountRole = await prisma.accountRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountRoleFindFirstArgs>(args?: SelectSubset<T, AccountRoleFindFirstArgs<ExtArgs>>): Prisma__AccountRoleClient<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountRoleFindFirstOrThrowArgs} args - Arguments to find a AccountRole
     * @example
     * // Get one AccountRole
     * const accountRole = await prisma.accountRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountRoleClient<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountRoles
     * const accountRoles = await prisma.accountRole.findMany()
     * 
     * // Get first 10 AccountRoles
     * const accountRoles = await prisma.accountRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountRoleWithIdOnly = await prisma.accountRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountRoleFindManyArgs>(args?: SelectSubset<T, AccountRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountRole.
     * @param {AccountRoleCreateArgs} args - Arguments to create a AccountRole.
     * @example
     * // Create one AccountRole
     * const AccountRole = await prisma.accountRole.create({
     *   data: {
     *     // ... data to create a AccountRole
     *   }
     * })
     * 
     */
    create<T extends AccountRoleCreateArgs>(args: SelectSubset<T, AccountRoleCreateArgs<ExtArgs>>): Prisma__AccountRoleClient<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountRoles.
     * @param {AccountRoleCreateManyArgs} args - Arguments to create many AccountRoles.
     * @example
     * // Create many AccountRoles
     * const accountRole = await prisma.accountRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountRoleCreateManyArgs>(args?: SelectSubset<T, AccountRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountRoles and returns the data saved in the database.
     * @param {AccountRoleCreateManyAndReturnArgs} args - Arguments to create many AccountRoles.
     * @example
     * // Create many AccountRoles
     * const accountRole = await prisma.accountRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountRoles and only return the `id`
     * const accountRoleWithIdOnly = await prisma.accountRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountRole.
     * @param {AccountRoleDeleteArgs} args - Arguments to delete one AccountRole.
     * @example
     * // Delete one AccountRole
     * const AccountRole = await prisma.accountRole.delete({
     *   where: {
     *     // ... filter to delete one AccountRole
     *   }
     * })
     * 
     */
    delete<T extends AccountRoleDeleteArgs>(args: SelectSubset<T, AccountRoleDeleteArgs<ExtArgs>>): Prisma__AccountRoleClient<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountRole.
     * @param {AccountRoleUpdateArgs} args - Arguments to update one AccountRole.
     * @example
     * // Update one AccountRole
     * const accountRole = await prisma.accountRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountRoleUpdateArgs>(args: SelectSubset<T, AccountRoleUpdateArgs<ExtArgs>>): Prisma__AccountRoleClient<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountRoles.
     * @param {AccountRoleDeleteManyArgs} args - Arguments to filter AccountRoles to delete.
     * @example
     * // Delete a few AccountRoles
     * const { count } = await prisma.accountRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountRoleDeleteManyArgs>(args?: SelectSubset<T, AccountRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountRoles
     * const accountRole = await prisma.accountRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountRoleUpdateManyArgs>(args: SelectSubset<T, AccountRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountRoles and returns the data updated in the database.
     * @param {AccountRoleUpdateManyAndReturnArgs} args - Arguments to update many AccountRoles.
     * @example
     * // Update many AccountRoles
     * const accountRole = await prisma.accountRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountRoles and only return the `id`
     * const accountRoleWithIdOnly = await prisma.accountRole.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountRole.
     * @param {AccountRoleUpsertArgs} args - Arguments to update or create a AccountRole.
     * @example
     * // Update or create a AccountRole
     * const accountRole = await prisma.accountRole.upsert({
     *   create: {
     *     // ... data to create a AccountRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountRole we want to update
     *   }
     * })
     */
    upsert<T extends AccountRoleUpsertArgs>(args: SelectSubset<T, AccountRoleUpsertArgs<ExtArgs>>): Prisma__AccountRoleClient<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountRoleCountArgs} args - Arguments to filter AccountRoles to count.
     * @example
     * // Count the number of AccountRoles
     * const count = await prisma.accountRole.count({
     *   where: {
     *     // ... the filter for the AccountRoles we want to count
     *   }
     * })
    **/
    count<T extends AccountRoleCountArgs>(
      args?: Subset<T, AccountRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountRoleAggregateArgs>(args: Subset<T, AccountRoleAggregateArgs>): Prisma.PrismaPromise<GetAccountRoleAggregateType<T>>

    /**
     * Group by AccountRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountRoleGroupByArgs} args - Group by arguments.
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
      T extends AccountRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountRoleGroupByArgs['orderBy'] }
        : { orderBy?: AccountRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountRole model
   */
  readonly fields: AccountRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AccountRole model
   */
  interface AccountRoleFieldRefs {
    readonly id: FieldRef<"AccountRole", 'Int'>
    readonly account_id: FieldRef<"AccountRole", 'String'>
    readonly role_id: FieldRef<"AccountRole", 'String'>
    readonly created_at: FieldRef<"AccountRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountRole findUnique
   */
  export type AccountRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    /**
     * Filter, which AccountRole to fetch.
     */
    where: AccountRoleWhereUniqueInput
  }

  /**
   * AccountRole findUniqueOrThrow
   */
  export type AccountRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    /**
     * Filter, which AccountRole to fetch.
     */
    where: AccountRoleWhereUniqueInput
  }

  /**
   * AccountRole findFirst
   */
  export type AccountRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    /**
     * Filter, which AccountRole to fetch.
     */
    where?: AccountRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountRoles to fetch.
     */
    orderBy?: AccountRoleOrderByWithRelationInput | AccountRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountRoles.
     */
    cursor?: AccountRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountRoles.
     */
    distinct?: AccountRoleScalarFieldEnum | AccountRoleScalarFieldEnum[]
  }

  /**
   * AccountRole findFirstOrThrow
   */
  export type AccountRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    /**
     * Filter, which AccountRole to fetch.
     */
    where?: AccountRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountRoles to fetch.
     */
    orderBy?: AccountRoleOrderByWithRelationInput | AccountRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountRoles.
     */
    cursor?: AccountRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountRoles.
     */
    distinct?: AccountRoleScalarFieldEnum | AccountRoleScalarFieldEnum[]
  }

  /**
   * AccountRole findMany
   */
  export type AccountRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    /**
     * Filter, which AccountRoles to fetch.
     */
    where?: AccountRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountRoles to fetch.
     */
    orderBy?: AccountRoleOrderByWithRelationInput | AccountRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountRoles.
     */
    cursor?: AccountRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountRoles.
     */
    skip?: number
    distinct?: AccountRoleScalarFieldEnum | AccountRoleScalarFieldEnum[]
  }

  /**
   * AccountRole create
   */
  export type AccountRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountRole.
     */
    data: XOR<AccountRoleCreateInput, AccountRoleUncheckedCreateInput>
  }

  /**
   * AccountRole createMany
   */
  export type AccountRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountRoles.
     */
    data: AccountRoleCreateManyInput | AccountRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountRole createManyAndReturn
   */
  export type AccountRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * The data used to create many AccountRoles.
     */
    data: AccountRoleCreateManyInput | AccountRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountRole update
   */
  export type AccountRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountRole.
     */
    data: XOR<AccountRoleUpdateInput, AccountRoleUncheckedUpdateInput>
    /**
     * Choose, which AccountRole to update.
     */
    where: AccountRoleWhereUniqueInput
  }

  /**
   * AccountRole updateMany
   */
  export type AccountRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountRoles.
     */
    data: XOR<AccountRoleUpdateManyMutationInput, AccountRoleUncheckedUpdateManyInput>
    /**
     * Filter which AccountRoles to update
     */
    where?: AccountRoleWhereInput
    /**
     * Limit how many AccountRoles to update.
     */
    limit?: number
  }

  /**
   * AccountRole updateManyAndReturn
   */
  export type AccountRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * The data used to update AccountRoles.
     */
    data: XOR<AccountRoleUpdateManyMutationInput, AccountRoleUncheckedUpdateManyInput>
    /**
     * Filter which AccountRoles to update
     */
    where?: AccountRoleWhereInput
    /**
     * Limit how many AccountRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountRole upsert
   */
  export type AccountRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountRole to update in case it exists.
     */
    where: AccountRoleWhereUniqueInput
    /**
     * In case the AccountRole found by the `where` argument doesn't exist, create a new AccountRole with this data.
     */
    create: XOR<AccountRoleCreateInput, AccountRoleUncheckedCreateInput>
    /**
     * In case the AccountRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountRoleUpdateInput, AccountRoleUncheckedUpdateInput>
  }

  /**
   * AccountRole delete
   */
  export type AccountRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    /**
     * Filter which AccountRole to delete.
     */
    where: AccountRoleWhereUniqueInput
  }

  /**
   * AccountRole deleteMany
   */
  export type AccountRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountRoles to delete
     */
    where?: AccountRoleWhereInput
    /**
     * Limit how many AccountRoles to delete.
     */
    limit?: number
  }

  /**
   * AccountRole without action
   */
  export type AccountRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
  }


  /**
   * Model AdminNotification
   */

  export type AggregateAdminNotification = {
    _count: AdminNotificationCountAggregateOutputType | null
    _avg: AdminNotificationAvgAggregateOutputType | null
    _sum: AdminNotificationSumAggregateOutputType | null
    _min: AdminNotificationMinAggregateOutputType | null
    _max: AdminNotificationMaxAggregateOutputType | null
  }

  export type AdminNotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminNotificationSumAggregateOutputType = {
    id: number | null
  }

  export type AdminNotificationMinAggregateOutputType = {
    id: number | null
    recipient_id: string | null
    sender_id: string | null
    title: string | null
    message: string | null
    severity: string | null
    created_at: Date | null
  }

  export type AdminNotificationMaxAggregateOutputType = {
    id: number | null
    recipient_id: string | null
    sender_id: string | null
    title: string | null
    message: string | null
    severity: string | null
    created_at: Date | null
  }

  export type AdminNotificationCountAggregateOutputType = {
    id: number
    recipient_id: number
    sender_id: number
    title: number
    message: number
    severity: number
    created_at: number
    _all: number
  }


  export type AdminNotificationAvgAggregateInputType = {
    id?: true
  }

  export type AdminNotificationSumAggregateInputType = {
    id?: true
  }

  export type AdminNotificationMinAggregateInputType = {
    id?: true
    recipient_id?: true
    sender_id?: true
    title?: true
    message?: true
    severity?: true
    created_at?: true
  }

  export type AdminNotificationMaxAggregateInputType = {
    id?: true
    recipient_id?: true
    sender_id?: true
    title?: true
    message?: true
    severity?: true
    created_at?: true
  }

  export type AdminNotificationCountAggregateInputType = {
    id?: true
    recipient_id?: true
    sender_id?: true
    title?: true
    message?: true
    severity?: true
    created_at?: true
    _all?: true
  }

  export type AdminNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminNotification to aggregate.
     */
    where?: AdminNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminNotifications to fetch.
     */
    orderBy?: AdminNotificationOrderByWithRelationInput | AdminNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminNotifications
    **/
    _count?: true | AdminNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminNotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminNotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminNotificationMaxAggregateInputType
  }

  export type GetAdminNotificationAggregateType<T extends AdminNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminNotification[P]>
      : GetScalarType<T[P], AggregateAdminNotification[P]>
  }




  export type AdminNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminNotificationWhereInput
    orderBy?: AdminNotificationOrderByWithAggregationInput | AdminNotificationOrderByWithAggregationInput[]
    by: AdminNotificationScalarFieldEnum[] | AdminNotificationScalarFieldEnum
    having?: AdminNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminNotificationCountAggregateInputType | true
    _avg?: AdminNotificationAvgAggregateInputType
    _sum?: AdminNotificationSumAggregateInputType
    _min?: AdminNotificationMinAggregateInputType
    _max?: AdminNotificationMaxAggregateInputType
  }

  export type AdminNotificationGroupByOutputType = {
    id: number
    recipient_id: string
    sender_id: string
    title: string
    message: string
    severity: string
    created_at: Date
    _count: AdminNotificationCountAggregateOutputType | null
    _avg: AdminNotificationAvgAggregateOutputType | null
    _sum: AdminNotificationSumAggregateOutputType | null
    _min: AdminNotificationMinAggregateOutputType | null
    _max: AdminNotificationMaxAggregateOutputType | null
  }

  type GetAdminNotificationGroupByPayload<T extends AdminNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], AdminNotificationGroupByOutputType[P]>
        }
      >
    >


  export type AdminNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient_id?: boolean
    sender_id?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["adminNotification"]>

  export type AdminNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient_id?: boolean
    sender_id?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["adminNotification"]>

  export type AdminNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient_id?: boolean
    sender_id?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["adminNotification"]>

  export type AdminNotificationSelectScalar = {
    id?: boolean
    recipient_id?: boolean
    sender_id?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    created_at?: boolean
  }

  export type AdminNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipient_id" | "sender_id" | "title" | "message" | "severity" | "created_at", ExtArgs["result"]["adminNotification"]>

  export type $AdminNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminNotification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recipient_id: string
      sender_id: string
      title: string
      message: string
      severity: string
      created_at: Date
    }, ExtArgs["result"]["adminNotification"]>
    composites: {}
  }

  type AdminNotificationGetPayload<S extends boolean | null | undefined | AdminNotificationDefaultArgs> = $Result.GetResult<Prisma.$AdminNotificationPayload, S>

  type AdminNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminNotificationCountAggregateInputType | true
    }

  export interface AdminNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminNotification'], meta: { name: 'AdminNotification' } }
    /**
     * Find zero or one AdminNotification that matches the filter.
     * @param {AdminNotificationFindUniqueArgs} args - Arguments to find a AdminNotification
     * @example
     * // Get one AdminNotification
     * const adminNotification = await prisma.adminNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminNotificationFindUniqueArgs>(args: SelectSubset<T, AdminNotificationFindUniqueArgs<ExtArgs>>): Prisma__AdminNotificationClient<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminNotificationFindUniqueOrThrowArgs} args - Arguments to find a AdminNotification
     * @example
     * // Get one AdminNotification
     * const adminNotification = await prisma.adminNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminNotificationClient<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminNotificationFindFirstArgs} args - Arguments to find a AdminNotification
     * @example
     * // Get one AdminNotification
     * const adminNotification = await prisma.adminNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminNotificationFindFirstArgs>(args?: SelectSubset<T, AdminNotificationFindFirstArgs<ExtArgs>>): Prisma__AdminNotificationClient<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminNotificationFindFirstOrThrowArgs} args - Arguments to find a AdminNotification
     * @example
     * // Get one AdminNotification
     * const adminNotification = await prisma.adminNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminNotificationClient<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminNotifications
     * const adminNotifications = await prisma.adminNotification.findMany()
     * 
     * // Get first 10 AdminNotifications
     * const adminNotifications = await prisma.adminNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminNotificationWithIdOnly = await prisma.adminNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminNotificationFindManyArgs>(args?: SelectSubset<T, AdminNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminNotification.
     * @param {AdminNotificationCreateArgs} args - Arguments to create a AdminNotification.
     * @example
     * // Create one AdminNotification
     * const AdminNotification = await prisma.adminNotification.create({
     *   data: {
     *     // ... data to create a AdminNotification
     *   }
     * })
     * 
     */
    create<T extends AdminNotificationCreateArgs>(args: SelectSubset<T, AdminNotificationCreateArgs<ExtArgs>>): Prisma__AdminNotificationClient<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminNotifications.
     * @param {AdminNotificationCreateManyArgs} args - Arguments to create many AdminNotifications.
     * @example
     * // Create many AdminNotifications
     * const adminNotification = await prisma.adminNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminNotificationCreateManyArgs>(args?: SelectSubset<T, AdminNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminNotifications and returns the data saved in the database.
     * @param {AdminNotificationCreateManyAndReturnArgs} args - Arguments to create many AdminNotifications.
     * @example
     * // Create many AdminNotifications
     * const adminNotification = await prisma.adminNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminNotifications and only return the `id`
     * const adminNotificationWithIdOnly = await prisma.adminNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminNotification.
     * @param {AdminNotificationDeleteArgs} args - Arguments to delete one AdminNotification.
     * @example
     * // Delete one AdminNotification
     * const AdminNotification = await prisma.adminNotification.delete({
     *   where: {
     *     // ... filter to delete one AdminNotification
     *   }
     * })
     * 
     */
    delete<T extends AdminNotificationDeleteArgs>(args: SelectSubset<T, AdminNotificationDeleteArgs<ExtArgs>>): Prisma__AdminNotificationClient<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminNotification.
     * @param {AdminNotificationUpdateArgs} args - Arguments to update one AdminNotification.
     * @example
     * // Update one AdminNotification
     * const adminNotification = await prisma.adminNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminNotificationUpdateArgs>(args: SelectSubset<T, AdminNotificationUpdateArgs<ExtArgs>>): Prisma__AdminNotificationClient<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminNotifications.
     * @param {AdminNotificationDeleteManyArgs} args - Arguments to filter AdminNotifications to delete.
     * @example
     * // Delete a few AdminNotifications
     * const { count } = await prisma.adminNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminNotificationDeleteManyArgs>(args?: SelectSubset<T, AdminNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminNotifications
     * const adminNotification = await prisma.adminNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminNotificationUpdateManyArgs>(args: SelectSubset<T, AdminNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminNotifications and returns the data updated in the database.
     * @param {AdminNotificationUpdateManyAndReturnArgs} args - Arguments to update many AdminNotifications.
     * @example
     * // Update many AdminNotifications
     * const adminNotification = await prisma.adminNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminNotifications and only return the `id`
     * const adminNotificationWithIdOnly = await prisma.adminNotification.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminNotification.
     * @param {AdminNotificationUpsertArgs} args - Arguments to update or create a AdminNotification.
     * @example
     * // Update or create a AdminNotification
     * const adminNotification = await prisma.adminNotification.upsert({
     *   create: {
     *     // ... data to create a AdminNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminNotification we want to update
     *   }
     * })
     */
    upsert<T extends AdminNotificationUpsertArgs>(args: SelectSubset<T, AdminNotificationUpsertArgs<ExtArgs>>): Prisma__AdminNotificationClient<$Result.GetResult<Prisma.$AdminNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminNotificationCountArgs} args - Arguments to filter AdminNotifications to count.
     * @example
     * // Count the number of AdminNotifications
     * const count = await prisma.adminNotification.count({
     *   where: {
     *     // ... the filter for the AdminNotifications we want to count
     *   }
     * })
    **/
    count<T extends AdminNotificationCountArgs>(
      args?: Subset<T, AdminNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminNotificationAggregateArgs>(args: Subset<T, AdminNotificationAggregateArgs>): Prisma.PrismaPromise<GetAdminNotificationAggregateType<T>>

    /**
     * Group by AdminNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminNotificationGroupByArgs} args - Group by arguments.
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
      T extends AdminNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminNotificationGroupByArgs['orderBy'] }
        : { orderBy?: AdminNotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminNotification model
   */
  readonly fields: AdminNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AdminNotification model
   */
  interface AdminNotificationFieldRefs {
    readonly id: FieldRef<"AdminNotification", 'Int'>
    readonly recipient_id: FieldRef<"AdminNotification", 'String'>
    readonly sender_id: FieldRef<"AdminNotification", 'String'>
    readonly title: FieldRef<"AdminNotification", 'String'>
    readonly message: FieldRef<"AdminNotification", 'String'>
    readonly severity: FieldRef<"AdminNotification", 'String'>
    readonly created_at: FieldRef<"AdminNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminNotification findUnique
   */
  export type AdminNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * Filter, which AdminNotification to fetch.
     */
    where: AdminNotificationWhereUniqueInput
  }

  /**
   * AdminNotification findUniqueOrThrow
   */
  export type AdminNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * Filter, which AdminNotification to fetch.
     */
    where: AdminNotificationWhereUniqueInput
  }

  /**
   * AdminNotification findFirst
   */
  export type AdminNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * Filter, which AdminNotification to fetch.
     */
    where?: AdminNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminNotifications to fetch.
     */
    orderBy?: AdminNotificationOrderByWithRelationInput | AdminNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminNotifications.
     */
    cursor?: AdminNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminNotifications.
     */
    distinct?: AdminNotificationScalarFieldEnum | AdminNotificationScalarFieldEnum[]
  }

  /**
   * AdminNotification findFirstOrThrow
   */
  export type AdminNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * Filter, which AdminNotification to fetch.
     */
    where?: AdminNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminNotifications to fetch.
     */
    orderBy?: AdminNotificationOrderByWithRelationInput | AdminNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminNotifications.
     */
    cursor?: AdminNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminNotifications.
     */
    distinct?: AdminNotificationScalarFieldEnum | AdminNotificationScalarFieldEnum[]
  }

  /**
   * AdminNotification findMany
   */
  export type AdminNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * Filter, which AdminNotifications to fetch.
     */
    where?: AdminNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminNotifications to fetch.
     */
    orderBy?: AdminNotificationOrderByWithRelationInput | AdminNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminNotifications.
     */
    cursor?: AdminNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminNotifications.
     */
    skip?: number
    distinct?: AdminNotificationScalarFieldEnum | AdminNotificationScalarFieldEnum[]
  }

  /**
   * AdminNotification create
   */
  export type AdminNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminNotification.
     */
    data: XOR<AdminNotificationCreateInput, AdminNotificationUncheckedCreateInput>
  }

  /**
   * AdminNotification createMany
   */
  export type AdminNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminNotifications.
     */
    data: AdminNotificationCreateManyInput | AdminNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminNotification createManyAndReturn
   */
  export type AdminNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many AdminNotifications.
     */
    data: AdminNotificationCreateManyInput | AdminNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminNotification update
   */
  export type AdminNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminNotification.
     */
    data: XOR<AdminNotificationUpdateInput, AdminNotificationUncheckedUpdateInput>
    /**
     * Choose, which AdminNotification to update.
     */
    where: AdminNotificationWhereUniqueInput
  }

  /**
   * AdminNotification updateMany
   */
  export type AdminNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminNotifications.
     */
    data: XOR<AdminNotificationUpdateManyMutationInput, AdminNotificationUncheckedUpdateManyInput>
    /**
     * Filter which AdminNotifications to update
     */
    where?: AdminNotificationWhereInput
    /**
     * Limit how many AdminNotifications to update.
     */
    limit?: number
  }

  /**
   * AdminNotification updateManyAndReturn
   */
  export type AdminNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * The data used to update AdminNotifications.
     */
    data: XOR<AdminNotificationUpdateManyMutationInput, AdminNotificationUncheckedUpdateManyInput>
    /**
     * Filter which AdminNotifications to update
     */
    where?: AdminNotificationWhereInput
    /**
     * Limit how many AdminNotifications to update.
     */
    limit?: number
  }

  /**
   * AdminNotification upsert
   */
  export type AdminNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminNotification to update in case it exists.
     */
    where: AdminNotificationWhereUniqueInput
    /**
     * In case the AdminNotification found by the `where` argument doesn't exist, create a new AdminNotification with this data.
     */
    create: XOR<AdminNotificationCreateInput, AdminNotificationUncheckedCreateInput>
    /**
     * In case the AdminNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminNotificationUpdateInput, AdminNotificationUncheckedUpdateInput>
  }

  /**
   * AdminNotification delete
   */
  export type AdminNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
    /**
     * Filter which AdminNotification to delete.
     */
    where: AdminNotificationWhereUniqueInput
  }

  /**
   * AdminNotification deleteMany
   */
  export type AdminNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminNotifications to delete
     */
    where?: AdminNotificationWhereInput
    /**
     * Limit how many AdminNotifications to delete.
     */
    limit?: number
  }

  /**
   * AdminNotification without action
   */
  export type AdminNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminNotification
     */
    select?: AdminNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminNotification
     */
    omit?: AdminNotificationOmit<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    points: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    points: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    account_id: string | null
    points: number | null
    created_at: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    account_id: string | null
    points: number | null
    created_at: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    event_id: number
    account_id: number
    points: number
    created_at: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    event_id?: true
    points?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    event_id?: true
    points?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    event_id?: true
    account_id?: true
    points?: true
    created_at?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    event_id?: true
    account_id?: true
    points?: true
    created_at?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    event_id?: true
    account_id?: true
    points?: true
    created_at?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    event_id: number
    account_id: string
    points: number
    created_at: Date
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    account_id?: boolean
    points?: boolean
    created_at?: boolean
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    account_id?: boolean
    points?: boolean
    created_at?: boolean
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    account_id?: boolean
    points?: boolean
    created_at?: boolean
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    event_id?: boolean
    account_id?: boolean
    points?: boolean
    created_at?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "account_id" | "points" | "created_at", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      Account: Prisma.$AccountPayload<ExtArgs>
      Event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number
      account_id: string
      points: number
      created_at: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'Int'>
    readonly event_id: FieldRef<"Attendance", 'Int'>
    readonly account_id: FieldRef<"Attendance", 'String'>
    readonly points: FieldRef<"Attendance", 'Int'>
    readonly created_at: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Chapters
   */

  export type AggregateChapters = {
    _count: ChaptersCountAggregateOutputType | null
    _avg: ChaptersAvgAggregateOutputType | null
    _sum: ChaptersSumAggregateOutputType | null
    _min: ChaptersMinAggregateOutputType | null
    _max: ChaptersMaxAggregateOutputType | null
  }

  export type ChaptersAvgAggregateOutputType = {
    id: number | null
  }

  export type ChaptersSumAggregateOutputType = {
    id: number | null
  }

  export type ChaptersMinAggregateOutputType = {
    id: number | null
    chapter_name: string | null
    leader: string | null
    asst_leader: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type ChaptersMaxAggregateOutputType = {
    id: number | null
    chapter_name: string | null
    leader: string | null
    asst_leader: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type ChaptersCountAggregateOutputType = {
    id: number
    chapter_name: number
    leader: number
    asst_leader: number
    created_by: number
    created_at: number
    _all: number
  }


  export type ChaptersAvgAggregateInputType = {
    id?: true
  }

  export type ChaptersSumAggregateInputType = {
    id?: true
  }

  export type ChaptersMinAggregateInputType = {
    id?: true
    chapter_name?: true
    leader?: true
    asst_leader?: true
    created_by?: true
    created_at?: true
  }

  export type ChaptersMaxAggregateInputType = {
    id?: true
    chapter_name?: true
    leader?: true
    asst_leader?: true
    created_by?: true
    created_at?: true
  }

  export type ChaptersCountAggregateInputType = {
    id?: true
    chapter_name?: true
    leader?: true
    asst_leader?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type ChaptersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to aggregate.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChaptersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChaptersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChaptersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChaptersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChaptersMaxAggregateInputType
  }

  export type GetChaptersAggregateType<T extends ChaptersAggregateArgs> = {
        [P in keyof T & keyof AggregateChapters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapters[P]>
      : GetScalarType<T[P], AggregateChapters[P]>
  }




  export type ChaptersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChaptersWhereInput
    orderBy?: ChaptersOrderByWithAggregationInput | ChaptersOrderByWithAggregationInput[]
    by: ChaptersScalarFieldEnum[] | ChaptersScalarFieldEnum
    having?: ChaptersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChaptersCountAggregateInputType | true
    _avg?: ChaptersAvgAggregateInputType
    _sum?: ChaptersSumAggregateInputType
    _min?: ChaptersMinAggregateInputType
    _max?: ChaptersMaxAggregateInputType
  }

  export type ChaptersGroupByOutputType = {
    id: number
    chapter_name: string
    leader: string | null
    asst_leader: string | null
    created_by: string | null
    created_at: Date
    _count: ChaptersCountAggregateOutputType | null
    _avg: ChaptersAvgAggregateOutputType | null
    _sum: ChaptersSumAggregateOutputType | null
    _min: ChaptersMinAggregateOutputType | null
    _max: ChaptersMaxAggregateOutputType | null
  }

  type GetChaptersGroupByPayload<T extends ChaptersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChaptersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChaptersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChaptersGroupByOutputType[P]>
            : GetScalarType<T[P], ChaptersGroupByOutputType[P]>
        }
      >
    >


  export type ChaptersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapter_name?: boolean
    leader?: boolean
    asst_leader?: boolean
    created_by?: boolean
    created_at?: boolean
    Event?: boolean | Chapters$EventArgs<ExtArgs>
    _count?: boolean | ChaptersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapters"]>

  export type ChaptersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapter_name?: boolean
    leader?: boolean
    asst_leader?: boolean
    created_by?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["chapters"]>

  export type ChaptersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapter_name?: boolean
    leader?: boolean
    asst_leader?: boolean
    created_by?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["chapters"]>

  export type ChaptersSelectScalar = {
    id?: boolean
    chapter_name?: boolean
    leader?: boolean
    asst_leader?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type ChaptersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chapter_name" | "leader" | "asst_leader" | "created_by" | "created_at", ExtArgs["result"]["chapters"]>
  export type ChaptersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | Chapters$EventArgs<ExtArgs>
    _count?: boolean | ChaptersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChaptersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChaptersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChaptersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapters"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chapter_name: string
      leader: string | null
      asst_leader: string | null
      created_by: string | null
      created_at: Date
    }, ExtArgs["result"]["chapters"]>
    composites: {}
  }

  type ChaptersGetPayload<S extends boolean | null | undefined | ChaptersDefaultArgs> = $Result.GetResult<Prisma.$ChaptersPayload, S>

  type ChaptersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChaptersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChaptersCountAggregateInputType | true
    }

  export interface ChaptersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapters'], meta: { name: 'Chapters' } }
    /**
     * Find zero or one Chapters that matches the filter.
     * @param {ChaptersFindUniqueArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChaptersFindUniqueArgs>(args: SelectSubset<T, ChaptersFindUniqueArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChaptersFindUniqueOrThrowArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChaptersFindUniqueOrThrowArgs>(args: SelectSubset<T, ChaptersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersFindFirstArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChaptersFindFirstArgs>(args?: SelectSubset<T, ChaptersFindFirstArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersFindFirstOrThrowArgs} args - Arguments to find a Chapters
     * @example
     * // Get one Chapters
     * const chapters = await prisma.chapters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChaptersFindFirstOrThrowArgs>(args?: SelectSubset<T, ChaptersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapters.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chaptersWithIdOnly = await prisma.chapters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChaptersFindManyArgs>(args?: SelectSubset<T, ChaptersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapters.
     * @param {ChaptersCreateArgs} args - Arguments to create a Chapters.
     * @example
     * // Create one Chapters
     * const Chapters = await prisma.chapters.create({
     *   data: {
     *     // ... data to create a Chapters
     *   }
     * })
     * 
     */
    create<T extends ChaptersCreateArgs>(args: SelectSubset<T, ChaptersCreateArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChaptersCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapters = await prisma.chapters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChaptersCreateManyArgs>(args?: SelectSubset<T, ChaptersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChaptersCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapters = await prisma.chapters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chaptersWithIdOnly = await prisma.chapters.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChaptersCreateManyAndReturnArgs>(args?: SelectSubset<T, ChaptersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapters.
     * @param {ChaptersDeleteArgs} args - Arguments to delete one Chapters.
     * @example
     * // Delete one Chapters
     * const Chapters = await prisma.chapters.delete({
     *   where: {
     *     // ... filter to delete one Chapters
     *   }
     * })
     * 
     */
    delete<T extends ChaptersDeleteArgs>(args: SelectSubset<T, ChaptersDeleteArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapters.
     * @param {ChaptersUpdateArgs} args - Arguments to update one Chapters.
     * @example
     * // Update one Chapters
     * const chapters = await prisma.chapters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChaptersUpdateArgs>(args: SelectSubset<T, ChaptersUpdateArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChaptersDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChaptersDeleteManyArgs>(args?: SelectSubset<T, ChaptersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapters = await prisma.chapters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChaptersUpdateManyArgs>(args: SelectSubset<T, ChaptersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChaptersUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapters = await prisma.chapters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chaptersWithIdOnly = await prisma.chapters.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChaptersUpdateManyAndReturnArgs>(args: SelectSubset<T, ChaptersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapters.
     * @param {ChaptersUpsertArgs} args - Arguments to update or create a Chapters.
     * @example
     * // Update or create a Chapters
     * const chapters = await prisma.chapters.upsert({
     *   create: {
     *     // ... data to create a Chapters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapters we want to update
     *   }
     * })
     */
    upsert<T extends ChaptersUpsertArgs>(args: SelectSubset<T, ChaptersUpsertArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapters.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChaptersCountArgs>(
      args?: Subset<T, ChaptersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChaptersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChaptersAggregateArgs>(args: Subset<T, ChaptersAggregateArgs>): Prisma.PrismaPromise<GetChaptersAggregateType<T>>

    /**
     * Group by Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaptersGroupByArgs} args - Group by arguments.
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
      T extends ChaptersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChaptersGroupByArgs['orderBy'] }
        : { orderBy?: ChaptersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChaptersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChaptersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapters model
   */
  readonly fields: ChaptersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChaptersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends Chapters$EventArgs<ExtArgs> = {}>(args?: Subset<T, Chapters$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chapters model
   */
  interface ChaptersFieldRefs {
    readonly id: FieldRef<"Chapters", 'Int'>
    readonly chapter_name: FieldRef<"Chapters", 'String'>
    readonly leader: FieldRef<"Chapters", 'String'>
    readonly asst_leader: FieldRef<"Chapters", 'String'>
    readonly created_by: FieldRef<"Chapters", 'String'>
    readonly created_at: FieldRef<"Chapters", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chapters findUnique
   */
  export type ChaptersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters findUniqueOrThrow
   */
  export type ChaptersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters findFirst
   */
  export type ChaptersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * Chapters findFirstOrThrow
   */
  export type ChaptersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * Chapters findMany
   */
  export type ChaptersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChaptersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChaptersOrderByWithRelationInput | ChaptersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChaptersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChaptersScalarFieldEnum | ChaptersScalarFieldEnum[]
  }

  /**
   * Chapters create
   */
  export type ChaptersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapters.
     */
    data: XOR<ChaptersCreateInput, ChaptersUncheckedCreateInput>
  }

  /**
   * Chapters createMany
   */
  export type ChaptersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChaptersCreateManyInput | ChaptersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapters createManyAndReturn
   */
  export type ChaptersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChaptersCreateManyInput | ChaptersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapters update
   */
  export type ChaptersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapters.
     */
    data: XOR<ChaptersUpdateInput, ChaptersUncheckedUpdateInput>
    /**
     * Choose, which Chapters to update.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters updateMany
   */
  export type ChaptersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChaptersUpdateManyMutationInput, ChaptersUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChaptersWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapters updateManyAndReturn
   */
  export type ChaptersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChaptersUpdateManyMutationInput, ChaptersUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChaptersWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapters upsert
   */
  export type ChaptersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapters to update in case it exists.
     */
    where: ChaptersWhereUniqueInput
    /**
     * In case the Chapters found by the `where` argument doesn't exist, create a new Chapters with this data.
     */
    create: XOR<ChaptersCreateInput, ChaptersUncheckedCreateInput>
    /**
     * In case the Chapters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChaptersUpdateInput, ChaptersUncheckedUpdateInput>
  }

  /**
   * Chapters delete
   */
  export type ChaptersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    /**
     * Filter which Chapters to delete.
     */
    where: ChaptersWhereUniqueInput
  }

  /**
   * Chapters deleteMany
   */
  export type ChaptersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChaptersWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapters.Event
   */
  export type Chapters$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Chapters without action
   */
  export type ChaptersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    hosted_by: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    hosted_by: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    event_type: string | null
    hosted_by: number | null
    created_by: string | null
    created_at: Date | null
    event_date: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    event_type: string | null
    hosted_by: number | null
    created_by: string | null
    created_at: Date | null
    event_date: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    address: number
    event_type: number
    hosted_by: number
    created_by: number
    created_at: number
    event_date: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    hosted_by?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    hosted_by?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    event_type?: true
    hosted_by?: true
    created_by?: true
    created_at?: true
    event_date?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    event_type?: true
    hosted_by?: true
    created_by?: true
    created_at?: true
    event_date?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    event_type?: true
    hosted_by?: true
    created_by?: true
    created_at?: true
    event_date?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    name: string
    address: string | null
    event_type: string
    hosted_by: number | null
    created_by: string | null
    created_at: Date
    event_date: Date | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    event_type?: boolean
    hosted_by?: boolean
    created_by?: boolean
    created_at?: boolean
    event_date?: boolean
    Attendance?: boolean | Event$AttendanceArgs<ExtArgs>
    Chapters?: boolean | Event$ChaptersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    event_type?: boolean
    hosted_by?: boolean
    created_by?: boolean
    created_at?: boolean
    event_date?: boolean
    Chapters?: boolean | Event$ChaptersArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    event_type?: boolean
    hosted_by?: boolean
    created_by?: boolean
    created_at?: boolean
    event_date?: boolean
    Chapters?: boolean | Event$ChaptersArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    event_type?: boolean
    hosted_by?: boolean
    created_by?: boolean
    created_at?: boolean
    event_date?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "event_type" | "hosted_by" | "created_by" | "created_at" | "event_date", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | Event$AttendanceArgs<ExtArgs>
    Chapters?: boolean | Event$ChaptersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chapters?: boolean | Event$ChaptersArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chapters?: boolean | Event$ChaptersArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
      Chapters: Prisma.$ChaptersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      event_type: string
      hosted_by: number | null
      created_by: string | null
      created_at: Date
      event_date: Date | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Attendance<T extends Event$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Event$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Chapters<T extends Event$ChaptersArgs<ExtArgs> = {}>(args?: Subset<T, Event$ChaptersArgs<ExtArgs>>): Prisma__ChaptersClient<$Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly name: FieldRef<"Event", 'String'>
    readonly address: FieldRef<"Event", 'String'>
    readonly event_type: FieldRef<"Event", 'String'>
    readonly hosted_by: FieldRef<"Event", 'Int'>
    readonly created_by: FieldRef<"Event", 'String'>
    readonly created_at: FieldRef<"Event", 'DateTime'>
    readonly event_date: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.Attendance
   */
  export type Event$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Event.Chapters
   */
  export type Event$ChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: ChaptersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapters
     */
    omit?: ChaptersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChaptersInclude<ExtArgs> | null
    where?: ChaptersWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Members
   */

  export type AggregateMembers = {
    _count: MembersCountAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  export type MembersMinAggregateOutputType = {
    id: string | null
    account_id: string | null
    member_type: string | null
    first_name: string | null
    last_name: string | null
    middle_name: string | null
    nick_name: string | null
    email: string | null
    contact_number: string | null
    birthday: Date | null
    blood_type: string | null
    address_line_1: string | null
    street: string | null
    city_municipality: string | null
    province: string | null
    location: string | null
    chapter: string | null
    status: string | null
    gravis_color: string | null
    gravis_version: string | null
    mv_file_plate_no: string | null
    dl_no: string | null
    dl_type: string | null
    dl_expiration_date: Date | null
    or_expiration_date: Date | null
    emergency_contact_person: string | null
    emergency_contact_no: string | null
    emergency_relationship: string | null
    rider_name: string | null
    religion: string | null
    created_at: Date | null
  }

  export type MembersMaxAggregateOutputType = {
    id: string | null
    account_id: string | null
    member_type: string | null
    first_name: string | null
    last_name: string | null
    middle_name: string | null
    nick_name: string | null
    email: string | null
    contact_number: string | null
    birthday: Date | null
    blood_type: string | null
    address_line_1: string | null
    street: string | null
    city_municipality: string | null
    province: string | null
    location: string | null
    chapter: string | null
    status: string | null
    gravis_color: string | null
    gravis_version: string | null
    mv_file_plate_no: string | null
    dl_no: string | null
    dl_type: string | null
    dl_expiration_date: Date | null
    or_expiration_date: Date | null
    emergency_contact_person: string | null
    emergency_contact_no: string | null
    emergency_relationship: string | null
    rider_name: string | null
    religion: string | null
    created_at: Date | null
  }

  export type MembersCountAggregateOutputType = {
    id: number
    account_id: number
    member_type: number
    first_name: number
    last_name: number
    middle_name: number
    nick_name: number
    email: number
    contact_number: number
    birthday: number
    blood_type: number
    address_line_1: number
    street: number
    city_municipality: number
    province: number
    location: number
    chapter: number
    status: number
    gravis_color: number
    gravis_version: number
    mv_file_plate_no: number
    dl_no: number
    dl_type: number
    dl_expiration_date: number
    or_expiration_date: number
    emergency_contact_person: number
    emergency_contact_no: number
    emergency_relationship: number
    rider_name: number
    religion: number
    created_at: number
    _all: number
  }


  export type MembersMinAggregateInputType = {
    id?: true
    account_id?: true
    member_type?: true
    first_name?: true
    last_name?: true
    middle_name?: true
    nick_name?: true
    email?: true
    contact_number?: true
    birthday?: true
    blood_type?: true
    address_line_1?: true
    street?: true
    city_municipality?: true
    province?: true
    location?: true
    chapter?: true
    status?: true
    gravis_color?: true
    gravis_version?: true
    mv_file_plate_no?: true
    dl_no?: true
    dl_type?: true
    dl_expiration_date?: true
    or_expiration_date?: true
    emergency_contact_person?: true
    emergency_contact_no?: true
    emergency_relationship?: true
    rider_name?: true
    religion?: true
    created_at?: true
  }

  export type MembersMaxAggregateInputType = {
    id?: true
    account_id?: true
    member_type?: true
    first_name?: true
    last_name?: true
    middle_name?: true
    nick_name?: true
    email?: true
    contact_number?: true
    birthday?: true
    blood_type?: true
    address_line_1?: true
    street?: true
    city_municipality?: true
    province?: true
    location?: true
    chapter?: true
    status?: true
    gravis_color?: true
    gravis_version?: true
    mv_file_plate_no?: true
    dl_no?: true
    dl_type?: true
    dl_expiration_date?: true
    or_expiration_date?: true
    emergency_contact_person?: true
    emergency_contact_no?: true
    emergency_relationship?: true
    rider_name?: true
    religion?: true
    created_at?: true
  }

  export type MembersCountAggregateInputType = {
    id?: true
    account_id?: true
    member_type?: true
    first_name?: true
    last_name?: true
    middle_name?: true
    nick_name?: true
    email?: true
    contact_number?: true
    birthday?: true
    blood_type?: true
    address_line_1?: true
    street?: true
    city_municipality?: true
    province?: true
    location?: true
    chapter?: true
    status?: true
    gravis_color?: true
    gravis_version?: true
    mv_file_plate_no?: true
    dl_no?: true
    dl_type?: true
    dl_expiration_date?: true
    or_expiration_date?: true
    emergency_contact_person?: true
    emergency_contact_no?: true
    emergency_relationship?: true
    rider_name?: true
    religion?: true
    created_at?: true
    _all?: true
  }

  export type MembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to aggregate.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembersMaxAggregateInputType
  }

  export type GetMembersAggregateType<T extends MembersAggregateArgs> = {
        [P in keyof T & keyof AggregateMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembers[P]>
      : GetScalarType<T[P], AggregateMembers[P]>
  }




  export type MembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersWhereInput
    orderBy?: MembersOrderByWithAggregationInput | MembersOrderByWithAggregationInput[]
    by: MembersScalarFieldEnum[] | MembersScalarFieldEnum
    having?: MembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembersCountAggregateInputType | true
    _min?: MembersMinAggregateInputType
    _max?: MembersMaxAggregateInputType
  }

  export type MembersGroupByOutputType = {
    id: string
    account_id: string | null
    member_type: string | null
    first_name: string | null
    last_name: string | null
    middle_name: string | null
    nick_name: string | null
    email: string | null
    contact_number: string | null
    birthday: Date | null
    blood_type: string | null
    address_line_1: string | null
    street: string | null
    city_municipality: string | null
    province: string | null
    location: string | null
    chapter: string | null
    status: string | null
    gravis_color: string | null
    gravis_version: string | null
    mv_file_plate_no: string | null
    dl_no: string | null
    dl_type: string | null
    dl_expiration_date: Date | null
    or_expiration_date: Date | null
    emergency_contact_person: string | null
    emergency_contact_no: string | null
    emergency_relationship: string | null
    rider_name: string | null
    religion: string | null
    created_at: Date
    _count: MembersCountAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  type GetMembersGroupByPayload<T extends MembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembersGroupByOutputType[P]>
            : GetScalarType<T[P], MembersGroupByOutputType[P]>
        }
      >
    >


  export type MembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    member_type?: boolean
    first_name?: boolean
    last_name?: boolean
    middle_name?: boolean
    nick_name?: boolean
    email?: boolean
    contact_number?: boolean
    birthday?: boolean
    blood_type?: boolean
    address_line_1?: boolean
    street?: boolean
    city_municipality?: boolean
    province?: boolean
    location?: boolean
    chapter?: boolean
    status?: boolean
    gravis_color?: boolean
    gravis_version?: boolean
    mv_file_plate_no?: boolean
    dl_no?: boolean
    dl_type?: boolean
    dl_expiration_date?: boolean
    or_expiration_date?: boolean
    emergency_contact_person?: boolean
    emergency_contact_no?: boolean
    emergency_relationship?: boolean
    rider_name?: boolean
    religion?: boolean
    created_at?: boolean
    Account_Account_recruiter_idToMembers?: boolean | Members$Account_Account_recruiter_idToMembersArgs<ExtArgs>
    Account_Members_account_idToAccount?: boolean | Members$Account_Members_account_idToAccountArgs<ExtArgs>
    _count?: boolean | MembersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type MembersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    member_type?: boolean
    first_name?: boolean
    last_name?: boolean
    middle_name?: boolean
    nick_name?: boolean
    email?: boolean
    contact_number?: boolean
    birthday?: boolean
    blood_type?: boolean
    address_line_1?: boolean
    street?: boolean
    city_municipality?: boolean
    province?: boolean
    location?: boolean
    chapter?: boolean
    status?: boolean
    gravis_color?: boolean
    gravis_version?: boolean
    mv_file_plate_no?: boolean
    dl_no?: boolean
    dl_type?: boolean
    dl_expiration_date?: boolean
    or_expiration_date?: boolean
    emergency_contact_person?: boolean
    emergency_contact_no?: boolean
    emergency_relationship?: boolean
    rider_name?: boolean
    religion?: boolean
    created_at?: boolean
    Account_Members_account_idToAccount?: boolean | Members$Account_Members_account_idToAccountArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type MembersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    member_type?: boolean
    first_name?: boolean
    last_name?: boolean
    middle_name?: boolean
    nick_name?: boolean
    email?: boolean
    contact_number?: boolean
    birthday?: boolean
    blood_type?: boolean
    address_line_1?: boolean
    street?: boolean
    city_municipality?: boolean
    province?: boolean
    location?: boolean
    chapter?: boolean
    status?: boolean
    gravis_color?: boolean
    gravis_version?: boolean
    mv_file_plate_no?: boolean
    dl_no?: boolean
    dl_type?: boolean
    dl_expiration_date?: boolean
    or_expiration_date?: boolean
    emergency_contact_person?: boolean
    emergency_contact_no?: boolean
    emergency_relationship?: boolean
    rider_name?: boolean
    religion?: boolean
    created_at?: boolean
    Account_Members_account_idToAccount?: boolean | Members$Account_Members_account_idToAccountArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type MembersSelectScalar = {
    id?: boolean
    account_id?: boolean
    member_type?: boolean
    first_name?: boolean
    last_name?: boolean
    middle_name?: boolean
    nick_name?: boolean
    email?: boolean
    contact_number?: boolean
    birthday?: boolean
    blood_type?: boolean
    address_line_1?: boolean
    street?: boolean
    city_municipality?: boolean
    province?: boolean
    location?: boolean
    chapter?: boolean
    status?: boolean
    gravis_color?: boolean
    gravis_version?: boolean
    mv_file_plate_no?: boolean
    dl_no?: boolean
    dl_type?: boolean
    dl_expiration_date?: boolean
    or_expiration_date?: boolean
    emergency_contact_person?: boolean
    emergency_contact_no?: boolean
    emergency_relationship?: boolean
    rider_name?: boolean
    religion?: boolean
    created_at?: boolean
  }

  export type MembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "member_type" | "first_name" | "last_name" | "middle_name" | "nick_name" | "email" | "contact_number" | "birthday" | "blood_type" | "address_line_1" | "street" | "city_municipality" | "province" | "location" | "chapter" | "status" | "gravis_color" | "gravis_version" | "mv_file_plate_no" | "dl_no" | "dl_type" | "dl_expiration_date" | "or_expiration_date" | "emergency_contact_person" | "emergency_contact_no" | "emergency_relationship" | "rider_name" | "religion" | "created_at", ExtArgs["result"]["members"]>
  export type MembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Account_recruiter_idToMembers?: boolean | Members$Account_Account_recruiter_idToMembersArgs<ExtArgs>
    Account_Members_account_idToAccount?: boolean | Members$Account_Members_account_idToAccountArgs<ExtArgs>
    _count?: boolean | MembersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MembersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Members_account_idToAccount?: boolean | Members$Account_Members_account_idToAccountArgs<ExtArgs>
  }
  export type MembersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Members_account_idToAccount?: boolean | Members$Account_Members_account_idToAccountArgs<ExtArgs>
  }

  export type $MembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Members"
    objects: {
      Account_Account_recruiter_idToMembers: Prisma.$AccountPayload<ExtArgs>[]
      Account_Members_account_idToAccount: Prisma.$AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      account_id: string | null
      member_type: string | null
      first_name: string | null
      last_name: string | null
      middle_name: string | null
      nick_name: string | null
      email: string | null
      contact_number: string | null
      birthday: Date | null
      blood_type: string | null
      address_line_1: string | null
      street: string | null
      city_municipality: string | null
      province: string | null
      location: string | null
      chapter: string | null
      status: string | null
      gravis_color: string | null
      gravis_version: string | null
      mv_file_plate_no: string | null
      dl_no: string | null
      dl_type: string | null
      dl_expiration_date: Date | null
      or_expiration_date: Date | null
      emergency_contact_person: string | null
      emergency_contact_no: string | null
      emergency_relationship: string | null
      rider_name: string | null
      religion: string | null
      created_at: Date
    }, ExtArgs["result"]["members"]>
    composites: {}
  }

  type MembersGetPayload<S extends boolean | null | undefined | MembersDefaultArgs> = $Result.GetResult<Prisma.$MembersPayload, S>

  type MembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembersCountAggregateInputType | true
    }

  export interface MembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Members'], meta: { name: 'Members' } }
    /**
     * Find zero or one Members that matches the filter.
     * @param {MembersFindUniqueArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembersFindUniqueArgs>(args: SelectSubset<T, MembersFindUniqueArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembersFindUniqueOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembersFindUniqueOrThrowArgs>(args: SelectSubset<T, MembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindFirstArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembersFindFirstArgs>(args?: SelectSubset<T, MembersFindFirstArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindFirstOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembersFindFirstOrThrowArgs>(args?: SelectSubset<T, MembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.members.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membersWithIdOnly = await prisma.members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembersFindManyArgs>(args?: SelectSubset<T, MembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Members.
     * @param {MembersCreateArgs} args - Arguments to create a Members.
     * @example
     * // Create one Members
     * const Members = await prisma.members.create({
     *   data: {
     *     // ... data to create a Members
     *   }
     * })
     * 
     */
    create<T extends MembersCreateArgs>(args: SelectSubset<T, MembersCreateArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MembersCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembersCreateManyArgs>(args?: SelectSubset<T, MembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MembersCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const membersWithIdOnly = await prisma.members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembersCreateManyAndReturnArgs>(args?: SelectSubset<T, MembersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Members.
     * @param {MembersDeleteArgs} args - Arguments to delete one Members.
     * @example
     * // Delete one Members
     * const Members = await prisma.members.delete({
     *   where: {
     *     // ... filter to delete one Members
     *   }
     * })
     * 
     */
    delete<T extends MembersDeleteArgs>(args: SelectSubset<T, MembersDeleteArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Members.
     * @param {MembersUpdateArgs} args - Arguments to update one Members.
     * @example
     * // Update one Members
     * const members = await prisma.members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembersUpdateArgs>(args: SelectSubset<T, MembersUpdateArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MembersDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembersDeleteManyArgs>(args?: SelectSubset<T, MembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembersUpdateManyArgs>(args: SelectSubset<T, MembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MembersUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const membersWithIdOnly = await prisma.members.updateManyAndReturn({
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
    updateManyAndReturn<T extends MembersUpdateManyAndReturnArgs>(args: SelectSubset<T, MembersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Members.
     * @param {MembersUpsertArgs} args - Arguments to update or create a Members.
     * @example
     * // Update or create a Members
     * const members = await prisma.members.upsert({
     *   create: {
     *     // ... data to create a Members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Members we want to update
     *   }
     * })
     */
    upsert<T extends MembersUpsertArgs>(args: SelectSubset<T, MembersUpsertArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.members.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MembersCountArgs>(
      args?: Subset<T, MembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembersAggregateArgs>(args: Subset<T, MembersAggregateArgs>): Prisma.PrismaPromise<GetMembersAggregateType<T>>

    /**
     * Group by Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersGroupByArgs} args - Group by arguments.
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
      T extends MembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembersGroupByArgs['orderBy'] }
        : { orderBy?: MembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Members model
   */
  readonly fields: MembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account_Account_recruiter_idToMembers<T extends Members$Account_Account_recruiter_idToMembersArgs<ExtArgs> = {}>(args?: Subset<T, Members$Account_Account_recruiter_idToMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Account_Members_account_idToAccount<T extends Members$Account_Members_account_idToAccountArgs<ExtArgs> = {}>(args?: Subset<T, Members$Account_Members_account_idToAccountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Members model
   */
  interface MembersFieldRefs {
    readonly id: FieldRef<"Members", 'String'>
    readonly account_id: FieldRef<"Members", 'String'>
    readonly member_type: FieldRef<"Members", 'String'>
    readonly first_name: FieldRef<"Members", 'String'>
    readonly last_name: FieldRef<"Members", 'String'>
    readonly middle_name: FieldRef<"Members", 'String'>
    readonly nick_name: FieldRef<"Members", 'String'>
    readonly email: FieldRef<"Members", 'String'>
    readonly contact_number: FieldRef<"Members", 'String'>
    readonly birthday: FieldRef<"Members", 'DateTime'>
    readonly blood_type: FieldRef<"Members", 'String'>
    readonly address_line_1: FieldRef<"Members", 'String'>
    readonly street: FieldRef<"Members", 'String'>
    readonly city_municipality: FieldRef<"Members", 'String'>
    readonly province: FieldRef<"Members", 'String'>
    readonly location: FieldRef<"Members", 'String'>
    readonly chapter: FieldRef<"Members", 'String'>
    readonly status: FieldRef<"Members", 'String'>
    readonly gravis_color: FieldRef<"Members", 'String'>
    readonly gravis_version: FieldRef<"Members", 'String'>
    readonly mv_file_plate_no: FieldRef<"Members", 'String'>
    readonly dl_no: FieldRef<"Members", 'String'>
    readonly dl_type: FieldRef<"Members", 'String'>
    readonly dl_expiration_date: FieldRef<"Members", 'DateTime'>
    readonly or_expiration_date: FieldRef<"Members", 'DateTime'>
    readonly emergency_contact_person: FieldRef<"Members", 'String'>
    readonly emergency_contact_no: FieldRef<"Members", 'String'>
    readonly emergency_relationship: FieldRef<"Members", 'String'>
    readonly rider_name: FieldRef<"Members", 'String'>
    readonly religion: FieldRef<"Members", 'String'>
    readonly created_at: FieldRef<"Members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Members findUnique
   */
  export type MembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members findUniqueOrThrow
   */
  export type MembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members findFirst
   */
  export type MembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members findFirstOrThrow
   */
  export type MembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members findMany
   */
  export type MembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members create
   */
  export type MembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The data needed to create a Members.
     */
    data?: XOR<MembersCreateInput, MembersUncheckedCreateInput>
  }

  /**
   * Members createMany
   */
  export type MembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MembersCreateManyInput | MembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Members createManyAndReturn
   */
  export type MembersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MembersCreateManyInput | MembersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Members update
   */
  export type MembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The data needed to update a Members.
     */
    data: XOR<MembersUpdateInput, MembersUncheckedUpdateInput>
    /**
     * Choose, which Members to update.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members updateMany
   */
  export type MembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Members updateManyAndReturn
   */
  export type MembersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Members upsert
   */
  export type MembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The filter to search for the Members to update in case it exists.
     */
    where: MembersWhereUniqueInput
    /**
     * In case the Members found by the `where` argument doesn't exist, create a new Members with this data.
     */
    create: XOR<MembersCreateInput, MembersUncheckedCreateInput>
    /**
     * In case the Members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembersUpdateInput, MembersUncheckedUpdateInput>
  }

  /**
   * Members delete
   */
  export type MembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter which Members to delete.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members deleteMany
   */
  export type MembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Members.Account_Account_recruiter_idToMembers
   */
  export type Members$Account_Account_recruiter_idToMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Members.Account_Members_account_idToAccount
   */
  export type Members$Account_Members_account_idToAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Members without action
   */
  export type MembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
  }


  /**
   * Model NotificationReadStatus
   */

  export type AggregateNotificationReadStatus = {
    _count: NotificationReadStatusCountAggregateOutputType | null
    _avg: NotificationReadStatusAvgAggregateOutputType | null
    _sum: NotificationReadStatusSumAggregateOutputType | null
    _min: NotificationReadStatusMinAggregateOutputType | null
    _max: NotificationReadStatusMaxAggregateOutputType | null
  }

  export type NotificationReadStatusAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationReadStatusSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationReadStatusMinAggregateOutputType = {
    id: number | null
    account_id: string | null
    notification_key: string | null
    read_at: Date | null
  }

  export type NotificationReadStatusMaxAggregateOutputType = {
    id: number | null
    account_id: string | null
    notification_key: string | null
    read_at: Date | null
  }

  export type NotificationReadStatusCountAggregateOutputType = {
    id: number
    account_id: number
    notification_key: number
    read_at: number
    _all: number
  }


  export type NotificationReadStatusAvgAggregateInputType = {
    id?: true
  }

  export type NotificationReadStatusSumAggregateInputType = {
    id?: true
  }

  export type NotificationReadStatusMinAggregateInputType = {
    id?: true
    account_id?: true
    notification_key?: true
    read_at?: true
  }

  export type NotificationReadStatusMaxAggregateInputType = {
    id?: true
    account_id?: true
    notification_key?: true
    read_at?: true
  }

  export type NotificationReadStatusCountAggregateInputType = {
    id?: true
    account_id?: true
    notification_key?: true
    read_at?: true
    _all?: true
  }

  export type NotificationReadStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationReadStatus to aggregate.
     */
    where?: NotificationReadStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReadStatuses to fetch.
     */
    orderBy?: NotificationReadStatusOrderByWithRelationInput | NotificationReadStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationReadStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReadStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReadStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationReadStatuses
    **/
    _count?: true | NotificationReadStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationReadStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationReadStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationReadStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationReadStatusMaxAggregateInputType
  }

  export type GetNotificationReadStatusAggregateType<T extends NotificationReadStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationReadStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationReadStatus[P]>
      : GetScalarType<T[P], AggregateNotificationReadStatus[P]>
  }




  export type NotificationReadStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationReadStatusWhereInput
    orderBy?: NotificationReadStatusOrderByWithAggregationInput | NotificationReadStatusOrderByWithAggregationInput[]
    by: NotificationReadStatusScalarFieldEnum[] | NotificationReadStatusScalarFieldEnum
    having?: NotificationReadStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationReadStatusCountAggregateInputType | true
    _avg?: NotificationReadStatusAvgAggregateInputType
    _sum?: NotificationReadStatusSumAggregateInputType
    _min?: NotificationReadStatusMinAggregateInputType
    _max?: NotificationReadStatusMaxAggregateInputType
  }

  export type NotificationReadStatusGroupByOutputType = {
    id: number
    account_id: string
    notification_key: string
    read_at: Date
    _count: NotificationReadStatusCountAggregateOutputType | null
    _avg: NotificationReadStatusAvgAggregateOutputType | null
    _sum: NotificationReadStatusSumAggregateOutputType | null
    _min: NotificationReadStatusMinAggregateOutputType | null
    _max: NotificationReadStatusMaxAggregateOutputType | null
  }

  type GetNotificationReadStatusGroupByPayload<T extends NotificationReadStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationReadStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationReadStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationReadStatusGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationReadStatusGroupByOutputType[P]>
        }
      >
    >


  export type NotificationReadStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    notification_key?: boolean
    read_at?: boolean
  }, ExtArgs["result"]["notificationReadStatus"]>

  export type NotificationReadStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    notification_key?: boolean
    read_at?: boolean
  }, ExtArgs["result"]["notificationReadStatus"]>

  export type NotificationReadStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    notification_key?: boolean
    read_at?: boolean
  }, ExtArgs["result"]["notificationReadStatus"]>

  export type NotificationReadStatusSelectScalar = {
    id?: boolean
    account_id?: boolean
    notification_key?: boolean
    read_at?: boolean
  }

  export type NotificationReadStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "notification_key" | "read_at", ExtArgs["result"]["notificationReadStatus"]>

  export type $NotificationReadStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationReadStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_id: string
      notification_key: string
      read_at: Date
    }, ExtArgs["result"]["notificationReadStatus"]>
    composites: {}
  }

  type NotificationReadStatusGetPayload<S extends boolean | null | undefined | NotificationReadStatusDefaultArgs> = $Result.GetResult<Prisma.$NotificationReadStatusPayload, S>

  type NotificationReadStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationReadStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationReadStatusCountAggregateInputType | true
    }

  export interface NotificationReadStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationReadStatus'], meta: { name: 'NotificationReadStatus' } }
    /**
     * Find zero or one NotificationReadStatus that matches the filter.
     * @param {NotificationReadStatusFindUniqueArgs} args - Arguments to find a NotificationReadStatus
     * @example
     * // Get one NotificationReadStatus
     * const notificationReadStatus = await prisma.notificationReadStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationReadStatusFindUniqueArgs>(args: SelectSubset<T, NotificationReadStatusFindUniqueArgs<ExtArgs>>): Prisma__NotificationReadStatusClient<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationReadStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationReadStatusFindUniqueOrThrowArgs} args - Arguments to find a NotificationReadStatus
     * @example
     * // Get one NotificationReadStatus
     * const notificationReadStatus = await prisma.notificationReadStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationReadStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationReadStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationReadStatusClient<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationReadStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadStatusFindFirstArgs} args - Arguments to find a NotificationReadStatus
     * @example
     * // Get one NotificationReadStatus
     * const notificationReadStatus = await prisma.notificationReadStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationReadStatusFindFirstArgs>(args?: SelectSubset<T, NotificationReadStatusFindFirstArgs<ExtArgs>>): Prisma__NotificationReadStatusClient<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationReadStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadStatusFindFirstOrThrowArgs} args - Arguments to find a NotificationReadStatus
     * @example
     * // Get one NotificationReadStatus
     * const notificationReadStatus = await prisma.notificationReadStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationReadStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationReadStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationReadStatusClient<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationReadStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationReadStatuses
     * const notificationReadStatuses = await prisma.notificationReadStatus.findMany()
     * 
     * // Get first 10 NotificationReadStatuses
     * const notificationReadStatuses = await prisma.notificationReadStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationReadStatusWithIdOnly = await prisma.notificationReadStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationReadStatusFindManyArgs>(args?: SelectSubset<T, NotificationReadStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationReadStatus.
     * @param {NotificationReadStatusCreateArgs} args - Arguments to create a NotificationReadStatus.
     * @example
     * // Create one NotificationReadStatus
     * const NotificationReadStatus = await prisma.notificationReadStatus.create({
     *   data: {
     *     // ... data to create a NotificationReadStatus
     *   }
     * })
     * 
     */
    create<T extends NotificationReadStatusCreateArgs>(args: SelectSubset<T, NotificationReadStatusCreateArgs<ExtArgs>>): Prisma__NotificationReadStatusClient<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationReadStatuses.
     * @param {NotificationReadStatusCreateManyArgs} args - Arguments to create many NotificationReadStatuses.
     * @example
     * // Create many NotificationReadStatuses
     * const notificationReadStatus = await prisma.notificationReadStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationReadStatusCreateManyArgs>(args?: SelectSubset<T, NotificationReadStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationReadStatuses and returns the data saved in the database.
     * @param {NotificationReadStatusCreateManyAndReturnArgs} args - Arguments to create many NotificationReadStatuses.
     * @example
     * // Create many NotificationReadStatuses
     * const notificationReadStatus = await prisma.notificationReadStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationReadStatuses and only return the `id`
     * const notificationReadStatusWithIdOnly = await prisma.notificationReadStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationReadStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationReadStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationReadStatus.
     * @param {NotificationReadStatusDeleteArgs} args - Arguments to delete one NotificationReadStatus.
     * @example
     * // Delete one NotificationReadStatus
     * const NotificationReadStatus = await prisma.notificationReadStatus.delete({
     *   where: {
     *     // ... filter to delete one NotificationReadStatus
     *   }
     * })
     * 
     */
    delete<T extends NotificationReadStatusDeleteArgs>(args: SelectSubset<T, NotificationReadStatusDeleteArgs<ExtArgs>>): Prisma__NotificationReadStatusClient<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationReadStatus.
     * @param {NotificationReadStatusUpdateArgs} args - Arguments to update one NotificationReadStatus.
     * @example
     * // Update one NotificationReadStatus
     * const notificationReadStatus = await prisma.notificationReadStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationReadStatusUpdateArgs>(args: SelectSubset<T, NotificationReadStatusUpdateArgs<ExtArgs>>): Prisma__NotificationReadStatusClient<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationReadStatuses.
     * @param {NotificationReadStatusDeleteManyArgs} args - Arguments to filter NotificationReadStatuses to delete.
     * @example
     * // Delete a few NotificationReadStatuses
     * const { count } = await prisma.notificationReadStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationReadStatusDeleteManyArgs>(args?: SelectSubset<T, NotificationReadStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationReadStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationReadStatuses
     * const notificationReadStatus = await prisma.notificationReadStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationReadStatusUpdateManyArgs>(args: SelectSubset<T, NotificationReadStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationReadStatuses and returns the data updated in the database.
     * @param {NotificationReadStatusUpdateManyAndReturnArgs} args - Arguments to update many NotificationReadStatuses.
     * @example
     * // Update many NotificationReadStatuses
     * const notificationReadStatus = await prisma.notificationReadStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationReadStatuses and only return the `id`
     * const notificationReadStatusWithIdOnly = await prisma.notificationReadStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationReadStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationReadStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationReadStatus.
     * @param {NotificationReadStatusUpsertArgs} args - Arguments to update or create a NotificationReadStatus.
     * @example
     * // Update or create a NotificationReadStatus
     * const notificationReadStatus = await prisma.notificationReadStatus.upsert({
     *   create: {
     *     // ... data to create a NotificationReadStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationReadStatus we want to update
     *   }
     * })
     */
    upsert<T extends NotificationReadStatusUpsertArgs>(args: SelectSubset<T, NotificationReadStatusUpsertArgs<ExtArgs>>): Prisma__NotificationReadStatusClient<$Result.GetResult<Prisma.$NotificationReadStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationReadStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadStatusCountArgs} args - Arguments to filter NotificationReadStatuses to count.
     * @example
     * // Count the number of NotificationReadStatuses
     * const count = await prisma.notificationReadStatus.count({
     *   where: {
     *     // ... the filter for the NotificationReadStatuses we want to count
     *   }
     * })
    **/
    count<T extends NotificationReadStatusCountArgs>(
      args?: Subset<T, NotificationReadStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationReadStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationReadStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationReadStatusAggregateArgs>(args: Subset<T, NotificationReadStatusAggregateArgs>): Prisma.PrismaPromise<GetNotificationReadStatusAggregateType<T>>

    /**
     * Group by NotificationReadStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadStatusGroupByArgs} args - Group by arguments.
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
      T extends NotificationReadStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationReadStatusGroupByArgs['orderBy'] }
        : { orderBy?: NotificationReadStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationReadStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationReadStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationReadStatus model
   */
  readonly fields: NotificationReadStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationReadStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationReadStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NotificationReadStatus model
   */
  interface NotificationReadStatusFieldRefs {
    readonly id: FieldRef<"NotificationReadStatus", 'Int'>
    readonly account_id: FieldRef<"NotificationReadStatus", 'String'>
    readonly notification_key: FieldRef<"NotificationReadStatus", 'String'>
    readonly read_at: FieldRef<"NotificationReadStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationReadStatus findUnique
   */
  export type NotificationReadStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * Filter, which NotificationReadStatus to fetch.
     */
    where: NotificationReadStatusWhereUniqueInput
  }

  /**
   * NotificationReadStatus findUniqueOrThrow
   */
  export type NotificationReadStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * Filter, which NotificationReadStatus to fetch.
     */
    where: NotificationReadStatusWhereUniqueInput
  }

  /**
   * NotificationReadStatus findFirst
   */
  export type NotificationReadStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * Filter, which NotificationReadStatus to fetch.
     */
    where?: NotificationReadStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReadStatuses to fetch.
     */
    orderBy?: NotificationReadStatusOrderByWithRelationInput | NotificationReadStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationReadStatuses.
     */
    cursor?: NotificationReadStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReadStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReadStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationReadStatuses.
     */
    distinct?: NotificationReadStatusScalarFieldEnum | NotificationReadStatusScalarFieldEnum[]
  }

  /**
   * NotificationReadStatus findFirstOrThrow
   */
  export type NotificationReadStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * Filter, which NotificationReadStatus to fetch.
     */
    where?: NotificationReadStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReadStatuses to fetch.
     */
    orderBy?: NotificationReadStatusOrderByWithRelationInput | NotificationReadStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationReadStatuses.
     */
    cursor?: NotificationReadStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReadStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReadStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationReadStatuses.
     */
    distinct?: NotificationReadStatusScalarFieldEnum | NotificationReadStatusScalarFieldEnum[]
  }

  /**
   * NotificationReadStatus findMany
   */
  export type NotificationReadStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * Filter, which NotificationReadStatuses to fetch.
     */
    where?: NotificationReadStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReadStatuses to fetch.
     */
    orderBy?: NotificationReadStatusOrderByWithRelationInput | NotificationReadStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationReadStatuses.
     */
    cursor?: NotificationReadStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReadStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReadStatuses.
     */
    skip?: number
    distinct?: NotificationReadStatusScalarFieldEnum | NotificationReadStatusScalarFieldEnum[]
  }

  /**
   * NotificationReadStatus create
   */
  export type NotificationReadStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a NotificationReadStatus.
     */
    data: XOR<NotificationReadStatusCreateInput, NotificationReadStatusUncheckedCreateInput>
  }

  /**
   * NotificationReadStatus createMany
   */
  export type NotificationReadStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationReadStatuses.
     */
    data: NotificationReadStatusCreateManyInput | NotificationReadStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationReadStatus createManyAndReturn
   */
  export type NotificationReadStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationReadStatuses.
     */
    data: NotificationReadStatusCreateManyInput | NotificationReadStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationReadStatus update
   */
  export type NotificationReadStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a NotificationReadStatus.
     */
    data: XOR<NotificationReadStatusUpdateInput, NotificationReadStatusUncheckedUpdateInput>
    /**
     * Choose, which NotificationReadStatus to update.
     */
    where: NotificationReadStatusWhereUniqueInput
  }

  /**
   * NotificationReadStatus updateMany
   */
  export type NotificationReadStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationReadStatuses.
     */
    data: XOR<NotificationReadStatusUpdateManyMutationInput, NotificationReadStatusUncheckedUpdateManyInput>
    /**
     * Filter which NotificationReadStatuses to update
     */
    where?: NotificationReadStatusWhereInput
    /**
     * Limit how many NotificationReadStatuses to update.
     */
    limit?: number
  }

  /**
   * NotificationReadStatus updateManyAndReturn
   */
  export type NotificationReadStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * The data used to update NotificationReadStatuses.
     */
    data: XOR<NotificationReadStatusUpdateManyMutationInput, NotificationReadStatusUncheckedUpdateManyInput>
    /**
     * Filter which NotificationReadStatuses to update
     */
    where?: NotificationReadStatusWhereInput
    /**
     * Limit how many NotificationReadStatuses to update.
     */
    limit?: number
  }

  /**
   * NotificationReadStatus upsert
   */
  export type NotificationReadStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the NotificationReadStatus to update in case it exists.
     */
    where: NotificationReadStatusWhereUniqueInput
    /**
     * In case the NotificationReadStatus found by the `where` argument doesn't exist, create a new NotificationReadStatus with this data.
     */
    create: XOR<NotificationReadStatusCreateInput, NotificationReadStatusUncheckedCreateInput>
    /**
     * In case the NotificationReadStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationReadStatusUpdateInput, NotificationReadStatusUncheckedUpdateInput>
  }

  /**
   * NotificationReadStatus delete
   */
  export type NotificationReadStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
    /**
     * Filter which NotificationReadStatus to delete.
     */
    where: NotificationReadStatusWhereUniqueInput
  }

  /**
   * NotificationReadStatus deleteMany
   */
  export type NotificationReadStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationReadStatuses to delete
     */
    where?: NotificationReadStatusWhereInput
    /**
     * Limit how many NotificationReadStatuses to delete.
     */
    limit?: number
  }

  /**
   * NotificationReadStatus without action
   */
  export type NotificationReadStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationReadStatus
     */
    select?: NotificationReadStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationReadStatus
     */
    omit?: NotificationReadStatusOmit<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    role_name: string | null
    created_at: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    role_name: string | null
    created_at: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    role_name: number
    created_at: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    role_name?: true
    created_at?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    role_name?: true
    created_at?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    role_name?: true
    created_at?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    role_name: string
    created_at: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    created_at?: boolean
    AccountRole?: boolean | Role$AccountRoleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    role_name?: boolean
    created_at?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_name" | "created_at", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AccountRole?: boolean | Role$AccountRoleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      AccountRole: Prisma.$AccountRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role_name: string
      created_at: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AccountRole<T extends Role$AccountRoleArgs<ExtArgs> = {}>(args?: Subset<T, Role$AccountRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly role_name: FieldRef<"Role", 'String'>
    readonly created_at: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.AccountRole
   */
  export type Role$AccountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountRole
     */
    select?: AccountRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountRole
     */
    omit?: AccountRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountRoleInclude<ExtArgs> | null
    where?: AccountRoleWhereInput
    orderBy?: AccountRoleOrderByWithRelationInput | AccountRoleOrderByWithRelationInput[]
    cursor?: AccountRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountRoleScalarFieldEnum | AccountRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    recruiter_id: 'recruiter_id',
    accntStatus: 'accntStatus',
    created_at: 'created_at',
    fullname: 'fullname',
    email: 'email',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AccountRoleScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    role_id: 'role_id',
    created_at: 'created_at'
  };

  export type AccountRoleScalarFieldEnum = (typeof AccountRoleScalarFieldEnum)[keyof typeof AccountRoleScalarFieldEnum]


  export const AdminNotificationScalarFieldEnum: {
    id: 'id',
    recipient_id: 'recipient_id',
    sender_id: 'sender_id',
    title: 'title',
    message: 'message',
    severity: 'severity',
    created_at: 'created_at'
  };

  export type AdminNotificationScalarFieldEnum = (typeof AdminNotificationScalarFieldEnum)[keyof typeof AdminNotificationScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    account_id: 'account_id',
    points: 'points',
    created_at: 'created_at'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const ChaptersScalarFieldEnum: {
    id: 'id',
    chapter_name: 'chapter_name',
    leader: 'leader',
    asst_leader: 'asst_leader',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type ChaptersScalarFieldEnum = (typeof ChaptersScalarFieldEnum)[keyof typeof ChaptersScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    event_type: 'event_type',
    hosted_by: 'hosted_by',
    created_by: 'created_by',
    created_at: 'created_at',
    event_date: 'event_date'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const MembersScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    member_type: 'member_type',
    first_name: 'first_name',
    last_name: 'last_name',
    middle_name: 'middle_name',
    nick_name: 'nick_name',
    email: 'email',
    contact_number: 'contact_number',
    birthday: 'birthday',
    blood_type: 'blood_type',
    address_line_1: 'address_line_1',
    street: 'street',
    city_municipality: 'city_municipality',
    province: 'province',
    location: 'location',
    chapter: 'chapter',
    status: 'status',
    gravis_color: 'gravis_color',
    gravis_version: 'gravis_version',
    mv_file_plate_no: 'mv_file_plate_no',
    dl_no: 'dl_no',
    dl_type: 'dl_type',
    dl_expiration_date: 'dl_expiration_date',
    or_expiration_date: 'or_expiration_date',
    emergency_contact_person: 'emergency_contact_person',
    emergency_contact_no: 'emergency_contact_no',
    emergency_relationship: 'emergency_relationship',
    rider_name: 'rider_name',
    religion: 'religion',
    created_at: 'created_at'
  };

  export type MembersScalarFieldEnum = (typeof MembersScalarFieldEnum)[keyof typeof MembersScalarFieldEnum]


  export const NotificationReadStatusScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    notification_key: 'notification_key',
    read_at: 'read_at'
  };

  export type NotificationReadStatusScalarFieldEnum = (typeof NotificationReadStatusScalarFieldEnum)[keyof typeof NotificationReadStatusScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    role_name: 'role_name',
    created_at: 'created_at'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


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


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    username?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    recruiter_id?: StringNullableFilter<"Account"> | string | null
    accntStatus?: StringNullableFilter<"Account"> | string | null
    created_at?: DateTimeFilter<"Account"> | Date | string
    fullname?: StringNullableFilter<"Account"> | string | null
    email?: StringNullableFilter<"Account"> | string | null
    resetToken?: StringNullableFilter<"Account"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Account"> | Date | string | null
    Members_Account_recruiter_idToMembers?: XOR<MembersNullableScalarRelationFilter, MembersWhereInput> | null
    AccountRole?: AccountRoleListRelationFilter
    Attendance?: AttendanceListRelationFilter
    Members_Members_account_idToAccount?: MembersListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    recruiter_id?: SortOrderInput | SortOrder
    accntStatus?: SortOrderInput | SortOrder
    created_at?: SortOrder
    fullname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    Members_Account_recruiter_idToMembers?: MembersOrderByWithRelationInput
    AccountRole?: AccountRoleOrderByRelationAggregateInput
    Attendance?: AttendanceOrderByRelationAggregateInput
    Members_Members_account_idToAccount?: MembersOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    password?: StringFilter<"Account"> | string
    recruiter_id?: StringNullableFilter<"Account"> | string | null
    accntStatus?: StringNullableFilter<"Account"> | string | null
    created_at?: DateTimeFilter<"Account"> | Date | string
    fullname?: StringNullableFilter<"Account"> | string | null
    email?: StringNullableFilter<"Account"> | string | null
    resetToken?: StringNullableFilter<"Account"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Account"> | Date | string | null
    Members_Account_recruiter_idToMembers?: XOR<MembersNullableScalarRelationFilter, MembersWhereInput> | null
    AccountRole?: AccountRoleListRelationFilter
    Attendance?: AttendanceListRelationFilter
    Members_Members_account_idToAccount?: MembersListRelationFilter
  }, "id" | "username">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    recruiter_id?: SortOrderInput | SortOrder
    accntStatus?: SortOrderInput | SortOrder
    created_at?: SortOrder
    fullname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    username?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    recruiter_id?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accntStatus?: StringNullableWithAggregatesFilter<"Account"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    fullname?: StringNullableWithAggregatesFilter<"Account"> | string | null
    email?: StringNullableWithAggregatesFilter<"Account"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type AccountRoleWhereInput = {
    AND?: AccountRoleWhereInput | AccountRoleWhereInput[]
    OR?: AccountRoleWhereInput[]
    NOT?: AccountRoleWhereInput | AccountRoleWhereInput[]
    id?: IntFilter<"AccountRole"> | number
    account_id?: StringFilter<"AccountRole"> | string
    role_id?: StringFilter<"AccountRole"> | string
    created_at?: DateTimeFilter<"AccountRole"> | Date | string
    Account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    Role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type AccountRoleOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    Account?: AccountOrderByWithRelationInput
    Role?: RoleOrderByWithRelationInput
  }

  export type AccountRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    account_id_role_id?: AccountRoleAccount_idRole_idCompoundUniqueInput
    AND?: AccountRoleWhereInput | AccountRoleWhereInput[]
    OR?: AccountRoleWhereInput[]
    NOT?: AccountRoleWhereInput | AccountRoleWhereInput[]
    account_id?: StringFilter<"AccountRole"> | string
    role_id?: StringFilter<"AccountRole"> | string
    created_at?: DateTimeFilter<"AccountRole"> | Date | string
    Account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    Role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "account_id_role_id">

  export type AccountRoleOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    _count?: AccountRoleCountOrderByAggregateInput
    _avg?: AccountRoleAvgOrderByAggregateInput
    _max?: AccountRoleMaxOrderByAggregateInput
    _min?: AccountRoleMinOrderByAggregateInput
    _sum?: AccountRoleSumOrderByAggregateInput
  }

  export type AccountRoleScalarWhereWithAggregatesInput = {
    AND?: AccountRoleScalarWhereWithAggregatesInput | AccountRoleScalarWhereWithAggregatesInput[]
    OR?: AccountRoleScalarWhereWithAggregatesInput[]
    NOT?: AccountRoleScalarWhereWithAggregatesInput | AccountRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountRole"> | number
    account_id?: StringWithAggregatesFilter<"AccountRole"> | string
    role_id?: StringWithAggregatesFilter<"AccountRole"> | string
    created_at?: DateTimeWithAggregatesFilter<"AccountRole"> | Date | string
  }

  export type AdminNotificationWhereInput = {
    AND?: AdminNotificationWhereInput | AdminNotificationWhereInput[]
    OR?: AdminNotificationWhereInput[]
    NOT?: AdminNotificationWhereInput | AdminNotificationWhereInput[]
    id?: IntFilter<"AdminNotification"> | number
    recipient_id?: StringFilter<"AdminNotification"> | string
    sender_id?: StringFilter<"AdminNotification"> | string
    title?: StringFilter<"AdminNotification"> | string
    message?: StringFilter<"AdminNotification"> | string
    severity?: StringFilter<"AdminNotification"> | string
    created_at?: DateTimeFilter<"AdminNotification"> | Date | string
  }

  export type AdminNotificationOrderByWithRelationInput = {
    id?: SortOrder
    recipient_id?: SortOrder
    sender_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    created_at?: SortOrder
  }

  export type AdminNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminNotificationWhereInput | AdminNotificationWhereInput[]
    OR?: AdminNotificationWhereInput[]
    NOT?: AdminNotificationWhereInput | AdminNotificationWhereInput[]
    recipient_id?: StringFilter<"AdminNotification"> | string
    sender_id?: StringFilter<"AdminNotification"> | string
    title?: StringFilter<"AdminNotification"> | string
    message?: StringFilter<"AdminNotification"> | string
    severity?: StringFilter<"AdminNotification"> | string
    created_at?: DateTimeFilter<"AdminNotification"> | Date | string
  }, "id">

  export type AdminNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    recipient_id?: SortOrder
    sender_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    created_at?: SortOrder
    _count?: AdminNotificationCountOrderByAggregateInput
    _avg?: AdminNotificationAvgOrderByAggregateInput
    _max?: AdminNotificationMaxOrderByAggregateInput
    _min?: AdminNotificationMinOrderByAggregateInput
    _sum?: AdminNotificationSumOrderByAggregateInput
  }

  export type AdminNotificationScalarWhereWithAggregatesInput = {
    AND?: AdminNotificationScalarWhereWithAggregatesInput | AdminNotificationScalarWhereWithAggregatesInput[]
    OR?: AdminNotificationScalarWhereWithAggregatesInput[]
    NOT?: AdminNotificationScalarWhereWithAggregatesInput | AdminNotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminNotification"> | number
    recipient_id?: StringWithAggregatesFilter<"AdminNotification"> | string
    sender_id?: StringWithAggregatesFilter<"AdminNotification"> | string
    title?: StringWithAggregatesFilter<"AdminNotification"> | string
    message?: StringWithAggregatesFilter<"AdminNotification"> | string
    severity?: StringWithAggregatesFilter<"AdminNotification"> | string
    created_at?: DateTimeWithAggregatesFilter<"AdminNotification"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: IntFilter<"Attendance"> | number
    event_id?: IntFilter<"Attendance"> | number
    account_id?: StringFilter<"Attendance"> | string
    points?: IntFilter<"Attendance"> | number
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    Account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    account_id?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    Account?: AccountOrderByWithRelationInput
    Event?: EventOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    event_id_account_id?: AttendanceEvent_idAccount_idCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    event_id?: IntFilter<"Attendance"> | number
    account_id?: StringFilter<"Attendance"> | string
    points?: IntFilter<"Attendance"> | number
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    Account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "event_id_account_id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    account_id?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendance"> | number
    event_id?: IntWithAggregatesFilter<"Attendance"> | number
    account_id?: StringWithAggregatesFilter<"Attendance"> | string
    points?: IntWithAggregatesFilter<"Attendance"> | number
    created_at?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type ChaptersWhereInput = {
    AND?: ChaptersWhereInput | ChaptersWhereInput[]
    OR?: ChaptersWhereInput[]
    NOT?: ChaptersWhereInput | ChaptersWhereInput[]
    id?: IntFilter<"Chapters"> | number
    chapter_name?: StringFilter<"Chapters"> | string
    leader?: StringNullableFilter<"Chapters"> | string | null
    asst_leader?: StringNullableFilter<"Chapters"> | string | null
    created_by?: StringNullableFilter<"Chapters"> | string | null
    created_at?: DateTimeFilter<"Chapters"> | Date | string
    Event?: EventListRelationFilter
  }

  export type ChaptersOrderByWithRelationInput = {
    id?: SortOrder
    chapter_name?: SortOrder
    leader?: SortOrderInput | SortOrder
    asst_leader?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    Event?: EventOrderByRelationAggregateInput
  }

  export type ChaptersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChaptersWhereInput | ChaptersWhereInput[]
    OR?: ChaptersWhereInput[]
    NOT?: ChaptersWhereInput | ChaptersWhereInput[]
    chapter_name?: StringFilter<"Chapters"> | string
    leader?: StringNullableFilter<"Chapters"> | string | null
    asst_leader?: StringNullableFilter<"Chapters"> | string | null
    created_by?: StringNullableFilter<"Chapters"> | string | null
    created_at?: DateTimeFilter<"Chapters"> | Date | string
    Event?: EventListRelationFilter
  }, "id">

  export type ChaptersOrderByWithAggregationInput = {
    id?: SortOrder
    chapter_name?: SortOrder
    leader?: SortOrderInput | SortOrder
    asst_leader?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ChaptersCountOrderByAggregateInput
    _avg?: ChaptersAvgOrderByAggregateInput
    _max?: ChaptersMaxOrderByAggregateInput
    _min?: ChaptersMinOrderByAggregateInput
    _sum?: ChaptersSumOrderByAggregateInput
  }

  export type ChaptersScalarWhereWithAggregatesInput = {
    AND?: ChaptersScalarWhereWithAggregatesInput | ChaptersScalarWhereWithAggregatesInput[]
    OR?: ChaptersScalarWhereWithAggregatesInput[]
    NOT?: ChaptersScalarWhereWithAggregatesInput | ChaptersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chapters"> | number
    chapter_name?: StringWithAggregatesFilter<"Chapters"> | string
    leader?: StringNullableWithAggregatesFilter<"Chapters"> | string | null
    asst_leader?: StringNullableWithAggregatesFilter<"Chapters"> | string | null
    created_by?: StringNullableWithAggregatesFilter<"Chapters"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Chapters"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    event_type?: StringFilter<"Event"> | string
    hosted_by?: IntNullableFilter<"Event"> | number | null
    created_by?: StringNullableFilter<"Event"> | string | null
    created_at?: DateTimeFilter<"Event"> | Date | string
    event_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    Attendance?: AttendanceListRelationFilter
    Chapters?: XOR<ChaptersNullableScalarRelationFilter, ChaptersWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    event_type?: SortOrder
    hosted_by?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    event_date?: SortOrderInput | SortOrder
    Attendance?: AttendanceOrderByRelationAggregateInput
    Chapters?: ChaptersOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    event_type?: StringFilter<"Event"> | string
    hosted_by?: IntNullableFilter<"Event"> | number | null
    created_by?: StringNullableFilter<"Event"> | string | null
    created_at?: DateTimeFilter<"Event"> | Date | string
    event_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    Attendance?: AttendanceListRelationFilter
    Chapters?: XOR<ChaptersNullableScalarRelationFilter, ChaptersWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    event_type?: SortOrder
    hosted_by?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    event_date?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    name?: StringWithAggregatesFilter<"Event"> | string
    address?: StringNullableWithAggregatesFilter<"Event"> | string | null
    event_type?: StringWithAggregatesFilter<"Event"> | string
    hosted_by?: IntNullableWithAggregatesFilter<"Event"> | number | null
    created_by?: StringNullableWithAggregatesFilter<"Event"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    event_date?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
  }

  export type MembersWhereInput = {
    AND?: MembersWhereInput | MembersWhereInput[]
    OR?: MembersWhereInput[]
    NOT?: MembersWhereInput | MembersWhereInput[]
    id?: StringFilter<"Members"> | string
    account_id?: StringNullableFilter<"Members"> | string | null
    member_type?: StringNullableFilter<"Members"> | string | null
    first_name?: StringNullableFilter<"Members"> | string | null
    last_name?: StringNullableFilter<"Members"> | string | null
    middle_name?: StringNullableFilter<"Members"> | string | null
    nick_name?: StringNullableFilter<"Members"> | string | null
    email?: StringNullableFilter<"Members"> | string | null
    contact_number?: StringNullableFilter<"Members"> | string | null
    birthday?: DateTimeNullableFilter<"Members"> | Date | string | null
    blood_type?: StringNullableFilter<"Members"> | string | null
    address_line_1?: StringNullableFilter<"Members"> | string | null
    street?: StringNullableFilter<"Members"> | string | null
    city_municipality?: StringNullableFilter<"Members"> | string | null
    province?: StringNullableFilter<"Members"> | string | null
    location?: StringNullableFilter<"Members"> | string | null
    chapter?: StringNullableFilter<"Members"> | string | null
    status?: StringNullableFilter<"Members"> | string | null
    gravis_color?: StringNullableFilter<"Members"> | string | null
    gravis_version?: StringNullableFilter<"Members"> | string | null
    mv_file_plate_no?: StringNullableFilter<"Members"> | string | null
    dl_no?: StringNullableFilter<"Members"> | string | null
    dl_type?: StringNullableFilter<"Members"> | string | null
    dl_expiration_date?: DateTimeNullableFilter<"Members"> | Date | string | null
    or_expiration_date?: DateTimeNullableFilter<"Members"> | Date | string | null
    emergency_contact_person?: StringNullableFilter<"Members"> | string | null
    emergency_contact_no?: StringNullableFilter<"Members"> | string | null
    emergency_relationship?: StringNullableFilter<"Members"> | string | null
    rider_name?: StringNullableFilter<"Members"> | string | null
    religion?: StringNullableFilter<"Members"> | string | null
    created_at?: DateTimeFilter<"Members"> | Date | string
    Account_Account_recruiter_idToMembers?: AccountListRelationFilter
    Account_Members_account_idToAccount?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type MembersOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    member_type?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    middle_name?: SortOrderInput | SortOrder
    nick_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contact_number?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    blood_type?: SortOrderInput | SortOrder
    address_line_1?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city_municipality?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    chapter?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    gravis_color?: SortOrderInput | SortOrder
    gravis_version?: SortOrderInput | SortOrder
    mv_file_plate_no?: SortOrderInput | SortOrder
    dl_no?: SortOrderInput | SortOrder
    dl_type?: SortOrderInput | SortOrder
    dl_expiration_date?: SortOrderInput | SortOrder
    or_expiration_date?: SortOrderInput | SortOrder
    emergency_contact_person?: SortOrderInput | SortOrder
    emergency_contact_no?: SortOrderInput | SortOrder
    emergency_relationship?: SortOrderInput | SortOrder
    rider_name?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    created_at?: SortOrder
    Account_Account_recruiter_idToMembers?: AccountOrderByRelationAggregateInput
    Account_Members_account_idToAccount?: AccountOrderByWithRelationInput
  }

  export type MembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembersWhereInput | MembersWhereInput[]
    OR?: MembersWhereInput[]
    NOT?: MembersWhereInput | MembersWhereInput[]
    account_id?: StringNullableFilter<"Members"> | string | null
    member_type?: StringNullableFilter<"Members"> | string | null
    first_name?: StringNullableFilter<"Members"> | string | null
    last_name?: StringNullableFilter<"Members"> | string | null
    middle_name?: StringNullableFilter<"Members"> | string | null
    nick_name?: StringNullableFilter<"Members"> | string | null
    email?: StringNullableFilter<"Members"> | string | null
    contact_number?: StringNullableFilter<"Members"> | string | null
    birthday?: DateTimeNullableFilter<"Members"> | Date | string | null
    blood_type?: StringNullableFilter<"Members"> | string | null
    address_line_1?: StringNullableFilter<"Members"> | string | null
    street?: StringNullableFilter<"Members"> | string | null
    city_municipality?: StringNullableFilter<"Members"> | string | null
    province?: StringNullableFilter<"Members"> | string | null
    location?: StringNullableFilter<"Members"> | string | null
    chapter?: StringNullableFilter<"Members"> | string | null
    status?: StringNullableFilter<"Members"> | string | null
    gravis_color?: StringNullableFilter<"Members"> | string | null
    gravis_version?: StringNullableFilter<"Members"> | string | null
    mv_file_plate_no?: StringNullableFilter<"Members"> | string | null
    dl_no?: StringNullableFilter<"Members"> | string | null
    dl_type?: StringNullableFilter<"Members"> | string | null
    dl_expiration_date?: DateTimeNullableFilter<"Members"> | Date | string | null
    or_expiration_date?: DateTimeNullableFilter<"Members"> | Date | string | null
    emergency_contact_person?: StringNullableFilter<"Members"> | string | null
    emergency_contact_no?: StringNullableFilter<"Members"> | string | null
    emergency_relationship?: StringNullableFilter<"Members"> | string | null
    rider_name?: StringNullableFilter<"Members"> | string | null
    religion?: StringNullableFilter<"Members"> | string | null
    created_at?: DateTimeFilter<"Members"> | Date | string
    Account_Account_recruiter_idToMembers?: AccountListRelationFilter
    Account_Members_account_idToAccount?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "id">

  export type MembersOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    member_type?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    middle_name?: SortOrderInput | SortOrder
    nick_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contact_number?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    blood_type?: SortOrderInput | SortOrder
    address_line_1?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city_municipality?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    chapter?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    gravis_color?: SortOrderInput | SortOrder
    gravis_version?: SortOrderInput | SortOrder
    mv_file_plate_no?: SortOrderInput | SortOrder
    dl_no?: SortOrderInput | SortOrder
    dl_type?: SortOrderInput | SortOrder
    dl_expiration_date?: SortOrderInput | SortOrder
    or_expiration_date?: SortOrderInput | SortOrder
    emergency_contact_person?: SortOrderInput | SortOrder
    emergency_contact_no?: SortOrderInput | SortOrder
    emergency_relationship?: SortOrderInput | SortOrder
    rider_name?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: MembersCountOrderByAggregateInput
    _max?: MembersMaxOrderByAggregateInput
    _min?: MembersMinOrderByAggregateInput
  }

  export type MembersScalarWhereWithAggregatesInput = {
    AND?: MembersScalarWhereWithAggregatesInput | MembersScalarWhereWithAggregatesInput[]
    OR?: MembersScalarWhereWithAggregatesInput[]
    NOT?: MembersScalarWhereWithAggregatesInput | MembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Members"> | string
    account_id?: StringNullableWithAggregatesFilter<"Members"> | string | null
    member_type?: StringNullableWithAggregatesFilter<"Members"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"Members"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"Members"> | string | null
    middle_name?: StringNullableWithAggregatesFilter<"Members"> | string | null
    nick_name?: StringNullableWithAggregatesFilter<"Members"> | string | null
    email?: StringNullableWithAggregatesFilter<"Members"> | string | null
    contact_number?: StringNullableWithAggregatesFilter<"Members"> | string | null
    birthday?: DateTimeNullableWithAggregatesFilter<"Members"> | Date | string | null
    blood_type?: StringNullableWithAggregatesFilter<"Members"> | string | null
    address_line_1?: StringNullableWithAggregatesFilter<"Members"> | string | null
    street?: StringNullableWithAggregatesFilter<"Members"> | string | null
    city_municipality?: StringNullableWithAggregatesFilter<"Members"> | string | null
    province?: StringNullableWithAggregatesFilter<"Members"> | string | null
    location?: StringNullableWithAggregatesFilter<"Members"> | string | null
    chapter?: StringNullableWithAggregatesFilter<"Members"> | string | null
    status?: StringNullableWithAggregatesFilter<"Members"> | string | null
    gravis_color?: StringNullableWithAggregatesFilter<"Members"> | string | null
    gravis_version?: StringNullableWithAggregatesFilter<"Members"> | string | null
    mv_file_plate_no?: StringNullableWithAggregatesFilter<"Members"> | string | null
    dl_no?: StringNullableWithAggregatesFilter<"Members"> | string | null
    dl_type?: StringNullableWithAggregatesFilter<"Members"> | string | null
    dl_expiration_date?: DateTimeNullableWithAggregatesFilter<"Members"> | Date | string | null
    or_expiration_date?: DateTimeNullableWithAggregatesFilter<"Members"> | Date | string | null
    emergency_contact_person?: StringNullableWithAggregatesFilter<"Members"> | string | null
    emergency_contact_no?: StringNullableWithAggregatesFilter<"Members"> | string | null
    emergency_relationship?: StringNullableWithAggregatesFilter<"Members"> | string | null
    rider_name?: StringNullableWithAggregatesFilter<"Members"> | string | null
    religion?: StringNullableWithAggregatesFilter<"Members"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Members"> | Date | string
  }

  export type NotificationReadStatusWhereInput = {
    AND?: NotificationReadStatusWhereInput | NotificationReadStatusWhereInput[]
    OR?: NotificationReadStatusWhereInput[]
    NOT?: NotificationReadStatusWhereInput | NotificationReadStatusWhereInput[]
    id?: IntFilter<"NotificationReadStatus"> | number
    account_id?: StringFilter<"NotificationReadStatus"> | string
    notification_key?: StringFilter<"NotificationReadStatus"> | string
    read_at?: DateTimeFilter<"NotificationReadStatus"> | Date | string
  }

  export type NotificationReadStatusOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    notification_key?: SortOrder
    read_at?: SortOrder
  }

  export type NotificationReadStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    account_id_notification_key?: NotificationReadStatusAccount_idNotification_keyCompoundUniqueInput
    AND?: NotificationReadStatusWhereInput | NotificationReadStatusWhereInput[]
    OR?: NotificationReadStatusWhereInput[]
    NOT?: NotificationReadStatusWhereInput | NotificationReadStatusWhereInput[]
    account_id?: StringFilter<"NotificationReadStatus"> | string
    notification_key?: StringFilter<"NotificationReadStatus"> | string
    read_at?: DateTimeFilter<"NotificationReadStatus"> | Date | string
  }, "id" | "account_id_notification_key">

  export type NotificationReadStatusOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    notification_key?: SortOrder
    read_at?: SortOrder
    _count?: NotificationReadStatusCountOrderByAggregateInput
    _avg?: NotificationReadStatusAvgOrderByAggregateInput
    _max?: NotificationReadStatusMaxOrderByAggregateInput
    _min?: NotificationReadStatusMinOrderByAggregateInput
    _sum?: NotificationReadStatusSumOrderByAggregateInput
  }

  export type NotificationReadStatusScalarWhereWithAggregatesInput = {
    AND?: NotificationReadStatusScalarWhereWithAggregatesInput | NotificationReadStatusScalarWhereWithAggregatesInput[]
    OR?: NotificationReadStatusScalarWhereWithAggregatesInput[]
    NOT?: NotificationReadStatusScalarWhereWithAggregatesInput | NotificationReadStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotificationReadStatus"> | number
    account_id?: StringWithAggregatesFilter<"NotificationReadStatus"> | string
    notification_key?: StringWithAggregatesFilter<"NotificationReadStatus"> | string
    read_at?: DateTimeWithAggregatesFilter<"NotificationReadStatus"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    role_name?: StringFilter<"Role"> | string
    created_at?: DateTimeFilter<"Role"> | Date | string
    AccountRole?: AccountRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    AccountRole?: AccountRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    role_name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    created_at?: DateTimeFilter<"Role"> | Date | string
    AccountRole?: AccountRoleListRelationFilter
  }, "id" | "role_name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    role_name?: StringWithAggregatesFilter<"Role"> | string
    created_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    username: string
    password: string
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    Members_Account_recruiter_idToMembers?: MembersCreateNestedOneWithoutAccount_Account_recruiter_idToMembersInput
    AccountRole?: AccountRoleCreateNestedManyWithoutAccountInput
    Attendance?: AttendanceCreateNestedManyWithoutAccountInput
    Members_Members_account_idToAccount?: MembersCreateNestedManyWithoutAccount_Members_account_idToAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    recruiter_id?: string | null
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    AccountRole?: AccountRoleUncheckedCreateNestedManyWithoutAccountInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAccountInput
    Members_Members_account_idToAccount?: MembersUncheckedCreateNestedManyWithoutAccount_Members_account_idToAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Members_Account_recruiter_idToMembers?: MembersUpdateOneWithoutAccount_Account_recruiter_idToMembersNestedInput
    AccountRole?: AccountRoleUpdateManyWithoutAccountNestedInput
    Attendance?: AttendanceUpdateManyWithoutAccountNestedInput
    Members_Members_account_idToAccount?: MembersUpdateManyWithoutAccount_Members_account_idToAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recruiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AccountRole?: AccountRoleUncheckedUpdateManyWithoutAccountNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAccountNestedInput
    Members_Members_account_idToAccount?: MembersUncheckedUpdateManyWithoutAccount_Members_account_idToAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    username: string
    password: string
    recruiter_id?: string | null
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recruiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountRoleCreateInput = {
    created_at?: Date | string
    Account: AccountCreateNestedOneWithoutAccountRoleInput
    Role: RoleCreateNestedOneWithoutAccountRoleInput
  }

  export type AccountRoleUncheckedCreateInput = {
    id?: number
    account_id: string
    role_id: string
    created_at?: Date | string
  }

  export type AccountRoleUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateOneRequiredWithoutAccountRoleNestedInput
    Role?: RoleUpdateOneRequiredWithoutAccountRoleNestedInput
  }

  export type AccountRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountRoleCreateManyInput = {
    id?: number
    account_id: string
    role_id: string
    created_at?: Date | string
  }

  export type AccountRoleUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminNotificationCreateInput = {
    recipient_id: string
    sender_id: string
    title: string
    message: string
    severity?: string
    created_at?: Date | string
  }

  export type AdminNotificationUncheckedCreateInput = {
    id?: number
    recipient_id: string
    sender_id: string
    title: string
    message: string
    severity?: string
    created_at?: Date | string
  }

  export type AdminNotificationUpdateInput = {
    recipient_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminNotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipient_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminNotificationCreateManyInput = {
    id?: number
    recipient_id: string
    sender_id: string
    title: string
    message: string
    severity?: string
    created_at?: Date | string
  }

  export type AdminNotificationUpdateManyMutationInput = {
    recipient_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminNotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipient_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    points: number
    created_at?: Date | string
    Account: AccountCreateNestedOneWithoutAttendanceInput
    Event: EventCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: number
    event_id: number
    account_id: string
    points: number
    created_at?: Date | string
  }

  export type AttendanceUpdateInput = {
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateOneRequiredWithoutAttendanceNestedInput
    Event?: EventUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: number
    event_id: number
    account_id: string
    points: number
    created_at?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChaptersCreateInput = {
    chapter_name: string
    leader?: string | null
    asst_leader?: string | null
    created_by?: string | null
    created_at?: Date | string
    Event?: EventCreateNestedManyWithoutChaptersInput
  }

  export type ChaptersUncheckedCreateInput = {
    id?: number
    chapter_name: string
    leader?: string | null
    asst_leader?: string | null
    created_by?: string | null
    created_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutChaptersInput
  }

  export type ChaptersUpdateInput = {
    chapter_name?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    asst_leader?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutChaptersNestedInput
  }

  export type ChaptersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chapter_name?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    asst_leader?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutChaptersNestedInput
  }

  export type ChaptersCreateManyInput = {
    id?: number
    chapter_name: string
    leader?: string | null
    asst_leader?: string | null
    created_by?: string | null
    created_at?: Date | string
  }

  export type ChaptersUpdateManyMutationInput = {
    chapter_name?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    asst_leader?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChaptersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chapter_name?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    asst_leader?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    name: string
    address?: string | null
    event_type: string
    created_by?: string | null
    created_at?: Date | string
    event_date?: Date | string | null
    Attendance?: AttendanceCreateNestedManyWithoutEventInput
    Chapters?: ChaptersCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    event_type: string
    hosted_by?: number | null
    created_by?: string | null
    created_at?: Date | string
    event_date?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUpdateManyWithoutEventNestedInput
    Chapters?: ChaptersUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    hosted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    event_type: string
    hosted_by?: number | null
    created_by?: string | null
    created_at?: Date | string
    event_date?: Date | string | null
  }

  export type EventUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    hosted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembersCreateInput = {
    id?: string
    member_type?: string | null
    first_name?: string | null
    last_name?: string | null
    middle_name?: string | null
    nick_name?: string | null
    email?: string | null
    contact_number?: string | null
    birthday?: Date | string | null
    blood_type?: string | null
    address_line_1?: string | null
    street?: string | null
    city_municipality?: string | null
    province?: string | null
    location?: string | null
    chapter?: string | null
    status?: string | null
    gravis_color?: string | null
    gravis_version?: string | null
    mv_file_plate_no?: string | null
    dl_no?: string | null
    dl_type?: string | null
    dl_expiration_date?: Date | string | null
    or_expiration_date?: Date | string | null
    emergency_contact_person?: string | null
    emergency_contact_no?: string | null
    emergency_relationship?: string | null
    rider_name?: string | null
    religion?: string | null
    created_at?: Date | string
    Account_Account_recruiter_idToMembers?: AccountCreateNestedManyWithoutMembers_Account_recruiter_idToMembersInput
    Account_Members_account_idToAccount?: AccountCreateNestedOneWithoutMembers_Members_account_idToAccountInput
  }

  export type MembersUncheckedCreateInput = {
    id?: string
    account_id?: string | null
    member_type?: string | null
    first_name?: string | null
    last_name?: string | null
    middle_name?: string | null
    nick_name?: string | null
    email?: string | null
    contact_number?: string | null
    birthday?: Date | string | null
    blood_type?: string | null
    address_line_1?: string | null
    street?: string | null
    city_municipality?: string | null
    province?: string | null
    location?: string | null
    chapter?: string | null
    status?: string | null
    gravis_color?: string | null
    gravis_version?: string | null
    mv_file_plate_no?: string | null
    dl_no?: string | null
    dl_type?: string | null
    dl_expiration_date?: Date | string | null
    or_expiration_date?: Date | string | null
    emergency_contact_person?: string | null
    emergency_contact_no?: string | null
    emergency_relationship?: string | null
    rider_name?: string | null
    religion?: string | null
    created_at?: Date | string
    Account_Account_recruiter_idToMembers?: AccountUncheckedCreateNestedManyWithoutMembers_Account_recruiter_idToMembersInput
  }

  export type MembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city_municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_color?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_version?: NullableStringFieldUpdateOperationsInput | string | null
    mv_file_plate_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_type?: NullableStringFieldUpdateOperationsInput | string | null
    dl_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    or_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergency_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    rider_name?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account_Account_recruiter_idToMembers?: AccountUpdateManyWithoutMembers_Account_recruiter_idToMembersNestedInput
    Account_Members_account_idToAccount?: AccountUpdateOneWithoutMembers_Members_account_idToAccountNestedInput
  }

  export type MembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city_municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_color?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_version?: NullableStringFieldUpdateOperationsInput | string | null
    mv_file_plate_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_type?: NullableStringFieldUpdateOperationsInput | string | null
    dl_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    or_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergency_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    rider_name?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account_Account_recruiter_idToMembers?: AccountUncheckedUpdateManyWithoutMembers_Account_recruiter_idToMembersNestedInput
  }

  export type MembersCreateManyInput = {
    id?: string
    account_id?: string | null
    member_type?: string | null
    first_name?: string | null
    last_name?: string | null
    middle_name?: string | null
    nick_name?: string | null
    email?: string | null
    contact_number?: string | null
    birthday?: Date | string | null
    blood_type?: string | null
    address_line_1?: string | null
    street?: string | null
    city_municipality?: string | null
    province?: string | null
    location?: string | null
    chapter?: string | null
    status?: string | null
    gravis_color?: string | null
    gravis_version?: string | null
    mv_file_plate_no?: string | null
    dl_no?: string | null
    dl_type?: string | null
    dl_expiration_date?: Date | string | null
    or_expiration_date?: Date | string | null
    emergency_contact_person?: string | null
    emergency_contact_no?: string | null
    emergency_relationship?: string | null
    rider_name?: string | null
    religion?: string | null
    created_at?: Date | string
  }

  export type MembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city_municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_color?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_version?: NullableStringFieldUpdateOperationsInput | string | null
    mv_file_plate_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_type?: NullableStringFieldUpdateOperationsInput | string | null
    dl_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    or_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergency_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    rider_name?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city_municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_color?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_version?: NullableStringFieldUpdateOperationsInput | string | null
    mv_file_plate_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_type?: NullableStringFieldUpdateOperationsInput | string | null
    dl_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    or_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergency_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    rider_name?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadStatusCreateInput = {
    account_id: string
    notification_key: string
    read_at?: Date | string
  }

  export type NotificationReadStatusUncheckedCreateInput = {
    id?: number
    account_id: string
    notification_key: string
    read_at?: Date | string
  }

  export type NotificationReadStatusUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    notification_key?: StringFieldUpdateOperationsInput | string
    read_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    notification_key?: StringFieldUpdateOperationsInput | string
    read_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadStatusCreateManyInput = {
    id?: number
    account_id: string
    notification_key: string
    read_at?: Date | string
  }

  export type NotificationReadStatusUpdateManyMutationInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    notification_key?: StringFieldUpdateOperationsInput | string
    read_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    notification_key?: StringFieldUpdateOperationsInput | string
    read_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    role_name: string
    created_at?: Date | string
    AccountRole?: AccountRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    role_name: string
    created_at?: Date | string
    AccountRole?: AccountRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    AccountRole?: AccountRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    AccountRole?: AccountRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    role_name: string
    created_at?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MembersNullableScalarRelationFilter = {
    is?: MembersWhereInput | null
    isNot?: MembersWhereInput | null
  }

  export type AccountRoleListRelationFilter = {
    every?: AccountRoleWhereInput
    some?: AccountRoleWhereInput
    none?: AccountRoleWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type MembersListRelationFilter = {
    every?: MembersWhereInput
    some?: MembersWhereInput
    none?: MembersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    recruiter_id?: SortOrder
    accntStatus?: SortOrder
    created_at?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    recruiter_id?: SortOrder
    accntStatus?: SortOrder
    created_at?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    recruiter_id?: SortOrder
    accntStatus?: SortOrder
    created_at?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type AccountRoleAccount_idRole_idCompoundUniqueInput = {
    account_id: string
    role_id: string
  }

  export type AccountRoleCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
  }

  export type AccountRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
  }

  export type AccountRoleMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
  }

  export type AccountRoleSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type AdminNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    recipient_id?: SortOrder
    sender_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    created_at?: SortOrder
  }

  export type AdminNotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    recipient_id?: SortOrder
    sender_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    created_at?: SortOrder
  }

  export type AdminNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    recipient_id?: SortOrder
    sender_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    created_at?: SortOrder
  }

  export type AdminNotificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type AttendanceEvent_idAccount_idCompoundUniqueInput = {
    event_id: number
    account_id: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    account_id?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    points?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    account_id?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    account_id?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    points?: SortOrder
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChaptersCountOrderByAggregateInput = {
    id?: SortOrder
    chapter_name?: SortOrder
    leader?: SortOrder
    asst_leader?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type ChaptersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChaptersMaxOrderByAggregateInput = {
    id?: SortOrder
    chapter_name?: SortOrder
    leader?: SortOrder
    asst_leader?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type ChaptersMinOrderByAggregateInput = {
    id?: SortOrder
    chapter_name?: SortOrder
    leader?: SortOrder
    asst_leader?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type ChaptersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ChaptersNullableScalarRelationFilter = {
    is?: ChaptersWhereInput | null
    isNot?: ChaptersWhereInput | null
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    event_type?: SortOrder
    hosted_by?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    event_date?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    hosted_by?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    event_type?: SortOrder
    hosted_by?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    event_date?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    event_type?: SortOrder
    hosted_by?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    event_date?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    hosted_by?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembersCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    member_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    middle_name?: SortOrder
    nick_name?: SortOrder
    email?: SortOrder
    contact_number?: SortOrder
    birthday?: SortOrder
    blood_type?: SortOrder
    address_line_1?: SortOrder
    street?: SortOrder
    city_municipality?: SortOrder
    province?: SortOrder
    location?: SortOrder
    chapter?: SortOrder
    status?: SortOrder
    gravis_color?: SortOrder
    gravis_version?: SortOrder
    mv_file_plate_no?: SortOrder
    dl_no?: SortOrder
    dl_type?: SortOrder
    dl_expiration_date?: SortOrder
    or_expiration_date?: SortOrder
    emergency_contact_person?: SortOrder
    emergency_contact_no?: SortOrder
    emergency_relationship?: SortOrder
    rider_name?: SortOrder
    religion?: SortOrder
    created_at?: SortOrder
  }

  export type MembersMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    member_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    middle_name?: SortOrder
    nick_name?: SortOrder
    email?: SortOrder
    contact_number?: SortOrder
    birthday?: SortOrder
    blood_type?: SortOrder
    address_line_1?: SortOrder
    street?: SortOrder
    city_municipality?: SortOrder
    province?: SortOrder
    location?: SortOrder
    chapter?: SortOrder
    status?: SortOrder
    gravis_color?: SortOrder
    gravis_version?: SortOrder
    mv_file_plate_no?: SortOrder
    dl_no?: SortOrder
    dl_type?: SortOrder
    dl_expiration_date?: SortOrder
    or_expiration_date?: SortOrder
    emergency_contact_person?: SortOrder
    emergency_contact_no?: SortOrder
    emergency_relationship?: SortOrder
    rider_name?: SortOrder
    religion?: SortOrder
    created_at?: SortOrder
  }

  export type MembersMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    member_type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    middle_name?: SortOrder
    nick_name?: SortOrder
    email?: SortOrder
    contact_number?: SortOrder
    birthday?: SortOrder
    blood_type?: SortOrder
    address_line_1?: SortOrder
    street?: SortOrder
    city_municipality?: SortOrder
    province?: SortOrder
    location?: SortOrder
    chapter?: SortOrder
    status?: SortOrder
    gravis_color?: SortOrder
    gravis_version?: SortOrder
    mv_file_plate_no?: SortOrder
    dl_no?: SortOrder
    dl_type?: SortOrder
    dl_expiration_date?: SortOrder
    or_expiration_date?: SortOrder
    emergency_contact_person?: SortOrder
    emergency_contact_no?: SortOrder
    emergency_relationship?: SortOrder
    rider_name?: SortOrder
    religion?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationReadStatusAccount_idNotification_keyCompoundUniqueInput = {
    account_id: string
    notification_key: string
  }

  export type NotificationReadStatusCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    notification_key?: SortOrder
    read_at?: SortOrder
  }

  export type NotificationReadStatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationReadStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    notification_key?: SortOrder
    read_at?: SortOrder
  }

  export type NotificationReadStatusMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    notification_key?: SortOrder
    read_at?: SortOrder
  }

  export type NotificationReadStatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
  }

  export type MembersCreateNestedOneWithoutAccount_Account_recruiter_idToMembersInput = {
    create?: XOR<MembersCreateWithoutAccount_Account_recruiter_idToMembersInput, MembersUncheckedCreateWithoutAccount_Account_recruiter_idToMembersInput>
    connectOrCreate?: MembersCreateOrConnectWithoutAccount_Account_recruiter_idToMembersInput
    connect?: MembersWhereUniqueInput
  }

  export type AccountRoleCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountRoleCreateWithoutAccountInput, AccountRoleUncheckedCreateWithoutAccountInput> | AccountRoleCreateWithoutAccountInput[] | AccountRoleUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountRoleCreateOrConnectWithoutAccountInput | AccountRoleCreateOrConnectWithoutAccountInput[]
    createMany?: AccountRoleCreateManyAccountInputEnvelope
    connect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutAccountInput = {
    create?: XOR<AttendanceCreateWithoutAccountInput, AttendanceUncheckedCreateWithoutAccountInput> | AttendanceCreateWithoutAccountInput[] | AttendanceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAccountInput | AttendanceCreateOrConnectWithoutAccountInput[]
    createMany?: AttendanceCreateManyAccountInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type MembersCreateNestedManyWithoutAccount_Members_account_idToAccountInput = {
    create?: XOR<MembersCreateWithoutAccount_Members_account_idToAccountInput, MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput> | MembersCreateWithoutAccount_Members_account_idToAccountInput[] | MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutAccount_Members_account_idToAccountInput | MembersCreateOrConnectWithoutAccount_Members_account_idToAccountInput[]
    createMany?: MembersCreateManyAccount_Members_account_idToAccountInputEnvelope
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
  }

  export type AccountRoleUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountRoleCreateWithoutAccountInput, AccountRoleUncheckedCreateWithoutAccountInput> | AccountRoleCreateWithoutAccountInput[] | AccountRoleUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountRoleCreateOrConnectWithoutAccountInput | AccountRoleCreateOrConnectWithoutAccountInput[]
    createMany?: AccountRoleCreateManyAccountInputEnvelope
    connect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<AttendanceCreateWithoutAccountInput, AttendanceUncheckedCreateWithoutAccountInput> | AttendanceCreateWithoutAccountInput[] | AttendanceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAccountInput | AttendanceCreateOrConnectWithoutAccountInput[]
    createMany?: AttendanceCreateManyAccountInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type MembersUncheckedCreateNestedManyWithoutAccount_Members_account_idToAccountInput = {
    create?: XOR<MembersCreateWithoutAccount_Members_account_idToAccountInput, MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput> | MembersCreateWithoutAccount_Members_account_idToAccountInput[] | MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutAccount_Members_account_idToAccountInput | MembersCreateOrConnectWithoutAccount_Members_account_idToAccountInput[]
    createMany?: MembersCreateManyAccount_Members_account_idToAccountInputEnvelope
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MembersUpdateOneWithoutAccount_Account_recruiter_idToMembersNestedInput = {
    create?: XOR<MembersCreateWithoutAccount_Account_recruiter_idToMembersInput, MembersUncheckedCreateWithoutAccount_Account_recruiter_idToMembersInput>
    connectOrCreate?: MembersCreateOrConnectWithoutAccount_Account_recruiter_idToMembersInput
    upsert?: MembersUpsertWithoutAccount_Account_recruiter_idToMembersInput
    disconnect?: MembersWhereInput | boolean
    delete?: MembersWhereInput | boolean
    connect?: MembersWhereUniqueInput
    update?: XOR<XOR<MembersUpdateToOneWithWhereWithoutAccount_Account_recruiter_idToMembersInput, MembersUpdateWithoutAccount_Account_recruiter_idToMembersInput>, MembersUncheckedUpdateWithoutAccount_Account_recruiter_idToMembersInput>
  }

  export type AccountRoleUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountRoleCreateWithoutAccountInput, AccountRoleUncheckedCreateWithoutAccountInput> | AccountRoleCreateWithoutAccountInput[] | AccountRoleUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountRoleCreateOrConnectWithoutAccountInput | AccountRoleCreateOrConnectWithoutAccountInput[]
    upsert?: AccountRoleUpsertWithWhereUniqueWithoutAccountInput | AccountRoleUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountRoleCreateManyAccountInputEnvelope
    set?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    disconnect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    delete?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    connect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    update?: AccountRoleUpdateWithWhereUniqueWithoutAccountInput | AccountRoleUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountRoleUpdateManyWithWhereWithoutAccountInput | AccountRoleUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountRoleScalarWhereInput | AccountRoleScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AttendanceCreateWithoutAccountInput, AttendanceUncheckedCreateWithoutAccountInput> | AttendanceCreateWithoutAccountInput[] | AttendanceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAccountInput | AttendanceCreateOrConnectWithoutAccountInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutAccountInput | AttendanceUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AttendanceCreateManyAccountInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutAccountInput | AttendanceUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutAccountInput | AttendanceUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type MembersUpdateManyWithoutAccount_Members_account_idToAccountNestedInput = {
    create?: XOR<MembersCreateWithoutAccount_Members_account_idToAccountInput, MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput> | MembersCreateWithoutAccount_Members_account_idToAccountInput[] | MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutAccount_Members_account_idToAccountInput | MembersCreateOrConnectWithoutAccount_Members_account_idToAccountInput[]
    upsert?: MembersUpsertWithWhereUniqueWithoutAccount_Members_account_idToAccountInput | MembersUpsertWithWhereUniqueWithoutAccount_Members_account_idToAccountInput[]
    createMany?: MembersCreateManyAccount_Members_account_idToAccountInputEnvelope
    set?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    disconnect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    delete?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    update?: MembersUpdateWithWhereUniqueWithoutAccount_Members_account_idToAccountInput | MembersUpdateWithWhereUniqueWithoutAccount_Members_account_idToAccountInput[]
    updateMany?: MembersUpdateManyWithWhereWithoutAccount_Members_account_idToAccountInput | MembersUpdateManyWithWhereWithoutAccount_Members_account_idToAccountInput[]
    deleteMany?: MembersScalarWhereInput | MembersScalarWhereInput[]
  }

  export type AccountRoleUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountRoleCreateWithoutAccountInput, AccountRoleUncheckedCreateWithoutAccountInput> | AccountRoleCreateWithoutAccountInput[] | AccountRoleUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountRoleCreateOrConnectWithoutAccountInput | AccountRoleCreateOrConnectWithoutAccountInput[]
    upsert?: AccountRoleUpsertWithWhereUniqueWithoutAccountInput | AccountRoleUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountRoleCreateManyAccountInputEnvelope
    set?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    disconnect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    delete?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    connect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    update?: AccountRoleUpdateWithWhereUniqueWithoutAccountInput | AccountRoleUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountRoleUpdateManyWithWhereWithoutAccountInput | AccountRoleUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountRoleScalarWhereInput | AccountRoleScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AttendanceCreateWithoutAccountInput, AttendanceUncheckedCreateWithoutAccountInput> | AttendanceCreateWithoutAccountInput[] | AttendanceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAccountInput | AttendanceCreateOrConnectWithoutAccountInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutAccountInput | AttendanceUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AttendanceCreateManyAccountInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutAccountInput | AttendanceUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutAccountInput | AttendanceUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type MembersUncheckedUpdateManyWithoutAccount_Members_account_idToAccountNestedInput = {
    create?: XOR<MembersCreateWithoutAccount_Members_account_idToAccountInput, MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput> | MembersCreateWithoutAccount_Members_account_idToAccountInput[] | MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutAccount_Members_account_idToAccountInput | MembersCreateOrConnectWithoutAccount_Members_account_idToAccountInput[]
    upsert?: MembersUpsertWithWhereUniqueWithoutAccount_Members_account_idToAccountInput | MembersUpsertWithWhereUniqueWithoutAccount_Members_account_idToAccountInput[]
    createMany?: MembersCreateManyAccount_Members_account_idToAccountInputEnvelope
    set?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    disconnect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    delete?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    update?: MembersUpdateWithWhereUniqueWithoutAccount_Members_account_idToAccountInput | MembersUpdateWithWhereUniqueWithoutAccount_Members_account_idToAccountInput[]
    updateMany?: MembersUpdateManyWithWhereWithoutAccount_Members_account_idToAccountInput | MembersUpdateManyWithWhereWithoutAccount_Members_account_idToAccountInput[]
    deleteMany?: MembersScalarWhereInput | MembersScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutAccountRoleInput = {
    create?: XOR<AccountCreateWithoutAccountRoleInput, AccountUncheckedCreateWithoutAccountRoleInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAccountRoleInput
    connect?: AccountWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutAccountRoleInput = {
    create?: XOR<RoleCreateWithoutAccountRoleInput, RoleUncheckedCreateWithoutAccountRoleInput>
    connectOrCreate?: RoleCreateOrConnectWithoutAccountRoleInput
    connect?: RoleWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutAccountRoleNestedInput = {
    create?: XOR<AccountCreateWithoutAccountRoleInput, AccountUncheckedCreateWithoutAccountRoleInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAccountRoleInput
    upsert?: AccountUpsertWithoutAccountRoleInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutAccountRoleInput, AccountUpdateWithoutAccountRoleInput>, AccountUncheckedUpdateWithoutAccountRoleInput>
  }

  export type RoleUpdateOneRequiredWithoutAccountRoleNestedInput = {
    create?: XOR<RoleCreateWithoutAccountRoleInput, RoleUncheckedCreateWithoutAccountRoleInput>
    connectOrCreate?: RoleCreateOrConnectWithoutAccountRoleInput
    upsert?: RoleUpsertWithoutAccountRoleInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutAccountRoleInput, RoleUpdateWithoutAccountRoleInput>, RoleUncheckedUpdateWithoutAccountRoleInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<AccountCreateWithoutAttendanceInput, AccountUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAttendanceInput
    connect?: AccountWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<EventCreateWithoutAttendanceInput, EventUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendanceInput
    connect?: EventWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<AccountCreateWithoutAttendanceInput, AccountUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAttendanceInput
    upsert?: AccountUpsertWithoutAttendanceInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutAttendanceInput, AccountUpdateWithoutAttendanceInput>, AccountUncheckedUpdateWithoutAttendanceInput>
  }

  export type EventUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<EventCreateWithoutAttendanceInput, EventUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendanceInput
    upsert?: EventUpsertWithoutAttendanceInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutAttendanceInput, EventUpdateWithoutAttendanceInput>, EventUncheckedUpdateWithoutAttendanceInput>
  }

  export type EventCreateNestedManyWithoutChaptersInput = {
    create?: XOR<EventCreateWithoutChaptersInput, EventUncheckedCreateWithoutChaptersInput> | EventCreateWithoutChaptersInput[] | EventUncheckedCreateWithoutChaptersInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChaptersInput | EventCreateOrConnectWithoutChaptersInput[]
    createMany?: EventCreateManyChaptersInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutChaptersInput = {
    create?: XOR<EventCreateWithoutChaptersInput, EventUncheckedCreateWithoutChaptersInput> | EventCreateWithoutChaptersInput[] | EventUncheckedCreateWithoutChaptersInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChaptersInput | EventCreateOrConnectWithoutChaptersInput[]
    createMany?: EventCreateManyChaptersInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutChaptersNestedInput = {
    create?: XOR<EventCreateWithoutChaptersInput, EventUncheckedCreateWithoutChaptersInput> | EventCreateWithoutChaptersInput[] | EventUncheckedCreateWithoutChaptersInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChaptersInput | EventCreateOrConnectWithoutChaptersInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutChaptersInput | EventUpsertWithWhereUniqueWithoutChaptersInput[]
    createMany?: EventCreateManyChaptersInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutChaptersInput | EventUpdateWithWhereUniqueWithoutChaptersInput[]
    updateMany?: EventUpdateManyWithWhereWithoutChaptersInput | EventUpdateManyWithWhereWithoutChaptersInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutChaptersNestedInput = {
    create?: XOR<EventCreateWithoutChaptersInput, EventUncheckedCreateWithoutChaptersInput> | EventCreateWithoutChaptersInput[] | EventUncheckedCreateWithoutChaptersInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChaptersInput | EventCreateOrConnectWithoutChaptersInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutChaptersInput | EventUpsertWithWhereUniqueWithoutChaptersInput[]
    createMany?: EventCreateManyChaptersInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutChaptersInput | EventUpdateWithWhereUniqueWithoutChaptersInput[]
    updateMany?: EventUpdateManyWithWhereWithoutChaptersInput | EventUpdateManyWithWhereWithoutChaptersInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type AttendanceCreateNestedManyWithoutEventInput = {
    create?: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput> | AttendanceCreateWithoutEventInput[] | AttendanceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEventInput | AttendanceCreateOrConnectWithoutEventInput[]
    createMany?: AttendanceCreateManyEventInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ChaptersCreateNestedOneWithoutEventInput = {
    create?: XOR<ChaptersCreateWithoutEventInput, ChaptersUncheckedCreateWithoutEventInput>
    connectOrCreate?: ChaptersCreateOrConnectWithoutEventInput
    connect?: ChaptersWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput> | AttendanceCreateWithoutEventInput[] | AttendanceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEventInput | AttendanceCreateOrConnectWithoutEventInput[]
    createMany?: AttendanceCreateManyEventInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUpdateManyWithoutEventNestedInput = {
    create?: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput> | AttendanceCreateWithoutEventInput[] | AttendanceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEventInput | AttendanceCreateOrConnectWithoutEventInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEventInput | AttendanceUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: AttendanceCreateManyEventInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEventInput | AttendanceUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEventInput | AttendanceUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ChaptersUpdateOneWithoutEventNestedInput = {
    create?: XOR<ChaptersCreateWithoutEventInput, ChaptersUncheckedCreateWithoutEventInput>
    connectOrCreate?: ChaptersCreateOrConnectWithoutEventInput
    upsert?: ChaptersUpsertWithoutEventInput
    disconnect?: ChaptersWhereInput | boolean
    delete?: ChaptersWhereInput | boolean
    connect?: ChaptersWhereUniqueInput
    update?: XOR<XOR<ChaptersUpdateToOneWithWhereWithoutEventInput, ChaptersUpdateWithoutEventInput>, ChaptersUncheckedUpdateWithoutEventInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AttendanceUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput> | AttendanceCreateWithoutEventInput[] | AttendanceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEventInput | AttendanceCreateOrConnectWithoutEventInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEventInput | AttendanceUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: AttendanceCreateManyEventInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEventInput | AttendanceUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEventInput | AttendanceUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AccountCreateNestedManyWithoutMembers_Account_recruiter_idToMembersInput = {
    create?: XOR<AccountCreateWithoutMembers_Account_recruiter_idToMembersInput, AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput> | AccountCreateWithoutMembers_Account_recruiter_idToMembersInput[] | AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutMembers_Account_recruiter_idToMembersInput | AccountCreateOrConnectWithoutMembers_Account_recruiter_idToMembersInput[]
    createMany?: AccountCreateManyMembers_Account_recruiter_idToMembersInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountCreateNestedOneWithoutMembers_Members_account_idToAccountInput = {
    create?: XOR<AccountCreateWithoutMembers_Members_account_idToAccountInput, AccountUncheckedCreateWithoutMembers_Members_account_idToAccountInput>
    connectOrCreate?: AccountCreateOrConnectWithoutMembers_Members_account_idToAccountInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutMembers_Account_recruiter_idToMembersInput = {
    create?: XOR<AccountCreateWithoutMembers_Account_recruiter_idToMembersInput, AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput> | AccountCreateWithoutMembers_Account_recruiter_idToMembersInput[] | AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutMembers_Account_recruiter_idToMembersInput | AccountCreateOrConnectWithoutMembers_Account_recruiter_idToMembersInput[]
    createMany?: AccountCreateManyMembers_Account_recruiter_idToMembersInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutMembers_Account_recruiter_idToMembersNestedInput = {
    create?: XOR<AccountCreateWithoutMembers_Account_recruiter_idToMembersInput, AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput> | AccountCreateWithoutMembers_Account_recruiter_idToMembersInput[] | AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutMembers_Account_recruiter_idToMembersInput | AccountCreateOrConnectWithoutMembers_Account_recruiter_idToMembersInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutMembers_Account_recruiter_idToMembersInput | AccountUpsertWithWhereUniqueWithoutMembers_Account_recruiter_idToMembersInput[]
    createMany?: AccountCreateManyMembers_Account_recruiter_idToMembersInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutMembers_Account_recruiter_idToMembersInput | AccountUpdateWithWhereUniqueWithoutMembers_Account_recruiter_idToMembersInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutMembers_Account_recruiter_idToMembersInput | AccountUpdateManyWithWhereWithoutMembers_Account_recruiter_idToMembersInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountUpdateOneWithoutMembers_Members_account_idToAccountNestedInput = {
    create?: XOR<AccountCreateWithoutMembers_Members_account_idToAccountInput, AccountUncheckedCreateWithoutMembers_Members_account_idToAccountInput>
    connectOrCreate?: AccountCreateOrConnectWithoutMembers_Members_account_idToAccountInput
    upsert?: AccountUpsertWithoutMembers_Members_account_idToAccountInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutMembers_Members_account_idToAccountInput, AccountUpdateWithoutMembers_Members_account_idToAccountInput>, AccountUncheckedUpdateWithoutMembers_Members_account_idToAccountInput>
  }

  export type AccountUncheckedUpdateManyWithoutMembers_Account_recruiter_idToMembersNestedInput = {
    create?: XOR<AccountCreateWithoutMembers_Account_recruiter_idToMembersInput, AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput> | AccountCreateWithoutMembers_Account_recruiter_idToMembersInput[] | AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutMembers_Account_recruiter_idToMembersInput | AccountCreateOrConnectWithoutMembers_Account_recruiter_idToMembersInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutMembers_Account_recruiter_idToMembersInput | AccountUpsertWithWhereUniqueWithoutMembers_Account_recruiter_idToMembersInput[]
    createMany?: AccountCreateManyMembers_Account_recruiter_idToMembersInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutMembers_Account_recruiter_idToMembersInput | AccountUpdateWithWhereUniqueWithoutMembers_Account_recruiter_idToMembersInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutMembers_Account_recruiter_idToMembersInput | AccountUpdateManyWithWhereWithoutMembers_Account_recruiter_idToMembersInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<AccountRoleCreateWithoutRoleInput, AccountRoleUncheckedCreateWithoutRoleInput> | AccountRoleCreateWithoutRoleInput[] | AccountRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AccountRoleCreateOrConnectWithoutRoleInput | AccountRoleCreateOrConnectWithoutRoleInput[]
    createMany?: AccountRoleCreateManyRoleInputEnvelope
    connect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
  }

  export type AccountRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<AccountRoleCreateWithoutRoleInput, AccountRoleUncheckedCreateWithoutRoleInput> | AccountRoleCreateWithoutRoleInput[] | AccountRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AccountRoleCreateOrConnectWithoutRoleInput | AccountRoleCreateOrConnectWithoutRoleInput[]
    createMany?: AccountRoleCreateManyRoleInputEnvelope
    connect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
  }

  export type AccountRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<AccountRoleCreateWithoutRoleInput, AccountRoleUncheckedCreateWithoutRoleInput> | AccountRoleCreateWithoutRoleInput[] | AccountRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AccountRoleCreateOrConnectWithoutRoleInput | AccountRoleCreateOrConnectWithoutRoleInput[]
    upsert?: AccountRoleUpsertWithWhereUniqueWithoutRoleInput | AccountRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: AccountRoleCreateManyRoleInputEnvelope
    set?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    disconnect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    delete?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    connect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    update?: AccountRoleUpdateWithWhereUniqueWithoutRoleInput | AccountRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: AccountRoleUpdateManyWithWhereWithoutRoleInput | AccountRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: AccountRoleScalarWhereInput | AccountRoleScalarWhereInput[]
  }

  export type AccountRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<AccountRoleCreateWithoutRoleInput, AccountRoleUncheckedCreateWithoutRoleInput> | AccountRoleCreateWithoutRoleInput[] | AccountRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AccountRoleCreateOrConnectWithoutRoleInput | AccountRoleCreateOrConnectWithoutRoleInput[]
    upsert?: AccountRoleUpsertWithWhereUniqueWithoutRoleInput | AccountRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: AccountRoleCreateManyRoleInputEnvelope
    set?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    disconnect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    delete?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    connect?: AccountRoleWhereUniqueInput | AccountRoleWhereUniqueInput[]
    update?: AccountRoleUpdateWithWhereUniqueWithoutRoleInput | AccountRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: AccountRoleUpdateManyWithWhereWithoutRoleInput | AccountRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: AccountRoleScalarWhereInput | AccountRoleScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MembersCreateWithoutAccount_Account_recruiter_idToMembersInput = {
    id?: string
    member_type?: string | null
    first_name?: string | null
    last_name?: string | null
    middle_name?: string | null
    nick_name?: string | null
    email?: string | null
    contact_number?: string | null
    birthday?: Date | string | null
    blood_type?: string | null
    address_line_1?: string | null
    street?: string | null
    city_municipality?: string | null
    province?: string | null
    location?: string | null
    chapter?: string | null
    status?: string | null
    gravis_color?: string | null
    gravis_version?: string | null
    mv_file_plate_no?: string | null
    dl_no?: string | null
    dl_type?: string | null
    dl_expiration_date?: Date | string | null
    or_expiration_date?: Date | string | null
    emergency_contact_person?: string | null
    emergency_contact_no?: string | null
    emergency_relationship?: string | null
    rider_name?: string | null
    religion?: string | null
    created_at?: Date | string
    Account_Members_account_idToAccount?: AccountCreateNestedOneWithoutMembers_Members_account_idToAccountInput
  }

  export type MembersUncheckedCreateWithoutAccount_Account_recruiter_idToMembersInput = {
    id?: string
    account_id?: string | null
    member_type?: string | null
    first_name?: string | null
    last_name?: string | null
    middle_name?: string | null
    nick_name?: string | null
    email?: string | null
    contact_number?: string | null
    birthday?: Date | string | null
    blood_type?: string | null
    address_line_1?: string | null
    street?: string | null
    city_municipality?: string | null
    province?: string | null
    location?: string | null
    chapter?: string | null
    status?: string | null
    gravis_color?: string | null
    gravis_version?: string | null
    mv_file_plate_no?: string | null
    dl_no?: string | null
    dl_type?: string | null
    dl_expiration_date?: Date | string | null
    or_expiration_date?: Date | string | null
    emergency_contact_person?: string | null
    emergency_contact_no?: string | null
    emergency_relationship?: string | null
    rider_name?: string | null
    religion?: string | null
    created_at?: Date | string
  }

  export type MembersCreateOrConnectWithoutAccount_Account_recruiter_idToMembersInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutAccount_Account_recruiter_idToMembersInput, MembersUncheckedCreateWithoutAccount_Account_recruiter_idToMembersInput>
  }

  export type AccountRoleCreateWithoutAccountInput = {
    created_at?: Date | string
    Role: RoleCreateNestedOneWithoutAccountRoleInput
  }

  export type AccountRoleUncheckedCreateWithoutAccountInput = {
    id?: number
    role_id: string
    created_at?: Date | string
  }

  export type AccountRoleCreateOrConnectWithoutAccountInput = {
    where: AccountRoleWhereUniqueInput
    create: XOR<AccountRoleCreateWithoutAccountInput, AccountRoleUncheckedCreateWithoutAccountInput>
  }

  export type AccountRoleCreateManyAccountInputEnvelope = {
    data: AccountRoleCreateManyAccountInput | AccountRoleCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutAccountInput = {
    points: number
    created_at?: Date | string
    Event: EventCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutAccountInput = {
    id?: number
    event_id: number
    points: number
    created_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutAccountInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutAccountInput, AttendanceUncheckedCreateWithoutAccountInput>
  }

  export type AttendanceCreateManyAccountInputEnvelope = {
    data: AttendanceCreateManyAccountInput | AttendanceCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type MembersCreateWithoutAccount_Members_account_idToAccountInput = {
    id?: string
    member_type?: string | null
    first_name?: string | null
    last_name?: string | null
    middle_name?: string | null
    nick_name?: string | null
    email?: string | null
    contact_number?: string | null
    birthday?: Date | string | null
    blood_type?: string | null
    address_line_1?: string | null
    street?: string | null
    city_municipality?: string | null
    province?: string | null
    location?: string | null
    chapter?: string | null
    status?: string | null
    gravis_color?: string | null
    gravis_version?: string | null
    mv_file_plate_no?: string | null
    dl_no?: string | null
    dl_type?: string | null
    dl_expiration_date?: Date | string | null
    or_expiration_date?: Date | string | null
    emergency_contact_person?: string | null
    emergency_contact_no?: string | null
    emergency_relationship?: string | null
    rider_name?: string | null
    religion?: string | null
    created_at?: Date | string
    Account_Account_recruiter_idToMembers?: AccountCreateNestedManyWithoutMembers_Account_recruiter_idToMembersInput
  }

  export type MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput = {
    id?: string
    member_type?: string | null
    first_name?: string | null
    last_name?: string | null
    middle_name?: string | null
    nick_name?: string | null
    email?: string | null
    contact_number?: string | null
    birthday?: Date | string | null
    blood_type?: string | null
    address_line_1?: string | null
    street?: string | null
    city_municipality?: string | null
    province?: string | null
    location?: string | null
    chapter?: string | null
    status?: string | null
    gravis_color?: string | null
    gravis_version?: string | null
    mv_file_plate_no?: string | null
    dl_no?: string | null
    dl_type?: string | null
    dl_expiration_date?: Date | string | null
    or_expiration_date?: Date | string | null
    emergency_contact_person?: string | null
    emergency_contact_no?: string | null
    emergency_relationship?: string | null
    rider_name?: string | null
    religion?: string | null
    created_at?: Date | string
    Account_Account_recruiter_idToMembers?: AccountUncheckedCreateNestedManyWithoutMembers_Account_recruiter_idToMembersInput
  }

  export type MembersCreateOrConnectWithoutAccount_Members_account_idToAccountInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutAccount_Members_account_idToAccountInput, MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput>
  }

  export type MembersCreateManyAccount_Members_account_idToAccountInputEnvelope = {
    data: MembersCreateManyAccount_Members_account_idToAccountInput | MembersCreateManyAccount_Members_account_idToAccountInput[]
    skipDuplicates?: boolean
  }

  export type MembersUpsertWithoutAccount_Account_recruiter_idToMembersInput = {
    update: XOR<MembersUpdateWithoutAccount_Account_recruiter_idToMembersInput, MembersUncheckedUpdateWithoutAccount_Account_recruiter_idToMembersInput>
    create: XOR<MembersCreateWithoutAccount_Account_recruiter_idToMembersInput, MembersUncheckedCreateWithoutAccount_Account_recruiter_idToMembersInput>
    where?: MembersWhereInput
  }

  export type MembersUpdateToOneWithWhereWithoutAccount_Account_recruiter_idToMembersInput = {
    where?: MembersWhereInput
    data: XOR<MembersUpdateWithoutAccount_Account_recruiter_idToMembersInput, MembersUncheckedUpdateWithoutAccount_Account_recruiter_idToMembersInput>
  }

  export type MembersUpdateWithoutAccount_Account_recruiter_idToMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city_municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_color?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_version?: NullableStringFieldUpdateOperationsInput | string | null
    mv_file_plate_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_type?: NullableStringFieldUpdateOperationsInput | string | null
    dl_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    or_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergency_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    rider_name?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account_Members_account_idToAccount?: AccountUpdateOneWithoutMembers_Members_account_idToAccountNestedInput
  }

  export type MembersUncheckedUpdateWithoutAccount_Account_recruiter_idToMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city_municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_color?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_version?: NullableStringFieldUpdateOperationsInput | string | null
    mv_file_plate_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_type?: NullableStringFieldUpdateOperationsInput | string | null
    dl_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    or_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergency_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    rider_name?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountRoleUpsertWithWhereUniqueWithoutAccountInput = {
    where: AccountRoleWhereUniqueInput
    update: XOR<AccountRoleUpdateWithoutAccountInput, AccountRoleUncheckedUpdateWithoutAccountInput>
    create: XOR<AccountRoleCreateWithoutAccountInput, AccountRoleUncheckedCreateWithoutAccountInput>
  }

  export type AccountRoleUpdateWithWhereUniqueWithoutAccountInput = {
    where: AccountRoleWhereUniqueInput
    data: XOR<AccountRoleUpdateWithoutAccountInput, AccountRoleUncheckedUpdateWithoutAccountInput>
  }

  export type AccountRoleUpdateManyWithWhereWithoutAccountInput = {
    where: AccountRoleScalarWhereInput
    data: XOR<AccountRoleUpdateManyMutationInput, AccountRoleUncheckedUpdateManyWithoutAccountInput>
  }

  export type AccountRoleScalarWhereInput = {
    AND?: AccountRoleScalarWhereInput | AccountRoleScalarWhereInput[]
    OR?: AccountRoleScalarWhereInput[]
    NOT?: AccountRoleScalarWhereInput | AccountRoleScalarWhereInput[]
    id?: IntFilter<"AccountRole"> | number
    account_id?: StringFilter<"AccountRole"> | string
    role_id?: StringFilter<"AccountRole"> | string
    created_at?: DateTimeFilter<"AccountRole"> | Date | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutAccountInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutAccountInput, AttendanceUncheckedUpdateWithoutAccountInput>
    create: XOR<AttendanceCreateWithoutAccountInput, AttendanceUncheckedCreateWithoutAccountInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutAccountInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutAccountInput, AttendanceUncheckedUpdateWithoutAccountInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutAccountInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutAccountInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: IntFilter<"Attendance"> | number
    event_id?: IntFilter<"Attendance"> | number
    account_id?: StringFilter<"Attendance"> | string
    points?: IntFilter<"Attendance"> | number
    created_at?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type MembersUpsertWithWhereUniqueWithoutAccount_Members_account_idToAccountInput = {
    where: MembersWhereUniqueInput
    update: XOR<MembersUpdateWithoutAccount_Members_account_idToAccountInput, MembersUncheckedUpdateWithoutAccount_Members_account_idToAccountInput>
    create: XOR<MembersCreateWithoutAccount_Members_account_idToAccountInput, MembersUncheckedCreateWithoutAccount_Members_account_idToAccountInput>
  }

  export type MembersUpdateWithWhereUniqueWithoutAccount_Members_account_idToAccountInput = {
    where: MembersWhereUniqueInput
    data: XOR<MembersUpdateWithoutAccount_Members_account_idToAccountInput, MembersUncheckedUpdateWithoutAccount_Members_account_idToAccountInput>
  }

  export type MembersUpdateManyWithWhereWithoutAccount_Members_account_idToAccountInput = {
    where: MembersScalarWhereInput
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyWithoutAccount_Members_account_idToAccountInput>
  }

  export type MembersScalarWhereInput = {
    AND?: MembersScalarWhereInput | MembersScalarWhereInput[]
    OR?: MembersScalarWhereInput[]
    NOT?: MembersScalarWhereInput | MembersScalarWhereInput[]
    id?: StringFilter<"Members"> | string
    account_id?: StringNullableFilter<"Members"> | string | null
    member_type?: StringNullableFilter<"Members"> | string | null
    first_name?: StringNullableFilter<"Members"> | string | null
    last_name?: StringNullableFilter<"Members"> | string | null
    middle_name?: StringNullableFilter<"Members"> | string | null
    nick_name?: StringNullableFilter<"Members"> | string | null
    email?: StringNullableFilter<"Members"> | string | null
    contact_number?: StringNullableFilter<"Members"> | string | null
    birthday?: DateTimeNullableFilter<"Members"> | Date | string | null
    blood_type?: StringNullableFilter<"Members"> | string | null
    address_line_1?: StringNullableFilter<"Members"> | string | null
    street?: StringNullableFilter<"Members"> | string | null
    city_municipality?: StringNullableFilter<"Members"> | string | null
    province?: StringNullableFilter<"Members"> | string | null
    location?: StringNullableFilter<"Members"> | string | null
    chapter?: StringNullableFilter<"Members"> | string | null
    status?: StringNullableFilter<"Members"> | string | null
    gravis_color?: StringNullableFilter<"Members"> | string | null
    gravis_version?: StringNullableFilter<"Members"> | string | null
    mv_file_plate_no?: StringNullableFilter<"Members"> | string | null
    dl_no?: StringNullableFilter<"Members"> | string | null
    dl_type?: StringNullableFilter<"Members"> | string | null
    dl_expiration_date?: DateTimeNullableFilter<"Members"> | Date | string | null
    or_expiration_date?: DateTimeNullableFilter<"Members"> | Date | string | null
    emergency_contact_person?: StringNullableFilter<"Members"> | string | null
    emergency_contact_no?: StringNullableFilter<"Members"> | string | null
    emergency_relationship?: StringNullableFilter<"Members"> | string | null
    rider_name?: StringNullableFilter<"Members"> | string | null
    religion?: StringNullableFilter<"Members"> | string | null
    created_at?: DateTimeFilter<"Members"> | Date | string
  }

  export type AccountCreateWithoutAccountRoleInput = {
    id?: string
    username: string
    password: string
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    Members_Account_recruiter_idToMembers?: MembersCreateNestedOneWithoutAccount_Account_recruiter_idToMembersInput
    Attendance?: AttendanceCreateNestedManyWithoutAccountInput
    Members_Members_account_idToAccount?: MembersCreateNestedManyWithoutAccount_Members_account_idToAccountInput
  }

  export type AccountUncheckedCreateWithoutAccountRoleInput = {
    id?: string
    username: string
    password: string
    recruiter_id?: string | null
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAccountInput
    Members_Members_account_idToAccount?: MembersUncheckedCreateNestedManyWithoutAccount_Members_account_idToAccountInput
  }

  export type AccountCreateOrConnectWithoutAccountRoleInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAccountRoleInput, AccountUncheckedCreateWithoutAccountRoleInput>
  }

  export type RoleCreateWithoutAccountRoleInput = {
    id?: string
    role_name: string
    created_at?: Date | string
  }

  export type RoleUncheckedCreateWithoutAccountRoleInput = {
    id?: string
    role_name: string
    created_at?: Date | string
  }

  export type RoleCreateOrConnectWithoutAccountRoleInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutAccountRoleInput, RoleUncheckedCreateWithoutAccountRoleInput>
  }

  export type AccountUpsertWithoutAccountRoleInput = {
    update: XOR<AccountUpdateWithoutAccountRoleInput, AccountUncheckedUpdateWithoutAccountRoleInput>
    create: XOR<AccountCreateWithoutAccountRoleInput, AccountUncheckedCreateWithoutAccountRoleInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutAccountRoleInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutAccountRoleInput, AccountUncheckedUpdateWithoutAccountRoleInput>
  }

  export type AccountUpdateWithoutAccountRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Members_Account_recruiter_idToMembers?: MembersUpdateOneWithoutAccount_Account_recruiter_idToMembersNestedInput
    Attendance?: AttendanceUpdateManyWithoutAccountNestedInput
    Members_Members_account_idToAccount?: MembersUpdateManyWithoutAccount_Members_account_idToAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutAccountRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recruiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutAccountNestedInput
    Members_Members_account_idToAccount?: MembersUncheckedUpdateManyWithoutAccount_Members_account_idToAccountNestedInput
  }

  export type RoleUpsertWithoutAccountRoleInput = {
    update: XOR<RoleUpdateWithoutAccountRoleInput, RoleUncheckedUpdateWithoutAccountRoleInput>
    create: XOR<RoleCreateWithoutAccountRoleInput, RoleUncheckedCreateWithoutAccountRoleInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutAccountRoleInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutAccountRoleInput, RoleUncheckedUpdateWithoutAccountRoleInput>
  }

  export type RoleUpdateWithoutAccountRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutAccountRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateWithoutAttendanceInput = {
    id?: string
    username: string
    password: string
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    Members_Account_recruiter_idToMembers?: MembersCreateNestedOneWithoutAccount_Account_recruiter_idToMembersInput
    AccountRole?: AccountRoleCreateNestedManyWithoutAccountInput
    Members_Members_account_idToAccount?: MembersCreateNestedManyWithoutAccount_Members_account_idToAccountInput
  }

  export type AccountUncheckedCreateWithoutAttendanceInput = {
    id?: string
    username: string
    password: string
    recruiter_id?: string | null
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    AccountRole?: AccountRoleUncheckedCreateNestedManyWithoutAccountInput
    Members_Members_account_idToAccount?: MembersUncheckedCreateNestedManyWithoutAccount_Members_account_idToAccountInput
  }

  export type AccountCreateOrConnectWithoutAttendanceInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAttendanceInput, AccountUncheckedCreateWithoutAttendanceInput>
  }

  export type EventCreateWithoutAttendanceInput = {
    name: string
    address?: string | null
    event_type: string
    created_by?: string | null
    created_at?: Date | string
    event_date?: Date | string | null
    Chapters?: ChaptersCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutAttendanceInput = {
    id?: number
    name: string
    address?: string | null
    event_type: string
    hosted_by?: number | null
    created_by?: string | null
    created_at?: Date | string
    event_date?: Date | string | null
  }

  export type EventCreateOrConnectWithoutAttendanceInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAttendanceInput, EventUncheckedCreateWithoutAttendanceInput>
  }

  export type AccountUpsertWithoutAttendanceInput = {
    update: XOR<AccountUpdateWithoutAttendanceInput, AccountUncheckedUpdateWithoutAttendanceInput>
    create: XOR<AccountCreateWithoutAttendanceInput, AccountUncheckedCreateWithoutAttendanceInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutAttendanceInput, AccountUncheckedUpdateWithoutAttendanceInput>
  }

  export type AccountUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Members_Account_recruiter_idToMembers?: MembersUpdateOneWithoutAccount_Account_recruiter_idToMembersNestedInput
    AccountRole?: AccountRoleUpdateManyWithoutAccountNestedInput
    Members_Members_account_idToAccount?: MembersUpdateManyWithoutAccount_Members_account_idToAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recruiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AccountRole?: AccountRoleUncheckedUpdateManyWithoutAccountNestedInput
    Members_Members_account_idToAccount?: MembersUncheckedUpdateManyWithoutAccount_Members_account_idToAccountNestedInput
  }

  export type EventUpsertWithoutAttendanceInput = {
    update: XOR<EventUpdateWithoutAttendanceInput, EventUncheckedUpdateWithoutAttendanceInput>
    create: XOR<EventCreateWithoutAttendanceInput, EventUncheckedCreateWithoutAttendanceInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutAttendanceInput, EventUncheckedUpdateWithoutAttendanceInput>
  }

  export type EventUpdateWithoutAttendanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Chapters?: ChaptersUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    hosted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateWithoutChaptersInput = {
    name: string
    address?: string | null
    event_type: string
    created_by?: string | null
    created_at?: Date | string
    event_date?: Date | string | null
    Attendance?: AttendanceCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutChaptersInput = {
    id?: number
    name: string
    address?: string | null
    event_type: string
    created_by?: string | null
    created_at?: Date | string
    event_date?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutChaptersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutChaptersInput, EventUncheckedCreateWithoutChaptersInput>
  }

  export type EventCreateManyChaptersInputEnvelope = {
    data: EventCreateManyChaptersInput | EventCreateManyChaptersInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutChaptersInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutChaptersInput, EventUncheckedUpdateWithoutChaptersInput>
    create: XOR<EventCreateWithoutChaptersInput, EventUncheckedCreateWithoutChaptersInput>
  }

  export type EventUpdateWithWhereUniqueWithoutChaptersInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutChaptersInput, EventUncheckedUpdateWithoutChaptersInput>
  }

  export type EventUpdateManyWithWhereWithoutChaptersInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutChaptersInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    event_type?: StringFilter<"Event"> | string
    hosted_by?: IntNullableFilter<"Event"> | number | null
    created_by?: StringNullableFilter<"Event"> | string | null
    created_at?: DateTimeFilter<"Event"> | Date | string
    event_date?: DateTimeNullableFilter<"Event"> | Date | string | null
  }

  export type AttendanceCreateWithoutEventInput = {
    points: number
    created_at?: Date | string
    Account: AccountCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutEventInput = {
    id?: number
    account_id: string
    points: number
    created_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutEventInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput>
  }

  export type AttendanceCreateManyEventInputEnvelope = {
    data: AttendanceCreateManyEventInput | AttendanceCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ChaptersCreateWithoutEventInput = {
    chapter_name: string
    leader?: string | null
    asst_leader?: string | null
    created_by?: string | null
    created_at?: Date | string
  }

  export type ChaptersUncheckedCreateWithoutEventInput = {
    id?: number
    chapter_name: string
    leader?: string | null
    asst_leader?: string | null
    created_by?: string | null
    created_at?: Date | string
  }

  export type ChaptersCreateOrConnectWithoutEventInput = {
    where: ChaptersWhereUniqueInput
    create: XOR<ChaptersCreateWithoutEventInput, ChaptersUncheckedCreateWithoutEventInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutEventInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutEventInput, AttendanceUncheckedUpdateWithoutEventInput>
    create: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutEventInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutEventInput, AttendanceUncheckedUpdateWithoutEventInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutEventInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutEventInput>
  }

  export type ChaptersUpsertWithoutEventInput = {
    update: XOR<ChaptersUpdateWithoutEventInput, ChaptersUncheckedUpdateWithoutEventInput>
    create: XOR<ChaptersCreateWithoutEventInput, ChaptersUncheckedCreateWithoutEventInput>
    where?: ChaptersWhereInput
  }

  export type ChaptersUpdateToOneWithWhereWithoutEventInput = {
    where?: ChaptersWhereInput
    data: XOR<ChaptersUpdateWithoutEventInput, ChaptersUncheckedUpdateWithoutEventInput>
  }

  export type ChaptersUpdateWithoutEventInput = {
    chapter_name?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    asst_leader?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChaptersUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    chapter_name?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    asst_leader?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateWithoutMembers_Account_recruiter_idToMembersInput = {
    id?: string
    username: string
    password: string
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    AccountRole?: AccountRoleCreateNestedManyWithoutAccountInput
    Attendance?: AttendanceCreateNestedManyWithoutAccountInput
    Members_Members_account_idToAccount?: MembersCreateNestedManyWithoutAccount_Members_account_idToAccountInput
  }

  export type AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput = {
    id?: string
    username: string
    password: string
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    AccountRole?: AccountRoleUncheckedCreateNestedManyWithoutAccountInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAccountInput
    Members_Members_account_idToAccount?: MembersUncheckedCreateNestedManyWithoutAccount_Members_account_idToAccountInput
  }

  export type AccountCreateOrConnectWithoutMembers_Account_recruiter_idToMembersInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutMembers_Account_recruiter_idToMembersInput, AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput>
  }

  export type AccountCreateManyMembers_Account_recruiter_idToMembersInputEnvelope = {
    data: AccountCreateManyMembers_Account_recruiter_idToMembersInput | AccountCreateManyMembers_Account_recruiter_idToMembersInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutMembers_Members_account_idToAccountInput = {
    id?: string
    username: string
    password: string
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    Members_Account_recruiter_idToMembers?: MembersCreateNestedOneWithoutAccount_Account_recruiter_idToMembersInput
    AccountRole?: AccountRoleCreateNestedManyWithoutAccountInput
    Attendance?: AttendanceCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutMembers_Members_account_idToAccountInput = {
    id?: string
    username: string
    password: string
    recruiter_id?: string | null
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    AccountRole?: AccountRoleUncheckedCreateNestedManyWithoutAccountInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutMembers_Members_account_idToAccountInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutMembers_Members_account_idToAccountInput, AccountUncheckedCreateWithoutMembers_Members_account_idToAccountInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutMembers_Account_recruiter_idToMembersInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutMembers_Account_recruiter_idToMembersInput, AccountUncheckedUpdateWithoutMembers_Account_recruiter_idToMembersInput>
    create: XOR<AccountCreateWithoutMembers_Account_recruiter_idToMembersInput, AccountUncheckedCreateWithoutMembers_Account_recruiter_idToMembersInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutMembers_Account_recruiter_idToMembersInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutMembers_Account_recruiter_idToMembersInput, AccountUncheckedUpdateWithoutMembers_Account_recruiter_idToMembersInput>
  }

  export type AccountUpdateManyWithWhereWithoutMembers_Account_recruiter_idToMembersInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutMembers_Account_recruiter_idToMembersInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    username?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    recruiter_id?: StringNullableFilter<"Account"> | string | null
    accntStatus?: StringNullableFilter<"Account"> | string | null
    created_at?: DateTimeFilter<"Account"> | Date | string
    fullname?: StringNullableFilter<"Account"> | string | null
    email?: StringNullableFilter<"Account"> | string | null
    resetToken?: StringNullableFilter<"Account"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Account"> | Date | string | null
  }

  export type AccountUpsertWithoutMembers_Members_account_idToAccountInput = {
    update: XOR<AccountUpdateWithoutMembers_Members_account_idToAccountInput, AccountUncheckedUpdateWithoutMembers_Members_account_idToAccountInput>
    create: XOR<AccountCreateWithoutMembers_Members_account_idToAccountInput, AccountUncheckedCreateWithoutMembers_Members_account_idToAccountInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutMembers_Members_account_idToAccountInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutMembers_Members_account_idToAccountInput, AccountUncheckedUpdateWithoutMembers_Members_account_idToAccountInput>
  }

  export type AccountUpdateWithoutMembers_Members_account_idToAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Members_Account_recruiter_idToMembers?: MembersUpdateOneWithoutAccount_Account_recruiter_idToMembersNestedInput
    AccountRole?: AccountRoleUpdateManyWithoutAccountNestedInput
    Attendance?: AttendanceUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutMembers_Members_account_idToAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recruiter_id?: NullableStringFieldUpdateOperationsInput | string | null
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AccountRole?: AccountRoleUncheckedUpdateManyWithoutAccountNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountRoleCreateWithoutRoleInput = {
    created_at?: Date | string
    Account: AccountCreateNestedOneWithoutAccountRoleInput
  }

  export type AccountRoleUncheckedCreateWithoutRoleInput = {
    id?: number
    account_id: string
    created_at?: Date | string
  }

  export type AccountRoleCreateOrConnectWithoutRoleInput = {
    where: AccountRoleWhereUniqueInput
    create: XOR<AccountRoleCreateWithoutRoleInput, AccountRoleUncheckedCreateWithoutRoleInput>
  }

  export type AccountRoleCreateManyRoleInputEnvelope = {
    data: AccountRoleCreateManyRoleInput | AccountRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type AccountRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: AccountRoleWhereUniqueInput
    update: XOR<AccountRoleUpdateWithoutRoleInput, AccountRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<AccountRoleCreateWithoutRoleInput, AccountRoleUncheckedCreateWithoutRoleInput>
  }

  export type AccountRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: AccountRoleWhereUniqueInput
    data: XOR<AccountRoleUpdateWithoutRoleInput, AccountRoleUncheckedUpdateWithoutRoleInput>
  }

  export type AccountRoleUpdateManyWithWhereWithoutRoleInput = {
    where: AccountRoleScalarWhereInput
    data: XOR<AccountRoleUpdateManyMutationInput, AccountRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type AccountRoleCreateManyAccountInput = {
    id?: number
    role_id: string
    created_at?: Date | string
  }

  export type AttendanceCreateManyAccountInput = {
    id?: number
    event_id: number
    points: number
    created_at?: Date | string
  }

  export type MembersCreateManyAccount_Members_account_idToAccountInput = {
    id?: string
    member_type?: string | null
    first_name?: string | null
    last_name?: string | null
    middle_name?: string | null
    nick_name?: string | null
    email?: string | null
    contact_number?: string | null
    birthday?: Date | string | null
    blood_type?: string | null
    address_line_1?: string | null
    street?: string | null
    city_municipality?: string | null
    province?: string | null
    location?: string | null
    chapter?: string | null
    status?: string | null
    gravis_color?: string | null
    gravis_version?: string | null
    mv_file_plate_no?: string | null
    dl_no?: string | null
    dl_type?: string | null
    dl_expiration_date?: Date | string | null
    or_expiration_date?: Date | string | null
    emergency_contact_person?: string | null
    emergency_contact_no?: string | null
    emergency_relationship?: string | null
    rider_name?: string | null
    religion?: string | null
    created_at?: Date | string
  }

  export type AccountRoleUpdateWithoutAccountInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: RoleUpdateOneRequiredWithoutAccountRoleNestedInput
  }

  export type AccountRoleUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountRoleUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutAccountInput = {
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembersUpdateWithoutAccount_Members_account_idToAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city_municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_color?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_version?: NullableStringFieldUpdateOperationsInput | string | null
    mv_file_plate_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_type?: NullableStringFieldUpdateOperationsInput | string | null
    dl_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    or_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergency_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    rider_name?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account_Account_recruiter_idToMembers?: AccountUpdateManyWithoutMembers_Account_recruiter_idToMembersNestedInput
  }

  export type MembersUncheckedUpdateWithoutAccount_Members_account_idToAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city_municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_color?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_version?: NullableStringFieldUpdateOperationsInput | string | null
    mv_file_plate_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_type?: NullableStringFieldUpdateOperationsInput | string | null
    dl_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    or_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergency_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    rider_name?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account_Account_recruiter_idToMembers?: AccountUncheckedUpdateManyWithoutMembers_Account_recruiter_idToMembersNestedInput
  }

  export type MembersUncheckedUpdateManyWithoutAccount_Members_account_idToAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    address_line_1?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city_municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    chapter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_color?: NullableStringFieldUpdateOperationsInput | string | null
    gravis_version?: NullableStringFieldUpdateOperationsInput | string | null
    mv_file_plate_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_no?: NullableStringFieldUpdateOperationsInput | string | null
    dl_type?: NullableStringFieldUpdateOperationsInput | string | null
    dl_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    or_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergency_contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    rider_name?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyChaptersInput = {
    id?: number
    name: string
    address?: string | null
    event_type: string
    created_by?: string | null
    created_at?: Date | string
    event_date?: Date | string | null
  }

  export type EventUpdateWithoutChaptersInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutChaptersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutChaptersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceCreateManyEventInput = {
    id?: number
    account_id: string
    points: number
    created_at?: Date | string
  }

  export type AttendanceUpdateWithoutEventInput = {
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyMembers_Account_recruiter_idToMembersInput = {
    id?: string
    username: string
    password: string
    accntStatus?: string | null
    created_at?: Date | string
    fullname?: string | null
    email?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type AccountUpdateWithoutMembers_Account_recruiter_idToMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AccountRole?: AccountRoleUpdateManyWithoutAccountNestedInput
    Attendance?: AttendanceUpdateManyWithoutAccountNestedInput
    Members_Members_account_idToAccount?: MembersUpdateManyWithoutAccount_Members_account_idToAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutMembers_Account_recruiter_idToMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AccountRole?: AccountRoleUncheckedUpdateManyWithoutAccountNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAccountNestedInput
    Members_Members_account_idToAccount?: MembersUncheckedUpdateManyWithoutAccount_Members_account_idToAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutMembers_Account_recruiter_idToMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    accntStatus?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountRoleCreateManyRoleInput = {
    id?: number
    account_id: string
    created_at?: Date | string
  }

  export type AccountRoleUpdateWithoutRoleInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateOneRequiredWithoutAccountRoleNestedInput
  }

  export type AccountRoleUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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