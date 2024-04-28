import { WordleDialog } from "@/app/wordle/dialogs/wordle.dialog"
import Image from "next/image";
import { WordleParty } from "./party";
import { WordlePartyHistory } from "./lib/history";

const Wordle = () => {
  return (
    <>
      <WordleDialog />

      <div className="justify-center mx-auto w-full px-4 sm:px-0 sm:w-5/6 lg:w-3/6 mt-5 sm:mt-10 md:mt-20">
        <Image
          src="/_static/images/wordle_title.png"
          alt="Wordle"
          width={400}
          height={69.27}
          className="justify-center mx-auto"
        />

        <div className="mt-5">
          <WordleParty />
        </div>

        <div className="mt-5">
          <WordlePartyHistory />
        </div>
      </div>
    </>
  )
}

export default Wordle