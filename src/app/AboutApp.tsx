/** @jsx jsx */

import {jsx} from '@emotion/core';
import {ReactNode} from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {Icon} from '../device/Icon';

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

const Language = ({language = '', children = {} as ReactNode}) => (
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
    >
        {children}
    </button>
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
        <Name>
            Hunmin Park
        </Name>
        <div css={{
            marginBottom: '1.5rem'
        }}>
            <Language language={'Korean'}>한국어</Language>
            <Language language={'English'}>English</Language>
        </div>
        <Title>Interests (Computer)</Title>
        <List>
            <Item>Real-time global illumination</Item>
            <Item>Collaborative 3D modeling</Item>
            <Item>Augmented reality</Item>
        </List>
        <Title>Interests (Music)</Title>
        <List>
            <Item>Piano, guitar</Item>
            <Item>Heavy metal (nu metal, metalcore, djent), jazz, classical</Item>
        </List>
        <Title>Links</Title>
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
    </div>
);
