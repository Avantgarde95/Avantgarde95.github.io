import React, { useState } from 'react';
import { Icon } from 'react-avant/lib/Icon';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight';

import { range } from 'util/MathUtils';
import { WrappedLink } from 'component/common/WrappedLink';
import styles from 'style/about/Page.module.scss';

const AboutArticle = () => (
    <div className={styles.article}>
        <div className={styles.line}>안녕하세요, 박훈민입니다.</div>
        <div className={styles.line}>Hello, I&apos;m Hunmin Park.</div>
    </div>
);

const ComputerArticle = () => (
    <div className={styles.article}>
        <div className={styles.gallery}>
            <img className={styles.image} src={'/image/RayTracing.png'} alt={'RayTracing'} title={'RayTracing'} />
            <img className={styles.image} src={'/image/Code.png'} alt={'Code'} title={'Code'} />
        </div>
        <div className={styles.line}>개발자로 일하고 있습니다.</div>
        <div className={styles.line}>3D와 웹에 관심이 있습니다.</div>
        <div className={styles.line}>I&apos;m working as a developer.</div>
        <div className={styles.line}>I&apos;m interested in 3D and web.</div>
    </div>
);

const MusicArticle = () => (
    <div className={styles.article}>
        <div className={styles.gallery}>
            <img className={styles.image} src={'/image/Guitar.jpg'} alt={'Guitar'} title={'Guitar'} />
            <img className={styles.image} src={'/image/Concert.jpg'} alt={'Concert'} title={'Concert'} />
        </div>
        <div className={styles.line}>취미로 피아노와 기타를 연주합니다.</div>
        <div className={styles.line}>I play piano and guitar as a hobby.</div>
    </div>
);

const ContactsArticle = () => (
    <div className={styles.article}>
        <div className={styles.line}>이메일 (Email)</div>
        <div className={styles.line}>
            <WrappedLink className={styles.link} href={'mailto:mathematicianscott@gmail.com'}>
                mathematicianscott@gmail.com
            </WrappedLink>
        </div>
    </div>
);

const articles = [AboutArticle, ComputerArticle, MusicArticle, ContactsArticle];

/**
 * 'About' page.
 * It shows a simple typewriter animation on each line.
 */
const Page = () => {
    // State for re-rendering the articles.
    const [showCount, setShowCount] = useState(articles.length);

    const onClickNextButton = () => {
        if (showCount === 1) {
            setShowCount(articles.length);
        } else {
            setShowCount(showCount - 1);
        }
    };

    return (
        <div className={styles.page}>
            {range(0, showCount).map(offset => {
                const Article = articles[articles.length - 1 - offset];

                // We put showCount in the key to force re-rendering of each article
                // to start animation when showCount is changed.
                return <Article key={`${showCount}-${offset}`} />;
            })}
            <button className={styles.nextButton} type={'button'} title={'다음 Next'} onClick={onClickNextButton}>
                <Icon definition={faArrowCircleRight} />
            </button>
        </div>
    );
};

export default Page;
