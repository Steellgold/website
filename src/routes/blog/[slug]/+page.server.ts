import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async({ params, fetch })  => {
  const { slug } = params;

  if (!slug) {
    throw redirect(307, "/");
  }

  const res = await fetch(`/api/post?slug=${slug}`);
  if (!res.ok) {
    throw redirect(307, "/");
  }

  const post = await res.json();

  return {
    post: {
      title: post.title,
      publishedAt: post.publishedAt,
      content: post.content,
      bannerUrl: post.bannerUrl
    }
  }
}) as PageServerLoad;