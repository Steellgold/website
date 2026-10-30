import { useTranslations } from "next-intl"
import Link from "next/link"
import { FC } from "react"

export const Footer: FC = () => {
  const t = useTranslations("footer")
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-3xl px-4 pb-10 text-center text-xs text-muted-foreground sm:px-6">
      <p>© {year} Gaëtan Huszovits</p>
      <p>{t("madeIn")}</p>
      <Link
        href="/legal-notice"
        className="mt-2 inline-block underline underline-offset-4 transition-colors hover:text-foreground"
      >
        {t("legalNotice")}
      </Link>
    </footer>
  )
}
