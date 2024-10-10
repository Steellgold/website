"use client";

import { Component } from "@/lib/components/utils/component";
import { useLang } from "@/lib/stores/lang.store";
import { dayJS } from "@/lib/utils/dayjs/day-js";

type NotNowTextProps = {
  lockedUntil: string;
}

export const NotNowText: Component<NotNowTextProps> = ({ lockedUntil }) => {
  const { lang } = useLang();

  return (
    <p className="text-sm text-center">
      {lang == "en" ?
        <>A new post is here, but it won&apos;t be released until {dayJS(lockedUntil).format("D MMMM YYYY")}, be patient!</>
        : <>Un nouvel article est là, mais il ne sera pas publié avant le {dayJS(lockedUntil).format("D MMMM YYYY")}, soyez patient !</>}
    </p>
  );
}
