"use client";

import { PostsSchema } from "@/lib/types/post.type";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/hooks/use-lang";

export const Blog = (): ReactElement => {
  const [data, setData] = useState<z.infer<typeof PostsSchema>>([]);
  const [loading, setLoading] = useState(true);
  
  const lang = useLang();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetch("/api/blog");

      if (!response.ok) {
        console.error("Failed to fetch posts from Simplist API");
        return;
      }

      const schema = PostsSchema.safeParse(await response.json());
      if (!schema.success) return;
      setLoading(false);
      setData(schema.data);
    };

    console.log("Fetching blog data...");
    fetchData();
  }, []);

  if (!data) return <></>;

  if (loading) return (
    <div className="my-7" />
  )

  return (
    <div className="m-3">
      <div className="my-7" />

      <div className="w-full flex flex-col">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-[#333] dark:text-[#f0f0f0] text-left text-2xl font-bold">Blog</h1>
          <p className="text-[#333] dark:text-[#f0f0f0] text-left text-sm">
            {lang == "fr"
              ? "Voici les articles que j'ai écrits au fil du temps, je parle de tout et de rien, mais surtout de Supabase et de Next.js."
              : "Here are the articles I've written over time, I talk about everything and nothing, but mostly about Supabase and Next.js."}
          </p>
        </div>

        <div className="my-3" />

        <div className="w-full flex flex-col gap-3">
          {data.map((post) => (
            <Link
              className={cn(
                "flex flex-row justify-between items-center border-b leading-3 py-2",
                "border-[#e6e4e4] hover:border-[#eeeded]",
                "dark:border-[#727272]/10 dark:hover:border-[#fff]/10"
              )}
              href={`/blog/${post.slug}`} key={post.id}>
              <span>{post.title}</span>
              <span>{dayJS(post.createdAt).format("MMM DD, YYYY")}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
