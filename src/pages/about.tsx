import React, { Fragment, useState } from 'react';

import { LanguageFilter } from 'component/common/LanguageFilter';
import { Chat } from 'component/about/Chat';
import { answerMap, questionMap, Topic, topics } from 'component/about/Question';
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
            <div className={styles.chats}>
                <Chat
                    isMe={false}
                    messages={[
                        <>
                            <LanguageFilter language={'Korean'}>안녕하세요, 박훈민입니다.</LanguageFilter>
                            <LanguageFilter language={'English'}>Hello, my name is Hunmin Park.</LanguageFilter>
                        </>,
                    ]}
                />
                {writtenTopics.map((topic, index) => (
                    // We include the index in the key
                    // since the user can ask the same question multiple times.
                    // eslint-disable-next-line react/no-array-index-key
                    <Fragment key={`${index}-${topic}`}>
                        <Chat isMe messages={[questionMap[topic]]} />
                        <Chat isMe={false} messages={answerMap[topic]} />
                    </Fragment>
                ))}
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
