import { BlogPost } from "@/config/blog";
import { Component } from "@/type/component";
import Link from "next/link";

export const BlogPostItem: Component<BlogPost> = ({ title, date, url }) => {
  return (
    <Link
      href={`/blog/${url}`}
      className="flex flex-row justify-between items-center py-2 hover:text-gray-300 transition-colors"
      prefetch
      target="_blank"
    >
      <span className="text-white font-sans">{title}</span>
      <span className="text-white font-sans text-sm">{date}</span>
    </Link>
  );
}; 