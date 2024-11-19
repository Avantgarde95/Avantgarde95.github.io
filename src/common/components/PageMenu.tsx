"use client";

import Link from "next/link";
import { Fragment } from "react";

type Item = { label: string } & (
  | {
      type: "link";
      url: string;
    }
  | {
      type: "button";
      onClick: () => void;
    }
);

const itemClassName = "font-mono text-base hover:text-yellow";

interface PageMenuProps {
  items: Array<Item>;
}

const PageMenu = ({ items }: PageMenuProps) => (
  <div className="flex flex-col items-start justify-start gap-1 sm:flex-row sm:gap-4">
    {items.map(item => (
      <Fragment key={item.label}>
        {item.type === "link" ? (
          <Link href={item.url} className={itemClassName}>
            {`.${item.label.toLowerCase()}`}
          </Link>
        ) : (
          <button onClick={item.onClick} className={itemClassName}>{`<${item.label}/>`}</button>
        )}
      </Fragment>
    ))}
  </div>
);

export default PageMenu;
