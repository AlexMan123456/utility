[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / parseVersion

# ~~Function: parseVersion()~~

> **parseVersion**(`input`, `options?`): `string`

Defined in: [src/functions/versioning/parseVersion.ts:24](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/functions/versioning/parseVersion.ts#L24)

Parses a string and verifies it is a valid package version number.

Valid formats: `X.Y.Z` or `vX.Y.Z`, where X, Y, and Z are non-negative integers.

## Parameters

### input

`string`

The version string to parse.

### options?

`ParseVersionOptions`

Extra options to apply.

## Returns

`string`

The validated version number, prefixed with `v` if it was not already.

## Deprecated

This function does not support the new class-based handling of VersionNumber. Please use `new VersionNumber(input)` instead.

## Throws

If the input is not a valid version number.
