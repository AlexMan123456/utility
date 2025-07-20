import { addDaysToDate } from "src";
import { describe, expect, test } from "vitest";

describe("addDaysToDate", () => {
  test("Returns the next day from today if no arguments given", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const output = addDaysToDate();

    expect(output.toString()).toBe(tomorrow.toString());
  });
  test("Returns the next day from the date given if only date is given", () => {
    const currentDate = new Date("2025-06-07T23:27:17.403");
    const theNextDay = new Date("2025-06-08T23:27:17.403");

    const output = addDaysToDate(currentDate);

    expect(output.toString()).toBe(theNextDay.toString());
  });
  test("Returns the day a given increment away from now if no date given but increment is given", () => {
    const twoDaysFromNow = new Date();
    twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);

    const output = addDaysToDate(undefined, 2);
    expect(output.toString()).toBe(twoDaysFromNow.toString());
  });
  test("Returns the day(s) before if the given increment is negative", () => {
    const currentDay = new Date("2025-06-07T23:27:17.403");
    const theDayBefore = new Date("2025-06-06T23:27:17.403");

    const output = addDaysToDate(currentDay, -1);

    expect(output.toString()).toBe(theDayBefore.toString());
  });
});
