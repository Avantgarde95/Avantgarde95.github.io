// Apply the polyfills for older browsers (ex. IE).
import 'util/Polyfills';

import Device from 'component/device/Device.svelte';

// Remove the temporary elements.
const temporaryArea = document.querySelector('.Temporary');
temporaryArea?.parentNode?.removeChild(temporaryArea);

// Render the application.
new Device({
    target: document.querySelector('.Root')!!
});
