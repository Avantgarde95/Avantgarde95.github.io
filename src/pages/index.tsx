import React from 'react';

import { apps } from 'model/home/App';
import { Grid } from 'component/common/Grid';
import { Background } from 'component/home/Background';
import { Locker } from 'component/home/Locker';
import { AppButton } from 'component/home/AppButton';
import styles from 'style/home/Page.module.scss';

/**
 * 'Home' page.
 * It shows the grid of the app buttons which looks like a phone screen.
 * (Maximum length of a row: 5)
 */
const Page = () => (
    <div className={styles.page}>
        <Background />
        <div className={styles.content}>
            <Locker>
                <Grid
                    cells={apps.map(app => [app.path, <AppButton app={app} />])}
                    cellWidth={'7rem'}
                    cellHeight={'8rem'}
                    maxDimensionX={5}
                    className={styles.grid}
                    realCellClassName={styles.realCell}
                />
            </Locker>
        </div>
    </div>
);

export default Page;
