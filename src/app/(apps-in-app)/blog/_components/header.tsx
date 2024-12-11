"use client";

import { useLang } from "@/lib/stores/lang.store";
import { ReactElement } from "react";

export const BlogHeaderComponent = (): ReactElement => {
  const { lang } = useLang();

  return (
    <>
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