import React from 'react';
import { render } from 'react-dom';

import { Device } from 'component/device/Device';
import 'style/Page.scss';

// Remove the temporary elements.
document.querySelectorAll('.Temporary').forEach(element => {
    element.parentNode?.removeChild(element);
});

render(<Device />, document.querySelector('.Root'));
