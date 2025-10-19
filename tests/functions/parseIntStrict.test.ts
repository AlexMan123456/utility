import { describe, expect, test } from "vitest";

import { parseIntStrict } from "src/functions";

describe("parseIntStrict", () => {
  test("Returns the parsed integer", () => {
    expect(parseIntStrict("2")).toBe(2);
  });
  test("Works with the optional radix argument", () => {
    // Returns 2 because 10 in base 2 is 2
    expect(parseIntStrict("10", 2)).toBe(2);
  });
  test("Allows negative numbers", () => {
    expect(parseIntStrict("-2")).toBe(-2);
  });
  test("Allows valid base 16 notation", () => {
    expect(parseIntStrict("1a", 16)).toBe(26);
  });
  test("Throws a TypeError if parsed result is not an integer", () => {
    try {
      parseIntStrict("Hello");
      throw new Error("TEST_FAILED");
    } catch (error) {
      if (error instanceof TypeError) {
        expect(error.message).toBe("INTEGER_PARSING_ERROR");
      } else {
        throw error;
      }
    }
  });
  test.each(["3.14", "3a", "a3", "3+1"])(
    "Fails if the input contains any non-numeric characters other than - (testing %s)",
    (stringToParse: string) => {
      try {
        parseIntStrict(stringToParse);
        throw new Error("TEST_FAILED");
      } catch (error) {
        if (error instanceof TypeError) {
          expect(error.message).toBe("INTEGER_PARSING_ERROR");
        } else {
          throw error;
        }
      }
    },
  );
  test("Fails if the letter is outside what is allowed in the base system", () => {
    try {
      parseIntStrict("1g", 16);
      throw new Error("TEST_FAILED");
    } catch (error) {
      if (error instanceof TypeError) {
        expect(error.message).toBe("INTEGER_PARSING_ERROR");
      } else {
        throw error;
      }
    }
  });
  test("Fails if the number is outside the base system", () => {
    try {
      parseIntStrict("12", 2);
      throw new Error("TEST_FAILED");
    } catch (error) {
      if (error instanceof TypeError) {
        expect(error.message).toBe("INTEGER_PARSING_ERROR");
      } else {
        throw error;
      }
    }
  });
});
