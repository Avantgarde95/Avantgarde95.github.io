import React from 'react';
import { ReactNode } from 'react';
import { faWifi } from '@fortawesome/free-solid-svg-icons/faWifi';
import { faSignal } from '@fortawesome/free-solid-svg-icons/faSignal';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons/faBatteryFull';

import { Icon } from 'component/common/Icon';
import { AMPM, Hour, Minute, ClockProvider } from 'component/device/Clock';
import styles from 'style/device/StatusBar.scss';

/**
 * Common props for the small components.
 */
interface AreaProps {
    children?: ReactNode;
}

const Left = ({ children = null }: AreaProps) => (
    <div className={styles.left}>
        {children}
    </div>
);

const Right = ({ children = null }: AreaProps) => (
    <div className={styles.right}>
        {children}
    </div>
);

const Block = ({ children = null }: AreaProps) => (
    <span className={styles.block}>
        {children}
    </span>
);

interface StatusBarProps {
    showTime: boolean;
}

export const StatusBar = ({ showTime }: StatusBarProps) => (
    <div className={styles.statusBar}>
        <Left>
            <Block>
                Hunmin Park
            </Block>
        </Left>
        <Right>
            <Block><Icon definition={faWifi} /></Block>
            <Block><Icon definition={faSignal} /></Block>
            <Block><Icon definition={faBatteryFull} /></Block>
            {showTime && <Block><ClockProvider><Hour />:<Minute /> <AMPM /></ClockProvider></Block>}
        </Right>
    </div>
);
