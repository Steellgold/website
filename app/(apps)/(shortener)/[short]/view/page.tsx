import { MarkdownPlease } from "@/components/markdown/please";
import { getShortLink } from "@/lib/shortener";
import { IconCalendar } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    short: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { short } = await params;

  try {
    const shortLink = await getShortLink(short);

    if (!shortLink || shortLink.type !== "article") {
      return {
        title: "Article Not Found",
        description: "The requested article could not be found."
      };
    }

    const description = shortLink.content
      ?.replace(/[#*`]/g, '')
      .substring(0, 160)
      .trim() + (shortLink.content && shortLink.content.length > 160 ? '...' : '');

    return {
      title: `${shortLink.title} | Gaëtan Huszovits`,
      description,
      openGraph: {
        title: shortLink.title!,
        description,
        type: "article",
        publishedTime: new Date(shortLink.createdAt).toISOString(),
        images: shortLink.banner ? [
          {
            url: shortLink.banner,
            width: 1200,
            height: 630,
            alt: shortLink.title!,
          }
        ] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: shortLink.title!,
        description,
        images: shortLink.banner ? [shortLink.banner] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Article | Gaëtan Huszovits",
      description: "An article from Gaëtan Huszovits."
    };
  }
}

export default async function ArticleViewPage({ params }: PageProps) {
  const { short } = await params;
  const shortLink = await getShortLink(short);

  if (!shortLink || shortLink.type !== "article") {
    notFound();
  }

  return (
    <div className="relative">
      <article className="max-w-4xl mx-auto px-4 py-8">
        {shortLink.banner && (
          <div className="mb-8">
            <Image
              src={shortLink.banner}
              alt="Article illustration"
              className="w-full h-64 object-cover rounded-lg"
              width={1200}
              height={630}
            />
          </div>
        )}

        <header className="flex flex-col mb-8 items-center">
          <h1 className="text-3xl font-bold text-center text-white mb-4">{shortLink.title}</h1>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="flex items-center text-gray-300">
              <IconCalendar className="w-4 h-4 mr-2" />
              {new Date(shortLink.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <MarkdownPlease content={shortLink.content!} />
        </div>
      </article>
    </div>
  );
}