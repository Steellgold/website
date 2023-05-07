import { PUBLIC_URL } from "$env/static/public";
import { restRequest } from "$lib/utils/request/request";
import type { Post } from "$lib/utils/types/Post";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PRIVATE_AUTHORIZED_EMAIL } from "$env/static/private";
import prisma from "$lib/database/prisma";

export const load = (async({ params, cookies, locals: { getSession } }) => {
  const { slug } = params;

  const session = await getSession();
  if (!session) throw redirect(307, "/user");
  if (session.user.email !== PRIVATE_AUTHORIZED_EMAIL) throw redirect(307, "/user");
  if (!slug) throw redirect(307, "/");

  const res = await restRequest<Post>("get", PUBLIC_URL + "/api/post", { query: { slug: slug } }, [], true);

  if (res.success) {
    const post = res.data;

    if (!cookies.get("views")) {
      cookies.set("views", slug, { path: "/", maxAge: 60 * 60 * 24 * 7 });
      await prisma.post.update({ where: { slug }, data: { views: { increment: 1 } } });
    }

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
        readingTime: post.readingTime
      }
    };
  } else {
    throw redirect(307, "/");
  }
}) as PageServerLoad;