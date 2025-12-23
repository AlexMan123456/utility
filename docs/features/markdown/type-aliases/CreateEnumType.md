[**@alextheman/utility v4.3.0**](../README.md)

***

[@alextheman/utility](../globals.md) / CreateEnumType

# Type Alias: CreateEnumType\<ObjectType\>

> **CreateEnumType**\<`ObjectType`\> = `ObjectType`\[keyof `ObjectType`\]

Defined in: [src/types/CreateEnumType.ts:10](https://github.com/AlexMan123456/utility/blob/49fec60392d50593b382751de378cac855cd7ab3/src/types/CreateEnumType.ts#L10)

Get the value types from a const object so the object can behave similarly to an enum.

## Type Parameters

### ObjectType

`ObjectType` *extends* `Record`\<[`RecordKey`](RecordKey.md), `unknown`\>

The type of the object to get the value types for.
