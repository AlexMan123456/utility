[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / parseVersionType

# Function: parseVersionType()

> **parseVersionType**(`data`): [`VersionType`](../variables/VersionType.md)

Defined in: [src/functions/parsers/parseVersionType.ts:17](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/parsers/parseVersionType.ts#L17)

Parses the input and verifies it is a valid software version type (i.e. `"major" | "minor" | "patch"`)

## Parameters

### data

`unknown`

The data to parse.

## Returns

[`VersionType`](../variables/VersionType.md)

The given version type if allowed.

## Throws

If the data does not match one of the allowed version types (`"major" | "minor" | "patch"`).
