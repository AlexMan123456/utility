import { describe, expect, test } from "vitest";

import omitProperties from "src/functions/omitProperties";

describe("omitProperties", () => {
  test("Removes the given property from the object", () => {
    expect(
      omitProperties({ firstKey: "First property", secondKey: "Second property" }, "secondKey"),
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
    expect(omitProperties(inputObject, ["firstKey", "thirdKey"])).toEqual({
      secondKey: "Second property",
      fourthKey: "Fourth property",
    });
  });
  describe("Mutation checks", () => {
    test("Does not mutate the input object", () => {
      const inputObject = Object.freeze({
        firstKey: "First property",
        secondKey: "Second property",
        thirdKey: "Third property",
        fourthKey: "Fourth property",
      });
      // Will error on mutation attempt due to freeze.
      omitProperties(inputObject, "firstKey");
      expect(inputObject).toEqual({
        firstKey: "First property",
        secondKey: "Second property",
        thirdKey: "Third property",
        fourthKey: "Fourth property",
      });
    });
    test("Does not mutate the array of keys", () => {
      const keys = Object.freeze(["firstKey", "thirdKey"] as const);
      // Will error on mutation attempt due to freeze.
      omitProperties(
        {
          firstKey: "First property",
          secondKey: "Second property",
          thirdKey: "Third property",
          fourthKey: "Fourth property",
        },
        keys,
      );
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
      const outputObject = omitProperties(inputObject, keys);
      expect(outputObject).not.toBe(keys);
      expect(outputObject).not.toBe(inputObject);
    });
  });
});
