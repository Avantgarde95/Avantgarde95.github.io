import React from 'react';
import Link from 'next/link';

import { LanguageFilter } from 'component/common/LanguageFilter';
import { range } from 'util/MathUtils';
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
                    <Link href={'https://github.com/Avantgarde95'}>
                        <a className={styles.link} target={'_blank'} rel={'noreferrer'}>
                            깃허브
                        </a>
                    </Link>
                    를 방문해주세요.
                </LanguageFilter>
                <LanguageFilter language={'English'}>
                    To see the all projects, visit&nbsp;
                    <Link href={'https://github.com/Avantgarde95'}>
                        <a className={styles.link} target={'_blank'} rel={'noreferrer'}>
                            GitHub
                        </a>
                    </Link>
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
                        <div key={value} className={styles.cell}>
                            <img
                                className={styles.image}
                                src={'/image/RayTracing.png'}
                                alt={'RayTracing'}
                                title={'RayTracing'}
                            />
                        </div>
                    ))}
                    {range(0, 5).map(value => (
                        <div key={value} className={styles.cell} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
