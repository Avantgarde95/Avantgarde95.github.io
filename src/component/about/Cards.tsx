import React, { ReactNode } from 'react';
import Link from 'next/link';

import styles from 'style/about/Card.module.scss';

export const cardNames = ['Me', 'Computer', 'Music', 'Contacts'] as const;

/**
 * Name of each card, which is used as a key.
 */
type CardName = typeof cardNames[number];

/**
 * Collection of the objects needed for rendering a card.
 */
interface CardInfo {
    className: string;
    render: () => ReactNode;
}

const cardMap: Record<CardName, CardInfo> = {
    Me: {
        className: styles.meCard,
        render: () => (
            <>
                <img className={styles.cardImage} src={'/image/Me.jpg'} alt={'Me'} title={'Me'} width={150} />
                {`안녕하세요, 박훈민입니다.
                Hello, I'm Hunmin Park.

                개발자로 일하고 있습니다.
                I'm working as a developer.

                컴퓨터와 음악에 관심이 많습니다.
                I'm interested in computer and music.`}
            </>
        ),
    },
    Computer: {
        className: styles.computerCard,
        render: () => (
            <>
                <img
                    className={styles.cardImage}
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
    },
    Music: {
        className: styles.musicCard,
        render: () => (
            <>
                <img
                    className={styles.cardImage}
                    src={'/image/Concert.jpg'}
                    alt={'Music'}
                    title={'Music'}
                    width={180}
                />
                {`취미로 피아노와 기타를 연주합니다.
                I play piano and guitar as a hobby.

                가끔씩 작곡과 편곡에도 도전합니다.
                Sometimes I also try to compose and arrange music.`}
            </>
        ),
    },
    Contacts: {
        className: styles.contactsCard,
        render: () => (
            <>
                이메일(Email):&nbsp;
                <Link href={'mailto:mathematicianscott@gmail.com'}>
                    <a>mathematicianscott@gmail.com</a>
                </Link>
            </>
        ),
    },
};

/**
 * Card props.
 */
interface Props {
    name: CardName;
    focus: boolean;
}

/**
 * 'Card' which shows each section.
 */
export const Card = ({ name, focus }: Props) => {
    const ref = (element: HTMLElement | null) => {
        if (focus) {
            element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
    };

    const card = cardMap[name];

    return (
        <pre className={card.className} ref={ref}>
            {card.render()}
        </pre>
    );
};
