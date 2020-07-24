/** @jsx jsx */

import {jsx} from '@emotion/core';
import {createContext, Fragment, ReactNode, useContext, useState} from 'react';

const Background = require('./image/Coffee');

const LanguageContext = createContext({
    currentLanguage: 'English',
    changeLanguage: (newLanguage: string) => {
    }
});

const Language = ({children = {} as ReactNode}) => {
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

const Gallery = ({mobileQuery = '', images = [{src: '', name: ''}]}) => (
    <div css={{
        display: 'inline-block',
        position: 'relative',
        float: 'left',
        width: '22rem',
        height: '100%',
        marginRight: '1rem',
        [mobileQuery]: {
            float: 'none',
            width: '100%',
            height: '17rem',
            marginRight: 0
        }
    }}>
        <div css={{
            position: 'absolute',
            overflow: 'auto',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            [mobileQuery]: {
                whiteSpace: 'nowrap'
            }
        }}>
            {images.map(({src, name}) => (
                <button css={{
                    title: name,
                    display: 'block',
                    cursor: 'pointer',
                    textAlign: 'center',
                    width: '20rem',
                    height: '15rem',
                    marginBottom: '1rem',
                    fontSize: '2rem',
                    color: 'rgba(255, 255, 255, 0)',
                    boxShadow: '0 0 2px #d9890d, 0 0 4px #f9ab0d',
                    border: 'solid 1px #ffffff',
                    backgroundImage: `url(${src})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: '#000000',
                    '&:hover, &:active, &:focus': {
                        border: 'solid 1px #f9ab0d',
                        color: '#ffffff',
                        textShadow: '0 0 2px #d9890d, 0 0 4px #f9ab0d'
                    },
                    [mobileQuery]: {
                        display: 'inline-block',
                        marginRight: '1rem',
                        marginBottom: 0
                    }
                }}>
                    {name}
                </button>
            ))}
        </div>
    </div>
);

const Project = ({mobileQuery = '', children = {} as ReactNode}) => (
    <div css={{
        display: 'inline-block',
        position: 'relative',
        float: 'right',
        width: 'calc(100% - 23rem)',
        height: '100%',
        [mobileQuery]: {
            float: 'none',
            width: '100%',
            height: 'calc(100% - 18rem)',
            marginBottom: '1rem'
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
            {children}
        </div>
    </div>
);

const Title = ({url = '', children = {} as ReactNode}) => (
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

const Description = ({children = {} as ReactNode}) => (
    <div css={{
        width: '100%'
    }}>
        {children}
    </div>
);

export const ProjectApp = () => {
    const mobileQuery = '@media screen and (max-width: 768px)';

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
            <Language>
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
                    <Project mobileQuery={mobileQuery}>
                        <Title url={'https://github.com/Avantgarde95/PaintTalk'}>PaintTalk</Title>
                        <Description>
                            <Korean>
                                자연어를 이용한 그림 그리기
                            </Korean>
                            <English>
                                Draw a picture by using natural language
                            </English>
                        </Description>
                    </Project>
                    <Gallery mobileQuery={mobileQuery} images={[
                        {src: require('./image/PaintTalk'), name: 'PaintTalk'},
                        {src: require('./image/Image2Term'), name: 'Image2Term'},
                        {src: require('./image/ArchiPi4Web'), name: 'archipi-web'}
                    ]}/>
                </div>
            </Language>
        </div>
    );
};
