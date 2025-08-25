import z from "zod";

import { APIError } from "src/types";

function validateUUID(
  UUID: string,
  error: Error | APIError = new APIError(400, "INVALID_UUID"),
): string {
  const uuidSchema = z.uuid();
  const parsedUUID = uuidSchema.safeParse(UUID);
  if (!parsedUUID.success) {
    throw error;
  }
  return parsedUUID.data;
}

export default validateUUID;
