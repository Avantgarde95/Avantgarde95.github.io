import React, { Key, ReactNode } from 'react';

import { range } from 'util/MathUtils';

/**
 * Grid props.
 */
interface GridProps {
    cells: Array<[Key, ReactNode]>;
    cellWidth: string;
    cellHeight: string;
    maxDimensionX: number;
    className?: string;
    realCellClassName?: string;
    fakeCellClassName?: string;
}

/**
 * Flexbox-based grid layout.
 */
export const Grid = ({
    cells,
    cellWidth,
    cellHeight,
    maxDimensionX,
    className,
    realCellClassName,
    fakeCellClassName,
}: GridProps) => (
    <div
        className={className}
        style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            justifyContent: 'center',
            maxWidth: `calc(${cellWidth} * ${maxDimensionX})`,
        }}
    >
        {cells.map(([key, cell]) => (
            <div
                className={realCellClassName}
                key={key}
                style={{
                    width: cellWidth,
                    height: cellHeight,
                }}
            >
                {cell}
            </div>
        ))}
        {/* Trick: Put some 'fake' cells to align the 'real' cells to the left side. */}
        {range(0, maxDimensionX).map(value => (
            <div
                className={fakeCellClassName}
                key={value}
                style={{
                    width: cellWidth,
                    height: 0,
                }}
            />
        ))}
    </div>
);
