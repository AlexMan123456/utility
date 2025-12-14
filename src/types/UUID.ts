/* eslint-disable */
import z from "zod";

const uuidSchema = z.uuid().brand<"UUID">();
/** @deprecated Please use the inferred type from `z.uuid() from Zod instead.` */
export type UUID = z.infer<typeof uuidSchema>;

/** @deprecated Please use `z.uuid().parse() from Zod instead.`*/
function parseUUID(UUID: unknown): UUID {
  return uuidSchema.parse(UUID);
}

export default parseUUID;
