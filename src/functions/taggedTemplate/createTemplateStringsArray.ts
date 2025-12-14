/**
 * Creates a template strings array given a regular array of strings
 *
 * @param strings - The array of strings.
 *
 * @returns A template strings array that can be passed as the first argument of any tagged template function.
 */
function createTemplateStringsArray(strings: readonly string[]): TemplateStringsArray {
  return Object.assign([...strings], { raw: [...strings] }) as TemplateStringsArray;
}

export default createTemplateStringsArray;
