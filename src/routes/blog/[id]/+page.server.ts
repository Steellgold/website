import { db } from "$lib/database/Firebase";
import type { ServerLoadEvent } from "@sveltejs/kit";
import { doc, getDoc } from "firebase/firestore";
import { redirect } from '@sveltejs/kit';

export async function load({ params }: ServerLoadEvent) {
  const articleId: string | undefined = params.id;
  if(!articleId) {
    throw redirect(307, "/blog");
  }

  const docReference = doc(db, "articles", articleId);
  const docSnap = await getDoc(docReference);
  
  if (docSnap.exists()) {
    return {
      article: docSnap.data(),
    };
  } else {
    throw redirect(307, "/blog");
  }
}