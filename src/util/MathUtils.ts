/**
 * Generate an array [a1, a2, ..., an] such that
 * - a1 = start
 * - a(n + 1) = an + step
 * - start <= an < limit
 */
export function range(start: number, limit: number, step = 1) {
    const result: number[] = [];

    for (let i = start; i < limit; i += step) {
        result.push(i);
    }

    return result;
}

/**
 * Generate a random real number such that min <= value < limit.
 */
export function getRandomFloat(min: number, limit: number) {
    return Math.random() * (limit - min) + min;
}

/**
 * Generate a random integer such that min <= value < limit.
 * min and limit should be **integers**.
 */
export function getRandomInt(min: number, limit: number) {
    return Math.floor(Math.random() * (limit - min)) + min; // 최댓값은 제외, 최솟값은 포함
}

/**
 * Format the number to the given length by putting zeros at the left.
 * ex. value = 2, length = 3 -> '002'
 */
export function fillZero(value: number, length: number) {
    return `${10 ** length + value}`.slice(1);
}

/**
 * Compute the sum of the values.
 */
export function sum<T>(values: Array<T>, job: (value: T) => number) {
    return values.reduce((result, value) => result + job(value), 0);
}
