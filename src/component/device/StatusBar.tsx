import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import { faWifi } from '@fortawesome/free-solid-svg-icons/faWifi';
import { faSignal } from '@fortawesome/free-solid-svg-icons/faSignal';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons/faBatteryFull';

import { Language } from 'store/Language';
import { useStoreSelector } from 'store/Store';
import { AMPM, Hour, Minute } from 'component/device/Clock';
import styles from 'style/device/StatusBar.module.scss';
import classNames from 'classnames';

const wideNameMap: Record<Language, string> = {
    Korean: '마이패드',
    English: 'MyPad',
};

const narrowNameMap: Record<Language, string> = {
    Korean: '마이폰',
    English: 'MyPhone',
};

/**
 * Component which represents the bar at the top of the phone(tablet)'s screen.
 * ex. Wifi, battery, etc.
 */
export const StatusBar = () => {
    const currentLanguage = useStoreSelector(state => state.language.currentLanguage);

    return (
        <div className={styles.statusBar}>
            <div className={styles.left}>
                <div className={classNames(styles.block, styles.wideDeviceName)}>{wideNameMap[currentLanguage]}</div>
                <div className={classNames(styles.block, styles.narrowDeviceName)}>
                    {narrowNameMap[currentLanguage]}
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.block}>
                    <Icon definition={faWifi} />
                </div>
                <div className={styles.block}>
                    <Icon definition={faSignal} />
                </div>
                <div className={styles.block}>
                    <Icon definition={faBatteryFull} />
                </div>
                <div className={styles.block}>
                    <Hour />:<Minute /> <AMPM />
                </div>
            </div>
        </div>
    );
};
