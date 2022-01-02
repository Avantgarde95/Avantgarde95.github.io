import React from 'react';

import { range } from 'util/MathUtils';
import styles from 'style/project/ProjectGrid.module.scss';
import Projects from 'data/Projects.json';

export const projectTagNames = ['C', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'] as const;

/**
 * 'Tag' for filtering the projects.
 * Currently, it just means each programming language.
 */
export type ProjectTag = typeof projectTagNames[number];

/**
 * Information of each project.
 */
interface Project {
    name: string;
    description: string;
    repositoryURL: string;
    imageURL: string;
    languageMap: Record<string, number>;
}

/**
 * Find out whether the project has any 'active' tags.
 */
function canShowProject(project: Project, tagStateMap: Record<ProjectTag, boolean>) {
    const tags = Object.keys(project.languageMap) as ProjectTag[];

    for (let i = 0; i < tags.length; i += 1) {
        if (tagStateMap[tags[i]]) {
            return true;
        }
    }

    return false;
}

/**
 * ProjectGrid props.
 */
interface Props {
    tagStateMap: Record<ProjectTag, boolean>;
}

/**
 * Grid of the project screenshots.
 * It only shows the projects which have at least one active tags.
 */
export const ProjectGrid = ({ tagStateMap }: Props) => (
    <div className={styles.grid}>
        {Projects.filter((project: Project) => canShowProject(project, tagStateMap)).map(project => (
            <div
                key={project.name}
                className={styles.realCell}
                style={{
                    backgroundImage: `url(${project.imageURL})`,
                }}
            >
                {project.name}
            </div>
        ))}
        {range(0, 4).map(value => (
            <div key={value} className={styles.fakeCell} />
        ))}
    </div>
);
