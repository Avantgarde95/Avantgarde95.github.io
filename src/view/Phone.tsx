/** @jsx jsx */

import {jsx} from "@emotion/core";
import {StatusBar} from './StatusBar';
import {NavigationBar} from './NavigationBar';

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
        <div css={{
            width: '100%',
            height: 'calc(100% - 4.5rem)'
        }}>

        </div>
        <NavigationBar/>
    </div>
);
