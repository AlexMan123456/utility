import { describe, expect, test } from "vitest";

import incrementVersion from "src/functions/versioning/incrementVersion";
import { DataError } from "src/types";

describe("incrementVersion", () => {
  test("Increments the major version", () => {
    expect(incrementVersion("v1.2.3", "major")).toBe("v2.0.0");
  });
  test("Increments the minor version", () => {
    expect(incrementVersion("v1.2.3", "minor")).toBe("v1.3.0");
  });
  test("Increments the patch version", () => {
    expect(incrementVersion("v1.2.3", "patch")).toBe("v1.2.4");
  });
  test('Adds back the "v" prefix if not present', () => {
    expect(incrementVersion("1.2.3", "minor")).toBe("v1.3.0");
  });
  test('Omits the "v" prefix if option given', () => {
    expect(incrementVersion("v1.2.3", "minor", { omitPrefix: true })).toBe("1.3.0");
  });
  test("Does not allow invalid versions", () => {
    try {
      incrementVersion("hello", "minor");
      throw new Error("DID_NOT_THROW");
    } catch (error) {
      if (error instanceof DataError) {
        expect(error.code).toBe("INVALID_VERSION");
        expect(error.message).toBe(
          '"hello" is not a valid version number. Version numbers must be of the format "X.Y.Z" or "vX.Y.Z", where X, Y, and Z are non-negative integers.',
        );
        expect(error.data).toBe("hello");
      } else {
        throw error;
      }
    }
  });
});
