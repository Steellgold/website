import type { RequestEvent } from "./$types";
import { z } from "zod";
import prisma from "$lib/database/Prisma";

export async function GET({ request }: RequestEvent): Promise<Response> {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  if (!slug) return new Response("No slug", { status: 400 });

  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) return new Response("No post", { status: 404 });

  return new Response(JSON.stringify(post), { status: 200 });
}