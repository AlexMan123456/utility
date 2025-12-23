[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / interpolate

# Function: interpolate()

> **interpolate**(`strings`, ...`interpolations`): `string`

Defined in: [src/functions/taggedTemplate/interpolate.ts:19](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/taggedTemplate/interpolate.ts#L19)

Returns the result of interpolating a template string when given the strings and interpolations separately.

You can pass a template string directly by doing:

     interpolate`Template string here`.

In this case, it will be functionally the same as if you just wrote the template string by itself.

## Parameters

### strings

`TemplateStringsArray`

The strings from the template to process.

### interpolations

...`unknown`[]

An array of all interpolations from the template.

## Returns

`string`

A new string with the strings and interpolations from the template applied.
