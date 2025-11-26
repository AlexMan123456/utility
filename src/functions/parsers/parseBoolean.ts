function parseBoolean(inputString: string): boolean {
  const normalisedString = inputString.toLowerCase();
  if (normalisedString !== "true" && normalisedString !== "false") {
    throw new TypeError("INVALID_BOOLEAN_STRING");
  }
  return normalisedString === "true";
}

/** @deprecated This function has been renamed to parseBoolean. */
export const stringToBoolean = parseBoolean;

export default parseBoolean;
