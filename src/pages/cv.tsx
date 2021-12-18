import React from 'react';

import styles from 'style/cv/Page.module.scss';

/**
 * 'CV' page.
 * It just shows the pdf file uploaded on the Google Drive.
 */
const Page = () => (
    <div className={styles.page}>
        <iframe
            className={styles.document}
            title={'CV'}
            src={'https://drive.google.com/file/d/1_SuQg0TrQjYRTmmI-Jv9UsbO6slMCaSP/preview'}
        />
    </div>
);

export default Page;
