import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: "https://notable-kitten-44496.upstash.io",
  token: process.env.NEXT_PUBLIC_REDIS_TOKEN_READ_ONLY!
})