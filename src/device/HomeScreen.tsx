import * as React from 'react';
import { ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { css, keyframes } from '@emotion/css';
import { faIdCard } from '@fortawesome/free-solid-svg-icons/faIdCard';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { Screen } from './Screen';
import { Icon } from '../common/Icon';
import { English, Korean, LanguageContext } from '../common/Language';

const Button = (
    {
        title = '',
        path = '',
        color = '#ffffff',
        children = null as ReactNode
    }
) => {
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

const App = (
    {
        width = 0,
        height = 0,
        children = null as ReactNode
    }
) => (
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

const Placeholder = (
    {
        width = 0,
        height = 0,
        children = null as ReactNode
    }
) => (
    <div className={css({
        display: 'inline-block',
        width: `${width}rem`,
        height: `${height}rem`
    })}>
        {children}
    </div>
);

const apps = [
    {
        koreanName: '소개',
        englishName: 'About',
        path: 'about',
        icon: faIdCard,
        color: '#007aeb'
    },
    {
        koreanName: '이력',
        englishName: 'CV',
        path: 'cv',
        icon: faFileAlt,
        color: '#aaaaaa'
    },
    {
        koreanName: '프로젝트',
        englishName: 'Projects',
        path: 'project',
        icon: faLaptopCode,
        color: '#876766'
    },
    {
        koreanName: '음악',
        englishName: 'Musics',
        path: 'music',
        icon: faMusic,
        color: '#1cb81d'
    },
    {
        koreanName: '블로그',
        englishName: 'Blog',
        path: 'https://Avantgarde95.github.io/blog',
        icon: faNewspaper,
        color: '#677963'
    },
    {
        koreanName: '코드',
        englishName: 'Code',
        path: 'https://github.com/Avantgarde95/Avantgarde95.github.io',
        icon: faCode,
        color: '#a4b353'
    },
    {
        koreanName: '깃허브',
        englishName: 'GitHub',
        path: 'https://github.com/Avantgarde95',
        icon: faGithub,
        color: '#211f1f'
    },
    {
        koreanName: '유튜브',
        englishName: 'YouTube',
        path: 'https://www.youtube.com/user/Scottparkmusic',
        icon: faYoutube,
        color: '#ff0000'
    },
    {
        koreanName: '페이스북',
        englishName: 'Facebook',
        path: 'https://www.facebook.com/s.ramanujan',
        icon: faFacebookSquare,
        color: '#3b5998'
    },
    {
        koreanName: '인스타그램',
        englishName: 'Instagram',
        path: 'https://www.instagram.com/hunminpark95',
        icon: faInstagram,
        color: '#c13584'
    }
];

export const HomeScreen = (
    {
        appWidth = 8,
        appHeight = 8,
        maxAppsPerLine = 5
    }
) => {
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
