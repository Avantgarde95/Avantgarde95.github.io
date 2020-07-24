/** @jsx jsx */

import {css, jsx} from '@emotion/core';
import {createContext, Fragment, ReactNode, useContext, useState} from 'react';

const Background = require('./image/Coffee');

const LanguageContext = createContext({
    currentLanguage: 'English',
    changeLanguage: (newLanguage: string) => {
    }
});

const LanguageProvider = ({children = {} as ReactNode}) => {
    const [language, setLanguage] = useState('English');

    return (
        <LanguageContext.Provider value={{
            currentLanguage: language,
            changeLanguage: (newLanguage: string) => {
                setLanguage(newLanguage);
            }
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

const Name = ({children = {} as ReactNode}) => (
    <div css={{
        fontWeight: 'bold',
        fontSize: '1.8rem',
        marginBottom: '1.3rem'
    }}>
        {children}
    </div>
);

const LanguageButton = ({language = '', children = {} as ReactNode}) => {
    const changeLanguage = useContext(LanguageContext).changeLanguage;

    return (
        <button
            css={{
                cursor: 'pointer',
                width: '5.7rem',
                margin: 0,
                lineHeight: '1.5rem',
                color: '#ffffff',
                textShadow: '0 0 2px #d9890d, 0 0 4px #f9ab0d',
                boxShadow: '0 0 2px #d9890d, 0 0 4px #f9ab0d',
                background: 'none',
                border: 'solid 1px #ffffff',
                borderRadius: 0,
                '&:hover, &:active, &:focus': {
                    border: 'solid 1px #f9ab0d',
                    color: '#f9ab0d'
                }
            }}
            title={language}
            onClick={() => {
                changeLanguage(language);
            }}
        >
            {children}
        </button>
    );
};

const Korean = ({children = {} as ReactNode}) => (
    <Fragment>
        {useContext(LanguageContext).currentLanguage === 'Korean' && children}
    </Fragment>
);

const English = ({children = {} as ReactNode}) => (
    <Fragment>
        {useContext(LanguageContext).currentLanguage === 'English' && children}
    </Fragment>
);

const ProjectContext = createContext({
    currentProjectIndex: 0,
    changeProjectIndex: (projectIndex: number) => {
    }
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

const Gallery = ({wideScreenQuery = '', images = [{src: '', name: ''}]}) => {
    const changeProjectIndex = useContext(ProjectContext).changeProjectIndex;

    const buttonStyle = css(
        {
            title: name,
            display: 'inline-block',
            cursor: 'pointer',
            textAlign: 'center',
            width: '20rem',
            height: '15rem',
            marginRight: '1rem',
            marginBottom: 0,
            fontSize: '2rem',
            color: 'rgba(255, 255, 255, 0)',
            boxShadow: '0 0 2px #d9890d, 0 0 4px #f9ab0d',
            border: 'solid 1px #ffffff',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#000000',
            '&:hover, &:active, &:focus': {
                border: 'solid 1px #f9ab0d',
                color: '#ffffff',
                textShadow: '0 0 2px #d9890d, 0 0 4px #f9ab0d'
            },
            [wideScreenQuery]: {
                display: 'block',
                marginRight: 0,
                marginBottom: '1rem'
            }
        }
    );

    return (
        <div css={{
            display: 'inline-block',
            position: 'relative',
            width: '100%',
            height: '17rem',
            marginRight: 0,
            [wideScreenQuery]: {
                float: 'left',
                width: '22rem',
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
                        css={[buttonStyle, {
                            backgroundImage: `url(${src})`
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

const Project = ({wideScreenQuery = '', components = [] as ReactNode[]}) => {
    const currentProjectIndex = useContext(ProjectContext).currentProjectIndex;

    return (
        <div css={{
            display: 'inline-block',
            position: 'relative',
            width: '100%',
            height: 'calc(100% - 18rem)',
            minHeight: '8rem',
            marginBottom: '1rem',
            [wideScreenQuery]: {
                float: 'right',
                width: 'calc(100% - 23rem)',
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
            display: 'block',
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

const projects = [
    {
        name: 'PaintTalk',
        url: 'https://github.com/Avantgarde95/PaintTalk',
        image: require('./image/PaintTalk'),
        description: (
            <Fragment>
                <Korean>
                    자연어를 이용한 그림 그리기
                </Korean>
                <English>
                    Draw a picture by using natural language
                </English>
            </Fragment>
        )
    },
    {
        name: 'Image2Term',
        url: 'https://github.com/Avantgarde95/Image2Term',
        image: require('./image/Image2Term'),
        description: (
            <Fragment>
                <Korean>
                    터미널 위에 그림 그리기.
                </Korean>
                <English>
                    Draw an image on the terminal.
                </English>
            </Fragment>
        )
    },
    {
        name: 'CGLab',
        url: 'https://github.com/Avantgarde95/CGLab',
        image: require('./image/CGLab'),
        description: (
            <Fragment>
                <Korean>
                    간단한 OpenGL 예제들 (KAIST CS580 프로젝트들)
                </Korean>
                <English>
                    Simple OpenGL examples (KAIST CS580 projects)
                </English>
            </Fragment>
        )
    },
    {
        name: 'LiKo',
        url: 'https://github.com/Avantgarde95/LiKo',
        image: require('./image/LiKo'),
        description: (
            <Fragment>
                <Korean>
                    한국어를 배워보자! (KAIST CS374 팀 프로젝트)
                </Korean>
                <English>
                    Let's learn Korean! (KAIST CS374 team project)
                </English>
            </Fragment>
        )
    },
    {
        name: 'archipi-web',
        url: 'https://github.com/Avantgarde95/archipi-web',
        image: require('./image/ArchiPi4Web'),
        description: (
            <Fragment>
                <Korean>
                    아르키메데스의 원주율(π) 계산법. π 데이 (2019.03.14) 기념으로 만듬.
                </Korean>
                <English>
                    Archimedes' method for approximating π. Created for celebrating π day! (2019.03.14)
                </English>
            </Fragment>
        )
    },
    {
        name: 'Mandelbrot',
        url: 'https://github.com/Avantgarde95/Mandelbrot',
        image: require('./image/Mandelbrot'),
        description: (
            <Fragment>
                <Korean>
                    만델브로트 프랙탈 생성기
                </Korean>
                <English>
                    Mandelbrot fractal generator
                </English>
            </Fragment>
        )
    },
    {
        name: 'Lucky',
        url: 'https://github.com/Avantgarde95/Lucky',
        image: require('./image/Lucky'),
        description: (
            <Fragment>
                <Korean>
                    당신의 오늘의 운세를 예측해 드립니다.
                </Korean>
                <English>
                    I'll predict your luck today.
                </English>
            </Fragment>
        )
    }
];

export const ProjectApp = () => {
    const wideScreenQuery = '@media screen and (min-width: 769px)';

    return (
        <div css={{
            display: 'table',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            padding: '1.5rem',
            color: '#ffffff',
            textShadow: '0 0 2px #d9890d, 0 0 4px #f9ab0d',
            background: `#000000 url(${Background}) no-repeat center`
        }}>
            <LanguageProvider>
                <ProjectProvider>
                    <div css={{
                        display: 'table-row',
                        height: 0
                    }}>
                        <Name>Projects</Name>
                        <div css={{
                            marginBottom: '1.5rem'
                        }}>
                            <LanguageButton language={'Korean'}>한국어</LanguageButton>
                            <LanguageButton language={'English'}>English</LanguageButton>
                        </div>
                    </div>
                    <div css={{
                        display: 'table-row',
                        height: '100%'
                    }}>
                        <Project
                            wideScreenQuery={wideScreenQuery}
                            components={projects.map(project => (
                                <Fragment>
                                    <ProjectName url={project.url}>{project.name}</ProjectName>
                                    <ProjectDescription>{project.description}</ProjectDescription>
                                </Fragment>
                            ))}
                        />
                        <Gallery
                            wideScreenQuery={wideScreenQuery}
                            images={projects.map(project => (
                                {src: project.image, name: project.name}
                            ))}
                        />
                    </div>
                </ProjectProvider>
            </LanguageProvider>
        </div>
    );
};
