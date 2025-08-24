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
  status: number;
  constructor(status: number = 500, message?: string, options?: ErrorOptions) {
    super(message, options);
    this.status = status;
    if (message) {
      this.message = message;
    } else {
      this.message = httpErrorCodeLookup[this.status as HTTPErrorCodes] ?? "API_ERROR";
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default APIError;
