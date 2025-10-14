export type HTTPErrorCodes = 400 | 401 | 403 | 404 | 418 | 500;

export const httpErrorCodeLookup: Record<HTTPErrorCodes, string> = {
  400: "BAD_REQUEST",
  401: "UNAUTHORISED",
  403: "FORBIDDEN",
  404: "NOT_FOUND",
  /* Supporting this one too because it's funny. You'll never use it in practice because 
                why would an error give a teapot, but it's funny. Do not question me. */
  418: "I_AM_A_TEAPOT",
  500: "INTERNAL_SERVER_ERROR",
};

class APIError extends Error {
  public status: number;
  public constructor(
    status: HTTPErrorCodes | number = 500,
    message?: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.status = status;
    if (message) {
      this.message = message;
    } else {
      this.message = httpErrorCodeLookup[this.status as HTTPErrorCodes] ?? "API_ERROR";
    }
    Object.defineProperty(this, "message", { enumerable: true });
    Object.setPrototypeOf(this, new.target.prototype);
  }
  public static check(input: unknown): input is APIError {
    const data: any = input;
    return (
      typeof data === "object" &&
      data !== null &&
      typeof data?.status === "number" &&
      typeof data?.message === "string"
    );
  }
}

export default APIError;
