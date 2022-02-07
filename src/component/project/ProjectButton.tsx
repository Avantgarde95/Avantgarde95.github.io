import React from 'react';

import { Project } from 'model/project/Project';
import styles from 'style/project/ProjectButton.module.scss';

/**
 * ProjectButton props.
 */
interface Props {
    project: Project;
    onClick: () => void;
}

/**
 * Cell which includes information for a project.
 */
export const ProjectButton = ({ project, onClick }: Props) => (
    <button
        className={styles.projectButton}
        type={'button'}
        title={project.name}
        onClick={onClick}
        style={{
            backgroundImage: `url(${project.imageURL})`,
        }}
    >
        {project.name}
    </button>
);