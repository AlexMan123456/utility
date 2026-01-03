import type { core, ZodError, ZodType } from "zod";

import { DataError } from "src/types";

/**
 * An alternative function to zodSchema.parse() that can be used to strictly parse Zod schemas.
 *
 * @category Parsers
 *
 * @template Output - The Zod output type.
 * @template Input - The Zod input type.
 * @template Internals - The Zod internal types based on the output and input types.
 * @template ErrorType - The type of error to throw on invalid data.
 *
 * @param schema - The Zod schema to use in parsing.
 * @param data - The data to parse.
 * @param error - A custom error to throw on invalid data (defaults to `DataError`). May either be the error itself, or a function that returns the error.
 *
 * @throws {DataError} If the given data cannot be parsed according to the schema.
 *
 * @returns The parsed data from the Zod schema.
 */
function parseZodSchema<
  Output,
  Input,
  Internals extends core.$ZodTypeInternals<Output, Input>,
  ErrorType extends Error,
>(
  schema: ZodType<Output, Input, Internals>,
  data: unknown,
  error?: ErrorType | ((zodError: ZodError) => ErrorType),
): core.output<ZodType<Output, Input, Internals>> {
  const parsedResult = schema.safeParse(data);
  if (!parsedResult.success) {
    if (error) {
      if (error instanceof Error) {
        throw error;
      } else if (typeof error === "function") {
        throw error(parsedResult.error);
      }
    }

    throw new DataError(
      data,
      parsedResult.error.issues[0]?.code.toUpperCase(),
      parsedResult.error.issues[0].message,
    );
  }
  return parsedResult.data;
}

export default parseZodSchema;
