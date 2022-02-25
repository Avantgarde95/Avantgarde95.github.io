import React from 'react';

import { Topic, topics } from 'model/about/Topic';
import { questionMap } from 'component/about/ElementMaps';
import styles from 'style/about/Questions.module.scss';

/**
 * Sender props.
 */
interface QuestionsProps {
    onSend: (topic: Topic) => void;
}

/**
 * Component for 'sending' the questions.
 */
export const Questions = ({ onSend }: QuestionsProps) => (
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
