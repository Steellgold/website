import { prisma } from "$lib/database/prisma";
import type { RequestEvent } from "@sveltejs/kit";

export async function POST({ request }: RequestEvent): Promise<Response> {
  const { type, slug } = await request.json();

  if (!slug) return new Response("No slug", { status: 400 });
  if (!type) return new Response("No type", { status: 400 });

  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) return new Response("No post", { status: 404 });

  switch (type) {
    case "like":
      await prisma.post.update({ where: { slug }, data: { likes_default: { increment: 1 } } });
      break;
    case "happy":
      await prisma.post.update({ where: { slug }, data: { likes_happy: { increment: 1 } } });
      break;
    case "explode":
      await prisma.post.update({ where: { slug }, data: { likes_explode: { increment: 1 } } });
      break;
    default:
      return new Response("Invalid type", { status: 400 });
  }

  return new Response(JSON.stringify({
    default: post.likes_default,
    happy: post.likes_happy,
    explode: post.likes_explode
  }), { status: 200 });
}