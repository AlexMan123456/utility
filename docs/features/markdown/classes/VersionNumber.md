[**@alextheman/utility v4.3.2**](../README.md)

***

[@alextheman/utility](../globals.md) / VersionNumber

# Class: VersionNumber

Represents a software version number, considered to be made up of a major, minor, and patch part.

## Constructors

### Constructor

> **new VersionNumber**(`input`): `VersionNumber`

#### Parameters

##### input

The input to create a new instance of `VersionNumber` from.

`string` | `VersionNumber` | \[`number`, `number`, `number`\]

#### Returns

`VersionNumber`

## Properties

### major

> `readonly` **major**: `number` = `0`

The major number. Increments when a feature is removed or changed in a way that is not backwards-compatible with the previous release.

***

### minor

> `readonly` **minor**: `number` = `0`

The minor number. Increments when a new feature is added/deprecated and is expected to be backwards-compatible with the previous release.

***

### patch

> `readonly` **patch**: `number` = `0`

The patch number. Increments when the next release is fixing a bug or doing a small refactor that should not be noticeable in practice.

## Accessors

### type

#### Get Signature

> **get** **type**(): [`VersionType`](../variables/VersionType.md)

Gets the current version type of the current instance of `VersionNumber`.

##### Returns

[`VersionType`](../variables/VersionType.md)

Either `"major"`, `"minor"`, or `"patch"`, depending on the version type.

## Methods

### increment()

> **increment**(`incrementType`): `VersionNumber`

Determines whether the current instance of `VersionNumber` is a major, minor, or patch version.

#### Parameters

##### incrementType

[`VersionType`](../variables/VersionType.md)

The type of increment. Can be one of the following:
- `"major"`: Change the major version `v1.2.3` → `v2.0.0`
- `"minor"`: Change the minor version `v1.2.3` → `v1.3.0`
- `"patch"`: Change the patch version `v1.2.3` → `v1.2.4`

#### Returns

`VersionNumber`

A new instance of `VersionNumber` with the increment applied.

***

### toString()

> **toString**(`options?`): `string`

Get a string representation of the current version number.

#### Parameters

##### options?

[`VersionNumberToStringOptions`](../interfaces/VersionNumberToStringOptions.md)

Extra additional options to apply.

#### Returns

`string`

A stringified representation of the current version number, leaving out the prefix if `omitPrefix` option was set to true.

***

### isEqual()

> `static` **isEqual**(`firstVersion`, `secondVersion`): `boolean`

Checks if the provided version numbers have the exact same major, minor, and patch numbers.

#### Parameters

##### firstVersion

`VersionNumber`

The first version number to compare.

##### secondVersion

`VersionNumber`

The second version number to compare.

#### Returns

`boolean`

`true` if the provided version numbers have exactly the same major, minor, and patch numbers, and returns `false` otherwise.
