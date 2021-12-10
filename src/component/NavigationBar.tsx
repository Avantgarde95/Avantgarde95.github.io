import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import { useRouter } from 'next/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';

import { useStoreDispatch, useStoreSelector } from 'store/Store';
import { Language, languageSlice } from 'store/Language';
import styles from 'style/NavigationBar.module.scss';

/**
 * NavigationBar props.
 */
interface Props {
    showNavigators: boolean;
}

/**
 * Component which represents the (virtual) buttons at the bottom of the phone(tablet).
 */
export const NavigationBar = ({ showNavigators }: Props) => {
    const router = useRouter();
    const currentLanguage = useStoreSelector(state => state.language.currentLanguage);
    const dispatch = useStoreDispatch();

    const nextLanguage: Language = currentLanguage === 'Korean' ? 'English' : 'Korean';
    const languageSymbol = currentLanguage === 'Korean' ? '가' : 'A';

    const onClickLanguage = () => {
        dispatch(languageSlice.actions.setLanguage({ language: nextLanguage }));
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
                className={styles.languageButton}
                type={'button'}
                title={`To ${nextLanguage}`}
                aria-label={`To ${nextLanguage}`}
                onClick={onClickLanguage}
            >
                {languageSymbol}
            </button>
            {showNavigators && (
                <button
                    className={styles.button}
                    type={'button'}
                    title={'Home'}
                    onClick={onClickHome}
                >
                    <Icon definition={faSquare} />
                </button>
            )}
            {showNavigators && (
                <button
                    className={styles.button}
                    type={'button'}
                    title={'Back'}
                    onClick={onClickBack}
                >
                    <Icon definition={faChevronLeft} />
                </button>
            )}
        </div>
    );
};
