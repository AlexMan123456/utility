import type { RecordKey } from "src/types";

import { describe, expectTypeOf, test } from "vitest";

describe("RecordKey", () => {
  test("Is compatible with the Record type key", () => {
    expectTypeOf<Record<RecordKey, unknown>>().toEqualTypeOf<
      Record<string | number | symbol, unknown>
    >();
  });
});
