import { MDX } from "@/lib/components/mdx";
import { Card } from "@/lib/components/ui/card";
import { AsyncComponent } from "@/lib/components/utils/component";
import { getMdxSource } from "@/lib/mdx.fetcher";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Metadata } from "next";
import { PostSchema } from "@/lib/types/post.type";

type PageProps = {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const randomString = Math.random().toString(36).substring(7);
  const response = await fetch(`https://simplist.blog/api/${params.slug}?nocache=${randomString}`, {
    headers: {
      "x-api-key": process.env.SIMPLIST_API_KEY!,
      "Cache-Control": "no-cache",
      "If-None-Match": "",
    } 
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

const Post: AsyncComponent<PageProps> = async ({ params }) => {
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

  const postData = await getMdxSource(schema.data.content);

  return (
    <>
      <div className="flex flex-col items-center justify-center px-2">
        <div className="m-auto w-full text-center md:w-7/12">
          <p className="m-auto my-5 w-10/12 text-sm font-light text-stone-400 md:text-base">
            {dayJS(schema.data.createdAt).format("MMMM D, YYYY")}
          </p>
          <h1 className="mb-10 text-sm md:text-3xl font-bold text-white">
            {data.title}
          </h1>
          <p className="text-md m-auto w-10/12 text-stone-400 md:text-lg">
            {data.description}
          </p>
        </div>
      </div>

      <div className="m-auto w-11/12">
        <MDX source={postData} />
      </div>
    </>
  );
}

export default Post;