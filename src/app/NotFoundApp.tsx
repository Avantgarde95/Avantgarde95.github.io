/** @jsx jsx */

import {jsx} from '@emotion/core';
import {useEffect} from 'react';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faSadTear} from '@fortawesome/free-solid-svg-icons/faSadTear';
import {Icon} from '../device/Icon';
import {English, Korean} from '../common/Language';

export const NotFoundApp = () => {
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
                    페이지를 찾을 수 없습니다! <Icon definition={faHome}/>을 눌러 돌아가세요.
                </Korean>
                <English>
                    Page not found! Click <Icon definition={faHome}/> to return.
                </English>
            </span>
            <br/>
            <span css={{
                fontSize: '4rem'
            }}>
                <Icon definition={faSadTear}/>
            </span>
        </span>
        </div>
    );
};
