import getRandomNumber from "../src/get-random-number";

describe("getRandomNumber", () => {
  test("Returns an integer", () => {
    const randomNumber = getRandomNumber(0, 10);
    expect(randomNumber % 1).toBe(0);
  });
  test("Generates a random number within the specified range", () => {
    const randomNumber = getRandomNumber(0, 10);
    expect(randomNumber >= 0 && randomNumber <= 10).toBe(true);
  });
  test("Throw an error if inputs are not integers", () => {
    try {
      getRandomNumber(0.5, 10.5);
      throw new Error("Test failed");
    } catch (error: any) {
      expect(error?.message).toBe("NON_INTEGER_INPUTS");
    }
  });
});
