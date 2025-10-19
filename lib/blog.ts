import { SimplistClient } from "@simplist.blog/sdk";

export const blog = new SimplistClient({
  apiKey: process.env.SIMPLIST_API_KEY!
})