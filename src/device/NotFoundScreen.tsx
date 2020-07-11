/** @jsx jsx */

import {jsx, keyframes} from '@emotion/core';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faSadTear} from '@fortawesome/free-solid-svg-icons/faSadTear';
import {Screen} from './Screen';
import {Icon} from './Icon';

const openingAnimation = keyframes({
    from: {
        opacity: 0.5
    },
    to: {
        opacity: 1
    }
});

export const NotFoundScreen = () => (
    <Screen>
        <div css={{
            display: 'table',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            color: '#ffffff',
            backgroundColor: '#202020',
            animation: `${openingAnimation} 0.15s`
        }}>
        <span css={{
            display: 'table-cell',
            verticalAlign: 'middle'
        }}>
            <span css={{
                marginBottom: '2rem',
                fontSize: '1.5rem'
            }}>
                Page not found! Click <Icon definition={faHome}/> to return.
            </span>
            <br/>
            <span css={{
                fontSize: '4rem'
            }}>
                <Icon definition={faSadTear}/>
            </span>
        </span>
        </div>
    </Screen>
);
