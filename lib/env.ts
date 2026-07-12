import { z } from "zod";

const requiredEnv = z.object({});

const optionalEnv = z.object({
  SIMPLIST_API_KEY: z.string().optional(),
});

const envSchema = requiredEnv.merge(optionalEnv);

export const env = envSchema.parse(process.env);