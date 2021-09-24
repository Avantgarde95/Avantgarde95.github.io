import { derived, readable } from 'svelte/store';

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
 * Format the number to the given length by putting zeros at the left.
 * ex. value = 2, length = 3 -> '002'
 */
function fillZero(value: number, length: number) {
    return `${10 ** length + value}`.slice(1);
}

export const currentTime = readable(getCurrentTime(), set => {
    const clock = setInterval(() => {
        set(getCurrentTime());
    }, 10000);

    return () => {
        clearInterval(clock);
    };
});

export const currentHour = derived(
    currentTime,
    $currentTime => `${$currentTime.hour === 0 ? 12 : $currentTime.hour}`
);

export const currentMinute = derived(
    currentTime,
    $currentTime => `${fillZero($currentTime.minute, 2)}`
);

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

export const currentMonth = derived(
    currentTime,
    $currentTime => monthNames[$currentTime.month]
);

export const currentMonthDay = derived(
    currentTime,
    $currentTime => `${$currentTime.monthDay + 1}`
);

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const currentWeekDay = derived(
    currentTime,
    $currentTime => dayNames[$currentTime.weekDay]
);

export const currentAMPM = derived(
    currentTime,
    $currentTime => $currentTime.hour >= 12 ? 'PM' : 'AM'
);
