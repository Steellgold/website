import { env } from "@/lib/env";
import { NotFoundError, Simplist, type PostWithTranslations } from "@simplist.blog/sdk";

const client = env.SIMPLIST_API_KEY ? new Simplist({ apiKey: env.SIMPLIST_API_KEY }) : null;

export const getArticles = async (): Promise<PostWithTranslations[]> => {
  if (!client) return [];

  try {
    const page = await client.posts.list();
    // The list endpoint does not include translations, so load each post to get them.
    return await Promise.all(page.data.map((post) => client.posts.get(post.slug)));
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.error("Error loading blog posts:", error);
    return [];
  }
};

export const getArticle = async (slug: string): Promise<PostWithTranslations | null> => {
  if (!client) return null;

  try {
    return await client.posts.get(slug);
  } catch (error) {
    if (process.env.NODE_ENV === "development" && !(error instanceof NotFoundError)) {
      console.error(`Error loading article "${slug}":`, error);
    }
    return null;
  }
};
