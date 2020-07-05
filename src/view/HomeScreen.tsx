/** @jsx jsx */

import {jsx} from '@emotion/core';
import {ReactNode} from 'react';
import {faIdCard} from '@fortawesome/free-solid-svg-icons/faIdCard';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons/faFileAlt';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons/faNewspaper';
import {faFlask} from '@fortawesome/free-solid-svg-icons/faFlask';
import {faCode} from '@fortawesome/free-solid-svg-icons/faCode';
import {Screen} from './Screen';
import {Icon} from './Icon';

const Button = (
    {
        color = '#ffffff',
        children = {} as ReactNode
    }
) => (
    <div css={{
        textAlign: 'center',
        verticalAlign: 'middle',
        width: '4rem',
        height: '4rem',
        margin: 'auto',
        borderRadius: '1rem',
        lineHeight: '4rem',
        fontSize: '2.5rem',
        color: color,
        backgroundColor: '#ffffff',
        transition: 'all 0.1s',
        '&:hover, &:active': {
            transform: 'scale(0.85)'
        }
    }}>
        {children}
    </div>
);

const Name = ({children = {} as ReactNode}) => (
    <div css={{
        userSelect: 'none',
        textAlign: 'center',
        margin: '1rem auto auto auto',
        color: '#ffffff'
    }}>
        {children}
    </div>
);

const App = (
    {
        width = 0,
        height = 0,
        children = {} as ReactNode
    }
) => (
    <div css={{
        display: 'inline-block',
        boxSizing: 'border-box',
        cursor: 'pointer',
        width: `${width}rem`,
        height: `${height}rem`,
        paddingTop: '1rem',
        webkitTapHighlightColor: 'rgba(255, 255, 255, 0)'
    }}>
        {children}
    </div>
);

const Placeholder = (
    {
        width = 0,
        height = 0,
        children = {} as ReactNode
    }
) => (
    <div css={{
        display: 'inline-block',
        width: `${width}rem`,
        height: `${height}rem`
    }}>
        {children}
    </div>
);

const apps = [
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
