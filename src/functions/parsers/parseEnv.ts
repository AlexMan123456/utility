import { z } from "zod";

import parseZodSchema from "src/functions/parsers/parseZodSchema";

const envSchema = z.enum(["test", "development", "production"]);
/** Represents the most common development environments */
export type Env = z.infer<typeof envSchema>;

/**
 * Parses the input and verifies it matches one of the environments allowed by the Env types ("test" | "development" | "production").
 *
 * @param data - The data to parse.
 *
 * @throws {ZodError} If the data does not match one of the environments allowed by the Env types ("test" | "development" | "production").
 *
 * @returns The specified environment if allowed.
 */
function parseEnv(data: unknown): Env {
  return parseZodSchema(envSchema, data, {
    code: "INVALID_ENV",
    message: "The provided environment type must be one of `test | development | production`",
  });
}

export default parseEnv;
