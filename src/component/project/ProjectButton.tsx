import React from 'react';

import { Project } from 'model/project/Project';
import { NextLink } from 'component/common/NextLink';
import styles from 'style/project/ProjectButton.module.scss';

/**
 * ProjectButton props.
 */
interface Props {
    project: Project;
}

/**
 * Cell which includes information for a project.
 */
export const ProjectButton = ({ project }: Props) => (
    <NextLink
        className={styles.projectButton}
        href={project.repositoryURL}
        style={{
            backgroundImage: `url(${project.imageURL})`,
        }}
    >
        {project.name}
    </NextLink>
);
