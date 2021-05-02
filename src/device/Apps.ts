import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
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
import { faFileCode } from '@fortawesome/free-solid-svg-icons/faFileCode';

export interface App {
    koreanName: string;
    englishName: string;
    path: string;
    icon: IconDefinition;
    color: string;
}

export const apps = [
    {
        koreanName: '소개',
        englishName: 'About',
        path: 'about',
        icon: faIdCard,
        color: '#007aeb'
    },
    {
        koreanName: '이력',
        englishName: 'CV',
        path: 'cv',
        icon: faFileAlt,
        color: '#aaaaaa'
    },
    {
        koreanName: '포트폴리오',
        englishName: 'Portfolio',
        path: 'portfolio',
        icon: faFileCode,
        color: '#444444'
    },
    {
        koreanName: '프로젝트',
        englishName: 'Projects',
        path: 'project',
        icon: faLaptopCode,
        color: '#876766'
    },
    {
        koreanName: '음악',
        englishName: 'Musics',
        path: 'music',
        icon: faMusic,
        color: '#1cb81d'
    },
    {
        koreanName: '블로그',
        englishName: 'Blog',
        path: 'https://Avantgarde95.github.io/blog',
        icon: faNewspaper,
        color: '#677963'
    },
    {
        koreanName: '코드',
        englishName: 'Code',
        path: 'https://github.com/Avantgarde95/Avantgarde95.github.io',
        icon: faCode,
        color: '#a4b353'
    },
    {
        koreanName: '깃허브',
        englishName: 'GitHub',
        path: 'https://github.com/Avantgarde95',
        icon: faGithub,
        color: '#211f1f'
    },
    {
        koreanName: '유튜브',
        englishName: 'YouTube',
        path: 'https://www.youtube.com/user/Scottparkmusic',
        icon: faYoutube,
        color: '#ff0000'
    },
    {
        koreanName: '페이스북',
        englishName: 'Facebook',
        path: 'https://www.facebook.com/s.ramanujan',
        icon: faFacebookSquare,
        color: '#3b5998'
    },
    {
        koreanName: '인스타그램',
        englishName: 'Instagram',
        path: 'https://www.instagram.com/hunminpark95',
        icon: faInstagram,
        color: '#c13584'
    }
];
