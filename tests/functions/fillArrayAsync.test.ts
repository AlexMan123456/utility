/* eslint-disable @typescript-eslint/no-deprecated */
import { describe, expect, test } from "vitest";

import { fillArrayAsync, wait } from "src/functions";

describe("fillArrayAsync", () => {
  test("Fills an array given an async function", async () => {
    expect(
      await fillArrayAsync(async () => {
        await wait(0.1);
        return "Hello";
      }, 5),
    ).toEqual(["Hello", "Hello", "Hello", "Hello", "Hello"]);
  });
  test("Gives access to the index in callback", async () => {
    expect(
      await fillArrayAsync(async (index) => {
        await wait(0.1);
        return index;
      }, 5),
    ).toEqual([0, 1, 2, 3, 4]);
  });
  test("Defaults to a length of 1 if length not provided", async () => {
    expect(
      await fillArrayAsync(async () => {
        await wait(0.1);
        return "Hello";
      }),
    ).toEqual(["Hello"]);
  });
});
