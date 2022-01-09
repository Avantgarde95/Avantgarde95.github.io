import React from 'react';

import { WrappedLink } from 'component/common/WrappedLink';
import styles from 'style/about/Articles.module.scss';

const AboutArticle = () => (
    <div className={styles.article}>
        <div className={styles.content}>
            <span className={styles.text}>
                안녕하세요, 박훈민입니다.
                <br />
                Hello, I&apos;m Hunmin Park.
            </span>
        </div>
    </div>
);

const ComputerArticle = () => (
    <div className={styles.article}>
        <div className={styles.content}>
            <div className={styles.gallery}>
                <img className={styles.image} src={'/image/RayTracing.png'} alt={'RayTracing'} title={'RayTracing'} />
                <img className={styles.image} src={'/image/Code.png'} alt={'Code'} title={'Code'} />
            </div>
            <span className={styles.text}>
                개발자로 일하고 있습니다.
                <br />
                3D와 웹에 관심이 있습니다.
                <br />
                I&apos;m working as a developer.
                <br />
                I&apos;m interested in 3D and web.
            </span>
        </div>
    </div>
);

const MusicArticle = () => (
    <div className={styles.article}>
        <div className={styles.content}>
            <div className={styles.gallery}>
                <img className={styles.image} src={'/image/Guitar.jpg'} alt={'Guitar'} title={'Guitar'} />
                <img className={styles.image} src={'/image/Concert.jpg'} alt={'Concert'} title={'Concert'} />
            </div>
            <span className={styles.text}>
                취미로 피아노와 기타를 연주합니다.
                <br />I play piano and guitar as a hobby.
            </span>
        </div>
    </div>
);

const ContactsArticle = () => (
    <div className={styles.article}>
        <div className={styles.content}>
            <span className={styles.text}>이메일 (Email)</span>
            <br />
            <WrappedLink className={styles.link} href={'mailto:mathematicianscott@gmail.com'}>
                mathematicianscott@gmail.com
            </WrappedLink>
        </div>
    </div>
);

export const articles = [AboutArticle, ComputerArticle, MusicArticle, ContactsArticle];
