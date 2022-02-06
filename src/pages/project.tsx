import React, { useState } from 'react';

import { Project } from 'model/project/Project';
import { Header } from 'component/project/Header';
import { ProjectView } from 'component/project/ProjectView';
import { ProjectGrid } from 'component/project/ProjectGrid';
import { ProjectButton } from 'component/project/ProjectButton';
import styles from 'style/project/Page.module.scss';
import Projects from 'data/Projects.json';

/**
 * 'Project(s)' page.
 */
const Page = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const onCloseProjectView = () => {
        setSelectedProject(null);
    };

    return (
        <div className={styles.page}>
            {!selectedProject && <Header />}
            <div className={styles.gridArea}>
                {selectedProject && <ProjectView project={selectedProject} onClose={onCloseProjectView} />}
                <ProjectGrid
                    cells={Projects.map((project: Project) => [
                        project.name,
                        <ProjectButton
                            project={project}
                            onClick={() => {
                                setSelectedProject(project);
                            }}
                        />,
                    ])}
                />
            </div>
        </div>
    );
};

export default Page;
