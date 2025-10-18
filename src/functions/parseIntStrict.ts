function parseIntStrict(string: string, radix?: number): number {
  const trimmedString = string.trim();
  const pattern: RegExp =
    radix && radix > 10 && radix <= 36
      ? // String.fromCharCode() gets the maximum possible alphabetical character for a base above 10
        new RegExp(`^[+-]?[0-9a-${String.fromCharCode(87 + radix - 1)}]+$`, "i")
      : /^[+-]?\d+$/;

  const parseIntResult = parseInt(trimmedString, radix);
  if (isNaN(parseIntResult) || !pattern.test(trimmedString)) {
    throw new TypeError("INTEGER_PARSING_ERROR");
  }
  return parseIntResult;
}

export default parseIntStrict;
