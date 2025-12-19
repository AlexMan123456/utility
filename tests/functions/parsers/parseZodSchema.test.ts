import { describe, expect, test } from "vitest";
import z from "zod";

import { parseZodSchema } from "src/functions";
import { DataError } from "src/types";

describe("parseZodSchema", () => {
  test("Returns the data if data is valid according to Zod schema", () => {
    expect(parseZodSchema(z.string(), "Hello")).toBe("Hello");
  });
  test("Throws a DataError if Zod schema is invalid", () => {
    try {
      parseZodSchema(z.string(), 1);
    } catch (error) {
      if (DataError.check(error)) {
        expect(error.data).toBe(1);
      } else {
        throw error;
      }
    }
  });
  test("Takes an optional error argument to allow us to customise the error", () => {
    try {
      parseZodSchema(z.string(), 1, new DataError(1, "TEST_CODE", "Test message"));
    } catch (error) {
      if (DataError.check(error)) {
        expect(error.data).toBe(1);
        expect(error.message).toBe("Test message");
        expect(error.code).toBe("TEST_CODE");
      } else {
        throw error;
      }
    }
  });
});
