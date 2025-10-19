import { MarkdownPlease } from "@/components/markdown/please";
import { AsyncComponent } from "@/type/component";
import { PostSchema } from "@/type/post";
import { CalendarIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const response = await fetch(`https://simplist.blog/api/${slug}`, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_SIMPLIST_API_KEY!
      },
      cache: "no-cache"
    });

    const data = await response.json();
    const schema = PostSchema.safeParse(data);

    if (!schema.success) {
      return {
        title: "Blog Post Not Found",
        description: "The requested blog post could not be found."
      };
    }

    const post = schema.data;
    
    const description = post.content
      .replace(/[#*`]/g, '')
      .substring(0, 160)
      .trim() + (post.content.length > 160 ? '...' : '');

    return {
      title: `${post.title} | Gaëtan Huszovits`,
      description,
      openGraph: {
        title: post.title,
        description,
        type: "article",
        publishedTime: post.createdAt,
        images: post.banner ? [
          {
            url: post.banner,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description,
        images: post.banner ? [post.banner] : [],
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

  const response = await fetch(`https://simplist.blog/api/${slug}`, {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_SIMPLIST_API_KEY!
    },
    cache: "no-cache"
  });

  const data = await response.json();
  const schema = PostSchema.safeParse(data);

  if (!schema.success) {
    console.log(schema.error);
    notFound();
  }

  return (
    <div className="relative">
      <article className="max-w-4xl mx-auto px-4 py-8">
        {data.banner && (
          <div className="mb-8">
            <Image
              src={data.banner}
              alt="Blog post illustration"
              className="w-full h-64 object-cover rounded-lg"
              width={1200}
              height={630}
            />
          </div>
        )}

        <header className="flex flex-col mb-8 items-center">
          <h1 className="text-3xl font-bold text-center text-white mb-4">{data.title}</h1>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="flex items-center text-gray-300">
              <CalendarIcon className="w-4 h-4 mr-2" />
              {new Date(data.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <MarkdownPlease content={data.content} />
        </div>
      </article>
    </div>
  )
};

export default Page;