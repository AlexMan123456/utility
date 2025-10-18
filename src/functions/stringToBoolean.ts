function stringToBoolean(inputString: string): boolean {
  const normalisedString = inputString.toLowerCase();
  if (normalisedString !== "true" && normalisedString !== "false") {
    throw new TypeError("INVALID_BOOLEAN_STRING");
  }
  return normalisedString === "true";
}

export default stringToBoolean;
