import Header from "@/common/components/Header";
import { CommonParamsProps } from "@/common/models/Props";

const Page = async ({ params }: CommonParamsProps) => (
  <div className="h-full w-full">
    <Header title="Projects" />
  </div>
);

export default Page;