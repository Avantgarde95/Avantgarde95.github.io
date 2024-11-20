import { Fragment, ReactNode } from "react";

import { CommonParamsProps } from "@/common/models/Props";
import PageMenu from "@/common/components/PageMenu";
import { generateElementID } from "@/common/utils/DOM";

interface SectionContent {
  title: string;
  content: (props: CommonParamsProps) => ReactNode;
}

export type SectionItems = Record<string, SectionContent>;

interface ScrolledSectionsProps extends CommonParamsProps {
  items: SectionItems;
}

const ScrolledSections = async ({ items, params }: ScrolledSectionsProps) => (
  <>
    <PageMenu
      items={Object.entries(items).map(([id, { title }]) => ({
        type: "link",
        label: title,
        url: `#${generateElementID(id)}`,
      }))}
    />
    {Object.entries(items).map(([id, { title, content }]) => (
      <Fragment key={id}>
        <h3 id={generateElementID(id)} className="mx-0 my-4 p-0 font-mono text-xl text-yellow">
          {title}
        </h3>
        {content({ params })}
      </Fragment>
    ))}
  </>
);

export default ScrolledSections;
