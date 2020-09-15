/** @jsx jsx */

import {jsx} from '@emotion/core';
import {createContext, Fragment, ReactNode, useContext, useState} from 'react';
import {English, Korean} from '../common/Language';
import {generateTheme} from './Theme';
import {App} from './App';
import {projects} from './Projects';

const Background = require('./image/Coffee');

const theme = generateTheme({
    lightColor: '#f9ab0d',
    darkColor: '#d9890d'
});

const ProjectContext = createContext({} as {
    currentProjectIndex: number,
    changeProjectIndex: (projectIndex: number) => any
});

const ProjectProvider = ({children = {} as ReactNode}) => {
    const [projectIndex, setProjectIndex] = useState(0);

    return (
        <ProjectContext.Provider value={{
            currentProjectIndex: projectIndex,
            changeProjectIndex: newProjectIndex => {
                setProjectIndex(newProjectIndex);
            }
        }}>
            {children}
        </ProjectContext.Provider>
    );
};

const Link = ({url = '', children = {} as ReactNode}) => (
    <a
        css={{
            wordBreak: 'break-all',
            color: '#f9ab0d',
            '&:hover, &:active': {
                color: '#d9890d'
            }
        }}
        target={'_blank'}
        rel={'noopener noreferrer'}
        href={url}
    >
        {children}
    </a>
);

const Gallery = (
    {
        buttonWidth = 0,
        buttonHeight = 0,
        wideScreenQuery = '',
        images = [{src: '', name: ''}]
    }
) => {
    const {changeProjectIndex} = useContext(ProjectContext);

    return (
        <div css={{
            display: 'inline-block',
            position: 'relative',
            width: '100%',
            height: `${buttonHeight + 2}rem`,
            // XXX: Dirty fix for preventing the height from being zero in IE 10.
            minHeight: `${buttonHeight + 2}rem`,
            marginRight: 0,
            [wideScreenQuery]: {
                float: 'left',
                width: `${buttonWidth + 2}rem`,
                height: '100%',
                marginRight: '1rem'
            }
        }}>
            <div css={{
                position: 'absolute',
                overflow: 'auto',
                whiteSpace: 'nowrap',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                [wideScreenQuery]: {
                    whiteSpace: 'normal'
                }
            }}>
                {images.map(({src, name}, index) => (
                    <button
                        css={[theme.boxStyle, theme.highlightStyle, {
                            title: name,
                            display: 'inline-block',
                            cursor: 'pointer',
                            textAlign: 'center',
                            width: `${buttonWidth}rem`,
                            height: `${buttonHeight}rem`,
                            marginRight: '1rem',
                            marginBottom: 0,
                            fontSize: '2rem',
                            color: 'rgba(0, 0, 0, 0)',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundImage: `url(${src})`,
                            '&:hover, &:active, &:focus': theme.textStyle,
                            [wideScreenQuery]: {
                                display: 'block',
                                marginRight: 0,
                                marginBottom: '1rem'
                            }
                        }]}
                        onClick={() => {
                            changeProjectIndex(index);
                        }}
                    >
                        {name}
                    </button>
                ))}
            </div>
        </div>
    );
};

const Project = (
    {
        buttonWidth = 0,
        buttonHeight = 0,
        wideScreenQuery = '',
        components = [] as ReactNode[]
    }
) => {
    const {currentProjectIndex} = useContext(ProjectContext);

    return (
        <div css={{
            display: 'inline-block',
            position: 'relative',
            width: '100%',
            height: `calc(100% - ${buttonHeight + 3}rem)`,
            minHeight: '7rem',
            marginBottom: '1rem',
            [wideScreenQuery]: {
                float: 'right',
                width: `calc(100% - ${buttonWidth + 3}rem)`,
                height: '100%'
            }
        }}>
            <div css={{
                position: 'absolute',
                overflow: 'auto',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }}>
                {components[currentProjectIndex]}
            </div>
        </div>
    );
};

const ProjectName = ({url = '', children = {} as ReactNode}) => (
    <a
        css={{
            display: 'table',
            wordBreak: 'break-all',
            marginBottom: '0.5rem',
            fontSize: '1.5rem',
            color: '#f9ab0d',
            '&:hover, &:active': {
                color: '#d9890d'
            }
        }}
        target={'_blank'}
        rel={'noopener noreferrer'}
        href={url}
    >
        {children}
    </a>
);

const ProjectDescription = ({children = {} as ReactNode}) => (
    <div css={{
        width: '100%'
    }}>
        {children}
    </div>
);

const buttonWidth = 16;
const buttonHeight = 12;
const wideScreenQuery = '@media (min-width: 769px)';

export const ProjectApp = () => (
    <App koreanTitle={'프로젝트'} englishTitle={'Projects'}>
        <div css={[theme.textStyle, {
            display: 'table',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            padding: '1.5rem',
            background: `#000000 url(${Background}) no-repeat center`
        }]}>
            <div css={{
                display: 'table-row',
                height: 0
            }}>
                <div css={{
                    fontWeight: 'bold',
                    fontSize: '1.8rem',
                    lineHeight: 1,
                    marginBottom: '1.5rem'
                }}>
                    <Korean>프로젝트</Korean>
                    <English>Projects</English>
                </div>
                <div css={{
                    marginBottom: '1.5rem'
                }}>
                    <Korean>모든 프로젝트들을 보려면 <Link url={'https://github.com/Avantgarde95'}>깃허브</Link>를
                        방문해주세요.</Korean>
                    <English>To see the all projects, visit <Link
                        url={'https://github.com/Avantgarde95'}>GitHub</Link>.</English>
                </div>
            </div>
            <div css={{
                display: 'table-row',
                height: '100%'
            }}>
                <ProjectProvider>
                    <Project
                        buttonWidth={buttonWidth}
                        buttonHeight={buttonHeight}
                        wideScreenQuery={wideScreenQuery}
                        components={projects.map(project => (
                            <Fragment>
                                <ProjectName url={project.url}>{project.name}</ProjectName>
                                <ProjectDescription>{project.description}</ProjectDescription>
                            </Fragment>
                        ))}
                    />
                    <Gallery
                        buttonWidth={buttonWidth}
                        buttonHeight={buttonHeight}
                        wideScreenQuery={wideScreenQuery}
                        images={projects.map(project => (
                            {src: project.image, name: project.name}
                        ))}
                    />
                </ProjectProvider>
            </div>
        </div>
    </App>
);
