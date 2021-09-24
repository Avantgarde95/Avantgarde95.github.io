import { StrictReducer } from 'store/Common';

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
 * State related to the current time.
 */
export interface TimeState {
    currentTime: Time;
}

export const timeActions = {
    updateTime: 'time/SET_TIME',
} as const;

export const timeActionCreators = {
    updateTime: () => ({
        type: timeActions.updateTime,
    }),
} as const;

const timeReducers: StrictReducer<TimeState, typeof timeActionCreators> = (
    state = { currentTime: getCurrentTime() },
    action
) => {
    switch (action.type) {
        case timeActions.updateTime:
            return { currentTime: getCurrentTime() };
        default:
            return state;
    }
};

export default timeReducers;
