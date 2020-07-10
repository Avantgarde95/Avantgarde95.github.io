/** @jsx jsx */

import {jsx} from '@emotion/core';
import {Screen} from './Screen';
import {Clock, Hour, Minute, Month, MonthDay, WeekDay} from './Clock';
import {useState} from 'react';

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

export const LockScreen = ({onDisappear = {} as () => void}) => {
    const [color, setColor] = useState('rgba(255, 255, 255, 1)');

    return (
        <Screen>
            <div
                css={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                    color: color,
                    transition: 'color 0.25s'
                }}
                onClick={() => {
                    setColor('rgba(255, 255, 255, 0)');
                    setTimeout(onDisappear, 250);
                }}
            >
                <Time1/>
                <Time2/>
                <div css={{
                    position: 'absolute',
                    textAlign: 'center',
                    bottom: '3rem',
                    width: '100%'
                }}>
                    Click anywhere to unlock
                </div>
            </div>
        </Screen>
    );
};
