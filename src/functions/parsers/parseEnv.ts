import { z } from "zod";

import parseZodSchema from "src/functions/parsers/parseZodSchema";
import { DataError } from "src/types";

const envSchema = z.enum(["test", "development", "production"]);
/**
 * Represents the most common development environments
 *
 * @category Types
 */
export type Env = z.infer<typeof envSchema>;

/**
 * Parses the input and verifies it matches one of the environments allowed by the Env types ("test" | "development" | "production").
 *
 * @category Parsers
 *
 * @param data - The data to parse.
 *
 * @throws {DataError} If the data does not match one of the environments allowed by the Env types ("test" | "development" | "production").
 *
 * @returns The specified environment if allowed.
 */
function parseEnv(data: unknown): Env {
  return parseZodSchema(
    envSchema,
    data,
    new DataError(
      data,
      "INVALID_ENV",
      "The provided environment type must be one of `test | development | production`",
    ),
  );
}

export default parseEnv;
