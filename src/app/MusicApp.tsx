/** @jsx jsx */

import {jsx} from '@emotion/core';
import {ReactNode, useContext} from 'react';
import {App} from './App';
import {ThemeContext, ThemeProvider} from './Theme';
import {English, Korean} from '../common/Language';
import {musics} from './Musics';

const Background = require('./image/EighthNotes');

const Link = ({url = '', children = {} as ReactNode}) => {
    const theme = useContext(ThemeContext);

    return (
        <a
            css={{
                wordBreak: 'break-all',
                color: theme.lightColor,
                '&:hover, &:active': {
                    color: theme.darkColor
                }
            }}
            target={'_blank'}
            rel={'noopener noreferrer'}
            href={url}
        >
            {children}
        </a>
    );
}

const Video = ({id = ''}) => {
    const theme = useContext(ThemeContext);

    return (
        <div css={{
            width: '100%',
            maxWidth: '640px',
            marginBottom: '1.5rem'
        }}>
            <div css={{
                position: 'relative',
                height: 0,
                paddingBottom: '56.25%'
            }}>
                <iframe
                    css={[theme.boxStyle, theme.highlightStyle, {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }]}
                    frameBorder={0}
                    allowFullScreen={true}
                    src={`https://www.youtube.com/embed/${id}`}
                />
            </div>
        </div>
    );
}

const Content = () => {
    const theme = useContext(ThemeContext);

    return (
        <div css={[theme.textStyle, {
            overflowY: 'auto',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            padding: '1.5rem',
            background: `#000000 url(${Background}) no-repeat center`
        }]}>
            <div css={{
                fontWeight: 'bold',
                fontSize: '1.8rem',
                lineHeight: 1,
                marginBottom: '1.5rem'
            }}>
                <Korean>음악</Korean>
                <English>Musics</English>
            </div>
            <div css={{
                marginBottom: '1.5rem'
            }}>
                <Korean>
                    영상들을 불러오는데에 시간이 걸리니 잠시 기다려주세요.
                    모든 영상들을 보려면 <Link url={'https://www.youtube.com/user/Scottparkmusic'}>유튜브</Link>를 방문해주세요.
                </Korean>
                <English>
                    It takes some time to load the videos, so please wait a moment.
                    To see the all videos, visit <Link
                    url={'https://www.youtube.com/user/Scottparkmusic'}>YouTube</Link>.
                </English>
            </div>
            {musics.map(id => <Video id={id}/>)}
        </div>
    );
};

export const MusicApp = () => (
    <App koreanTitle={'음악'} englishTitle={'Musics'}>
        <ThemeProvider lightColor={'#77ff00'} darkColor={'#21d948'}>
            <Content/>
        </ThemeProvider>
    </App>
);
