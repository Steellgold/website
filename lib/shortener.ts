import { CreateShortLinkForm, ShortLink } from "@/type/shortener";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import bcrypt from "bcryptjs";
import { RESERVED_SHORT_LINKS } from "./utils";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "30m"),
  analytics: true,
});

export const generateShortSlug = (length: number = 6): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const validateCustomSlug = (slug: string): { valid: boolean; error?: string } => {
  if (slug.length < 3 || slug.length > 20) {
    return { valid: false, error: "The slug must be between 3 and 20 characters" };
  }

  const validChars = /^[a-zA-Z0-9_-]+$/;
  if (!validChars.test(slug)) {
    return { valid: false, error: "The slug can only contain letters, numbers, dashes (-) and underscores (_)" };
  }

  if (slug.startsWith("-") || slug.startsWith("_")) {
    return { valid: false, error: "The slug cannot start with a dash or underscore" };
  }

  if (slug.endsWith("-") || slug.endsWith("_")) {
    return { valid: false, error: "The slug cannot end with a dash or underscore" };
  }

  if (RESERVED_SHORT_LINKS.includes(slug.toLowerCase())) {
    return { valid: false, error: "This slug is reserved and cannot be used" };
  }

  return { valid: true };
};

export const createShortLink = async (request: CreateShortLinkForm, ip: string) => {
  try {
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return { success: false, error: "Rate limit exceeded. Try again in 30 minutes." };
    }

    if (request.type === "link" && request.url && !request.url.startsWith("http://") && !request.url.startsWith("https://")) {
      return { success: false, error: "Invalid URL. Must start with http:// or https://" };
    }

    let short: string;

    if (request.slug) {
      const validation = validateCustomSlug(request.slug);
      if (!validation.valid) {
        return { success: false, error: validation.error };
      }

      const exists = await redis.exists(`short:${request.slug}`);
      if (exists) {
        return { success: false, error: "This slug is already used. Please choose another one." };
      }

      short = request.slug;
    } else {
      let attempts = 0;
      do {
        short = generateShortSlug();
        attempts++;
        if (attempts > 10) {
          return { success: false, error: "Failed to generate unique short link" };
        }
      } while (await redis.exists(`short:${short}`));
    }

    const shortLink: ShortLink = {
      type: request.type || "link",
      createdAt: Date.now(),
      ip: ip,
      clicks: 0,
    };

    if (request.type === "link" && request.url) {
      shortLink.url = request.url;
    }

    if (request.type === "article") {
      shortLink.title = request.title;
      shortLink.content = request.content;
      if (request.banner) {
        shortLink.banner = request.banner;
      }
    }

    if (request.password) {
      shortLink.password = await bcrypt.hash(request.password, 12);
    }

    if (request.expiresAt) {
      shortLink.expiresAt = new Date(request.expiresAt).getTime();
    }

    await redis.set(`short:${short}`, shortLink);
    await redis.sadd(`ip:${ip}:links`, short);

    if (request.expiresAt) {
      const ttl = Math.floor((new Date(request.expiresAt).getTime() - Date.now()) / 1000);
      if (ttl > 0) {
        await redis.expire(`short:${short}`, ttl);
      }
    }

    return {
      success: true,
      short
    };
  } catch (error) {
    console.error("Error creating short link:", error);
    return { success: false, error: "Internal server error" };
  }
};

export const getShortLink = async (short: string): Promise<ShortLink | null> => {
  try {
    const data = await redis.get(`short:${short}`);
    if (!data) return null;

    const shortLink = data as ShortLink;

    if (shortLink.expiresAt && shortLink.expiresAt < Date.now()) {
      await redis.del(`short:${short}`);
      return null;
    }

    return shortLink;
  } catch (error) {
    console.error("Error getting short link:", error);
    return null;
  }
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("Error verifying password:", error);
    return false;
  }
};

export const getLinksByIp = async (ip: string): Promise<Array<{ short: string; link: ShortLink }>> => {
  try {
    const shortLinks = await redis.smembers(`ip:${ip}:links`);
    const links = [];

    for (const short of shortLinks) {
      const link = await getShortLink(short);
      if (link) {
        links.push({ short, link });
      } else {
        await redis.srem(`ip:${ip}:links`, short);
      }
    }

    return links.sort((a, b) => b.link.createdAt - a.link.createdAt);
  } catch (error) {
    console.error("Error getting links by IP:", error);
    return [];
  }
};

export const deleteShortLink = async (short: string, ip: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const shortLink = await getShortLink(short);
    if (!shortLink) {
      return { success: false, error: "Link not found" };
    }

    if (shortLink.ip !== ip) {
      return { success: false, error: "Unauthorized to delete this link" };
    }

    await redis.del(`short:${short}`);
    await redis.srem(`ip:${ip}:links`, short);

    return { success: true };
  } catch (error) {
    console.error("Error deleting short link:", error);
    return { success: false, error: "Internal server error" };
  }
};

export const incrementClicks = async (short: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const shortLink = await getShortLink(short);
    if (!shortLink) {
      return { success: false, error: "Link not found" };
    }

    shortLink.clicks = (shortLink.clicks || 0) + 1;
    await redis.set(`short:${short}`, shortLink);

    return { success: true };
  } catch (error) {
    console.error("Error incrementing clicks:", error);
    return { success: false, error: "Internal server error" };
  }
};

export const updateShortLink = async (short: string, updates: Partial<CreateShortLinkForm>): Promise<{ success: boolean; error?: string }> => {
  try {
    const shortLink = await getShortLink(short);
    if (!shortLink) {
      return { success: false, error: "Content not found" };
    }

    // Update the fields
    if (updates.type) {
      shortLink.type = updates.type;
    }

    if (updates.type === "link" && updates.url) {
      if (!updates.url.startsWith("http://") && !updates.url.startsWith("https://")) {
        return { success: false, error: "Invalid URL. Must start with http:// or https://" };
      }
      shortLink.url = updates.url;
      // Clear article fields when switching to link
      delete shortLink.title;
      delete shortLink.content;
      delete shortLink.banner;
    }

    if (updates.type === "article") {
      if (updates.title) shortLink.title = updates.title;
      if (updates.content) shortLink.content = updates.content;
      if (updates.banner !== undefined) {
        if (updates.banner) {
          shortLink.banner = updates.banner;
        } else {
          delete shortLink.banner;
        }
      }
      // Clear link URL when switching to article
      delete shortLink.url;
    }

    // Handle password update
    if (updates.password !== undefined) {
      if (updates.password) {
        shortLink.password = await bcrypt.hash(updates.password, 12);
      } else {
        // If empty password is provided, remove password protection
        delete shortLink.password;
      }
    }

    // Handle expiration update
    if (updates.expiresAt !== undefined) {
      if (updates.expiresAt) {
        shortLink.expiresAt = new Date(updates.expiresAt).getTime();
      } else {
        delete shortLink.expiresAt;
      }
    }

    await redis.set(`short:${short}`, shortLink);

    // Update TTL if expiration is set
    if (shortLink.expiresAt) {
      const ttl = Math.floor((shortLink.expiresAt - Date.now()) / 1000);
      if (ttl > 0) {
        await redis.expire(`short:${short}`, ttl);
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Error updating short link:", error);
    return { success: false, error: "Internal server error" };
  }
};