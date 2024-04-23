import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";
import { cn } from "@/lib/utils";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Cake } from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

export const Header = (): ReactElement => {
  return (
    <section>
      <Image
        src="/_static/images/banner_kitty.png"
        alt="Kitty's Banner"
        className={cn(
          "h-[20rem] lg:h-[30rem]",
          "w-full object-cover block object-center border-black border-[10px] "
        )}
        quality={100}
        width={1920}
        height={405}
      />

      <div className="shrink-0 flex items-center justify-start mx-auto w-5/6 lg:w-2/4">
        <Image
          alt="profile"
          className={cn(
            "-mt-16 h-32 w-32 rounded-lg border-black border-[5px] transform transition-all hover:scale-110 hover:rotate-12"
          )}
          src="/_static/images/me.jpeg"
          width={128}
          height={128}
        />
      </div>

      <div className="pt-9 text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
        <p className="text-1xl pt-1 text-left">Hello, I&apos;m</p>
        <h1 className="text-5xl font-bold text-left">Gaëtan</h1>
        <p className="text-1xl pt-1 text-left">I&apos;m a back-end developer, working with TypeScript.</p>

        {dayJS().format("MM-DD") === "10-14" && (
          <Alert className="mt-3">
            <Cake className="h-4 w-4" />
            <AlertTitle>It&apos;s my birthday, i&apos;m {dayJS().diff("2004-10-14", "years")} years old!</AlertTitle>
            <AlertDescription>Confetti is falling from the sky!</AlertDescription>
          </Alert>
        )}
      </div>
    </section>
  )
}