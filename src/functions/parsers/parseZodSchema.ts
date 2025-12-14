import type { core, ZodType } from "zod";

import { DataError } from "src/types";

/**
 * An alternative function to zodSchema.parse() that can be used to strictly parse Zod schemas.
 *
 * @template Output - The Zod output type.
 * @template Input - The Zod input type.
 * @template Internals - The Zod internal types based on the output and input types.
 *
 * @param schema - The Zod schema to use in parsing.
 * @param data - The data to parse.
 *
 * @throws {DataError} If the given data cannot be parsed according to the schema.
 *
 * @returns The parsed data from the Zod schema.
 */
function parseZodSchema<Output, Input, Internals extends core.$ZodTypeInternals<Output, Input>>(
  schema: ZodType<Output, Input, Internals>,
  data: unknown,
): core.output<ZodType<Output, Input, Internals>> {
  const parsedResult = schema.safeParse(data);
  if (!parsedResult.success) {
    throw new DataError(data);
  }
  return parsedResult.data;
}

export default parseZodSchema;
