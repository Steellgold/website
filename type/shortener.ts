import z from "zod";

export const shortLinkSchema = z.object({
  url: z.url().optional(),
  password: z.string().optional(),
  expiresAt: z.number().optional(),
  createdAt: z.number(),
  ip: z.string(),
  clicks: z.number().default(0),
  type: z.enum(["link", "article"]).default("link"),
  title: z.string().optional(),
  content: z.string().optional(),
  banner: z.string().optional()
});

export type ShortLink = z.infer<typeof shortLinkSchema>;

export const verifyPasswordSchema = z.object({
  short: z.string().min(1),
  password: z.string().min(1),
});

export type VerifyPasswordForm = z.infer<typeof verifyPasswordSchema>;

export const createShortLinkSchema = z.object({
  type: z.enum(["link", "article"]),
  url: z.string().optional(),
  slug: z.string().optional(),
  password: z.string().optional(),
  expiresAt: z.string().optional(),
  title: z.string().optional(),
  content: z.string().optional(),
  banner: z.string().optional()
}).superRefine((data, ctx) => {
  if (data.type === "link") {
    if (!data.url) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["url"],
        message: "URL is required for links"
      });
    } else {
      try {
        new URL(data.url);
      } catch {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["url"],
          message: "Invalid URL format"
        });
      }
    }
  }
  
  if (data.type === "article") {
    if (!data.title) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["title"],
        message: "Title is required for articles"
      });
    }
    if (!data.content) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["content"],
        message: "Content is required for articles"
      });
    }
    if (data.banner) {
      try {
        new URL(data.banner);
      } catch {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["banner"],
          message: "Invalid banner URL format"
        });
      }
    }
  }
});

export type CreateShortLinkForm = z.infer<typeof createShortLinkSchema>;