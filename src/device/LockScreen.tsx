import * as React from 'react';
import { useState } from 'react';
import { css, cx, keyframes } from '@emotion/css';
import { Screen } from './Screen';
import { Hour, Minute, Month, MonthDay, TimeProvider, WeekDay } from './Time';
import { English, Korean } from '../common/Language';

const UnlockAnimation = keyframes({
    '0%': {
        color: 'rgba(255, 255, 255, 1)',
        transform: 'scale(1.0)'
    },
    '100%': {
        color: 'rgba(255, 255, 255, 0)',
        transform: 'scale(0.5)'
    }
});

export const LockScreen = ({ onDisappear = {} as () => void }) => {
    const [isLocked, setIsLocked] = useState(true);
    const longScreenQuery = '@media (min-height: 361px)';

    return (
        <Screen>
            <div
                className={cx(
                    css({
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        width: '100%',
                        height: '100%',
                        color: '#ffffff'
                    }),
                    !isLocked && css({
                        animation: `${UnlockAnimation} 0.5s 1`
                    })
                )}
                onClick={() => {
                    setIsLocked(false);
                    setTimeout(onDisappear, 500);
                }}
            >
                <div className={css({
                    textAlign: 'center',
                    width: '100%',
                    marginTop: '1rem',
                    fontSize: '3rem',
                    [longScreenQuery]: {
                        marginTop: '3rem',
                    }
                })}>
                    <TimeProvider><Hour />:<Minute /></TimeProvider>
                </div>
                <div className={css({
                    textAlign: 'center',
                    width: '100%'
                })}>
                    <TimeProvider><WeekDay />, <Month /> <MonthDay /></TimeProvider>
                </div>
                <div className={css({
                    position: 'absolute',
                    textAlign: 'center',
                    bottom: '1rem',
                    width: '100%',
                    [longScreenQuery]: {
                        bottom: '3rem'
                    }
                })}>
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
