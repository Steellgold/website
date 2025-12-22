import { DiscordActivities } from "@/components/discord-activities";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeaderSection } from "@/components/sections/header-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { getTranslations } from "next-intl/server";
import { ReactElement } from "react";

export const revalidate = 300;

const Home = async (): Promise<ReactElement> => {
  const t = await getTranslations("common");
  
  return (
    <div className="flex flex-col gap-18">
      <HeaderSection />
      <DiscordActivities />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />

      <footer className="flex flex-col items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <span className="text-sm text-white">© {new Date().getFullYear()} Gaëtan Huszovits</span>
        </div>

        <div className="flex flex-row items-center gap-2">
          <span className="text-sm text-white">
            {t("madeIn")}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Home;