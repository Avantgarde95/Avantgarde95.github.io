/** @jsx jsx */

import * as React from 'react';
import {jsx} from '@emotion/core';
import {Icon} from './Icon';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';

const Cell: React.FC = props => (
    <span css={{
        display: 'table-cell',
        textAlign: 'center'
    }}>
        {props.children}
    </span>
);

const Button: React.FC = props => (
    <span css={{
        display: 'inline-block',
        cursor: 'pointer',
        transition: 'all 0.1s',
        width: '3rem',
        webkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
        '&:hover, &:active': {
            transform: 'scale(0.9)'
        }
    }}>
        {props.children}
    </span>
);

export const NavigationBar = () => (
    <div css={{
        display: 'table',
        width: '100%',
        height: '2.5rem',
        lineHeight: '2.5rem',
        fontSize: '1.5rem',
        color: '#ffffff'
    }}>
        <Cell><Button><Icon definition={faArrowLeft}/></Button></Cell>
        <Cell><Button><Icon definition={faGithub}/></Button></Cell>
        <Cell><Button><Icon definition={faHome}/></Button></Cell>
    </div>
);
