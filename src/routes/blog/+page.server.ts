import { db } from "../../lib/database/Firebase";
import { collection, getDocs } from "firebase/firestore";

interface ArticleData {
  id: string;
  title: string;
  content: string;
  published_date: string;
  small_description: string;
  primary_tech: string;
  banner_url: string | null;
}

const articles: ArticleData[] = [];
const querySnapshot = await getDocs(collection(db, "articles"));
querySnapshot.forEach((doc) => {
  const data = doc.data();
  articles.push({
    id: doc.id,
    title: data.title,
    content: data.content,
    published_date: data.published_date,
    small_description: data.small_description,
    primary_tech: data.primary_tech,
    banner_url: data.banner_url,
  });
});

export function load() {
  return {
    articles: articles,
  };
}