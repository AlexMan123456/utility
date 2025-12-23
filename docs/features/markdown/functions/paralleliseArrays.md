[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / paralleliseArrays

# Function: paralleliseArrays()

> **paralleliseArrays**\<`FirstArrayItem`, `SecondArrayItem`\>(`firstArray`, `secondArray`): `ParallelTuple`\<`FirstArrayItem`, `SecondArrayItem`\>[]

Defined in: [src/functions/arrayHelpers/paralleliseArrays.ts:19](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/arrayHelpers/paralleliseArrays.ts#L19)

Creates a new array of tuples, each containing the item at the given index from both arrays.

If `secondArray` is shorter than `firstArray`, the second position in the tuple
will be `undefined`. Iteration always uses the length of the first array.

## Type Parameters

### FirstArrayItem

`FirstArrayItem`

### SecondArrayItem

`SecondArrayItem`

## Parameters

### firstArray

readonly `FirstArrayItem`[]

The first array. Each item in this will take up the first tuple spot.

### secondArray

readonly `SecondArrayItem`[]

The second array. Each item in this will take up the second tuple spot.

## Returns

`ParallelTuple`\<`FirstArrayItem`, `SecondArrayItem`\>[]

An array of `[firstItem, secondItem]` tuples for each index in `firstArray`.
