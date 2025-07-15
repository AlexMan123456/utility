function appendSemicolon(stringToAppendTo: string): string {
  if (stringToAppendTo.includes("\n")) {
    throw new Error("MULTIPLE_LINE_ERROR");
  }
  const stringWithNoTrailingWhitespace = stringToAppendTo.trimEnd();
  if (stringWithNoTrailingWhitespace === "") {
    return "";
  }
  return stringWithNoTrailingWhitespace[
    stringWithNoTrailingWhitespace.length - 1
  ] === ";"
    ? stringWithNoTrailingWhitespace
    : `${stringWithNoTrailingWhitespace};`;
}

export default appendSemicolon;
