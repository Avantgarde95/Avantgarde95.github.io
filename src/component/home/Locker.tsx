import React, { useState } from 'react';
import { Icon } from 'react-avant/lib/Icon';
import classNames from 'classnames';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons/faFingerprint';

import { Hour, Minute, Month, MonthDay, WeekDay } from 'component/device/Clock';
import styles from 'style/home/Locker.module.scss';

/**
 * Locker props.
 */
interface Props {
    onUnlock: () => void;
}

/**
 * Simple screen which looks like a smart phone lock screen.
 * It calls onUnlock() when the user clicks the fingerprint button.
 */
export const Locker = ({ onUnlock }: Props) => {
    const [isDisappearing, setDisappearing] = useState(false);

    const onClickUnlockButton = () => {
        setDisappearing(true);

        setTimeout(() => {
            onUnlock();
        }, 500);
    };

    return (
        <div className={classNames(styles.locker, { [styles.isDisappearing]: isDisappearing })}>
            <div className={styles.largeClock}>
                <Hour />:<Minute />
            </div>
            <div className={styles.smallClock}>
                <Month />/<MonthDay /> <WeekDay />
            </div>
            <button className={styles.unlockButton} type={'button'} title={'풀기 Unlock'} onClick={onClickUnlockButton}>
                <Icon definition={faFingerprint} />
            </button>
        </div>
    );
};
