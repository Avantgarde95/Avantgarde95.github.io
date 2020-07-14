/** @jsx jsx */

import {css, jsx} from '@emotion/core';
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

export const NavigationBar = () => {
    const navigate = useNavigate();

    const buttonStyle = css({
        cursor: 'pointer',
        display: 'inline-block',
        transition: 'all 0.1s',
        width: '3rem',
        height: '2.5rem',
        border: 'none',
        lineHeight: '2.5rem',
        fontSize: '1.5rem',
        color: '#ffffff',
        backgroundColor: 'transparent',
        '&:hover, &:active, &:focus': {
            transform: 'scale(0.9)'
        }
    });

    return (
        <div css={{
            display: 'table',
            width: '100%'
        }}>
            <Cell>
                <button css={buttonStyle} title={'Back'} onClick={() => {
                    navigate('..');
                }}>
                    <Icon definition={faArrowLeft}/>
                </button>
            </Cell>
            <Cell>
                <a
                    css={buttonStyle}
                    title={'GitHub'}
                    tabIndex={0}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    href={'https://github.com/Avantgarde95'}
                >
                    <Icon definition={faGithub}/>
                </a>
            </Cell>
            <Cell>
                <button css={buttonStyle} title={'Home'} onClick={() => {
                    navigate('/', {replace: true});
                }}>
                    <Icon definition={faHome}/>
                </button>
            </Cell>
        </div>
    );
};
