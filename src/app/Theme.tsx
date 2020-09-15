/** @jsx jsx */

import {css, jsx} from '@emotion/core';

export function generateTheme(
    {
        defaultColor = '#ffffff',
        lightColor = '#ffffff',
        darkColor = '#ffffff'
    }
) {
    const neon = `0 0 2px ${darkColor}, 0 0 4px ${lightColor}`;

    return {
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
    };
}
