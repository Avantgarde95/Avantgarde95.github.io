import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useTime } from 'store/Time';
import { StatusBar } from 'component/device/StatusBar';
import { NavigationBar } from 'component/device/NavigationBar';
import styles from 'style/device/Device.scss';

/**
 * Component for the virtual 'device'.
 * ex. Wide screen -> Virtual 'tablet'
 * ex. Narrow screen -> Virtual 'phone'
 */
export const Device = () => {
    const { updateTime } = useTime();

    useEffect(() => {
        const clock = setInterval(() => {
            updateTime();
        }, 10000);

        return clearInterval(clock);
    }, [updateTime]);

    return (
        <BrowserRouter>
            <div className={styles.device}>
                <StatusBar showTime />
                <div className={styles.content} />
                <NavigationBar showNavigators />
            </div>
        </BrowserRouter>
    );
};
