import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';

import { useStoreDispatch, useStoreSelector } from 'store/Store';
import { Language, languageSlice } from 'store/Language';
import styles from 'style/device/NavigationBar.module.scss';

/**
 * Component which represents the (virtual) buttons at the bottom of the phone(tablet).
 */
export const NavigationBar = () => {
    const router = useRouter();
    const currentLanguage = useStoreSelector(state => state.language.currentLanguage);
    const dispatch = useStoreDispatch();

    const languageSymbols: Array<[Language, string]> = [
        ['Korean', '가'],
        ['English', 'A'],
    ];

    const onClickLanguage = () => {
        dispatch(
            languageSlice.actions.setLanguage({
                language: currentLanguage === 'Korean' ? 'English' : 'Korean',
            })
        );
    };

    const onClickHome = () => {
        router.push('/');
    };

    const onClickBack = () => {
        router.back();
    };

    return (
        <div className={styles.navigationBar}>
            <button
                className={styles.button}
                type={'button'}
                title={'언어 변경 Change language'}
                onClick={onClickLanguage}
            >
                {languageSymbols.map(([language, symbol]) => (
                    <span
                        key={language}
                        className={classNames(styles.language, { [styles.isSelected]: currentLanguage === language })}
                    >
                        {symbol}
                    </span>
                ))}
            </button>
            <button className={styles.button} type={'button'} title={'홈 Home'} onClick={onClickHome}>
                <Icon definition={faHome} />
            </button>
            <button className={styles.button} type={'button'} title={'뒤로 Back'} onClick={onClickBack}>
                <Icon definition={faChevronLeft} />
            </button>
        </div>
    );
};
