import React, { Fragment } from 'react';

import { answerMap, questionMap, Topic } from 'component/about/Topic';
import { Chat } from 'component/about/Chat';
import { TextMessage } from 'component/about/Message';
import { Delay } from 'component/common/Delay';
import { Korean, English } from 'component/common/Language';
import styles from 'style/about/Chats.module.scss';

/**
 * Chats props.
 */
interface Props {
    writtenTopics: Array<Topic>;
}

/**
 * Shows currently stacked chats.
 * (KakaoTalk-like UI)
 */
export const Chats = ({ writtenTopics }: Props) => (
    <div className={styles.chats}>
        <Chat>
            <TextMessage>
                <Korean>안녕하세요, 박훈민입니다.</Korean>
                <English>Hello, my name is Hunmin Park.</English>
            </TextMessage>
        </Chat>
        {writtenTopics.map((topic, index) => (
            // We include the index in the key
            // since the user can ask the same question multiple times.
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={`${index}-${topic}`}>
                <Chat isMe>
                    <TextMessage isMe>{questionMap[topic]}</TextMessage>
                </Chat>
                <Delay delay={600}>
                    <Chat>{answerMap[topic]}</Chat>
                </Delay>
            </Fragment>
        ))}
    </div>
);
