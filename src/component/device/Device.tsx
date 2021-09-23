import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { StatusBar } from 'component/device/StatusBar';
import { NavigationBar } from 'component/device/NavigationBar';
import styles from 'style/device/Device.scss';

/**
 * Component for the virtual 'device'.
 * ex. Wide screen -> Virtual 'tablet'
 * ex. Narrow screen -> Virtual 'phone'
 */
export const Device = () => (
    <BrowserRouter>
        <div className={styles.device}>
            <StatusBar showTime />
            <div className={styles.content} />
            <NavigationBar showNavigators />
        </div>
    </BrowserRouter>
);
