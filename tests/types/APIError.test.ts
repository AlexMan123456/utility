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
  describe("Give sensible default messages to common error status codes", () => {
    test("400: BAD_REQUEST", () => {
      testAPIError(new APIError(400), 400, "BAD_REQUEST");
    });
    test("401: UNAUTHORISED", () => {
      testAPIError(new APIError(401), 401, "UNAUTHORISED");
    });
    test("403: FORBIDDEN", () => {
      testAPIError(new APIError(403), 403, "FORBIDDEN");
    });
    test("404: NOT_FOUND", () => {
      testAPIError(new APIError(404), 404, "NOT_FOUND");
    });
    test("418: I_AM_A_TEAPOT", () => {
      testAPIError(new APIError(418), 418, "I_AM_A_TEAPOT");
    });
    test("500: INTERNAL_SERVER_ERROR", () => {
      testAPIError(new APIError(500), 500, "INTERNAL_SERVER_ERROR");
    });
  });
  test("Default to 500: INTERNAL_SERVER_ERROR if no status or message provided", () => {
    testAPIError(new APIError(), 500, "INTERNAL_SERVER_ERROR");
  });
  test("Default to a message of API_ERROR if status code is not a common one", () => {
    testAPIError(new APIError(69), 69, "API_ERROR");
  });
});
