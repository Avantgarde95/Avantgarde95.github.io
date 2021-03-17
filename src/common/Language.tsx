import * as React from 'react';
import { createContext, ReactNode, useContext, useState } from 'react';

export type Language = 'Korean' | 'English';

export const LanguageContext = createContext({} as {
    currentLanguage: Language,
    changeLanguage: (value: Language) => any
});

export const LanguageProvider = ({ children = null as ReactNode }) => {
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

export const Korean = ({ children = null as ReactNode }) =>
    <>{useContext(LanguageContext).currentLanguage === 'Korean' && children}</>;

export const English = ({ children = null as ReactNode }) =>
    <>{useContext(LanguageContext).currentLanguage === 'English' && children}</>;
