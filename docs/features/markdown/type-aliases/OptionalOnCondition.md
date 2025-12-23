[**@alextheman/utility v4.3.1**](../README.md)

***

[@alextheman/utility](../globals.md) / OptionalOnCondition

# Type Alias: OptionalOnCondition\<Condition, ResolvedTypeIfTrue\>

> **OptionalOnCondition**\<`Condition`, `ResolvedTypeIfTrue`\> = `Condition` *extends* `true` ? `ResolvedTypeIfTrue` : `ResolvedTypeIfTrue` \| `undefined`

Defined in: [src/types/OptionalOnCondition.ts:9](https://github.com/AlexMan123456/utility/blob/441c598afb775373389b58c3b3535b36cada9467/src/types/OptionalOnCondition.ts#L9)

Resolves to the given type if the first type is `true`, otherwise resolves to `undefined`

## Type Parameters

### Condition

`Condition` *extends* `boolean`

The condition to check.

### ResolvedTypeIfTrue

`ResolvedTypeIfTrue`

The type to resolve to if the condition may be `true`.
