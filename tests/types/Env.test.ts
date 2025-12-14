import type { Env } from "src/types/Env";

import { describe, expect, test } from "vitest";
import { z, ZodError } from "zod";

import parseEnv from "src/types/Env";

describe("parseEnv", () => {
  test("Is successful when input is a valid environment", () => {
    const testInput: Env = "test";
    expect(parseEnv(testInput)).toBe("test");

    const developmentInput: Env = "development";
    expect(parseEnv(developmentInput)).toBe("development");

    const productionInput: Env = "production";
    expect(parseEnv(productionInput)).toBe("production");
  });
  test("Throws an error when input is not a valid environment", () => {
    try {
      parseEnv("Invalid env");
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        expect(z.treeifyError(error).errors[0]).toBe(
          'Invalid option: expected one of "test"|"development"|"production"',
        );
        return;
      }
      throw error;
    }
    throw new Error("TEST_FAILED");
  });
});
