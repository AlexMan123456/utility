import { describe, expect, test } from "vitest";

import { FILE_PATH_REGEX } from "src/constants";

const constructedRegex = RegExp(FILE_PATH_REGEX);

describe("FILE_PATH_REGEX", () => {
  test("Matches a file path", () => {
    expect(constructedRegex.test("src/functions/index.ts")).toBe(true);
  });
  test("Does not require ending with file extensions", () => {
    expect(constructedRegex.test("src/functions")).toBe(true);
  });
  test("Does not match trailing separator", () => {
    expect(constructedRegex.test("src/functions/")).toBe(false);
  });
  test("~~reluctantly~~ allows spaces", () => {
    expect(
      constructedRegex.test(
        "src/functions/My Stupid Filename That Is Still Valid But Seriously Who Names Files Like This.ts",
      ),
    ).toBe(true);
  });
  test("~~incredibly reluctantly~~ allows backslashes because Windows users are just built different", () => {
    expect(
      constructedRegex.test(
        String.raw`src\functions\literally\why\do\windows\users\insist\on\this\stupid\convention\oh\my\god`,
      ),
    ).toBe(true);
  });
  test("After all the stupidity of the above, we redeem ourselves by actually giving us the final part for free!", () => {
    const caughtParts = "src/functions/parsers/parseFilePath.ts".match(constructedRegex);

    expect(caughtParts?.groups?.base).toBe("parseFilePath.ts");
    expect(caughtParts?.groups?.directory).toBe("src/functions/parsers");
  });
});
