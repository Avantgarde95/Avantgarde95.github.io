/** @jsx jsx */

import {jsx} from '@emotion/core';
import {ReactNode} from 'react';
import {faWifi} from '@fortawesome/free-solid-svg-icons/faWifi';
import {faSignal} from '@fortawesome/free-solid-svg-icons/faSignal';
import {faBatteryFull} from '@fortawesome/free-solid-svg-icons/faBatteryFull';
import {Icon} from './Icon';
import {AMPM, Hour, Minute, TimeProvider} from './Time';

const LeftArea = ({children = {} as ReactNode}) => (
    <div css={{
        float: 'left',
        height: '100%'
    }}>
        {children}
    </div>
);

const RightArea = ({children = {} as ReactNode}) => (
    <div css={{
        float: 'right',
        height: '100%'
    }}>
        {children}
    </div>
);

const Block = ({children = {} as ReactNode}) => (
    <span css={{
        marginLeft: '0.2rem',
        marginRight: '0.2rem'
    }}>
        {children}
    </span>
);

export const StatusBar = ({showTime = true}) => (
    <div css={{
        boxSizing: 'border-box',
        width: '100%',
        height: '2rem',
        paddingLeft: '0.3rem',
        paddingRight: '0.3rem',
        lineHeight: '2rem',
        color: '#ffffff'
    }}>
        <LeftArea>
            <Block>MyPhone</Block>
        </LeftArea>
        <RightArea>
            <Block><Icon definition={faWifi}/></Block>
            <Block><Icon definition={faSignal}/></Block>
            <Block><Icon definition={faBatteryFull}/></Block>
            {showTime && <Block><TimeProvider><Hour/>:<Minute/> <AMPM/></TimeProvider></Block>}
        </RightArea>
    </div>
);
