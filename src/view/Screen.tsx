/** @jsx jsx */

import * as React from 'react';
import {jsx} from '@emotion/core';

const ScreenBackground = require('../image/ScreenBackground');

export const Screen: React.FC = props => (
    <div css={{
        background: `#000000 url(${ScreenBackground}) no-repeat center`,
        overflowY: 'auto',
        width: '100%',
        height: 'calc(100% - 4.5rem)'
    }}>
        {props.children}
    </div>
);
