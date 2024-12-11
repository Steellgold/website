import { PostSchema, PostsSchema } from "@/lib/types/post.type";
import { ReactElement } from "react";
import { Card } from "@/lib/components/ui/card";
import { BlogHeaderComponent } from "./_components/header";
import { BlogPostCard } from "@/lib/components/blog.card";

const Posts = async (): Promise<ReactElement> => {
  const org = process.env.SIMPLIST_ORG_ID;
  const randomString = Math.random().toString(36).substring(7);
  const response = await fetch(`https://simplist.blog/api/${org}/posts`, {
    headers: {
      "x-api-key": process.env.SIMPLIST_API_KEY!,
      "Cache-Control": "no-cache"
    }
  });

  const data = await response.json()

  const schema = PostsSchema.safeParse(data);

  if (!schema.success) {
    return <Card>{schema.error.message}</Card>;
  }

  return (
    <div className={cn("justify-center mx-auto w-[90%] lg:w-[52%] mt-5 mb-5")}>
      <BlogHeaderComponent />

      <div className="flex flex-col gap-5 mt-5">
        {schema.data && schema.data.map((post: z.infer<typeof PostSchema>) => (
          <BlogPostCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;