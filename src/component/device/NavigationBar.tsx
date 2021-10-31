import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'react-avant/lib/Icon';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';

import { useStoreDispatch, useStoreSelector } from 'store/Store';
import { Language, languageSlice } from 'store/Language';
import styles from 'style/device/NavigationBar.scss';
import InKorean from 'image/device/InKorean.svg';
import InEnglish from 'image/device/InEnglish.svg';

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
    const navigate = useNavigate();
    const currentLanguage = useStoreSelector(state => state.language.currentLanguage);
    const dispatch = useStoreDispatch();

    const nextLanguage: Language = currentLanguage === 'Korean' ? 'English' : 'Korean';
    const languageImage = currentLanguage === 'Korean' ? InKorean : InEnglish;

    return (
        <div className={styles.navigationBar}>
            <div className={styles.cell}>
                <button
                    className={styles.languageButton}
                    style={{
                        backgroundImage: `url(${languageImage})`,
                    }}
                    type={'button'}
                    title={`To ${nextLanguage}`}
                    aria-label={`To ${nextLanguage}`}
                    onClick={() => {
                        dispatch(languageSlice.actions.setLanguage({ language: nextLanguage }));
                    }}
                />
            </div>
            <div className={styles.cell}>
                {showNavigators && (
                    <button
                        className={styles.button}
                        type={'button'}
                        title={'Home'}
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        <Icon definition={faSquare} />
                    </button>
                )}
            </div>
            <div className={styles.cell}>
                {showNavigators && (
                    <button
                        className={styles.button}
                        type={'button'}
                        title={'Back'}
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <Icon definition={faChevronLeft} />
                    </button>
                )}
            </div>
        </div>
    );
};
