[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / normalizeImportPath

# Function: normalizeImportPath()

> **normalizeImportPath**(`importPath`): `string`

Defined in: [src/functions/stringHelpers/normalizeImportPath.ts:17](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/stringHelpers/normalizeImportPath.ts#L17)

Normalizes an import path meant for use in an import statement in JavaScript.
When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used. If the path is a zero-length string, '.' is returned, representing the current working directory.

If the path starts with ./, it is preserved (unlike what would happen with path.posix.normalize() normally).

Helpful for custom linter rules that need to check (or fix) import paths.

## Parameters

### importPath

`string`

The import path to normalize.

## Returns

`string`

The import path normalized.
