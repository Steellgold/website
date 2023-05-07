import prisma from "$lib/database/prisma";

export async function GET({ request }): Promise<Response> {
  const url = new URL(request.url);
  const withDrafts = url.searchParams.get("withDrafts");

  const posts = await prisma.post.findMany({
    where: {
      published: withDrafts ? undefined : true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return new Response(JSON.stringify(posts), { status: 200 });
}