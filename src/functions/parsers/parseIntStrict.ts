const IntegerParsingError = new TypeError("INTEGER_PARSING_ERROR");

function parseIntStrict(...[string, radix]: Parameters<typeof parseInt>): number {
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
