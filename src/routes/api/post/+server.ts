import { PRIVATE_AUTHORIZED_UID } from "$env/static/private";
import prisma from "$lib/database/prisma";
import type { RequestEvent } from "./$types";
import { z } from "zod";

export async function GET({ request }: RequestEvent): Promise<Response> {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  if (!slug) {
    return new Response("No slug", { status: 400 });
  }

  const post = await prisma.post.findUnique({
    where: {
      slug
    }
  });

  if (!post) {
    return new Response("No post", { status: 404 });
  }

  return new Response(JSON.stringify(post), { status: 200 });
}

export async function PUT({ request }: RequestEvent): Promise<Response> {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  if (!slug) {
    return new Response(JSON.stringify({ message: "No slug" }), { status: 400 });
  }

  const post = await prisma.post.findUnique({
    where: {
      slug
    }
  });

  if (!post) {
    return new Response(JSON.stringify({ message: "No post" }), { status: 404 });
  }

  const body = await request.json();

  const schema = z.object({
    title: z.string(),
    introduction: z.string(),
    content: z.string(),
    bannerUrl: z.string().optional(),
    color: z.string().optional(),
    published: z.boolean().default(false),
    readingTime: z.number().default(10),
    key: z.string()
  }).safeParse(body);

  if (!schema.success) {
    return new Response(JSON.stringify({ message: "Invalid body" }), { status: 400 });
  }

  const { title, introduction, content, bannerUrl, color, published, readingTime, key } = schema.data;

  if (key != PRIVATE_AUTHORIZED_UID) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }

  await prisma.post.update({
    where: {
      slug
    },
    data: {
      title,
      introduction,
      content,
      bannerUrl,
      color,
      published,
      readingTime
    }
  });

  return new Response(JSON.stringify({ message: "Updated" }), { status: 200 });
}

export async function POST({ request }: RequestEvent): Promise<Response> {
  const body = await request.json();

  const schema = z.object({
    title: z.string(),
    introduction: z.string(),
    content: z.string(),
    slug: z.string(),
    bannerUrl: z.string().optional(),
    color: z.string().optional(),
    published: z.boolean().default(false),
    readingTime: z.number().default(10),
    key: z.string()
  }).safeParse(body);

  if (!schema.success) {
    return new Response(JSON.stringify({ message: "Invalid body" }), { status: 400 });
  }

  const { title, introduction, content, bannerUrl, slug, color, published, readingTime, key } = schema.data;

  if (key != PRIVATE_AUTHORIZED_UID) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }

  await prisma.post.create({
    data: {
      title,
      introduction,
      content,
      bannerUrl,
      color,
      published,
      readingTime,
      slug
    }
  });

  return new Response(JSON.stringify({ message: "Created" }), { status: 200 });
}