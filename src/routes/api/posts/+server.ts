import type { RequestEvent } from "./$types";
import { z } from "zod";
import prisma from "$lib/database/Prisma";

export async function POST({ request }: RequestEvent): Promise<Response> {
  if (!request.body) {
    return new Response("No body", { status: 400 });
  }

  const body = await request.json();
  const schema = z.object({
    title: z.string().min(1).max(255),
    slug: z.string().min(1).max(255),
    content: z.string().min(30),
    bannerUrl: z.string().url()
  });

  const data = schema.safeParse(body);
  if (!data.success) {
    return new Response("Invalid body", { status: 400 });
  }

  const post = await prisma.post.create({
    data: {
      title: data.data.title,
      slug: data.data.slug,
      content: data.data.content,
      bannerUrl: data.data.bannerUrl
    }
  });

  if (post) {
    return new Response("The post has been created", { status: 201 });
  }
  
  return new Response("An error occured", { status: 500 });
}

export async function GET({ }: RequestEvent): Promise<Response> {
  const posts = await prisma.post.findMany();
  return new Response(JSON.stringify(posts), { status: 200 });
}