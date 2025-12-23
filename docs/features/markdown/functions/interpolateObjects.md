[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / interpolateObjects

# Function: interpolateObjects()

> **interpolateObjects**(`strings`, ...`interpolations`): `string`

Defined in: [src/functions/taggedTemplate/interpolateObjects.ts:15](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/functions/taggedTemplate/interpolateObjects.ts#L15)

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
