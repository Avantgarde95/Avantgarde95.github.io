/** @jsx jsx */

import {jsx} from '@emotion/core';
import {App} from './App';
import {ThemeContext, ThemeProvider} from './Theme';
import {useContext} from 'react';
import {English, Korean} from '../common/Language';

const Background = require('./image/EighthNotes');

const Content = () => {
    const theme = useContext(ThemeContext);

    return (
        <div css={[theme.textStyle, {
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            padding: '1.5rem',
            background: `#000000 url(${Background}) no-repeat center`
        }]}>
            <div css={{
                fontWeight: 'bold',
                fontSize: '1.8rem',
                lineHeight: 1,
                marginBottom: '1.5rem'
            }}>
                <Korean>음악</Korean>
                <English>Musics</English>
            </div>
        </div>
    );
};

export const MusicApp = () => (
    <App koreanTitle={'음악'} englishTitle={'Musics'}>
        <ThemeProvider lightColor={'#77ff00'} darkColor={'#21d948'}>
            <Content/>
        </ThemeProvider>
    </App>
);
