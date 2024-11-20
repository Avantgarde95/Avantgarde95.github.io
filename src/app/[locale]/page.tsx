import { ReactNode } from "react";

import Header from "@/common/components/Header";
import { CommonParamsProps } from "@/common/models/Props";
import About from "@/modules/home/About";
import Careers from "@/modules/home/Careers";
import Education from "@/modules/home/Education";
import Links from "@/modules/home/Links";
import ScrolledSections, { SectionItems } from "@/common/components/ScrolledSections";

const sectionItems: SectionItems = {
  about: {
    title: "About",
    content: ({ params }) => <About params={params} />,
  },
  careers: {
    title: "Careers",
    content: ({ params }) => <Careers params={params} />,
  },
  education: {
    title: "Education",
    content: ({ params }) => <Education params={params} />,
  },
  links: {
    title: "Links",
    content: () => <Links />,
  },
};

const Page = async ({ params }: CommonParamsProps) => (
  <div className="h-full w-full">
    <Header
      title={
        <>
          <span className="text-orange">Hunmin</span> <span className="text-green">Park</span>
        </>
      }
    />
    <ScrolledSections params={params} items={sectionItems} />
  </div>
);

export default Page;
