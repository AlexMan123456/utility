function appendSemicolon(stringToAppend: string): string {
  const stringWithNoTrailingWhitespace = stringToAppend.trimEnd();
  return stringWithNoTrailingWhitespace[
    stringWithNoTrailingWhitespace.length - 1
  ] === ";"
    ? stringWithNoTrailingWhitespace
    : `${stringWithNoTrailingWhitespace};`;
}

export default appendSemicolon;
