import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { Separator } from "@/lib/components/ui/separator";
import { useLang } from "@/lib/hooks/lang.store";
import { PostSchema } from "@/lib/types/post.type";
import { cn } from "@/lib/utils";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { NotNowText } from "./not-now";

export const Blog = async(): Promise<ReactElement> => {
  const response = await fetch("https://simplist.blog/api/clvb16vqu0000syvk0rfb7pjx/last", {
    headers: {
      "x-api-key": process.env.SIMPLIST_API_KEY!
    } as HeadersInit,
    cache: "no-cache"
  });

  const schema = PostSchema.safeParse(await response.json());
  if (!schema.success) return <></>;
  const data = schema.data;

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
                <NotNowText lockedUntil={lockedUntil} />
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