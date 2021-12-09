import React from 'react';
import { AppProps } from 'next/app';
import 'react-avant/lib/index.css';

import { StatusBar } from 'component/StatusBar';
import 'style/Global.scss';
import styles from 'style/Page.module.scss';

/**
 * Common component which wraps the current page.
 */
const App = ({ Component, pageProps }: AppProps) => (
    <div className={styles.page}>
        <StatusBar showTime />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
    </div>
);

export default App;
