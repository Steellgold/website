import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { Separator } from "@/lib/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { z } from "zod";

export const Blog = async(): Promise<ReactElement> => {
  const response = await fetch("https://simplist.blog/api/clvb16vqu0000syvk0rfb7pjx/last", {
    headers: {
      "x-api-key": process.env.SIMPLIST_API_KEY!,
      "Cache-Control": "no-cache",
      "If-None-Match": "",
    }
  });

  const data =  await response.json()

  const schema = z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    content: z.string(),
    banner: z.string(),
    status: z.enum(["DRAFT", "PUBLISHED"]),
  }).safeParse(data);

  if (!schema.success) {
    return <Card>{schema.error.message}</Card>;
  }

  if (schema.data.status === "DRAFT") return <></>;

  return (
    <>
      <Separator className="my-7 bg-[#1a1a1a] w-[90%] mx-auto" />
      <Link href={`/blog/${schema.data.slug}`} passHref prefetch>
        <Card className={cn(
          "bg-[#161616] border-[2px] border-[#1a1a1a]",
          "hover:border-[#2b2b2b] transition-colors duration-300 hover:bg-[#1a1a1a]"
        )}>
          <CardHeader>
            <CardTitle className="text-[#f0f0f0]">{schema.data.title}</CardTitle>
            <CardDescription>{schema.data.excerpt}</CardDescription>
          </CardHeader>

          <CardContent>
            <Image
              src={schema.data.banner}
              alt={schema.data.title}
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