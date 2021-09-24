import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';

import { Language, useLanguage } from 'store/Language';
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
    const { currentLanguage, setLanguage } = useLanguage();

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
                        setLanguage(nextLanguage);
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
