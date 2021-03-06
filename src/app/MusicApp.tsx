import * as React from 'react';
import { ReactNode, useContext, useState } from 'react';
import { css } from '@emotion/css';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons/faArrowAltCircleLeft';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons/faArrowAltCircleRight';
import { App } from './App';
import { ThemeContext, ThemeProvider } from './Theme';
import { English, Korean } from '../common/Language';
import { Icon } from '../common/Icon';
import { Link, YouTube } from './Common';
import * as Musics from './data/Musics.json';
import * as Background from './image/EighthNotes.png';

const Title = ({ url = '', children = null as ReactNode }) => (
    <Link
        className={css({
            display: 'inline-block',
            fontSize: '1.2rem',
            marginBottom: '1rem'
        })}
        url={url}
    >
        {children}
    </Link>
);

const Gallery = ({ ids = [] as string[] }) => {
    const theme = useContext(ThemeContext);
    const [index, setIndex] = useState(0);
    const disablePreviousButton = index <= 0;
    const disableNextButton = index >= ids.length - 1;

    return (
        <div className={css({
            width: '100%',
            maxWidth: '640px'
        })}>
            <YouTube id={ids[index]} />
            <div className={css({
                height: '3rem',
                marginTop: '1rem',
                marginBottom: '1rem'
            })}>
                <button
                    className={css({
                        float: 'left',
                        cursor: 'pointer',
                        fontSize: '2rem',
                        border: 'none',
                        color: disablePreviousButton ? '#444444' : theme.defaultColor,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        '&:hover, &:active, &:focus': disablePreviousButton ? {} : {
                            color: theme.lightColor
                        }
                    })}
                    disabled={disablePreviousButton}
                    onClick={() => {
                        if (!disablePreviousButton) {
                            setIndex(index - 1);
                        }
                    }}
                >
                    <Icon definition={faArrowAltCircleLeft} />
                </button>
                <button
                    className={css({
                        float: 'right',
                        cursor: 'pointer',
                        fontSize: '2rem',
                        border: 'none',
                        color: disableNextButton ? '#444444' : theme.defaultColor,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        '&:hover, &:active, &:focus': disableNextButton ? {} : {
                            color: theme.lightColor
                        }
                    })}
                    disabled={disableNextButton}
                    onClick={() => {
                        if (!disableNextButton) {
                            setIndex(index + 1);
                        }
                    }}
                >
                    <Icon definition={faArrowAltCircleRight} />
                </button>
            </div>
        </div>
    );
};

const Content = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={css([theme.textStyle, {
            overflowY: 'auto',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            padding: '1.5rem'
        }])}>
            <div className={css({
                fontWeight: 'bold',
                fontSize: '1.8rem',
                lineHeight: 1,
                marginBottom: '1.5rem'
            })}>
                <Korean>음악</Korean>
                <English>Musics</English>
            </div>
            <div className={css({
                marginBottom: '1.5rem'
            })}>
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
            <Title url={'https://www.youtube.com/watch?v=IcUeiHJpYms&list=PLosnnDHctFV1rm0K7jrSsQeCDBj04Eb70'}>
                <Korean>기타 연주들</Korean>
                <English>My guitar playings</English>
            </Title>
            <Gallery ids={Musics.myGuitarPlayings} />
            <Title url={'https://www.youtube.com/watch?v=UkFKk86VyOU&list=PLosnnDHctFV1_0yMUtQH830uaOg87c5J0'}>
                <Korean>피아노 연주들</Korean>
                <English>My piano playings</English>
            </Title>
            <Gallery ids={Musics.myPianoPlayings} />
            <Title url={'https://www.youtube.com/watch?v=dLUGYHSSOGQ&list=PLosnnDHctFV1iZeOtf4AzJMc2K6RTMCC1'}>
                <Korean>작곡 / 편곡</Korean>
                <English>Compositions / Arrangements</English>
            </Title>
            <Gallery ids={Musics.myPieces} />
        </div>
    );
};

export const MusicApp = () => (
    <App koreanTitle={'음악'} englishTitle={'Musics'} background={Background}>
        <ThemeProvider lightColor={'#77ff00'} darkColor={'#21d948'}>
            <Content />
        </ThemeProvider>
    </App>
);
