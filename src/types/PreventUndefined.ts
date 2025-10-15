export type PreventUndefined<T> = undefined extends T
  ? ["Error: Generic type cannot include undefined"]
  : T;
