"use client";

import { ReactElement } from "react";
import { useLanyard } from "react-use-lanyard";

export const DiscordPresence = (): ReactElement => {
  const { loading } = useLanyard({
    userId: "504392983244832780",
    socket: true
  })

  if (loading) return <></>
  return <></>
}