import * as React from 'react';
import { ReactNode, useContext } from 'react';
import { css } from '@emotion/css';
import 'luminous-lightbox/dist/luminous-basic.min.css';
import { English, Korean } from '../common/Language';
import { App } from './App';
import { ThemeContext, ThemeProvider } from './Theme';
import { Link, ImagePreview, List, ListItem } from './Common';
import * as Background from './image/Guitar.png';

const Title = ({ children = null as ReactNode }) => (
    <div className={css({
        fontWeight: 'bold'
    })}>
        {children}
    </div>
);

const GalleryItem = ({ src = '', alt = '' }) => (
    <ImagePreview
        className={css({
            width: '12rem',
            height: '12rem',
            marginRight: '0.7rem',
            '&:last-child': {
                marginRight: 0
            }
        })}
        src={src}
        alt={alt}
    />
);

const Gallery = ({ images = [{ src: '', alt: '' }] }) => (
    <div className={css({
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        marginLeft: '1px',
        marginRight: '1px',
        marginBottom: '1.5rem'
    })}>
        {images.map(({ src, alt }) => <GalleryItem src={src} alt={alt} />)}
    </div>
);

const computerImages = [
    { src: require('./image/OpenGL.png'), alt: 'Real-time rendering (Rasterization)' },
    { src: require('./image/RayTracing.png'), alt: 'Real-time rendering (Ray tracing)' },
    { src: require('./image/HoloLens.png'), alt: 'Augmented reality (Microsoft HoloLens)' }
];

const musicImages = [
    { src: require('./image/Telecaster.jpg'), alt: 'My guitar' },
    { src: require('./image/Concert.jpg'), alt: 'My concert' },
    { src: require('./image/Sheet.png'), alt: 'My music' }
];

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
                <Korean>소개</Korean>
                <English>About</English>
            </div>
            <div className={css({
                marginBottom: '1.5rem'
            })}>
                <Korean>반가워요! 컴퓨터와 음악에 관심이 있습니다 :)</Korean>
                <English>Welcome! I'm interested in computers and music :)</English>
            </div>
            <Title>
                <Korean>관심사 (컴퓨터)</Korean>
                <English>Interests (Computer)</English>
            </Title>
            <List>
                <ListItem>
                    <Korean>
                        컴퓨터 그래픽스(CG), 특히 실시간 렌더링, 3D 모델링,
                        증강현실(AR), 가상현실(VR)에 관심이 있습니다.
                    </Korean>
                    <English>
                        I'm interested in computer graphics,
                        especially real-time rendering, 3D modeling,
                        augmented reality(AR), and virtual reality(VR).
                    </English>
                </ListItem>
                <ListItem>
                    <Korean>
                        웹 개발에도 관심이 있습니다.
                    </Korean>
                    <English>
                        I'm also interested in web development.
                    </English>
                </ListItem>
            </List>
            <Gallery images={computerImages} />
            <Title>
                <Korean>관심사 (음악)</Korean>
                <English>Interests (Music)</English>
            </Title>
            <List>
                <ListItem>
                    <Korean>
                        취미로 피아노와 기타를 연주합니다.
                        가끔씩 작곡/편곡에도 도전합니다.
                    </Korean>
                    <English>
                        I play piano and guitar as a hobby.
                        Sometimes I also try to compose and arrange music.
                    </English>
                </ListItem>
                <ListItem>
                    <Korean>
                        헤비메탈, 재즈, 클래식 음악을 즐겨 듣습니다.
                        다른 장르의 음악들도 종종 들어요.
                    </Korean>
                    <English>
                        I like hearing heavy metal, jazz, and classical music.
                        I also listen to music from other genres.
                    </English>
                </ListItem>
            </List>
            <Gallery images={musicImages} />
            <Title>
                <Korean>연락처</Korean>
                <English>Contacts</English>
            </Title>
            <List>
                <ListItem>
                    <Korean>이메일</Korean>
                    <English>Email</English>
                    :&nbsp;
                    <Link url={'mailto:mathematicianscott@gmail.com'}>mathematicianscott@gmail.com</Link>
                </ListItem>
            </List>
        </div>
    );
};

export const AboutApp = () => (
    <App koreanTitle={'소개'} englishTitle={'About'} background={Background}>
        <ThemeProvider lightColor={'#00e9f9'} darkColor={'#0090ff'}>
            <Content />
        </ThemeProvider>
    </App>
);
