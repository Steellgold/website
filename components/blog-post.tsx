"use client";

import { Tag } from "@/components/tag";
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

  return (
    <Link
      href={`/blog/${article.slug}`}
      className={cn(
        "group flex flex-col gap-1",
        "sm:flex-row sm:items-center sm:justify-between",
        "py-2 hover:text-gray-300",
        "transition-colors"
      )}
      prefetch
      target="_blank"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 min-w-0">
        <div className="hidden sm:block group-hover:hidden">
          {article.tags?.length > 0 && (
            <div className="flex flex-row items-center gap-1.5">
              {article.tags.map((tag) => (
                <Tag key={tag.name} tag={tag} />
              ))}
            </div>
          )}
        </div>

        <span className={cn(
          "hidden bg-white/10 text-white text-xs px-1.5 py-0.5 rounded-sm",
          "opacity-0 group-hover:opacity-100 transition", {
            "group-hover:block": !isMobile
          }
        )}>
          ~{article.readTimeMinutes} min
        </span>

        <span className="text-white font-sans truncate sm:whitespace-normal">
          {article.title}
        </span>
      </div>

      <div className={cn(
        "flex flex-row items-center gap-1.5",
        "text-sm text-white/65 group-hover:text-white",
        "transition-colors"
      )}>
        <span className="whitespace-nowrap">
          {format(new Date(article.createdAt), "MMM d, yyyy")}
        </span>

        <ArrowUpRight className="size-4 hidden group-hover:block transition" />
      </div>
    </Link>
  );
};