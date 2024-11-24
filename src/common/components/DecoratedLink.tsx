import { ComponentProps } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

import SmartLink from "@/common/components/SmartLink";

const DecoratedLink = ({ children, className, ...others }: ComponentProps<typeof Link>) => (
  <SmartLink className={`text-blue hover:text-yellow ${className}`} {...others}>
    {children}
    <span>
      <MdArrowOutward className="mb-2 inline-block text-xs" />
    </span>
  </SmartLink>
);

export default DecoratedLink;
