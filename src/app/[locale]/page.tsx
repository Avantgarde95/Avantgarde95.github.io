import { Metadata } from "next";

import Header from "@/common/components/Header";
import { CommonParamsProps } from "@/common/models/Props";
import About from "@/modules/home/components/About";
import Careers from "@/modules/home/components/Careers";
import Education from "@/modules/home/components/Education";
import Links from "@/modules/home/components/Links";
import ScrolledSections from "@/common/components/ScrolledSections";

const Page = async ({ params }: CommonParamsProps) => (
  <div className="w-full">
    <Header
      title={
        <>
          <span className="text-orange">Hunmin</span> <span className="text-green">Park</span>
        </>
      }
    />
    <ScrolledSections
      sections={[
        {
          title: "About",
          content: <About params={params} />,
        },
        {
          title: "Careers",
          content: <Careers params={params} />,
        },
        {
          title: "Education",
          content: <Education params={params} />,
        },
        {
          title: "Links",
          content: <Links />,
        },
      ]}
    />
  </div>
);

export const metadata: Metadata = {
  title: "Welcome!",
};

export default Page;
