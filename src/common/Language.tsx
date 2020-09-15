/** @jsx jsx */

import {jsx} from '@emotion/core';
import {createContext, Fragment, ReactNode, useContext, useState} from 'react';

export type Language = 'Korean' | 'English';

export const LanguageContext = createContext({} as {
    currentLanguage: Language,
    changeLanguage: (value: Language) => any
});

export const LanguageProvider = ({children = {} as ReactNode}) => {
    const [language, setLanguage] = useState<Language>('English');

    return (
        <LanguageContext.Provider value={{
            currentLanguage: language,
            changeLanguage: (value: Language) => {
                setLanguage(value);
            }
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const Korean = ({children = {} as ReactNode}) => (
    <Fragment>
        {useContext(LanguageContext).currentLanguage === 'Korean' && children}
    </Fragment>
);

export const English = ({children = {} as ReactNode}) => (
    <Fragment>
        {useContext(LanguageContext).currentLanguage === 'English' && children}
    </Fragment>
);
