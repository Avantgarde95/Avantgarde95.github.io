import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { English, Korean } from 'component/common/Language';
import styles from 'style/about/Chat.module.scss';

/**
 * Chat props.
 */
interface Props {
    messages: Array<ReactNode>;
    images: Array<string>;

    // User's chat -> true.
    // Computer's chat -> false.
    isMe: boolean;
}

/**
 * Represents each row which contains...
 * - Profile image
 * - Nickname
 * - Messages
 * - Images
 */
export const Chat = ({ messages, images, isMe }: Props) => {
    const onRenderRef = (element: HTMLDivElement | null) => {
        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={classNames(styles.chat, { [styles.isMe]: isMe })} ref={onRenderRef}>
            {!isMe && <div className={styles.profile} />}
            <div className={styles.chatContent}>
                {!isMe && (
                    <div className={styles.nickname}>
                        <Korean>박훈민</Korean>
                        <English>Hunmin Park</English>
                    </div>
                )}
                {messages.map((message, index) => (
                    // We have nothing that can be used as a key other than the index...
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index} className={classNames(styles.message, { [styles.isMe]: isMe })}>
                        <div className={styles.messageContent}>{message}</div>
                    </div>
                ))}
                {images.map(image => (
                    <img key={image} className={styles.image} src={image} alt={image} title={image} />
                ))}
            </div>
        </div>
    );
};
