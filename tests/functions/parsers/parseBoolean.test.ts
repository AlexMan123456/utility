import { describe, expect, test } from "vitest";

import { parseBoolean } from "src/functions/parsers";

describe("parseBoolean", () => {
  test("Returns true when given a string of true", () => {
    expect(parseBoolean("true")).toBe(true);
  });
  test("Returns false when given a string of false", () => {
    expect(parseBoolean("false")).toBe(false);
  });
  test("Throws an error for any other input", () => {
    try {
      parseBoolean("Yes");
      throw new Error("TEST_FAILED");
    } catch (error) {
      if (error instanceof TypeError) {
        expect(error.message).toBe("INVALID_BOOLEAN_STRING");
      } else {
        throw error;
      }
    }
  });
  test("Case insensitivity", () => {
    expect(parseBoolean("TruE")).toBe(true);
    expect(parseBoolean("faLsE")).toBe(false);
  });
});
