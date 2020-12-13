/** @jsx jsx */

import {jsx} from '@emotion/core';
import {useState} from 'react';
import {Screen} from './Screen';
import {Hour, Minute, Month, MonthDay, TimeProvider, WeekDay} from './Time';
import {English, Korean} from '../common/Language';

export const LockScreen = ({onDisappear = {} as () => void}) => {
    const [color, setColor] = useState('rgba(255, 255, 255, 1)');
    const longScreenQuery = '@media (min-height: 361px)';

    return (
        <Screen>
            <div
                css={{
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                    color: color,
                    transition: 'color 0.25s'
                }}
                onClick={() => {
                    setColor('rgba(255, 255, 255, 0)');
                    setTimeout(onDisappear, 250);
                }}
            >
                <div css={{
                    textAlign: 'center',
                    width: '100%',
                    marginTop: '1rem',
                    fontSize: '3rem',
                    [longScreenQuery]: {
                        marginTop: '3rem',
                    }
                }}>
                    <TimeProvider><Hour/>:<Minute/></TimeProvider>
                </div>
                <div css={{
                    textAlign: 'center',
                    width: '100%'
                }}>
                    <TimeProvider><WeekDay/>, <Month/> <MonthDay/></TimeProvider>
                </div>
                <div css={{
                    position: 'absolute',
                    textAlign: 'center',
                    bottom: '1rem',
                    width: '100%',
                    [longScreenQuery]: {
                        bottom: '3rem'
                    }
                }}>
                    <Korean>
                        클릭해서 잠금해제
                    </Korean>
                    <English>
                        Click anywhere to unlock
                    </English>
                </div>
            </div>
        </Screen>
    );
};
