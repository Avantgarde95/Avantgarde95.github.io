import React from 'react';

import { useTime } from 'store/Time';

/**
 * Format the number to the given length by putting zeros at the left.
 * ex. value = 2, length = 3 -> '002'
 */
function fillZero(value: number, length: number) {
    return `${10 ** length + value}`.slice(1);
}

/**
 * Current hour.
 */
export const Hour = () => {
    const { currentTime } = useTime();

    return <>{`${currentTime.hour === 0 ? 12 : currentTime.hour}`}</>;
};

/**
 * Current minute.
 */
export const Minute = () => {
    const { currentTime } = useTime();

    return <>{`${fillZero(currentTime.minute, 2)}`}</>;
};

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
];

/**
 * Current month.
 */
export const Month = () => {
    const { currentTime } = useTime();

    return <>{monthNames[currentTime.month]}</>;
};

/**
 * Current day.
 */
export const MonthDay = () => {
    const { currentTime } = useTime();

    return <>{`${currentTime.monthDay + 1}`}</>;
};

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/**
 * Current week of day.
 */
export const WeekDay = () => {
    const { currentTime } = useTime();

    return <>{dayNames[currentTime.weekDay]}</>;
};

/**
 * Whether the current time is before noon or after noon.
 */
export const AMPM = () => {
    const { currentTime } = useTime();

    return <>{currentTime.hour >= 12 ? 'PM' : 'AM'}</>;
};
