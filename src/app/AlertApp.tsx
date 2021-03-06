import * as React from 'react';
import { css } from '@emotion/css';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { Icon } from '../common/Icon';
import { English, Korean } from '../common/Language';
import { App } from './App';

export const AlertApp = ({ koreanMessage = '', englishMessage = '' }) => (
    <App koreanTitle={koreanMessage} englishTitle={englishMessage}>
        <div className={css({
            display: 'table',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            color: '#ffffff',
            backgroundColor: '#202020'
        })}>
            <span className={css({
                display: 'table-cell',
                verticalAlign: 'middle',
                fontSize: '1.5rem'
            })}>
                <Korean>
                    {koreanMessage} <Icon definition={faHome} />을 눌러 돌아가세요.
            </Korean>
                <English>
                    {englishMessage} Click <Icon definition={faHome} /> to return.
            </English>
            </span>
        </div>
    </App>
);
