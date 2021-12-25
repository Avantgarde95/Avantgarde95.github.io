import React from 'react';

import { LanguageFilter } from 'component/common/LanguageFilter';
import styles from 'style/error/Page.module.scss';

const Page = () => (
    <div className={styles.page}>
        <LanguageFilter language={'Korean'}>페이지를 찾을 수 없습니다!</LanguageFilter>
        <LanguageFilter language={'English'}>Page not found!</LanguageFilter>
        &nbsp;😿
    </div>
);

export default Page;
