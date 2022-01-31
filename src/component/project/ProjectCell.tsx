import React from 'react';

import { Project } from 'model/project/Project';
import { AutoLink } from 'component/common/AutoLink';
import styles from 'style/project/ProjectCell.module.scss';

/**
 * ProjectCell props.
 */
interface Props {
    project: Project;
}

/**
 * Cell which includes information for a project.
 */
export const ProjectCell = ({ project }: Props) => (
    <AutoLink
        className={styles.projectCell}
        href={project.repositoryURL}
        style={{
            backgroundImage: `url(${project.imageURL})`,
        }}
    >
        {project.name}
    </AutoLink>
);
