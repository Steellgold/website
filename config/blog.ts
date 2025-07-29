export type BlogPost = {
  title: string;
  date: string;
  url: string;
  excerpt?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "🇫🇷 Comment utiliser GitHub : Les bases",
    date: "Feb 13, 2025",
    url: "comment-utiliser-github-les-bases",
    excerpt: "A comprehensive guide to GitHub"
  },
  {
    title: "Your instant PostgreSQL companion",
    date: "Dec 16, 2024",
    url: "your-instant-postgresql-companion",
    excerpt: "A comprehensive guide to PostgreSQL tools and utilities"
  },
  {
    title: "How i created a React Native app with Supabase",
    date: "Apr 22, 2024",
    url: "how-i-created-a-react-native-app-with-supabase",
    excerpt: "Step-by-step tutorial on building a mobile app with React Native and Supabase"
  },
  {
    title: "Supabase: The Key to developing SaaS Faster",
    date: "Aug 10, 2023",
    url: "supabase-the-key-to-developing-saas-faster",
    excerpt: "A comprehensive guide to Supabase"
  }
]; 