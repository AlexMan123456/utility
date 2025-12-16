import getIndividualVersionNumbers from "src/functions/miscellaneous/getIndividualVersionNumbers";

export type VersionType = "major" | "minor" | "patch";

/**
 * Determines whether the given version is a major, minor, or patch version.
 *
 * @param version - The version number.
 *
 * @returns Either `"major"`, `"minor"`, or `"patch"`, depending on the version type.
 */
function determineVersionType(version: string): VersionType {
  const [_major, minor, patch] = getIndividualVersionNumbers(version);

  if (minor === 0 && patch === 0) {
    return "major";
  }
  if (patch === 0) {
    return "minor";
  }
  return "patch";
}

export default determineVersionType;
