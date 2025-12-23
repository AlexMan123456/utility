[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / parseEnv

# Function: parseEnv()

> **parseEnv**(`data`): `"test"` \| `"development"` \| `"production"`

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
