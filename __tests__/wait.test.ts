import { wait } from "../src";
jest.useFakeTimers();

describe("wait", () => {
  test("Resolves after the given amount of time", async () => {
    const mockFunction = jest.fn();
    wait(2).then(mockFunction);

    jest.advanceTimersByTime(1000);
    expect(mockFunction).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    await Promise.resolve();
    expect(mockFunction).toHaveBeenCalled();
  });
});
