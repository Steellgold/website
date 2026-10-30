import { BackLink } from "@/components/back-link"
import { CONTACT_EMAIL } from "@/config/site"
import { handwritten } from "@/lib/font"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { FC } from "react"

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("legal")

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/legal-notice" },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "/legal-notice",
      type: "website",
    },
  }
}

const Page: FC = async () => {
  const t = await getTranslations("legal")
  const linkClassName =
    "text-foreground underline underline-offset-4 hover:no-underline"
  const sections = [
    "intellectualProperty",
    "privacy",
    "analytics",
    "rights",
    "links",
  ] as const

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <BackLink />
      <h1 className={cn("mb-10 text-4xl sm:text-5xl", handwritten.className)}>
        {t("title")}
      </h1>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section aria-labelledby="publisher-title" className="space-y-3">
          <h2
            id="publisher-title"
            className="text-xl font-medium text-foreground"
          >
            {t("publisherTitle")}
          </h2>
          <p>{t("publisher")}</p>
          <p>
            {t("contact")}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

        <section aria-labelledby="hosting-title" className="space-y-3">
          <h2
            id="hosting-title"
            className="text-xl font-medium text-foreground"
          >
            {t("hostingTitle")}
          </h2>
          <p>{t("hosting")}</p>
          <p>
            {t("hostingPhone")}{" "}
            <a href="tel:+15592887060" className={linkClassName}>
              +1 559 288 7060
            </a>
          </p>
          <p>
            <a href="https://vercel.com" className={linkClassName}>
              vercel.com
            </a>
          </p>
          <p>
            <a
              href="https://vercel.com/legal/privacy-policy"
              className={linkClassName}
            >
              {t("hostingPrivacy")}
            </a>
          </p>
        </section>

        {sections.map((section) => (
          <section
            key={section}
            aria-labelledby={`${section}-title`}
            className="space-y-3"
          >
            <h2
              id={`${section}-title`}
              className="text-xl font-medium text-foreground"
            >
              {t(`${section}Title`)}
            </h2>
            <p>{t(section)}</p>
            {section === "analytics" && <p>{t("preferences")}</p>}
            {section === "rights" && (
              <>
                <p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p>
                  <a href="https://www.cnil.fr" className={linkClassName}>
                    {t("cnil")}
                  </a>
                </p>
              </>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}

export default Page
