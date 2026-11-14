import { BackLink } from "@/components/back-link";
import { MarkdownContent } from "@/components/markdown/markdown-content";
import { getArticle } from "@/lib/blog";
import { lastik } from "@/lib/font";
import { cn } from "@/lib/utils";
import { RiCalendarLine, RiText, RiTimerLine } from "@remixicon/react";
import { format } from "date-fns";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.description || undefined,
    alternates: { canonical: `/posts/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description || undefined,
      url: `/posts/${slug}`,
      type: "article",
      images: article.thumbnail ? [article.thumbnail] : undefined,
    },
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const locale = (await getLocale()) as "fr" | "en";
  const article = await getArticle(slug);

  if (!article) notFound();

  const translation = article.translations.find((item) => item.language === locale);
  const title = translation?.title ?? article.title;
  const content = translation?.content ?? article.content;
  const coverImage = article.thumbnail;
  const wordCount = content.trim().split(/s+/).filter(Boolean).length;
  const readTimeMinutes = Math.max(1, Math.round(wordCount / 200));

  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <BackLink />

      {coverImage && (
        <div className="relative w-full aspect-900/500 rounded-lg overflow-hidden border border-border mb-8">
          <Image src={coverImage} alt={title} fill className="object-cover" sizes="672px" priority />
        </div>
      )}

      <h1 className={cn("text-3xl sm:text-4xl mb-3", lastik.className)}>{title}</h1>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-10">
        <span className="flex items-center gap-1">
          <RiCalendarLine className="w-3.5 h-3.5" />
          {format(new Date(article.publishedAt ?? article.createdAt), "MMM d, yyyy")}
        </span>

        <span className="flex items-center gap-1">
          <RiTimerLine className="w-3.5 h-3.5" />
          ~{readTimeMinutes} min
        </span>

        <span className="flex items-center gap-1">
          <RiText className="w-3.5 h-3.5" />
          {wordCount.toLocaleString()}
        </span>
      </div>

      <MarkdownContent content={content} />
    </main>
  );
};

export default Page;