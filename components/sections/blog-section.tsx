import { BlogPostItem } from "@/components/blog-post";
import { Section } from "@/components/section";
import { blog } from "@/lib/blog";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { ReactElement } from "react";

export const BlogSection = async (): Promise<ReactElement> => {
  const t = await getTranslations("blog");
  
  try {
    const response = await blog.articles.list();
    const posts = response.data;

    // Get user language from cookies
    const cookieStore = await cookies();
    const userLang = cookieStore.get('NEXT_LOCALE')?.value || 'en';

    return (
      <Section name={t("title")}>
        <div className="flex flex-col">
          {posts && posts.length > 0 && posts.map((post, index) => {
            // Get title in user's language if available
            let title = post.title;

            if (userLang === 'fr' && post.variants?.fr?.title) {
              title = post.variants.fr.title;
            }
            
            return (
              <div key={post.slug} className="group">
                <BlogPostItem article={{ ...post, title: title }} />

                {index < posts.length - 1 && (
                  <div className="border-t border-[#FFFFFF10] group-hover:border-[#FFFFFF20] transition-colors" />
                )}
              </div>
            );
          })}
        </div>
      </Section>
    );
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.error("Error loading blog posts:", error);
    return (
      <Section name={t("title")}>
        <div className="flex flex-col">
          <p className="text-gray-400">{t("unavailable")}</p>
        </div>
      </Section>
    );
  }
};