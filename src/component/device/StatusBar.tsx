import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import classNames from 'classnames';
import { faWifi } from '@fortawesome/free-solid-svg-icons/faWifi';
import { faSignal } from '@fortawesome/free-solid-svg-icons/faSignal';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons/faBatteryFull';

import { useStoreSelector } from 'store/Store';
import { LanguageFilter } from 'component/common/LanguageFilter';
import { AMPM, Hour, Minute } from 'component/device/Clock';
import styles from 'style/device/StatusBar.module.scss';

/**
 * Component which represents the bar at the top of the phone(tablet)'s screen.
 * ex. Wifi, battery, etc.
 */
export const StatusBar = () => {
    const isLocked = useStoreSelector(state => state.lock.isLocked);

    return (
        <div className={styles.statusBar}>
            <div className={styles.left}>
                <div className={classNames(styles.block, styles.wideDeviceName)}>
                    <LanguageFilter language={'Korean'}>마이패드</LanguageFilter>
                    <LanguageFilter language={'English'}>MyPad</LanguageFilter>
                </div>
                <div className={classNames(styles.block, styles.narrowDeviceName)}>
                    <LanguageFilter language={'Korean'}>마이폰</LanguageFilter>
                    <LanguageFilter language={'English'}>MyPhone</LanguageFilter>
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
                {!isLocked && (
                    <div className={styles.block}>
                        <Hour />:<Minute /> <AMPM />
                    </div>
                )}
            </div>
        </div>
    );
};
