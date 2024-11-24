import { ComponentProps } from "react";
import Link from "next/link";

const SmartLink = ({ href, ...others }: ComponentProps<typeof Link>) => {
  const newTab = typeof href === "string" && href.startsWith("http");

  return <Link target={newTab ? "_blank" : undefined} href={href} {...others} />;
};

export default SmartLink;
