/** @jsx jsx */

import {jsx} from '@emotion/core';
import {useEffect} from 'react';
import {faWrench} from '@fortawesome/free-solid-svg-icons/faWrench';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {Icon} from '../device/Icon';
import {English, Korean} from '../common/Language';

export const UnfinishedApp = () => {
    useEffect(() => {
        document.title = 'Under construction!';
    });

    return (
        <div css={{
            display: 'table',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            color: '#ffffff',
            backgroundColor: '#202020'
        }}>
        <span css={{
            display: 'table-cell',
            verticalAlign: 'middle'
        }}>
            <span css={{
                marginBottom: '2rem',
                fontSize: '1.5rem'
            }}>
                <Korean>
                    제작중입니다! <Icon definition={faHome}/>을 눌러 돌아가세요.
                </Korean>
                <English>
                    Under construction! Click <Icon definition={faHome}/> to return.
                </English>
            </span>
            <br/>
            <span css={{
                fontSize: '4rem'
            }}>
                <Icon definition={faWrench}/>
            </span>
        </span>
        </div>
    );
};
