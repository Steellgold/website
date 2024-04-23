import { z } from "zod";

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  banner: z.string(),
  status: z.enum(["DRAFT", "PUBLISHED"]),
  lockedUntil: z.string().optional(),
});