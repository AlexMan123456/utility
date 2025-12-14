/**
 * Resolves to `never` if the given type may be undefined.
 *
 * @template InputType - The type to check.
 */
export type NonUndefined<InputType> = InputType extends undefined ? never : InputType;
