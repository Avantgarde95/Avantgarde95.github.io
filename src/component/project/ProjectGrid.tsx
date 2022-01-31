import React from 'react';

import { range } from 'util/MathUtils';
import { Project } from 'model/project/Project';
import { ProjectCell } from 'component/project/ProjectCell';
import styles from 'style/project/ProjectGrid.module.scss';
import Projects from 'data/Projects.json';

/**
 * Grid of the project screenshots.
 */
export const ProjectGrid = () => (
    <div className={styles.grid}>
        {Projects.map((project: Project) => (
            <div key={project.name} className={styles.realCell}>
                <ProjectCell project={project} />
            </div>
        ))}
        {range(0, 8).map(value => (
            <div key={value} className={styles.fakeCell} />
        ))}
    </div>
);
