import React from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

/**
 * Icon props.
 */
interface Props {
    definition: IconDefinition;
    className?: string;
    size?: number;
}

/**
 * Component for using Font Awesome easily.
 */
export const Icon = ({ definition, className = '', size = 16 }: Props) => (
    <svg
        aria-hidden
        focusable={false}
        className={`${className} svg-inline--fa fa-${definition.iconName} fa-w-${size}`}
        role={'img'}
        xmlns={'http://www.w3.org/2000/svg'}
        viewBox={`0 0 ${definition.icon[0]} ${definition.icon[1]}`}
    >
        <path fill={'currentColor'} d={definition.icon[4] as string} />
    </svg>
);
