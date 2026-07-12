import { BlogSection } from "@/components/sections/blog-section";
import { FreelanceSection } from "@/components/sections/freelance-section";
import { GalleryTeaserSection } from "@/components/sections/gallery-teaser-section";
import { HeaderSection } from "@/components/sections/header-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { FC } from "react";

const Page: FC = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
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
