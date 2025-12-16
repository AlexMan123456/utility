import { describe, expect, test } from "vitest";

import determineVersionType from "src/functions/versioning/determineVersionType";
import { DataError } from "src/types";

describe("determineVersionType", () => {
  test("Considers it a major version if minor and patch numbers are zero", () => {
    expect(determineVersionType("1.0.0")).toBe("major");
    expect(determineVersionType("v1.0.0")).toBe("major");
  });
  test("Considers it a minor version if only patch is zero", () => {
    expect(determineVersionType("1.2.0")).toBe("minor");
    expect(determineVersionType("v1.2.0")).toBe("minor");
  });
  test("Considers it a patch version if no numbers are zero", () => {
    expect(determineVersionType("1.2.3")).toBe("patch");
    expect(determineVersionType("v1.2.3")).toBe("patch");
  });
  test("Ignores zero major version", () => {
    expect(determineVersionType("0.1.0")).toBe("minor");
    expect(determineVersionType("v0.1.0")).toBe("minor");

    expect(determineVersionType("0.1.2")).toBe("patch");
    expect(determineVersionType("v0.1.2")).toBe("patch");
  });
  test("Does not allow invalid versions", () => {
    try {
      determineVersionType("hello");
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
