import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { RoughNotation } from "react-rough-notation";
import { piano } from "../font";
import { Social_GitHub, Social_LinkedIn, Social_Malt, Social_XformerlyTwitter } from "../icons";
import { Skill } from "../skill";

export const HeaderSection = (): ReactElement => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-row items-center gap-3 sm:gap-4">
        <div className="flex-shrink-0 self-center sm:self-auto">
          <Image
            src="/me.webp"
            alt="BWR"
            width={74}
            height={74}
            className="hover:scale-105 transition-transform duration-200"
          />
        </div>

        <div className="flex flex-col text-left min-w-0">
          <span className="text-md sm:text-lg">Hello, I&apos;m</span>
          <h1 className={cn("text-4xl sm:text-5xl", piano.className)}>Gaëtan Huszovits</h1>
        </div>
      </div>
      
      <div className="mt-1 sm:mt-2">
        <span className="flex flex-wrap gap-1">
          Full-Stack Developer specializing in the{" "}
          <Skill name="TypeScript" minimized /> ecosystem, passionate about building{" "}
          <span>
            <RoughNotation type="highlight" color="#2537FF55" show iterations={2}>
              modern web applications
            </RoughNotation>
          </span>
          {" "}with performance and clarity in mind. I work mainly with{" "}
          <Skill name="Next" minimized />{" "}
          <Skill name="BetterAuth" minimized />{" "}
          <Skill name="Prisma" minimized />{" "}
          and <Skill name="Tailwind" minimized />
        </span>
      </div>

      <div className={cn(
        "flex flex-row gap-2 mt-0.5 *:bg-[#2d2d2d] *:hover:bg-[#242424]",
        "*:px-2.5 *:py-1 *:flex *:flex-row *:items-center *:gap-2 *:text-sm",
      )}>
        <Link
          href="https://www.linkedin.com/in/gaetanhus/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Social_LinkedIn width={14} height={14} fill="#fff" className="group-hover:fill-[#0077B5]" />
          <span className="group-hover:text-white">LinkedIn</span>
        </Link>

        <Link
          href="https://www.malt.fr/profile/gaetanhuszovits"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Social_Malt width={14} height={14} fill="#fff" className="group-hover:fill-[#FC5656]" />
          <span className="group-hover:text-white">Malt</span>
        </Link>

        <Link
          href="https://github.com/Steellgold"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Social_GitHub width={14} height={14} fill="#fff" />
          <span className="group-hover:text-white">GitHub</span>
        </Link>

        <Link
          href="https://x.com/Steellgold"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Social_XformerlyTwitter width={14} height={14} fill="#fff" />
          <span className="group-hover:text-white">X</span>
        </Link>
      </div>
    </div>
  )
}