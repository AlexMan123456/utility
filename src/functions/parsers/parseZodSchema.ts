import type { z, ZodError, ZodType } from "zod";

import { DataError } from "src/types";

/**
 * An alternative function to zodSchema.parse() that can be used to strictly parse Zod schemas.
 *
 * @category Parsers
 *
 * @template SchemaType - The Zod schema type.
 * @template ErrorType - The type of error to throw on invalid data.
 *
 * @param schema - The Zod schema to use in parsing.
 * @param data - The data to parse.
 * @param onError - A custom error to throw on invalid data (defaults to `DataError`). May either be the error itself, or a function that returns the error or nothing. If nothing is returned, the default error is thrown instead.
 *
 * @throws {DataError} If the given data cannot be parsed according to the schema.
 *
 * @returns The parsed data from the Zod schema.
 */
function parseZodSchema<SchemaType extends ZodType, ErrorType extends Error>(
  schema: SchemaType,
  data: unknown,
  onError?: ErrorType | ((zodError: ZodError) => ErrorType | void),
): z.infer<SchemaType> {
  const parsedResult = schema.safeParse(data);
  if (!parsedResult.success) {
    if (onError) {
      if (onError instanceof Error) {
        throw onError;
      } else if (typeof onError === "function") {
        const evaluatedError = onError(parsedResult.error);
        if (evaluatedError instanceof Error) {
          throw evaluatedError;
        }
      }
    }

    throw new DataError(
      data,
      parsedResult.error.issues[0]?.code?.toUpperCase(),
      parsedResult.error.issues[0]?.message,
    );
  }
  return parsedResult.data;
}

export default parseZodSchema;
