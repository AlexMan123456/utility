[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / ArrayElement

# Type Alias: ArrayElement\<ArrayType\>

> **ArrayElement**\<`ArrayType`\> = `ArrayType` *extends* readonly infer ElementType[] ? `ElementType` : `never`

Defined in: [src/types/ArrayElement.ts:8](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/types/ArrayElement.ts#L8)

Gets the individual element types from an array type.

## Type Parameters

### ArrayType

`ArrayType` *extends* readonly `unknown`[]

The type of the array itself.
