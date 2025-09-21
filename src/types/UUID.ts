import z from "zod";

const uuidSchema = z.uuid().brand<"UUID">();
export type UUID = z.infer<typeof uuidSchema>;

function parseUUID(UUID: unknown): UUID {
  return uuidSchema.parse(UUID);
}

export default parseUUID;
