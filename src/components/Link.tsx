import { ComponentProps } from "react";
import NextLink from "next/link";

/**
 * Wrap Next.js Link to enable styling it with Emotion.
 */
const Link = ({ href, children, ...others }: ComponentProps<"a">) => (
  <NextLink href={href ?? "#"}>
    <a
      // Open external links at the new tabs.
      {...(!href?.startsWith("/") && { target: "_blank", rel: "noreferrer noopener" })}
      {...others}
    >
      {/* We separate `children` from `others` to avoid anchor-has-content lint error. */}
      {children}
    </a>
  </NextLink>
);

export default Link;
