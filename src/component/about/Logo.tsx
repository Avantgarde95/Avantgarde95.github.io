import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment';

import styles from 'style/about/Logo.module.scss';

/**
 * KakaoTalk-like logo.
 */
export const Logo = () => (
    <>
        <span className={styles.icon}>
            <Icon definition={faComment} />
        </span>
        <span className={styles.name}>MyTalk</span>
    </>
);
