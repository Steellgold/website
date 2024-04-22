import { ReactElement } from "react";
import { Header } from "./lib/header";
import { Projects } from "./lib/projects";

const Home = (): ReactElement => {
  return (
    <>
      <Header />

      <div className="justify-center mx-auto w-5/6 lg:w-2/4">
        <Projects />
      </div>
    </>
  );
}

export default Home;