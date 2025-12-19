import z from "zod";

import parseZodSchema from "src/functions/parsers/parseZodSchema";
import { DataError } from "src/types";

const versionTypeSchema = z.enum(["major", "minor", "patch"]);

export type VersionType = z.infer<typeof versionTypeSchema>;

/**
 * Parses the input and verifies it is a valid software version type (i.e. `"major" | "minor" | "patch"`)
 *
 * @param data - The data to parse.
 *
 * @throws {DataError} If the data does not match one of the allowed version types (`"major" | "minor" | "patch"`).
 *
 * @returns The given version type if allowed.
 */
function parseVersionType(data: unknown): VersionType {
  return parseZodSchema(
    versionTypeSchema,
    data,
    new DataError(
      data,
      "INVALID_VERSION_TYPE",
      "The provided version type must be one of `major | minor | patch`",
    ),
  );
}

export default parseVersionType;
