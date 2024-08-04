"use client";

import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";
import { useLang } from "@/lib/hooks/lang.store";
import { useViewMode } from "@/lib/hooks/mode.store";
import { cn } from "@/lib/utils";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Cake, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

export const Header = (): ReactElement => {
  const { viewMode } = useViewMode();
  const { lang } = useLang();

  return (
    <section>
      {viewMode == "normal" && (
        <Image
          src="/_static/images/MY_CATS.jpg"
          alt="MY BEAUTIFUL CATS IS SO CUTEEEEEEEEEEEEEEEEEEEEE AMAZING <3 <3 <3 alt text"
          className={cn(
            "w-full object-cover block object-center border-black md:border-[10px] md:rounded-3xl",
            "h-[300px] lg:h-[500px] xl:h-[550px]"
          )}
          quality={100}
          width={3000}
          height={1810}
        />
      )}

      {viewMode == "cv" && <div className="w-full h-[100px] lg:h-[100px] xl:h-[100px]" />}

      <div className="shrink-0 flex items-center justify-start mx-auto w-5/6 lg:w-2/4">
        <Image
          alt="profile"
          className={cn(
            "-mt-16 h-32 w-32 rounded-lg transform transition-all hover:scale-110", {
              "border-black border-[5px] hover:border-[3.5px]": viewMode == "normal",
            }
          )}
          src={viewMode == "normal" ? "/_static/images/me.jpeg" : "/_static/images/me_cv.jpg"}
          width={128}
          height={128}
        />

        <div className="flex flex-col justify-center ml-auto sm:bg-[#161616] sm:rounded-lg sm:shadow-lg sm:overflow-hidden">
          <ul className="flex flex-row justify-end text-white gap-2 p-2">
            <div className="flex gap-2">
              <a href="https://github.com/Steellgold" className="block hover:text-white transition-all hover:rotate-12">
                <Github size={18} strokeWidth={2} />
              </a>

              <a href="https://linkedin.com/in/gaetanhus" className="block hover:text-blue-600 transition-all hover:-rotate-12">
                <Linkedin size={18} strokeWidth={2} />
              </a>
            </div>
              
            <div className="flex gap-2">
              <a href="https://instagram.com/steellgold" className="block hover:text-pink-600 transition-all hover:rotate-12">
                <Instagram size={18} strokeWidth={2} />
              </a>
              
              <a href="https://twitter.com/Steellgold" className="block hover:text-blue-600 transition-all hover:-rotate-12">
                <Twitter size={18} strokeWidth={2} />
              </a>
            </div>
          </ul>
        </div>
      </div>

      <div className="pt-3 text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
        <p className="text-1xl pt-1 text-left">
          {viewMode == "normal" ? "Hello, I'm" : "Hi, I'm"}
        </p>

        <h1 className="text-5xl font-bold text-left">
          {viewMode == "normal" ? "Gaëtan" : "Gaëtan Huszovits"}
        </h1>
        
        <p className="text-1xl pt-1 text-left">
          {viewMode == "normal"
            ? <>{lang == "en" ? <>I&apos;m a full-stack developer, working with TypeScript.</>
              : <>Je suis un développeur full-stack, travaillant avec TypeScript.</>}</>

            : <>{lang == "en" ? <>I have {dayJS().diff("2004-10-14", "years")} years old and I am a full-stack developer on TypeScript.</>
              : <>J&apos;ai {dayJS().diff("2004-10-14", "years")} ans et je suis un développeur full-stack sur TypeScript.</>}</>
          }
        </p>

        {dayJS().format("MM-DD") === "10-14" && viewMode == "normal" && (
          <Alert className="mt-3">
            <Cake className="h-4 w-4" />
            {lang == "en" ? <>
              <AlertTitle>It&apos;s my birthday, i&apos;m {dayJS().diff("2004-10-14", "years")} years old!</AlertTitle>
              <AlertDescription>Confetti is falling from the sky!</AlertDescription>
            </> : <>
              <AlertTitle>C&apos;est mon anniversaire, j&apos;ai {dayJS().diff("2004-10-14", "years")} ans!</AlertTitle>
              <AlertDescription>Des confettis tombent du ciel!</AlertDescription>
            </>}
          </Alert>
        )}
      </div>
    </section>
  )
}