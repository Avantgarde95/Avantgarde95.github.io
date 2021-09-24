import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';

import { Language, languageActions } from 'store/Language';
import { useStrictDispatch, useStrictSelector } from 'store/Store';
import { Icon } from 'component/common/Icon';
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
    const currentLanguage = useStrictSelector(state => state.language.currentLanguage);
    const dispatch = useStrictDispatch();

    const nextLanguage: Language = currentLanguage === 'Korean' ? 'English' : 'Korean';
    const languageImage = currentLanguage === 'Korean' ? InKorean : InEnglish;

    return (
        <div className={styles.navigationBar}>
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
                        <Icon definition={faArrowLeft} />
                    </button>
                )}
            </div>
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
                        dispatch({ type: languageActions.setLanguage, payload: { language: nextLanguage } });
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
                        <Icon definition={faHome} />
                    </button>
                )}
            </div>
        </div>
    );
};
