import { env } from "@/lib/env";
import { SimplistClient, type Article, type ArticleListItem } from "@simplist.blog/sdk";

const client = env.SIMPLIST_API_KEY ? new SimplistClient() : null;

export const getArticles = async (): Promise<ArticleListItem[]> => {
  if (!client) return [];

  try {
    const response = await client.articles.list();
    return response.data ?? [];
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.error("Error loading blog posts:", error);
    return [];
  }
};

export const getArticle = async (slug: string): Promise<Article | null> => {
  if (!client) return null;

  try {
    const response = await client.articles.get(slug);
    return response.data ?? null;
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.error(`Error loading article "${slug}":`, error);
    return null;
  }
};