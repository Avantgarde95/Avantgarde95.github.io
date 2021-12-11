import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import { faWifi } from '@fortawesome/free-solid-svg-icons/faWifi';
import { faSignal } from '@fortawesome/free-solid-svg-icons/faSignal';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons/faBatteryFull';

import { AMPM, Hour, Minute } from 'component/device/Clock';
import styles from 'style/device/StatusBar.module.scss';

/**
 * Component which represents the bar at the top of the phone(tablet)'s screen.
 * ex. Wifi, battery, etc.
 */
export const StatusBar = () => (
    <div className={styles.statusBar}>
        <div className={styles.left}>
            <div className={styles.block}>Hunmin Park</div>
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
