/** @jsx jsx */

import './Polyfill';

import {Global, jsx} from '@emotion/core';
import {render} from 'react-dom';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {StatusBar} from './view/StatusBar';
import {HomeScreen} from './view/HomeScreen';
import {NavigationBar} from './view/NavigationBar';
import {AppScreen} from './view/AppScreen';
import {NotFoundScreen} from './view/NotFoundScreen';

render((
    <HashRouter>
        <Global styles={{
            html: {
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                fontSize: '16px',
                fontFamily: 'sans-serif'
            },
            body: {
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0
            }
        }}/>
        <div css={{
            overflowY: 'hidden',
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            backgroundColor: '#000000'
        }}>
            <StatusBar/>
            <Routes>
                <Route path={'/'} element={<HomeScreen/>}/>
                <Route path={'/App'} element={<AppScreen/>}/>
                <Route path={'*'} element={<NotFoundScreen/>}/>
            </Routes>
            <NavigationBar/>
        </div>
    </HashRouter>
), document.body);
