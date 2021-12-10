import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import 'react-avant/lib/index.css';

import { store } from 'store/Store';
import { timeSlice } from 'store/Time';
import { StatusBar } from 'component/StatusBar';
import { NavigationBar } from 'component/NavigationBar';
import 'style/Global.scss';
import styles from 'style/Page.module.scss';

// Start the timer.
setInterval(() => {
    store.dispatch(timeSlice.actions.updateTime());
}, 10000);

/**
 * Common component which wraps the current page.
 */
const Device = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <div className={styles.page}>
            <StatusBar showTime />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
            <NavigationBar showNavigators />
        </div>
    </Provider>
);

export default Device;
