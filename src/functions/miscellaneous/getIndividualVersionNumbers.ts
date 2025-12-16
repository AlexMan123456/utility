import { parseIntStrict, parseVersion } from "src/functions/parsers";

/**
 * Gets the individual version numbers from a given version number as a tuple of numbers.
 *
 * @param version - The version number.
 *
 * @returns A tuple of three numbers indicating `[major, minor, patch]`.
 */
function getIndividualVersionNumbers(version: string): [number, number, number] {
  const parsedVersion = parseVersion(version, { omitPrefix: true });

  return parsedVersion.split(".").map((versionNumber) => {
    return parseIntStrict(versionNumber);
  }) as [number, number, number];
}

export default getIndividualVersionNumbers;
