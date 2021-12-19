import React, { ReactNode, useState } from 'react';
import { Icon } from 'react-avant/lib/Icon';
import Link from 'next/link';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight';

import { range } from 'util/MathUtils';
import { Doors } from 'component/about/Doors';
import styles from 'style/about/Page.module.scss';

/**
 * Rendering function of each article.
 */
type Article = () => ReactNode;

const articles: Array<Article> = [
    () => (
        <>
            <img className={styles.image} src={'/image/Me.jpg'} alt={'Me'} title={'Me'} width={150} />
            {`안녕하세요, 박훈민입니다.
            Hello, I'm Hunmin Park.

            개발자로 일하고 있습니다.
            I'm working as a developer.

            컴퓨터와 음악에 관심이 많습니다.
            I'm interested in computer and music.`}
        </>
    ),
    () => (
        <>
            <img
                className={styles.image}
                src={'/image/RayTracing.png'}
                alt={'Computer'}
                title={'Computer'}
                width={180}
            />
            {`컴퓨터 그래픽스와 웹에 관심이 있습니다.
            I'm interested in computer graphics and web.

            현재는 회사에서 웹 앱과 데스크톱 앱을
            개발하고 있습니다.
            I'm currently developing web apps and desktop apps in my company.`}
        </>
    ),
    () => (
        <>
            <img className={styles.image} src={'/image/Concert.jpg'} alt={'Music'} title={'Music'} width={180} />
            {`취미로 피아노와 기타를 연주합니다.
            I play piano and guitar as a hobby.

            가끔씩 작곡과 편곡에도 도전합니다.
            Sometimes I also try to compose and arrange music.`}
        </>
    ),
    () => (
        <>
            이메일(Email):&nbsp;
            <Link href={'mailto:mathematicianscott@gmail.com'}>
                <a>mathematicianscott@gmail.com</a>
            </Link>
        </>
    ),
];

/**
 * 'About' page.
 * When we click the button, the 'doors' are closed and open.
 * While the doors are moving, the article is replaced with the next article.
 */
const Page = () => {
    // State for re-rendering the doors.
    const [renderCount, setRenderCount] = useState(0);

    // State for re-rendering the articles.
    const [showCount, setShowCount] = useState(articles.length);

    const onClickNextButton = () => {
        setRenderCount(renderCount + 1);

        setTimeout(() => {
            if (showCount === 1) {
                setShowCount(articles.length);
            } else {
                setShowCount(showCount - 1);
            }
        }, 1000);
    };

    return (
        <div className={styles.page}>
            {range(0, showCount).map(offset => (
                <div key={offset} className={styles.layer}>
                    <div className={styles.article}>{articles[articles.length - 1 - offset]()}</div>
                </div>
            ))}
            <button className={styles.nextButton} type={'button'} title={'다음 Next'} onClick={onClickNextButton}>
                <Icon definition={faArrowCircleRight} />
            </button>
            <Doors renderCount={renderCount} />
        </div>
    );
};

export default Page;
