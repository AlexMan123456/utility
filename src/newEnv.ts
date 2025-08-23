import { z } from "zod";

const envSchema = z.enum(["test", "development", "production"]);
export type Env = z.infer<typeof envSchema>;

export function newEnv(data: unknown = "development"): Env {
  return envSchema.parse(data);
}

export default newEnv;
