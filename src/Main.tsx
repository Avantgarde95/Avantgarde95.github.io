/** @jsx jsx */

import {Global, jsx} from '@emotion/core';
import {Fragment} from 'react';
import {render} from 'react-dom';
import {Phone} from './view/Phone';

render((
    <Fragment>
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
    </Fragment>
), document.body);
