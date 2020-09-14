/** @jsx jsx */

import './Polyfill';

import {Global, jsx} from '@emotion/core';
import {Component, ErrorInfo, ReactNode, useState} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {StatusBar} from './device/StatusBar';
import {LockScreen} from './device/LockScreen';
import {NavigationBar} from './device/NavigationBar';
import {LanguageProvider} from './common/Language';
import {AlertApp} from './app/AlertApp';
import {HomeScreen} from './device/HomeScreen';
import {AboutApp} from './app/AboutApp';
import {CVApp} from './app/CVApp';
import {ProjectApp} from './app/ProjectApp';

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

class ErrorHandler extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor({children = {}}) {
        super({children});
        this.state = {hasError: false};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({hasError: true}, () => {
            console.error(error?.toString());
            console.error(errorInfo?.componentStack);
        });
    }

    render() {
        return this.state.hasError ? <ErrorApp/> : this.props.children;
    }
}

const SafeRoutes = (
    {routes = [] as { path: string, element: ReactNode }[]}
) => useRoutes(routes.map(({path, element}, index) => (
    {path: path, element: <ErrorHandler key={index}>{element}</ErrorHandler>}
)));

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
                    {!isLocked && (
                        <SafeRoutes routes={[
                            {path: '/', element: <HomeScreen/>},
                            {path: 'about', element: <AboutApp/>},
                            {path: 'cv', element: <CVApp/>},
                            {path: 'project', element: <ProjectApp/>},
                            {path: 'music', element: <UnfinishedApp/>},
                            {path: '*', element: <NotFoundApp/>}
                        ]}/>
                    )}
                    <NavigationBar showNavigators={!isLocked}/>
                </LanguageProvider>
            </div>
        </BrowserRouter>
    );
};

render(<Device/>, document.body);
