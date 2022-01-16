import React from 'react';

import { range } from 'util/MathUtils';
import { WrappedLink } from 'component/common/WrappedLink';
import styles from 'style/project/ProjectGrid.module.scss';
import Projects from 'data/Projects.json';

export const projectTagNames = [
    'C',
    'C++',
    'Java',
    'Kotlin',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Python',
] as const;

/**
 * 'Tag' for filtering the projects.
 * Currently, it just means each programming language.
 */
export type ProjectTag = typeof projectTagNames[number];

/**
 * Grid of the project screenshots.
 */
export const ProjectGrid = () => (
    <div className={styles.grid}>
        {Projects.map(project => (
            <div key={project.name} className={styles.realCell}>
                <WrappedLink
                    className={styles.projectButton}
                    href={project.repositoryURL}
                    style={{
                        backgroundImage: `url(${project.imageURL})`,
                    }}
                >
                    {project.name}
                </WrappedLink>
            </div>
        ))}
        {range(0, 8).map(value => (
            <div key={value} className={styles.fakeCell} />
        ))}
    </div>
);
