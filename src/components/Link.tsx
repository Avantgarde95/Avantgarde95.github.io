import { ComponentProps, forwardRef } from "react";
import NextLink from "next/link";

/**
 * Wrap Next.js Link to enable styling it with Emotion.
 */
const Link = forwardRef<HTMLAnchorElement, ComponentProps<"a">>(({ href, children, ...others }, ref) => (
  <NextLink href={href ?? "#"}>
    <a
      ref={ref}
      // Open external links at the new tabs.
      {...(!href?.startsWith("/") && { target: "_blank", rel: "noreferrer noopener" })}
      {...others}
    >
      {/* We separate `children` from `others` to avoid anchor-has-content lint error. */}
      {children}
    </a>
  </NextLink>
));

Link.displayName = "Link";

export default Link;
