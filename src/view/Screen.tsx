/** @jsx jsx */

import * as React from 'react';
import {jsx} from '@emotion/core';

const ScreenBackground = require('../image/ScreenBackground');

export const Screen: React.FC = props => (
    <div css={{
        background: `#000000 url(${ScreenBackground}) no-repeat center`,
        overflowY: 'hidden',
        width: '100%',
        height: 'calc(100% - 4.5rem)'
    }}>
        <div css={{
            overflowY: 'auto',
            width: '100%',
            height: '100%'
        }}>
            {props.children}
        </div>
    </div>
);
