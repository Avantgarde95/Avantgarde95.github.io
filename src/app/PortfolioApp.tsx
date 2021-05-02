import * as React from 'react';
import { ReactNode, useContext, useState } from 'react';
import { css } from '@emotion/css';
import { App } from './App';
import { ThemeContext, ThemeProvider } from './Theme';
import { ImagePreview, Link, List, ListItem } from './Common';
import { English, Korean } from '../common/Language';

const Project = ({ children = null as ReactNode }) => (
    <div className={css({
        marginBottom: '1.5rem'
    })}>
        {children}
    </div>
);

const Title = ({ children = null as ReactNode }) => (
    <div className={css({
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem'
    })}>
        {children}
    </div>
);

const SectionTitle = ({ children = null as ReactNode }) => (
    <div className={css({
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
    })}>
        {children}
    </div>
);

const Paragraph = ({ children = null as ReactNode }) => (
    <div className={css({
        marginBottom: '1rem'
    })}>
        {children}
    </div>
);

const imageStyle = css({
    maxWidth: '1024px',
    marginRight: '1rem',
    marginBottom: '1rem'
});

const MyPage = () => (
    <Project>
        <Title>MyPage</Title>
        <Paragraph>
            Link: <Link url={'https://avantgarde95.github.io'} />
            <br />
            Code: <Link url={'https://github.com/Avantgarde95/Avantgarde95.github.io'} />
        </Paragraph>
        <SectionTitle>Concept</SectionTitle>
        <Paragraph>
            <Korean>
                스마트폰 &amp; 태블릿을 컨셉으로 한 개인 홈페이지입니다.
                각종 개인 정보 웹페이지들과 블로그 및 SNS 페이지들을 나열하는 허브 역할을 합니다.
                개인 홈페이지를 '기기'로, 각 웹페이지들을 기기 위의 '앱'으로 비유하였습니다.
            </Korean>
            <English>
                This is a personal homepage with a smartphone &amp; tablet concept.
                It acts as a hub listing my personal information pages, my blog and SNS pages.
                Personal homepage is likened to 'device', and each webpage is compared to 'app' on the device.
            </English>
        </Paragraph>
        <ImagePreview
            className={imageStyle}
            src={require('./image/MyPageConcept.png')}
            alt={'MyPage concept'}
        />
        <SectionTitle>Technologies</SectionTitle>
        <Paragraph>
            <Korean>아래의 기술들을 활용하여 웹페이지를 제작하였습니다.</Korean>
            <English>I created the web page using the following technologies.</English>
            <br />
            <br />
            <Link url={'https://reactjs.org/'}>React.js</Link> (<Link url={'https://preactjs.com/'}>Preact.js</Link>)
            <List>
                <ListItem>
                    <Korean>
                        빠른 웹페이지 로딩을 위하여 React와 인터페이스가 동일하면서 코드의 크기가 더욱 작은 Preact를 활용하였습니다.
                        코드를 React 기준으로 작성하고 Webpack alias를 사용하여 실제로는 Preact가 번들링되도록 하였습니다.
                    </Korean>
                    <English>
                        For faster web page loading, I used Preact, which has the same interface as React and has a smaller code size than React.
                        I wrote the code based on React and used the Webpack alias to actually bundle Preact.
                    </English>
                </ListItem>
                <ListItem>
                    <Korean>Component를 활용하여 이미지, 링크 등 자주 사용되는 view들의 코드 반복을 방지하였습니다.</Korean>
                    <English>I prevented frequently used views such as image and links from code repetition by using component.</English>
                </ListItem>
                <ListItem>
                    <Korean><Link url={'https://reactjs.org/docs/hooks-state.html'}>State</Link>를 활용하여 시계, 프로젝트 갤러리 등 동적인 view들을 구현하였습니다.</Korean>
                    <English>I implemented the dynamic views such as clock and project gallery using <Link url={'https://reactjs.org/docs/hooks-state.html'}>state</Link>.</English>
                </ListItem>
                <ListItem>
                    <Korean><Link url={'https://reactjs.org/docs/context.html'}>Context</Link>를 활용하여 언어, 테마 등의 전역적인 상태들을 구현하였습니다.</Korean>
                    <English>I implemented the global states such as language and themes using <Link url={'https://reactjs.org/docs/context.html'}>context</Link>.</English>
                </ListItem>
            </List>
            <ImagePreview
                className={imageStyle}
                src={require('./image/MyPageLanguageContext.png')}
                alt={'MyPage language context'}
            />
            <br />
            <Link url={'https://reacttraining.com/blog/react-router-v6-pre/'}>React Router</Link>
            <List>
                <ListItem>
                    <Korean>
                        이 사이트에서는 개인 홈페이지와 몇몇 '앱'들의 구현이 하나의 html에 묶여 있습니다.
                        라우팅을 활용하여 각 앱들이 마치 별도의 웹페이지처럼 보이도록 하였습니다.
                    </Korean>
                    <English>
                        In this site, the personal homepage and the implementation of some 'apps' are tied to a single HTML.
                        I made each app to look like a separate web page using routing.
                    </English>
                </ListItem>
                <ListItem>
                    <Korean>라이브러리에서 제공하는 history stack 조작 기능을 사용하여 뒤로 가기, 홈으로 가기 등의 기능들을 구현하였습니다.</Korean>
                    <English>I implemented the features such as go back and go home using the history stack manipulation provided by the library.</English>
                </ListItem>
            </List>
            <ImagePreview
                className={imageStyle}
                src={require('./image/MyPageRouting.png')}
                alt={'MyPage routing'}
            />
            <br />
            <Link url={'https://github.com/node-fetch/node-fetch/'}>Node Fetch</Link>
            <List>
                <ListItem>
                    <Korean>
                        Node.js에서 <Link url={'https://developer.mozilla.org/ko/docs/Web/API/Fetch_API'}>fetch API</Link>를 활용하기 위하여 사용했습니다.
                        fetch()를 활용하여 GitHub에서 프로젝트 목록을 가져오고 YouTube에서 동영상 목록을 가져와서 각각 json으로 저장하는 스크립트를 작성하였습니다.
                    </Korean>
                    <English>
                        I used it to utilize the <Link url={'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'}>fetch API</Link> in Node.js.
                        Using fetch(), I wrote a script which downloads a list of projects from GitHub and a list of videos from YouTube and saves each as json.
                    </English>
                </ListItem>
            </List>
            {/*
                TODO: Emotion, Luminous, Webpack
            */}
        </Paragraph>
    </Project>
);

const Blog = () => (
    <Project>
        <Title>Blog</Title>
        <Paragraph>
            Link: <Link url={'https://avantgarde95.github.io/blog'} />
            <br />
            Code: <Link url={'https://github.com/Avantgarde95/blog'} />
        </Paragraph>
    </Project>
);

const Content = () => {
    const { textStyle } = useContext(ThemeContext);

    return (
        <div className={css([textStyle, {
            overflowY: 'auto',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            padding: '1.5rem'
        }])}>

            <div className={css({
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
            })}>
                Hunmin Park's projects
            </div>
            <div className={css({
                marginBottom: '1rem'
            })}>
                Online version: <Link url={'https://avantgarde95.github.io/portfolio'} />
            </div>
            <MyPage />
            <Blog />
        </div>
    );
};

export const PortfolioApp = () => (
    <App koreanTitle={'포트폴리오'} englishTitle={'Portfolio'}>
        <ThemeProvider lightColor={'#ffffff'} darkColor={'#dddddd'}>
            <Content />
        </ThemeProvider>
    </App>
);
