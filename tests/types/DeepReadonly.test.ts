import type { ArrayElement } from "src/types/ArrayElement";
import type { DeepReadonly } from "src/types/DeepReadonly";

import { describe, expectTypeOf, test } from "vitest";

import { deepCopy } from "src/functions";

describe("DeepReadonly", () => {
  test("Marks an array as Readonly", () => {
    const _array = [1, 2, 3, 4];

    expectTypeOf<DeepReadonly<typeof _array>>().toEqualTypeOf<
      readonly ArrayElement<typeof _array>[]
    >();
  });
  test("Marks an object as Readonly", () => {
    const _object = { hello: "world" };

    expectTypeOf<DeepReadonly<typeof _object>>().toEqualTypeOf<Readonly<typeof _object>>();
  });
  test("Marks a nested object as Readonly", () => {
    const nestedObject = { hello: { world: { this: "is a test" } } };
    const readOnlyObject: DeepReadonly<typeof nestedObject> = deepCopy(nestedObject);

    expectTypeOf(readOnlyObject.hello.world.this).toEqualTypeOf<
      Readonly<typeof nestedObject.hello.world.this>
    >();
    expectTypeOf(readOnlyObject.hello.world).toEqualTypeOf<
      Readonly<typeof nestedObject.hello.world>
    >();
    expectTypeOf(readOnlyObject.hello).toEqualTypeOf<DeepReadonly<typeof nestedObject.hello>>();
  });
  test("Leaves a function as is", () => {
    function _sayHello(): string {
      return "Hello!";
    }
    expectTypeOf<DeepReadonly<typeof _sayHello>>().toEqualTypeOf<() => string>();
  });
});
