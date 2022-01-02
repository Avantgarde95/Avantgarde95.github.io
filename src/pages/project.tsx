import React, { useState } from 'react';
import classNames from 'classnames';

import { LanguageFilter } from 'component/common/LanguageFilter';
import { WrappedLink } from 'component/common/WrappedLink';
import { ProjectGrid, ProjectTag, projectTagNames } from 'component/project/ProjectGrid';
import styles from 'style/project/Page.module.scss';

const tagButtons: Array<Array<ProjectTag>> = [
    ['C', 'C++'],
    ['Java', 'Kotlin'],
    ['HTML'],
    ['CSS'],
    ['JavaScript', 'TypeScript'],
    ['Python'],
];

/**
 * 'Project(s)' page.
 */
const Page = () => {
    const [tagStateMap, setTagStateMap] = useState(
        Object.fromEntries(projectTagNames.map(tag => [tag, true])) as Record<ProjectTag, boolean>
    );

    const onClickTagButton = (tags: Array<ProjectTag>) => {
        setTagStateMap({
            ...tagStateMap,
            ...Object.fromEntries(tags.map(tag => [tag, !tagStateMap[tag]])),
        });
    };

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
                {tagButtons.map(tags => (
                    <button
                        key={tags.join('')}
                        className={classNames(styles.tagButton, {
                            [styles.isActive]: tags.some(tag => tagStateMap[tag]),
                        })}
                        type={'button'}
                        onClick={() => {
                            onClickTagButton(tags);
                        }}
                    >
                        {tags.join(' / ')}
                    </button>
                ))}
            </div>
            <div className={styles.gridArea}>
                <ProjectGrid tagStateMap={tagStateMap} />
            </div>
        </div>
    );
};

export default Page;
