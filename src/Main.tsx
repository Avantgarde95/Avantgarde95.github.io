/** @jsx jsx */

import './Polyfill';

import {Global, jsx} from '@emotion/core';
import {useState} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {StatusBar} from './device/StatusBar';
import {HomeScreen} from './device/HomeScreen';
import {NotFoundScreen} from './device/NotFoundScreen';
import {AppScreen} from './device/AppScreen';
import {AboutApp} from './app/AboutApp';
import {CVApp} from './app/CVApp';
import {UnfinishedApp} from './app/UnfinishedApp';
import {LockScreen} from './device/LockScreen';
import {NavigationBar} from './device/NavigationBar';
import {ProjectApp} from './app/ProjectApp';

const DeviceRoutes = () => useRoutes([
    {path: '/', element: <HomeScreen/>},
    {path: '/about', element: <AppScreen><AboutApp/></AppScreen>},
    {path: '/cv', element: <AppScreen><CVApp/></AppScreen>},
    {path: '/blog', element: <AppScreen><UnfinishedApp/></AppScreen>},
    {path: '/project', element: <AppScreen><ProjectApp/></AppScreen>},
    {path: '*', element: <NotFoundScreen/>}
]);

const Device = () => {
    const [isLocked, setLock] = useState(true);

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

render(<Device/>, document.body);
