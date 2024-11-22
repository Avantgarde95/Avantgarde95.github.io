import { Metadata } from "next";

import Header from "@/common/components/Header";
import { CommonParamsProps } from "@/common/models/Props";

const Page = async ({ params }: CommonParamsProps) => (
  <div className="w-full">
    <Header title="Blog" />
  </div>
);

export const metadata: Metadata = {
  title: "Blog",
};

export default Page;
