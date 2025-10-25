import { blog } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const post = (await blog.articles.get(slug)).data;

    if (!post) {
      return new NextResponse("Article not found", { status: 404 });
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${post.title}.md</title>
  </head>
<body>
  <pre>${post.content}</pre>
</body>
</html>`;

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Error fetching article:", error);
    return new NextResponse("Error fetching article", { status: 500 });
  }
}
