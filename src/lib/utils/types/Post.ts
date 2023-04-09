export interface Post {
  title: string;
  content: string;
  bannerUrl: string;
  createdAt: string;
  slug: string;
  published: boolean;
  views: number;
  likes_default: number;
  likes_happy: number;
  likes_explode: number;
  color: string;
  readingTime: number;
}