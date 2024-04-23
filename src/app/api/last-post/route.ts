import { PostSchema } from "@/lib/types/post.type";
import { NextResponse } from "next/server";

export const GET = async(): Promise<NextResponse> => {
  try {
    const response = await fetch("https://simplist.blog/api/clvb16vqu0000syvk0rfb7pjx/last", {
      headers: {
        "x-api-key": process.env.SIMPLIST_API_KEY || ""
      } as HeadersInit,
      cache: "no-cache"
    });

    const schema = PostSchema.safeParse(await response.json());
    if (!schema.success) {
      return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }

    if (schema.data.status !== "PUBLISHED") {
      return NextResponse.json({
        ...schema.data,
        id: "",
        title: "",
        excerpt: "",
        content: "",
        status: "DRAFT",
        slug: "",
        banner: ""
      });
    }

    return NextResponse.json(schema.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}