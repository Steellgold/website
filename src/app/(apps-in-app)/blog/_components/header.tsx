"use client";

import { Button } from "@/lib/components/ui/button";
import { useLang } from "@/lib/stores/lang.store";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";
import { BackToBlogButton } from "./back-blog";

export const BlogHeaderComponent = (): ReactElement => {
  const { lang } = useLang();

  return (
    <>
      <BackToBlogButton
        onlyButton
      />

      <header className="text-center mt-10">
        <h1 className="text-4xl font-bold">{lang == "en" ? "Blog" : "Blog"}</h1>
        <p className="mt-3">
          {lang == "en"
            ? "Here you will find somes articles about my projects or Supabase-related stuff."
            : "Ici vous trouverez des articles sur mes projets ou des choses liées à Supabase."}
        </p>
      </header>
    </>
  );
};