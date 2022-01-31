import React from 'react';

import { range } from 'util/MathUtils';
import { VirtualApp } from 'model/home/App';
import { AppCell } from 'component/home/AppCell';
import styles from 'style/home/AppGrid.module.scss';

/**
 * AppGrid props.
 */
interface Props {
    apps: Array<VirtualApp>;
}

/**
 * Grid of the app buttons which looks like a phone screen.
 * (Maximum length of a row: 5)
 */
export const AppGrid = ({ apps }: Props) => (
    <div className={styles.grid}>
        {apps.map(app => (
            <div key={app.path} className={styles.realCell}>
                <AppCell app={app} />
            </div>
        ))}
        {/* Put some empty cells to align the buttons to the left. */}
        {range(0, 5).map(i => (
            <div key={i} className={styles.fakeCell} />
        ))}
    </div>
);
