import { describe, expect, test } from "vitest";

import omitProperties from "src/functions/omitProperties";

describe("omitProperties", () => {
  test("Removes the given property from the object", () => {
    expect(
      omitProperties("secondKey", { firstKey: "First property", secondKey: "Second property" }),
    ).toEqual({ firstKey: "First property" });
  });
  test("Removes all specified keys if given an array of keys", () => {
    const inputObject = {
      firstKey: "First property",
      secondKey: "Second property",
      thirdKey: "Third property",
      fourthKey: "Fourth property",
    };
    const outputObject: Record<string, string> = { ...inputObject };
    delete outputObject.firstKey;
    delete outputObject.thirdKey;
    expect(omitProperties(["firstKey", "thirdKey"], inputObject)).toEqual({
      secondKey: "Second property",
      fourthKey: "Fourth property",
    });
  });
  test("Does not mutate the input object", () => {
    const inputObject = {
      firstKey: "First property",
      secondKey: "Second property",
      thirdKey: "Third property",
      fourthKey: "Fourth property",
    };
    omitProperties("firstKey", inputObject);
    expect(inputObject).toEqual({
      firstKey: "First property",
      secondKey: "Second property",
      thirdKey: "Third property",
      fourthKey: "Fourth property",
    });
  });
  test("Does not mutate the array of keys", () => {
    const keys = ["firstKey", "thirdKey"] as const;
    omitProperties(keys, {
      firstKey: "First property",
      secondKey: "Second property",
      thirdKey: "Third property",
      fourthKey: "Fourth property",
    });
    expect(keys).toEqual(["firstKey", "thirdKey"]);
  });
  test("Returns an object with a new reference in memory", () => {
    const keys = ["firstKey", "thirdKey"] as const;
    const inputObject = {
      firstKey: "First property",
      secondKey: "Second property",
      thirdKey: "Third property",
      fourthKey: "Fourth property",
    };
    const outputObject = omitProperties(keys, inputObject);
    expect(outputObject).not.toBe(keys);
    expect(outputObject).not.toBe(inputObject);
  });
});
