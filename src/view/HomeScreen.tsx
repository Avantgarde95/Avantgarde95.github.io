/** @jsx jsx */

import * as React from 'react';
import {jsx} from '@emotion/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faIdCard} from '@fortawesome/free-solid-svg-icons/faIdCard';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons/faFileAlt';
import {faFlask} from '@fortawesome/free-solid-svg-icons/faFlask';
import {Screen} from './Screen';
import {Icon} from './Icon';

const Button: React.FC<{ color: string }> = props => (
    <div css={{
        textAlign: 'center',
        verticalAlign: 'middle',
        width: '4rem',
        height: '4rem',
        margin: 'auto',
        borderRadius: '1rem',
        lineHeight: '4rem',
        fontSize: '2.5rem',
        color: props.color,
        backgroundColor: '#ffffff',
        transition: 'all 0.1s',
        '&:hover, &:active': {
            transform: 'scale(0.85)'
        }
    }}>
        {props.children}
    </div>
);

const Name: React.FC = props => (
    <div css={{
        userSelect: 'none',
        textAlign: 'center',
        margin: '1rem auto auto auto',
        color: '#ffffff'
    }}>
        {props.children}
    </div>
);

const App: React.FC = props => (
    <div css={{
        boxSizing: 'border-box',
        cursor: 'pointer',
        webkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
        width: '8rem',
        height: '8rem',
        paddingTop: '1rem'
    }}>
        {props.children}
    </div>
);

const appInfos: {
    name: string,
    path: string,
    icon: IconDefinition,
    color: string
}[] = [
    {name: 'About', path: '/About', icon: faIdCard, color: '#afb029'},
    {name: 'CV', path: '/CV', icon: faFileAlt, color: '#8d9e9d'},
    {name: 'Lab', path: '/Lab', icon: faFlask, color: '#876766'}
];

export const HomeScreen = () => (
    <Screen>
        {appInfos.map(info => (
            <App>
                <Button color={info.color}>
                    <Icon definition={info.icon}/>
                </Button>
                <Name>{info.name}</Name>
            </App>
        ))}
    </Screen>
);
