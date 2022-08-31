import { db } from "../../lib/database/Firebase";
import { collection, Timestamp, onSnapshot, query } from "firebase/firestore";

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

const q = query(collection(db, "articles"));
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const data = change.doc.data();
    if (change.type === "added") {
      articles.push({
        id: change.doc.id,
        title: data.title,
        content: data.content,
        publishedDate: data.publishedDate,
        smallDescription: data.smallDescription,
        primaryTech: data.primaryTech,
        bannerUrl: data.bannerUrl,
      });
    }
    if (change.type === "modified") {
      const index = articles.findIndex((article) => article.id === change.doc.id);
      articles[index] = {
        id: change.doc.id,
        title: data.title,
        content: data.content,
        publishedDate: data.publishedDate,
        smallDescription: data.smallDescription,
        primaryTech: data.primaryTech,
        bannerUrl: data.bannerUrl,
      };
    }
    if (change.type === "removed") {
      const index = articles.findIndex((article) => article.id === change.doc.id);
      articles.splice(index, 1);
    }
  });
});


export function load() {
  return {
    articles: articles,
  };
}