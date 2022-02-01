import React from 'react';

import { strictEntries } from 'util/TypeUtils';
import { ProgrammingLanguage } from 'model/project/Project';
import styles from 'style/project/ProgrammingLanguages.module.scss';

/**
 * ProgrammingLanguages props.
 */
interface Props {
    languageMap: Record<ProgrammingLanguage, number>;
}

/**
 * Table of the programming languages and their usage percentages.
 */
export const ProgrammingLanguages = ({ languageMap }: Props) => {
    const entries = strictEntries(languageMap);
    const valueSum = entries.reduce((result, [, value]) => result + value, 0);

    const percentages = entries
        .map<typeof entries[number]>(([language, value]) => [language, (value / valueSum) * 100])
        .sort(([, value1], [, value2]) => value2 - value1);

    return (
        <div className={styles.table}>
            {percentages.map(([language, percentage]) => (
                <div className={styles.row} key={language}>
                    <span className={styles.languageCell}>{language}</span>
                    <span
                        className={styles.valueCell}
                        style={{
                            backgroundSize: `${percentage}% 80%`,
                        }}
                    >
                        {percentage.toFixed(2)}%
                    </span>
                </div>
            ))}
        </div>
    );
};
