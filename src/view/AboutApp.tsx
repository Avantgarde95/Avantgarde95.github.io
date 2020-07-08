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
        <Title>About</Title>
        <List>
            <Item>Name: Hunmin Park</Item>
            <Item>Country: South Korea</Item>
        </List>
        <Title>Education</Title>
        <List>
            <Item>2013 ~ 2018: BS, Computer science & Mathematics, KAIST</Item>
            <Item>2018 ~ Present: MS, Computer science, KAIST</Item>
        </List>
        <Title>Interests</Title>
        <List>
            <Item>Computer graphics</Item>
            <Item>Programming language</Item>
            <Item>Front-end web application</Item>
            <Item>Mobile application</Item>
            <Item>Music (Piano, Guitar)</Item>
        </List>
        <Title>Contact</Title>
        <List>
            <Item>Email: 95phm@kaist.ac.kr</Item>
        </List>
    </div>
);
