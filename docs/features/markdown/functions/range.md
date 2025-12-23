[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / range

# Function: range()

> **range**(`start`, `stop`, `step`): `number`[]

Defined in: [src/functions/arrayHelpers/range.ts:18](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/functions/arrayHelpers/range.ts#L18)

Creates an array of numbers within a given range.

- The range is inclusive of `start` and exclusive of `stop`.
- The sign of `step` must match the direction of the range.

## Parameters

### start

`number`

The number to start at (inclusive).

### stop

`number`

The number to stop at (exclusive).

### step

`number` = `1`

The step size between numbers, defaulting to 1.

## Returns

`number`[]

An array of numbers satisfying the range provided.

## Throws

If `step` is `0`.

## Throws

If `step` direction does not match the order of `start` and `stop`.
