import { BLOG_POSTS } from "@/config/blog";
import { cn } from "@/lib/utils";
import { Oregano } from "next/font/google";
import { ReactElement } from "react";
import { BlogPostItem } from "../blog-post";

const oregano = Oregano({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export const BlogSection = (): ReactElement => {
  if (!BLOG_POSTS || BLOG_POSTS.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className={cn("text-4xl sm:text-5xl", oregano.className)}>Blog</h2>
      
      <div className="flex flex-col">
        {BLOG_POSTS && BLOG_POSTS.length > 0 && BLOG_POSTS.map((post, index) => (
          <div key={post.title} className="group">
            <BlogPostItem
              title={post.title}
              date={post.date}
              url={post.url}
            />

            {index < BLOG_POSTS.length - 1 && (
              <div className="border-t border-[#FFFFFF10] group-hover:border-[#FFFFFF20] transition-colors" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 