import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export const getPythonScript = async (slug: string): Promise<string | null> => {
  try {
    const code = await redis.get<string>(slug);
    if (!code) return null;

    return code;
  } catch (error) {
    console.error("Error getting Python script:", error);
    return null;
  }
};
