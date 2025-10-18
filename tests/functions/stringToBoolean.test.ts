import { describe, expect, test } from "vitest";

import { stringToBoolean } from "src/functions";

describe("stringToBoolean", () => {
  test("Returns true when given a string of true", () => {
    expect(stringToBoolean("true")).toBe(true);
  });
  test("Returns false when given a string of false", () => {
    expect(stringToBoolean("false")).toBe(false);
  });
  test("Throws an error for any other input", () => {
    try {
      stringToBoolean("Yes");
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
    expect(stringToBoolean("TruE")).toBe(true);
    expect(stringToBoolean("faLsE")).toBe(false);
  });
});
