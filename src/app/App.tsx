/** @jsx jsx */

import {jsx, keyframes} from '@emotion/core';
import {ReactNode, useContext, useEffect} from 'react';
import {Screen} from '../device/Screen';
import {LanguageContext} from '../common/Language';

const openingAnimation = keyframes({
    from: {
        opacity: 0.5
    },
    to: {
        opacity: 1
    }
});

export const App = (
    {
        koreanTitle = '',
        englishTitle = '',
        children = {} as ReactNode
    }
) => {
    const {currentLanguage} = useContext(LanguageContext);

    useEffect(() => {
        const title = (currentLanguage === 'Korean')
            ? koreanTitle
            : ((currentLanguage === 'English') ? englishTitle : '');

        if (title.length > 0) {
            document.title = title;
        }
    });

    return (
        <Screen>
            <div css={{
                width: '100%',
                height: '100%',
                animation: `${openingAnimation} 0.15s`
            }}>
                {children}
            </div>
        </Screen>
    );
};
