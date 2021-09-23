import React from 'react';
import { render } from 'react-dom';

import { Device } from 'component/device/Device';
import 'style/Page.scss';

// Remove the temporary elements.
// NodeList.forEach() is not supported in the old browsers, so we use Array.prototype.forEach() instead.
Array.prototype.forEach.call(document.querySelectorAll('.Temporary'), element => {
    element.parentNode?.removeChild(element);
});

render(<Device />, document.querySelector('.Root'));
