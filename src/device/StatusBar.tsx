import * as React from 'react';
import {ReactNode, useContext} from 'react';
import {css} from '@emotion/css';
import {faWifi} from '@fortawesome/free-solid-svg-icons/faWifi';
import {faSignal} from '@fortawesome/free-solid-svg-icons/faSignal';
import {faBatteryFull} from '@fortawesome/free-solid-svg-icons/faBatteryFull';
import {Icon} from './Icon';
import {AMPM, Hour, Minute, TimeProvider} from './Time';
import {English, Korean} from '../common/Language';
import {MediaContext} from '../common/Media';

const LeftArea = ({children = null as ReactNode}) => (
    <div className={css({
        float: 'left',
        height: '100%'
    })}>
        {children}
    </div>
);

const RightArea = ({children = null as ReactNode}) => (
    <div className={css({
        float: 'right',
        height: '100%'
    })}>
        {children}
    </div>
);

const Block = ({children = null as ReactNode}) => (
    <span className={css({
        marginLeft: '0.2rem',
        marginRight: '0.2rem'
    })}>
        {children}
    </span>
);

export const StatusBar = ({showTime = true}) => {
    const {wideScreenQuery} = useContext(MediaContext);

    return (
        <div className={css({
            boxSizing: 'border-box',
            width: '100%',
            height: '2rem',
            paddingLeft: '0.3rem',
            paddingRight: '0.3rem',
            lineHeight: '2rem',
            color: '#ffffff'
        })}>
            <LeftArea>
                <Block>
                    <span className={css({
                        display: 'inline',
                        [wideScreenQuery]: {
                            display: 'none'
                        }
                    })}>
                        <Korean>마이폰</Korean>
                        <English>MyPhone</English>
                    </span>
                    <span className={css({
                        display: 'none',
                        [wideScreenQuery]: {
                            display: 'inline'
                        }
                    })}>
                        <Korean>마이패드</Korean>
                        <English>MyPad</English>
                    </span>
                </Block>
            </LeftArea>
            <RightArea>
                <Block><Icon definition={faWifi}/></Block>
                <Block><Icon definition={faSignal}/></Block>
                <Block><Icon definition={faBatteryFull}/></Block>
                {showTime && <Block><TimeProvider><Hour/>:<Minute/> <AMPM/></TimeProvider></Block>}
            </RightArea>
        </div>
    );
};
