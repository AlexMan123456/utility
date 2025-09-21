import { describe, expect, test } from "vitest";
import z, { ZodError } from "zod";

import parseEmail from "src/types/Email";

describe("parseEmail", () => {
  test("Is successful when email is valid", () => {
    const email = "test@test.com";
    expect(parseEmail(email)).toBe(email);
  });
  test("Throws a ZodError when email is invalid", () => {
    try {
      parseEmail("Invalid email");
      throw new Error("NO_ERROR_THROWN");
    } catch (error) {
      if (error instanceof ZodError) {
        expect(z.treeifyError(error).errors[0]).toBe("Invalid email address");
      } else {
        throw error;
      }
    }
  });
});
