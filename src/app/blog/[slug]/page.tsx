import { Card } from "@/lib/components/ui/card";
import { AsyncComponent } from "@/lib/components/utils/component";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Metadata } from "next";
import { PostSchema } from "@/lib/types/post.type";
import { CalendarIcon } from "lucide-react";
import { MarkdownPlease } from "@/lib/mdx";
import { BackToBlogButton } from "../_components/back-blog";
import { ConfettiReadComponent } from "../_components/confetti-readed";
import { ShareThisArticle } from "./_cmpns/share";
import { ImageZoomer } from "image-zoomer-react";
import TableOfContents from "./_cmpns/toc";

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const params = await props.params;

  const response = await fetch(`https://simplist.blog/api/${params.slug}`, {
    headers: {
      "x-api-key": process.env.SIMPLIST_API_KEY!
    },
    cache: "no-cache"
  });

  const data = await response.json();
  const schema = PostSchema.safeParse(data);

  if (!schema.success) {
    return {
      title: "Error",
      description: "Error",
    }
  }

  if (schema.data.status === "DRAFT") {
    return {
      title: "Protected Barrier - This post is a draft",
      description: "Actually, this post is a draft. You can't see it yet.",
    }
  }

  return {
    title: schema.data.title,
    description: schema.data.excerpt,
    openGraph: {
      title: schema.data.title,
      description: schema.data.excerpt,
      type: "article",
      images: [
        {
          url: schema.data.banner || "",
          width: 800,
          height: 600,
          alt: schema.data.title,
        }
      ]
    },
    twitter: {
      title: schema.data.title,
      description: schema.data.excerpt,
      images: [
        {
          url: schema.data.banner || "",
          width: 800,
          height: 600,
          alt: schema.data.title,
        }
      ]
    }
  }
}

const Post: AsyncComponent<PageProps> = async props => {
  const params = await props.params;
  const randomString = Math.random().toString(36).substring(7);
  const response = await fetch(`https://simplist.blog/api/${params.slug}?nocache=${randomString}`, {
    headers: {
      "x-api-key": process.env.SIMPLIST_API_KEY!,
      "Cache-Control": "no-cache"
    }
  });

  const data = await response.json()

  const schema = PostSchema.safeParse(data);

  if (!schema.success) {
    return <Card>{schema.error.message}</Card>;
  }

  if (schema.data.status === "DRAFT") return <></>;

  return (
    <>
      <BackToBlogButton onlyButton />
      <ConfettiReadComponent />

      <div className="relative">
        <TableOfContents content={data.content} />
        
        <article className="max-w-4xl mx-auto px-4 py-8">
          <ImageZoomer
            src={data.banner}
            alt="illustration image"
            width={800}
            height={400}
            className="rounded-lg mb-8"
          />

          <header className="flex flex-col mb-8 items-center">
            <h1 className="text-3xl font-bold text-center">{data.title}</h1>
            <div className="flex items-center justify-center space-x-4">
              <span className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2" />
                {dayJS(data.createdAt).format("MMMM D, YYYY")}
              </span>
            </div>

            <ShareThisArticle slug={data.slug} title={data.title} />
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <MarkdownPlease content={data.content} />
          </div>
        </article>
      </div>
    </>
  );
}

export default Post;