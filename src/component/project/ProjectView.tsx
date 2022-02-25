import React, { useEffect, useState } from 'react';
import { Image } from 'react-avant/lib/Image';
import { Icon } from 'react-avant/lib/Icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

import { Project } from 'model/project/Project';
import { NextLink } from 'component/common/NextLink';
import { ProgrammingLanguages } from 'component/project/ProgrammingLanguages';
import styles from 'style/project/ProjectView.module.scss';

/**
 * ProjectView props.
 */
interface ProjectViewProps {
    project: Project;
    onClose: () => void;
}

/**
 * Shows the information of the given project.
 */
export const ProjectView = ({ project, onClose }: ProjectViewProps) => {
    const [hasImage, setImage] = useState(true);

    useEffect(() => {
        // We have to reset the state when we select a different project.
        setImage(true);
    }, [project.name]);

    const onImageError = () => {
        // Hide the broken image icon if the image doesn't exist.
        setImage(false);
    };

    const scrollTargetRef = (element: HTMLElement | null) => {
        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // Hack: We use the key to force re-rendering of the component when we select other project.
        <div className={styles.projectView} key={project.name} ref={scrollTargetRef}>
            <button className={styles.closeButton} type={'button'} onClick={onClose}>
                <Icon definition={faTimes} />
            </button>
            <div className={styles.imageArea}>
                {hasImage && (
                    <Image className={styles.image} src={project.imageURL} alt={project.name} onError={onImageError} />
                )}
                <NextLink className={styles.link} title={project.repositoryURL} href={project.repositoryURL}>
                    {project.name}
                </NextLink>
            </div>
            {project.description && <div className={styles.description}>{project.description}</div>}
            <ProgrammingLanguages languageMap={project.languageMap} />
        </div>
    );
};
