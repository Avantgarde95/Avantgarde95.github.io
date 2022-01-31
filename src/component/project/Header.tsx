import React from 'react';

import { Korean, English } from 'component/common/Language';
import { NextLink } from 'component/common/NextLink';
import styles from 'style/project/Header.module.scss';

/**
 * Header of the 'project' page.
 */
export const Header = () => (
    <div className={styles.header}>
        <Korean>
            모든 프로젝트들을 보려면&nbsp;
            <NextLink className={styles.link} href={'https://github.com/Avantgarde95'}>
                깃허브
            </NextLink>
            를 방문해주세요.
        </Korean>
        <English>
            To see the all projects, visit&nbsp;
            <NextLink className={styles.link} href={'https://github.com/Avantgarde95'}>
                GitHub
            </NextLink>
            .
        </English>
    </div>
);
