/** @jsx jsx */

import {css, jsx, SerializedStyles} from '@emotion/core';
import {createContext, ReactNode} from 'react';

export interface Theme {
    defaultColor: string;
    lightColor: string;
    darkColor: string;
    textStyle: SerializedStyles;
    boxStyle: SerializedStyles;
    highlightStyle: SerializedStyles;
}

export const ThemeContext = createContext({} as Theme);

export const ThemeProvider = (
    {
        defaultColor = '#ffffff',
        lightColor = '#ffffff',
        darkColor = '#ffffff',
        children = {} as ReactNode
    }
) => {
    const neon = `0 0 2px ${darkColor}, 0 0 4px ${lightColor}`;

    return (
        <ThemeContext.Provider value={{
            defaultColor: defaultColor,
            lightColor: lightColor,
            darkColor: darkColor,
            textStyle: css({
                color: defaultColor,
                textShadow: neon,
            }),
            boxStyle: css({
                boxShadow: neon,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                border: `solid 1px ${defaultColor}`,
                borderRadius: 0
            }),
            highlightStyle: css({
                '&:hover, &:active, &:focus': {
                    color: lightColor,
                    border: `solid 1px ${lightColor}`
                }
            })
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
