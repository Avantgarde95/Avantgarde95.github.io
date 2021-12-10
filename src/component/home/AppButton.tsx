import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import Link from 'next/link';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import styles from 'style/home/AppButton.module.scss';

/**
 * AppButton props.
 */
interface Props {
    title: string;
    path: string;
    icon: IconDefinition;
    color: string;
}

/**
 * Link for opening an 'app' or an website.
 * It looks like an app button on the phone.
 */
export const AppButton = ({ title, path, icon, color }: Props) => {
    const openInNewTab = path.startsWith('http');

    return (
        <Link href={path}>
            <a
                title={title}
                className={styles.appButton}
                style={{ color }}
                target={openInNewTab ? '_blank' : undefined}
                rel={openInNewTab ? 'noreferrer noopener' : undefined}
            >
                <Icon definition={icon} />
            </a>
        </Link>
    );
};
