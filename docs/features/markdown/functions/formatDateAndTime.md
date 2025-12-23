[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / formatDateAndTime

# Function: formatDateAndTime()

> **formatDateAndTime**(`inputDate`): `string`

Defined in: [src/functions/date/formatDateAndTime.ts:17](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/date/formatDateAndTime.ts#L17)

Creates a human-readable string with information about the input date.

## Parameters

### inputDate

`Date`

The date to base the string on.

## Returns

`string`

A new string with information about the given date.

- If the date given is today, the output will be something like `Today at HH:MM`
- If the date given happened yesterday, the output will be something like `Yesterday at HH:MM`
- For any other date, the output will be something like `DD/MM/YYYY, HH:MM`
