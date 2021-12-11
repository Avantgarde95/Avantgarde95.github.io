import React from 'react';

import { Language } from 'store/Language';
import { useStoreSelector } from 'store/Store';

/**
 * AppName props.
 */
interface Props {
    nameMap: Record<Language, string>;
}

/**
 * Component for displaying the name of each app
 * according to the current language.
 */
export const AppName = ({ nameMap }: Props) => {
    const currentLanguage = useStoreSelector(state => state.language.currentLanguage);

    return <>{nameMap[currentLanguage]}</>;
};
