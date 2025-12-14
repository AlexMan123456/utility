/**
 * Converts a string from camelCase to kebab-case
 *
 * @param string - The string to convert.
 *
 * @returns The string converted to kebab-case.
 */
function camelToKebab(string: string): string {
  return string
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

export default camelToKebab;
