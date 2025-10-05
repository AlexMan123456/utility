import { describe, expect, test } from "vitest";

import { fillArray, wait } from "src/functions";

describe("fillArray", () => {
  test("Fills the array with the result of the passed-in function", () => {
    expect(
      fillArray(() => {
        return "Hello";
      }, 5),
    ).toEqual(["Hello", "Hello", "Hello", "Hello", "Hello"]);
  });
  test("Defaults to a length of 1 if length not provided", () => {
    expect(
      fillArray(() => {
        return "Hello";
      }),
    ).toEqual(["Hello"]);
  });
  test("Gives the callback access to the index", () => {
    expect(
      fillArray((index) => {
        return index;
      }, 5),
    ).toEqual([0, 1, 2, 3, 4]);
  });
  test("Works with async functions", async () => {
    expect(
      await fillArray(async (index) => {
        await wait(0.1);
        return index;
      }, 5),
    ).toEqual([0, 1, 2, 3, 4]);
  });
});
