/** @jsx jsx */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Global, jsx} from '@emotion/core';
import {Phone} from './view/Phone';

ReactDOM.render((
    <React.Fragment>
        <Global styles={{
            html: {
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                fontSize: '16px',
                fontFamily: 'sans-serif'
            },
            body: {
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0
            }
        }}/>
        <Phone/>
    </React.Fragment>
), document.body);
