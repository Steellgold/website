import { BlogSection } from "@/components/sections/blog-section";
import { FreelanceSection } from "@/components/sections/freelance-section";
import { GalleryTeaserSection } from "@/components/sections/gallery-teaser-section";
import { HeaderSection } from "@/components/sections/header-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { SiteReveal } from "@/components/site-reveal";
import { getLocale } from "next-intl/server";
import { cookies } from "next/headers";
import { FC } from "react";

const REVEAL_CAMPAIGN_END = new Date("2026-08-12");
const REVEAL_IMAGES = {
  fr: "/reveal/old-site-fr.png",
  en: "/reveal/old-site-en.png",
};

const Page: FC = async () => {
  const cookieStore = await cookies();
  const locale = (await getLocale()) as "fr" | "en";
  const hasSeenReveal = cookieStore.get("site_reveal_seen")?.value === "1";
  const showReveal = !hasSeenReveal && new Date() < REVEAL_CAMPAIGN_END;

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {showReveal && <SiteReveal src={REVEAL_IMAGES[locale] ?? REVEAL_IMAGES.en} />}
      <HeaderSection />
      <TechnologiesSection />
      <ProjectsSection />
      <BlogSection />
      <FreelanceSection />
      <GalleryTeaserSection />
    </main>
  );
};

export default Page;