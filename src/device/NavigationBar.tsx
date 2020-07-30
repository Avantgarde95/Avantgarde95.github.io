/** @jsx jsx */

import {css, jsx} from '@emotion/core';
import {ReactNode, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {Icon} from './Icon';
import {English, Korean, LanguageContext} from '../app/Language';

const Cell = ({children = {} as ReactNode}) => (
    <span css={{
        display: 'table-cell',
        textAlign: 'center'
    }}>
        {children}
    </span>
);

const InKorean = require('./image/InKorean');
const InEnglish = require('./image/InEnglish');

export const NavigationBar = () => {
    const navigate = useNavigate();
    const {changeLanguage} = useContext(LanguageContext);

    const buttonStyle = css({
        cursor: 'pointer',
        display: 'inline-block',
        verticalAlign: 'middle',
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

    const languageButtonStyle = css([buttonStyle, {
        backgroundSize: 'auto 1.8rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }]);

    return (
        <div css={{
            display: 'table',
            width: '100%'
        }}>
            <Cell>
                <button
                    css={buttonStyle}
                    title={'Back'}
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <Icon definition={faArrowLeft}/>
                </button>
            </Cell>
            <Cell>
                <English>
                    <button
                        css={[languageButtonStyle, {
                            backgroundImage: `url(${InEnglish})`
                        }]}
                        title={'To Korean'}
                        onClick={() => {
                            changeLanguage('Korean');
                        }}
                    />
                </English>
                <Korean>
                    <button
                        css={[languageButtonStyle, {
                            backgroundImage: `url(${InKorean})`
                        }]}
                        title={'To English'}
                        onClick={() => {
                            changeLanguage('English');
                        }}
                    />
                </Korean>
            </Cell>
            <Cell>
                <button
                    css={buttonStyle}
                    title={'Home'}
                    onClick={() => {
                        navigate('/', {replace: true});
                    }}
                >
                    <Icon definition={faHome}/>
                </button>
            </Cell>
        </div>
    );
};
