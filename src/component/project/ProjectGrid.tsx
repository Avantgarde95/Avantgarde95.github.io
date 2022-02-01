import React, { Key, ReactNode } from 'react';

import { range } from 'util/MathUtils';
import styles from 'style/project/ProjectGrid.module.scss';

/**
 * ProjectGrid props.
 */
interface Props {
    cells: Array<[Key, ReactNode]>;
}

/**
 * Grid of the project screenshots.
 */
export const ProjectGrid = ({ cells }: Props) => (
    <div className={styles.grid}>
        {cells.map(([key, cell]) => (
            <div className={styles.realCell} key={key}>
                {cell}
            </div>
        ))}
        {range(0, Number(styles.maxDimensionX)).map(value => (
            <div key={value} className={styles.fakeCell} />
        ))}
    </div>
);
