/* eslint-disable no-console */

/**
 * Check whether the application is built in the development mode.
 */
export function isDevelopmentMode() {
    return process.env.NODE_ENV === 'development';
}

/**
 * Wrapper of console.log().
 * Prints only when the application is built in the development mode.
 */
export function dLog(...args: unknown[]) {
    if (isDevelopmentMode()) {
        console.log(...args);
    }
}

/**
 * Wrapper of console.warn().
 * Prints only when the application is built in the development mode.
 */
export function dWarn(...args: unknown[]) {
    if (isDevelopmentMode()) {
        console.warn(...args);
    }
}

/**
 * Wrapper of console.error().
 * Prints only when the application is built in the development mode.
 */
export function dError(...args: unknown[]) {
    if (isDevelopmentMode()) {
        console.error(...args);
    }
}
