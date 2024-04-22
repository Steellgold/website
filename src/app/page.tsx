import { ReactElement } from "react";
import { Header } from "./lib/header";
import { Projects } from "./lib/projects";
import { Birthday } from "@/lib/components/birthday";

const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <Birthday />

      <div className="justify-center mx-auto w-5/6 lg:w-2/4 mt-3">
        <Projects />
      </div>
    </>
  );
}

export default Home;