import './Polyfill';

import * as React from 'react';
import {Component, ErrorInfo, ReactNode, useEffect} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {css} from '@emotion/css';
import {StatusBar} from './device/StatusBar';
import {NavigationBar} from './device/NavigationBar';
import {LanguageProvider} from './common/Language';
import {AlertApp} from './app/AlertApp';
import {HomeScreen} from './device/HomeScreen';
import {AboutApp} from './app/AboutApp';
import {CVApp} from './app/CVApp';
import {ProjectApp} from './app/ProjectApp';
import {MusicApp} from './app/MusicApp';
import {MediaProvider} from './common/Media';

import './Luminous.css';

/*
const UnfinishedApp = () => (
    <AlertApp
        koreanMessage={'제작중입니다!'}
        englishMessage={'Under construction!'}
    />
);
*/

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

const Redirector = ({path = ''}) => {
    useEffect(() => {
        window.location.href = path;
    });

    return null;
};

class ErrorHandler extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor({children = null}) {
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

const Device = () => (
    <BrowserRouter>
        <div className={css({
            overflowY: 'hidden',
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            backgroundColor: '#000000'
        })}>
            <LanguageProvider>
                <MediaProvider>
                    <StatusBar showTime={true}/>
                    <SafeRoutes routes={[
                        {path: '/', element: <HomeScreen/>},
                        {path: 'about', element: <AboutApp/>},
                        {path: 'cv', element: <CVApp/>},
                        {path: 'project', element: <ProjectApp/>},
                        {path: 'music', element: <MusicApp/>},
                        {path: 'c3dmb', element: <Redirector path={'https://avantgarde95.github.io/C3DMB'}/>},
                        {path: '*', element: <NotFoundApp/>}
                    ]}/>
                    <NavigationBar showNavigators={true}/>
                </MediaProvider>
            </LanguageProvider>
        </div>
    </BrowserRouter>
);

const temporaryElements = document.getElementsByClassName('Temporary');

while (temporaryElements.length > 0) {
    temporaryElements[0]?.parentNode?.removeChild(temporaryElements[0]);
}

render(<Device/>, document.body);
