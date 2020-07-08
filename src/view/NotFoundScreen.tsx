/** @jsx jsx */

import {jsx} from '@emotion/core';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {Screen} from './Screen';
import {Icon} from './Icon';

export const NotFoundScreen = () => (
    <Screen>
        <div css={{
            display: 'table',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#202020'
        }}>
            <span css={{
                display: 'table-cell',
                verticalAlign: 'middle',
                fontSize: '1.5rem',
                color: '#ffffff'
            }}>
            Page not found :( Click <Icon definition={faHome}/> to return.
            </span>
        </div>
    </Screen>
);
