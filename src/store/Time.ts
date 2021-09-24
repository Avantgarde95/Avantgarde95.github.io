import create from 'zustand';

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
export interface TimeStore {
    currentTime: Time;
    updateTime: () => void;
}

export const useTime = create<TimeStore>(set => ({
    currentTime: getCurrentTime(),
    updateTime: () => set({ currentTime: getCurrentTime() }),
}));
