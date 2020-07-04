/** @jsx jsx */

import * as React from 'react';
import {jsx} from '@emotion/core';

export const Screen: React.FC = props => (
    <div css={{
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
