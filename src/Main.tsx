/** @jsx jsx */

import './Polyfill';

import {Global, jsx} from '@emotion/core';
import {useState} from 'react';
import {render} from 'react-dom';
import {HashRouter, useRoutes} from 'react-router-dom';
import {StatusBar} from './view/StatusBar';
import {HomeScreen} from './view/HomeScreen';
import {NotFoundScreen} from './view/NotFoundScreen';
import {AppScreen} from './view/AppScreen';
import {AboutApp} from './view/AboutApp';
import {CVApp} from './view/CVApp';
import {UnfinishedApp} from './view/UnfinishedApp';
import {LockScreen} from './view/LockScreen';
import {NavigationBar} from './view/NavigationBar';

const DeviceRoutes = () => useRoutes([
    {path: '/', element: <HomeScreen/>},
    {path: '/About', element: <AppScreen><AboutApp/></AppScreen>},
    {path: '/CV', element: <AppScreen><CVApp/></AppScreen>},
    {path: '/Blog', element: <AppScreen><UnfinishedApp/></AppScreen>},
    {path: '/Lab', element: <AppScreen><UnfinishedApp/></AppScreen>},
    {path: '/Code', element: <AppScreen><UnfinishedApp/></AppScreen>},
    {path: '*', element: <NotFoundScreen/>}
]);

const Device = () => {
    const [isLocked, setLock] = useState(true);

    return (
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
                <StatusBar showTime={!isLocked}/>
                {
                    isLocked && <LockScreen onDisappear={() => {
                        setLock(false);
                    }}/>
                }
                {!isLocked && <DeviceRoutes/>}
                {!isLocked && <NavigationBar/>}
            </div>
        </HashRouter>
    );
};

render(<Device/>, document.body);
