export type OptionalOnCondition<Condition extends boolean, T> = Condition extends true
  ? T
  : T | undefined;
