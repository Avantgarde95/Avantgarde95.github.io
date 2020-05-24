/** @jsx jsx */

import * as React from 'react';
import {jsx} from "@emotion/core";
import {Icon} from './Icon';
import {faWifi} from '@fortawesome/free-solid-svg-icons/faWifi';

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
        </RightArea>
    </div>
);
