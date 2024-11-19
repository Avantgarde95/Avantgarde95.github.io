import { Fragment, ReactNode } from "react";

import { localeNames } from "@/common/models/I18n";
import Header from "@/common/components/Header";
import PageMenu from "@/common/components/PageMenu";
import { generateElementID } from "@/common/utils/DOM";
import { CommonPageProps, CommonParamsProps } from "@/common/models/Props";
import About from "@/modules/home/About";
import Careers from "@/modules/home/Careers";
import Education from "@/modules/home/Education";
import Links from "@/modules/home/Links";

const sections: Record<string, { title: string; content: (props: CommonParamsProps) => ReactNode }> = {
  about: { title: "About", content: ({ params }) => <About params={params} /> },
  careers: { title: "Careers", content: ({ params }) => <Careers params={params} /> },
  education: { title: "Education", content: ({ params }) => <Education params={params} /> },
  links: { title: "Links", content: () => <Links /> },
};

const Page = async ({ params }: CommonPageProps) => (
  <div className="h-full w-full">
    <Header
      title={
        <>
          <span className="text-orange">Hunmin</span> <span className="text-green">Park</span>
        </>
      }
    />
    <PageMenu
      items={Object.entries(sections).map(([id, { title }]) => ({
        type: "link",
        label: title,
        url: `#${generateElementID(id)}`,
      }))}
    />
    {Object.entries(sections).map(([id, { title, content }]) => (
      <Fragment key={id}>
        <h3 id={generateElementID(id)} className="mx-0 my-4 p-0 font-mono text-xl text-yellow">
          {title}
        </h3>
        {content({ params })}
      </Fragment>
    ))}
  </div>
);

export async function generateStaticParams() {
  return localeNames.map(value => ({ locale: value }));
}

export default Page;
