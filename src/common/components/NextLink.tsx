import { ComponentProps, forwardRef } from "react";
import Link from "next/link";

type NextLinkProps = Omit<ComponentProps<typeof Link>, "href"> & { href?: string };

/**
 * Wrap Next.js Link to enable styling it with Emotion.
 */
const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(({ href = "/", children, ...others }, ref) => (
  <Link
    ref={ref}
    href={href}
    // Open external links at the new tabs.
    {...(!isInternalLink(href) && { target: "_blank", rel: "noreferrer noopener" })}
    {...others}
  >
    {/* We separate `children` from `others` to avoid anchor-has-content lint error. */}
    {children}
  </Link>
));

NextLink.displayName = "NextLink";

function isInternalLink(href: string) {
  return href.startsWith("/");
}

export default NextLink;
