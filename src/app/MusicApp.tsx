/** @jsx jsx */

import {jsx} from '@emotion/core';
import {createContext, Fragment, ReactNode, useContext, useEffect, useState} from 'react';

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

export const MusicApp = () => {
    useEffect(() => {
        document.title = 'Musics';
    });

    return (
        <div css={{
            color: '#ffffff'
        }}>
            Hello!
        </div>
    );
};
