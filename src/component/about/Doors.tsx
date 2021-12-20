import React, { memo } from 'react';
import classNames from 'classnames';

import { getRandomInt } from 'util/MathUtils';
import styles from 'style/about/Doors.module.scss';

/**
 * Data for constructing each door.
 */
interface Door {
    type: 'Top' | 'Bottom';
    x: number;
    y: number;
    width: number;
    height: number;
}

/**
 * Doors props.
 */
interface Props {
    // Since the component is wrapped with React.memo(), only this value can
    // re-render the component.
    renderCount: number;
}

/**
 * Collection of the 'doors'.
 * We split the area into 4 parts('doors') and animate them.
 *
 * +---+----+
 * |   |    |
 * +---+    |
 * |   |    |
 * |   +----+
 * |   |    |
 * +---+----+
 */
// Hack: Use React.memo() from preventing the component from being re-rendered when the parent is re-rendered.
export const Doors = memo(({ renderCount }: Props) => {
    const randomMin = 30;
    const randomMax = 70;

    const topLeftWidth = getRandomInt(randomMin, randomMax + 1);
    const topLeftHeight = getRandomInt(randomMin, randomMax + 1);
    const topRightHeight = 100 - topLeftHeight;

    const doorStyles: Array<Door> = [
        // Top-left.
        { type: 'Top', x: 0, y: 0, width: topLeftWidth, height: topLeftHeight },
        // Bottom-left.
        { type: 'Bottom', x: 0, y: topLeftHeight, width: topLeftWidth, height: 100 - topLeftHeight },
        // Top-right.
        { type: 'Top', x: topLeftWidth, y: 0, width: 100 - topLeftWidth, height: topRightHeight },
        // Bottom-right.
        { type: 'Bottom', x: topLeftWidth, y: topRightHeight, width: 100 - topLeftWidth, height: 100 - topRightHeight },
    ];

    return (
        renderCount > 0 && (
            <>
                {doorStyles.map(({ type, x, y, width, height }) => (
                    <div
                        key={`${x}-${y}-${width}-${height}`}
                        className={classNames(
                            styles.door,
                            { [styles.isTop]: type === 'Top' },
                            { [styles.isBottom]: type === 'Bottom' }
                        )}
                        style={{
                            top: `${y}%`,
                            left: `${x}%`,
                            width: `${width}%`,
                            height: `${height}%`,
                        }}
                    />
                ))}
            </>
        )
    );
});
