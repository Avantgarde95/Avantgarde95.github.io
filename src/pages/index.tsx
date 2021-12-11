import React from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faIdCard } from '@fortawesome/free-solid-svg-icons/faIdCard';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';

import { useStoreSelector } from 'store/Store';
import { Language } from 'store/Language';
import { Background } from 'component/home/Background';
import { AppButton } from 'component/home/AppButton';
import { range } from 'util/MathUtils';
import styles from 'style/home/Page.module.scss';

/**
 * Data for constructing each AppButton.
 */
interface App {
    nameMap: Record<Language, string>;
    path: string;
    icon: IconDefinition;
    color: string;
}

const apps: App[] = [
    {
        nameMap: { Korean: '소개', English: 'About' },
        path: '/about',
        icon: faIdCard,
        color: '#007aeb',
    },
    {
        nameMap: { Korean: '이력', English: 'CV' },
        path: '/cv',
        icon: faFileAlt,
        color: '#aaaaaa',
    },
    {
        nameMap: { Korean: '프로젝트', English: 'Projects' },
        path: '/project',
        icon: faLaptopCode,
        color: '#876766',
    },
    {
        nameMap: { Korean: '음악', English: 'Musics' },
        path: '/music',
        icon: faMusic,
        color: '#1cb81d',
    },
    {
        nameMap: { Korean: '블로그', English: 'Blog' },
        path: '/blog',
        icon: faNewspaper,
        color: '#677963',
    },
    {
        nameMap: { Korean: '코드', English: 'Code' },
        path: 'https://github.com/Avantgarde95/Avantgarde95.github.io',
        icon: faCode,
        color: '#a4b353',
    },
    {
        nameMap: { Korean: '깃허브', English: 'GitHub' },
        path: 'https://github.com/Avantgarde95',
        icon: faGithub,
        color: '#211f1f',
    },
    {
        nameMap: { Korean: '유튜브', English: 'YouTube' },
        path: 'https://www.youtube.com/user/Scottparkmusic',
        icon: faYoutube,
        color: '#ff0000',
    },
    {
        nameMap: { Korean: '페이스북', English: 'Facebook' },
        path: 'https://www.facebook.com/s.ramanujan',
        icon: faFacebookSquare,
        color: '#3b5998',
    },
    {
        nameMap: { Korean: '인스타그램', English: 'Instagram' },
        path: 'https://www.instagram.com/hunminpark95',
        icon: faInstagram,
        color: '#c13584',
    },
];

/**
 * 'Home' page.
 * It shows the grid of the app buttons which looks like a phone screen.
 * (Maximum length of a row: 5)
 */
const Page = () => {
    const currentLanguage = useStoreSelector(state => state.language.currentLanguage);

    return (
        <div className={styles.page}>
            <Background />
            <div className={styles.content}>
                <div className={styles.grid}>
                    {apps.map(({ nameMap, path, icon, color }) => (
                        <div key={path} className={styles.cell}>
                            <AppButton title={Object.values(nameMap).join(' ')} path={path} icon={icon} color={color} />
                            {nameMap[currentLanguage]}
                        </div>
                    ))}
                    {/* Put some empty cells to align the buttons to the left. */}
                    {range(0, 5).map(i => (
                        <div key={i} className={styles.cell} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
