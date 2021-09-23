import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';

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
    const [language, setLanguage] = useState<'English' | 'Korean'>('Korean');

    const nextLanguage = language === 'English' ? 'Korean' : 'English';
    const languageImage = language === 'English' ? InEnglish : InKorean;

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
                        <Icon definition={faHome} />
                    </button>
                )}
            </div>
        </div>
    );
};
