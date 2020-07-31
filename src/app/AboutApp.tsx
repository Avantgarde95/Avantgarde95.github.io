/** @jsx jsx */

import {jsx} from '@emotion/core';
import {ReactNode, useContext, useEffect} from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {Icon} from '../device/Icon';
import {English, Korean} from '../common/Language';
import {ThemeContext, ThemeProvider} from './Theme';

const Background = require('./image/Guitar');

const Name = ({children = {} as ReactNode}) => (
    <div css={{
        fontWeight: 'bold',
        fontSize: '1.8rem',
        marginBottom: '1.3rem'
    }}>
        {children}
    </div>
);

const Title = ({children = {} as ReactNode}) => (
    <div css={{
        font: '1.5rem',
        fontWeight: 'bold'
    }}>
        {children}
    </div>
);

const List = ({children = {} as ReactNode}) => (
    <ul css={{
        listStyle: 'none',
        paddingLeft: 0,
        marginBottom: '1.5rem'
    }}>
        {children}
    </ul>
);

const Item = ({children = {} as ReactNode}) => (
    <li>
        <div css={{
            display: 'inline-block',
            marginLeft: '0.5rem',
            width: '1.5rem',
            height: '0.9rem',
            fontSize: '0.6rem'
        }}>
            <Icon definition={faStar}/>
        </div>
        <div css={{
            display: 'inline-block',
            verticalAlign: 'top',
            width: 'calc(100% - 2rem)'
        }}>
            {children}
        </div>
    </li>
);

const Link = ({url = '', children = {} as ReactNode}) => (
    <a
        css={{
            wordBreak: 'break-all',
            color: '#00e9f9',
            '&:hover, &:active': {
                color: '#0090ff'
            }
        }}
        target={'_blank'}
        rel={'noopener noreferrer'}
        href={url}
    >
        {children}
    </a>
);

const Gallery = ({images = [{src: '', alt: ''}]}) => {
    const {boxStyle} = useContext(ThemeContext);

    return (
        <div css={{
            overflowX: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            marginLeft: '1px',
            marginRight: '1px',
            marginBottom: '1.5rem'
        }}>
            {images.map(({src, alt}) => (
                <img
                    css={[boxStyle, {
                        width: '12rem',
                        height: '12rem',
                        marginRight: '0.7rem',
                        '&:last-child': {
                            marginRight: 0
                        }
                    }]}
                    src={src}
                    alt={alt}
                    title={alt}
                />
            ))}
        </div>
    );
};

const computerImages = [
    {src: require('./image/OpenGL'), alt: 'Real-time rendering (Rasterization)'},
    {src: require('./image/RayTracing'), alt: 'Real-time rendering (Ray tracing)'},
    {src: require('./image/HoloLens'), alt: 'Augmented reality (Microsoft HoloLens)'}
];

const musicImages = [
    {src: require('./image/Telecaster'), alt: 'My guitar'},
    {src: require('./image/Concert'), alt: 'My concert'},
    {src: require('./image/Sheet'), alt: 'My music'}
];

const Content = () => {
    const {textStyle} = useContext(ThemeContext);

    return (
        <div css={[textStyle, {
            overflowY: 'auto',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            padding: '1.5rem',
            background: `#000000 url(${Background}) no-repeat center`
        }]}>
            <Name>Hunmin Park</Name>
            <Title>
                <Korean>소개</Korean>
                <English>About</English>
            </Title>
            <List>
                <Item>
                    <Korean>반가워요! 컴퓨터와 음악에 관심이 있습니다 :)</Korean>
                    <English>Welcome! I'm interested in computers and music :)</English>
                </Item>
            </List>
            <Title>
                <Korean>관심사 (컴퓨터)</Korean>
                <English>Interests (Computer)</English>
            </Title>
            <List>
                <Item>
                    <Korean>컴퓨터 그래픽스(CG), 특히 실시간 렌더링, 3D 모델링, 증강현실(AR), 가상현실(VR)에 관심이 있습니다.</Korean>
                    <English>I'm interested in computer graphics, especially real-time rendeing, 3D modeling,
                        augmented
                        reality(AR), and virtual reality(VR).</English>
                </Item>
                <Item>
                    <Korean>
                        언젠가 CG를 활용하여 멋진 게임을 제작해보고 싶네요 :)
                    </Korean>
                    <English>
                        I want to make a great game using CG someday :)
                    </English>
                </Item>
            </List>
            <Gallery images={computerImages}/>
            <Title>
                <Korean>관심사 (음악)</Korean>
                <English>Interests (Music)</English>
            </Title>
            <List>
                <Item>
                    <Korean>
                        취미로 피아노와 기타를 연주합니다.
                        가끔씩 작곡/편곡에도 도전합니다.
                    </Korean>
                    <English>
                        I play piano and guitar as a hobby.
                        Sometimes I also try to compose and arrange music.
                    </English>
                </Item>
                <Item>
                    <Korean>
                        헤비메탈, 재즈, 클래식 음악을 즐겨 듣습니다.
                        다른 장르의 음악들도 종종 들어요.
                    </Korean>
                    <English>
                        I like hearing heavy metal, jazz, and classical music.
                        I also listen to music from other genres.
                    </English>
                </Item>
            </List>
            <Gallery images={musicImages}/>
            <Title>
                <Korean>연락처</Korean>
                <English>Contacts</English>
            </Title>
            <List>
                <Item>
                    <Korean>이메일 1</Korean>
                    <English>Email 1</English>
                    :&nbsp;
                    <Link url={'mailto:95phm@kaist.ac.kr'}>95phm@kaist.ac.kr</Link>
                </Item>
                <Item>
                    <Korean>이메일 2</Korean>
                    <English>Email 2</English>
                    :&nbsp;
                    <Link url={'mailto:mathematicianscott@gmail.com'}>mathematicianscott@gmail.com</Link>
                </Item>
            </List>
        </div>
    );
};

export const AboutApp = () => {
    useEffect(() => {
        document.title = 'About';
    });

    return (
        <ThemeProvider lightColor={'#00e9f9'} darkColor={'#0090ff'}>
            <Content/>
        </ThemeProvider>
    );
};
