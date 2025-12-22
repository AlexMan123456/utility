[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / determineVersionType

# ~~Function: determineVersionType()~~

> **determineVersionType**(`version`): [`VersionType`](../variables/VersionType.md)

Defined in: [src/functions/versioning/determineVersionType.ts:15](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/functions/versioning/determineVersionType.ts#L15)

Determines whether the given version is a major, minor, or patch version.

## Parameters

### version

`string`

The version number.

## Returns

[`VersionType`](../variables/VersionType.md)

Either `"major"`, `"minor"`, or `"patch"`, depending on the version type.

## Deprecated

This function does not support the new class-based handling of VersionNumber. Please use `new VersionNumber(version).type` instead.
