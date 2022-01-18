import React, { HTMLProps, ReactNode } from 'react';
import Link from 'next/link';

/**
 * WrappedLink props.
 * (Similar to <a/>, but href and children are non-optional.)
 */
type Props = HTMLProps<HTMLAnchorElement> & {
    href: string;
    children: ReactNode;
};

/**
 * Simple util component which wraps <a/> with <Link/> provided by Next.
 * It opens the link in the new tab if the link is the external link. (i.e Starts with 'http')
 */
export const AutoLink = ({ href, children, target, rel, ...others }: Props) => {
    const openInNewTab = href.startsWith('http');
    const defaultTarget = openInNewTab ? '_blank' : undefined;
    const defaultRel = openInNewTab ? 'noreferrer noopener' : undefined;

    return (
        <Link href={href}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <a {...others} target={target ?? defaultTarget} rel={rel ?? defaultRel}>
                {children}
            </a>
        </Link>
    );
};
