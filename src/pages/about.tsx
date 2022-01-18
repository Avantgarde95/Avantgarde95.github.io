import React, { useState } from 'react';

import { Topic } from 'model/about/Topic';
import { Logo } from 'component/about/Logo';
import { Chats } from 'component/about/Chats';
import { Questions } from 'component/about/Questions';
import styles from 'style/about/Page.module.scss';

/**
 * 'About' page.
 */
const Page = () => {
    const [writtenTopics, setWrittenTopics] = useState<Array<Topic>>([]);

    const onSend = (topic: Topic) => {
        setWrittenTopics([...writtenTopics, topic]);
    };

    return (
        <div className={styles.page}>
            <div className={styles.chatsArea}>
                <Logo />
                <Chats writtenTopics={writtenTopics} />
            </div>
            <Questions onSend={onSend} />
        </div>
    );
};

export default Page;
