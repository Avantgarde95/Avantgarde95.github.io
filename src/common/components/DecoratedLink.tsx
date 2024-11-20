import { ComponentProps } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const DecoratedLink = ({ children, className, ...others }: ComponentProps<typeof Link>) => (
  <Link className={`text-blue hover:text-yellow ${className}`} {...others}>
    {children}
    <span>
      <MdArrowOutward className="mb-2 inline-block text-xs" />
    </span>
  </Link>
);

export default DecoratedLink;
