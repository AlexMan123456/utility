[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / fillArray

# Function: fillArray()

Creates a new array where each element is the result of the provided callback.

If the callback returns at least one Promise, the entire result will be wrapped
in a `Promise` and resolved with `Promise.all`. Otherwise, a plain array is returned.

## Template

## Param

A function invoked with the current index. May return a value or a Promise.

## Param

The desired length of the resulting array.

## Call Signature

> **fillArray**\<`ItemType`\>(`callback`, `length?`): `Promise`\<`ItemType`[]\>

Defined in: [src/functions/arrayHelpers/fillArray.ts:14](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/arrayHelpers/fillArray.ts#L14)

Creates a new array where each element is the resolved result of the provided asynchronous callback.

The callback will be invoked once for each index from `0` to `length - 1`.
If no length is provided, a single-element array will be produced.

### Type Parameters

#### ItemType

`ItemType`

### Parameters

#### callback

(`index`) => `Promise`\<`ItemType`\>

An asynchronous function invoked with the current index.

#### length?

`number`

The desired length of the resulting array.

### Returns

`Promise`\<`ItemType`[]\>

A Promise resolving to an array of the callback results.

## Call Signature

> **fillArray**\<`ItemType`\>(`callback`, `length?`): `ItemType`[]

Defined in: [src/functions/arrayHelpers/fillArray.ts:32](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/arrayHelpers/fillArray.ts#L32)

Creates a new array where each element is the result of the provided synchronous callback.

The callback will be invoked once for each index from `0` to `length - 1`.
If no length is provided, a single-element array will be produced.

### Type Parameters

#### ItemType

`ItemType`

### Parameters

#### callback

(`index`) => `ItemType`

A synchronous function invoked with the current index.

#### length?

`number`

The desired length of the resulting array.

### Returns

`ItemType`[]

An array of the callback results.
