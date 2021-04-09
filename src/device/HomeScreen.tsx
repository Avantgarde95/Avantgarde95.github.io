import * as React from 'react';
import { ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { css, keyframes } from '@emotion/css';
import { Screen } from './Screen';
import { Icon } from '../common/Icon';
import { English, Korean, LanguageContext } from '../common/Language';
import { apps } from './Apps';

const Button = ({
    title = '',
    path = '',
    color = '#ffffff',
    children = null as ReactNode
}) => {
    const navigate = useNavigate();

    const buttonStyle = css({
        display: 'inline-block',
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
        backgroundColor: '#ffffff',
        transition: 'all 0.1s',
        '&:hover, &:active, &:focus': {
            transform: 'scale(0.85)'
        }
    });

    if (!path.startsWith('http')) {
        return (
            <button
                className={css([buttonStyle, {
                    color: color
                }])}
                title={title}
                onClick={() => {
                    navigate(path);
                }}
            >
                {children}
            </button>
        );
    } else {
        return (
            <a
                className={css([buttonStyle, {
                    color: color
                }])}
                title={title}
                tabIndex={0}
                target={'_blank'}
                rel={'noopener noreferrer'}
                href={path}
            >
                {children}
            </a>
        );
    }
};

const Name = ({ children = null as ReactNode }) => (
    <div className={css({
        textAlign: 'center',
        margin: '1rem auto auto auto',
        color: '#ffffff'
    })}>
        {children}
    </div>
);

const appAnimation = keyframes({
    '0%': {
        transform: 'scale(0.5)'
    },
    '100%': {
        transform: 'scale(1.0)'
    }
});

const App = ({
    width = 0,
    height = 0,
    children = null as ReactNode
}) => (
    <div className={css({
        display: 'inline-block',
        boxSizing: 'border-box',
        width: `${width}rem`,
        height: `${height}rem`,
        paddingTop: '1rem',
        webkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
        animation: `${appAnimation} 0.3s`
    })}>
        {children}
    </div>
);

const Placeholder = ({
    width = 0,
    height = 0,
    children = null as ReactNode
}) => (
    <div className={css({
        display: 'inline-block',
        width: `${width}rem`,
        height: `${height}rem`
    })}>
        {children}
    </div>
);

export const HomeScreen = ({
    appWidth = 8,
    appHeight = 8,
    maxAppsPerLine = 5
}) => {
    const { currentLanguage } = useContext(LanguageContext);

    useEffect(() => {
        document.title = (currentLanguage === 'Korean') ? '홈' : 'Home';
    });

    return (
        <Screen>
            <div className={css({
                textAlign: 'center',
                width: '100%',
                height: '100%'
            })}>
                <div className={css({
                    display: 'inline-block',
                    maxWidth: `${appWidth * maxAppsPerLine}rem`
                })}>
                    {apps.map(app => (
                        <App width={appWidth} height={appHeight}>
                            <Button title={app.englishName} path={app.path} color={app.color}>
                                <Icon definition={app.icon} />
                            </Button>
                            <Name>
                                <Korean>{app.koreanName}</Korean>
                                <English>{app.englishName}</English>
                            </Name>
                        </App>
                    ))}
                    {Array.apply(null, Array(maxAppsPerLine)).map(() => (
                        <Placeholder width={appWidth} height={appHeight} />
                    ))}
                </div>
            </div>
        </Screen>
    );
};
