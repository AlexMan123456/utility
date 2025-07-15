import appendSemicolon from "src/append-semicolon";

describe("appendSemicolon", () => {
  test("Appends a semicolon to the end of string if not present", () => {
    const output = appendSemicolon('console.log("Hello world")');
    expect(output).toBe('console.log("Hello world");');
  });
  test("Leaves the string as is if semicolon already present", () => {
    const output = appendSemicolon('console.log("Hello world");');
    expect(output).toBe('console.log("Hello world");');
  });
  test("Gets rid of trailing whitespace before inserting semicolon", () => {
    const output = appendSemicolon('console.log("Hello world") ');
    expect(output).toBe('console.log("Hello world");');
  });
});
