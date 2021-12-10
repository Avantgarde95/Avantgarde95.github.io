export function range(start: number, limit: number, step = 1) {
    const result: number[] = [];

    for (let i = start; i < limit; i += step) {
        result.push(i);
    }

    return result;
}
