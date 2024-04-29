import { Component } from "@/lib/components/utils/component";
import { PropsWithChildren } from "react";
import { WordleDialog } from "../../dialogs/wordle.dialog";
import Image from "next/image";

type LayoutProps = {
  imageSrc?: string;
  imageAlt?: string;
}

export const WordleLayout: Component<PropsWithChildren & LayoutProps> = ({ children, imageSrc, imageAlt }) => {
  return (
    <>
      <WordleDialog />

      <div className="justify-center mx-auto w-full px-4 sm:px-0 sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-6/12 mt-5 sm:mt-10 md:mt-20">
        <Image
          src={imageSrc ?? "/_static/images/wordle_title.png"}
          alt={imageAlt ?? "Wordle"}
          width={400}
          height={69.27}
          className="justify-center mx-auto"
        />

        <div className="mt-5">
          {children}
        </div>
      </div>
    </>
  )
}