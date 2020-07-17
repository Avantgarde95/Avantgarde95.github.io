/** @jsx jsx */

import {jsx} from '@emotion/core';

const Background = require('./image/Coffee');

export const ProjectApp = () => (
    <div css={{
        width: '100%',
        height: '100%',
        background: `#000000 url(${Background}) no-repeat center`
    }}>

    </div>
);
