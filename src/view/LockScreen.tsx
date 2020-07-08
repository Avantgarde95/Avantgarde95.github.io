/** @jsx jsx */

import {jsx} from '@emotion/core';
import {Screen} from './Screen';
import {Clock, Hour, Minute, Month, MonthDay, WeekDay} from './Clock';

const Time1 = () => (
    <div css={{
        textAlign: 'center',
        width: '100%',
        marginTop: '3rem',
        fontSize: '3rem'
    }}>
        <Clock><Hour/>:<Minute/></Clock>
    </div>
);

const Time2 = () => (
    <div css={{
        textAlign: 'center',
        width: '100%'
    }}>
        <Clock><WeekDay/>, <Month/> <MonthDay/></Clock>
    </div>
);

export const LockScreen = () => (
    <Screen>
        <div
            css={{
                position: 'relative',
                width: '100%',
                height: '100%',
                color: 'rgba(255, 255, 255, 1)'
            }}
            onClick={() => {

            }}
        >
            <Time1/>
            <Time2/>
            <div css={{
                position: 'absolute',
                textAlign: 'center',
                left: 0,
                right: 0,
                bottom: '5.5rem',
                width: '100%'
            }}>
                Click anywhere to unlock
            </div>
        </div>
    </Screen>
);
