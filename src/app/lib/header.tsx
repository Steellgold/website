"use client";

import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";
import { Button, buttonVariants } from "@/lib/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/lib/components/ui/tooltip";
import { useLang } from "@/lib/stores/lang.store";
import { useInitializeViewMode, useViewMode } from "@/lib/stores/mode.store";
import { cn } from "@/lib/utils";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Cake, Cat, ExternalLink, Github, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

type SocialLink = {
  href: string;
  icon: ReactElement;
  title: string;
  showOnCv?: boolean;
  className?: string;
}

const SocialLinks: SocialLink[] = [ {
    href: "https://github.com/Steellgold",
    icon: <Github size={18} strokeWidth={2} />,
    title: "GitHub",
    className: "hover:text-white transition-all hover:rotate-12",
    showOnCv: true
  }, {
    href: "https://linkedin.com/in/gaetanhus",
    icon: <Linkedin size={18} strokeWidth={2} />,
    title: "LinkedIn",
    className: "hover:text-blue-600 transition-all hover:-rotate-12",
    showOnCv: true
  }, {
    href: "https://www.malt.fr/profile/gaetanhuszovits",
    icon: <ExternalLink size={18} strokeWidth={2} />,
    title: "Malt (Freelance)",
    className: "hover:text-[#fc5757] transition-all hover:rotate-12",
    showOnCv: true
  }, {
    href: "mailto:pro@gaetanhus.fr",
    icon: <Mail size={18} strokeWidth={2} />,
    title: "Email",
    className: "hover:text-red-600 transition-all hover:rotate-12",
    showOnCv: true
  }, {
    href: "https://twitter.com/Steellgold",
    icon: <Twitter size={18} strokeWidth={2} />,
    title: "Twitter",
    className: "hover:text-blue-600 transition-all hover:rotate-12",
    showOnCv: false
  }, {
    href: "https://instagram.com/steellgold",
    icon: <Instagram size={18} strokeWidth={2} />,
    title: "Instagram",
    className: "hover:text-pink-600 transition-all hover:-rotate-12",
    showOnCv: false
  }
]

export const Header = (): ReactElement => {
  const { viewMode } = useViewMode();
  useInitializeViewMode()
  const { lang } = useLang();

  return (
    <section>
      {viewMode == "normal" && (
        <div className="relative">
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

          <Link
            className={buttonVariants({ variant: "outline", size: "icon", className: "absolute bottom-0 right-0 mb-5 mr-5" })}
            href={"/#cats"}
            style={{ boxShadow: "inset 1px -1px 10.7px 0px #242424" }}
          >
            <Cat size={20} />
          </Link>
        </div>
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
          src={"/_static/images/me2.jpg"}
          width={128}
          height={128}
        />

        <div className="flex flex-col justify-center ml-auto sm:bg-[#161616] sm:rounded-lg sm:shadow-lg sm:overflow-hidden">
          <ul className="flex flex-row justify-end text-white gap-2 p-2">
            <div className="flex gap-2">
              <TooltipProvider delayDuration={100}>
                {SocialLinks.filter((link) => link.showOnCv === true).map((link) => (
                  <Tooltip key={link.href}>
                    <TooltipTrigger>
                      <Link href={link.href} passHref className={cn("block", link.className)}>
                        {link.icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      {link.title}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
              
            <div className={cn("flex gap-2", {
              "hidden": viewMode == "cv"
            })}>
              <TooltipProvider delayDuration={100}>
                {SocialLinks.filter((link) => link.showOnCv !== true).map((link) => (
                  <Tooltip key={link.href}>
                    <TooltipTrigger>
                      <Link href={link.href} passHref className={cn("block", link.className)}>
                        {link.icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      {link.title}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </ul>
        </div>
      </div>

      <div className="pt-3 text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
        <p className="text-1xl pt-1 text-left">
          {viewMode == "normal"
            ? lang == "en" ? "Hi, I'm" : "Salut, je suis"
            : lang == "en" ? "Hello, I'm" : "Bonjour, je suis"
          }
        </p>

        <h1 className="flex flex-row items-center gap-2">
          <span className="text-5xl font-bold">{viewMode == "normal" ? "Gaëtan" : "Gaëtan Huszovits"}</span>
          {viewMode == "cv" && <span className="hidden sm:flex text-[#f0f0f0] bg-[#333] px-2 py-1 rounded-md mt-2.5 text-xs gap-1 items-center">
            <MapPin className="h-3 w-3" /> Kingersheim, France
          </span>}
        </h1>
        
        <p className="text-1xl pt-1 text-left">
          {viewMode == "normal"
            ? <>{lang == "en" ? <>I&apos;m a full-stack developer, working with TypeScript.</>
              : <>Je suis un développeur full-stack, travaillant avec TypeScript.</>}</>
            
            : <>{lang == "en" ? <>I have {dayJS().diff("2004-10-14", "years")} years old and I am a full-stack developer with <span className="text-yellow-100">NextJS</span>, and <span className="text-yellow-100">TypeScript</span>.</>
              : <>J&apos;ai {dayJS().diff("2004-10-14", "years")} ans et je suis un développeur full-stack, avec React avec <span className="text-yellow-100">NextJS</span>, et <span className="text-yellow-100">TypeScript</span>.</>}</>
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