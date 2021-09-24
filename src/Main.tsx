// We need to apply the polyfills before loading the libraries.
import 'Polyfill';

import React from 'react';
import { render } from 'react-dom';

import { store } from 'store/Store';
import { timeActions } from 'store/Time';
import { Device } from 'component/device/Device';
import 'style/Page.scss';

// Remove the temporary elements.
const temporaryArea = document.querySelector('.Temporary');
temporaryArea?.parentNode?.removeChild(temporaryArea);

// Update the time every 30 seconds.
setInterval(() => {
    store.dispatch({ type: timeActions.updateTime });
}, 30000);

render(<Device />, document.querySelector('.Root'));
