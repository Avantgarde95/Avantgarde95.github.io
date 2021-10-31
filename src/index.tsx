// Polyfills for IE11.
import 'core-js/es/symbol/iterator';
import 'core-js/es/string/starts-with';
import 'core-js/es/string/ends-with';
import 'core-js/es/object/assign';

import React from 'react';
import { render } from 'react-dom';

import { Device } from 'component/device/Device';
import { isDevelopmentMode } from 'util/DebugUtils';
import 'style/Page.scss';

// Enable Preact devtools in the development mode.
if (isDevelopmentMode()) {
    // eslint-disable-next-line global-require
    require('preact/debug');
}

// Remove the temporary elements.
const temporaryElements = document.querySelectorAll('.temporary');

for (let i = 0; i < temporaryElements.length; i += 1) {
    temporaryElements[i].parentNode?.removeChild(temporaryElements[i]);
}

render(<Device />, document.querySelector('.root'));
