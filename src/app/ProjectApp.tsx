/** @jsx jsx */

import {css, jsx} from '@emotion/core';
import {Fragment, ReactNode, useContext, useState} from 'react';
import {English, Korean} from '../common/Language';
import {App} from './App';
import {ThemeContext, ThemeProvider} from './Theme';

interface Project {
    name: string;
    description: string;
    repositoryURL: string;
    imageURL: string;
}

const Background = require('./image/Coffee');
const Projects: Project[] = require('./Projects');

const Link = ({url = '', children = null as ReactNode}) => {
    const theme = useContext(ThemeContext);

    return (
        <a
            css={{
                wordBreak: 'break-all',
                color: theme.lightColor,
                '&:hover, &:active': {
                    color: theme.darkColor
                }
            }}
            target={'_blank'}
            rel={'noopener noreferrer'}
            href={url}
        >
            {children}
        </a>
    );
};

const ProjectName = ({url = '', children = null as ReactNode}) => (
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

const ProjectDescription = ({children = null as ReactNode}) => (
    <div css={{
        width: '100%'
    }}>
        {children}
    </div>
);

const ProjectGallery = ({projects = [] as Project[]}) => {
    const theme = useContext(ThemeContext);
    const [projectIndex, setProjectIndex] = useState(0);
    const project = projects[projectIndex];

    const buttonWidth = 16;
    const buttonHeight = 12;
    const wideScreenQuery = '@media (min-width: 769px)';

    const buttonStyle = css([theme.boxStyle, theme.highlightStyle, {
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
        '&:hover, &:active, &:focus': theme.textStyle,
        [wideScreenQuery]: {
            display: 'block',
            marginRight: 0,
            marginBottom: '1rem'
        }
    }]);

    return (
        <Fragment>
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
                    {projects.map(({imageURL, name}, index) => (
                        <button
                            css={[buttonStyle, {
                                title: name,
                                backgroundImage: `url(${imageURL})`
                            }]}
                            onClick={() => {
                                setProjectIndex(index);
                            }}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>
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
                    <ProjectName url={project.repositoryURL}>{project.name}</ProjectName>
                    <ProjectDescription>{project.description}</ProjectDescription>
                </div>
            </div>
        </Fragment>
    );
};

const Content = () => {
    const theme = useContext(ThemeContext);

    return (
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
                <ProjectGallery projects={Projects}/>
            </div>
        </div>
    );
};

export const ProjectApp = () => (
    <App koreanTitle={'프로젝트'} englishTitle={'Projects'}>
        <ThemeProvider lightColor={'#f9ab0d'} darkColor={'#d9890d'}>
            <Content/>
        </ThemeProvider>
    </App>
);
