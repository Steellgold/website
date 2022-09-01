import { db } from '$lib/database/Firebase';
import type { RequestEvent } from '@sveltejs/kit';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { z } from 'zod';
import dayjs from 'dayjs';

  // GET: Obtenir la liste des articles
  // POST: Ajouter un article
export async function POST({ request }: RequestEvent): Promise<Response> {
  const values = await request.json();

  const bodySchema = z.object({
    title: z.string().min(2),
    smallDescription: z.string(),
    primaryTech: z.string(),
    content: z.string(),
    bannerUrl: z.string(),
  });

  const bodyParsed = bodySchema.safeParse(values);

  if (!bodyParsed.success) {
    return new Response(bodyParsed.error.message, { status: 400 });
  }

  const docRef = await addDoc(collection(db, "articles"), {
    title: values.title,
    smallDescription: values.smallDescription,
    primaryTech: values.primaryTech,
    publishedDate: dayjs().format(),
    content: values.content,
    bannerUrl: values.bannerUrl,
  })

  return new Response('Article was been successfuly created', { status: 200 });
}

export async function GET({ request }: RequestEvent): Promise<Response> {
  const values = await request.json();
  const bodySchema = z.object({
    id: z.string(),
  });

  const docRef = doc(db, "articles", values.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return new Response(JSON.stringify(docSnap.data()), { status: 200 });
  } else {
    return new Response('Article not found', { status: 400 });
  }
}