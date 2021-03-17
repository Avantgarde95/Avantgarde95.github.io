import * as React from 'react';
import { ReactNode, useContext, useEffect } from 'react';
import { css, keyframes } from '@emotion/css';
import { Screen } from '../device/Screen';
import { LanguageContext } from '../common/Language';

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
        children = null as ReactNode
    }
) => {
    const { currentLanguage } = useContext(LanguageContext);

    useEffect(() => {
        const title = (currentLanguage === 'Korean') ? koreanTitle : englishTitle;

        if (title.length > 0) {
            document.title = title;
        }
    });

    return (
        <Screen>
            <div className={css({
                width: '100%',
                height: '100%',
                animation: `${openingAnimation} 0.15s`
            })}>
                {children}
            </div>
        </Screen>
    );
};
