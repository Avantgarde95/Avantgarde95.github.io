import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from 'style/about/Message.module.scss';

/**
 * TextMessage props.
 */
interface TextMessageProps {
    // true if the user is the sender.
    isMe?: boolean;
    children: ReactNode;
}

/**
 * Message which consists of the sentences.
 */
export const TextMessage = ({ isMe = false, children }: TextMessageProps) => (
    <div className={classNames(styles.textMessage, { [styles.isMe]: isMe })}>
        <div className={styles.textMessageContent}>{children}</div>
    </div>
);

/**
 * ImageMessage props.
 */
interface ImageMessageProps {
    src: string;
    title: string;
}

/**
 * Message which consists of an image.
 */
export const ImageMessage = ({ src, title }: ImageMessageProps) => (
    <img className={styles.imageMessage} src={src} alt={title} title={title} />
);
