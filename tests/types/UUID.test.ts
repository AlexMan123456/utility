import { randomUUID } from "crypto";

import { describe, expect, test } from "vitest";
import z, { ZodError } from "zod";

import parseUUID from "src/types/UUID";

describe("parseUUID", () => {
  test("Throw a ZodError if not a UUID", () => {
    try {
      parseUUID("hello");
    } catch (error) {
      if (error instanceof ZodError) {
        expect(z.treeifyError(error).errors[0]).toBe("Invalid UUID");
      } else {
        throw error;
      }
    }
  });
  test("Throw no error if UUID is valid", () => {
    const uuid = randomUUID();
    expect(parseUUID(uuid)).toBe(uuid);
  });
});
