import { CdPlayer } from "@/components/cd/cd-player";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consorcium Digital",
  description: "Consorcium Digital, an AI-generated music piece for the end of our group's internship."
};

const CdPage = () => {
  return <CdPlayer />;
};

export default CdPage;