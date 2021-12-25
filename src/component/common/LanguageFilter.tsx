import React, { ReactNode } from 'react';

import { Language } from 'store/Language';
import { useStoreSelector } from 'store/Store';

/**
 * LanguageFilter props.
 */
interface Props {
    language: Language;
    children: ReactNode;
}

/**
 * Component for supporting multiple languages easily.
 * It renders the children only when (Props language) = (Current language).
 */
export const LanguageFilter = ({ language, children }: Props) => {
    const currentLanguage = useStoreSelector(state => state.language.currentLanguage);
    return <>{currentLanguage === language && children}</>;
};
