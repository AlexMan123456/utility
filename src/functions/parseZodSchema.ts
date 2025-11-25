import type { core, ZodType } from "zod";

import { DataError } from "src/types";

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
