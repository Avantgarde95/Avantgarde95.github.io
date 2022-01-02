import React from 'react';

import { range } from 'util/MathUtils';
import { LanguageFilter } from 'component/common/LanguageFilter';
import { WrappedLink } from 'component/common/WrappedLink';
import styles from 'style/project/Page.module.scss';

/**
 * 'Project(s)' page.
 */
const Page = () => {
    const tags = ['HTML', 'JavaScript', 'C++'];

    return (
        <div className={styles.page}>
            <div className={styles.description}>
                <LanguageFilter language={'Korean'}>
                    모든 프로젝트들을 보려면&nbsp;
                    <WrappedLink className={styles.link} href={'https://github.com/Avantgarde95'}>
                        깃허브
                    </WrappedLink>
                    를 방문해주세요.
                </LanguageFilter>
                <LanguageFilter language={'English'}>
                    To see the all projects, visit&nbsp;
                    <WrappedLink className={styles.link} href={'https://github.com/Avantgarde95'}>
                        GitHub
                    </WrappedLink>
                    .
                </LanguageFilter>
            </div>
            <div className={styles.tagButtonGroup}>
                {tags.map(tag => (
                    <button key={tag} className={styles.tagButton} type={'button'}>
                        {tag}
                    </button>
                ))}
            </div>
            <div className={styles.gridArea}>
                <div className={styles.grid}>
                    {range(0, 10).map(value => (
                        <div key={value} className={styles.realCell}>
                            <img
                                className={styles.image}
                                src={'/image/RayTracing.png'}
                                alt={'RayTracing'}
                                title={'RayTracing'}
                            />
                        </div>
                    ))}
                    {range(0, 5).map(value => (
                        <div key={value} className={styles.fakeCell} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
