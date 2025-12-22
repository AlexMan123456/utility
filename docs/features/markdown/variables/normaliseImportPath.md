[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / normaliseImportPath

# Variable: normaliseImportPath()

> `const` **normaliseImportPath**: (`importPath`) => `string` = `normalizeImportPath`

Defined in: [src/functions/stringHelpers/normalizeImportPath.ts:39](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/functions/stringHelpers/normalizeImportPath.ts#L39)

Normalises an import path meant for use in an import statement in JavaScript.
When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used. If the path is a zero-length string, '.' is returned, representing the current working directory.

If the path starts with ./, it is preserved (unlike what would happen with path.posix.normalize() normally).

Helpful for custom linter rules that need to check (or fix) import paths.

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

## Param

The import path to normalise.

## Returns

The import path normalised.
