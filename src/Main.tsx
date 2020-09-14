/** @jsx jsx */

import './Polyfill';

import {Global, jsx} from '@emotion/core';
import {Component, ErrorInfo, ReactNode, useState} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {StatusBar} from './device/StatusBar';
import {HomeScreen} from './device/HomeScreen';
import {AboutApp} from './app/AboutApp';
import {CVApp} from './app/CVApp';
import {LockScreen} from './device/LockScreen';
import {NavigationBar} from './device/NavigationBar';
import {ProjectApp} from './app/ProjectApp';
import {LanguageProvider} from './common/Language';
import {AlertApp} from './app/AlertApp';

const UnfinishedApp = () => (
    <AlertApp
        koreanMessage={'제작중입니다!'}
        englishMessage={'Under construction!'}
    />
);

const NotFoundApp = () => (
    <AlertApp
        koreanMessage={'페이지를 찾을 수 없습니다!'}
        englishMessage={'Page not found!'}
    />
);

const ErrorApp = () => (
    <AlertApp
        koreanMessage={'에러가 발생했습니다!'}
        englishMessage={'Got an error!'}
    />
);

// TODO: Insert this in the proper position(s).
class ErrorHandler extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor({children = {} as ReactNode}) {
        super({children});
        this.state = {hasError: false};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.warn(error.toString());
        console.warn(errorInfo.componentStack);
        this.setState({hasError: true});
    }

    render() {
        return this.state.hasError ? <ErrorApp/> : this.props.children;
    }
}

const DeviceRoutes = () => useRoutes([
    {path: '/', element: <HomeScreen/>},
    {path: 'about', element: <AboutApp/>},
    {path: 'cv', element: <CVApp/>},
    {path: 'project', element: <ProjectApp/>},
    {path: 'music', element: <UnfinishedApp/>},
    {path: '*', element: <NotFoundApp/>}
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
                <LanguageProvider>
                    <StatusBar showTime={!isLocked}/>
                    {isLocked && (
                        <LockScreen onDisappear={() => {
                            setLock(false);
                        }}/>
                    )}
                    {!isLocked && <DeviceRoutes/>}
                    <NavigationBar showNavigators={!isLocked}/>
                </LanguageProvider>
            </div>
        </BrowserRouter>
    );
};

render(<Device/>, document.body);
