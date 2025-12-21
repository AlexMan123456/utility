import { describe, expect, test } from "vitest";

import { DataError, VersionNumber } from "src/types";

describe("VersionNumber", () => {
  describe("constructor", () => {
    test('Gets the valid major, minor, and patch versions from a given string not prefixed "v"', () => {
      const version = new VersionNumber("1.2.3");
      expect(version.major).toBe(1);
      expect(version.minor).toBe(2);
      expect(version.patch).toBe(3);
    });
    test('Gets the valid major, minor, and patch versions from a given string prefixed "v"', () => {
      const version = new VersionNumber("v2.3.4");
      expect(version.major).toBe(2);
      expect(version.minor).toBe(3);
      expect(version.patch).toBe(4);
    });
    test("Gets the valid major, minor, and patch version from a tuple of three numbers", () => {
      const version = new VersionNumber([3, 6, 2]);
      expect(version.major).toBe(3);
      expect(version.minor).toBe(6);
      expect(version.patch).toBe(2);
    });
    test("Creates a new instance of VersionNumber if a VersionNumber was already passed in", () => {
      const version = new VersionNumber([2, 3, 4]);
      expect(version.major).toBe(2);
      expect(version.minor).toBe(3);
      expect(version.patch).toBe(4);

      const versionCopy = new VersionNumber(version);
      expect(versionCopy.major).toBe(2);
      expect(versionCopy.minor).toBe(3);
      expect(versionCopy.patch).toBe(4);

      expect(versionCopy).not.toBe(version);
    });
    test("Throws a DataError if the version string is not valid", () => {
      try {
        new VersionNumber("hello");
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
    test("Does not allow an invalid tuple.", () => {
      try {
        // @ts-expect-error: Not numbers
        new VersionNumber(["hello", "there", "world"]);
        throw new Error("DID_NOT_THROW");
      } catch (error) {
        if (DataError.check(error)) {
          expect(error.code).toBe("INTEGER_PARSING_ERROR");
        } else {
          throw error;
        }
      }

      try {
        // @ts-expect-error: Too many numbers
        new VersionNumber([1, 2, 3, 4]);
        throw new Error("DID_NOT_THROW");
      } catch (error) {
        if (DataError.check(error)) {
          expect(error.code).toBe("INVALID_LENGTH");
          expect(error.message).toBe("Input array must be a tuple of three non-negative integers.");
        } else {
          throw error;
        }
      }

      try {
        // @ts-expect-error: Too few numbers
        new VersionNumber([1, 2]);
        throw new Error("DID_NOT_THROW");
      } catch (error) {
        if (DataError.check(error)) {
          expect(error.code).toBe("INVALID_LENGTH");
          expect(error.message).toBe("Input array must be a tuple of three non-negative integers.");
        } else {
          throw error;
        }
      }

      try {
        new VersionNumber([-1, -2, -3]);
        throw new Error("DID_NOT_THROW");
      } catch (error) {
        if (DataError.check(error)) {
          expect(error.code).toBe("NON_POSITIVE_INPUTS");
          expect(error.message).toBe("Input array must be a tuple of three non-negative integers.");
        } else {
          throw error;
        }
      }
    });
  });

  describe(".toString()", () => {
    test('Returns the version string prefixed with "v"', () => {
      const version = new VersionNumber([1, 2, 3]);
      expect(version.toString()).toBe("v1.2.3");
    });
    test("Allows for an option to omit the prefix", () => {
      const version = new VersionNumber([1, 2, 3]);
      expect(version.toString({ omitPrefix: true })).toBe("1.2.3");
    });
  });
});
