[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / parseIntStrict

# Function: parseIntStrict()

> **parseIntStrict**(`string`, `radix?`): `number`

Defined in: [src/functions/parsers/parseIntStrict.ts:15](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/parsers/parseIntStrict.ts#L15)

Converts a string to an integer and throws an error if it cannot be converted.

## Parameters

### string

`string`

A string to convert into a number.

### radix?

`number`

A value between 2 and 36 that specifies the base of the number in string. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.

## Returns

`number`

The integer parsed from the input string.

## Throws

If the provided string cannot safely be converted to an integer.
