import { ReactElement } from "react";
import { BlackjackCard } from "./_components/blackjack-card";
import { BlackjackBoard } from "./_components/blackjack-board";

const Page = (): ReactElement => {
  return (
    <>
      <BlackjackBoard />
      
      <BlackjackCard suit="Hearts" rank="A" isHidden={false} />
      <BlackjackCard suit="Diamonds" rank="A" isHidden={false} />
      <BlackjackCard suit="Clubs" rank="A" isHidden={false} />
      <BlackjackCard suit="Spades" rank="A" isHidden={false} />
      
      <BlackjackCard suit="Hearts" rank="A" isHidden={true} />
    </>
  )
}

export default Page;