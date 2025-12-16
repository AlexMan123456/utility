import { describe, expect, test } from "vitest";

import { getIndividualVersionNumbers } from "src/functions";
import { DataError } from "src/types";

describe("getIndividualVersionNumbers", () => {
  test("Returns a tuple of the version numbers, in order [major, minor, patch]", () => {
    expect(getIndividualVersionNumbers("1.2.3")).toEqual([1, 2, 3]);
  });
  test('Ignores the "v" prefix if present', () => {
    expect(getIndividualVersionNumbers("v1.2.3")).toEqual([1, 2, 3]);
  });
  test("Does not allow invalid versions", () => {
    try {
      getIndividualVersionNumbers("hello");
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
