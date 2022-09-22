import { ComponentProps, forwardRef } from "react";
import Link from "next/link";

/**
 * Wrap Next.js Link to enable styling it with Emotion.
 */
const NextLink = forwardRef<HTMLAnchorElement, ComponentProps<"a">>(({ href = "/", children, ...others }, ref) => (
  <Link href={href}>
    <a
      ref={ref}
      // Open external links at the new tabs.
      {...(!href?.startsWith("/") && { target: "_blank", rel: "noreferrer noopener" })}
      {...others}
    >
      {/* We separate `children` from `others` to avoid anchor-has-content lint error. */}
      {children}
    </a>
  </Link>
));

NextLink.displayName = "NextLink";

export default NextLink;
