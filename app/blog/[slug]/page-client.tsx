"use client";

import { MarkdownPlease } from "@/components/markdown/please";
import { Tag } from "@/components/tag";
import { cn } from "@/lib/utils";
import { Article, detectUserLanguage, getBestMatchingVariant } from "@simplist.blog/sdk";
import { IconCalendar, IconClock, IconEdit, IconTypography } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Script from "next/script";
import { useMemo } from "react";

type BlogArticleClientProps = {
  post: Article;
  slug: string;
};

export const BlogArticleClient = ({ post, slug }: BlogArticleClientProps) => {
  const t = useTranslations("blog");
  
  // Use Simplist SDK's native language detection
  // This automatically detects browser language and falls back appropriately
  const variant = useMemo(() => {
    const userLang = detectUserLanguage();
    return getBestMatchingVariant(post, userLang);
  }, [post]);

  const lang = 'lang' in variant ? variant.lang : 'en';

  return (
    <div className="relative">
      <article className="max-w-4xl mx-auto px-4 py-8" lang={lang}>
        {variant.coverImage && (
          <div className="mb-8">
            <Image
              src={variant.coverImage}
              alt={t("illustration")}
              className="w-full h-64 object-cover rounded-lg"
              width={1200}
              height={630}
            />
          </div>
        )}

        <header className="flex flex-col mb-8 items-center">
          <h1 className="text-3xl font-bold text-center text-white mb-4">{variant.title}</h1>

          <div className={cn(
            "flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-300 mb-3"
          )}>
            <span className={cn("flex items-center gap-1")}>
              <IconCalendar className="w-3.5 h-3.5" />
              {new Date(post.createdAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
                day: "numeric",
                month: "short",
                year: "numeric"
              })}
            </span>

            {post.updatedAt && post.updatedAt !== post.createdAt && (
              <>
                <span className="text-gray-600">•</span>
                <span className={cn("flex items-center gap-1")}>
                  <IconEdit className="w-3.5 h-3.5" />
                  {new Date(post.updatedAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  })}
                </span>
              </>
            )}

            <span className="text-gray-600">•</span>
            <span className={cn("flex items-center gap-1")}>
              <IconClock className="w-3.5 h-3.5" />
              ~{post.readTimeMinutes} min
            </span>

            <span className="text-gray-600">•</span>
            <span className={cn("flex items-center gap-1")}>
              <IconTypography className="w-3.5 h-3.5" />
              {post.wordCount.toLocaleString()}
            </span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className={cn("flex flex-wrap items-center justify-center gap-1.5")}>
              {post.tags.map((tag) => (
                <Tag key={tag.name} tag={tag} />
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <MarkdownPlease content={variant.content} />
        </div>
      </article>
      
      <Script
        src="https://cdn.simplist.blog/analytics.js"
        data-api-key={process.env.NEXT_PUBLIC_SIMPLIST_API_KEY}
        data-slug={slug}
        strategy="afterInteractive"
      />
    </div>
  );
};
