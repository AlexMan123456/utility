/**
 * Resolves to an error message type if the type argument could potentially be undefined.
 *
 * @template InputType - The type to disallow undefined on.
 */
export type DisallowUndefined<InputType> = undefined extends InputType
  ? ["Error: Generic type cannot include undefined"]
  : InputType;
