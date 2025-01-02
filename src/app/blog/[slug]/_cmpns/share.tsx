"use client";

import { Component } from "@/lib/components/utils/component";
import { useLang } from "@/lib/hooks/use-lang";
import { useViewMode } from "@/lib/stores/mode.store";
import { Facebook, Linkedin, Twitter } from "lucide-react";

type ShareThisArticleProps = {
  slug: string;
  title: string;
}

const TEXT_LANGS: Record<string, string> = {
  fr: `Je viens de lire cet article sur [link].fr, "[title]" vous devriez le lire aussi à cet adresse: https://[url].fr/blog/[slug]`,
  en: `I just read this article on [link].fr, "[title]" you should read it too at this address: https://[url].fr/blog/[slug]`
}

export const ShareThisArticle: Component<ShareThisArticleProps> = ({ slug, title }) => {
  const { viewMode } = useViewMode();
  const lang = useLang();

  return (
    <div className="bg-primary-foreground bg-opacity-50 flex flex-col gap-1 p-2 border border-[#f0f0f0] rounded-lg mt-4 w-[50%] sm:w-[20%] items-center">
      <span className="text-xs">
        {lang == "en" ? "Share this article" : "Partager cet article"}
      </span>

      <div className="flex flex-row items-center gap-2">
        <Twitter className="w-4 h-4 cursor-pointer" onClick={() => {
          window.open(
            `https://twitter.com/intent/tweet?text=${TEXT_LANGS[lang]
              .replace("[link]", viewMode == "cv" ? "gaetanhus" : "steellgold")
              .replace("[title]", title)
              .replace("[url]", viewMode == "cv" ? "gaetanhus" : "steellgold")
              .replace("[slug]", slug)
            }`, "_blank")
        }} />

        <Linkedin className="w-4 h-4 cursor-pointer" onClick={() => {
          window.open(
            `https://www.linkedin.com/shareArticle?mini=true&url=${TEXT_LANGS[lang]
            .replace("[link]", viewMode == "cv" ? "gaetanhus" : "steellgold")
            .replace("[title]", title)
            .replace("[url]", viewMode == "cv" ? "gaetanhus" : "steellgold")
            .replace("[slug]", slug)
          }`, "_blank")
        }} />

        <Facebook className="w-4 h-4 cursor-pointer" onClick={() => {
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${TEXT_LANGS[lang]
            .replace("[link]", viewMode == "cv" ? "gaetanhus" : "steellgold")
            .replace("[title]", title)
            .replace("[url]", viewMode == "cv" ? "gaetanhus" : "steellgold")
            .replace("[slug]", slug)
          }`, "_blank")
        }} />
      </div>
    </div>
  )
}