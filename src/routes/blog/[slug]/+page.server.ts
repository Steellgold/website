import { prisma } from "$lib/database/prisma";
import { PUBLIC_URL } from "$env/static/public";
import { restRequest } from "$lib/utils/request/request";
import type { Post } from "$lib/utils/types/Post";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { z } from "zod";

export const load = (async({ params, cookies }) => {
  const { slug } = params;

  if (!slug) throw redirect(307, "/");

  const res = await prisma.post.findUnique({
    where: { slug },
    select: {
      title: true,
      createdAt: true,
      content: true,
      introduction: true,
      bannerUrl: true,
      views: true,
      likes_default: true,
      likes_happy: true,
      likes_explode: true,
      slug: true,
      color: true,
      readingTime: true
    }
  });

  const schema = z.object({
    title: z.string(),
    createdAt: z.date(),
    content: z.string(),
    introduction: z.string(),
    bannerUrl: z.string(),
    views: z.number(),
    likes_default: z.number(),
    likes_happy: z.number(),
    likes_explode: z.number(),
    slug: z.string(),
    color: z.string(),
    readingTime: z.number()
  }).safeParse(res);

  if (schema.success) {
    const post = schema.data;

    if (!cookies.get("views")) {
      cookies.set("views", slug, { path: "/", maxAge: 60 * 60 * 24 * 7 });
      await prisma.post.update({ where: { slug }, data: { views: { increment: 1 } } });
    }

    let alreadyLiked = false;
    if (cookies.get("liked-" + slug)) alreadyLiked = true;

    return {
      post: {
        title: post.title,
        publishedAt: post.createdAt,
        content: post.content,
        introduction: post.introduction,
        bannerUrl: post.bannerUrl,
        views: post.views + 1,
        likes: {
          default: post.likes_default,
          happy: post.likes_happy,
          explode: post.likes_explode
        },
        slug: post.slug,
        color: post.color,
        readingTime: post.readingTime,
        alreadyLiked: alreadyLiked ? 1 : 0,
      }
    };
  } else {
    throw redirect(307, "/");
  }
}) as PageServerLoad;