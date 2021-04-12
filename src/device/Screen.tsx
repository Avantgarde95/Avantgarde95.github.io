import * as React from 'react';
import { ReactNode } from 'react';
import { css, keyframes } from '@emotion/css';
import * as DefaultBackground from './image/Background.png';

const backgroundAnimation = keyframes({
    '0%': {
        opacity: 1
    },
    '50%': {
        opacity: 0.2
    },
    '100%': {
        opacity: 1
    }
});

export const Screen = ({
    background = null as string | null,
    children = null as ReactNode
}) => (
    <div className={css({
        position: 'relative',
        zIndex: 0,
        overflowY: 'auto',
        width: '100%',
        height: 'calc(100% - 4.5rem)',
        '&:after': {
            content: '""',
            zIndex: -1,
            backgroundImage: `url(${(background === null) ? DefaultBackground : background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            top: 0,
            left: 0,
            position: 'absolute',
            width: '100%',
            height: '100%',
            animation: `${backgroundAnimation} 5s infinite`
        }
    })}>
        {children}
    </div>
);
