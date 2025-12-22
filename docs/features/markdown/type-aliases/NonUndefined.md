[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / NonUndefined

# Type Alias: NonUndefined\<InputType\>

> **NonUndefined**\<`InputType`\> = `InputType` *extends* `undefined` ? `never` : `InputType`

Defined in: [src/types/NonUndefined.ts:8](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/types/NonUndefined.ts#L8)

Resolves to `never` if the given type may be undefined.

## Type Parameters

### InputType

`InputType`

The type to check.
