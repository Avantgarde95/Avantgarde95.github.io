/** @jsx jsx */

import * as React from 'react';
import {createContext, Fragment, useContext, useEffect, useState} from 'react';
import {jsx} from '@emotion/core';

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

class Time {
    year = 0;
    month = 0;
    monthDay = 0;
    weekDay = 0;
    hour = 0;
    minute = 0;
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

const ClockContext = createContext(new Time());

export const Clock: React.FC = props => {
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
        <ClockContext.Provider value={time}>{
            props.children
        }</ClockContext.Provider>
    );
};

export const Hour = () => {
    const hour = useContext(ClockContext).hour % 12;

    return <Fragment>{`${(hour === 0) ? 12 : hour}`}</Fragment>;
};

export const Minute = () => {
    const {minute} = useContext(ClockContext);

    return <Fragment>{`${fillZero(minute, 2)}`}</Fragment>;
};

export const Month = () => {
    const {month} = useContext(ClockContext);

    return <Fragment>{monthNames[month]}</Fragment>;
};

export const MonthDay = () => {
    const {monthDay} = useContext(ClockContext);

    return <Fragment>{`${monthDay + 1}`}</Fragment>;
};

export const WeekDay = () => {
    const {weekDay} = useContext(ClockContext);

    return <Fragment>{dayNames[weekDay]}</Fragment>;
};

export const AMPM = () => {
    const {hour} = useContext(ClockContext);

    return <Fragment>{hour >= 12 ? 'PM' : 'AM'}</Fragment>
};
