import React from 'react';

import { useStoreDispatch, useStoreSelector } from 'store/Store';
import { lockSlice } from 'store/Lock';
import { Background } from 'component/home/Background';
import { Locker } from 'component/home/Locker';
import { AppGrid } from 'component/home/AppGrid';
import styles from 'style/home/Page.module.scss';

/**
 * 'Home' page.
 * It shows the grid of the app buttons which looks like a phone screen.
 * (Maximum length of a row: 5)
 */
const Page = () => {
    const isLocked = useStoreSelector(state => state.lock.isLocked);
    const dispatch = useStoreDispatch();

    const onUnlock = () => {
        dispatch(lockSlice.actions.setLock({ isLocked: false }));
    };

    return (
        <div className={styles.page}>
            <Background />
            <div className={styles.content}>{isLocked ? <Locker onUnlock={onUnlock} /> : <AppGrid />}</div>
        </div>
    );
};

export default Page;
