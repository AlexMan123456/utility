import { describe, expect, test } from "vitest";

import { camelToKebab } from "src/functions";

describe("camelToKebab", () => {
  test("Converts a string from camelCase to kebab-case", () => {
    expect(camelToKebab("helloWorld")).toBe("hello-world");
  });
  test("Ignores non-alphabetic characters", () => {
    expect(camelToKebab("hello-worldString2")).toBe("hello-world-string2");
  });
  test("Handles consecutive capital letters", () => {
    expect(camelToKebab("validateAPIUser")).toBe("validate-api-user");
  });
});
