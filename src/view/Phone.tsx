/** @jsx jsx */

import {jsx} from '@emotion/core';
import {StatusBar} from './StatusBar';
import {NavigationBar} from './NavigationBar';
import {HomeScreen} from './HomeScreen';

export const Phone = () => (
    <div css={{
        overflowY: 'hidden',
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: '#000000'
    }}>
        <StatusBar/>
        <HomeScreen/>
        <NavigationBar/>
    </div>
);
