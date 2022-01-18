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

import { Language } from 'store/Language';

/**
 * Data of each internal or external page.
 */
export interface VirtualApp {
    nameMap: Record<Language, string>;
    path: string;
    icon: IconDefinition;
    color: string;
}

export const apps: VirtualApp[] = [
    {
        nameMap: { Korean: '소개', English: 'About' },
        path: '/about',
        icon: faIdCard,
        color: '#4ca9fe',
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
        color: '#ac9292',
    },
    {
        nameMap: { Korean: '음악', English: 'Musics' },
        path: '/music',
        icon: faMusic,
        color: '#1cb81d',
    },
    {
        nameMap: { Korean: '블로그', English: 'Blog' },
        path: 'https://Avantgarde95.github.io/blog',
        icon: faNewspaper,
        color: '#a2b09f',
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
        color: '#f0f6fc',
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
        color: '#1877f2',
    },
    {
        nameMap: { Korean: '인스타그램', English: 'Instagram' },
        path: 'https://www.instagram.com/hunminpark95',
        icon: faInstagram,
        color: '#d1599d',
    },
];
