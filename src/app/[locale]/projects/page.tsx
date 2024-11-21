import Header from "@/common/components/Header";
import { CommonParamsProps } from "@/common/models/Props";
import ScrolledSections, { SectionItems } from "@/common/components/ScrolledSections";
import Main from "@/modules/projects/components/Main";
import Contracts from "@/modules/projects/components/Contracts";
import Personal from "@/modules/projects/components/Personal";

const sectionItems: SectionItems = {
  main: {
    title: "Main",
    content: ({ params }) => <Main params={params} />,
  },
  contracts: {
    title: "Contracts",
    content: ({ params }) => <Contracts params={params} />,
  },
  personal: {
    title: "Personal",
    content: ({ params }) => <Personal params={params} />,
  },
};

const Page = async ({ params }: CommonParamsProps) => (
  <div className="h-full w-full">
    <Header title="Projects" />
    <ScrolledSections params={params} items={sectionItems} />
  </div>
);

export default Page;
