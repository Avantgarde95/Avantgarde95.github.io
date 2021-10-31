import { createSlice } from '@reduxjs/toolkit';

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
function getCurrentTime(): Time {
    const date = new Date();

    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        monthDay: date.getDate() - 1,
        weekDay: date.getDay(),
        hour: date.getHours(),
        minute: date.getMinutes(),
    };
}

/**
 * Store related to the current time.
 */
export interface TimeState {
    currentTime: Time;
}

const initialState: TimeState = {
    currentTime: getCurrentTime(),
};

export const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
        updateTime: state => {
            state.currentTime = getCurrentTime();
        },
    },
});
