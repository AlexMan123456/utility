[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / truncate

# Function: truncate()

> **truncate**(`stringToTruncate`, `maxLength`): `string`

Defined in: [src/functions/stringHelpers/truncate.ts:11](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/stringHelpers/truncate.ts#L11)

Truncates a string and appends `...` to the end of it

## Parameters

### stringToTruncate

`string`

The string to truncate.

### maxLength

`number` = `5`

The length at which to start truncating. Note that this does not include the `...` part that would be appended.

## Returns

`string`

A new string that has been truncated based on the length provided.
