import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { Language } from 'store/Language';
import { strictEntries } from 'util/TypeUtils';
import { WrappedLink } from 'component/common/WrappedLink';
import { LanguageFilter } from 'component/common/LanguageFilter';
import styles from 'style/home/AppButton.module.scss';

/**
 * AppButton props.
 */
interface Props {
    nameMap: Record<Language, string>;
    path: string;
    icon: IconDefinition;
    color: string;
}

/**
 * Link for opening an 'app' or an website.
 * It looks like an app button on the phone.
 */
export const AppButton = ({ nameMap, path, icon, color }: Props) => (
    <>
        <WrappedLink
            href={path}
            title={Object.values(nameMap).join(' ')}
            className={styles.appButton}
            style={{ color }}
        >
            <Icon definition={icon} />
        </WrappedLink>
        {strictEntries(nameMap).map(([language, name]) => (
            <LanguageFilter key={language} language={language}>
                {name}
            </LanguageFilter>
        ))}
    </>
);
