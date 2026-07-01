"use client";

import { Tag } from "@/components/tag";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import { ArticleListItem } from "@simplist.blog/sdk";
import { format } from "date-fns";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type BlogPostItemProps = {
  article: ArticleListItem;
};

export const BlogPostItem: Component<BlogPostItemProps> = ({ article }) => {
  const isMobile = useIsMobile();
  const locale = useLocale();
  const [tooltipSide, setTooltipSide] = useState<"left" | "top">("left");

  useEffect(() => {
    const updateTooltipSide = () => {
      setTooltipSide(window.innerWidth < 1490 ? "top" : "left");
    };

    updateTooltipSide();

    window.addEventListener("resize", updateTooltipSide);
    return () => window.removeEventListener("resize", updateTooltipSide);
  }, []);

  const coverImage = (locale === 'fr' && article.variants?.fr?.coverImage) 
    ? article.variants.fr.coverImage 
    : article.coverImage;

  const linkContent = (
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

        <IconArrowUpRight className="size-4 hidden group-hover:block transition" />
      </div>
    </Link>
  );

  if (!coverImage || isMobile) {
    return linkContent;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {linkContent}
      </TooltipTrigger>

      <TooltipContent
        side={tooltipSide}
        sideOffset={10}
        className="p-0.5 bg-primary/10 rounded-lg"
      >
        <div className="relative w-[300px] h-[168px] rounded-lg overflow-hidden">
          <Image
            src={coverImage}
            alt={article.title}
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>
      </TooltipContent>
    </Tooltip>
  );
};