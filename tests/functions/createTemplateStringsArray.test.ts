import { describe, expect, expectTypeOf, test } from "vitest";

import { createTemplateStringsArray } from "src/functions";

describe("createTemplateStringsArray", () => {
  test("Returns the array of template strings", () => {
    const strings = createTemplateStringsArray(["Hello", "world", "test"]);
    expectTypeOf(strings).toEqualTypeOf<TemplateStringsArray>();
    expect(strings.raw).toEqual(["Hello", "world", "test"]);
  });
  describe("Immutability checks", () => {
    test("Does not mutate the input", () => {
      const input = Object.freeze(["Hello", "world", "test"]);
      createTemplateStringsArray(input);
      expect(input).toEqual(["Hello", "world", "test"]);
    });
    test("Returns a TemplateStringsArray with a new reference in memory", () => {
      const input = ["Hello", "world", "test"];
      const strings = createTemplateStringsArray(input);
      expect(strings).not.toBe(input);
    });
  });
});
