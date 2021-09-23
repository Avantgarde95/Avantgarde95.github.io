import React from 'react';
import { render } from 'react-dom';

import { Device } from 'component/device/Device';
import 'style/Page.scss';

// Remove the temporary elements.
const temporaryArea = document.querySelector('.Temporary');
temporaryArea?.parentNode?.removeChild(temporaryArea);

render(<Device />, document.querySelector('.Root'));
