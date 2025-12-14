const IntegerParsingError = new TypeError("INTEGER_PARSING_ERROR");

/**
 * Converts a string to an integer and throws an error if it cannot be converted.
 *
 * @param string — A string to convert into a number.
 * @param radix - A value between 2 and 36 that specifies the base of the number in string. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
 *
 * @throws {TypeError} If the provided string cannot safely be converted to an integer.
 *
 * @returns The integer parsed from the input string.
 */
function parseIntStrict(string: string, radix?: number): number {
  const trimmedString = string.trim();
  const pattern: RegExp =
    radix && radix > 10 && radix <= 36
      ? // String.fromCharCode() gets the maximum possible alphabetical character for a base above 10
        new RegExp(`^[+-]?[0-9a-${String.fromCharCode(87 + radix - 1)}]+$`, "i")
      : /^[+-]?\d+$/;

  if (!pattern.test(trimmedString)) {
    throw IntegerParsingError;
  }

  if (
    radix &&
    radix < 10 &&
    [...trimmedString].some((character) => {
      return parseInt(character) >= radix;
    })
  ) {
    throw IntegerParsingError;
  }

  const parseIntResult = parseInt(trimmedString, radix);
  if (isNaN(parseIntResult)) {
    throw IntegerParsingError;
  }

  return parseIntResult;
}

export default parseIntStrict;
