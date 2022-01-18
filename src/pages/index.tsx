import React from 'react';

import { apps } from 'model/home/App';
import { Background } from 'component/home/Background';
import { Locker } from 'component/home/Locker';
import { AppGrid } from 'component/home/AppGrid';
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
                <AppGrid apps={apps} />
            </Locker>
        </div>
    </div>
);

export default Page;
