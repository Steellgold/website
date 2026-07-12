import { SITE_URL } from "@/config/site"
import { getArticles } from "@/lib/blog"
import type { MetadataRoute } from "next"

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const lastModified = new Date()
  const articles = await getArticles()

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    ...articles.map((article) => ({
      url: `${SITE_URL}/posts/${article.slug}`,
      lastModified: new Date(article.createdAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]
}

export default sitemap;