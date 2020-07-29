/** @jsx jsx */

import {css, jsx, SerializedStyles} from '@emotion/core';
import {createContext, ReactNode} from 'react';

export const ThemeContext = createContext({} as {
    defaultColor: string,
    lightColor: string,
    darkColor: string,
    boxStyle: SerializedStyles,
    textStyle: SerializedStyles,
    highlightStyle: SerializedStyles
});

export const ThemeProvider = (
    {
        defaultColor = '#ffffff',
        lightColor = '#ffffff',
        darkColor = '#ffffff',
        children = {} as ReactNode
    }
) => (
    <ThemeContext.Provider value={{
        defaultColor: defaultColor,
        lightColor: lightColor,
        darkColor: darkColor,
        textStyle: css({
            color: defaultColor,
            textShadow: `0 0 2px ${darkColor}, 0 0 4px ${lightColor}`,
        }),
        boxStyle: css({
            boxShadow: `0 0 2px ${darkColor}, 0 0 4px ${lightColor}`,
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
