import { getArticles } from "@/lib/blog";
import { lastik } from "@/lib/font";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { FC } from "react";

export const BlogSection: FC = async () => {
  const t = await getTranslations("blog");
  const locale = await getLocale();
  const articles = await getArticles();

  if (articles.length === 0) return null;

  return (
    <section className="flex flex-col gap-3 w-full mt-12">
      <h2 className={cn("text-2xl sm:text-3xl", lastik.className)}>{t("title")}</h2>

      <div className="flex flex-col">
        {articles.map((article, index) => {
          const title = locale === "fr" && article.variants?.fr?.title ? article.variants.fr.title : article.title;

          return (
            <Link
              key={article.slug}
              href={`/posts/${article.slug}`}
              className={cn(
                "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3",
                "hover:text-muted-foreground transition-colors",
                index !== articles.length - 1 && "border-b border-border"
              )}
            >
              <span>{title}</span>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {format(new Date(article.createdAt), "MMM d, yyyy")}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};