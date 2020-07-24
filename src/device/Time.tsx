/** @jsx jsx */

import {jsx} from '@emotion/core';
import {createContext, Fragment, ReactNode, useContext, useEffect, useState} from 'react';

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
    'December'
];

const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

function fillZero(value: number, length: number) {
    return `${Math.pow(10, length) + value}`.slice(1);
}

interface Time {
    year: number;
    month: number;
    monthDay: number;
    weekDay: number;
    hour: number;
    minute: number;
}

function getCurrentTime() {
    const date = new Date();

    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        monthDay: date.getDate() - 1,
        weekDay: date.getDay(),
        hour: date.getHours(),
        minute: date.getMinutes()
    } as Time;
}

const TimeContext = createContext({
    year: 0,
    month: 0,
    monthDay: 0,
    weekDay: 0,
    hour: 0,
    minute: 0
} as Time);

export const TimeProvider = ({children = {} as ReactNode}) => {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime);
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <TimeContext.Provider value={time}>
            {children}
        </TimeContext.Provider>
    );
};

export const Hour = () => {
    const hour = useContext(TimeContext).hour % 12;

    return <Fragment>{`${(hour === 0) ? 12 : hour}`}</Fragment>;
};

export const Minute = () => {
    const {minute} = useContext(TimeContext);

    return <Fragment>{`${fillZero(minute, 2)}`}</Fragment>;
};

export const Month = () => {
    const {month} = useContext(TimeContext);

    return <Fragment>{monthNames[month]}</Fragment>;
};

export const MonthDay = () => {
    const {monthDay} = useContext(TimeContext);

    return <Fragment>{`${monthDay + 1}`}</Fragment>;
};

export const WeekDay = () => {
    const {weekDay} = useContext(TimeContext);

    return <Fragment>{dayNames[weekDay]}</Fragment>;
};

export const AMPM = () => {
    const {hour} = useContext(TimeContext);

    return <Fragment>{hour >= 12 ? 'PM' : 'AM'}</Fragment>
};
