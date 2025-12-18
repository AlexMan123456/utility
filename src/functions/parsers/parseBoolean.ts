import { DataError } from "src/types";

/**
 * Takes a stringly-typed boolean and converts it to an actual boolean type.
 *
 * @param inputString - The string to parse.
 *
 * @throws {TypeError} If the string is not either `true` or `false` (case insensitive).
 *
 * @returns The string parsed as an actual boolean.
 */
function parseBoolean(inputString: string): boolean {
  const normalisedString = inputString.toLowerCase();
  if (!["true", "false"].includes(normalisedString)) {
    throw new DataError(
      inputString,
      "INVALID_BOOLEAN_STRING",
      "The provided boolean string must be one of `true | false`",
    );
  }
  return normalisedString === "true";
}

export default parseBoolean;
