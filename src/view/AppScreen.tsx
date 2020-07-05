/** @jsx jsx */

import {jsx, keyframes} from '@emotion/core';
import {ReactNode} from 'react';
import {Screen} from './Screen';

const openApp = keyframes({
    from: {
        opacity: 0.5
    },
    to: {
        opacity: 1
    }
});

export const AppScreen = ({children = {} as ReactNode}) => (
    <Screen>
        <div css={{
            width: '100%',
            height: '100%',
            animation: `${openApp} 0.15s`
        }}>
            {children}
        </div>
    </Screen>
);