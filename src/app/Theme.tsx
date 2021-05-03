import * as React from 'react';
import { createContext, ReactNode } from 'react';
import { css, cx } from '@emotion/css';

export interface Theme {
    defaultColor: string;
    lightColor: string;
    darkColor: string;
    textStyle: string;
    boxStyle: string;
    highlightStyle: string;
}

export const ThemeContext = createContext({} as Theme);

export const ThemeProvider = ({
    defaultColor = '#ffffff',
    lightColor = '#ffffff',
    darkColor = '#ffffff',
    useNeon = true,
    children = null as ReactNode
}) => {
    const neon = `0 0 2px ${darkColor}, 0 0 4px ${lightColor}`;

    return (
        <ThemeContext.Provider value={{
            defaultColor: defaultColor,
            lightColor: lightColor,
            darkColor: darkColor,
            textStyle: cx([
                css({
                    color: defaultColor
                }),
                useNeon && css({
                    textShadow: neon
                })
            ]),
            boxStyle: cx([
                css({
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    border: `solid 1px ${defaultColor}`,
                    borderRadius: 0
                }),
                useNeon && css({
                    boxShadow: neon
                })
            ]),
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
