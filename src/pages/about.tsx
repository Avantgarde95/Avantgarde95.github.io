import React, { Fragment, useState } from 'react';

import { English, Korean } from 'component/common/Language';
import { Delay } from 'component/common/Delay';
import { Logo } from 'component/about/Logo';
import { Chat } from 'component/about/Chat';
import { answerMap, questionMap, Topic, topics } from 'component/about/Question';
import { TextMessage } from 'component/about/Message';
import styles from 'style/about/Page.module.scss';

/**
 * 'About' page.
 * It shows a simple typewriter animation on each line.
 */
const Page = () => {
    const [writtenTopics, setWrittenTopics] = useState<Array<Topic>>([]);

    const onClickQuestion = (topic: Topic) => {
        setWrittenTopics([...writtenTopics, topic]);
    };

    return (
        <div className={styles.page}>
            <div className={styles.chatsArea}>
                <Logo />
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
            </div>
            <div className={styles.questions}>
                {topics.map(topic => (
                    <button
                        className={styles.question}
                        key={topic}
                        type={'button'}
                        onClick={() => {
                            onClickQuestion(topic);
                        }}
                    >
                        {questionMap[topic]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Page;
