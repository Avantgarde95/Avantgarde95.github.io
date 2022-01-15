import React from 'react';

import { questionMap, Topic, topics } from 'component/about/Topic';
import styles from 'style/about/Questions.module.scss';

/**
 * Sender props.
 */
interface Props {
    onSend: (topic: Topic) => void;
}

/**
 * Component for 'sending' the questions.
 */
export const Questions = ({ onSend }: Props) => (
    <div className={styles.questions}>
        {topics.map(topic => (
            <button
                className={styles.question}
                key={topic}
                type={'button'}
                onClick={() => {
                    onSend(topic);
                }}
            >
                {questionMap[topic]}
            </button>
        ))}
    </div>
);
