/** @jsx jsx */

import {jsx} from '@emotion/core';
import {ReactNode} from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {Icon} from './Icon';

const Background = require('../image/AboutAppBackground');

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
    <a target={'_blank'} rel={'noopener noreferrer'} href={url}>
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
        background: `url(${Background}) repeat`,
        color: '#000000'
    }}>
        <div css={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            marginBottom: '1.3rem'
        }}>
            Hunmin Park
        </div>
        <Title>Education</Title>
        <List>
            <Item>2018 ~ Present: M.S., School of Computing (전산학부), KAIST</Item>
            <Item>2013 ~ 2018: B.S., School of Computing (전산학부) and Department of Mathematical Sciences (수리과학과),
                KAIST</Item>
        </List>
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