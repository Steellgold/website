import { MarkdownPlease } from "@/components/markdown/please";
import { blog } from "@/lib/blog";
import { AsyncComponent } from "@/type/component";
import { CalendarIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 300;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = (await blog.articles.get(slug)).data;
    if (!post) notFound();

    return {
      title: `${post.title} | Gaëtan Huszovits`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt!,
        type: "article",
        publishedTime: post.createdAt,
        images: post.coverImage ? [post.coverImage] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt!,
        images: post.coverImage ? [post.coverImage] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post | Gaëtan Huszovits",
      description: "A blog post from Gaëtan Huszovits."
    };
  }
}

const Page: AsyncComponent<PageProps> = async ({ params }) => {
  const { slug } = await params;

  const post = (await blog.articles.get(slug)).data;

  return (
    <div className="relative">
      <article className="max-w-4xl mx-auto px-4 py-8">
        {post.coverImage && (
          <div className="mb-8">
            <Image
              src={post.coverImage}
              alt="Blog post illustration"
              className="w-full h-64 object-cover rounded-lg"
              width={1200}
              height={630}
            />
          </div>
        )}

        <header className="flex flex-col mb-8 items-center">
          <h1 className="text-3xl font-bold text-center text-white mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="flex items-center text-gray-300">
              <CalendarIcon className="w-4 h-4 mr-2" />
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <MarkdownPlease content={post.content} />
        </div>
      </article>
      
      {/* <Script
        src={`https://cdn.simplist.blog/analytics.js?apiKey=pk_f3ac7b0e31d67473c95d86d6459a03b3c510c85ef37adbec1d56f18e8460d770&slug=${slug}&DATE=${new Date().toISOString()}`}
        strategy="afterInteractive"
      /> */}
      <Script
        src={
          `https://cdn.simplist.blog/analytics.js?date=${new Date().toISOString()}`
        }
        data-api-key={process.env.NEXT_PUBLIC_SIMPLIST_API_KEY}
        data-slug={slug}/>
    </div>
  )
};

export default Page;
