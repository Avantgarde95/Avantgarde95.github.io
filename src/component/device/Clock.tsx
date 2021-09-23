import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

/**
 * Format the number to the given length by putting zeros at the left.
 * ex. value = 2, length = 3 -> '002'
 */
function fillZero(value: number, length: number) {
    return `${10 ** length + value}`.slice(1);
}

/**
 * Representation of a moment.
 */
interface Time {
    year: number;
    month: number;
    monthDay: number;
    weekDay: number;
    hour: number;
    minute: number;
}

/**
 * Get the current time.
 */
function getCurrentTime() {
    const date = new Date();

    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        monthDay: date.getDate() - 1,
        weekDay: date.getDay(),
        hour: date.getHours(),
        minute: date.getMinutes(),
    } as Time;
}

const TimeContext = createContext({
    year: 0,
    month: 0,
    monthDay: 0,
    weekDay: 0,
    hour: 0,
    minute: 0,
} as Time);

/**
 * ClockProvider props.
 */
interface ClockProviderProps {
    children?: ReactNode;
}

/**
 * React provider which runs the timer and re-render the clock components.
 */
export const ClockProvider = ({ children = null }: ClockProviderProps) => {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime);
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    });

    return <TimeContext.Provider value={time}>{children}</TimeContext.Provider>;
};

/**
 * Current hour.
 */
export const Hour = () => {
    const hour = useContext(TimeContext).hour % 12;

    return <>{`${hour === 0 ? 12 : hour}`}</>;
};

/**
 * Current minute.
 */
export const Minute = () => {
    const { minute } = useContext(TimeContext);

    return <>{`${fillZero(minute, 2)}`}</>;
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
    const { month } = useContext(TimeContext);

    return <>{monthNames[month]}</>;
};

/**
 * Current day.
 */
export const MonthDay = () => {
    const { monthDay } = useContext(TimeContext);

    return <>{`${monthDay + 1}`}</>;
};

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/**
 * Current week of day.
 */
export const WeekDay = () => {
    const { weekDay } = useContext(TimeContext);

    return <>{dayNames[weekDay]}</>;
};

/**
 * Whether the current time is before noon or after noon.
 */
export const AMPM = () => {
    const { hour } = useContext(TimeContext);

    return <>{hour >= 12 ? 'PM' : 'AM'}</>;
};
