[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / interpolateObjects

# Function: interpolateObjects()

> **interpolateObjects**(`strings`, ...`interpolations`): `string`

Defined in: [src/functions/taggedTemplate/interpolateObjects.ts:15](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/taggedTemplate/interpolateObjects.ts#L15)

Returns the result of interpolating a template string, also stringifying objects.

You can pass a template string directly by doing:

     interpolateObjects`Template string here ${{ my: "object" }}`.

## Parameters

### strings

`TemplateStringsArray`

The strings from the template to process.

### interpolations

...`unknown`[]

An array of all interpolations from the template.

## Returns

`string`

A new string with the strings and interpolations from the template applied, with objects stringified.
