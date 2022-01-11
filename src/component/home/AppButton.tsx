import React from 'react';
import { Icon } from 'react-avant/lib/Icon';

import { VirtualApp } from 'component/home/App';
import { WrappedLink } from 'component/common/WrappedLink';
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
        <WrappedLink
            href={app.path}
            title={Object.values(app.nameMap).join(' ')}
            className={styles.appButton}
            style={{ color: app.color }}
        >
            <Icon definition={app.icon} />
        </WrappedLink>
        <LanguagePicker languageMap={app.nameMap} />
    </>
);
