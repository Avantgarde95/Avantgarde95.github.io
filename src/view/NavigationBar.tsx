/** @jsx jsx */

import {jsx} from '@emotion/core';
import {ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {Icon} from './Icon';

const Cell = ({children = {} as ReactNode}) => (
    <span css={{
        display: 'table-cell',
        textAlign: 'center'
    }}>
        {children}
    </span>
);

const Button = (
    {
        onClick = {} as () => void,
        children = {} as ReactNode
    }
) => (
    <span
        css={{
            display: 'inline-block',
            cursor: 'pointer',
            transition: 'all 0.1s',
            width: '3rem',
            webkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
            '&:hover, &:active': {
                transform: 'scale(0.9)'
            }
        }}
        onClick={() => onClick()}
    >
        {children}
    </span>
);

export const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <div css={{
            display: 'table',
            width: '100%',
            height: '2.5rem',
            lineHeight: '2.5rem',
            fontSize: '1.5rem',
            color: '#ffffff'
        }}>
            <Cell>
                <Button onClick={() => {
                    navigate('..');
                }}>
                    <Icon definition={faArrowLeft}/>
                </Button>
            </Cell>
            <Cell>
                <Button onClick={() => {
                    location.href = 'https://github.com/Avantgarde95';
                }}>
                    <Icon definition={faGithub}/>
                </Button>
            </Cell>
            <Cell>
                <Button onClick={() => {
                    navigate('/', {replace: true});
                }}>
                    <Icon definition={faHome}/>
                </Button>
            </Cell>
        </div>
    );
};
