import React from 'react';

import { range } from 'util/MathUtils';
import { Project } from 'model/project/Project';
import { ProjectButton } from 'component/project/ProjectButton';
import styles from 'style/project/ProjectGrid.module.scss';
import Projects from 'data/Projects.json';

/**
 * Grid of the project screenshots.
 */
export const ProjectGrid = () => (
    <div className={styles.grid}>
        {Projects.map((project: Project) => (
            <div key={project.name} className={styles.realCell}>
                <ProjectButton project={project} />
            </div>
        ))}
        {range(0, Number(styles.maxDimensionX)).map(value => (
            <div key={value} className={styles.fakeCell} />
        ))}
    </div>
);
