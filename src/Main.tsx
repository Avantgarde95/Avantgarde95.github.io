// We need to apply the polyfills before loading the libraries.
import 'util/Polyfill';

import React from 'react';
import { render } from 'react-dom';

import { store } from 'store/Store';
import { timeSlice } from 'store/Time';
import { Device } from 'component/device/Device';
import { isDevelopmentMode } from 'util/DebugUtils';
import 'style/Page.scss';

// Enable Preact devtools in the development mode.
if (isDevelopmentMode()) {
    // eslint-disable-next-line global-require
    require('preact/debug');
}

// Remove the temporary elements.
const temporaryArea = document.querySelector('.Temporary');
temporaryArea?.parentNode?.removeChild(temporaryArea);

// Update the time every 30 seconds.
setInterval(() => {
    store.dispatch(timeSlice.actions.updateTime());
}, 30000);

render(<Device />, document.querySelector('.Root'));
