"use client";

import { dayJS } from "../utils/dayjs/day-js";
import { useWindowSize } from "usehooks-ts";
import { ReactElement } from "react";
import Confetti from 'react-confetti'

export const Birthday = (): ReactElement => {
  const { width, height } = useWindowSize()
  const date= dayJS().format("MM-DD")

  if (date === "10-14") {
    return (
      <Confetti
        width={width}
        height={height}
        numberOfPieces={300}
      />
    )
  }

  return <></>;
}