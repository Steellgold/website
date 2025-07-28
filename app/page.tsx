import { BlogSection } from "@/components/sections/blog-section";
import { HeaderSection } from "@/components/sections/header-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ReactElement } from "react";

const Home = (): ReactElement => {
  return (
    <div className="flex flex-col gap-[55px]">
      <HeaderSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
    </div>
  );
}

export default Home;