import z from "zod";

const emailSchema = z.email().brand<"Email">();
export type Email = z.infer<typeof emailSchema>;

function parseEmail(data: unknown): Email {
  return emailSchema.parse(data);
}

export default parseEmail;
