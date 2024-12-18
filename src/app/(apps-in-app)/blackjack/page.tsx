import { ReactElement } from "react";
import { BlackjackBoard } from "./_components/blackjack-board";

const Page = (): ReactElement => {
  return (
    <div className="text-white">
      <BlackjackBoard />
    </div>
  )
}

export default Page;