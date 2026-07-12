import { MarkdownContent } from "@/components/markdown/markdown-content";
import { getArticle } from "@/lib/blog";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { RiArrowLeftLine, RiCalendarLine, RiText, RiTimerLine } from "@remixicon/react";
import { format } from "date-fns";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
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
    description: article.excerpt ?? undefined,
    alternates: { canonical: `/posts/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt ?? undefined,
      url: `/posts/${slug}`,
      type: "article",
      images: article.coverImage ? [article.coverImage] : undefined,
    },
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const locale = (await getLocale()) as "fr" | "en";
  const article = await getArticle(slug);

  if (!article) notFound();

  const variant = locale === "fr" ? article.variants?.fr : undefined;
  const title = variant?.title ?? article.title;
  const content = variant?.content ?? article.content;
  const coverImage = variant?.coverImage ?? article.coverImage;

  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <RiArrowLeftLine className="w-4 h-4" />
        Gaëtan Huszovits
      </Link>

      {coverImage && (
        <div className="relative w-full aspect-900/500 rounded-lg overflow-hidden border border-border mb-8">
          <Image src={coverImage} alt={title} fill className="object-cover" sizes="672px" priority />
        </div>
      )}

      <h1 className={cn("text-3xl sm:text-4xl mb-3", piano.className)}>{title}</h1>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-10">
        <span className="flex items-center gap-1">
          <RiCalendarLine className="w-3.5 h-3.5" />
          {format(new Date(article.createdAt), "MMM d, yyyy")}
        </span>

        {article.readTimeMinutes ? (
          <span className="flex items-center gap-1">
            <RiTimerLine className="w-3.5 h-3.5" />
            ~{article.readTimeMinutes} min
          </span>
        ) : null}

        {article.wordCount ? (
          <span className="flex items-center gap-1">
            <RiText className="w-3.5 h-3.5" />
            {article.wordCount.toLocaleString()}
          </span>
        ) : null}
      </div>

      <MarkdownContent content={content} />
    </main>
  );
};

export default Page;