import { useTranslations } from "next-intl";
import { FC } from "react";

export const Footer: FC = () => {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-3xl mx-auto px-4 sm:px-6 pb-10 text-center text-xs text-muted-foreground">
      <p>© {year} Gaëtan Huszovits</p>
      <p>{t("madeIn")}</p>
    </footer>
  );
};