[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / getRecordKeys

# Function: getRecordKeys()

> **getRecordKeys**\<`InputRecordType`\>(`record`): keyof `InputRecordType`[]

Defined in: [src/functions/objectHelpers/getRecordKeys.ts:14](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/functions/objectHelpers/getRecordKeys.ts#L14)

Gets the keys from a given record object, properly typed to be an array of the key of the input object's type.

## Type Parameters

### InputRecordType

`InputRecordType` *extends* `Record`\<[`RecordKey`](../type-aliases/RecordKey.md), `unknown`\>

The type of the input object.

## Parameters

### record

`InputRecordType` & `object`

The record to get the keys from.

## Returns

keyof `InputRecordType`[]

An array with all the keys of the input object in string form, but properly typed as `keyof InputRecordType`.
