[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / createFormData

# Function: createFormData()

> **createFormData**\<`DataType`\>(`data`, `options`): `FormData`

Defined in: [src/functions/miscellaneous/createFormData.ts:66](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/miscellaneous/createFormData.ts#L66)

Creates FormData from a given object, resolving non-string types as appropriate.

## Type Parameters

### DataType

`DataType` *extends* `Record`\<[`RecordKey`](../type-aliases/RecordKey.md), `unknown`\>

The type of the given data.

## Parameters

### data

`DataType`

The data to create FormData from.

### options

`CreateFormDataOptions`\<keyof `DataType`\> = `...`

Options to apply to the conversion.

## Returns

`FormData`

A FormData object with the data applied.
