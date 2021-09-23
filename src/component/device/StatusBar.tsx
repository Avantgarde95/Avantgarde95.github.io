import React from 'react';
import { faWifi } from '@fortawesome/free-solid-svg-icons/faWifi';
import { faSignal } from '@fortawesome/free-solid-svg-icons/faSignal';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons/faBatteryFull';

import { Icon } from 'component/common/Icon';
import { AMPM, Hour, Minute, ClockProvider } from 'component/device/Clock';
import styles from 'style/device/StatusBar.scss';

/**
 * StatusBar props.
 */
interface StatusBarProps {
    showTime: boolean;
}

/**
 * Component which represents the bar at the top of the phone(tablet)'s screen.
 * ex. Wifi, battery, etc.
 */
export const StatusBar = ({ showTime }: StatusBarProps) => (
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
            {showTime && (
                <div className={styles.block}>
                    <ClockProvider>
                        <Hour />:<Minute /> <AMPM />
                    </ClockProvider>
                </div>
            )}
        </div>
    </div>
);
