import { BlogPostItem } from "@/components/blog-post";
import { Section } from "@/components/section";
import { BLOG_POSTS } from "@/config/blog";
import { ReactElement } from "react";

export const BlogSection = (): ReactElement => {
  if (!BLOG_POSTS || BLOG_POSTS.length === 0) {
    return <></>;
  }

  return (
    <Section name="Blog">
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
    </Section>
  );
}; 