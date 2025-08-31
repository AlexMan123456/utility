import { describe, expect, test } from "vitest";

import APIError from "src/types/APIError";

function testAPIError(error: APIError, expectedStatus: number, expectedMessage: string) {
  try {
    throw error;
  } catch (error) {
    if (error instanceof APIError) {
      expect(error.status).toBe(expectedStatus);
      expect(error.message).toBe(expectedMessage);
    } else {
      throw error;
    }
  }
}

describe("APIError", () => {
  test("Throws an error with the given status and message", () => {
    testAPIError(new APIError(400, "TEST_PASSED"), 400, "TEST_PASSED");
  });
  const withTestCases = test.each([
    [400, "BAD_REQUEST"],
    [401, "UNAUTHORISED"],
    [403, "FORBIDDEN"],
    [404, "NOT_FOUND"],
    [418, "I_AM_A_TEAPOT"],
    [500, "INTERNAL_SERVER_ERROR"],
  ]);
  withTestCases("For status code %s, give default message %s", (status, message) => {
    testAPIError(new APIError(status), status, message);
  });
  test("Default to 500: INTERNAL_SERVER_ERROR if no status or message provided", () => {
    testAPIError(new APIError(), 500, "INTERNAL_SERVER_ERROR");
  });
  test("Default to a message of API_ERROR if status code is not a common one", () => {
    testAPIError(new APIError(69), 69, "API_ERROR");
  });
});
