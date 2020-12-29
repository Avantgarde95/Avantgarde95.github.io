/** @jsx jsx */

import {jsx} from '@emotion/core';
import {ReactNode} from 'react';

const Background = require('./image/Background');

export const Screen = ({children = null as ReactNode}) => (
    <div css={{
        background: `#000000 url(${Background}) no-repeat center`,
        overflowY: 'auto',
        width: '100%',
        height: 'calc(100% - 4.5rem)'
    }}>
        {children}
    </div>
);
