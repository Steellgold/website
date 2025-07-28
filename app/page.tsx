import { HeaderSection } from "@/components/sections/header-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ReactElement } from "react";

const Home = (): ReactElement => {
  return (
    <div className="flex flex-col gap-[55px]">
      <HeaderSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default Home;