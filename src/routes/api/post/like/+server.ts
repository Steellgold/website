import prisma from "$lib/database/Prisma";
import { z } from "zod";
import type { RequestEvent } from "./$types";

export async function POST({ request }: RequestEvent): Promise<Response> {
  if (!request.body) {
    return new Response("No body", { status: 400 });
  }

  const body = await request.json();
  const schema = z.object({
    slug: z.string().min(1).max(255),
    like: z.string().min(1).max(255)
  });

  const data = schema.safeParse(body);
  if (!data.success) {
    return new Response("Invalid body", { status: 400 });
  }

  const post = await prisma.post.findUnique({
    where: {
      slug: data.data.slug
    }
  });

  if (!post) {
    return new Response("No post", { status: 404 });
  }

  let likes = 0;
  switch (data.data.like) {
    case "default":
      likes = post.likes_default;
      break;
    case "happy":
      likes = post.likes_happy;
      break;
    case "explode":
      likes = post.likes_explode;
      break;
    default:
      return new Response("Invalid like", { status: 400 });
  }

  await prisma.post.update({
    where: {
      slug: data.data.slug
    },
    data: {
      [`likes_${data.data.like}`]: likes + 1
    }
  });

  console.log("likes_" + data.data.like);

  return new Response("The post has been updated", { status: 200 });
}