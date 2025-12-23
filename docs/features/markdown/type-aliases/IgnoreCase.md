[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / IgnoreCase

# Type Alias: IgnoreCase\<StringType\>

> **IgnoreCase**\<`StringType`\> = `string` *extends* `StringType` ? `string` : `StringType` *extends* `` `${infer FirstCharacter}${infer SecondCharacter}${infer Remainder}` `` ? \`$\{Uppercase\<FirstCharacter\> \| Lowercase\<FirstCharacter\>\}$\{Uppercase\<SecondCharacter\> \| Lowercase\<SecondCharacter\>\}$\{IgnoreCase\<Remainder\>\}\` : `StringType` *extends* `` `${infer FirstCharacter}${infer Remainder}` `` ? \`$\{Uppercase\<FirstCharacter\> \| Lowercase\<FirstCharacter\>\}$\{IgnoreCase\<Remainder\>\}\` : `""`

Defined in: [src/types/IgnoreCase.ts:8](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/types/IgnoreCase.ts#L8)

Allows case-insensitive variants of a known string type.

## Type Parameters

### StringType

`StringType` *extends* `string`

The input string type.
