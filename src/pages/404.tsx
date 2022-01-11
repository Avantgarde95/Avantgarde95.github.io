import React from 'react';

import { Korean, English } from 'component/common/Language';
import styles from 'style/error/Page.module.scss';

const Page = () => (
    <div className={styles.page}>
        <Korean>페이지를 찾을 수 없습니다!</Korean>
        <English>Page not found!</English>
        &nbsp;😿
    </div>
);

export default Page;
