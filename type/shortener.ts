import z from "zod";

export const shortLinkSchema = z.object({
  url: z.url(),
  password: z.string().optional(),
  expiresAt: z.number().optional(),
  createdAt: z.number()
});

export type ShortLink = z.infer<typeof shortLinkSchema>;

export const verifyPasswordSchema = z.object({
  short: z.string().min(1),
  password: z.string().min(1),
});

export type VerifyPasswordForm = z.infer<typeof verifyPasswordSchema>;

export const createShortLinkSchema = z.object({
  url: z.url(),
  slug: z.string().optional(),
  password: z.string().optional(),
  expiresAt: z.string().optional()
});

export type CreateShortLinkForm = z.infer<typeof createShortLinkSchema>;