/* eslint-disable */
import z from "zod";

const emailSchema = z.email().brand<"Email">();
/** @deprecated Please use the inferred type from `z.email() from Zod instead.` */
export type Email = z.infer<typeof emailSchema>;

/** @deprecated Please use `z.email().parse() from Zod instead.`*/
function parseEmail(data: unknown): Email {
  return emailSchema.parse(data);
}

export default parseEmail;
