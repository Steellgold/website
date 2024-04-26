import { Component } from "@/lib/components/utils/component";
import { PropsWithChildren } from "react";

const Layout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <body className="bg-[#1A1A1A]">
      {children}
    </body>
  );
}

export default Layout;