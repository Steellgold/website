import { PUBLIC_URL } from "$env/static/public";
import { restRequest } from "$lib/utils/request/request";
import type { Post } from "@prisma/client";
import type { PageServerLoad } from "./$types";
import { PRIVATE_AUTHORIZED_EMAIL } from "$env/static/private";

export const load = (async({ locals: { getSession } }) => {
  const session = await getSession();

  let authorized = false;
  if (session) {
    if (session.user.email == PRIVATE_AUTHORIZED_EMAIL) {
      authorized = true;
    } else {
      authorized = false;
    }
  } else {
    authorized = false;
  }

  const res = await restRequest<Post[]>("get", PUBLIC_URL + "/api/posts" + (authorized ? "?withDrafts=true" : ""));
  if (!res.success) {
    console.error(res.data.message);
    return;
  }

  return {
    posts: res.data,
    isOwner: authorized
  };
}) as PageServerLoad;