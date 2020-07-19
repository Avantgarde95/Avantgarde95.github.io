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

const Project = ({children = {} as ReactNode}) => (
    <div css={{
        width: '100%'
    }}>
        {children}
    </div>
);

const Gallery = ({images = [{src: '', alt: ''}]}) => (
    <div css={{}}>
        {images.map(({src, alt}) => (
            <div css={{
                display: 'inline-block',
                textAlign: 'center',
                width: '16rem',
                height: '12rem',
                marginRight: '1.5rem',
                marginBottom: '1.5rem',
                boxShadow: '0 0 2px #d9890d, 0 0 4px #f9ab0d',
                border: 'solid 1px #ffffff',
                backgroundColor: '#000000'
            }}>
                <img
                    css={{
                        height: '100%'
                    }}
                    src={src}
                    alt={alt}
                    title={alt}
                />
            </div>
        ))}
    </div>
);

const Screenshot = ({src = '', alt = ''}) => (
    <img
        css={{
            width: '20rem',
            marginRight: '1.5rem',
            marginBottom: '1.5rem',
            boxShadow: '0 0 2px #d9890d, 0 0 4px #f9ab0d',
            border: 'solid 1px #ffffff'
        }}
        src={src}
        alt={alt}
        title={alt}
    />
);

const Paragraph = ({children = {} as ReactNode}) => (
    <div css={{
        display: 'inline-block',
        verticalAlign: 'top',
        wordBreak: 'break-all',
        width: '25rem',
        marginBottom: '1.5rem',
        '@media screen and (max-width: 48rem)': {
            width: '100%'
        }
    }}>
        {children}
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

export const ProjectApp = () => (
    <div css={{
        overflowY: 'auto',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        padding: '1.5rem',
        color: '#ffffff',
        textShadow: '0 0 2px #d9890d, 0 0 4px #f9ab0d',
        background: `#000000 url(${Background}) no-repeat center`
    }}>
        <Language>
            <Name>Projects</Name>
            <div css={{
                marginBottom: '1.5rem'
            }}>
                <LanguageButton language={'Korean'}>한국어</LanguageButton>
                <LanguageButton language={'English'}>English</LanguageButton>
            </div>
            <Gallery images={[
                {src: require('./image/ArchiPi4Web'), alt: 'archipi-web'},
                {src: require('./image/ArchiPi4Web'), alt: 'archipi-web'},
                {src: require('./image/ArchiPi4Web'), alt: 'archipi-web'},
                {src: require('./image/ArchiPi4Web'), alt: 'archipi-web'},
                {src: require('./image/ArchiPi4Web'), alt: 'archipi-web'},
                {src: require('./image/ArchiPi4Web'), alt: 'archipi-web'},
                {src: require('./image/Image2Term'), alt: 'Image2Term'}
            ]}/>
        </Language>
    </div>
);
