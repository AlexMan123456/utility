import { z } from "zod";

const envSchema = z.enum(["test", "development", "production"]);
export type Env = z.infer<typeof envSchema>;

function parseEnv(data: unknown): Env {
  return envSchema.parse(data);
}

export default parseEnv;
