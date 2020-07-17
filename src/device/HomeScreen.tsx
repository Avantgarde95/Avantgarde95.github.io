/** @jsx jsx */

import {jsx} from '@emotion/core';
import {ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import {faIdCard} from '@fortawesome/free-solid-svg-icons/faIdCard';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons/faFileAlt';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons/faNewspaper';
import {faGamepad} from '@fortawesome/free-solid-svg-icons/faGamepad';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import {Screen} from './Screen';
import {Icon} from './Icon';

const Button = (
    {
        title = '',
        path = '',
        color = '#ffffff',
        children = {} as ReactNode
    }
) => {
    const navigate = useNavigate();

    return (
        <button
            css={{
                cursor: 'pointer',
                textAlign: 'center',
                verticalAlign: 'middle',
                width: '4rem',
                height: '4rem',
                margin: 'auto',
                border: 'none',
                borderRadius: '1rem',
                lineHeight: '4rem',
                fontSize: '2.5rem',
                color: color,
                backgroundColor: '#ffffff',
                transition: 'all 0.1s',
                '&:hover, &:active, &:focus': {
                    transform: 'scale(0.85)'
                }
            }}
            title={title}
            onClick={() => {
                navigate(path);
            }}
        >
            {children}
        </button>
    );
};

const Name = ({children = {} as ReactNode}) => (
    <div css={{
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
    {name: 'About', path: '/about', icon: faIdCard, color: '#007aeb'},
    {name: 'CV', path: '/cv', icon: faFileAlt, color: '#aaaaaa'},
    {name: 'Blog', path: '/blog', icon: faNewspaper, color: '#677963'},
    {name: 'Projects', path: '/project', icon: faLaptopCode, color: '#876766'},
    {name: 'Games', path: '/game', icon: faGamepad, color: '#444957'}
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
                        <Button title={app.name} path={app.path} color={app.color}>
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
