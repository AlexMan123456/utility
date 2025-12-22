[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / DisallowUndefined

# Type Alias: DisallowUndefined\<InputType\>

> **DisallowUndefined**\<`InputType`\> = `undefined` *extends* `InputType` ? \[`"Error: Generic type cannot include undefined"`\] : `InputType`

Defined in: [src/types/DisallowUndefined.ts:8](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/types/DisallowUndefined.ts#L8)

Resolves to an error message type if the type argument could potentially be undefined.

## Type Parameters

### InputType

`InputType`

The type to disallow undefined on.
