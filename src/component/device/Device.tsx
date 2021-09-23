import React from 'react';

import { StatusBar } from 'component/device/StatusBar';
import styles from 'style/device/Device.scss';

/**
 * Component for the virtual 'device'.
 * ex. Wide screen -> Virtual 'tablet'
 * ex. Narrow screen -> Virtual 'phone'
 */
export const Device = () => (
    <div className={styles.device}>
        <StatusBar showTime={true} />
    </div>
);
