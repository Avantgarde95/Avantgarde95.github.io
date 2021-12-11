import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { AppProps } from 'next/app';
import 'react-avant/lib/index.css';

import { store } from 'store/Store';
import { timeSlice } from 'store/Time';
import { StatusBar } from 'component/device/StatusBar';
import { NavigationBar } from 'component/device/NavigationBar';
import 'style/device/Global.scss';
import styles from 'style/device/Device.module.scss';

// Start the clock.
setInterval(() => {
    store.dispatch(timeSlice.actions.updateTime());
}, 10000);

/**
 * Represents a 'device'. (ex. Virtual tablet & phone)
 * Common component which wraps the current page.
 */
const Device = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <Head>
            <link
                rel={'stylesheet'}
                href={'https://fonts.googleapis.com/css2?family=Inconsolata&family=Noto+Sans+KR&display=swap'}
            />
        </Head>
        <div className={styles.device}>
            <StatusBar />
            <div className={styles.content}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
            </div>
            <NavigationBar />
        </div>
    </Provider>
);

export default Device;
