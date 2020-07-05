/** @jsx jsx */

import * as React from 'react';
import {jsx} from '@emotion/core';
import {faWifi} from '@fortawesome/free-solid-svg-icons/faWifi';
import {faSignal} from '@fortawesome/free-solid-svg-icons/faSignal';
import {faBatteryFull} from '@fortawesome/free-solid-svg-icons/faBatteryFull';
import {Icon} from './Icon';
import {AMPM, Clock, Hour, Minute} from './Clock';

const LeftArea: React.FC = props => (
    <div css={{
        float: 'left',
        height: '100%'
    }}>
        {props.children}
    </div>
);

const RightArea: React.FC = props => (
    <div css={{
        float: 'right',
        height: '100%'
    }}>
        {props.children}
    </div>
);

const Block: React.FC = props => (
    <span css={{
        marginLeft: '0.2rem',
        marginRight: '0.2rem'
    }}>
        {props.children}
    </span>
);

export const StatusBar = () => (
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
            <Block><Clock><Hour/>:<Minute/> <AMPM/></Clock></Block>
        </RightArea>
    </div>
);
