import Header from "@/common/components/Header";
import { CommonParamsProps } from "@/common/models/Props";
import ScrolledSections from "@/common/components/ScrolledSections";
import Main from "@/modules/projects/components/Main";
import Contracts from "@/modules/projects/components/Contracts";
import Personal from "@/modules/projects/components/Personal";

const Page = async ({ params }: CommonParamsProps) => (
  <div className="w-full">
    <Header title="Projects" />
    <ScrolledSections
      sections={[
        {
          title: "Main",
          content: <Main params={params} />,
        },
        {
          title: "Contracts",
          content: <Contracts params={params} />,
        },
        {
          title: "Personal",
          content: <Personal params={params} />,
        },
      ]}
    />
  </div>
);

export default Page;
