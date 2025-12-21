import { VERSION_NUMBER_REGEX } from "src/constants";
import { parseIntStrict } from "src/functions";
import DataError from "src/types/DataError";
import { VersionType } from "src/types/VersionType";

export interface ToStringOptions {
  omitPrefix?: boolean;
}

/** Represents a software version number, considered to be made up of a major, minor, and patch part. */
class VersionNumber {
  /** The major number. Increments when a feature is removed or changed in a way that is not backwards-compatible with the previous release. */
  public readonly major: number = 0;
  /** The minor number. Increments when a new feature is added/deprecated and is expected to be backwards-compatible with the previous release. */
  public readonly minor: number = 0;
  /** The patch number. Increments when the next release is fixing a bug or doing a small refactor that should not be noticeable in practice. */
  public readonly patch: number = 0;

  private readonly nonNegativeTupleError =
    "Input array must be a tuple of three non-negative integers.";

  /**
   * @param input - The input to create a new instance of `VersionNumber` from.
   */
  public constructor(input: string | [number, number, number] | VersionNumber) {
    if (input instanceof VersionNumber) {
      this.major = input.major;
      this.minor = input.minor;
      this.patch = input.patch;
    } else if (typeof input === "string") {
      if (!RegExp(VERSION_NUMBER_REGEX).test(input)) {
        throw new DataError(
          input,
          "INVALID_VERSION",
          `"${input}" is not a valid version number. Version numbers must be of the format "X.Y.Z" or "vX.Y.Z", where X, Y, and Z are non-negative integers.`,
        );
      }
      const nonPrefixedString = VersionNumber.formatString(input, { omitPrefix: true });

      const [major, minor, patch] = nonPrefixedString.split(".").map((number) => {
        return parseIntStrict(number);
      });

      this.major = major;
      this.minor = minor;
      this.patch = patch;
    } else if (Array.isArray(input)) {
      if (input.length !== 3) {
        throw new DataError(input, "INVALID_LENGTH", this.nonNegativeTupleError);
      }
      const [major, minor, patch] = input.map((number) => {
        const parsedInteger = parseIntStrict(number?.toString());
        if (parsedInteger < 0) {
          throw new DataError(input, "NON_POSITIVE_INPUTS", this.nonNegativeTupleError);
        }
        return parsedInteger;
      });
      this.major = major;
      this.minor = minor;
      this.patch = patch;
    }
  }

  private static formatString(input: string, options?: ToStringOptions) {
    if (options?.omitPrefix) {
      return input.startsWith("v") ? input.slice(1) : input;
    }
    return input.startsWith("v") ? input : `v${input}`;
  }

  /**
   * Get a string representation of the current version number.
   *
   * @param options - Extra additional options to apply.
   *
   * @returns A stringified representation of the current version number, leaving out the prefix if `omitPrefix` option was set to true.
   */
  public toString(options?: ToStringOptions): string {
    const rawString = `${this.major}.${this.minor}.${this.patch}`;
    return VersionNumber.formatString(rawString, options);
  }

  /**
   * Gets the current version type of the current instance of the class.
   *
   * @returns Either `"major"`, `"minor"`, or `"patch"`, depending on the version type.
   */
  public get type(): VersionType {
    if (this.minor === 0 && this.patch === 0) {
      return VersionType.major;
    }
    if (this.patch === 0) {
      return VersionType.minor;
    }
    return VersionType.patch;
  }
}

export default VersionNumber;
