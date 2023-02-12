import { PUBLIC_URL } from "$env/static/public";
import { restRequest } from "$lib/utils/request/request";
import type { Post } from "$lib/utils/types/Post";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async({ params, fetch })  => {
  const { slug } = params;

  if (!slug) {
    throw redirect(307, "/");
  }

  const res = await restRequest<Post>("get", PUBLIC_URL + `/api/post`, {
    query: {
      slug: slug
    }
  });

  if (res.success) {
    const post = res.data;

    return {
      post: {
        title: post.title,
        publishedAt: post.createdAt,
        content: post.content,
        bannerUrl: post.bannerUrl
      }
    }
  } else {
    throw redirect(307, "/");
  }
}) as PageServerLoad;