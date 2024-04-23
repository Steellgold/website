import { z } from "zod";

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  banner: z.string().optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]),
  createdAt: z.string(),
  updatedAt: z.string(),
  metadata: z.array(z.object({
    key: z.string(),
    type: z.enum(["string", "number", "boolean", "date", "time", "datetime"]),
    value: z.string(),
  })).optional(),
});