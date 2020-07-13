/** @jsx jsx */

import {jsx} from '@emotion/core';
import {createContext, Fragment, ReactNode, useContext, useState} from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {Icon} from '../device/Icon';

const Background = require('./image/Guitar');

const LanguageContext = createContext({
    currentLanguage: 'English',
    changeLanguage: (newLanguage: string) => {
    }
});

const Language = ({children = {} as ReactNode}) => {
    const [language, setLanguage] = useState('English');

    return (
        <LanguageContext.Provider value={{
            currentLanguage: language,
            changeLanguage: (newLanguage: string) => {
                setLanguage(newLanguage);
            }
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

const Name = ({children = {} as ReactNode}) => (
    <div css={{
        fontWeight: 'bold',
        fontSize: '1.8rem',
        marginBottom: '1.3rem'
    }}>
        {children}
    </div>
);

const LanguageButton = ({language = '', children = {} as ReactNode}) => {
    const changeLanguage = useContext(LanguageContext).changeLanguage;

    return (
        <button
            css={{
                cursor: 'pointer',
                width: '5.7rem',
                margin: 0,
                lineHeight: '1.5rem',
                color: '#ffffff',
                textShadow: '0 0 2px #0090ff, 0 0 4px #00f9f5',
                boxShadow: '0 0 2px #0090ff, 0 0 4px #00f9f5',
                background: 'none',
                border: 'solid 1px #ffffff',
                borderRadius: 0,
                '&:hover, &:active, &:focus': {
                    border: 'solid 1px #0090ff',
                    color: '#0090ff'
                }
            }}
            title={language}
            onClick={() => {
                changeLanguage(language);
            }}
        >
            {children}
        </button>
    );
};

const Korean = ({children = {} as ReactNode}) => (
    <Fragment>
        {useContext(LanguageContext).currentLanguage === 'Korean' && children}
    </Fragment>
);

const English = ({children = {} as ReactNode}) => (
    <Fragment>
        {useContext(LanguageContext).currentLanguage === 'English' && children}
    </Fragment>
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
            color: '#00f9f5',
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

export const AboutApp = () => (
    <div css={{
        overflowY: 'auto',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        padding: '1.5rem',
        color: '#ffffff',
        textShadow: '0 0 2px #0090ff, 0 0 4px #00f9f5',
        background: `#000000 url(${Background}) no-repeat center`
    }}>
        <Language>
            <Name>Hunmin Park</Name>
            <div css={{
                marginBottom: '1.5rem'
            }}>
                <LanguageButton language={'Korean'}>한국어</LanguageButton>
                <LanguageButton language={'English'}>English</LanguageButton>
            </div>
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
                    <English>I'm interested in computer graphics, especially real-time rendeing, 3D modeling, augmented
                        reality(AR), and virtual reality(VR).</English>
                </Item>
                <Item>
                    <Korean>
                        언젠가 CG 기술을 활용하여 멋진 게임을 제작해보고 싶네요 :)
                    </Korean>
                    <English>
                        I want to make a great game using CG technology someday :)
                    </English>
                </Item>
            </List>
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
            <Title>
                <Korean>링크</Korean>
                <English>Links</English>
            </Title>
            <List>
                <Item>
                    <Korean>이메일</Korean>
                    <English>Email</English>
                    :&nbsp;
                    <Link url={'mailto:95phm@kaist.ac.kr'}>95phm@kaist.ac.kr</Link>
                </Item>
                <Item>
                    SNS:&nbsp;
                    <Link url={'https://www.youtube.com/user/Scottparkmusic'}>
                        <Korean>유튜브</Korean>
                        <English>YouTube</English>
                    </Link>
                    ,&nbsp;
                    <Link url={'https://www.facebook.com/s.ramanujan'}>
                        <Korean>페이스북</Korean>
                        <English>Facebook</English>
                    </Link>
                    ,&nbsp;
                    <Link url={'https://www.instagram.com/hunminpark95'}>
                        <Korean>인스타그램</Korean>
                        <English>Instagram</English>
                    </Link>
                </Item>
            </List>
        </Language>
    </div>
);
