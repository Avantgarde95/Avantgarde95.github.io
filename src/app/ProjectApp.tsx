import * as React from 'react';
import { ReactNode, useContext, useState } from 'react';
import { css } from '@emotion/css';
import { English, Korean } from '../common/Language';
import { App } from './App';
import { ThemeContext, ThemeProvider } from './Theme';
import { MediaContext } from '../common/Media';
import { Link } from './Common';
import * as Projects from './data/Projects.json';
import * as Background from './image/Coffee.png';

interface Project {
    name: string;
    description: string;
    repositoryURL: string;
    imageURL: string;
    languageMap: { [language: string]: number }
}

const ProjectName = ({ url = '', children = null as ReactNode }) => (
    <Link
        className={css({
            display: 'table',
            marginBottom: '0.5rem',
            fontSize: '1.5rem'
        })}
        url={url}
    >
        {children}
    </Link>
);

const ProjectDescription = ({ children = null as ReactNode }) => (
    <div className={css({
        width: '100%',
        marginBottom: '0.5rem',
    })}>
        {children}
    </div>
);

const ProjectLanguages = ({ languageMap = {} as { [language: string]: number } }) => {
    const theme = useContext(ThemeContext);
    const languages = Object.getOwnPropertyNames(languageMap);
    let totalBytes = 0;
    const languagePercentages: { language: string, percentage: number }[] = [];

    languages.forEach(language => {
        totalBytes += languageMap[language];
    });

    languages.slice(0, Math.min(5, languages.length)).forEach(language => {
        const percentage = languageMap[language] / totalBytes * 100.0;
        languagePercentages.push({ language: language, percentage: Math.round(percentage * 100.0) / 100.0 });
    });

    if (languages.length > 5) {
        const othersBytes = [0, ...languages.slice(5)].reduce((result, language) =>
            result as number + languageMap[language]
        ) as number;

        const percentage = othersBytes / totalBytes * 100.0;
        languagePercentages.push({ language: 'Others', percentage: Math.round(percentage * 100.0) / 100.0 });
    }

    return (
        <div className={css({
            whiteSpace: 'nowrap',
            overflowX: 'auto',
            width: '100%'
        })}>
            {languagePercentages.map(({ language, percentage }) => (
                <div className={css({
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    minWidth: `${percentage}%`,
                    textAlign: 'center',
                    border: `1px solid ${theme.lightColor}`
                })}>
                    {language}
                    <br />
                    {percentage}%
                </div>
            ))}
        </div>
    );
};

const ProjectGallery = ({ projects = [] as Project[] }) => {
    const theme = useContext(ThemeContext);
    const { wideScreenQuery } = useContext(MediaContext);
    const [projectIndex, setProjectIndex] = useState(0);
    const project = projects[projectIndex];

    const buttonWidth = 16;
    const buttonHeight = 12;

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
        <>
            <div className={css({
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
            })}>
                <div className={css({
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
                })}>
                    {projects.map(({ imageURL, name }, index) => (
                        <button
                            className={css([buttonStyle, {
                                title: name,
                                backgroundImage: `url(${imageURL})`
                            }])}
                            onClick={() => {
                                setProjectIndex(index);
                            }}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>
            <div className={css({
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
            })}>
                <div className={css({
                    position: 'absolute',
                    overflow: 'auto',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                })}>
                    <ProjectName url={project.repositoryURL}>{project.name}</ProjectName>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectLanguages languageMap={project.languageMap} />
                </div>
            </div>
        </>
    );
};

const Content = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={css([theme.textStyle, {
            display: 'table',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            padding: '1.5rem'
        }])}>
            <div className={css({
                display: 'table-row',
                height: 0
            })}>
                <div className={css({
                    fontWeight: 'bold',
                    fontSize: '1.8rem',
                    lineHeight: 1,
                    marginBottom: '1.5rem'
                })}>
                    <Korean>프로젝트</Korean>
                    <English>Projects</English>
                </div>
                <div className={css({
                    marginBottom: '1.5rem'
                })}>
                    <Korean>모든 프로젝트들을 보려면 <Link url={'https://github.com/Avantgarde95'}>깃허브</Link>를
                        방문해주세요.</Korean>
                    <English>To see the all projects, visit <Link
                        url={'https://github.com/Avantgarde95'}>GitHub</Link>.</English>
                </div>
            </div>
            <div className={css({
                display: 'table-row',
                height: '100%'
            })}>
                <ProjectGallery projects={Projects} />
            </div>
        </div>
    );
};

export const ProjectApp = () => (
    <App koreanTitle={'프로젝트'} englishTitle={'Projects'} background={Background}>
        <ThemeProvider lightColor={'#f9ab0d'} darkColor={'#d9890d'}>
            <Content />
        </ThemeProvider>
    </App>
);
