import * as React from 'react';
import { createContext, ReactNode, useContext, useState } from 'react';

const allLanguages = ['Korean', 'English'] as const;

export type Language = typeof allLanguages[number];

export const LanguageContext = createContext({} as {
    currentLanguage: Language,
    changeLanguage: (value: Language) => any
});

export const LanguageProvider = ({ children = null as ReactNode }) => {
    const storedLanguage = localStorage.getItem('language');

    const defaultLanguage = ((storedLanguage === null) || (allLanguages as any).indexOf(storedLanguage) < 0)
        ? 'English'
        : storedLanguage;

    const [language, setLanguage] = useState<Language>(defaultLanguage as Language);

    return (
        <LanguageContext.Provider value={{
            currentLanguage: language,
            changeLanguage: (value: Language) => {
                setLanguage(value);
                localStorage.setItem('language', value);
            }
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const Korean = ({ children = null as ReactNode }) =>
    <>{useContext(LanguageContext).currentLanguage === 'Korean' && children}</>;

export const English = ({ children = null as ReactNode }) =>
    <>{useContext(LanguageContext).currentLanguage === 'English' && children}</>;
