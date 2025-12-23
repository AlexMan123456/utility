[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / deepFreeze

# Function: deepFreeze()

> **deepFreeze**\<`ObjectType`\>(`object`): `Readonly`\<`ObjectType`\>

Defined in: [src/functions/recursive/deepFreeze.ts:15](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/recursive/deepFreeze.ts#L15)

Deeply freezes an object or array such that all child objects/arrays are also frozen.

Note that this will also freeze the input itself as well.
If the intent is to create a newly frozen object with a different reference in memory, pass your object through deepCopy first before passing to deepFreeze.

## Type Parameters

### ObjectType

`ObjectType` *extends* `object`

The type of the input object.

## Parameters

### object

`ObjectType`

The object to freeze. May also be an array.

## Returns

`Readonly`\<`ObjectType`\>

The input object completely frozen.
