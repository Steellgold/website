import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactElement } from "react";
import { RoughNotation } from "react-rough-notation";
import { oregano } from "../font";
import { Skill } from "../skill";

export const HeaderSection = (): ReactElement => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-row items-center gap-3 sm:gap-4">
        <div className="flex-shrink-0 self-center sm:self-auto">
          <Image
            src="/ME.svg"
            alt="BWR"
            width={74}
            height={74}
            className="hover:scale-105 transition-transform duration-200"
          />
        </div>

        <div className="flex flex-col text-left min-w-0">
          <span className="text-md sm:text-lg">Hello, I am</span>
          <h1 className={cn("text-4xl sm:text-5xl", oregano.className)}>Gaëtan Huszovits</h1>
        </div>
      </div>
      
      <div className="mt-1 sm:mt-2">
        <p className="flex flex-wrap gap-1 text-md sm:text-lg">
          <span>Full-Stack Developer, specializing in the</span>
          <Skill name="TypeScript" />
          <span>ecosystem.</span>
        </p>

        <div className="mt-2">
          <p className="text-md sm:text-lg">
            I design robust, high-performance, and well-structured web applications using
          </p>

          <p className="flex flex-wrap gap-1.5 text-md sm:text-lg">
            <RoughNotation type="highlight" color="#2537FF55" show iterations={2} order={3}>
              modern technologies
            </RoughNotation>
            such as
            <Skill name="Next" />
            <Skill name="BetterAuth" />
            <Skill name="Prisma" />
            or
            <Skill name="Tailwind" />
          </p>
        </div>
      </div>
    </div>
  )
}