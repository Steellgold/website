import { PERSON, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/config/site"
import { FC } from "react"

type StructuredDataProps = {
  locale: string
}

export const StructuredData: FC<StructuredDataProps> = ({ locale }) => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: PERSON.name,
      jobTitle: PERSON.jobTitle,
      image: PERSON.image,
      url: PERSON.url,
      sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github, SOCIAL_LINKS.x, SOCIAL_LINKS.malt],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: locale,
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}