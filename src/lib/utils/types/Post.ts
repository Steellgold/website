export interface Post {
  title: string;
  content: string;
  bannerUrl: string;
  createdAt: string;
  slug: string;
  published: boolean;
  views: number;
  likes: {
    like: boolean;
    happy: boolean;
    explode: boolean;
  },
  color: string;
}