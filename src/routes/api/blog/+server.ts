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