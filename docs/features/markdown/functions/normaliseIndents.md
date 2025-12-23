[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / normaliseIndents

# Function: normaliseIndents()

Applies any options if provided, then removes any extraneous indents from a multi-line template string.

You can pass a template string directly by doing:

     normaliseIndents`Template string here
         with a new line
         and another new line`.

You may also pass the options first, then invoke the resulting function with a template string:

     normaliseIndents({ preserveTabs: false })`Template string here
         with a new line
         and another new line`.

## Param

The strings from the template to process, or the options to apply.

## Param

An array of all interpolations from the template.

## Call Signature

> **normaliseIndents**(`options`): `NormaliseIndentsFunction`

Defined in: [src/functions/taggedTemplate/normaliseIndents.ts:64](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/taggedTemplate/normaliseIndents.ts#L64)

Provides a new function that removes any extraneous indents from a multi-line template string, with the given options applied.

### Parameters

#### options

`NormaliseIndentsOptions`

The options to apply.

### Returns

`NormaliseIndentsFunction`

A function that takes a template string, and returns a new string with the strings and interpolations from the template applied, and extraneous indents removed.

## Call Signature

> **normaliseIndents**(`strings`, ...`interpolations`): `string`

Defined in: [src/functions/taggedTemplate/normaliseIndents.ts:81](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/taggedTemplate/normaliseIndents.ts#L81)

Removes any extraneous indents from a multi-line template string.

You can pass a template string directly by doing:

     normaliseIndents`Template string here
         with a new line
         and another new line`.

### Parameters

#### strings

`TemplateStringsArray`

The strings from the template to process.

#### interpolations

...`unknown`[]

An array of all interpolations from the template.

### Returns

`string`

A new string with the strings and interpolations from the template applied, and extraneous indents removed.
