export type DeepReadonly<T> = T extends (...args: unknown[]) => unknown
  ? T
  : T extends (infer ItemType)[]
    ? readonly DeepReadonly<ItemType>[]
    : T extends object
      ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
      : T;
