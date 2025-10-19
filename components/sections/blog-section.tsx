import { BlogPostItem } from "@/components/blog-post";
import { Section } from "@/components/section";
import { blog } from "@/lib/blog";
import { ReactElement } from "react";

export const BlogSection = async (): Promise<ReactElement> => {
  const posts = (await blog.articles.list()).data;

  return (
    <Section name="Blog">
      <div className="flex flex-col">
        {posts && posts.length > 0 && posts.map((post, index) => (
          <div key={post.title} className="group">
            <BlogPostItem
              title={post.title}
              date={post.createdAt}
              url={post.slug}
            />

            {index < posts.length - 1 && (
              <div className="border-t border-[#FFFFFF10] group-hover:border-[#FFFFFF20] transition-colors" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}; 