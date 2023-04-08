import { PUBLIC_URL } from "$env/static/public";
import { restRequest } from "$lib/utils/request/request";
import type { Post } from "$lib/utils/types/Post";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import prisma from "$lib/database/Prisma";

export const load = (async({ params, cookies })  => {
  const { slug } = params;

  if (!slug) {
    throw redirect(307, "/");
  }

  const res = await restRequest<Post>("get", PUBLIC_URL + `/api/post`, {
    query: {
      slug: slug
    }
  }, [], true);

  if (res.success) {
    const post = res.data;

    if (!cookies.get("views")) {
      cookies.set("views", slug, { path: "/", maxAge: 60 * 60 * 24 * 7 });
      await prisma.post.update({where: { slug }, data: { views: { increment: 1} }});
    }

    return {
      post: {
        title: post.title,
        publishedAt: post.createdAt,
        content: post.content,
        bannerUrl: post.bannerUrl,
        views: post.views + 1,
        likes: post.likes
      }
    }
  } else {
    throw redirect(307, "/");
  }
}) as PageServerLoad;