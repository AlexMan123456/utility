import { describe, expect, test } from "vitest";

import isLeapYear from "src/isLeapYear";

describe("isLeapYear", () => {
  test("Returns false if the year is not a leap year", () => {
    expect(isLeapYear(2025)).toBe(false);
  });
  test("Returns true if the year is a leap year", () => {
    expect(isLeapYear(2024)).toBe(true);
  });
  test("Accounts for weird edge cases that aren't leap years but are a multiple of 4", () => {
    expect(isLeapYear(1900)).toBe(false);
  });
  test("Throws an error for non-integer inputs (because what the hell is year 2025.5?)", () => {
    try {
      isLeapYear(2025.5);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe("NON_INTEGER_INPUT");
        return;
      }
    }
    throw new Error("TEST_FAILED");
  });
});
