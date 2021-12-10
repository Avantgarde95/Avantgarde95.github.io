import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { AppProps } from 'next/app';
import 'react-avant/lib/index.css';

import { store } from 'store/Store';
import { timeSlice } from 'store/Time';
import { StatusBar } from 'component/StatusBar';
import { NavigationBar } from 'component/NavigationBar';
import 'style/Global.scss';
import styles from 'style/Page.module.scss';

// Start the clock.
setInterval(() => {
    store.dispatch(timeSlice.actions.updateTime());
}, 10000);

/**
 * Common component which wraps the current page.
 */
const App = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <Head>
            <link
                rel={'stylesheet'}
                href={'https://fonts.googleapis.com/css2?family=Inconsolata&family=Noto+Sans+KR&display=swap'}
            />
        </Head>
        <div className={styles.page}>
            <StatusBar showTime />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
            <NavigationBar showNavigators />
        </div>
    </Provider>
);

export default App;