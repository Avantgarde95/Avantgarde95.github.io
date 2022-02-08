import React from 'react';

import { Language } from 'store/Language';
import { useStoreSelector } from 'store/Store';
import { LanguagePicker } from 'component/common/Language';

/**
 * Current hour.
 */
export const Hour = () => {
    const currentTime = useStoreSelector(state => state.time.currentTime);
    const ampmHour = currentTime.hour % 12;

    return <>{`${ampmHour === 0 ? 12 : ampmHour}`}</>;
};

/**
 * Current minute.
 */
export const Minute = () => {
    const currentTime = useStoreSelector(state => state.time.currentTime);

    return <>{`${currentTime.minute}`.padStart(2, '0')}</>;
};

/**
 * Current month.
 */
export const Month = () => {
    const currentTime = useStoreSelector(state => state.time.currentTime);

    return <>{`${currentTime.month + 1}`.padStart(2, '0')}</>;
};

/**
 * Current day.
 */
export const MonthDay = () => {
    const currentTime = useStoreSelector(state => state.time.currentTime);

    return <>{`${currentTime.monthDay + 1}`.padStart(2, '0')}</>;
};

const dayNames: Array<Record<Language, string>> = [
    { Korean: '일요일', English: 'Sunday' },
    { Korean: '월요일', English: 'Monday' },
    { Korean: '화요일', English: 'Tuesday' },
    { Korean: '수요일', English: 'Wednesday' },
    { Korean: '목요일', English: 'Thursday' },
    { Korean: '금요일', English: 'Friday' },
    { Korean: '토요일', English: 'Saturday' },
];

/**
 * Current week of day.
 */
export const WeekDay = () => {
    const currentTime = useStoreSelector(state => state.time.currentTime);

    return <LanguagePicker languageMap={dayNames[currentTime.weekDay]} />;
};

/**
 * Whether the current time is before noon or after noon.
 */
export const AMPM = () => {
    const currentTime = useStoreSelector(state => state.time.currentTime);

    return <>{currentTime.hour >= 12 ? 'PM' : 'AM'}</>;
};
