"use client";

import { Fragment, ReactNode, useRef } from "react";
import { scrollIntoView } from "seamless-scroll-polyfill";

import PageMenu from "@/common/components/PageMenu";

interface Section {
  title: string;
  content: ReactNode;
}

interface ScrolledSectionsProps {
  sections: Array<Section>;
}

const ScrolledSections = ({ sections }: ScrolledSectionsProps) => {
  const titleRefMap = useRef<Record<string, HTMLHeadingElement>>({});

  return (
    <>
      <PageMenu
        items={sections.map(({ title }) => ({
          type: "button",
          label: title,
          onClick: () => {
            scrollIntoView(titleRefMap.current[title], { behavior: "smooth" });
          },
        }))}
      />
      {sections.map(({ title, content }) => (
        <Fragment key={title}>
          <h3
            ref={element => {
              if (element !== null) {
                titleRefMap.current[title] = element;
              }
            }}
            className="mx-0 my-4 p-0 font-mono text-xl text-yellow"
          >
            {title}
          </h3>
          {content}
        </Fragment>
      ))}
    </>
  );
};

export default ScrolledSections;
