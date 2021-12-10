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
