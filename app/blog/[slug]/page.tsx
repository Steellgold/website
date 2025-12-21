import { blog } from "@/lib/blog";
import { AsyncComponent } from "@/type/component";
import { getBestMatchingVariant } from "@simplist.blog/sdk";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { BlogArticleClient } from "./page-client";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 300;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTranslations("blog");

  try {
    const post = (await blog.articles.get(slug)).data;
    if (!post) notFound();

    const variant = getBestMatchingVariant(post, 'en');
    const lang = 'lang' in variant ? variant.lang : 'en';

    return {
      title: `${variant.title} | Gaëtan Huszovits`,
      description: variant.excerpt ?? undefined,
      openGraph: {
        title: variant.title,
        description: variant.excerpt ?? undefined,
        type: "article",
        publishedTime: post.createdAt,
        images: variant.coverImage ? [variant.coverImage] : [],
        locale: lang
      },
      twitter: {
        card: "summary_large_image",
        title: variant.title,
        description: variant.excerpt ?? undefined,
        images: variant.coverImage ? [variant.coverImage] : [],
      },
    };
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.error("Error generating metadata:", error);
    return {
      title: t("blogPost"),
      description: t("blogPostDescription")
    };
  }
}

const Page: AsyncComponent<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const post = (await blog.articles.get(slug)).data;

  // Client-side component will use Simplist SDK's detectUserLanguage()
  // to automatically show content in user's browser language
  return <BlogArticleClient post={post} slug={slug} />;
};

export default Page;
