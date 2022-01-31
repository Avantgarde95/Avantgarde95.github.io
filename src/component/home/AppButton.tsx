import React from 'react';
import { Icon } from 'react-avant/lib/Icon';

import { VirtualApp } from 'model/home/App';
import { NextLink } from 'component/common/NextLink';
import { LanguagePicker } from 'component/common/Language';
import styles from 'style/home/AppButton.module.scss';

/**
 * AppButton props.
 */
interface Props {
    app: VirtualApp;
}

/**
 * Link for opening an 'app' or an website.
 * It looks like an app button on the phone.
 */
export const AppButton = ({ app }: Props) => (
    <>
        <NextLink
            href={app.path}
            title={Object.values(app.nameMap).join(' ')}
            className={styles.appButton}
            style={{ color: app.color }}
        >
            <Icon definition={app.icon} />
        </NextLink>
        <LanguagePicker languageMap={app.nameMap} />
    </>
);
