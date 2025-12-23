[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / NonUndefined

# Type Alias: NonUndefined\<InputType\>

> **NonUndefined**\<`InputType`\> = `InputType` *extends* `undefined` ? `never` : `InputType`

Defined in: [src/types/NonUndefined.ts:8](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/types/NonUndefined.ts#L8)

Resolves to `never` if the given type may be undefined.

## Type Parameters

### InputType

`InputType`

The type to check.
