import React from 'react';

import { Korean, English } from 'component/common/Language';
import { WrappedLink } from 'component/common/WrappedLink';
import styles from 'style/project/Header.module.scss';

/**
 * Header of the 'project' page.
 */
export const Header = () => (
    <div className={styles.header}>
        <Korean>
            모든 프로젝트들을 보려면&nbsp;
            <WrappedLink className={styles.link} href={'https://github.com/Avantgarde95'}>
                깃허브
            </WrappedLink>
            를 방문해주세요.
        </Korean>
        <English>
            To see the all projects, visit&nbsp;
            <WrappedLink className={styles.link} href={'https://github.com/Avantgarde95'}>
                GitHub
            </WrappedLink>
            .
        </English>
    </div>
);
