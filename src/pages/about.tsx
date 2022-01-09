import React, { useState } from 'react';
import { Icon } from 'react-avant/lib/Icon';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight';

import { range } from 'util/MathUtils';
import { articles } from 'component/about/Articles';
import styles from 'style/about/Page.module.scss';

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
