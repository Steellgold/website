"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import { ArticleListItem } from "@simplist.blog/sdk";
import { format } from 'date-fns';
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type BlogPostItemProps = {
  article: ArticleListItem;
};

export const BlogPostItem: Component<BlogPostItemProps> = ({ article }) => {
  const isMobile = useIsMobile();
  const formattedDate = format(new Date(article.createdAt), isMobile ? 'd/MM/yyyy' : 'MMM d, yyyy');

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-row justify-between items-center py-2 hover:text-gray-300 transition-colors"
      prefetch
      target="_blank"
    >
      <div className="flex flex-row items-center gap-1.5">
        <div className={cn(
          "group-hover:hidden block", {
            "hidden": isMobile
          }
        )}>
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-row items-center gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag.name}
                  style={{
                    backgroundColor: `${tag.color}30`
                  }}
                  className="text-white font-sans text-xs px-1.5 py-0.5 rounded-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </div>

        <span className={cn(
          "hidden bg-white/10 text-white text-xs px-1.5 py-0.5 rounded-sm",
          "transition-all duration-300", {
            "group-hover:inline-block": !isMobile
          }
        )}>
          ~{article.readTimeMinutes} min
        </span>

        <span className="text-white font-sans">{article.title}</span>
      </div>

      <div className="flex flex-row items-center gap-1.5">
        <span className="text-white font-sans text-sm">{formattedDate}</span>

        <ArrowUpRight className="size-4 hidden group-hover:inline-block transition-all duration-300 text-white" />
      </div>
    </Link>
  );
}; 