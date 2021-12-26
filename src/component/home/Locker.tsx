import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons/faFingerprint';

import { Hour, Minute, Month, MonthDay, WeekDay } from 'component/device/Clock';
import styles from 'style/home/Locker.module.scss';

/**
 * Locker props.
 */
interface Props {
    onUnlock: () => void;
}

export const Locker = ({ onUnlock }: Props) => (
    <div className={styles.locker}>
        <div className={styles.largeClock}>
            <Hour />:<Minute />
        </div>
        <div className={styles.smallClock}>
            <Month />/<MonthDay /> <WeekDay />
        </div>
        <button className={styles.unlockButton} type={'button'} title={'풀기 Unlock'} onClick={onUnlock}>
            <Icon definition={faFingerprint} />
        </button>
    </div>
);
