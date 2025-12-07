export type ArrayElement<T extends readonly unknown[]> = T extends readonly (infer ElementType)[]
  ? ElementType
  : never;
