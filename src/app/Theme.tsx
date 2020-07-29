/** @jsx jsx */

import {css, jsx, SerializedStyles} from '@emotion/core';
import {createContext, ReactNode} from 'react';

export const ThemeContext = createContext({} as {
    defaultColor: string,
    lightColor: string,
    darkColor: string,
    textStyle: SerializedStyles,
    textButtonStyle: SerializedStyles,
    imageStyle: SerializedStyles
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
        textButtonStyle: css({
            color: defaultColor,
            textShadow: `0 0 2px ${darkColor}, 0 0 4px ${lightColor}`,
            boxShadow: `0 0 2px ${darkColor}, 0 0 4px ${lightColor}`,
            background: 'none',
            border: `solid 1px ${defaultColor}`,
            borderRadius: 0,
            '&:hover, &:active, &:focus': {
                border: `solid 1px ${lightColor}`,
                color: lightColor
            }
        }),
        imageStyle: css({
            boxShadow: `0 0 2px ${darkColor}, 0 0 4px ${lightColor}`,
            border: `solid 1px ${defaultColor}`,
        })
    }}>
        {children}
    </ThemeContext.Provider>
);
