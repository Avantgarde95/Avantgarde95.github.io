import * as React from 'react';
import { ReactNode } from 'react';
import { css } from '@emotion/css';

const Background = require('./image/Background');

export const Screen = ({ children = null as ReactNode }) => (
    <div className={css({
        background: `#000000 url(${Background}) no-repeat center`,
        overflowY: 'auto',
        width: '100%',
        height: 'calc(100% - 4.5rem)'
    })}>
        {children}
    </div>
);
