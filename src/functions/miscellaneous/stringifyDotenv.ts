import type { DotenvParseOutput } from "dotenv";

import { DataError, type RecordKey } from "src/types";

export interface StringifyDotenvOptions {
  /** The quote style to use for the values (defaults to `"double"`) */
  quoteStyle: "double" | "single" | "none";
}

/**
 * Converts an object into a string in .env file format.
 *
 * @param contents - The object to convert. Must be a record whose values are strings.
 * @param options - Extra options to apply.
 *
 * @returns A string representation of the object in .env file format.
 */
function stringifyDotenv(
  contents: Record<RecordKey, string> | DotenvParseOutput,
  options?: StringifyDotenvOptions,
): string {
  const { ...contentsCopy } = contents;
  const { quoteStyle = "double" } = options ?? {};

  const quoteCharacter = {
    double: '"',
    single: "'",
    none: "",
  }[quoteStyle];

  let result = "";

  for (const key in contentsCopy) {
    if (
      quoteStyle === "none" &&
      (/[ \t\r\n]/.test(contentsCopy[key]) || contentsCopy[key].includes("#"))
    ) {
      throw new DataError(
        { [key]: contentsCopy[key] },
        "INCOMPATIBLE_QUOTE_STYLE",
        'Cannot use `{ quoteStyle: "none" }` when value has whitespace or #',
      );
    }

    const finalValue = (
      quoteStyle === "none"
        ? contentsCopy[key]
        : contentsCopy[key].replace(RegExp(quoteCharacter, "g"), `\\${quoteCharacter}`)
    ).replace(/\r?\n/g, String.raw`\n`);

    result += `${key}=${quoteCharacter}${finalValue}${quoteCharacter}\n`;
  }

  return result;
}

export default stringifyDotenv;
