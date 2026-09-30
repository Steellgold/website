import { FtrvCards } from "@/components/ftrv-cards";
import { lastik } from "@/lib/font";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("ftrv");

  return {
    title: { absolute: t("title") },
    description: "",
    keywords: [],
    authors: [],
    robots: { index: false, follow: false },
    openGraph: {},
    twitter: {},
    alternates: {},
  };
};

const Page = async () => {
  const t = await getTranslations("ftrv");

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mb-10">
        <h1 className={cn("mb-2 text-3xl sm:text-4xl", lastik.className)}>{t("title")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
        <p className="mt-1 text-sm text-muted-foreground">{t("date")}</p>
      </header>
      <FtrvCards />
    </main>
  );
};

export default Page;
