/** @jsx jsx */

import * as React from 'react';
import {jsx} from '@emotion/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faIdCard} from '@fortawesome/free-solid-svg-icons/faIdCard';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons/faFileAlt';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons/faNewspaper';
import {faFlask} from '@fortawesome/free-solid-svg-icons/faFlask';
import {faCode} from '@fortawesome/free-solid-svg-icons/faCode';
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

const App: React.FC<{ width: number, height: number }> = props => (
    <div css={{
        display: 'inline-block',
        boxSizing: 'border-box',
        cursor: 'pointer',
        width: `${props.width}rem`,
        height: `${props.height}rem`,
        paddingTop: '1rem',
        webkitTapHighlightColor: 'rgba(255, 255, 255, 0)'
    }}>
        {props.children}
    </div>
);

const Placeholder: React.FC<{ width: number, height: number }> = props => (
    <div css={{
        display: 'inline-block',
        width: `${props.width}rem`,
        height: `${props.width}rem`
    }}/>
);

const apps: {
    name: string,
    path: string,
    icon: IconDefinition,
    color: string
}[] = [
    {name: 'About', path: '/About', icon: faIdCard, color: '#afb029'},
    {name: 'CV', path: '/CV', icon: faFileAlt, color: '#8d9e9d'},
    {name: 'Articles', path: '/Articles', icon: faNewspaper, color: '#677963'},
    {name: 'Lab', path: '/Lab', icon: faFlask, color: '#876766'},
    {name: 'Code', path: '/Code', icon: faCode, color: '#444957'}
];

export const HomeScreen = (
    {
        appWidth = 8,
        appHeight = 8,
        maxAppsPerLine = 5
    }
) => (
    <Screen>
        <div css={{
            textAlign: 'center',
            width: '100%',
            height: '100%'
        }}>
            <div css={{
                display: 'inline-block',
                maxWidth: `${appWidth * maxAppsPerLine}rem`
            }}>
                {apps.map(app => (
                    <App width={appWidth} height={appHeight}>
                        <Button color={app.color}>
                            <Icon definition={app.icon}/>
                        </Button>
                        <Name>{app.name}</Name>
                    </App>
                ))}
                {Array.apply(null, Array(maxAppsPerLine)).map(() => (
                    <Placeholder width={appWidth} height={appHeight}/>
                ))}
            </div>
        </div>
    </Screen>
);
