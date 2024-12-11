"use client";

import { useTheme } from "next-themes";
import { PostSchema } from "../types/post.type";
import { Component } from "./utils/component";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { dayJS } from "../utils/dayjs/day-js";
import { z } from "zod";

type BlogPostCardProps = {
  data: z.infer<typeof PostSchema>;
}

export const BlogPostCard: Component<BlogPostCardProps> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <Link href={`/blog/${data.slug}`} passHref>
      <Card style={{ boxShadow: theme == "dark" ? "inset 1px -1px 10.7px 0px #242424" : "" }}>
        <CardHeader>
          <CardTitle className="dark:text-[#f0f0f0]">{data.title}</CardTitle>
          <CardDescription>{data.excerpt}</CardDescription>
        </CardHeader>

        <CardContent className="relative h-40 md:h-72 mx-5">
          <Image
            src={data.banner || ""}
            alt={data.title}
            className="object-cover object-center rounded-lg"
            fill
          />
        </CardContent>

        <div className="my-5" />

        <CardFooter>
          <CardDescription>
            Published on {dayJS(data.createdAt).format("DD MMM YYYY")}
          </CardDescription>
        </CardFooter>
      </Card>
    </Link>
  )
}