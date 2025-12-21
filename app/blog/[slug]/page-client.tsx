"use client";

import { MarkdownPlease } from "@/components/markdown/please";
import { Article, getBestMatchingVariant } from "@simplist.blog/sdk";
import { CalendarIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Script from "next/script";
import { useMemo } from "react";

type BlogArticleClientProps = {
  post: Article;
  slug: string;
  initialLang: string;
};

export const BlogArticleClient = ({ post, slug, initialLang }: BlogArticleClientProps) => {
  const t = useTranslations("blog");
  
  // Get best matching variant using initial language from SSR
  const variant = useMemo(() => {
    return getBestMatchingVariant(post, initialLang as any);
  }, [post, initialLang]);

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
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="flex items-center text-gray-300">
              <CalendarIcon className="w-4 h-4 mr-2" />
              {new Date(post.createdAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </span>
          </div>
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
