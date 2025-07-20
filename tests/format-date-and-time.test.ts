import { formatDateAndTime } from "src";
import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2025-06-07T23:27:17.403"));
});

afterAll(() => {
  vi.useRealTimers();
});

describe("formatDateAndTime", () => {
  test("Returns a string", () => {
    const output = formatDateAndTime(new Date());
    expect(typeof output).toBe("string");
  });
  test("Returns 'Yesterday at <time>' if the given date occured a day before today", () => {
    const yesterday = new Date("2025-06-06T23:27:17.403");
    const formattedDate = formatDateAndTime(yesterday);
    expect(formattedDate).toBe("Yesterday at 23:27");
  });
  test("Returns 'Today at <time> if the given date occured today", () => {
    const formattedDate = formatDateAndTime(new Date());
    expect(formattedDate).toBe("Today at 23:27");
  });
  test("Returns '<date>, <time>' for all other dates and times", () => {
    const twoDaysAgo = new Date("2025-06-05T23:27:17.403");
    const formattedDate = formatDateAndTime(twoDaysAgo);
    expect(formattedDate).toBe("05/06/2025, 23:27");
  });
});
