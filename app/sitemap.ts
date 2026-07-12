import { SITE_URL } from "@/config/site"
import type { MetadataRoute } from "next"

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date()

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ]
}

export default sitemap;