import React, { ReactNode, useState } from 'react';
import { Icon } from 'react-avant/lib/Icon';
import classNames from 'classnames';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons/faFingerprint';

import { lockSlice } from 'store/Lock';
import { useStoreSelector, useStoreDispatch } from 'store/Store';
import { Hour, Minute, Month, MonthDay, WeekDay } from 'component/device/Clock';
import styles from 'style/home/Locker.module.scss';

/**
 * Locker props.
 */
interface Props {
    children: ReactNode;
}

/**
 * Simple screen which looks like a smart phone lock screen.
 * When the user clicks the unlock button,
 * this renders the children instead of the lock screen.
 */
export const Locker = ({ children }: Props) => {
    const isLocked = useStoreSelector(state => state.lock.isLocked);
    const dispatch = useStoreDispatch();

    const [isDisappearing, setDisappearing] = useState(false);

    const onClickUnlockButton = () => {
        setDisappearing(true);

        setTimeout(() => {
            dispatch(lockSlice.actions.setLock({ isLocked: false }));
        }, 500);
    };

    return isLocked ? (
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
    ) : (
        <>{children}</>
    );
};
