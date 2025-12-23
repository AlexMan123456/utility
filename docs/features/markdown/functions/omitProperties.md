[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / omitProperties

# Function: omitProperties()

> **omitProperties**\<`ObjectType`, `KeysToOmit`\>(`object`, `keysToOmit`): `Omit`\<`ObjectType`, `KeysToOmit`\>

Defined in: [src/functions/objectHelpers/omitProperties.ts:14](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/objectHelpers/omitProperties.ts#L14)

Omits properties from a given object.

## Type Parameters

### ObjectType

`ObjectType` *extends* `Record`\<`string`, `unknown`\> \| `Readonly`\<`Record`\<`string`, `unknown`\>\>

The type of the input object.

### KeysToOmit

`KeysToOmit` *extends* `string` \| `number` \| `symbol`

A type representing the keys to omit from the object.

## Parameters

### object

`ObjectType`

The object to omit properties from.

### keysToOmit

The keys to omit from the object. Can either be a single string to omit one, or an array to omit multiple.

`KeysToOmit` | readonly `KeysToOmit`[]

## Returns

`Omit`\<`ObjectType`, `KeysToOmit`\>

An object with a new reference in memory, with the properties omitted.
