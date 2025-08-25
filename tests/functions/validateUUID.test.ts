import { randomUUID } from "crypto";

import { describe, expect, test } from "vitest";

import validateUUID from "src/functions/validateUUID";
import { APIError } from "src/types";

describe("validateUUID", () => {
  test("Throw an APIError with status 400 and message INVALID_UUID if not a UUID", () => {
    try {
      validateUUID("hello");
    } catch (error) {
      if (error instanceof APIError) {
        expect(error.status).toBe(400);
        expect(error.message).toBe("INVALID_UUID");
      } else {
        throw error;
      }
    }
  });
  describe("Throw the given error if provided", () => {
    test("instanceof Error", () => {
      try {
        validateUUID("hello", new Error("TEST_MESSAGE"));
      } catch (error) {
        if (error instanceof Error) {
          expect(error).not.toHaveProperty("status");
          expect(error.message).toBe("TEST_MESSAGE");
        } else {
          throw error;
        }
      }
    });
    test("instanceof APIError", () => {
      try {
        validateUUID("hello", new APIError(418));
      } catch (error) {
        if (error instanceof APIError) {
          expect(error.status).toBe(418);
          expect(error.message).toBe("I_AM_A_TEAPOT");
        } else {
          throw error;
        }
      }
    });
  });
  test("Throw no error if UUID is valid", () => {
    const uuid = randomUUID();
    expect(validateUUID(uuid)).toBe(uuid);
  });
});
