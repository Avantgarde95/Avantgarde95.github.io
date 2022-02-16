import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { English, Korean } from 'component/common/Language';
import styles from 'style/about/Chat.module.scss';

/**
 * Chat props.
 */
interface Props {
    // true if the user is the sender.
    isMe?: boolean;
    children: ReactNode;
}

/**
 * 'Chat' = Profile image + nickname + text messages + image messages
 */
export const Chat = ({ isMe = false, children }: Props) => {
    const onRenderRef = (element: HTMLDivElement | null) => {
        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.chat} ref={onRenderRef}>
            {!isMe && <div className={styles.profile} />}
            <div className={classNames(styles.content, { [styles.isMe]: isMe })}>
                {!isMe && (
                    <div className={styles.nickname}>
                        <Korean>박훈민</Korean>
                        <English>Hunmin Park</English>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
};
