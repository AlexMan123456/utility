import { wait } from "src";
import { vi, beforeAll, afterAll, describe, test, expect } from "vitest";

beforeAll(() => {
  vi.useFakeTimers();
});

afterAll(() => {
  vi.useRealTimers();
});

describe("wait", () => {
  test("Resolves after the given amount of time", async () => {
    const mockFunction = vi.fn();
    wait(2).then(mockFunction);

    vi.advanceTimersByTime(1000);
    expect(mockFunction).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1000);
    await Promise.resolve();
    expect(mockFunction).toHaveBeenCalled();
  });
});
