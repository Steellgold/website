import { db } from "../../lib/database/Firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";

interface ArticleData {
  id: string;
  title: string;
  content: string;
  publishedDate: Timestamp;
  smallDescription: string;
  primaryTech: string;
  bannerUrl: string | null;
}

const articles: ArticleData[] = [];
const querySnapshot = await getDocs(collection(db, "articles"));
querySnapshot.forEach((doc) => {
  const data = doc.data();
  articles.push({
    id: doc.id,
    title: data.title,
    content: data.content,
    publishedDate: data.publishedDate,
    smallDescription: data.smallDescription,
    primaryTech: data.primaryTech,
    bannerUrl: data.bannerUrl,
  });
});

export function load() {
  return {
    articles: articles,
  };
}