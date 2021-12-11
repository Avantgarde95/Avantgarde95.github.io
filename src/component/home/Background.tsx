import React from 'react';
import { Icon } from 'react-avant/lib/Icon';
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar';

import { getRandomFloat, getRandomInt, range } from 'util/MathUtils';
import styles from 'style/home/Background.module.scss';

export const Background = () => {
    return (
        <div className={styles.background}>
            {range(0, getRandomInt(5, 8)).map(index => (
                <div
                    key={index}
                    className={styles.star}
                    style={{
                        top: `${getRandomFloat(10, 90)}%`,
                        left: `${getRandomFloat(10, 90)}%`,
                        animationDelay: `${getRandomFloat(0, 3)}s`,
                    }}
                >
                    <Icon definition={faStar} />
                </div>
            ))}
        </div>
    );
};
