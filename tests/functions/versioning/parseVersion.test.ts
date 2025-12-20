import { describe, expect, test } from "vitest";

import { parseVersion } from "src/functions";
import { DataError } from "src/types";

import { version } from "package.json" with { type: "json" };

describe("parseVersion", () => {
  test('Returns the version prefixed with "v" if not already prefixed', () => {
    expect(parseVersion(version)).toBe(`v${version}`);
  });
  test('Returns the version as is if already prefixed with "v"', () => {
    expect(parseVersion(`v${version}`)).toBe(`v${version}`);
  });
  test("Throws a DataError if the version is not valid", () => {
    try {
      parseVersion("hello");
      throw new Error("DID_NOT_THROW");
    } catch (error) {
      if (DataError.check(error)) {
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
  test('Can pass an option to return the version without the "v"', () => {
    expect(parseVersion(version, { omitPrefix: true })).toBe(version);
    expect(parseVersion(`v${version}`, { omitPrefix: true })).toBe(version);
  });
});
