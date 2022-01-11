import React, { ReactNode } from 'react';

import { Language } from 'store/Language';
import { useStoreSelector } from 'store/Store';

/**
 * LanguagePicker props.
 */
interface LanguagePickerProps<T> {
    languageMap: Record<Language, T>;
}

/**
 * Pick the item corresponding to the current language from languageMap.
 */
export const LanguagePicker = <T,>({ languageMap }: LanguagePickerProps<T>) => {
    const currentLanguage = useStoreSelector(state => state.language.currentLanguage);
    return <>{languageMap[currentLanguage]}</>;
};

/**
 * LanguageFilter props.
 */
interface LanguageFilterProps {
    children: ReactNode;
}

/**
 * Shows the children when the its language is the same as the current language.
 */
const createLanguageFilter =
    (language: Language) =>
    ({ children }: LanguageFilterProps) => {
        const currentLanguage = useStoreSelector(state => state.language.currentLanguage);
        return <>{currentLanguage === language && children}</>;
    };

export const Korean = createLanguageFilter('Korean');
export const English = createLanguageFilter('English');
