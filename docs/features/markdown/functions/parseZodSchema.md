[**@alextheman/utility v4.3.5**](../README.md)

***

[@alextheman/utility](../globals.md) / parseZodSchema

# Function: parseZodSchema()

> **parseZodSchema**\<`Output`, `Input`, `Internals`, `ErrorType`\>(`schema`, `data`, `error?`): `output`\<`ZodType`\<`Output`, `Input`, `Internals`\>\>

An alternative function to zodSchema.parse() that can be used to strictly parse Zod schemas.

## Type Parameters

### Output

`Output`

The Zod output type.

### Input

`Input`

The Zod input type.

### Internals

`Internals` *extends* `$ZodTypeInternals`\<`Output`, `Input`\>

The Zod internal types based on the output and input types.

### ErrorType

`ErrorType` *extends* `Error`

The type of error to throw on invalid data.

## Parameters

### schema

`ZodType`\<`Output`, `Input`, `Internals`\>

The Zod schema to use in parsing.

### data

`unknown`

The data to parse.

### error?

`ErrorType`

A custom error to throw on invalid data (defaults to `DataError`).

## Returns

`output`\<`ZodType`\<`Output`, `Input`, `Internals`\>\>

The parsed data from the Zod schema.

## Throws

If the given data cannot be parsed according to the schema.
