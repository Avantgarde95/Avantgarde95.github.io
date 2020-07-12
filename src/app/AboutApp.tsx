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
        paddingLeft: 0
    }}>
        {children}
    </ul>
);

const Item = ({children = {} as ReactNode}) => (
    <li>
        <span css={{
            marginLeft: '0.5rem',
            marginRight: '0.7rem',
            height: '0.9rem',
            fontSize: '0.6rem'
        }}>
            <Icon definition={faStar}/>
        </span>
        {children}
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
            <Name>
                Hunmin Park
            </Name>
            <div css={{
                marginBottom: '1.5rem'
            }}>
                <LanguageButton language={'Korean'}>한국어</LanguageButton>
                <LanguageButton language={'English'}>English</LanguageButton>
            </div>
            <Title>
                <Korean>관심사 (컴퓨터)</Korean>
                <English>Interests (Computer)</English>
            </Title>
            <List>
                <Item>Real-time global illumination</Item>
                <Item>Collaborative 3D modeling</Item>
                <Item>Augmented reality</Item>
            </List>
            <Title>
                <Korean>관심사 (음악)</Korean>
                <English>Interests (Music)</English>
            </Title>
            <List>
                <Item>Piano, guitar</Item>
                <Item>Heavy metal (nu metal, metalcore, djent), jazz, classical</Item>
            </List>
            <Title>
                <Korean>링크</Korean>
                <English>Links</English>
            </Title>
            <List>
                <Item>
                    Email:&nbsp;
                    <Link url={'mailto:95phm@kaist.ac.kr'}>95phm@kaist.ac.kr</Link>
                </Item>
                <Item>
                    SNS:&nbsp;
                    <Link url={'https://www.youtube.com/user/Scottparkmusic'}>YouTube</Link>,&nbsp;
                    <Link url={'https://www.facebook.com/s.ramanujan'}>Facebook</Link>,&nbsp;
                    <Link url={'https://www.instagram.com/hunminpark95'}>Instagram</Link>
                </Item>
            </List>
        </Language>
    </div>
);
