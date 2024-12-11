"use client";

import { confettiFireworks } from "@/lib/components/confetti";
import { useState, useEffect, ReactElement } from "react";

export const ConfettiReadComponent = (): ReactElement => {
  const [actionDone, setActionDone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !actionDone
      ) {
        setActionDone(true);
        performAction();
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [actionDone]);
  
  const performAction = () => {
    confettiFireworks();
  };

  return (<></>)
}