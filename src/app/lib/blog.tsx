"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { Separator } from "@/lib/components/ui/separator";
import { PostSchema } from "@/lib/types/post.type";
import { cn } from "@/lib/utils";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { z } from "zod";

export const Blog = (): ReactElement => {
  const [data, setData] = useState<z.infer<typeof PostSchema> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch("/api/last-post?nocache=" + Math.random().toString(36).substring(7));
      const data =  await response.json()
      const schema = PostSchema.safeParse(data);

      if (!schema.success) {
        setData(null);
        setError("Failed to fetch data");
        return;
      }

      if (!schema.data) {
        setData(null);
        setError("No published posts found");
        return;
      }

      setData(schema.data);
    }

    fetchData();
  }, []);

  if (error) return <></>
  if (!data) return <></>
  if (data.status !== "PUBLISHED") {
    const lockedUntil = data.metadata?.find((meta) => meta.key === "lockedUntil")?.value;

    if (lockedUntil) {
      return (
        <>
          <Separator className="my-7 bg-[#1a1a1a] w-[90%] mx-auto" />

          <Card className={cn(
            "bg-[#161616] border-[2px] border-[#1a1a1a]",
            "hover:border-[#2b2b2b] transition-colors duration-300 hover:bg-[#1a1a1a]"
          )}>
            <CardContent className="h-60 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-white">
                <Lock size={24} />
                <p className="text-sm text-center">
                  A new post is here, but it won&apos;t be released until {dayJS(lockedUntil).format("D MMMM YYYY")}, be patient!
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )
    };

    return <></>;
  }

  return (
    <>
      <Separator className="my-7 bg-[#1a1a1a] w-[90%] mx-auto" />
      <Link href={`/blog/${data.slug}`} passHref prefetch={data.status === "PUBLISHED"}>
        <Card className={cn(
          "bg-[#161616] border-[2px] border-[#1a1a1a]",
          "hover:border-[#2b2b2b] transition-colors duration-300 hover:bg-[#1a1a1a]"
        )}>
          <CardHeader>
            <CardTitle className="text-[#f0f0f0]">{data.title}</CardTitle>
            <CardDescription>{data.excerpt}</CardDescription>
          </CardHeader>

          <CardContent>
            <Image
              src={data.banner || ""}
              alt={data.title}
              className="object-cover object-center rounded-lg"
              width={1920}
              height={1080}
            />
          </CardContent>
        </Card>
      </Link>
    </>
  );
}