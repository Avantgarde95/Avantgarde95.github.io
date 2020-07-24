/** @jsx jsx */

import {jsx} from '@emotion/core';
import {useEffect} from 'react';

export const CVApp = () => {
    useEffect(() => {
        document.title = 'CV';
    });

    return (
        <iframe
            css={{
                border: 'none',
                width: '100%',
                height: '100%',
                backgroundColor: '#d1d1d1'
            }}
            src={'https://drive.google.com/file/d/1_SuQg0TrQjYRTmmI-Jv9UsbO6slMCaSP/preview'}
            width={'100%'}
            height={'100%'}
        />
    );
};
