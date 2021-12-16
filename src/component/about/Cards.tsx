import React, { ReactNode } from 'react';

import styles from 'style/about/Card.module.scss';

export const cardNames = ['Me', 'Computer', 'Music'] as const;

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
                <img src={'/image/Me.jpg'} alt={'Me'} />
                Me
            </>
        ),
    },
    Computer: {
        className: styles.computerCard,
        render: () => <>Computer</>,
    },
    Music: {
        className: styles.musicCard,
        render: () => <>Music</>,
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
    const ref = (element: HTMLDivElement | null) => {
        if (focus) {
            element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
    };

    const card = cardMap[name];

    return (
        <div className={card.className} ref={ref}>
            {card.render()}
        </div>
    );
};
