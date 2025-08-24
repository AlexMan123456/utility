import type { Env } from "src/types/Env";

import { describe, expect, test } from "vitest";
import { z, ZodError } from "zod";

import newEnv from "src/types/Env";

describe("newEnv", () => {
  test("Is successful when input is a valid environment", () => {
    const testInput: Env = "test";
    expect(newEnv(testInput)).toBe("test");

    const developmentInput: Env = "development";
    expect(newEnv(developmentInput)).toBe("development");

    const productionInput: Env = "production";
    expect(newEnv(productionInput)).toBe("production");
  });
  test("Throws an error when input is not a valid environment", () => {
    try {
      newEnv("Invalid env");
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
  test("If input is undefined, default to development", () => {
    expect(newEnv(undefined)).toBe("development");
  });
});
