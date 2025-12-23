[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / parseVersionType

# Function: parseVersionType()

> **parseVersionType**(`data`): [`VersionType`](../variables/VersionType.md)

Defined in: [src/functions/parsers/parseVersionType.ts:17](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/functions/parsers/parseVersionType.ts#L17)

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
