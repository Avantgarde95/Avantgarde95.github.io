import React from 'react';

import { Header } from 'component/project/Header';
import { ProjectGrid } from 'component/project/ProjectGrid';
import styles from 'style/project/Page.module.scss';

/**
 * 'Project(s)' page.
 */
const Page = () => (
    <div className={styles.page}>
        <Header />
        <div className={styles.gridArea}>
            <ProjectGrid />
        </div>
    </div>
);

export default Page;
