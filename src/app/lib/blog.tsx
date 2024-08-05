"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { Separator } from "@/lib/components/ui/separator";
import { PostSchema } from "@/lib/types/post.type";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { NotNowText } from "./not-now";

export const Blog = (): ReactElement => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/blog/fetch");

      if (!response.ok) {
        console.error('Failed to fetch data');
        return;
      }

      const schema = PostSchema.safeParse(await response.json());
      if (!schema.success) return;
      setData(schema.data);
    };

    console.log("Fetching blog data...");
    fetchData();
  }, []);

  if (!data) return <></>;

  if (data.status !== "PUBLISHED") {
    const lockedUntil = data.metadata?.find((meta: { key: string; }) => meta.key === "lockedUntil")?.value;

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
                <NotNowText lockedUntil={lockedUntil} />
              </div>
            </CardContent>
          </Card>
        </>
      )
    }

    return <></>;
  }

  return (
    <>
      <Separator className="my-7 bg-[#1a1a1a] w-[90%] mx-auto" />
      <Link href={`/blog/${data.slug}`} passHref>
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
};
