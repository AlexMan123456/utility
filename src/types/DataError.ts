class DataError extends Error {
  public data: unknown;
  public code: string;

  /**
   * @param data - The data that caused the error.
   * @param message  - A human-readable error message (e.g. The data provided is invalid).
   * @param code - A standardised code (e.g. UNEXPECTED_DATA).
   * @param options - Extra options to pass to super Error constructor.
   */
  public constructor(
    data: unknown,
    message: string = "The data provided is invalid",
    code: string = "INVALID_DATA",
    options?: ErrorOptions,
  ) {
    super(message, options);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, new.target);
    }

    this.name = new.target.name;
    this.code = code;
    this.data = data;

    Object.defineProperty(this, "message", { enumerable: true });
    Object.setPrototypeOf(this, new.target.prototype);
  }

  public static check(input: unknown): input is DataError {
    const data: any = input;
    return (
      typeof data === "object" &&
      data !== null &&
      typeof data.message === "string" &&
      typeof data.code === "string" &&
      "data" in data
    );
  }
}

export default DataError;
