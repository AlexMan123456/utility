[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / parseEnv

# Function: parseEnv()

> **parseEnv**(`data`): `"test"` \| `"development"` \| `"production"`

Defined in: [src/functions/parsers/parseEnv.ts:25](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/functions/parsers/parseEnv.ts#L25)

Parses the input and verifies it matches one of the environments allowed by the Env types ("test" | "development" | "production").

## Parameters

### data

`unknown`

The data to parse.

## Returns

`"test"` \| `"development"` \| `"production"`

The specified environment if allowed.

## Throws

If the data does not match one of the environments allowed by the Env types ("test" | "development" | "production").
