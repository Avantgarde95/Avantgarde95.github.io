import * as React from 'react';
import { ReactNode, useContext } from 'react';
import { css, cx, keyframes } from '@emotion/css';
import { ThemeContext } from './Theme';

export const Link = ({
    url = '',
    className = '',
    children = null as ReactNode
}) => {
    const theme = useContext(ThemeContext);

    return (
        <a
            className={cx(
                css({
                    wordBreak: 'break-all',
                    color: theme.lightColor,
                    '&:hover, &:active': {
                        color: theme.darkColor
                    }
                }),
                className
            )}
            target={'_blank'}
            rel={'noopener noreferrer'}
            href={url}
        >
            {children}
        </a>
    );
};
