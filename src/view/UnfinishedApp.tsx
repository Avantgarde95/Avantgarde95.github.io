/** @jsx jsx */

import {jsx} from '@emotion/core';
import {faWrench} from '@fortawesome/free-solid-svg-icons/faWrench';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {Icon} from './Icon';

export const UnfinishedApp = () => (
    <div css={{
        display: 'table',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        color: '#ffffff',
        backgroundColor: '#202020'
    }}>
        <span css={{
            display: 'table-cell',
            verticalAlign: 'middle'
        }}>
            <span css={{
                marginBottom: '2rem',
                fontSize: '1.5rem'
            }}>
                Under construction! Click <Icon definition={faHome}/> to return.
            </span>
            <br/>
            <span css={{
                fontSize: '4rem'
            }}>
                <Icon definition={faWrench}/>
            </span>
        </span>
    </div>
);
